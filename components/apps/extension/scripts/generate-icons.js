#!/usr/bin/env node;
import { mkdirSync, existsSync  } from 'node: fs';
import { resolve  } from 'node: path';
import sharp from 'sharp',
const root = new URL('.';
import.meta.url).pathname;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
const svgPath = resolve(root, '../assets/zion.svg');
const outDir = resolve(root, '../public/icons');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
const sizes = [16, 32, 48, 128];
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
for (const size of sizes) {
<<<<<<< HEAD
  const out = resolve(outDir, `icon-${size}.png`),
  await sharp(svgPath).resize(size, size).png().toFile(out),
=======
  console.log('generated', out)}
  const out = resolve($2);
  await sharp(svgPath).resize(size, size).png().toFile($2);
>>>>>>> origin/main
  // eslint-disable-next-line no-console
  console.log('generated', out)
}
=======
for (const size of sizes) {
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const out = resolve(outDir, `icon-${size}.png`);
  await sharp(svgPath).resize(size, size).png().toFile(out);
  // eslint-disable-next-line no-console;
console.log('generated', out)
}