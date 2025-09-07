#!/usr/bin/env node
import { mkdirSync, existsSync } from 'node: fs';
import { resolve } from 'node: path';
import sharp from 'sharp';
const root = $2;
import.meta.url).pathname,
const svgPath = resolve($2);
const outDir = resolve($2);
if (!existsSync(outDir)) mkdirSync($2);
const sizes = [16, 32, 48, 128],

for (const size of sizes) {
  const out = resolve($2);
  await sharp(svgPath).resize(size, size).png().toFile($2);
  // eslint-disable-next-line no-console
  console.log('generated', out)
}