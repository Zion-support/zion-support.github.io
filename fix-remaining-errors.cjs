const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed JSX fragments and closing tags
    const fixes = [
      // Fix malformed closing tags with extra characters
      { pattern: /  <\/h1>\n  <\/button>\n  <\/h2>\n  <\/button>\n  <\/button>\n  <\/h1>/g, replacement: '  </h1>' },
      { pattern: /  <\/h2>\n  <\/button>\n  <\/button>\n  <\/h1>/g, replacement: '  </h2>' },
      { pattern: /  <\/button>\n  <\/button>\n  <\/h1>/g, replacement: '  </button>' },
      { pattern: /  <\/button>\n  <\/h1>/g, replacement: '  </button>' },
      
      // Fix malformed JSX structure
      { pattern: /        <\/div>\n          <div className="absolute inset-0 bg-\[radial-gradient\(circle_at_20%_80%,rgba\(147,51,234,0\.3\)_0%,transparent_50%\)\] animate-pulse" \/><\/div>/g, replacement: '        </div>\n        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />' },
      
      // Fix missing closing tags
      { pattern: /          <div className="absolute inset-0 bg-\[radial-gradient\(circle_at_20%_80%,rgba\(147,51,234,0\.3\)_0%,transparent_50%\)\] animate-pulse" \/><\/div>/g, replacement: '          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />' },
      { pattern: /          <div className="absolute inset-0 bg-\[radial-gradient\(circle_at_80%_20%,rgba\(59,130,246,0\.3\)_0%,transparent_50%\)\] animate-pulse" style=\{\{ animationDelay: '1s' \}\} \/><\/div>/g, replacement: '          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: \'1s\' }} />' },
      
      // Fix malformed JSX structure in hero sections
      { pattern: /          <div className="relative max-w-7xl mx-auto text-center"><\/div>\n            <h1>\n              [^<]+\n            <\/h1>\n            <p>\n              [^<]+\n            <\/p>\n            <div className="flex flex-col sm: flex-row gap-4 justify-center"><\/div>\n              <button>\n                [^<]+\n              <\/button>\n              <button>/g, replacement: '          <div className="relative max-w-7xl mx-auto text-center">\n            <h1>\n              Ai Agricultural Intelligence Pro\n            </h1>\n            <p>\n              Advanced AI-powered agricultural intelligence solution for modern businesses.\n            </p>\n            <div className="flex flex-col sm:flex-row gap-4 justify-center">\n              <button>\n                Get Started\n              </button>\n              <button>' },
      
      // Fix malformed closing tags
      { pattern: /    <\/React\.Fragment>\n  \),\n\};\n\nexport default \w+Page\n  <\/button>\n  <\/h2>\n  <\/button>\n  <\/button>\n  <\/h1>/g, replacement: '    </>\n  );\n};\n\nexport default AiAnalyticsPage;' },
      
      // Fix missing semicolons in arrays
      { pattern: /  \]\nconst benefits = \[/g, replacement: '  ];\n\nconst benefits = [' },
      { pattern: /  \]\nreturn \(/g, replacement: '  ];\n\nreturn (' },
      
      // Fix malformed array syntax
      { pattern: /  \]\n\];/g, replacement: '  ]' },
      { pattern: /  \}\n  \];/g, replacement: '  }\n  ];' },
      
      // Fix missing closing brackets
      { pattern: /    'Gain competitive advantage with advanced technology';\n  \]/g, replacement: "    'Gain competitive advantage with advanced technology'\n  ];" },
      
      // Fix malformed JSX closing
      { pattern: /    <\/React\.Fragment>\n  \),\n\};\n\nexport default \w+Page\n  <\/button>\n  <\/h2>\n  <\/button>\n  <\/button>\n  <\/h1>/g, replacement: '    </>\n  );\n};\n\nexport default AiAnalyticsPage;' }
    ];
    
    // Apply fixes
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Additional specific fixes for common patterns
    // Fix missing closing tags
    content = content.replace(/<h1[^>]*>([^<]+)<\/h1>\s*<\/h1>/g, '<h1$1</h1>');
    content = content.replace(/<h2[^>]*>([^<]+)<\/h2>\s*<\/h2>/g, '<h2$1</h2>');
    content = content.replace(/<button[^>]*>([^<]+)<\/button>\s*<\/button>/g, '<button$1</button>');
    content = content.replace(/<p[^>]*>([^<]+)<\/p>\s*<\/p>/g, '<p$1</p>');
    
    // Fix malformed array syntax
    content = content.replace(/  \]\n\];/g, '  ]');
    content = content.replace(/  \}\n  \];/g, '  }\n  ];');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*\]\s*\nconst benefits = \[/g, '$1 ];\n\nconst benefits = [');
    content = content.replace(/(\w+)\s*\]\s*\nreturn \(/g, '$1 ];\n\nreturn (');
    
    // Fix malformed JSX closing
    content = content.replace(/    <\/React\.Fragment>\n  \),\n\};\n\nexport default \w+Page\n  <\/button>\n  <\/h2>\n  <\/button>\n  <\/button>\n  <\/h1>/g, '    </>\n  );\n};\n\nexport default AiAnalyticsPage;');
    
    // Fix specific patterns in agricultural intelligence pro
    content = content.replace(/        <\/div>\n          <div className="absolute inset-0 bg-\[radial-gradient\(circle_at_20%_80%,rgba\(147,51,234,0\.3\)_0%,transparent_50%\)\] animate-pulse" \/><\/div>/g, '        </div>\n        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />');
    content = content.replace(/          <div className="absolute inset-0 bg-\[radial-gradient\(circle_at_80%_20%,rgba\(59,130,246,0\.3\)_0%,transparent_50%\)\] animate-pulse" style=\{\{ animationDelay: '1s' \}\} \/><\/div>/g, '          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: \'1s\' }} />');
    
    // Fix malformed hero section structure
    content = content.replace(/          <div className="relative max-w-7xl mx-auto text-center"><\/div>\n            <h1>\n              [^<]+\n            <\/h1>\n            <p>\n              [^<]+\n            <\/p>\n            <div className="flex flex-col sm: flex-row gap-4 justify-center"><\/div>\n              <button>\n                [^<]+\n              <\/button>\n              <button>/g, (match) => {
      return match.replace(/          <div className="relative max-w-7xl mx-auto text-center"><\/div>/, '          <div className="relative max-w-7xl mx-auto text-center">')
                  .replace(/            <div className="flex flex-col sm: flex-row gap-4 justify-center"><\/div>/, '            <div className="flex flex-col sm:flex-row gap-4 justify-center">');
    });
    
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);