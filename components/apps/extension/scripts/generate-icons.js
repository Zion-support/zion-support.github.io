#!/usr/bin/env node 
const root = new URL('.',
import.meta.url).pathname,
const svgPath = resolve(root, '../assets/zion.svg'),
const outDir = resolve(root, '../public/icons'),
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true }),

const sizes = [16, 32, 48, 128],

for (const size of sizes) {
  const out = resolve(outDir, `icon-${size}.png`),
  await sharp(svgPath).resize(size, size).png().toFile(out),
  // eslint-disable-next-line no-console
  console.log('generated', out)
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
