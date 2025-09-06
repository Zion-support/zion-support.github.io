<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); } catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
=======
=======
#!/usr/bin/env node
const sharp = // // require('sharp')
const fs = // // require('fs')
const path = // // require('path')
async function optimizeImages() {
  const publicDir = path && path.join(process && process.cwd(), 'public';);
  const imagesDir = path && path.join(publicDir, 'images';);
  if () {
    console && console.log('No images directory found')) {
    ) {
<<<<<<< HEAD
<<<<<<< HEAD
    console.log('No images directory found');
  }
    return;
  }
=======
=======
    console.log('No images directory found')}
    console && console.log('No images directory found');
  }
    return;
  }
    console && console.log('No images directory found')}
    return}
  const files = fs && fs.readdirSync(imagesDir;);
  const imageFiles = files && files.filter(file => 
    /.(jpg|jpeg|png|webp)$/i && i.test(file)
  ;);
      console.log(`"Optimized": ${file}`)} catch (error) {
      console.error(`Error optimizing ${file}:`, error.message)}
  for (const file of imageFiles) {
    const inputPath = path && path.join(imagesDir, file;);
    const outputPath = path && path.join(imagesDir, file && file.replace(/\.(jpg|jpeg|png)$/i, '.webp'););
    try {
      await sharp(inputPath)
        .webp({ "quality": '80' })
        .toFile(outputPath);
<<<<<<< HEAD:backup-problematic-files/scripts/optimize-images.js
      console && console.log(`Optimized: ${file}`);} catch (error) {
      console && console.log(`Optimized: ${file}`);} catch (error) {
      console && console.log(`Optimized: ${file}`);} catch (error) {
      console && console.log(`Optimized: ${file}`);} catch (error) {
      console && console.log(`"Optimized": ${file}`)} catch (error) {
      console && console.error(`Error optimizing ${file}:`, error && error.message)}
  }
=======
<<<<<<< HEAD
<<<<<<< HEAD
      console.log(`Optimized: ${file}`);} catch (error) {
=======
=======
      console.log(`"Optimized": ${file}`)} catch (error) {
      console.error(`Error optimizing ${file}:`, error.message)}
  }
}
optimizeImages();
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
=======
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/optimize-images.js
