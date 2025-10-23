const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove all merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*\n?/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]*\n?/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]*\n?/g, '');
    content = content.replace(/<<<<<<< [^\n]*\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]*\n?/g, '');
    
    // Fix malformed JSX tags
    content = content.replace(/<h1([^>]*)>([^<]*)<\/h1>h1>/g, '<h1$1>$2</h1>');
    content = content.replace(/<h2([^>]*)>([^<]*)<\/h2>h2>/g, '<h2$1>$2</h2>');
    content = content.replace(/<h3([^>]*)>([^<]*)<\/h3>h3>/g, '<h3$1>$2</h3>');
    content = content.replace(/<p([^>]*)>([^<]*)<\/p>p>/g, '<p$1>$2</p>');
    content = content.replace(/<span([^>]*)>([^<]*)<\/span>span>/g, '<span$1>$2</span>');
    content = content.replace(/<div([^>]*)>([^<]*)<\/div>div>/g, '<div$1>$2</div>');
    
    // Fix malformed closing tags
    content = content.replace(/<\/h1>h1>/g, '</h1>');
    content = content.replace(/<\/h2>h2>/g, '</h2>');
    content = content.replace(/<\/h3>h3>/g, '</h3>');
    content = content.replace(/<\/p>p>/g, '</p>');
    content = content.replace(/<\/span>span>/g, '</span>');
    content = content.replace(/<\/div>div>/g, '</div>');
    
    // Fix malformed opening tags
    content = content.replace(/<h1([^>]*)>h1>/g, '<h1$1>');
    content = content.replace(/<h2([^>]*)>h2>/g, '<h2$1>');
    content = content.replace(/<h3([^>]*)>h3>/g, '<h3$1>');
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
    
    // Fix JSX comments in wrong places
    content = content.replace(/<Navigation \/>\n\{\/\* Hero Section \*\/\}/g, '<Navigation />\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">\n        {/* Hero Section */}');
    
    // Fix malformed JSX structure
    content = content.replace(/<Navigation \/>\n\{\/\* Hero Section \*\/\}/g, '<Navigation />\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">\n        {/* Hero Section */}');
    
    // Fix missing div wrapper
    content = content.replace(/<Navigation \/>\n\{\/\* Hero Section \*\/\}/g, '<Navigation />\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">\n        {/* Hero Section */}');
    
    // Fix malformed JSX expressions in grid
    content = content.replace(/\{features\.map\(\(feature, index\) => \(/g, '{features.map((feature, index) => (');
    
    // Fix missing closing div
    content = content.replace(/<Footer \/>\n    <\/>\n  \)\n\}\n\nexport default/g, '<Footer />\n      </div>\n    </>\n  )\n}\n\nexport default');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✓ Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
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
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      fixFile(filePath);
    }
  }
}

console.log('Starting to fix all remaining syntax errors...');
walkDirectory('./app');
console.log('Fixing completed!');