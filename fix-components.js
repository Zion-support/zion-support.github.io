import fs from 'fs';
import path from 'path';
export default ${componentName};`;

// List of components that need to be fixed;

 `'use client';

  return (
      {/* ${componentName} component placeholder */}
  );
};

// Fix components;
  
  // Check if file exists and doesn't have default export;
  if (fs.existsSync(componentFile)) {
    
    if (!content.includes('export default')) {
      // Add default export if missing;

      if (lastLine.trim() === '}') {
        lines[lines.length - 1] = '}';
        lines.push('');
        lines.push(`export default ${componentName};`);
        fs.writeFileSync(componentFile, lines.join('\n'));
        console.log(`Fixed export for: ${componentFile}`);
  } else {
    // Create component if it doesn't exist;
    fs.writeFileSync(componentFile, componentTemplate(componentName));
    console.log(`Created: ${componentFile}`);
});

console.log('Component fixes completed!');