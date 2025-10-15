import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common Lucide React icons used across the project
const commonIcons = [
  'Wifi', 'Cloud', 'Smartphone', 'Shield', 'BarChart3', 'Settings', 'Cpu', 'Globe', 'Activity',
  'CheckCircle', 'Star', 'Brain', 'Users', 'Award', 'Zap', 'Target', 'FileText', 'Bot', 'Workflow',
  'Headphones', 'Mail', 'Phone', 'Play', 'ArrowRight', 'MessageSquare', 'MessageCircle', 'Clock',
  'TrendingUp', 'Database', 'Eye', 'Calendar', 'Search', 'Filter', 'User', 'DollarSign', 'Helmet',
  'ShoppingCart', 'Box', 'Sparkles'
];

// Function to add missing icon imports
function addIconImports(content, filePath) {
  const lines = content.split('\n');
  const importLines = [];
  const otherLines = [];
  let hasReactImport = false;
  let hasIconImport = false;
  let insertIndex = 0;

  // Find existing imports and collect used icons
  const usedIcons = new Set();
  for (const line of lines) {
    if (line.includes('import') && line.includes('from')) {
      if (line.includes('lucide-react')) {
        hasIconImport = true;
        // Extract existing icons from the import
        const match = line.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
        if (match) {
          const existingIcons = match[1].split(',').map(icon => icon.trim());
          existingIcons.forEach(icon => usedIcons.add(icon));
        }
      }
      if (line.includes('react')) {
        hasReactImport = true;
      }
      importLines.push(line);
      insertIndex = lines.indexOf(line) + 1;
    } else {
      otherLines.push(line);
    }
  }

  // Find all icon usage in the content
  for (const icon of commonIcons) {
    if (content.includes(`<${icon}`) || content.includes(`<${icon} `)) {
      usedIcons.add(icon);
    }
  }

  if (usedIcons.size === 0) return content;

  // Create new import line
  const iconList = Array.from(usedIcons).sort().join(', ');
  const iconImport = `import { ${iconList} } from 'lucide-react';`;

  if (hasIconImport) {
    // Replace existing icon import
    const newLines = lines.map(line => {
      if (line.includes('lucide-react')) {
        return iconImport;
      }
      return line;
    });
    return newLines.join('\n');
  } else {
    // Add new icon import
    const newLines = [...lines];
    newLines.splice(insertIndex, 0, iconImport);
    return newLines.join('\n');
  }
}

// Function to fix syntax errors
function fixSyntaxErrors(content) {
  // Fix malformed function declarations
  content = content.replace(/export default function\s+\w+\s*\(\s*\)\s*{\s*return;\s*},\s*{/g, 'export default function AI3DGeneration() {\n  const features = [');
  
  // Fix missing closing braces and parentheses
  content = content.replace(/}\s*,\s*{/g, '},\n    {');
  
  // Fix malformed JSX
  content = content.replace(/<(\w+)\s*className="[^"]*"\s*\/>/g, '<$1 className="w-6 h-6" />');
  
  // Fix unescaped entities
  content = content.replace(/'/g, '&apos;');
  content = content.replace(/"/g, '&quot;');
  
  // Fix missing closing tags
  content = content.replace(/<section[^>]*>(?!.*<\/section>)/g, (match) => {
    if (!content.includes('</section>')) {
      return match + '\n  </section>';
    }
    return match;
  });
  
  return content;
}

// Function to fix parsing errors
function fixParsingErrors(content) {
  // Fix missing opening braces
  content = content.replace(/const\s+\w+\s*=\s*\[\s*{/g, 'const features = [\n    {');
  
  // Fix malformed object literals
  content = content.replace(/{\s*title:\s*"[^"]*",\s*description:\s*"[^"]*",\s*icon:\s*<[^>]+>,\s*included:\s*true\s*}/g, (match) => {
    return match.replace(/,/g, ',\n      ');
  });
  
  // Fix missing semicolons
  content = content.replace(/(\w+)\s*=\s*\[/g, '$1 = [');
  
  return content;
}

// Function to fix specific file issues
function fixSpecificFile(content, filePath) {
  // Fix DynamicPageLoader.tsx
  if (filePath.includes('DynamicPageLoader.tsx')) {
    content = content.replace(/import\s*\(\s*`\.\/\$\{pagePath\s*\}\s*`\s*\)/g, "import(`./${pagePath}`)");
    content = content.replace(/catch\s*\(\s*\)\s*{/g, 'catch (error) {');
  }
  
  // Fix files with parsing errors
  if (filePath.includes('ai-3d-generation') || filePath.includes('ai-accounting-assistant') || 
      filePath.includes('ai-agricultural-intelligence-pro') || filePath.includes('ai-api-management') ||
      filePath.includes('ai-api-manager') || filePath.includes('ai-automated-reporting') ||
      filePath.includes('ai-automated-testing') || filePath.includes('ai-autonomous-systems') ||
      filePath.includes('ai-blockchain-analytics') || filePath.includes('ai-blockchain-solutions') ||
      filePath.includes('ai-business-intelligence-pro') || filePath.includes('ai-chatbot-builder') ||
      filePath.includes('ai-chatbot-enterprise') || filePath.includes('ai-climate-prediction-engine') ||
      filePath.includes('ai-climate-solutions-pro') || filePath.includes('ai-database-solutions') ||
      filePath.includes('ai-project-management-pro') || filePath.includes('ai-social-media-manager-pro') ||
      filePath.includes('ai-social-media-manager') || filePath.includes('ai-voice-assistant-enterprise')) {
    
    // Fix the malformed function structure
    content = content.replace(/export default function\s+\w+\s*\(\s*\)\s*{\s*return;\s*},\s*{/g, 
      'export default function AI3DGeneration() {\n  const features = [\n    {');
    
    // Fix the closing structure
    content = content.replace(/}\s*,\s*{/g, '},\n    {');
    content = content.replace(/}\s*];\s*$/g, '}\n  ];\n\n  return (\n    <div>\n      {/* Component content */}\n    </div>\n  );\n}');
  }
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = addIconImports(content, filePath);
    content = fixSyntaxErrors(content);
    content = fixParsingErrors(content);
    content = fixSpecificFile(content, filePath);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Process all files
console.log('Starting error fixes...');
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

let fixedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);