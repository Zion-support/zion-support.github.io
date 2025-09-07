<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
<<<<<<< HEAD
async function optimizeImages() {
  const imagesDir = path.join(__dirname, 'public', 'images');
  
  if (fs.existsSync(imagesDir)) {
    const files = fs.readdirSync(imagesDir);
    
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
        const inputPath = path.join(imagesDir, file);
        const outputPath = path.join(imagesDir, `optimized-${file}`);
        
        await sharp(inputPath)
          .resize(800, 600, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);
      }
    }
  }
}

optimizeImages();
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
async function optimizeImages() {}
  const publicDir = path.join(process.cwd(), 'public;';);
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
optimizeImages().catch(console.error);

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
