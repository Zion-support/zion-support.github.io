#!/usr/bin/env node

import { resolve } from 'path';
import { existsSync, mkdirSync } from 'fs';
import sharp from 'sharp';

const root = new URL('.', import.meta.url).pathname;
const svgPath = resolve(root, '../assets/zion.svg');
const outDir = resolve(root, '../public/icons');

if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

const sizes = [16, 32, 48, 128];

for (const size of sizes) {
  const out = resolve(outDir, `icon-${size}.png`);
  await sharp(svgPath).resize(size, size).png().toFile(out);
  console.log(`Generated icon-${size}.png`);
}