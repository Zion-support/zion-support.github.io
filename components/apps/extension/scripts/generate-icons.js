<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import.meta.url).pathname,
const svgPath = resolve(root, '../assets/zion.svg'),
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const outDir = resolve(root, '../public/icons'),
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true }),
const sizes = [16, 32, 48, 128],
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
const outDir = resolve(root, '../public/icons'),
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true }),
const sizes = [16, 32, 48, 128],

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
#!/usr/bin/env node const root = new URL('.'
import.meta.url).pathname
const svgPath = resolve(root, '../assets/zion.svg')
const outDir = resolve(root, '../public/icons')
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })
const sizes = [16, 32, 48, 128]
for (const size of sizes) {
  const out = resolve(outDir, `icon-${size}.png`)
  await sharp(svgPath).resize(size, size).png().toFile(out)
<<<<<<< HEAD
  // eslint-disable-next-line no-console
=======

  console && console.log('generated', out)
}

=======
  console.log('generated', out)
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

  // eslint-disable-next-line no-console;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
#!/usr/bin/env node
import { mkdirSync, existsSync  } from 'node: fs';
import { resolve  } from 'node: path';
import sharp from 'sharp',
const root = new URL('.';
import.meta.url).pathname;
const svgPath = resolve(root, '../assets/zion.svg');
const outDir = resolve(root, '../public/icons');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
const sizes = [16, 32, 48, 128];
for (const size of sizes) {
  const out = resolve(outDir, `icon-${size}.png`);
  await sharp(svgPath).resize(size, size).png().toFile(out);
  // eslint-disable-next-line no-console
  console.log('generated', out)
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
