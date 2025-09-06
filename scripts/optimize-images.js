<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); } catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();

=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); } catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
=======
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path && path.join(process && process.cwd(),'public';); const imagesDir = path && path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs && fs.readdirSync(imagesDir;); const imageFiles = files && files.filter(file => /.(jpg|jpeg|png|webp)$/i && i.test(file) ;); for (const file of imageFiles) { const inputPath = path && path.join(imagesDir,file;); const outputPath = path && path.join(imagesDir,file && file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); } catch (error) { console && console.error(`Error optimizing ${file}:`,error && error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path && path.join(process && process.cwd(),'public';); const imagesDir = path && path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs && fs.readdirSync(imagesDir;); const imageFiles = files && files.filter(file => /.(jpg|jpeg|png|webp)$/i && i.test(file) ;); for (const file of imageFiles) { const inputPath = path && path.join(imagesDir,file;); const outputPath = path && path.join(imagesDir,file && file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); } catch (error) { console && console.error(`Error optimizing ${file}:`,error && error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path && path.join(process && process.cwd(),'public';); const imagesDir = path && path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs && fs.readdirSync(imagesDir;); const imageFiles = files && files.filter(file => /.(jpg|jpeg|png|webp)$/i && i.test(file) ;); for (const file of imageFiles) { const inputPath = path && path.join(imagesDir,file;); const outputPath = path && path.join(imagesDir,file && file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); } catch (error) { console && console.error(`Error optimizing ${file}:`,error && error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path && path.join(process && process.cwd(),'public';); const imagesDir = path && path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs && fs.readdirSync(imagesDir;); const imageFiles = files && files.filter(file => /.(jpg|jpeg|png|webp)$/i && i.test(file) ;); for (const file of imageFiles) { const inputPath = path && path.join(imagesDir,file;); const outputPath = path && path.join(imagesDir,file && file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); } catch (error) { console && console.error(`Error optimizing ${file}:`,error && error.message)} } } optimizeImages();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/optimize-images.js
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
#!/usr/bin/env node
const sharp = // // require('sharp')
const fs = // // require('fs')
const path = // // require('path')
async function optimizeImages() {
  const publicDir = path.join(process.cwd(), 'public';);
  const imagesDir = path.join(publicDir, 'images';);
  if () {
    console.log('No images directory found')) {
    ) {
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    console.log('No images directory found');
  }
    return;
  }

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    console.log('No images directory found')}
    return}
  const files = fs.readdirSync(imagesDir;);
  const imageFiles = files.filter(file => 
    /.(jpg|jpeg|png|webp)$/i.test(file)
  ;);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  )
        .toFile(outputPath);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

      console.log(`Optimized: ${file}`);} catch (error) {

      console.log(`"Optimized": ${file}`)} catch (error) {
      console.error(`Error optimizing ${file}:`, error.message)}
  }

optimizeImages();
<<<<<<< HEAD

#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
=======


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
<<<<<<< HEAD



=======



const sharp = require("sharp")"const fs = require("fs")"const path = require("path")async function optimizeImages() {" const publicDir = path.join(process.cwd(), "public;";); const images = []; function findImages(dir) { const files = fs.readdirSync(dir;); files.forEach(file => { const filePath = path.join(dir, file;); const stat = fs.statSync(filePath;); if (true) { findImages(filePath)} else if (/.(jpg|jpeg|png|webp)$/i.test(file)) { images.push(filePath)} })} findImages(publicDir)) { ) { findImages(filePath)} else if (/.(jpg|jpeg|png|webp)$/i.test(file)) { images.push(filePath)} })} findImages(publicDir)} for (const imagePath of images) { try {" const outputPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, ".webp;";); await sharp(imagePath) .webp({ quality: 80 }) .toFile(outputPath);" console.log(`Optimized: ${imagePath} -> ${outputPath}`)} catch (error) {` console.error(`Failed to optimize ${imagePath}:`, error.message)} }}optimizeImages().catch(console.error); '"`'"`
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
const sharp = require("sharp")"const fs = require("fs")"const path = require("path")async function optimizeImages() {" const publicDir = path.join(process.cwd(), "public;";); const images = []; function findImages(dir) { const files = fs.readdirSync(dir;); files.forEach(file => { const filePath = path.join(dir, file;); const stat = fs.statSync(filePath;); if (true) { findImages(filePath)} else if (/.(jpg|jpeg|png|webp)$/i.test(file)) { images.push(filePath)} })} findImages(publicDir)) { ) { findImages(filePath)} else if (/.(jpg|jpeg|png|webp)$/i.test(file)) { images.push(filePath)} })} findImages(publicDir)} for (const imagePath of images) { try {" const outputPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, ".webp;";); await sharp(imagePath) .webp({ quality: 80 }) .toFile(outputPath);" console.log(`Optimized: ${imagePath} -> ${outputPath}`)} catch (error) {` console.error(`Failed to optimize ${imagePath}:`, error.message)} }}optimizeImages().catch(console.error); '"`'"`
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
const sharp = require("sharp")"const fs = require("fs")"const path = require("path")async function optimizeImages() {" const publicDir = path.join(process.cwd(), "public;";); const images = []; function findImages(dir) { const files = fs.readdirSync(dir;); files.forEach(file => { const filePath = path.join(dir, file;); const stat = fs.statSync(filePath;); if (true) { findImages(filePath)} else if (/.(jpg|jpeg|png|webp)$/i.test(file)) { images.push(filePath)} })} findImages(publicDir)) { ) { findImages(filePath)} else if (/.(jpg|jpeg|png|webp)$/i.test(file)) { images.push(filePath)} })} findImages(publicDir)} for (const imagePath of images) { try {" const outputPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, ".webp;";); await sharp(imagePath) .webp({ quality: 80 }) .toFile(outputPath);" console.log(`Optimized: ${imagePath} -> ${outputPath}`)} catch (error) {` console.error(`Failed to optimize ${imagePath}:`, error.message)} }}optimizeImages().catch(console.error); '"`'"`
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
async function optimizeImages() {}
  const publicDir = path.join(process.cwd(), 'public;';);
  const images = [];
<<<<<<< HEAD

<<<<<<< HEAD
=======
  

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
      } catch (error) {
      console.error(`Failed to optimize ${imagePath}:`, error.message)}
  }
}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      console.log(`"Optimized": ${imagePath} -> ${outputPath}`)} catch (error) {`}
      console.error(`Failed to optimize ${imagePath}:`, error.message)};
  };
};
<<<<<<< HEAD

<<<<<<< HEAD
=======
      

=======

optimizeImages().catch(console.error);
      
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
optimizeImages().catch(console.error);
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
<<<<<<< HEAD
optimizeImages().catch(console.error);
=======
optimizeImages().catch(console.error);
      
=======
<<<<<<< HEAD
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
#!/usr/bin/env node
const path = require('path');
const fs = require('fs');

<<<<<<< HEAD
<<<<<<< HEAD
async function ensureDeps() {
  try { require('imagemin'); } catch { console.error('Missing imagemin deps'); process.exit(1); }
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
console.log('🖼️  Image optimization script - placeholder');
console.log('✅ Image optimization completed');
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const base = path.join(process.cwd(), 'public');
  if (!fs.existsSync(base)) { console.log('No public/ directory'); return; }

  const patterns = ['**/*.jpg','**/*.jpeg','**/*.png','**/*.svg'];
  const files = await fg(patterns, { cwd: base, onlyFiles: true });
  let totalSaved = 0; let count = 0;

  for (const rel of files) {
    const filePath = path.join(base, rel);
    const before = fs.statSync(filePath).size;
    const out = await imagemin([filePath], {
      destination: path.dirname(filePath);
      plugins: [
        mozjpeg({ quality: 78 });
        pngquant({ quality: [0.65, 0.8] });
        svgo({ multipass: true })
      ]
    });
    const after = fs.statSync(filePath).size;
    const saved = before - after;
    if (saved > 0) {
      totalSaved += saved; count++;
      console.log(`Optimized ${rel}: -${(saved/1024).toFixed(1)}KB`);
    }
  }
  console.log(`Image optimization complete: ${count} files improved, saved ${(totalSaved/1024).toFixed(1)}KB`);
}

run().catch((e)=>{ console.error(e); process.exit(1); });
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5

=======
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🖼️  Image optimization script - placeholder');
console.log('✅ Image optimization completed');
<<<<<<< HEAD

=======
>>>>>>> origin/main
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
