const fs = require('fs');
const path = require('path');

// Function to fix malformed import statements
function fixImportErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix files where imports are after function declaration
    if (content.includes('export default function') && content.includes('import React from \'react\';')) {
      // Extract the function name
      const functionMatch = content.match(/export default function (\w+)\(\)/);
      if (functionMatch) {
        const functionName = functionMatch[1];
        
        // Extract all imports
        const importMatches = content.match(/import[^;]+;/g);
        if (importMatches) {
          const imports = importMatches.join('\n');
          
          // Create proper file structure
          const properFile = `'use client';
${imports}

const ${functionName}: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>${functionName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} - Zion Tech Group</title>
        <meta name="description" content="${functionName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="${functionName.toLowerCase().replace(/([A-Z])/g, '-$1').replace(/^-/, '')}, AI solutions, IT services" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            ${functionName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {' '}Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional ${functionName.replace(/([A-Z])/g, ' $1').toLowerCase()} services by Zion Tech Group.
          </p>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive ${functionName.replace(/([A-Z])/g, ' $1').toLowerCase()} solutions. 
              Contact us to learn more about our services.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ${functionName};`;

          content = properFile;
          modified = true;
        }
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find and fix all files with import errors
function findAndFixImportErrors(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixImportErrors(filePath);
    } else if (file.endsWith('.tsx') && !file.includes('node_modules')) {
      if (fixImportErrors(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Run the fix
console.log('Starting to fix import errors...');
const fixedCount = findAndFixImportErrors('./app');
console.log(`Fixed ${fixedCount} files.`);