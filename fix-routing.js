const fs = require('fs');
const path = require('path');

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already using Next.js routing
    if (content.includes("import Link from 'next/link'") || content.includes("import { useRouter } from 'next/navigation'")) {
      return;
    }
    
    // Replace React Router imports with Next.js
    content = content.replace(/import { Link } from 'react-router-dom';/g, "import Link from 'next/link';");
    content = content.replace(/import { useNavigate } from 'react-router-dom';/g, "import { useRouter } from 'next/navigation';");
    content = content.replace(/import { useLocation } from 'react-router-dom';/g, "import { usePathname } from 'next/navigation';");
    content = content.replace(/import { useParams } from 'react-router-dom';/g, "import { useParams } from 'next/navigation';");
    content = content.replace(/import { Helmet } from 'react-helmet-async';/g, "");
    content = content.replace(/import { HelmetProvider } from 'react-helmet-async';/g, "");
    
    // Replace React Router components with Next.js
    content = content.replace(/<Helmet>/g, "");
    content = content.replace(/<\/Helmet>/g, "");
    content = content.replace(/<HelmetProvider>/g, "");
    content = content.replace(/<\/HelmetProvider>/g, "");
    
    // Replace Link props
    content = content.replace(/to="/g, 'href="');
    content = content.replace(/to={/g, 'href={');
    
    // Replace navigation hooks
    content = content.replace(/const navigate = useNavigate\(\);?/g, 'const router = useRouter();');
    content = content.replace(/navigate\(/g, 'router.push(');
    content = content.replace(/const location = useLocation\(\);?/g, 'const pathname = usePathname();');
    content = content.replace(/location\.pathname/g, 'pathname');
    
    // Remove Helmet usage
    content = content.replace(/<Helmet>\s*<title>.*?<\/title>\s*<meta name="description" content=".*?" \/>\s*<\/Helmet>/gs, '');
    
    // Clean up any remaining React Router references
    content = content.replace(/from 'react-router-dom'/g, "from 'next/link'");
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix all .tsx files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') && !file.includes('App.tsx')) {
      fixFile(filePath);
    }
  }
}

// Start fixing from the app directory
console.log('Fixing React Router to Next.js routing...');
fixAllFiles('./app');
console.log('Done!');