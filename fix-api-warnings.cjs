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
    
    // Remove console statements
    content = content.replace(/console\.(log|error|warn|info|debug)\([^)]*\);?\s*/g, '');
    
    // Remove unused variables
    content = content.replace(/const\s+dimensions\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s+walletId\s*=\s*[^;]+;\s*/g, '');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('API warnings fixed!');
