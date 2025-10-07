const fs = require('fs');
const path = require('path');

// List of conflicted files to fix
const conflictedFiles = [
  'app/components/NewestContent2025Banner.tsx',
  'app/enterprise/page.tsx',
  'app/guides/ai-2026-implementation-roadmap/page.tsx',
  'app/guides/autonomous-business-processes-implementation-guide-2026/page.tsx',
  'app/page-minimal.tsx'
];

function resolveConflicts(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  console.log(`Resolving conflicts in: ${filePath}`);
  
  // Remove merge conflict markers
  content = content.replace(/\n/g, '');
  content = content.replace(/  
  // Fix common JSX syntax issues
  content = content.replace(/className="([^"]*)"\s*>\s*"/g, 'className="$1">');
  content = content.replace(/className="([^"]*)"\s*>/g, 'className="$1">');
  content = content.replace(/className="([^"]*)"\s*>\s*"</g, 'className="$1">');
  
  // Fix unclosed tags and malformed JSX
  content = content.replace(/<div className="text-left">\s*"</g, '<div className="text-left">');
  content = content.replace(/<div className="text-left">\s*"</g, '<div className="text-left">');
  content = content.replace(/<h3 className="text-left">\s*"</g, '<h3 className="text-left">');
  content = content.replace(/<p className="text-left">\s*"</g, '<p className="text-left">');
  content = content.replace(/<span className="text-left">\s*"</g, '<span className="text-left">');
  content = content.replace(/<ul className="text-left">\s*"</g, '<ul className="text-left">');
  content = content.replace(/<li className="text-left">\s*"</g, '<li className="text-left">');
  
  // Fix malformed closing tags
  content = content.replace(/"\s*<\/div>/g, '</div>');
  content = content.replace(/"\s*<\/h3>/g, '</h3>');
  content = content.replace(/"\s*<\/p>/g, '</p>');
  content = content.replace(/"\s*<\/span>/g, '</span>');
  content = content.replace(/"\s*<\/ul>/g, '</ul>');
  content = content.replace(/"\s*<\/li>/g, '</li>');
  
  // Fix incomplete spans and other elements
  content = content.replace(/<span className="text-left">([^<]*)</g, '<span className="text-left">$1</span>');
  
  // Fix incomplete closing tags
  content = content.replace(/Read article</g, 'Read article</span>');
  content = content.replace(/View case study</g, 'View case study</span>');
  
  // Fix malformed JSX attributes
  content = content.replace(/href="#solutions" "/g, 'href="#solutions"');
  content = content.replace(/className="text-left">/g, 'className="text-left">');
  
  // Fix incomplete elements like <span className="text-left">20 min read<
  content = content.replace(/(<span className="text-left">[^<]*?)</g, '$1</span>');
  
  // Fix incomplete elements like <span className="text-left">Manufacturing<
  content = content.replace(/(<span className="text-left">[^<]*?)</g, '$1</span>');
  
  // Write the cleaned content back
  fs.writeFileSync(filePath, content);
  console.log(`Fixed conflicts in: ${filePath}`);
}

// Process all conflicted files
conflictedFiles.forEach(resolveConflicts);

console.log('All merge conflicts resolved!');