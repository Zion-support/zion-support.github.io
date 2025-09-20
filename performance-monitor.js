// Simple performance monitoring
const fs = require('fs'),
const path = require('path'),

function analyzeBundle() {
    const distPath = path.join(__dirname, 'dist'),
    if (!fs.existsSync(distPath)) {
        console.log('No dist folder found'),
        return,
    }
    
    const files = fs.readdirSync(distPath),
    const jsFiles = files.filter(f => f.endsWith('.js')),
    const cssFiles = files.filter(f => f.endsWith('.css')),
    
    console.log(`Bundle Analysis: `),
    console.log(`- JavaScript files: ${jsFiles.length}`),
    console.log(`- CSS files: ${cssFiles.length}`),
    
    let totalSize = 0,
    jsFiles.forEach(file => {
        const filePath = path.join(distPath, file),
        const stats = fs.statSync(filePath),
        totalSize += stats.size,
        console.log(`- ${file}: ${(stats.size / 1024).toFixed(2)} KB`),
    }),
    
    console.log(`Total bundle size: ${(totalSize / 1024).toFixed(2)} KB`),
}

analyzeBundle(),
