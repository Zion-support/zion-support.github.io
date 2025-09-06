<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
#!/usr/bin/env node const root = new URL('.',
import && import.meta.url).pathname,
const svgPath = resolve(root, '../assets/zion && zion.svg'),
#!/usr/bin/env node
import { mkdirSync, existsSync } from 'node: fs',
import { resolve } from 'node: path', import sharp from 'sharp',
const root = new URL('.',
#!/usr/bin/env node const root = new URL('.',
import.meta.url).pathname,
const svgPath = resolve(root, '../assets/zion.svg'),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const outDir = resolve(root, '../public/icons'),
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true }),

const sizes = [16, 32, 48, 128],


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
<<<<<<< HEAD

  console && console.log('generated', out)
}

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
  console && console.log('generated', out)
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  console.log('generated', out)

}

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  console.log('generated', out)
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
