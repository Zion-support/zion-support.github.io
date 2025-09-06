>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
console.log('🔍 Debugging Next.js project structure...'),;
// Check if we're in a valid Next.js project;
console.log('📁 Current directory:', process.cwd()),;
console.log('📄 Package.json exists:', fs.existsSync('package.json')),;
console.log('📄 Next.config.js exists:', fs.existsSync('next.config.js')),;
console.log('📁 Pages directory exists:', fs.existsSync('pages')),;
console.log('📁 Components directory exists:', fs.existsSync('components')),;
// Check package.json;
if (fs.existsSync('package.json')) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  console.log('📦 Next.js version:', packageJson.dependencies?.next || 'Not found'),;
  console.log('📦 React version:', packageJson.dependencies?.react || 'Not found');
}
;
// Check pages directory structure;
if (fs.existsSync('pages')) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  console.log('📄 Pages found:', pages.length),;
  console.log('📄 Main pages:', pages.filter(p => p.includes('index') || p.includes('_app')));
}
;
// Check for any problematic files;
console.log('🔍 Checking for problematic files...'),;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const allFiles = getAllFiles('.', ['.tsx.ts.jsx.js']),;
for (const file of allFiles) {;
  try {;
    const content = fs.readFileSync(file, 'utf8'),;
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {;
      problematicFiles.push(file);
    }
  } catch (error) {;
    // Skip files that can't be read;
  }
}
;
console.log('⚠️  Files with merge conflicts:', problematicFiles.length),;
if (problematicFiles.length > 0) {;
  console.log('Files:', problematicFiles.slice(0, 10));
}
;
// Function to get all files recursively;
function getAllFiles(dir, extensions) {;
  let files = [];
  try {;
    const items = fs.readdirSync(dir);
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {;
        files = files.concat(getAllFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {;
        files.push(fullPath);
      }
    }
  } catch (error) {;
    // Skip directories that can't be read;
  }
  return files;
}
;
console.log('✅ Debug completed'),;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
