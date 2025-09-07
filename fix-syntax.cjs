const fs = require('fs');
const path = require('path');

// Function to fix common syntax issues caused by merge conflict resolution
function fixSyntaxIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing line breaks and semicolons
    content = content.replace(/;(\w)/g, ';\n$1');
    content = content.replace(/}([^;])/g, '}\n$1');
    content = content.replace(/\)([^;])/g, ')\n$1');
    content = content.replace(/\{([^;])/g, '{\n$1');
    content = content.replace(/\}([^;])/g, '}\n$1');
    
    // Fix JSX syntax issues
    content = content.replace(/<(\w+);/g, '<$1');
    content = content.replace(/>;/g, '>');
    content = content.replace(/className=\{`([^`]+)`\};/g, 'className={`$1`}');
    
    // Fix import statements
    content = content.replace(/import\s+([^;]+);/g, 'import $1;');
    
    // Fix function declarations
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, 'const $1: React.FC = () => {\n');
    
    // Fix array declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\[;/g, 'const $1 = [\n');
    
    // Fix object declarations
    content = content.replace(/\{([^}]+)\};/g, '{\n$1\n};');
    
    // Clean up extra semicolons
    content = content.replace(/;;+/g, ';');
    content = content.replace(/;\s*;/g, ';');
    
    // Fix JSX closing tags
    content = content.replace(/<\/div>;/g, '</div>');
    content = content.replace(/<\/section>;/g, '</section>');
    content = content.replace(/<\/header>;/g, '</header>');
    content = content.replace(/<\/footer>;/g, '</footer>');
    
    fs.writeFileSync(filePath, content);
    console.log(`✓ Fixed syntax in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
  }
}

// Fix critical files
const criticalFiles = [
  'src/components/BlogSection.tsx',
  'src/components/Button.tsx',
  'src/components/Card.tsx',
  'src/components/Footer.tsx',
  'src/components/Header.tsx'
];

criticalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    fixSyntaxIssues(file);
  }
});

console.log('Syntax fixes applied to critical files');