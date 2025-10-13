const fs = require('fs');

// Files that need component usage fixes
const filesToFix = [
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-content-studio/page.tsx'
];

function fixComponentUsage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix FuturisticButtonEnhanced usage - remove all props except children, className, onClick
    content = content.replace(
      /<FuturisticButtonEnhanced\s+([^>]*?)>/g,
      (match, props) => {
        // Extract only the needed props
        const classNameMatch = props.match(/className="[^"]*"/);
        const onClickMatch = props.match(/onClick={[^}]*}/);
        const childrenMatch = props.match(/children="[^"]*"/);
        
        let newProps = '';
        if (classNameMatch) newProps += ` ${classNameMatch[0]}`;
        if (onClickMatch) newProps += ` ${onClickMatch[0]}`;
        if (childrenMatch) newProps += ` ${childrenMatch[0]}`;
        
        return `<FuturisticButtonEnhanced${newProps}>`;
      }
    );

    // Fix FuturisticCardEnhanced usage - remove all props except children, className
    content = content.replace(
      /<FuturisticCardEnhanced\s+([^>]*?)>/g,
      (match, props) => {
        // Extract only the needed props
        const classNameMatch = props.match(/className="[^"]*"/);
        const childrenMatch = props.match(/children="[^"]*"/);
        
        let newProps = '';
        if (classNameMatch) newProps += ` ${classNameMatch[0]}`;
        if (childrenMatch) newProps += ` ${childrenMatch[0]}`;
        
        return `<FuturisticCardEnhanced${newProps}>`;
      }
    );

    // Fix button elements that have href - convert to Link components
    content = content.replace(
      /<FuturisticButtonEnhanced\s+([^>]*?)href="([^"]*)"([^>]*?)>([^<]*?)<\/FuturisticButtonEnhanced>/g,
      '<Link to="$2" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">$4</Link>'
    );

    // Fix button elements that have variant, size, etc. - remove those props
    content = content.replace(
      /<FuturisticButtonEnhanced\s+([^>]*?)variant="[^"]*"\s*([^>]*?)>/g,
      '<FuturisticButtonEnhanced $1$2>'
    );
    content = content.replace(
      /<FuturisticButtonEnhanced\s+([^>]*?)size="[^"]*"\s*([^>]*?)>/g,
      '<FuturisticButtonEnhanced $1$2>'
    );
    content = content.replace(
      /<FuturisticButtonEnhanced\s+([^>]*?)gradient={[^}]*}\s*([^>]*?)>/g,
      '<FuturisticButtonEnhanced $1$2>'
    );
    content = content.replace(
      /<FuturisticButtonEnhanced\s+([^>]*?)animated={[^}]*}\s*([^>]*?)>/g,
      '<FuturisticButtonEnhanced $1$2>'
    );
    content = content.replace(
      /<FuturisticButtonEnhanced\s+([^>]*?)glow={[^}]*}\s*([^>]*?)>/g,
      '<FuturisticButtonEnhanced $1$2>'
    );
    content = content.replace(
      /<FuturisticButtonEnhanced\s+([^>]*?)neon={[^}]*}\s*([^>]*?)>/g,
      '<FuturisticButtonEnhanced $1$2>'
    );
    content = content.replace(
      /<FuturisticButtonEnhanced\s+([^>]*?)icon={[^}]*}\s*([^>]*?)>/g,
      '<FuturisticButtonEnhanced $1$2>'
    );
    content = content.replace(
      /<FuturisticButtonEnhanced\s+([^>]*?)iconPosition="[^"]*"\s*([^>]*?)>/g,
      '<FuturisticButtonEnhanced $1$2>'
    );
    content = content.replace(
      /<FuturisticButtonEnhanced\s+([^>]*?)glowColor="[^"]*"\s*([^>]*?)>/g,
      '<FuturisticButtonEnhanced $1$2>'
    );

    // Fix card elements that have glowColor, hoverEffect, etc. - remove those props
    content = content.replace(
      /<FuturisticCardEnhanced\s+([^>]*?)glowColor="[^"]*"\s*([^>]*?)>/g,
      '<FuturisticCardEnhanced $1$2>'
    );
    content = content.replace(
      /<FuturisticCardEnhanced\s+([^>]*?)hoverEffect={[^}]*}\s*([^>]*?)>/g,
      '<FuturisticCardEnhanced $1$2>'
    );
    content = content.replace(
      /<FuturisticCardEnhanced\s+([^>]*?)animated={[^}]*}\s*([^>]*?)>/g,
      '<FuturisticCardEnhanced $1$2>'
    );
    content = content.replace(
      /<FuturisticCardEnhanced\s+([^>]*?)neon={[^}]*}\s*([^>]*?)>/g,
      '<FuturisticCardEnhanced $1$2>'
    );

    // Clean up extra spaces
    content = content.replace(/\s+>/g, '>');
    content = content.replace(/\s+className/g, ' className');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed component usage in: ${filePath}`);
      modified = true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixComponentUsage);
console.log('Component usage fixes completed!');