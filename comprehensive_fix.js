import fs from 'fs';
import path from 'path';

// Function to fix a single TSX file
function fixTSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unused CheckCircle imports
    if (content.includes('CheckCircle') && !content.includes('<CheckCircle') && !content.includes('CheckCircle.')) {
      // Remove CheckCircle from imports
      content = content.replace(/,\s*CheckCircle/g, '');
      content = content.replace(/CheckCircle,\s*/g, '');
      content = content.replace(/{\s*CheckCircle\s*}/g, '{}');
      content = content.replace(/import\s*{\s*CheckCircle\s*}\s*from\s*['"][^'"]+['"];?\s*\n?/g, '');
      modified = true;
    }

    // Fix unused Helmet imports
    if (content.includes('Helmet') && !content.includes('<Helmet')) {
      content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"][^'"]+['"];?\s*\n?/g, '');
      modified = true;
    }

    // Fix unused Navigation imports
    if (content.includes('Navigation') && !content.includes('<Navigation')) {
      content = content.replace(/import\s*Navigation\s*from\s*['"][^'"]+['"];?\s*\n?/g, '');
      modified = true;
    }

    // Fix unused Footer imports
    if (content.includes('Footer') && !content.includes('<Footer')) {
      content = content.replace(/import\s*Footer\s*from\s*['"][^'"]+['"];?\s*\n?/g, '');
      modified = true;
    }

    // Fix missing variable declarations for features arrays
    const featuresPattern = /^(\s*)({\s*icon:)/gm;
    if (featuresPattern.test(content)) {
      // Find the function declaration and add features array
      content = content.replace(/(const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*{)\s*({[\s\S]*?icon:)/g, '$1\n  const features = [\n    $2');
      modified = true;
    }

    // Fix missing semicolons and array declarations
    content = content.replace(/(\s*})\s*]\s*{\s*icon:/g, '$1\n  ];\n\n  const services = [\n    {\n      icon:');
    content = content.replace(/(\s*})\s*]\s*'[^']*',/g, '$1\n  ];\n\n  const standards = [\n    \'');
    content = content.replace(/(\s*})\s*]\s*{\s*icon:/g, '$1\n  ];\n\n  const benefits = [\n    {\n      icon:');

    // Fix missing return statement
    if (content.includes('const ') && !content.includes('return (')) {
      // Find the last array declaration and add return statement
      const lastArrayMatch = content.match(/(\s*]\s*;?\s*)([^}]*)(\s*}\s*;?\s*export)/);
      if (lastArrayMatch) {
        content = content.replace(lastArrayMatch[0], lastArrayMatch[1] + '\n\n  return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <main className="pt-20 px-4 py-20">\n        <div className="max-w-7xl mx-auto">\n          <div className="text-center mb-16">\n            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\n              AI Services\n            </h1>\n            <p className="text-xl text-gray-300 max-w-3xl mx-auto">\n              Professional AI services delivered by experienced professionals.\n            </p>\n          </div>\n        </div>\n      </main>\n    </div>\n  );\n' + lastArrayMatch[3]);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to find all TSX files
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = './app';
const tsxFiles = findTSXFiles(appDir);

console.log(`Found ${tsxFiles.length} TSX files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixTSXFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);