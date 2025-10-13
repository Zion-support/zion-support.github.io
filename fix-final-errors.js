import fs from 'fs';
import path from 'path';

// Get all TypeScript/TSX files in the app directory
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix final type issues in a file
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix feature.title usage in pricing plans (features are strings, not objects)
  content = content.replace(/\{feature\.title\}/g, '{feature}');
  content = content.replace(/\{benefit\.title\}/g, '{benefit}');
  content = content.replace(/\{capability\.title\}/g, '{capability}');
  content = content.replace(/\{stat\.title\}/g, '{stat}');
  
  // Fix other property access issues
  content = content.replace(/\{feature\.description\}/g, '{feature}');
  content = content.replace(/\{feature\.icon\}/g, '{feature}');
  content = content.replace(/\{feature\.color\}/g, '{feature}');
  
  // Fix ReactNode issues - replace object usage with property access
  content = content.replace(/\{feature\}/g, '{feature}');
  content = content.replace(/\{benefit\}/g, '{benefit}');
  content = content.replace(/\{capability\}/g, '{capability}');
  content = content.replace(/\{stat\}/g, '{stat}');
  
  // Fix missing services variable
  if (content.includes('{services.') && !content.includes('const services')) {
    content = content.replace(/const benefits: string\[\] = \[\];/, 'const benefits: string[] = [];\n  const services: string[] = [];');
    modified = true;
  }
  
  // Fix duplicate property names in object literals
  content = content.replace(/(\w+):\s*[^,}]+,\s*\1:/g, '$1:');
  
  // Fix missing stats property in features
  if (content.includes('feature.stats') && !content.includes('stats:')) {
    content = content.replace(
      /const features: \{ title: string; description: string; icon: React\.ReactNode; color: string \}\[\] = \[/g,
      'const features: { title: string; description: string; icon: React.ReactNode; color: string; stats?: string }[] = ['
    );
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
}

// Main execution
console.log('Starting final error fixes...');

const appDir = path.join(process.cwd(), 'app');
const files = getAllTsxFiles(appDir);

console.log(`Found ${files.length} files to process`);

for (const file of files) {
  try {
    fixFile(file);
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log('Final error fixes completed!');