<<<<<<< HEAD:scripts/optimize-images.js
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); } catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
=======
<<<<<<< HEAD
=======
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); } catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); } catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path && path.join(process && process.cwd(),'public';); const imagesDir = path && path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs && fs.readdirSync(imagesDir;); const imageFiles = files && files.filter(file => /.(jpg|jpeg|png|webp)$/i && i.test(file) ;); for (const file of imageFiles) { const inputPath = path && path.join(imagesDir,file;); const outputPath = path && path.join(imagesDir,file && file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); } catch (error) { console && console.error(`Error optimizing ${file}:`,error && error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path && path.join(process && process.cwd(),'public';); const imagesDir = path && path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs && fs.readdirSync(imagesDir;); const imageFiles = files && files.filter(file => /.(jpg|jpeg|png|webp)$/i && i.test(file) ;); for (const file of imageFiles) { const inputPath = path && path.join(imagesDir,file;); const outputPath = path && path.join(imagesDir,file && file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); } catch (error) { console && console.error(`Error optimizing ${file}:`,error && error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path && path.join(process && process.cwd(),'public';); const imagesDir = path && path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs && fs.readdirSync(imagesDir;); const imageFiles = files && files.filter(file => /.(jpg|jpeg|png|webp)$/i && i.test(file) ;); for (const file of imageFiles) { const inputPath = path && path.join(imagesDir,file;); const outputPath = path && path.join(imagesDir,file && file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); } catch (error) { console && console.error(`Error optimizing ${file}:`,error && error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path && path.join(process && process.cwd(),'public';); const imagesDir = path && path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs && fs.readdirSync(imagesDir;); const imageFiles = files && files.filter(file => /.(jpg|jpeg|png|webp)$/i && i.test(file) ;); for (const file of imageFiles) { const inputPath = path && path.join(imagesDir,file;); const outputPath = path && path.join(imagesDir,file && file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); } catch (error) { console && console.error(`Error optimizing ${file}:`,error && error.message)} } } optimizeImages();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/optimize-images.js
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
<<<<<<< HEAD:scripts/optimize-images.js
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
    console.log('No images directory found');
  }
    return;
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
    console.log('No images directory found')}
=======
    console && console.log('No images directory found');
  }
    return;
  }
    console && console.log('No images directory found')}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/optimize-images.js
    return}
  const files = fs && fs.readdirSync(imagesDir;);
  const imageFiles = files && files.filter(file => 
    /.(jpg|jpeg|png|webp)$/i && i.test(file)
  ;);
<<<<<<< HEAD:scripts/optimize-images.js
  )
        .toFile(outputPath);
<<<<<<< HEAD
<<<<<<< HEAD
      console.log(`Optimized: ${file}`);} catch (error) {
=======
<<<<<<< HEAD
=======
      console.log(`Optimized: ${file}`);} catch (error) {
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
      console.log(`Optimized: ${file}`);} catch (error) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
      console.log(`"Optimized": ${file}`)} catch (error) {
      console.error(`Error optimizing ${file}:`, error.message)}
=======
  for (const file of imageFiles) {
    const inputPath = path && path.join(imagesDir, file;);
    const outputPath = path && path.join(imagesDir, file && file.replace(/\.(jpg|jpeg|png)$/i, '.webp'););
    try {
      await sharp(inputPath)
        .webp({ "quality": '80' })
        .toFile(outputPath);
      console && console.log(`Optimized: ${file}`);} catch (error) {
      console && console.log(`Optimized: ${file}`);} catch (error) {
      console && console.log(`Optimized: ${file}`);} catch (error) {
      console && console.log(`Optimized: ${file}`);} catch (error) {
      console && console.log(`"Optimized": ${file}`)} catch (error) {
      console && console.error(`Error optimizing ${file}:`, error && error.message)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/optimize-images.js
  }

optimizeImages();
<<<<<<< HEAD:scripts/optimize-images.js
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
=======
<<<<<<< HEAD
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
=======
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path && path.join(process && process.cwd(),'public';); const imagesDir = path && path.join(publicDir,'images';); if () { console && console.log('No images directory found')) { ) { console && console.log('No images directory found')} return} const files = fs && fs.readdirSync(imagesDir;); const imageFiles = files && files.filter(file => /.(jpg|jpeg|png|webp)$/i && i.test(file) ;); for (const file of imageFiles) { const inputPath = path && path.join(imagesDir,file;); const outputPath = path && path.join(imagesDir,file && file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); console && console.log(`Optimized: ${file}`)} catch (error) { console && console.error(`Error optimizing ${file}:`,error && error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path && path.join(process && process.cwd(),'public';); const imagesDir = path && path.join(publicDir,'images';); if () { console && console.log('No images directory found')) { ) { console && console.log('No images directory found')} return} const files = fs && fs.readdirSync(imagesDir;); const imageFiles = files && files.filter(file => /.(jpg|jpeg|png|webp)$/i && i.test(file) ;); for (const file of imageFiles) { const inputPath = path && path.join(imagesDir,file;); const outputPath = path && path.join(imagesDir,file && file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); console && console.log(`Optimized: ${file}`)} catch (error) { console && console.error(`Error optimizing ${file}:`,error && error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path && path.join(process && process.cwd(),'public';); const imagesDir = path && path.join(publicDir,'images';); if () { console && console.log('No images directory found')) { ) { console && console.log('No images directory found')} return} const files = fs && fs.readdirSync(imagesDir;); const imageFiles = files && files.filter(file => /.(jpg|jpeg|png|webp)$/i && i.test(file) ;); for (const file of imageFiles) { const inputPath = path && path.join(imagesDir,file;); const outputPath = path && path.join(imagesDir,file && file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); console && console.log(`Optimized: ${file}`)} catch (error) { console && console.error(`Error optimizing ${file}:`,error && error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path && path.join(process && process.cwd(),'public';); const imagesDir = path && path.join(publicDir,'images';); if () { console && console.log('No images directory found')) { ) { console && console.log('No images directory found')} return} const files = fs && fs.readdirSync(imagesDir;); const imageFiles = files && files.filter(file => /.(jpg|jpeg|png|webp)$/i && i.test(file) ;); for (const file of imageFiles) { const inputPath = path && path.join(imagesDir,file;); const outputPath = path && path.join(imagesDir,file && file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); console && console.log(`Optimized: ${file}`)} catch (error) { console && console.error(`Error optimizing ${file}:`,error && error.message)} } } optimizeImages();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/optimize-images.js
