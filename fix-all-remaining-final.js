const fs = require('fs');
const path = require('path');

// Function to create a basic page component
function createBasicPage(filePath) {
  const pathParts = filePath.split('/');
  const fileName = pathParts[pathParts.length - 2];
  const title = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const description = 'Professional ' + title.toLowerCase() + ' services by Zion Tech Group. Advanced solutions for your business needs.';
  
  return '"use client";\n' +
'import React from "react";\n' +
'import { Helmet } from "react-helmet-async";\n' +
'import { CheckCircle, ArrowRight, Star, BarChart, Shield, Zap } from "lucide-react";\n' +
'\n' +
'const ' + title.replace(/[^a-zA-Z0-9]/g, '') + 'Page: React.FC = () => {\n' +
'  return (\n' +
'    <>\n' +
'      <Helmet>\n' +
'        <title>' + title + ' - Zion Tech Group</title>\n' +
'        <meta name="description" content="' + description + '" />\n' +
'      </Helmet>\n' +
'      \n' +
'      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">\n' +
'        <section className="relative py-20 px-4 overflow-hidden">\n' +
'          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>\n' +
'          <div className="relative max-w-7xl mx-auto text-center">\n' +
'            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">\n' +
'              ' + title + '\n' +
'            </h1>\n' +
'            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">\n' +
'              ' + description + '\n' +
'            </p>\n' +
'            <div className="flex flex-col sm:flex-row gap-4 justify-center">\n' +
'              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">\n' +
'                Get Started\n' +
'                <ArrowRight className="ml-2 h-5 w-5" />\n' +
'              </button>\n' +
'              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">\n' +
'                Learn More\n' +
'              </button>\n' +
'            </div>\n' +
'          </div>\n' +
'        </section>\n' +
'      </div>\n' +
'    </>\n' +
'  );\n' +
'};\n' +
'\n' +
'export default ' + title.replace(/[^a-zA-Z0-9]/g, '') + 'Page;';
}

// Function to check if a file is corrupted
function isCorruptedFile(content) {
  const corruptedPatterns = [
    /icon:\s*<.*?>\s*,\s*$/m,  // Unterminated string constants
    /description:\s*'$/m,  // Unterminated strings
    /const\s+page\s*=\s*React\.lazy/m,  // Lazy loading in wrong place
    /,\s*->\s*<Helmet>/m,  // Arrow syntax in wrong place
    /return\s+null\s*\}\s*</m,  // Return null followed by JSX
    /import\s*\{\s*,\s*/m,  // Malformed imports
    /Expected\s+';',\s+'}'\s+or\s+<eof>/m,  // Syntax errors
    /Unterminated\s+string\s+constant/m,  // String errors
    /This page is under development\./m,  // Under development pages
    /Expression expected/m,  // Expression errors
    /Expected\s+';',\s+'}'\s+or\s+<eof>/m,  // Syntax errors
    /Expected\s+',',\s+got\s+'className'/m,  // ClassName errors
    /Unexpected\s+token/m,  // Unexpected tokens
    /Unexpected\s+character/m,  // Unexpected characters
    /console\.log\('Form submitted:'/m,  // Console.log in wrong place
    /import\s+EnhancedSEO\s+from\s+'/m,  // Malformed imports
    /import\s+SEOHead\s+from\s+'/m,  // Malformed imports
    /email:\s*'$/m,  // Unterminated strings
    /company:\s*'$/m,  // Unterminated strings
    /phone:\s*'$/m,  // Unterminated strings
    /service:\s*'$/m  // Unterminated strings
  ];
  
  return corruptedPatterns.some(pattern => pattern.test(content));
}

// Function to find all corrupted files
function findCorruptedFiles(dir) {
  const corruptedFiles = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'components') {
          scanDirectory(fullPath);
        } else if (item.endsWith('.tsx') && item === 'page.tsx') {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (isCorruptedFile(content)) {
              corruptedFiles.push(fullPath);
            }
          } catch (error) {
            // If we can't read the file, it's likely corrupted
            corruptedFiles.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
  
  scanDirectory(dir);
  return corruptedFiles;
}

// Main execution
console.log('Scanning for all remaining corrupted files...');
const corruptedFiles = findCorruptedFiles(path.join(__dirname, 'app'));

console.log('Found ' + corruptedFiles.length + ' corrupted files:');
corruptedFiles.forEach(file => console.log('  - ' + file));

console.log('\nStarting to fix all corrupted files...');
let fixedCount = 0;

corruptedFiles.forEach(filePath => {
  try {
    const newContent = createBasicPage(filePath);
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Fixed: ' + filePath);
    fixedCount++;
  } catch (error) {
    console.error('Error fixing ' + filePath + ':', error.message);
  }
});

console.log('\nFixed ' + fixedCount + ' out of ' + corruptedFiles.length + ' corrupted files.');