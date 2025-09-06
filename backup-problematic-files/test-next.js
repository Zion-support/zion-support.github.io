const { execSync } = require('child_process');
<<<<<<< HEAD
;
console.log('Testing Next.js installation...');
;
try {;
  // Check if Next.js is installed;
  const nextVersion = execSync('npx next --version', { encoding:'utf8' });
  console.log('Next.js version:', nextVersion.trim());
  ;
=======

console.log('Testing Next.js installation...');

try {
  // Check if Next.js is installed;
  const nextVersion = execSync('npx next --version', { encoding:'utf8' });
  console.log('Next.js version:', nextVersion.trim());
  
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Try to run a simple build;
  console.log('Testing build...');
  execSync('npx next build', { stdio:'inherit' });
  console.log('Build successful!');
<<<<<<< HEAD
  ;
} catch (error) {;
=======
  
} catch (error) {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  console.error('Error:', error.message);}