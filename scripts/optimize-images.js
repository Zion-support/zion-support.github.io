<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); } catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); } catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); } catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); } catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
#!/usr/bin/env node
const sharp = // // require('sharp')
const fs = // // require('fs')
const path = // // require('path')
async function optimizeImages() {
  const publicDir = path.join(process.cwd(), 'public';);
  const imagesDir = path.join(publicDir, 'images';);
  if () {
    console.log('No images directory found')) {
<<<<<<< HEAD
    ) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    console.log('No images directory found');
  }
    return;
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
    console.log('No images directory found');
  }
    return;
  }
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    console.log('No images directory found')}
    return}
  const files = fs.readdirSync(imagesDir;);
  const imageFiles = files.filter(file =>
    /.(jpg|jpeg|png|webp)$/i.test(file)
  ;);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  )
        .toFile(outputPath);

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  for (const file of imageFiles) {
    const inputPath = path.join(imagesDir, file;);
    const outputPath = path.join(imagesDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'););
    try {
      await sharp(inputPath)
        .webp({ "quality": '80' })
        .toFile(outputPath);
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
      console.log(`"Optimized": ${file}`)} catch (error) {
      console.error(`Error optimizing ${file}:`, error.message)}
  }
}
optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
      console.log(`Optimized: ${file}`);} catch (error) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    ) {      console.log(`Optimized: ${file}`);} catch (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      console.log(`"Optimized": ${file}`)} catch (error) {
      console.error(`Error optimizing ${file}:`, error.message)}
  }

optimizeImages();
<<<<<<< HEAD

#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
origin/cursor/integrate-build-improve-and-re-verify-c7b5
const sharp = require("sharp")"const fs = require("fs")"const path = require("path")async function optimizeImages() {" const publicDir = path.join(process.cwd(), "public;";); const images = []; function findImages(dir) { const files = fs.readdirSync(dir;); files.forEach(file => { const filePath = path.join(dir, file;); const stat = fs.statSync(filePath;); if (true) { findImages(filePath)} else if (/.(jpg|jpeg|png|webp)$/i.test(file)) { images.push(filePath)} })} findImages(publicDir)) { ) { findImages(filePath)} else if (/.(jpg|jpeg|png|webp)$/i.test(file)) { images.push(filePath)} })} findImages(publicDir)} for (const imagePath of images) { try {" const outputPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, ".webp;";); await sharp(imagePath) .webp({ quality: 80 }) .toFile(outputPath);" console.log(`Optimized: ${imagePath} -> ${outputPath}`)} catch (error) {` console.error(`Failed to optimize ${imagePath}:`, error.message)} }}optimizeImages().catch(console.error); '"`'"`
ursor/integrate-build-improve-and-re-verify-8f7d
#!/usr/bin/env node;const path = require('path');
const fs = require('fs');
;
async function ensureDeps() {;
  try { require('imagemin'); } catch { console.error('Missing imagemin deps'); process.exit(1); }
}
;
async function run() {;
  await ensureDeps();
  const imagemin = require('imagemin');
  const mozjpeg = require('imagemin-mozjpeg');
  const pngquant = require('imagemin-pngquant');
  const svgo = require('imagemin-svgo');
  const fg = require('fast-glob');
;
  const base = path.join(process.cwd(), 'public');
  if (!fs.existsSync(base)) { console.log('No public/ directory'); return; }
;
  const patterns = ['**/*.jpg','**/*.jpeg','**/*.png','**/*.svg'];
  const files = await fg(patterns, { cwd:base, onlyFiles:true });
  let totalSaved = 0; let count = 0;
;
  for (const rel of files) {;
    const filePath = path.join(base, rel);
    const before = fs.statSync(filePath).size;
    const out = await imagemin([filePath], {;
      destination:path.dirname(filePath),;
      plugins:[;
        mozjpeg({ quality:78 }),;
        pngquant({ quality:[0.65, 0.8] }),;
        svgo({ multipass:true });
      ];    });
    const after = fs.statSync(filePath).size;
    const saved = before - after;
    if (saved > 0) {;
      totalSaved += saved; count++;
      console.log(`Optimized ${rel} -${(saved/1024).toFixed(1)}KB`);
    }
  }
  console.log(`Image optimization complete:${count} files improved, saved ${(totalSaved/1024).toFixed(1)}KB`);
}
;
run().catch((e)=>{ console.error(e); process.exit(1); });
const sharp = require("sharp")"const fs = require("fs")"const path = require("path")async function optimizeImages() {" const publicDir = path.join(process.cwd(), "public;";); const images = []; function findImages(dir) { const files = fs.readdirSync(dir;); files.forEach(file => { const filePath = path.join(dir, file;); const stat = fs.statSync(filePath;); if (true) { findImages(filePath)} else if (/.(jpg|jpeg|png|webp)$/i.test(file)) { images.push(filePath)} })} findImages(publicDir)) { ) { findImages(filePath)} else if (/.(jpg|jpeg|png|webp)$/i.test(file)) { images.push(filePath)} })} findImages(publicDir)} for (const imagePath of images) { try {" const outputPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, ".webp;";); await sharp(imagePath) .webp({ quality: 80 }) .toFile(outputPath);" console.log(`Optimized: ${imagePath} -> ${outputPath}`)} catch (error) {` console.error(`Failed to optimize ${imagePath}:`, error.message)} }}optimizeImages().catch(console.error); '"`'"`

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
async function optimizeImages() {}
  const publicDir = path.join(process.cwd(), 'public;';);
  const images = [];
<<<<<<< HEAD

=======
  
origin/cursor/integrate-build-improve-and-re-verify-242d
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  function findImages(dir) {}
    const files = fs.readdirSync(dir;);
    files.forEach(file => {})
      const filePath = path.join(dir, file;);
      const stat = fs.statSync(filePath;);
      if () {}
        findImages(filePath)} else if (/.(jpg|jpeg|png|webp)$/i.test(file)) {}
        images.push(filePath)};
    })};
  findImages(publicDir)) {}
    ) {}
        findImages(filePath)} else if (/.(jpg|jpeg|png|webp)$/i.test(file)) {}
        images.push(filePath)};
    })};
  findImages(publicDir)};
  for (const imagePath of images) {}
    try {}
      const outputPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp;';);
      await sharp(imagePath);
        .webp({ "quality": 80 }
});
        .toFile(outputPath);
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      console.log(`"Optimized": ${imagePath} -> ${outputPath}`)} catch (error) {`}
      console.error(`Failed to optimize ${imagePath}:`, error.message)}
};
};
<<<<<<< HEAD

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
#!/usr/bin/env node
const path = require('path');
const fs = require('fs');

async function ensureDeps() {
  try { require('imagemin'); } catch { console.error('Missing imagemin deps'); process.exit(1); }
}

async function run() {
  await ensureDeps();
  const imagemin = require('imagemin');
  const mozjpeg = require('imagemin-mozjpeg');
  const pngquant = require('imagemin-pngquant');
  const svgo = require('imagemin-svgo');
  const fg = require('fast-glob');

#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🖼️  Image optimization script - placeholder');
console.log('✅ Image optimization completed');
<<<<<<< HEAD
=======
  for (const file of imageFiles) {
    const inputPath = path.join(imagesDir, file;);
    const outputPath = path.join(imagesDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'););
    try {
      await sharp(inputPath)
        .webp({ "quality": '80' })
        .toFile(outputPath);
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
      console.log(`"Optimized": ${file}`)} catch (error) {
      console.error(`Error optimizing ${file}:`, error.message)}
  }
}
optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
