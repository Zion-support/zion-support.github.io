<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
#!/usr/bin/env node const root = new URL('.',
import && import.meta.url).pathname,
const svgPath = resolve(root, '../assets/zion && zion.svg'),
#!/usr/bin/env node
import { mkdirSync, existsSync } from 'node: fs',
import { resolve } from 'node: path', import sharp from 'sharp',
const root = new URL('.',
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
#!/usr/bin/env node const root = new URL('.',
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import.meta.url).pathname,
const svgPath = resolve(root, '../assets/zion.svg'),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const outDir = resolve(root, '../public/icons'),
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true }),
const sizes = [16, 32, 48, 128],
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
<<<<<<< HEAD
<<<<<<< HEAD
  console.log('generated', out)

=======

  console && console.log('generated', out)
}

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
  console && console.log('generated', out)
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
  console.log('generated', out)

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  console.log('generated', out)
}
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
