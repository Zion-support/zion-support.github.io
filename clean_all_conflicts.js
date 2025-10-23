const fs = require('fs');
const path = require('path');

function cleanFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove all merge conflict markers and everything between them
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*\n?/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]*\n?/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]*\n?/g, '');
    
    // Remove any remaining merge conflict markers
    content = content.replace(/<<<<<<< [^\n]*\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]*\n?/g, '');
    
    // Fix malformed JSX tags
    content = content.replace(/<h2([^>]*)>([^<]*)<\/h2>h2>/g, '<h2$1>$2</h2>');
    content = content.replace(/<p([^>]*)>([^<]*)<\/p>p>/g, '<p$1>$2</p>');
    content = content.replace(/<span([^>]*)>([^<]*)<\/span>span>/g, '<span$1>$2</span>');
    content = content.replace(/<div([^>]*)>([^<]*)<\/div>div>/g, '<div$1>$2</div>');
    
    // Fix malformed closing tags
    content = content.replace(/<\/h2>h2>/g, '</h2>');
    content = content.replace(/<\/p>p>/g, '</p>');
    content = content.replace(/<\/span>span>/g, '</span>');
    content = content.replace(/<\/div>div>/g, '</div>');
    
    // Fix malformed opening tags
    content = content.replace(/<h2([^>]*)>h2>/g, '<h2$1>');
    content = content.replace(/<p([^>]*)>p>/g, '<p$1>');
    content = content.replace(/<span([^>]*)>span>/g, '<span$1>');
    content = content.replace(/<div([^>]*)>div>/g, '<div$1>');
    
    // Fix JSX fragments
    content = content.replace(/<>\s*<Helmet>/g, '<>\n      <Helmet>');
    content = content.replace(/<>\s*<Head>/g, '<>\n      <Head>');
    
    // Fix missing semicolons in JSX
    content = content.replace(/(\w+)\s*=\s*\[([^\]]*)\]\s*return\s*\(/g, '$1 = [\n    $2\n  ];\n\n  return (');
    
    // Fix malformed JSX expressions
    content = content.replace(/\{features\.map\(\(feature, index\) => \(/g, '{features.map((feature, index) => (');
    
    // Fix missing closing tags
    content = content.replace(/<div className="min-h-screen[^>]*>\{\/\* Hero Section \*\/\}<\/div>/g, '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✓ Cleaned: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        walkDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      cleanFile(filePath);
    }
  }
}

console.log('Starting to clean all merge conflicts and syntax errors...');
walkDirectory('./app');
console.log('Cleaning completed!');