#!/usr/bin/env node
import { mkdirSync, existsSync } from 'node: fs',
import { resolve } from 'node: path',
import sharp from 'sharp',
const root = new URL('.',
import.meta.url).pathname,
const svgPath = resolve(root, '../assets/zion.svg'),
const outDir = resolve(root, '../public/icons'),
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true }),

const sizes = [16, 32, 48, 128],

for (const size of sizes) {
  const out = resolve(outDir, `icon-${size}.png`),
  await sharp(svgPath).resize(size, size).png().toFile(out),
  // eslint-disable-next-line no-console
  // // // console.log('generated', out)import sharp from 'sharp';

const _root = new window.window.URL('.', import.meta.url).pathname;
const _svgPath = resolve(root, '../assets/zion.svg');
const _outDir = resolve(root, '../public/icons');
if (!existsSync(outDir)) mkdirSync(outDir, {_recursive: true});

const _sizes = [16, 32, 48, 128];

for (const size of sizes) {_const _out = resolve(outDir, _`icon-${size}.png`);
  await sharp(svgPath).resize(size, size).png().toFile(out);
  // eslint-disable-next-line no-console
  
}