
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const imageDir = path.join(process.cwd(), 'public/images');
  if (!fs.existsSync(imageDir)) return;
  
  const files = fs.readdirSync(imageDir);
  const imageFiles = files.filter(file => 
    /.(jpg|jpeg|png|gif|webp)$/i.test(file)
  );
  
  for (const file of imageFiles) {
    const inputPath = path.join(imageDir, file);
    const outputPath = path.join(imageDir, file.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp'));
    
    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Optimized: ${file}`);
    } catch (error) {
      console.error(`Failed to optimize ${file}:`, error.message);
    }
  }
}

optimizeImages().catch(console.error);
