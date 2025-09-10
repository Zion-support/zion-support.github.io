/*
 Copies Netlify routing files into the Vite publish directory so Netlify applies them.
*/
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const publishDir = path.join(projectRoot, 'dist');
const filesToCopy = ['_headers', '_redirects'];

if (!fs.existsSync(publishDir)) {
  console.error(`Publish directory does not exist: ${publishDir}`);
  process.exit(1);
}

let copiedCount = 0;
for (const filename of filesToCopy) {
  const src = path.join(projectRoot, filename);
  const dest = path.join(publishDir, filename);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    copiedCount += 1;
    console.log(`Copied ${filename} -> ${path.relative(projectRoot, dest)}`);
  } else {
    console.log(`Skipped ${filename} (not found)`);
  }
}

console.log(`Netlify file copy complete. Files copied: ${copiedCount}`);
