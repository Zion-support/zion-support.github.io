<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
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
=======
=======
#!/usr/bin/env node
const path = require('path');
const fs = require('fs');

async function ensureDeps() {
  try { require('imagemin'); } catch { console.error('Missing imagemin deps'); process.exit(1); }
}

async function run() {
  await ensureDeps();
  const imagemin = require('imagemin');
  const mozjpeg = require('imagemin-mozjpeg');
  const pngquant = require('imagemin-pngquant');
  const svgo = require('imagemin-svgo');
  const fg = require('fast-glob');

  const base = path.join(process.cwd(), 'public');
  if (!fs.existsSync(base)) { console.log('No public/ directory'); return; }

  const patterns = ['**/*.jpg','**/*.jpeg','**/*.png','**/*.svg'];
  const files = await fg(patterns, { cwd: base, onlyFiles: true });
  let totalSaved = 0; let count = 0;

  for (const rel of files) {
    const filePath = path.join(base, rel);
    const before = fs.statSync(filePath).size;
    const out = await imagemin([filePath], {
      destination: path.dirname(filePath);
      plugins: [
        mozjpeg({ quality: 78 });
        pngquant({ quality: [0.65, 0.8] });
        svgo({ multipass: true })
      ]
    });
    const after = fs.statSync(filePath).size;
    const saved = before - after;
    if (saved > 0) {
      totalSaved += saved; count++;
      console.log(`Optimized ${rel}: -${(saved/1024).toFixed(1)}KB`);
    }
  }
  console.log(`Image optimization complete: ${count} files improved, saved ${(totalSaved/1024).toFixed(1)}KB`);
}

run().catch((e)=>{ console.error(e); process.exit(1); });
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
<<<<<<< HEAD
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
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
