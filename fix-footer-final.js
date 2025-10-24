const fs = require('fs');

// Function to fix all syntax issues in Footer.tsx
function fixFooterFinal() {
  try {
    let content = fs.readFileSync('/workspace/app/components/Footer.tsx', 'utf8');
    
    console.log('Fixing Footer.tsx with final comprehensive approach...');
    
    // Fix double single quotes around values
    content = content.replace(/'([^']+)'/g, "'$1'");
    
    // Fix the specific pattern with double single quotes
    content = content.replace(/\{\s*name:\s*''([^']+)'',\s*url:\s*''([^']+)'',\s*description:\s*''([^']+)''\s*\}/g, 
      "{ name: '$1', url: '$2', description: '$3' }");
    
    content = content.replace(/\{\s*name:\s*''([^']+)'',\s*url:\s*''([^']+)''\s*\}/g, 
      "{ name: '$1', url: '$2' }");
    
    // Fix any remaining malformed syntax
    content = content.replace(/\{\s*name:\s*'([^']+)',\s*url:\s*'([^']+)',\s*description:\s*'([^']+)'\s*\}/g, 
      "{ name: '$1', url: '$2', description: '$3' }");
    
    content = content.replace(/\{\s*name:\s*'([^']+)',\s*url:\s*'([^']+)'\s*\}/g, 
      "{ name: '$1', url: '$2' }");
    
    // Write the fixed content back
    fs.writeFileSync('/workspace/app/components/Footer.tsx', content, 'utf8');
    
    console.log('Footer.tsx syntax fixed with final approach!');
    return true;
    
  } catch (error) {
    console.error('Error fixing Footer.tsx:', error.message);
    return false;
  }
}

// Run the fix
fixFooterFinal();