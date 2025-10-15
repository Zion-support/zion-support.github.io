const fs = require('fs');
const path = require('path');

const apiFiles = [
  'api/create-checkout-session.js',
  'api/create-payment-intent.js',
  'api/error-report.js',
  'api/newsletter/subscribe.js',
  'api/onsite-request.js',
  'api/quotes.js',
  'api/shipping-rates.js',
  'api/subscribe.js',
  'api/wallet.js'
];

apiFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused variables in destructuring
    content = content.replace(/const\s*{\s*([^}]+)\s*}\s*=\s*req\.body;\s*/g, (match, vars) => {
      const usedVars = vars.split(',').map(v => v.trim()).filter(v => {
        // Keep only variables that are actually used in the function
        const varName = v.split(':')[0].trim();
        return content.includes(varName) && !content.includes(`const ${varName}`);
      });
      return usedVars.length > 0 ? `const { ${usedVars.join(', ')} } = req.body;\n` : '';
    });
    
    // Remove unused error parameters in catch blocks
    content = content.replace(/catch\s*\(\s*error\s*\)\s*{/g, 'catch {');
    
    // Remove unused variables in function parameters
    content = content.replace(/const\s+walletId\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s+dimensions\s*=\s*[^;]+;\s*/g, '');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('API warnings fixed!');
