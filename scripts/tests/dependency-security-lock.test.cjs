const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');

const root = path.resolve(__dirname, '../..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const lock = JSON.parse(fs.readFileSync(path.join(root, 'package-lock.json'), 'utf8'));

function stableAtLeast(version, minimum) {
  const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(version);
  if (!match) return false;
  const parts = match.slice(1).map(Number);
  for (let index = 0; index < minimum.length; index += 1) {
    if (parts[index] !== minimum[index]) return parts[index] > minimum[index];
  }
  return true;
}

test('all locked Storybook copies exclude the known vulnerable 10.x releases', () => {
  const copies = Object.entries(lock.packages).filter(([name]) => name.endsWith('/node_modules/storybook') || name === 'node_modules/storybook');
  assert.ok(copies.length > 0, 'Storybook must remain explicitly locked');
  for (const [name, entry] of copies) {
    assert.ok(stableAtLeast(entry.version, [10, 6, 2]), `${name}@${entry.version} is below the patched release`);
  }
});

test('direct Storybook runtime, CLI, renderer and addon are pinned and aligned', () => {
  const packages = ['storybook', '@storybook/cli', '@storybook/react-vite', '@storybook/addon-links'];
  const version = manifest.devDependencies.storybook;
  assert.match(version, /^\d+\.\d+\.\d+$/, 'Use an explicit stable Storybook version');
  for (const name of packages) {
    assert.equal(manifest.devDependencies[name], version, `${name} manifest version`);
    assert.equal(lock.packages[''].devDependencies[name], version, `${name} lock root version`);
    assert.equal(lock.packages[`node_modules/${name}`].version, version, `${name} resolved version`);
  }
});

test('all locked follow-redirects copies include the cross-realm credential fix', () => {
  const copies = Object.entries(lock.packages).filter(([name]) => name.endsWith('/node_modules/follow-redirects') || name === 'node_modules/follow-redirects');
  assert.ok(copies.length > 0, 'Expected the SendGrid/Axios redirect dependency');
  for (const [name, entry] of copies) {
    assert.ok(stableAtLeast(entry.version, [1, 16, 2]), `${name}@${entry.version} is below the patched release`);
  }
});
// The weekly audit failed after compatible updates on these three advisories.
// Keep older callback-based glob/minimatch consumers outside the modern overrides.
for (const [name, minimum, affectedMajor] of [
  ['glob', [14, 0, 2], 9],
  ['minimatch', [11, 0, 1], 7],
  ['postcss-selector-parser', [6, 1, 5], 0],
]) {
  test(`locked ${name} copies exclude the November audit advisory`, () => {
    const copies = Object.entries(lock.packages).filter(([entry]) => entry.endsWith(`/node_modules/${name}`) || entry === `node_modules/${name}`);
    assert.ok(copies.length > 0, `Expected ${name} in the dependency tree`);
    for (const [entry, details] of copies) {
      const major = Number(details.version.split('.')[0]);
      if (major < affectedMajor) continue;
      const patched = name === 'postcss-selector-parser' && major === 7 ? [7, 1, 6] : minimum;
      assert.ok(stableAtLeast(details.version, patched), `${entry}@${details.version} is below the patched release`);
    }
  });
}
