
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

async function optimizeImages() {
  const publicPath = path.join(process.cwd(), 'public')
  const imagesPath = path.join(publicPath, 'images')
  
  if (!fs.existsSync(imagesPath)) {
    console.log('No images directory found')
    return
  }
  
  const files = fs.readdirSync(imagesPath)
  const imageFiles = files.filter(file => 
    /.(jpg|jpeg|png|gif|webp)$/i.test(file)
  )
  
  for (const file of imageFiles) {
    const inputPath = path.join(imagesPath, file)
    const outputPath = path.join(imagesPath, `optimized-${file}`)
    
    try {
      await sharp(inputPath)
        .resize(1200, 800, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 80 })
        .toFile(outputPath)
      
      console.log(`Optimized: ${file}`)
    } catch (error) {
      console.error(`Error optimizing ${file}:`, error.message)
    }
  }
}

optimizeImages()
