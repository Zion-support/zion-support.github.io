const fs = require('fs');

const filePath = '/workspace/app/components/Footer.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix the specific issues
// Remove stray closing braces that are not part of proper JSX structure
content = content.replace(/\n}\n                  <\/Link>/g, '\n                  </Link>');
content = content.replace(/\n}\n                    className=/g, '\n                    className=');
content = content.replace(/\n}\n                  >/g, '\n                  >');

// Fix the href issue
content = content.replace(/href={item\.url;\n}/g, 'href={item.url}');

// Fix the reset issue
content = content.replace(/onClick={reset;\n}/g, 'onClick={reset}');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed Footer.tsx');