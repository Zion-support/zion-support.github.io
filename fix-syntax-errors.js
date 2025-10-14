import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix malformed string literals with extra quotes
  content = content.replace(/'([^']*)'/g, '"$1"');
  
  // Fix malformed class names with 'o' instead of '0'
  content = content.replace(/(\w+)-(\d+)o(\d+)/g, '$1-$20$3');
  content = content.replace(/(\w+)o(\d+)/g, '$10$2');
  
  // Fix malformed hover states
  content = content.replace(/hove,r:/g, 'hover:');
  content = content.replace(/hover: /g, 'hover:');
  
  // Fix malformed duration values
  content = content.replace(/duration-(\d+)o(\d+)/g, 'duration-$10$2');
  
  // Fix malformed price strings
  content = content.replace(/"Starting at \$(\d+),(\d+)"/g, '"Starting at $$1,$2"');
  content = content.replace(/"Starting at \$(\d+)",(\d+)o(\d+)'/g, '"Starting at $$1,$20$3"');
  
  // Fix malformed JSX syntax
  content = content.replace(/const (\w+): "React\.FC = \(\) => \{"/g, 'const $1: React.FC = () => {');
  content = content.replace(/const (\w+): "React\.FC = \(\) => \{"/g, 'const $1: React.FC = () => {');
  
  // Fix malformed array syntax
  content = content.replace(/\[\];/g, '[]');
  content = content.replace(/\];/g, ']');
  
  // Fix malformed object syntax
  content = content.replace(/\{;/g, '{');
  content = content.replace(/;\s*title:/g, 'title:');
  content = content.replace(/;\s*description:/g, 'description:');
  content = content.replace(/;\s*price:/g, 'price:');
  content = content.replace(/;\s*features:/g, 'features:');
  
  // Fix malformed closing tags
  content = content.replace(/<\/section>/g, '</section>');
  content = content.replace(/<\/div>/g, '</div>');
  
  // Fix malformed JSX attributes
  content = content.replace(/className="([^"]*)"\/>/g, 'className="$1" />');
  
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
        
        content = fixSyntaxErrors(content);
        
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
console.log('Starting syntax error fixes...');
processFiles('./app');
console.log('Syntax error fixes completed!');