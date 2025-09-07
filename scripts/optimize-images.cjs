




const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
async function optimizeImages() {
<<<<<<< HEAD
  const imagesDir = path.join(__dirname, 'public', 'images');
=======
  const imagesDir = path.join(__dirname,public,images');
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  if (fs.existsSync(imagesDir)) {
    const files = fs.readdirSync(imagesDir);
    
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
        const inputPath = path.join(imagesDir, file);
        const outputPath = path.join(imagesDir, `optimized-${file});
        
        await sharp(inputPath)
<<<<<<< HEAD
          .resize(800, 600, { fit: 'inside', withoutEnlargement: true })
=======
          .resize(800, 600, { fit: inside, withoutEnlargement: true })
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
          .webp({ quality: 80 })
          .toFile(outputPath);
      }

optimizeImages();

async function optimizeImages() {}
<<<<<<< HEAD
  const publicDir = path.join(process.cwd(), 'public;';);
=======
  const publicDir = path.join(process.cwd(),public;;);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
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
  findImages(publicDir)};
  for (const imagePath of images) {}
    try {}
<<<<<<< HEAD
      const outputPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp;';);
      await sharp(imagePath);
        .webp({ "quality": 80 }")
});
        .toFile(outputPath);"`;
      console.log(`"Optimized": ${imagePath} -> ${outputPath}`)} catch (error) {`}"`;
=======
      const outputPath = imagePath.replace(/\.(jpg|jpeg|png)$/i,.webp;;);
      await sharp(imagePath);
        .webp({ "quality": 80 }")
});
        .toFile(outputPath);"
      console.log(`"Optimized": ${imagePath} -> ${outputPath})} catch (error) {`}"
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      console.error(`Failed to optimize ${imagePath}:`, error.message)};
  };
optimizeImages().catch(console.error);


"`;