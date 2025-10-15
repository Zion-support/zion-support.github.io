const fs = require('fs');
const path = require('path');

console.log('🧹 Starting console log removal...');

const distDir = path.join(__dirname, '../dist');
const files = fs.readdirSync(distDir, { recursive: true })
  .filter(file => file.endsWith('.js'))
  .map(file => path.join(distDir, file));

console.log(`📁 Found ${files.length} JavaScript files to process`);

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    // Simple console.log removal
    content = content.replace(/console\.log\([^)]*\);?/g, '');
    content = content.replace(/console\.warn\([^)]*\);?/g, '');
    content = content.replace(/console\.error\([^)]*\);?/g, '');
    fs.writeFileSync(file, content);
    console.log(`✅ Cleaned console logs from: ${path.relative(distDir, file)}`);
  } catch (error) {
    console.log(`❌ Error processing ${file}:`, error.message);
  }
});

console.log('🎉 Console log removal completed!');