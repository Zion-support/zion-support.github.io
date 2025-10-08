
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
      // console.log('No images directory found');
      return;
    }

    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }

    const files = fs.readdirSync(this.inputDir);
    const imageFiles = files.filter(file => 
      /.(jpg|jpeg|png|webp)$/i.test(file)
    );

    for (const file of imageFiles) {
      await this.optimizeImage(file);
    }

    // console.log('Image optimization complete');
  }

  async optimizeImage(filename) {
    const inputPath = path.join(this.inputDir, filename);
    const baseName = path.parse(filename).name;

    for (const size of this.sizes) {
      const outputPath = path.join(this.outputDir, `${baseName}-${size}.webp`);
      
      try {
        await sharp(inputPath)
          .resize(size, null, { withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);
        
        // console.log(`Generated: ${outputPath}`);
      } catch (error) {
        // console.error(`Error optimizing ${filename} at size ${size}:`, error);
      }
    }
  }
}

const optimizer = new ImageOptimizer();
optimizer.optimizeImages();
