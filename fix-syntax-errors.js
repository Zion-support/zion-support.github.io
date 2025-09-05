import fs from 'fs';

// Function to fix syntax errors in files
function fixSyntaxErrors() {
  // Fix Layout.tsx
  try {
    let content = fs.readFileSync('components/Layout.tsx', 'utf8');
    
    // Fix missing closing div in header
    content = content.replace(
      /(\s+<\/AnimatePresence>\s+<\/nav>\s+)(<\/header>)/,
      '$1  </div>\n$2'
    );
    
    fs.writeFileSync('components/Layout.tsx', content);
    console.log('Fixed Layout.tsx');
  } catch (error) {
    console.error('Error fixing Layout.tsx:', error.message);
  }

  // Fix about.tsx
  try {
    let content = fs.readFileSync('pages/about.tsx', 'utf8');
    
    // Fix missing closing div
    content = content.replace(
      /(\s+<\/motion\.div>\s+<\/div>\s+)(<\/section>)/,
      '$1  </div>\n$2'
    );
    
    fs.writeFileSync('pages/about.tsx', content);
    console.log('Fixed about.tsx');
  } catch (error) {
    console.error('Error fixing about.tsx:', error.message);
  }

  // Fix ai-services.tsx
  try {
    let content = fs.readFileSync('pages/ai-services.tsx', 'utf8');
    
    // Fix missing closing div
    content = content.replace(
      /(\s+<\/div>\s+)(<\/section>\s+<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">)/,
      '$1  </div>\n$2'
    );
    
    fs.writeFileSync('pages/ai-services.tsx', content);
    console.log('Fixed ai-services.tsx');
  } catch (error) {
    console.error('Error fixing ai-services.tsx:', error.message);
  }

  // Fix blog.tsx
  try {
    let content = fs.readFileSync('pages/blog.tsx', 'utf8');
    
    // Fix missing closing div
    content = content.replace(
      /(\s+<\/motion\.article>\s+)(\)\}\}\s+<\/div>)/,
      '$1  </div>\n$2'
    );
    
    fs.writeFileSync('pages/blog.tsx', content);
    console.log('Fixed blog.tsx');
  } catch (error) {
    console.error('Error fixing blog.tsx:', error.message);
  }
}

fixSyntaxErrors();
console.log('Syntax errors fixed!');