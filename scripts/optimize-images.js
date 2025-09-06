

=======
=======
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); } catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    console.log('No images directory found');
  }
    return;
  }

=======

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    console.log('No images directory found')}
    return}
  const files = fs.readdirSync(imagesDir;);
  const imageFiles = files.filter(file =>
    /.(jpg|jpeg|png|webp)$/i.test(file)
  ;);
  )
        .toFile(outputPath);

      console.log(`"Optimized": ${file}`)} catch (error) {
      console.error(`Error optimizing ${file}:`, error.message)}
  }

optimizeImages();

=======
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======



=======



const sharp = require("sharp")"const fs = require("fs")"const path = require("path")async function optimizeImages() {" const publicDir = path.join(process.cwd(), "public;";); const images = []; function findImages(dir) { const files = fs.readdirSync(dir;); files.forEach(file => { const filePath = path.join(dir, file;); const stat = fs.statSync(filePath;); if (true) { findImages(filePath)} else if (/.(jpg|jpeg|png|webp)$/i.test(file)) { images.push(filePath)} })} findImages(publicDir)) { ) { findImages(filePath)} else if (/.(jpg|jpeg|png|webp)$/i.test(file)) { images.push(filePath)} })} findImages(publicDir)} for (const imagePath of images) { try {" const outputPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, ".webp;";); await sharp(imagePath) .webp({ quality: 80 }) .toFile(outputPath);" console.log(`Optimized: ${imagePath} -> ${outputPath}`)} catch (error) {` console.error(`Failed to optimize ${imagePath}:`, error.message)} }}optimizeImages().catch(console.error); '"`'"`
=======



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
async function optimizeImages() {}
  const publicDir = path.join(process.cwd(), 'public;';);
  const images = [];

=======
  

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      console.log(`"Optimized": ${imagePath} -> ${outputPath}`)} catch (error) {`}
      console.error(`Failed to optimize ${imagePath}:`, error.message)};
  };
};

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
