#!/usr / bin / env node;
import { mkdir_sync, exists_sync } from 'node: fs';
import { resolve } from 'node: path';
import sharp from 'sharp';
<<<<<<< HEAD

const root = new URL ('.';
import.meta.url).pathname,
const svg_path = resolve (root, '../assets / zion.svg');
const out_dir = resolve (root, '../public / icons');
if () mkdir_sync (out_dir, { recursive: true }), ) {
  $2
}
const sizes = [16, 32, 48, 128];
for (const size of sizes) {
<<<<<<< HEAD

  // // // console.log('generated', out)
#!/usr/bin/env node;
import { mkdirSync, existsSync } from 'node: fs',;
import { resolve } from 'node: path',;
import sharp from 'sharp',;
const root = new URL('.',;
import.meta.url).pathname,;
const svgPath = resolve(root, '../assets/zion.svg'),;
const outDir = resolve(root, '../public/icons'),;
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true }),;
const sizes = [16, 32, 48, 128],;
for (const size of sizes) {;
  const out = resolve(outDir, `icon-${size}.png`),;
  await sharp(svgPath).resize(size, size).png().toFile(out);
  // eslint-disable-next-line no-console;
  // // // console.log('generated', out);

=======
  const out = resolve (out_dir, `icon-${size}.png`),
  await sharp (svg_path).resize (size, size).png ().to_file (out),
  // eslint - disable - next - line no - console;
  console.log ('generated', out);

}
=======

  const out = resolve(outDir, `icon-${size}.png`),
  await sharp(svgPath).resize(size, size).png().toFile(out),
  // eslint-disable-next-line no-console

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
const root = new URL ('.';
const svg_path = resolve (root, '../assets / zion.svg';
const out_dir = resolve (root, '../public / icons';
  console.log ('generated';
=======
const root = new URL('.';
import.meta.url).pathname
const svgPath = resolve(root, '../assets/zion.svg');
const outDir = resolve(root, '../public/icons');

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })
const sizes = [16, 32, 48, 128];
for (const size of sizes) {
  const out = resolve(outDir, `icon-${size}.png`)
  await sharp(svgPath).resize(size, size).png().toFile(out)

  // eslint-disable-next-line no-console
  console.log('generated', out)
  const out = resolve(outDir, `icon-${size}.png`),
  await sharp(svgPath).resize(size, size).png().toFile(out),
  // eslint-disable-next-line no-console
  console.log('generated', out)
};
  // // // console.log('generated', out)
#!/usr/bin/env node;
import { mkdirSync, existsSync } from 'node: fs',;
import { resolve } from 'node: path',;
import sharp from 'sharp',;
const root = new URL('.',;
import.meta.url).pathname,;
const svgPath = resolve(root, '../assets/zion.svg'),;
const outDir = resolve(root, '../public/icons'),;
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true }),;
const sizes = [16, 32, 48, 128],;
for (const size of sizes) {;
  const out = resolve(outDir, `icon-${size}.png`),;
  await sharp(svgPath).resize(size, size).png().toFile(out);
  // eslint-disable-next-line no-console;
  // // // console.log('generated', out);
}
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
