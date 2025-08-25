const fs = require('fs');

// Read the file
let content = fs.readFileSync('src/pages/NewServices.tsx', 'utf8');

// Replace the problematic lines
content = content.replace(/service\.estimatedDelivery/g, '(service as any).estimatedDelivery || "TBD"');
content = content.replace(/service\.supportLevel/g, '(service as any).supportLevel || "Standard"');
content = content.replace(/service\.tags &&/g, '(service as any).tags &&');
content = content.replace(/service\.tags\.slice/g, '(service as any).tags.slice');
content = content.replace(/\.map\(\(tag, index\)/g, '.map((tag: string, index: number)');

// Write the file back
fs.writeFileSync('src/pages/NewServices.tsx', content);

console.log('Fixed NewServices.tsx type issues');