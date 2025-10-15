const fs = require('fs');
const path = require('path');

// Function to fix remaining syntax errors
function fixRemainingSyntaxErrors(content) {
  // Fix object property syntax issues
  content = content.replace(/(\w+):\s*(\w+),/g, '$1: $2,');
  content = content.replace(/(\w+):\s*(\w+);/g, '$1: $2;');
  
  // Fix JSX attribute syntax
  content = content.replace(/className:\s*"/g, 'className="');
  content = content.replace(/className:\s*'/g, "className='");
  content = content.replace(/onClick:\s*{/g, 'onClick={');
  content = content.replace(/href:\s*"/g, 'href="');
  content = content.replace(/href:\s*'/g, "href='");
  content = content.replace(/src:\s*"/g, 'src="');
  content = content.replace(/src:\s*'/g, "src='");
  content = content.replace(/alt:\s*"/g, 'alt="');
  content = content.replace(/alt:\s*'/g, "alt='");
  content = content.replace(/fill:\s*"/g, 'fill="');
  content = content.replace(/fill:\s*'/g, "fill='");
  content = content.replace(/stroke:\s*"/g, 'stroke="');
  content = content.replace(/stroke:\s*'/g, "stroke='");
  content = content.replace(/viewBox:\s*"/g, 'viewBox="');
  content = content.replace(/viewBox:\s*'/g, "viewBox='");
  content = content.replace(/strokeWidth:\s*{/g, 'strokeWidth={');
  content = content.replace(/strokeLinecap:\s*"/g, 'strokeLinecap="');
  content = content.replace(/strokeLinecap:\s*'/g, "strokeLinecap='");
  content = content.replace(/strokeLinejoin:\s*"/g, 'strokeLinejoin="');
  content = content.replace(/strokeLinejoin:\s*'/g, "strokeLinejoin='");
  content = content.replace(/d:\s*"/g, 'd="');
  content = content.replace(/d:\s*'/g, "d='");
  content = content.replace(/path:\s*"/g, 'path="');
  content = content.replace(/path:\s*'/g, "path='");
  content = content.replace(/element:\s*{/g, 'element={');
  content = content.replace(/fallback:\s*{/g, 'fallback={');
  
  // Fix JSX tag syntax
  content = content.replace(/<div:\s*/g, '<div ');
  content = content.replace(/<span:\s*/g, '<span ');
  content = content.replace(/<button:\s*/g, '<button ');
  content = content.replace(/<a:\s*/g, '<a ');
  content = content.replace(/<h1:\s*/g, '<h1 ');
  content = content.replace(/<h2:\s*/g, '<h2 ');
  content = content.replace(/<h3:\s*/g, '<h3 ');
  content = content.replace(/<h4:\s*/g, '<h4 ');
  content = content.replace(/<h5:\s*/g, '<h5 ');
  content = content.replace(/<h6:\s*/g, '<h6 ');
  content = content.replace(/<p:\s*/g, '<p ');
  content = content.replace(/<img:\s*/g, '<img ');
  content = content.replace(/<svg:\s*/g, '<svg ');
  content = content.replace(/<path:\s*/g, '<path ');
  content = content.replace(/<Route:\s*/g, '<Route ');
  content = content.replace(/<Suspense:\s*/g, '<Suspense ');
  content = content.replace(/<ErrorBoundary:\s*/g, '<ErrorBoundary ');
  content = content.replace(/<GlobalErrorBoundary:\s*/g, '<GlobalErrorBoundary ');
  content = content.replace(/<HelmetProvider:\s*/g, '<HelmetProvider ');
  content = content.replace(/<Router:\s*/g, '<Router ');
  content = content.replace(/<main:\s*/g, '<main ');
  content = content.replace(/<Routes:\s*/g, '<Routes ');
  
  // Fix specific patterns in object literals
  content = content.replace(/icon:\s*(\w+),;/g, 'icon: $1,');
  content = content.replace(/title:\s*"/g, 'title: "');
  content = content.replace(/description:\s*"/g, 'description: "');
  content = content.replace(/href:\s*"/g, 'href: "');
  content = content.replace(/gradient:\s*"/g, 'gradient: "');
  content = content.replace(/glow:\s*"/g, 'glow: "');
  
  // Fix function component syntax
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\(/g, 'const $1: React.FC = () => (');
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, 'const $1: React.FC = () => {');
  
  // Fix JSX fragment syntax
  content = content.replace(/<>:/g, '<>');
  content = content.replace(/<\/>:/g, '</>');
  
  // Fix specific JSX patterns
  content = content.replace(/<div\s+className:\s*"/g, '<div className="');
  content = content.replace(/<div\s+className:\s*'/g, "<div className='");
  content = content.replace(/<h1\s+className:\s*"/g, '<h1 className="');
  content = content.replace(/<h1\s+className:\s*'/g, "<h1 className='");
  content = content.replace(/<h2\s+className:\s*"/g, '<h2 className="');
  content = content.replace(/<h2\s+className:\s*'/g, "<h2 className='");
  content = content.replace(/<h3\s+className:\s*"/g, '<h3 className="');
  content = content.replace(/<h3\s+className:\s*'/g, "<h3 className='");
  content = content.replace(/<p\s+className:\s*"/g, '<p className="');
  content = content.replace(/<p\s+className:\s*'/g, "<p className='");
  content = content.replace(/<button\s+onClick:\s*{/g, '<button onClick={');
  content = content.replace(/<a\s+href:\s*"/g, '<a href="');
  content = content.replace(/<a\s+href:\s*'/g, "<a href='");
  
  // Fix specific patterns in JSX
  content = content.replace(/<svg\s+className:\s*"/g, '<svg className="');
  content = content.replace(/<svg\s+className:\s*'/g, "<svg className='");
  content = content.replace(/<path\s+strokeLinecap:\s*"/g, '<path strokeLinecap="');
  content = content.replace(/<path\s+strokeLinecap:\s*'/g, "<path strokeLinecap='");
  content = content.replace(/<path\s+strokeLinejoin:\s*"/g, '<path strokeLinejoin="');
  content = content.replace(/<path\s+strokeLinejoin:\s*'/g, "<path strokeLinejoin='");
  content = content.replace(/<path\s+strokeWidth:\s*{/g, '<path strokeWidth={');
  content = content.replace(/<path\s+d:\s*"/g, '<path d="');
  content = content.replace(/<path\s+d:\s*'/g, "<path d='");
  
  // Fix Route syntax
  content = content.replace(/<Route\s+path:\s*"/g, '<Route path="');
  content = content.replace(/<Route\s+path:\s*'/g, "<Route path='");
  content = content.replace(/<Route\s+element:\s*{/g, '<Route element={');
  
  // Fix Suspense syntax
  content = content.replace(/<Suspense\s+fallback:\s*{/g, '<Suspense fallback={');
  
  // Fix specific JSX closing tags
  content = content.replace(/<\/div>:/g, '</div>');
  content = content.replace(/<\/span>:/g, '</span>');
  content = content.replace(/<\/button>:/g, '</button>');
  content = content.replace(/<\/a>:/g, '</a>');
  content = content.replace(/<\/h1>:/g, '</h1>');
  content = content.replace(/<\/h2>:/g, '</h2>');
  content = content.replace(/<\/h3>:/g, '</h3>');
  content = content.replace(/<\/h4>:/g, '</h4>');
  content = content.replace(/<\/h5>:/g, '</h5>');
  content = content.replace(/<\/h6>:/g, '</h6>');
  content = content.replace(/<\/p>:/g, '</p>');
  content = content.replace(/<\/img>:/g, '</img>');
  content = content.replace(/<\/svg>:/g, '</svg>');
  content = content.replace(/<\/path>:/g, '</path>');
  content = content.replace(/<\/Route>:/g, '</Route>');
  content = content.replace(/<\/Suspense>:/g, '</Suspense>');
  content = content.replace(/<\/ErrorBoundary>:/g, '</ErrorBoundary>');
  content = content.replace(/<\/GlobalErrorBoundary>:/g, '</GlobalErrorBoundary>');
  content = content.replace(/<\/HelmetProvider>:/g, '</HelmetProvider>');
  content = content.replace(/<\/Router>:/g, '</Router>');
  content = content.replace(/<\/main>:/g, '</main>');
  content = content.replace(/<\/Routes>:/g, '</Routes>');
  
  // Fix specific patterns that might be causing issues
  content = content.replace(/const\s+(\w+):\s*\[/g, 'const $1 = [');
  content = content.replace(/const\s+(\w+):\s*{/g, 'const $1 = {');
  
  // Fix specific JSX patterns that might be malformed
  content = content.replace(/<(\w+)\s+(\w+):\s*"/g, '<$1 $2="');
  content = content.replace(/<(\w+)\s+(\w+):\s*'/g, "<$1 $2='");
  content = content.replace(/<(\w+)\s+(\w+):\s*{/g, '<$1 $2={');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixRemainingSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        fixedCount += processDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting remaining syntax error fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);