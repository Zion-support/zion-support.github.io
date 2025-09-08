<<<<<<< HEAD


#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); } catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path && path.join(process && process.cwd(),'public';); const imagesDir = path && path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs && fs.readdirSync(imagesDir;); const imageFiles = files && files.filter(file => /.(jpg|jpeg|png|webp)$/i && i.test(file) ;); for (const file of imageFiles) { const inputPath = path && path.join(imagesDir,file;); const outputPath = path && path.join(imagesDir,file && file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); } catch (error) { console && console.error(`Error optimizing ${file}:`,error && error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path && path.join(process && process.cwd(),'public';); const imagesDir = path && path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs && fs.readdirSync(imagesDir;); const imageFiles = files && files.filter(file => /.(jpg|jpeg|png|webp)$/i && i.test(file) ;); for (const file of imageFiles) { const inputPath = path && path.join(imagesDir,file;); const outputPath = path && path.join(imagesDir,file && file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); } catch (error) { console && console.error(`Error optimizing ${file}:`,error && error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path && path.join(process && process.cwd(),'public';); const imagesDir = path && path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs && fs.readdirSync(imagesDir;); const imageFiles = files && files.filter(file => /.(jpg|jpeg|png|webp)$/i && i.test(file) ;); for (const file of imageFiles) { const inputPath = path && path.join(imagesDir,file;); const outputPath = path && path.join(imagesDir,file && file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); } catch (error) { console && console.error(`Error optimizing ${file}:`,error && error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path && path.join(process && process.cwd(),'public';); const imagesDir = path && path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs && fs.readdirSync(imagesDir;); const imageFiles = files && files.filter(file => /.(jpg|jpeg|png|webp)$/i && i.test(file) ;); for (const file of imageFiles) { const inputPath = path && path.join(imagesDir,file;); const outputPath = path && path.join(imagesDir,file && file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); } catch (error) { console && console.error(`Error optimizing ${file}:`,error && error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); } catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); } catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); } catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
origin/cursor/integrate-build-improve-and-re-verify-c7b5

#!/usr/bin/env node

#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { ) { ) { } return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); ) .toFile(outputPath); } catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
#!/usr/bin/env node;
=======
#!/usr/bin/env node
>>>>>>> origin/cursor/delete-old-data-records-6bba
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



    console.log('No images directory found');
  }
    return;
  }


ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
    ) {
>>>>>>> origin/cursor/delete-old-data-records-6bba
    console.log('No images directory found')}
    return}
  const files = fs.readdirSync(imagesDir;)const imageFiles = files.filter(file =>;
    /.(jpg|jpeg|png|webp)$/i.test(file))for (const file of imageFiles) {const inputPath = path.join(imagesDir, file;)const outputPath = path.join(imagesDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'))try {await sharp(inputPath).webp({ 'quality': '80' }).toFile(outputPath)console.log(`'Optimized': ${file}`)} catch (error) {console.error(`Error optimizing ${file}:`, error.message)}
  }
}
optimizeImages()#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';)const imagesDir = path.join(publicDir,'images';)if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;)const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file))for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;)const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp'))try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath)console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages()console.log(`Optimized: ${file}`)} catch (error) {console.log(`'Optimized': ${file}`)} catch (error) {console.error(`Error optimizing ${file}:`, error.message)}
  }optimizeImages()#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';)const imagesDir = path.join(publicDir,'images';)if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;)const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file))) .toFile(outputPath)console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages()#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';)const imagesDir = path.join(publicDir,'images';)if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;)const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file))) .toFile(outputPath)console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages()#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';)const imagesDir = path.join(publicDir,'images';)if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;)const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file))) .toFile(outputPath)console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages()const sharp = require('sharp')const fs = require('fs')const path = require('path')async function optimizeImages() {}
  const publicDir = path.join(process.cwd(), 'public;';)const images = [];
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
<<<<<<< HEAD

    /.(jpg|jpeg|png|webp)$/i.test(file)
  ;);



=======
    /.(jpg|jpeg|png|webp)$/i.test(file)
  ;);
>>>>>>> origin/cursor/delete-old-data-records-6bba
  for (const file of imageFiles) {
    const inputPath = path.join(imagesDir, file;);
    const outputPath = path.join(imagesDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'););
    try {
      await sharp(inputPath)
        .webp({ 'quality': '80' })
        .toFile(outputPath);
      console.log(`'Optimized': ${file}`)} catch (error) {
      console.error(`Error optimizing ${file}:`, error.message)}
  }
}
optimizeImages();
#!/usr/bin/env node const sharp = const fs = const path = async function optimizeImages() { const publicDir = path.join(process.cwd(),'public';); const imagesDir = path.join(publicDir,'images';); if () { console.log('No images directory found')) { ) { console.log('No images directory found')} return} const files = fs.readdirSync(imagesDir;); const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file) ;); for (const file of imageFiles) { const inputPath = path.join(imagesDir,file;); const outputPath = path.join(imagesDir,file.replace(/\.(jpg|jpeg|png)$/i,'.webp');); try { await sharp(inputPath) .webp({ quality: '80' }) .toFile(outputPath); console.log(`Optimized: ${file}`)} catch (error) { console.error(`Error optimizing ${file}:`,error.message)} } } optimizeImages();
      console.log(`Optimized: ${file}`);} catch (error) {
      console.log(`'Optimized': ${file}`)} catch (error) {
      console.error(`Error optimizing ${file}:`, error.message)}
  }
<<<<<<< HEAD

optimizeImages();

=======
#!/usr/bin/env node
>>>>>>> origin/cursor/delete-old-data-records-6bba




const sharp = require('sharp');'

const fs = require('fs');'

<<<<<<< HEAD
const sharp = require("sharp")"const fs = require("fs")"const path = require("path")async function optimizeImages() {" const publicDir = path.join(process.cwd(), "public;";); const images = []; function findImages(dir) { const files = fs.readdirSync(dir;); files.forEach(file => { const filePath = path.join(dir, file;); const stat = fs.statSync(filePath;); if (true) { findImages(filePath)} else if (/.(jpg|jpeg|png|webp)$/i.test(file)) { images.push(filePath)} })} findImages(publicDir)) { ) { findImages(filePath)} else if (/.(jpg|jpeg|png|webp)$/i.test(file)) { images.push(filePath)} })} findImages(publicDir)} for (const imagePath of images) { try {" const outputPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, ".webp;";); await sharp(imagePath) .webp({ quality: 80 }) .toFile(outputPath);" console.log(`Optimized: ${imagePath} -> ${outputPath}`)} catch (error) {` console.error(`Failed to optimize ${imagePath}:`, error.message)} }}optimizeImages().catch(console.error); '"`'"`
=======
const path = require('path');'
>>>>>>> origin/cursor/delete-old-data-records-6bba

async function optimizeImages() {
  }
  const publicDir = path.join(__dirname, 'public');'

<<<<<<< HEAD
const sharp = require('sharp');

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🖼️  Starting image optimization...');

const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];
const publicDir = path.join(__dirname, '..', 'public');
const mediaDir = path.join(__dirname, '..', 'media');

function findImages(dir) {
  const images = [];


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




      console.log(`"Optimized": ${imagePath} -> ${outputPath}`)} catch (error) {`}
      console.error(`Failed to optimize ${imagePath}:`, error.message)};
  };
};



#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🖼️  Image optimization script - placeholder');
console.log('✅ Image optimization completed');








=======
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];'
  
  function scanDirectory() {
    }
    const files = fs.readdirSync(dir);
    for (const file of files) {
      }
      const filePath = path.join(dir, file);

const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        }
        scanDirectory(filePath);
      } else if (imageExtensions.some(ext => file.toLowerCase().endsWith(ext))) {
        }
        optimizeImage(filePath);
      }
    }
  }
  
  async function optimizeImage() {
    }
    try {
      }
      const outputPath = imagePath.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp');'
      await sharp(imagePath)
        .webp({ 'quality': 80
})
        .toFile(outputPath);
      console.log(`'Optimized': ${imagePath} -> ${outputPat,`}`);`    } catch (error) {
      }
      console.error(`Failed to optimize ${imagePath}:`, error.message);`
    }
  }
  
  scanDirectory(publicDir);
}

function optimizeImage(imagePath) {
  try {
    const ext = path.extname(imagePath).toLowerCase();
    const dir = path.dirname(imagePath);
    const name = path.basename(imagePath, ext);
    
    // Create optimized versions
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      // Convert to WebP
      const webpPath = path.join(dir, `${name}.webp`);
      if (!fs.existsSync(webpPath)) {
        execSync(`cwebp -q 80 '${imagePath}' -o '${webpPath}'`, { stdio: 'pipe' });
        console.log(`✅ Created WebP: ${webpPath}`);
      }
      
      // Create responsive sizes
      const sizes = [320, 640, 768, 1024, 1280, 1920];
      for (const size of sizes) {
        const responsivePath = path.join(dir, `${name}-${size}w${ext}`);
        if (!fs.existsSync(responsivePath)) {
          execSync(`convert '${imagePath}' -resize ${size}x -quality 85 '${responsivePath}'`, { stdio: 'pipe' });
          console.log(`✅ Created ${size}w: ${responsivePath}`);
        }
      }
    }
    
    return true;
  } catch (error) {
    console.warn(`⚠️  Failed to optimize ${imagePath}: ${error.message}`);
    return false;
  }
}

async function main() {
  try {
    console.log('🔍 Scanning for images...');
    
    const publicImages = findImages(publicDir);
    const mediaImages = findImages(mediaDir);
    const allImages = [...publicImages, ...mediaImages];
    
    console.log(`📊 Found ${allImages.length} images to optimize`);
    
    let optimized = 0;
    let failed = 0;
    
    for (const image of allImages) {
      if (optimizeImage(image)) {
        optimized++;
      } else {
        failed++;
      }
    }
    
    console.log(`\n📈 Optimization Summary:`);
    console.log(`✅ Successfully optimized: ${optimized}`);
    console.log(`❌ Failed to optimize: ${failed}`);
    console.log(`📊 Total processed: ${allImages.length}`);
    
    // Generate optimization report
    const report = {
      timestamp: new Date().toISOString(),
      totalImages: allImages.length,
      optimized: optimized,
      failed: failed,
      successRate: `${((optimized / allImages.length) * 100).toFixed(2)}%`
    };
    
    fs.writeFileSync(
      path.join(__dirname, '..', 'image-optimization-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    console.log('📄 Report saved to image-optimization-report.json');
    
  } catch (error) {
    console.error('❌ Image optimization failed:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { optimizeImage, findImages };
>>>>>>> origin/cursor/delete-old-data-records-6bba
