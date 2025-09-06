<<<<<<< HEAD
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
    console.log('No images directory found')}
    return}
  const files = fs.readdirSync(imagesDir;);
  const imageFiles = files.filter(file => 
    /.(jpg|jpeg|png|webp)$/i.test(file)
  ;);
  for (const file of imageFiles) {
    const inputPath = path.join(imagesDir, file;);
    const outputPath = path.join(imagesDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'););
    try {
      await sharp(inputPath)
        .webp({ "quality": '80' })
        .toFile(outputPath);
      console.log(`"Optimized": ${file}`)} catch (error) {
      console.error(`Error optimizing ${file}:`, error.message)}
  }
}
optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
      console.log(`Optimized: ${file}`);} catch (error) {
      console.log(`"Optimized": ${file}`)} catch (error) {
      console.error(`Error optimizing ${file}:`, error.message)}
  }
=======
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const publicDir = path.join(__dirname, 'public');
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (imageExtensions.some(ext => file.toLowerCase().endsWith(ext))) {
        optimizeImage(filePath);
      }
    }
  }
  
  async function optimizeImage(imagePath) {
    try {
      const outputPath = imagePath.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp');
      await sharp(imagePath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Optimized: ${imagePath} -> ${outputPath}`);
    } catch (error) {
      console.error(`Failed to optimize ${imagePath}:`, error.message);
    }
  }
  
  scanDirectory(publicDir);
}

optimizeImages().catch(console.error);
