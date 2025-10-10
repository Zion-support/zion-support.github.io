const fs = require('fs');

// Read the Navigation.tsx file
let content = fs.readFileSync('/workspace/app/components/Navigation.tsx', 'utf8');

// Fix all merge conflicts by choosing the HEAD version and cleaning up syntax
content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> cursor\/enhance-and-expand-ziontechgroup-com-services-and-site-fb16/g, (match, headContent, otherContent) => {
  // Clean up the head content
  let cleaned = headContent
    .replace(/;\s*$/, '') // Remove trailing semicolons
    .replace(/\s+$/, '') // Remove trailing whitespace
    .replace(/;\s*$/, '') // Remove any remaining trailing semicolons
    .replace(/\s*$/, '') // Remove trailing whitespace again
    .replace(/>\s*$/, '>') // Clean up closing tags
    .replace(/\s*$/, ''); // Final whitespace cleanup
  
  return cleaned;
});

// Write the fixed content back
fs.writeFileSync('/workspace/app/components/Navigation.tsx', content);

console.log('Fixed merge conflicts in Navigation.tsx');