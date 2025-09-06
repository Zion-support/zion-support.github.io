<<<<<<< HEAD
#!/usr/bin/env node const root = new URL('.',
import.meta.url).pathname,
const svgPath = resolve(root, '../assets/zion.svg'),
const outDir = resolve(root, '../public/icons'),
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true }),
const sizes = [16, 32, 48, 128],




>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======

>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
  console.log('generated', out)
<<<<<<< HEAD
}
}
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
