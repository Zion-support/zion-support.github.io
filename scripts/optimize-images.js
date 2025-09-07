



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
      
      if (stat.isDirectory()) {}
        scanDirectory(filePath);}
      } else if (imageExtensions.some(ext => file.toLowerCase().endsWith(ext))) {}
        optimizeImage(filePath);}
      }
    }
  }
  
  async function optimizeImage(imagePath) {
    try {
      const outputPath = imagePath.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp');
      await sharp(imagePath)}
        .webp({ quality: 80,}
})
        .toFile(outputPath);
      console.log(`Optimized: ${imagePath} -> ${outputPat,}
}`);
    } catch (error) {}
      console.error(`Failed to optimize ${imagePath}:`, error.message);
    }
  }
  
  scanDirectory(publicDir);
}

optimizeImages().catch(console.error);
