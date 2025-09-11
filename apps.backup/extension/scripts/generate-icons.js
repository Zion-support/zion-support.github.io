#!/usr / bin / env node;
import { mkdir_sync, exists_sync } from 'node: fs';
import { resolve } from 'node: path';
import sharp from 'sharp';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const out = resolve (out_dir, `icon-${size}.png`),
  await sharp (svg_path).resize (size, size).png ().to_file (out),
  // eslint - disable - next - line no - console;
  console.log ('generated', out);

}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  const out = resolve(outDir, `icon-${size}.png`),
  await sharp(svgPath).resize(size, size).png().toFile(out),
  // eslint-disable-next-line no-console

<<<<<<< HEAD
const root = new URL('.';
import.meta.url).pathname
const svgPath = resolve(root, '../assets/zion.svg');
const outDir = resolve(root, '../public/icons');

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })
const sizes = [16, 32, 48, 128];
for (const size of sizes) {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
