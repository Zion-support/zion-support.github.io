const fs = require('fs');

// List of files that need JSX fixes
const filesToFix = [
  'app/ai-analytics/page.tsx',
  'app/ai-automation-platform/page.tsx',
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-content-studio/page.tsx',
  'app/ai-data-analytics-pro/page.tsx',
  'app/ai-financial-analysis/page.tsx',
  'app/ai-hr-recruitment-pro/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx'
];

console.log('Fixing JSX errors...');

filesToFix.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing Link opening tags
    content = content.replace(/to="\/[^"]*"\s*className=/g, '<Link to="$&');
    content = content.replace(/className="[^"]*"\s*>\s*<[A-Z]/g, (match) => {
      return match.replace('>', '>');
    });
    
    // Fix missing closing tags
    content = content.replace(/<Link[^>]*>\s*([^<]+)\s*<[A-Z][^>]*>/g, (match, text) => {
      return match + '</Link>';
    });
    
    // Fix broken JSX structure
    content = content.replace(/to="\/[^"]*"\s*className="[^"]*"\s*>\s*([^<]+)\s*<[A-Z][^>]*>/g, (match, text) => {
      const linkMatch = match.match(/to="([^"]*)"/);
      const classNameMatch = match.match(/className="([^"]*)"/);
      const iconMatch = match.match(/<([A-Z][^>]*)>/);
      
      if (linkMatch && classNameMatch && iconMatch) {
        return `<Link to="${linkMatch[1]}" className="${classNameMatch[1]}">${text.trim()}<${iconMatch[1]}</Link>`;
      }
      return match;
    });
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`✓ Fixed JSX in ${filePath}`);
  } catch (error) {
    console.log(`⚠ Error processing ${filePath}: ${error.message}`);
  }
});

console.log('Done fixing JSX errors');