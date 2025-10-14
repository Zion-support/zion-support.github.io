const fs = require('fs');
const path = require('path');

// Files with Heroicons issues
const filesToFix = [
  'app/components/About.tsx',
  'app/components/Contact.tsx',
  'app/components/Hero.tsx',
  'app/components/ImprovedSidebar.tsx',
  'app/components/Sidebar.tsx',
  'app/services/page.tsx',
  'app/web-development/page.tsx'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove problematic Heroicons imports
    content = content.replace(/import\s*{\s*[^}]*Icon[^}]*}\s*from\s*['"]@heroicons\/react\/24\/outline['"];?\s*\n/g, '');
    content = content.replace(/import\s*{\s*[^}]*ChipIcon[^}]*}\s*from\s*['"]@heroicons\/react\/24\/outline['"];?\s*\n/g, '');
    content = content.replace(/import\s*{\s*[^}]*AltIcon[^}]*}\s*from\s*['"]@heroicons\/react\/24\/outline['"];?\s*\n/g, '');
    content = content.replace(/import\s*{\s*[^}]*ExclamationIcon[^}]*}\s*from\s*['"]@heroicons\/react\/24\/outline['"];?\s*\n/g, '');
    
    // Replace Icon usage with a simple div
    content = content.replace(/<Icon[^>]*\/>/g, '<div className="w-6 h-6" />');
    content = content.replace(/<ChipIcon[^>]*\/>/g, '<div className="w-6 h-6" />');
    content = content.replace(/<AltIcon[^>]*\/>/g, '<div className="w-6 h-6" />');
    content = content.replace(/<ExclamationIcon[^>]*\/>/g, '<div className="w-6 h-6" />');
    
    // Clean up empty import statements
    content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*\n/g, '');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed Heroicons in ${filePath}`);
  }
});

console.log('Heroicons fixes completed!');