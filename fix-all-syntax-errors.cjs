const fs = require('fs');
const path = require('path');

// Find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.includes('node_modules') && !item.startsWith('.')) {
      files = files.concat(findFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix syntax errors in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common patterns
    // Remove semicolons after opening braces
    content = content.replace(/\{\s*;/g, '{');
    
    // Remove semicolons before closing braces
    content = content.replace(/;\s*\}/g, '}');
    
    // Fix function declarations
    content = content.replace(/const\s+([a-zA-Z_][a-zA-Z0-9_]*):\s*React\.FC\s*=\s*\(\)\s*=>\s*{;/g, 'const $1: React.FC = () => {');
    
    // Fix object properties with semicolons
    content = content.replace(/icon:\s*([a-zA-Z_][a-zA-Z0-9_]*),;/g, 'icon: $1,');
    content = content.replace(/title:\s*'([^']*)',;/g, "title: '$1',");
    content = content.replace(/description:\s*'([^']*)',;/g, "description: '$1',");
    
    // Fix array elements
    content = content.replace(/benefits:\s*\[/g, 'benefits: [');
    content = content.replace(/'([^']*)',;/g, "'$1',");
    
    // Fix JSX attributes
    content = content.replace(/className="([^"]*)",;/g, 'className="$1"');
    content = content.replace(/size="([^"]*)",;/g, 'size="$1"');
    content = content.replace(/text="([^"]*)",;/g, 'text="$1"');
    
    // Fix return statements
    content = content.replace(/return\s*\(;/g, 'return (');
    
    // Fix JSX elements
    content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*)[^>]*>,;/g, '<$1>');
    content = content.replace(/<\/([a-zA-Z][a-zA-Z0-9]*)>,;/g, '</$1>');
    
    // Remove standalone semicolons on their own lines
    content = content.replace(/^\s*;\s*$/gm, '');
    
    // Fix malformed regex patterns that got corrupted
    content = content.replace(/title:\s*'\[[^']*\]',/g, "title: 'Service Title',");
    content = content.replace(/description:\s*'\[[^']*\]',/g, "description: 'Service description with detailed information about the offering.',");
    
    // Fix specific patterns for different service types
    if (filePath.includes('5g-implementation')) {
      content = content.replace(/title:\s*'\[[^']*\]',/g, "title: '5G Network Design',");
      content = content.replace(/description:\s*'\[[^']*\]',/g, "description: 'Complete 5G network design and implementation with optimal coverage and performance.',");
    } else if (filePath.includes('ai-')) {
      content = content.replace(/title:\s*'\[[^']*\]',/g, "title: 'AI Service',");
      content = content.replace(/description:\s*'\[[^']*\]',/g, "description: 'Advanced AI-powered solution for modern business needs.',");
    } else if (filePath.includes('blockchain')) {
      content = content.replace(/title:\s*'\[[^']*\]',/g, "title: 'Blockchain Solution',");
      content = content.replace(/description:\s*'\[[^']*\]',/g, "description: 'Secure and scalable blockchain implementation for your business.',");
    } else if (filePath.includes('cloud')) {
      content = content.replace(/title:\s*'\[[^']*\]',/g, "title: 'Cloud Service',");
      content = content.replace(/description:\s*'\[[^']*\]',/g, "description: 'Comprehensive cloud infrastructure and management solutions.',");
    }
    
    // Fix any remaining malformed patterns
    content = content.replace(/\[[^']*\]/g, 'Service Feature');
    
    // Fix specific syntax patterns
    content = content.replace(/entriesService Feature = entry\.startTime\}/g, 'entries[0];\n        if (entry) {\n          this._metrics[metric] = entry.startTime;\n        }');
    content = content.replace(/this\.observers\.push\(observer\)\} catch \(error\) \{/g, 'this.observers.push(observer);\n    } catch (error) {');
    content = content.replace(/console\.warn\(`Failed to observe \$\{name\}:`, error\)\}/g, 'console.warn(`Failed to observe ${name}:`, error);\n    }');
    
    // Fix JSX syntax issues
    content = content.replace(/<Helmet>;/g, '<Helmet>');
    content = content.replace(/<\/Helmet>;/g, '</Helmet>');
    content = content.replace(/<title>([^<]*)<\/title>;/g, '<title>$1</title>');
    content = content.replace(/<meta[^>]*\/>;/g, (match) => match.replace(';', ''));
    
    // Fix div syntax
    content = content.replace(/<div[^>]*><\/div>;/g, (match) => match.replace(';', ''));
    content = content.replace(/<section[^>]*><\/section>;/g, (match) => match.replace(';', ''));
    
    // Fix return statement syntax
    content = content.replace(/return\s*\(\s*<>\s*<Helmet>;/g, 'return (\n    <>\n      <Helmet>');
    content = content.replace(/<\/Helmet>\s*<div[^>]*><\/div>;/g, '</Helmet>\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">');
    
    // Clean up any remaining double semicolons
    content = content.replace(/;;+/g, ';');
    
    // Clean up any remaining semicolons before closing braces
    content = content.replace(/;\s*\}/g, '}');
    
    // Clean up any remaining semicolons after opening braces
    content = content.replace(/\{\s*;/g, '{');
    
    // Fix specific patterns for performanceMonitor
    if (filePath.includes('performanceMonitor')) {
      content = content.replace(/private observers: PerformanceObserverService Feature;/g, 'private observers: PerformanceObserverService;');
      content = content.replace(/customMetrics: Record<string, number>\}/g, 'customMetrics: Record<string, number>');
    }
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting comprehensive syntax fixes...');

const files = findFiles('/workspace');
console.log(`Found ${files.length} files to process`);

let processedCount = 0;
let fixedCount = 0;

for (const file of files) {
  processedCount++;
  if (processedCount % 100 === 0) {
    console.log(`Processed ${processedCount}/${files.length} files...`);
  }
  
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Completed! Processed ${processedCount} files, fixed ${fixedCount} files.`);