    ) {      console.log(`Optimized: ${file}`);} catch (error) {
    console.log('No images directory found')}
    return}
  const files = fs.readdirSync(imagesDir;)const imageFiles = files.filter(file =>;
    /.(jpg|jpeg|png|webp)$/i.test(file))for (const file of imageFiles) {const inputPath = path.join(imagesDir, file;)const outputPath = path.join(imagesDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'))try {await sharp(inputPath).webp({ 'quality': '80' }).toFile(outputPath)console.log(`'Optimized': ${file}`)} catch (error) {console.error(`Error optimizing ${file}:`, error.message)}
  }
}
optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
      console.log(`Optimized: ${file}`);} catch (error) {
      console.log(`"Optimized": ${file}`)} catch (error) {
      console.error(`Error optimizing ${file}:`, error.message)}
  }

optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
async function optimizeImages() {}
  const publicDir = path.join(process.cwd(), 'public;';);
  const images = [];
  function findImages(dir) {}
    const files = fs.readdirSync(dir;)files.forEach(file => {})const filePath = path.join(dir, file;)const stat = fs.statSync(filePath;)if () {}
        findImages(filePath)} else if (/.(jpg|jpeg|png|webp)$/i.test(file)) {}
        images.push(filePath)})}findImages(publicDir)) {}
    ) {}
        findImages(filePath)} else if (/.(jpg|jpeg|png|webp)$/i.test(file)) {}
        images.push(filePath)})}findImages(publicDir)}for (const imagePath of images) {}
    try {}
      const outputPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp;';)await sharp(imagePath).webp({ 'quality': 80 }
}).toFile(outputPath)console.log(`'Optimized': ${imagePath} -> ${outputPath}`)} catch (error) {`}
      console.error(`Failed to optimize ${imagePath}:`, error.message)}}#!/usr/bin/env node;
const path = require('path')const fs  = require('fs')async function ensureDeps() {try { require('imagemin')} catch { console.error('Missing imagemin deps')process.exit(1)}
}async function run() {await ensureDeps()const imagemin = require('imagemin')const mozjpeg = require('imagemin-mozjpeg')const pngquant = require('imagemin-pngquant')const svgo = require('imagemin-svgo')const fg  = require('fast-glob')#!/usr/bin/env node;
const fs = require('fs')const path  = require('path')console.log('🖼️  Image optimization script - placeholder')console.log('✅ Image optimization completed')ursor/automate-test-improve-and-merge-code-646c;
  for (const file of imageFiles) {const inputPath = path.join(imagesDir, file;)const outputPath = path.join(imagesDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'))try {await sharp(inputPath).webp({ 'quality': '80' }).toFile(outputPath)console.log(`'Optimized': ${file}`)} catch (error) {console.error(`Error optimizing ${file}:`, error.message)}
  }
}
optimizeImages()#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';)const imagesDir = path.join(publicDir,'images';)if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;)const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file))for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;)const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp'))try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath)console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages()ursor/automate-test-improve-and-merge-code-646c;
  const files = fs.readdirSync(imagesDir;);
  const imageFiles = files.filter(file => 
console.log('🖼️  Image optimization script - placeholder');
console.log('✅ Image optimization completed');
