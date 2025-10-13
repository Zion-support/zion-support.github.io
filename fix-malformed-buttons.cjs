const fs = require('fs');

// Files that need malformed button fixes
const filesToFix = [
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-content-studio/page.tsx'
];

function fixMalformedButtons(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed FuturisticButtonEnhanced components
    // Pattern: <FuturisticButtonEnhanced className="...">}
    content = content.replace(
      /<FuturisticButtonEnhanced\s+([^>]*?)>}\s*([^<]*?)>/g,
      (match, props, content) => {
        // Extract className from props
        const classNameMatch = props.match(/className="([^"]*)"/);
        const className = classNameMatch ? classNameMatch[1] : '';
        
        return `<FuturisticButtonEnhanced className="${className}">${content.trim()}</FuturisticButtonEnhanced>`;
      }
    );

    // Fix any remaining malformed patterns
    content = content.replace(
      /<FuturisticButtonEnhanced\s+([^>]*?)>}\s*([^<]*?)iconPosition="[^"]*"\s*([^<]*?)>/g,
      (match, props, content, rest) => {
        const classNameMatch = props.match(/className="([^"]*)"/);
        const className = classNameMatch ? classNameMatch[1] : '';
        
        return `<FuturisticButtonEnhanced className="${className}">${content.trim()}</FuturisticButtonEnhanced>`;
      }
    );

    // Fix any remaining malformed patterns with glowColor
    content = content.replace(
      /<FuturisticButtonEnhanced\s+([^>]*?)>}\s*([^<]*?)glowColor="[^"]*"\s*([^<]*?)>/g,
      (match, props, content, rest) => {
        const classNameMatch = props.match(/className="([^"]*)"/);
        const className = classNameMatch ? classNameMatch[1] : '';
        
        return `<FuturisticButtonEnhanced className="${className}">${content.trim()}</FuturisticButtonEnhanced>`;
      }
    );

    // Fix any remaining malformed patterns with neon
    content = content.replace(
      /<FuturisticButtonEnhanced\s+([^>]*?)>}\s*([^<]*?)neon={[^}]*}\s*([^<]*?)>/g,
      (match, props, content, rest) => {
        const classNameMatch = props.match(/className="([^"]*)"/);
        const className = classNameMatch ? classNameMatch[1] : '';
        
        return `<FuturisticButtonEnhanced className="${className}">${content.trim()}</FuturisticButtonEnhanced>`;
      }
    );

    // Fix any remaining malformed patterns with animated
    content = content.replace(
      /<FuturisticButtonEnhanced\s+([^>]*?)>}\s*([^<]*?)animated={[^}]*}\s*([^<]*?)>/g,
      (match, props, content, rest) => {
        const classNameMatch = props.match(/className="([^"]*)"/);
        const className = classNameMatch ? classNameMatch[1] : '';
        
        return `<FuturisticButtonEnhanced className="${className}">${content.trim()}</FuturisticButtonEnhanced>`;
      }
    );

    // Clean up any remaining malformed patterns
    content = content.replace(
      /<FuturisticButtonEnhanced\s+([^>]*?)>}\s*([^<]*?)>/g,
      (match, props, content) => {
        const classNameMatch = props.match(/className="([^"]*)"/);
        const className = classNameMatch ? classNameMatch[1] : '';
        
        return `<FuturisticButtonEnhanced className="${className}">${content.trim()}</FuturisticButtonEnhanced>`;
      }
    );

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed malformed buttons in: ${filePath}`);
      modified = true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixMalformedButtons);
console.log('Malformed button fixes completed!');