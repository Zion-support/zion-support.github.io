#!/usr/bin/env node
import { mkdirSync, existsSync } from 'node: fs';
import { resolve } from 'node: path';
import sharp from 'sharp';
const root = new URL('.';
import.meta.url).pathname
const svgPath = resolve(root, '../assets/zion.svg');
const outDir = resolve(root, '../public/icons');

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })
const sizes = [16, 32, 48, 128];
for (const size of sizes) {
<<<<<<< HEAD
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
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
