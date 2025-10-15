const fs = require('fs');
const path = require('path');

function optimizeImages() {
  const publicPath = path.join(__dirname, '../public');
  const distPath = path.join(__dirname, '../dist');
  
  console.log('🖼️  Starting image optimization...\n');

  // Check if Sharp is available for image optimization
  let sharp;
  try {
    sharp = require('sharp');
  } catch (error) {
    console.log('⚠️  Sharp not available. Install with: npm install sharp');
    console.log('📝 Skipping image optimization...\n');
    return;
  }

  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
  const optimizedImages = [];

  function processDirectory(dirPath, outputPath) {
    if (!fs.existsSync(dirPath)) return;

    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        const newOutputPath = path.join(outputPath, file);
        if (!fs.existsSync(newOutputPath)) {
          fs.mkdirSync(newOutputPath, { recursive: true });
        }
        processDirectory(filePath, newOutputPath);
      } else if (imageExtensions.some(ext => file.toLowerCase().endsWith(ext))) {
        optimizeImage(filePath, outputPath, file);
      }
    });
  }

  function optimizeImage(inputPath, outputDir, filename) {
    const nameWithoutExt = path.parse(filename).name;
    const ext = path.parse(filename).ext.toLowerCase();
    
    try {
      // Create multiple formats and sizes
      const formats = [
        { ext: '.webp', quality: 80 },
        { ext: '.avif', quality: 75 },
        { ext: ext, quality: 85 }
      ];

      const sizes = [
        { width: 400, suffix: '-sm' },
        { width: 800, suffix: '-md' },
        { width: 1200, suffix: '-lg' },
        { width: 1920, suffix: '-xl' }
      ];

      formats.forEach(format => {
        sizes.forEach(size => {
          const outputFilename = `${nameWithoutExt}${size.suffix}${format.ext}`;
          const outputPath = path.join(outputDir, outputFilename);
          
          sharp(inputPath)
            .resize(size.width, null, { 
              withoutEnlargement: true,
              fit: 'inside'
            })
            .toFormat(format.ext.replace('.', ''), { quality: format.quality })
            .toFile(outputPath)
            .then(() => {
              const originalSize = fs.statSync(inputPath).size;
              const optimizedSize = fs.statSync(outputPath).size;
              const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
              
              optimizedImages.push({
                original: filename,
                optimized: outputFilename,
                originalSize: Math.round(originalSize / 1024),
                optimizedSize: Math.round(optimizedSize / 1024),
                savings: `${savings}%`
              });
            })
            .catch(err => {
              console.log(`❌ Error optimizing ${filename}:`, err.message);
            });
        });
      });

    } catch (error) {
      console.log(`❌ Error processing ${filename}:`, error.message);
    }
  }

  // Process public directory
  if (fs.existsSync(publicPath)) {
    processDirectory(publicPath, distPath);
  }

  // Process dist directory for any existing images
  if (fs.existsSync(distPath)) {
    processDirectory(distPath, distPath);
  }

  // Generate responsive image component
  generateResponsiveImageComponent();

  console.log('✅ Image optimization completed!');
  console.log(`📊 Processed ${optimizedImages.length} images`);
  
  if (optimizedImages.length > 0) {
    console.log('\n📈 Optimization results:');
    optimizedImages.forEach(img => {
      console.log(`${img.original} → ${img.optimized} (${img.originalSize}KB → ${img.optimizedSize}KB, ${img.savings} savings)`);
    });
  }
}

function generateResponsiveImageComponent() {
  const componentCode = `import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  sizes = '100vw' 
}) => {
  const baseName = src.replace(/\\.[^/.]+$/, '');
  
  return (
    <picture className={className}>
      <source
        srcSet={\`\${baseName}-sm.avif 400w, \${baseName}-md.avif 800w, \${baseName}-lg.avif 1200w, \${baseName}-xl.avif 1920w\`}
        sizes={sizes}
        type="image/avif"
      />
      <source
        srcSet={\`\${baseName}-sm.webp 400w, \${baseName}-md.webp 800w, \${baseName}-lg.webp 1200w, \${baseName}-xl.webp 1920w\`}
        sizes={sizes}
        type="image/webp"
      />
      <img
        srcSet={\`\${baseName}-sm.jpg 400w, \${baseName}-md.jpg 800w, \${baseName}-lg.jpg 1200w, \${baseName}-xl.jpg 1920w\`}
        sizes={sizes}
        src={src}
        alt={alt}
        loading="lazy"
      />
    </picture>
  );
};

export default ResponsiveImage;`;

  const componentPath = path.join(__dirname, '../app/components/ResponsiveImage.tsx');
  fs.writeFileSync(componentPath, componentCode);
  console.log('📝 Generated ResponsiveImage component');
}

optimizeImages();