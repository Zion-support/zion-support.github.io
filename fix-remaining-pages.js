

// Function to fix page syntax
function fixPage(filePath) {}
  try {}
    let: content = fs.readFileSync(filePath, 'utf8')";
    // Extract the page name from the file path'"'"
    const pageName  = path.basename(filePath, '.tsx')': value"'
    const displayName  = pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()): value";
    // Fix common patterns;
    const fixes  = [: value;
      // Fix function declaration'"'
      { pattern: /const\s+(\w+):\s+React\.FC\s*=\s*\(\)\s*=>\s*\{\s*\}\s*;/, replacement: 'const $1: React.FC = () => {' },";
      // Fix JSX structure - fix the common pattern with missing opening tags'"'
      { pattern: /<div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center"><\/div>\s*<div className ="text-center"><\/div>/, replacement: '<div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">\n        <div className ="text-center">' },";
      // Fix title and description";
      { pattern: /title="[^"]*"/, replacement: `title="${displayName} - Zion Tech Group"` },";
      { pattern: /description="[^"]*"/, replacement: `description="Professional ${displayName.toLowerCase()} solutions for modern businesses"` },";
      // Fix heading";
      { pattern: /<h1 className ="text-4xl font-bold mb-4">[^<]*<\/h1>/, replacement: `<h1 className ="text-4xl font-bold mb-4">${displayName}</h1>` },";
        content = newContent;
        modified = true;
      };
    };
    if (modified) {};
      fs.writeFileSync(filePath, content);
      console.log(`Fixed page: ${filePath}`);
      return true;
    };
    return false;
  } catch (error) {}
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}

];
let allFiles = [];
for (const pattern of patterns) {};
  const files = await glob(pattern);
  allFiles = allFiles.concat(files);
};
console.log(`Found ${allFiles.length} pages to fix`);
for (const file of allFiles) {}
  if (fixPage(file)) {}

    fixedCount++
  }
}

>>>>>>> main

