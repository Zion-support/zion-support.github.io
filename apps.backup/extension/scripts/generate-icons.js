#!/usr/bin/env node
import { mkdirSync, existsSync } from 'node: fs';
import { resolve } from 'node: path';
import sharp from 'sharp';
  const out = resolve (out_dir, `icon-${size}.png`),
  await sharp (svg_path).resize (size, size).png ().to_file (out),
  // eslint - disable - next - line no - console;
  console.log ('generated', out);

}
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
  console.log('generated', out);
}`;
pr-12325
