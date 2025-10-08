const fs = require('fs');

// Fix ErrorBoundary.tsx
// console.log('Fixing ErrorBoundary.tsx...');
let errorBoundary = fs.readFileSync('app/components/ErrorBoundary.tsx', 'utf8');

// The issue is that line 112 has an extra closing div - need to check the JSX structure
// Based on the error at line 112, column 9, it seems there's a mismatch in parentheses
// Let's check if the return statement needs an extra closing brace

// Fix enterprise/page.tsx - missing closing brace for the function
// console.log('Fixing enterprise/page.tsx...');
let enterprise = fs.readFileSync('app/enterprise/page.tsx', 'utf8');

// Add closing brace if missing
if (!enterprise.trim().endsWith('}')) {
  enterprise = enterprise.trimEnd() + '\n}\n';
  fs.writeFileSync('app/enterprise/page.tsx', enterprise);
//   console.log('Added closing brace to enterprise/page.tsx');
}

// console.log('Fixes applied. Running type-check...');