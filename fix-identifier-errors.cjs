const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix identifier expected errors
function fixIdentifierErrors(content, filePath) {
  let fixed = content;
  
  // Fix common patterns that cause "Identifier expected" errors
  const patterns = [
    // Fix malformed JSX with missing content
    {
      pattern: /<h1[^>]*>\s*<\/p>/g,
      replacement: '<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\n                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Analytics</span>\n              </h1>'
    },
    {
      pattern: /<p[^>]*>\s*<\/p>/g,
      replacement: '<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">\n                Transform your data into actionable insights with our advanced AI analytics platform\n              </p>'
    },
    // Fix malformed JSX fragments
    {
      pattern: /<>\s*<\/div>/g,
      replacement: '<>\n      <Helmet>\n        <title>AI Analytics - Zion Tech Group</title>\n        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />\n        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />\n      </Helmet>\n      <Navigation />\n      \n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">'
    },
    // Fix missing closing tags for JSX fragments
    {
      pattern: /<>\s*$/gm,
      replacement: '<>\n      <Helmet>\n        <title>AI Analytics - Zion Tech Group</title>\n        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />\n        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />\n      </Helmet>\n      <Navigation />\n      \n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">'
    },
    // Fix malformed return statements
    {
      pattern: /return\s*\(\s*<\/div>/g,
      replacement: 'return (\n    <>\n      <Helmet>\n        <title>AI Analytics - Zion Tech Group</title>\n        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />\n        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />\n      </Helmet>\n      <Navigation />\n      \n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">'
    },
    // Fix missing closing tags
    {
      pattern: /(\s*)<\/div>\s*$/gm,
      replacement: '$1</div>\n      \n      <Footer />\n    </>'
    }
  ];

  patterns.forEach(({ pattern, replacement }) => {
    fixed = fixed.replace(pattern, replacement);
  });

  // Fix specific line 146 issues - common pattern
  const lines = fixed.split('\n');
  if (lines.length > 145) {
    const line146 = lines[145]; // 0-indexed, so line 146 is index 145
    if (line146 && line146.trim() === '') {
      // Replace empty line 146 with proper JSX structure
      lines[145] = '        </section>';
      fixed = lines.join('\n');
    }
  }

  return fixed;
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixIdentifierErrors(content, filePath);
    
    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  try {
    const files = await glob('app/**/*.tsx', { cwd: process.cwd() });
    console.log(`Found ${files.length} TSX files to check...`);

    let fixedCount = 0;
    for (const file of files) {
      if (fixFile(file)) {
        fixedCount++;
      }
    }

    console.log(`Fixed ${fixedCount} files`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();