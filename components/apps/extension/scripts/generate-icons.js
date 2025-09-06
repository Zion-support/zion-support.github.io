#!/usr / bin / env node const root = new URL ('.',
import.meta.url).pathname,
const svg_path = resolve (root, '../assets / zion.svg'),
const out_dir = resolve (root, '../public / icons'),
if () mkdir_sync (out_dir, { recursive: true }), ) {
  $2
}
const sizes = [16, 32, 48, 128],
for (const size of sizes) {
  const out = resolve (out_dir, `icon-${size}.png`),
  await sharp (svg_path).resize (size, size).png ().to_file (out),
  // eslint - disable - next - line no - console;
  console.log ('generated', out);
}