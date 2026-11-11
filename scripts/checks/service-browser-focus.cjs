#!/usr/bin/env node
// Compile the repository design-system CSS with the installed Tailwind packages.
// Exercise the exact category-button classes in a small Chromium focus fixture.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const postcss = require('postcss');
const tailwind = require('@tailwindcss/postcss');
const { chromium } = require('playwright');

async function main() {
  const component = path.resolve(process.argv[2] || 'app/components/ServiceBrowser.tsx');
  const source = fs.readFileSync(component, 'utf8');
  const classes = [...source.matchAll(/className="([^"]+)"/g)]
    .map(match => match[1]).find(value => value.includes('focus-visible:'));
  assert.ok(classes, 'category focus classes must exist');
  const globals = path.resolve('app/globals.css');
  const original = fs.readFileSync(globals, 'utf8');
  assert.ok(original.includes('@import "tailwindcss";'));
  // Explicit candidates avoid scanning the entire application, while the actual
  // globals (including preflight, theme, and body styles) remain in the build.
  const input = original.replace('@import "tailwindcss";', '@import "tailwindcss" source(none);')
    + '\n@source inline(' + JSON.stringify(classes + ' text-white text-slate-500') + ');';
  const css = (await postcss([tailwind({optimize: false})]).process(input, {from: globals})).css;
  const version = require('tailwindcss/package.json').version;
  const pluginVersion = JSON.parse(fs.readFileSync(path.resolve(path.dirname(require.resolve('@tailwindcss/postcss')), '../package.json'), 'utf8')).version;
  const browser = await chromium.launch({headless: true});
  try {
    for (const {forcedColors, colorScheme} of [
      {forcedColors: 'none', colorScheme: 'dark'},
      {forcedColors: 'active', colorScheme: 'light'},
      {forcedColors: 'active', colorScheme: 'dark'},
    ]) {
      const context = await browser.newContext({forcedColors, colorScheme});
      const page = await context.newPage();
      await page.setContent('<!doctype html><html lang="en"><head><title>Category focus CSS regression</title></head><body><main><h3><button type="button"><span class="text-white">Cloud &amp; DevOps</span></button></h3></main></body></html>');
      const button = page.getByRole('button', {name: 'Cloud & DevOps'});
      await button.evaluate((element, names) => {element.className = names;}, classes);
      await page.addStyleTag({content: css});
      await page.keyboard.press('Tab');
      const style = await button.evaluate(element => {
        const value = getComputedStyle(element);
        return {
          focused: document.activeElement === element,
          focusVisible: element.matches(':focus-visible'),
          forced: matchMedia('(forced-colors: active)').matches,
          outlineStyle: value.outlineStyle, outlineWidth: value.outlineWidth,
          outlineOffset: value.outlineOffset, outlineColor: value.outlineColor,
          shadow: value.boxShadow, background: getComputedStyle(document.body).backgroundColor,
          forcedColorAdjust: value.forcedColorAdjust,
        };
      });
      console.log(JSON.stringify({tailwind: version, postcssPlugin: pluginVersion, mode: forcedColors, colorScheme, ...style}));
      assert.equal(style.focused, true);
      assert.equal(style.focusVisible, true);
      assert.equal(style.forced, forcedColors === 'active');
      assert.equal(style.forcedColorAdjust, 'auto', 'honor the user color palette');
      if (forcedColors === 'active') {
        assert.equal(style.shadow, 'none', 'forced colors suppresses the ring shadow');
        assert.equal(style.outlineStyle, 'solid');
        assert.ok(parseFloat(style.outlineWidth) >= 2, 'forced-colors outline must remain at least 2px');
        assert.ok(parseFloat(style.outlineOffset) >= 2);
        assert.notEqual(style.outlineColor, 'rgba(0, 0, 0, 0)');
        assert.notEqual(style.outlineColor, 'transparent');
        // Resolve the browser's system color, including any alpha, against
        // the compiled body background before checking contrast.
        const rgba = color => {
          const match = color.match(/^rgba?\((\d+), (\d+), (\d+)(?:, ([\d.]+))?\)$/);
          assert.ok(match, 'expected a resolved system RGB(A) color: ' + color);
          return [Number(match[1]), Number(match[2]), Number(match[3]), match[4] === undefined ? 1 : Number(match[4])];
        };
        const foreground = rgba(style.outlineColor), background = rgba(style.background);
        assert.equal(background[3], 1);
        assert.ok(foreground[3] > 0, 'outline must not remain transparent');
        const luminance = channels => channels.slice(0, 3).map(v => v / 255)
          .map(v => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)
          .reduce((total, v, i) => total + v * [0.2126, 0.7152, 0.0722][i], 0);
        const blended = foreground.slice(0, 3).map((v, i) => v * foreground[3] + background[i] * (1 - foreground[3]));
        const a = luminance(blended), b = luminance(background);
        const contrast = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
        console.log('forced-colors outline contrast:', contrast.toFixed(2));
        assert.ok(contrast >= 3, 'system outline contrast must be at least 3:1');
      } else {
        assert.notEqual(style.shadow, 'none', 'normal-mode focus ring remains');
      }
      await context.close();
    }
    console.log('PASS: compiled category focus CSS in normal and forced-colors Chromium modes.');
  } finally { await browser.close(); }
}
main().catch(error => {console.error(error); process.exitCode = 1;});
