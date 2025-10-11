
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

class ImageOptimizer {
  constructor() {
    this.inputDir = 'src/assets/images';
    this.outputDir = 'public/images/optimized';
    this.sizes = [320, 640, 768, 1024, 1200, 1920];
  }

  async optimizeImages() {
    if (!fs.existsSync(this.inputDir)) {
//       return;
    }

    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }

    const _files = fs.readdirSync(this.inputDir);
    const imageFiles = files.filter(file => 
      /.(jpg|jpeg|png|webp)$/i.test(file)
    );

    for (const file of imageFiles) {
      await this.optimizeImage(file);
    }

//     }

  async optimizeImage(filename) {
//     const inputPath = path.join(this.inputDir, filename);
//     const baseName = path.parse(filename).name;

    for (const size of this.sizes) {
//       const outputPath = path.join(this.outputDir, `${baseName}-${size}.webp`);
      
      try {
        await sharp(inputPath)
          .resize(size, null, { withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);
        
//         } catch (error) {
//         }
    }
  }
}

const _optimizer = new ImageOptimizer();
optimizer.optimizeImages();
