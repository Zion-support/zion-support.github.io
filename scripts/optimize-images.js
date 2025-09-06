<<<<<<< HEAD
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); } catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
=======
<<<<<<< HEAD
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); } catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
=======
<<<<<<< HEAD
=======
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); } catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
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
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
    console.log('No images directory found');
  }
    return;
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
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
<<<<<<< HEAD
      console.log(`Optimized: ${file}`);} catch (error) {
=======
<<<<<<< HEAD
      console.log(`Optimized: ${file}`);} catch (error) {
=======
<<<<<<< HEAD
=======
      console.log(`Optimized: ${file}`);} catch (error) {
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
      console.log(`"Optimized": ${file}`)} catch (error) {
      console.error(`Error optimizing ${file}:`, error.message)}
  }
}
optimizeImages();
<<<<<<< HEAD
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
<<<<<<< HEAD
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
=======
=======
<<<<<<< HEAD
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
=======
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
