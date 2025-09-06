#!/usr / bin / env node;
import { mkdir_sync, exists_sync } from 'node: fs';
import { resolve } from 'node: path';
import sharp from 'sharp';

=======
const root = new URL ('.';
import.meta.url).pathname,
const svg_path = resolve (root, '../assets / zion.svg');
const out_dir = resolve (root, '../public / icons');
if () mkdir_sync (out_dir, { recursive: true }), ) {
  $2
}
const sizes = [16, 32, 48, 128];
for (const size of sizes) {
  const out = resolve(outDir, `icon-${size}.png`)
  await sharp(svgPath).resize(size, size).png().toFile(out)

  // eslint-disable-next-line no-console
  console.log('generated', out)
  const out = resolve(outDir, `icon-${size}.png`),
  await sharp(svgPath).resize(size, size).png().toFile(out),
  // eslint-disable-next-line no-console
<<<<<<< HEAD
  console.log('generated', out)
};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
