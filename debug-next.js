// Check if we're in a valid Next.js project;
console.log(' Current directory:', process.cwd());
console.log(' Package.json exists:', fs.existsSync('package.json'));
console.log(' Next.config.js exists:', fs.existsSync('next.config.js'));
console.log(' Pages directory exists:', fs.existsSync('pages'));
console.log(' Components directory exists:', fs.existsSync('components'));
// Check package.json;
if (fs.existsSync('package.json')) {;
}
// Check pages directory structure;
}
// Check for any problematic files;
const allFiles = getAllFiles('.', ['.tsx.ts.jsx.js']),;
for (const file of allFiles) {;
  try {;
    const content = fs.readFileSync(file, 'utf8'),;
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
