<<<<<<< HEAD


const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

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

=======
=======
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
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
