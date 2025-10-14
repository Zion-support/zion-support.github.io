import fs from 'fs';
import path from 'path';

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  // Fix malformed class names with extra zeros
  content = content.replace(/(\w+)-(\d+)0+(\d+)/g, '$1-$20$3');
  content = content.replace(/(\w+)0+(\d+)/g, '$10$2');
  
  // Fix malformed grid classes
  content = content.replace(/md:\s+grid-cols/g, 'md:grid-cols');
  content = content.replace(/l,g:grid-cols/g, 'lg:grid-cols');
  
  // Fix malformed opacity classes
  content = content.replace(/(\w+)\/50/g, '$1/50');
  content = content.replace(/(\w+)0+\/50/g, '$1/50');
  
  // Fix malformed color classes
  content = content.replace(/(\w+)-(\d+)0+(\d+)/g, '$1-$20$3');
  content = content.replace(/(\w+)0+(\d+)/g, '$1$2');
  
  // Fix malformed duration classes
  content = content.replace(/duration-(\d+)0+(\d+)/g, 'duration-$10$2');
  
  // Fix malformed JSX attributes
  content = content.replace(/className="([^"]*)"\/>/g, 'className="$1" />');
  
  // Fix malformed string literals
  content = content.replace(/'([^']*)'/g, '"$1"');
  
  // Fix malformed React component declarations
  content = content.replace(/const (\w+): "React\.FC = \(\) => \{"/g, 'const $1: React.FC = () => {');
  
  // Fix malformed array and object syntax
  content = content.replace(/\[\];/g, '[]');
  content = content.replace(/\];/g, ']');
  content = content.replace(/\{;/g, '{');
  
  // Fix malformed closing tags
  content = content.replace(/<\/section>/g, '</section>');
  content = content.replace(/<\/div>/g, '</div>');
  
  return content;
}

// Function to process all TypeScript/TSX files
function processFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        console.log(`Processing: ${filePath}`);
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        content = fixRemainingErrors(content);
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  }
}

// Process the app directory
console.log('Starting remaining error fixes...');
processFiles('./app');
console.log('Remaining error fixes completed!');