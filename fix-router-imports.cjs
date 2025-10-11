const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx and .ts files
function findFiles(dir, extensions = ['.tsx', '.ts']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(findFiles(filePath, extensions));
    } else if (extensions.some(ext => file.endsWith(ext))) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Function to fix react-router-dom imports
function fixRouterImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Replace react-router-dom imports
    if (content.includes('react-router-dom')) {
      // Replace Link import
      content = content.replace(
        /import\s*{\s*Link\s*}\s*from\s*['"]react-router-dom['"];?/g,
        "import Link from 'next/link';"
      );
      
      // Replace useNavigate import
      content = content.replace(
        /import\s*{\s*useNavigate\s*}\s*from\s*['"]react-router-dom['"];?/g,
        "import { useRouter } from 'next/navigation';"
      );
      
      // Replace useLocation import
      content = content.replace(
        /import\s*{\s*useLocation\s*}\s*from\s*['"]react-router-dom['"];?/g,
        "import { usePathname } from 'next/navigation';"
      );
      
      // Replace BrowserRouter, Routes, Route imports
      content = content.replace(
        /import\s*{\s*[^}]*}\s*from\s*['"]react-router-dom['"];?/g,
        ""
      );
      
      // Replace to= with href=
      content = content.replace(/to=/g, 'href=');
      
      // Replace navigate() with router.push()
      content = content.replace(/navigate\(/g, 'router.push(');
      
      // Replace useNavigate() with useRouter()
      content = content.replace(/useNavigate\(\)/g, 'useRouter()');
      
      // Replace useLocation() with usePathname()
      content = content.replace(/useLocation\(\)/g, 'usePathname()');
      
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to check...`);

files.forEach(file => {
  fixRouterImports(file);
});

console.log('Router import fixes completed!');