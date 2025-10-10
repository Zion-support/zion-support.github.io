const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/blockchain/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Fix all extra closing brackets in arrays
content = content.replace(/\]\]/g, ']');

fs.writeFileSync(filePath, content);
console.log('Fixed extra brackets in blockchain page');