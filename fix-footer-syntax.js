const fs = require('fs');

// Function to fix malformed object syntax in Footer.tsx
function fixFooterSyntax() {
  try {
    let content = fs.readFileSync('/workspace/app/components/Footer.tsx', 'utf8');
    
    console.log('Fixing Footer.tsx syntax...');
    
    // Fix the malformed object syntax by replacing the pattern
    // { name: "'value'",url: "'url'",description: "'desc' ",}
    // with proper syntax: { name: 'value', url: 'url', description: 'desc' },
    
    // Fix objects with description
    content = content.replace(/\{\s*name:\s*"([^"]+)",url:\s*"([^"]+)",description:\s*"([^"]+)"\s*,\s*\}/g, 
      "{ name: '$1', url: '$2', description: '$3' }");
    
    // Fix objects without description
    content = content.replace(/\{\s*name:\s*"([^"]+)",url:\s*"([^"]+)"\s*,\s*\}/g, 
      "{ name: '$1', url: '$2' }");
    
    // Fix objects with just name and url (no description)
    content = content.replace(/\{\s*name:\s*"([^"]+)",url:\s*"([^"]+)"\s*\}/g, 
      "{ name: '$1', url: '$2' }");
    
    // Write the fixed content back
    fs.writeFileSync('/workspace/app/components/Footer.tsx', content, 'utf8');
    
    console.log('Footer.tsx syntax fixed successfully!');
    return true;
    
  } catch (error) {
    console.error('Error fixing Footer.tsx:', error.message);
    return false;
  }
}

// Run the fix
fixFooterSyntax();