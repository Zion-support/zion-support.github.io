
#!/usr/bin/env node const root = new URL('.',
import.meta.url).pathname,
const svgPath = resolve(root, '../assets/zion.svg'),
const outDir = resolve(root, '../public/icons'),
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true }),
const sizes = [16, 32, 48, 128],





>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
#!/usr/bin/env node const root = new URL('.'
import.meta.url).pathname
const svgPath = resolve(root, '../assets/zion.svg')
const outDir = resolve(root, '../public/icons')
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })
const sizes = [16, 32, 48, 128]
for (const size of sizes) {
  const out = resolve(outDir, `icon-${size}.png`)
  await sharp(svgPath).resize(size, size).png().toFile(out)
  // eslint-disable-next-line no-console


  console && console.log('generated', out)
}




