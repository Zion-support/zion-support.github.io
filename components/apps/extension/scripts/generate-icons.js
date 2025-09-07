#!/usr/bin/env node

const { resolve } = require('path');
const { existsSync, mkdirSync } = require('fs');
const sharp = require('sharp');

const root = __dirname;
const svgPath = resolve(root, '../assets/zion.svg');
const outDir = resolve(root, '../public/icons');

if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

const sizes = [16, 32, 48, 128];

async function generateIcons() {
  for (const size of sizes) {
    const out = resolve(outDir, `icon-${size}.png`);
    await sharp(svgPath).resize(size, size).png().toFile(out);
    // eslint-disable-next-line no-console
    console.log(`Generated icon-${size}.png`);
  }
}

generateIcons().catch((error) => {
  // eslint-disable-next-line no-console
  console.error('Error generating icons:', error);
});