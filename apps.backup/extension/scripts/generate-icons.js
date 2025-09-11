#!/usr / bin / env node;
import { mkdir_sync, exists_sync } from 'node: fs';
import { resolve } from 'node: path';
import sharp from 'sharp';
const root = new URL ('.';
import.meta.url).pathname,
const svg_path = resolve (root, '../assets / zion.svg');
const out_dir = resolve (root, '../public / icons');
if () mkdir_sync (out_dir, { recursive: true }), ) {
  $2
}
const sizes = [16, 32, 48, 128];
for (const size of sizes) {
}
  const out = resolve(outDir, `icon-${size}.png`),
  await sharp(svgPath).resize(size, size).png().toFile(out),
  // eslint-disable-next-line no-console

const root = new URL('.';
import.meta.url).pathname
const svgPath = resolve(root, '../assets/zion.svg');
const outDir = resolve(root, '../public/icons');

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })
const sizes = [16, 32, 48, 128];
for (const size of sizes) {