
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const imageFiles = ["/workspace/dist/apple-touch-icon.png","/workspace/dist/favicon-16x16.png","/workspace/dist/favicon-32x32.png","/workspace/dist/logos/zion-logo.png","/workspace/dist/logos/zion-logo.svg","/workspace/dist/og/docs-lore-bible.svg","/workspace/dist/og/docs-prompts-the-synth-dossier-operator.svg","/workspace/dist/og/docs-prompts-zion-prompts.svg","/workspace/dist/og/docs-storyboards-zion-origin.svg","/workspace/public/apple-touch-icon.png","/workspace/public/favicon-16x16.png","/workspace/public/favicon-32x32.png","/workspace/public/logos/zion-logo.png","/workspace/public/logos/zion-logo.svg","/workspace/public/og/docs-lore-bible.svg","/workspace/public/og/docs-prompts-the-synth-dossier-operator.svg","/workspace/public/og/docs-prompts-zion-prompts.svg","/workspace/public/og/docs-storyboards-zion-origin.svg"];
  let totalSavings = 0;
  
  for (const imagePath of imageFiles) {
    try {
      const originalSize = fs.statSync(imagePath).size;
      
      const result = await imagemin([imagePath], {
        destination: path.dirname(imagePath),
        plugins: [
          imageminMozjpeg({ quality: 80 }),
          imageminPngquant({ quality: [0.6, 0.8] }),
        ]
      });
      
      if (result.length > 0) {
        const optimizedSize = fs.statSync(imagePath).size;
        const savings = originalSize - optimizedSize;
        totalSavings += savings;
        console.log(`Optimized ${path.basename(imagePath)}: ${(savings / 1024).toFixed(2)} KB saved`);
      }
    } catch (error) {
      console.log(`Failed to optimize ${imagePath}: ${error.message}`);
    }
  }
  
  console.log(`Total savings: ${(totalSavings / 1024).toFixed(2)} KB`);
}

optimizeImages().catch(console.error);
