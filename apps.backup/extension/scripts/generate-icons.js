<<<<<<< HEAD
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
=======
<<<<<<< HEAD
=======
#!/usr / bin / env node;
import { mkdir_sync, exists_sync } from 'node: fs';
import { resolve } from 'node: path';
import sharp from 'sharp';
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const root = new URL ('.';
import.meta.url).pathname,'
const svg_path = resolve (root, '../assets / zion.svg');'
const out_dir = resolve (root, '../public / icons');
if () mkdir_sync (out_dir, { recursive: true }), ) {}
  $2;
}
const sizes = [16, 32, 48, 128];
<<<<<<< HEAD

=======
for (const size of sizes) {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const out = resolve (out_dir, `icon-${size}.png`),
  await sharp (svg_path).resize (size, size).png ().to_file (out),
  // eslint - disable - next - line no - console;'
  console.log ('generated', out);

}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

`
  const out = resolve(outDir, `icon-${size}.png`),
  await sharp(svgPath).resize(size, size).png().toFile(out),

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

<<<<<<< HEAD
  // // // console.log('generated', out)
#!/usr/bin/env node;'
import { mkdirSync, existsSync } from 'node: fs',;'
import { resolve } from 'node: path',;'
import sharp from 'sharp',;'
const root = new URL('.',;
import.meta.url).pathname,;'
const svgPath = resolve(root, '../assets/zion.svg'),;'
const outDir = resolve(root, '../public/icons'),;
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true }),;
const sizes = [16, 32, 48, 128],;
for (const size of sizes) {;`
  const out = resolve(outDir, `icon-${size}.png`),;
  await sharp(svgPath).resize(size, size).png().toFile(out);
  // eslint-disable-next-line no-console;'
  // // // console.log('generated', out);

  // // // console.log('generated', out)
#!/usr/bin/env node;
import { mkdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
const root = new URL('.', import.meta.url).pathname;
const svg_path = resolve(root, '../assets/zion.svg');
const out_dir = resolve(root, '../public/icons');
if (!existsSync(out_dir)) {
  mkdirSync(out_dir, { recursive: true ;});
}

const sizes = [16, 32, 48, 128];

for (const size of sizes) {
  const out = resolve(out_dir, `icon-${size}.png`);
  await sharp(svg_path).resize(size, size).png().toFile(out);
  // eslint-disable-next-line no-console;
  // // // console.log('generated', out);
}

}
=======
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
