// Function to fix common syntax errors in test files
function fixTestFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix unterminated strings and syntax errors
    content = content
      // Fix unterminated import strings - more comprehensive
      .replace(/from 'react";$/gm, "from 'react';")
      .replace(/from '@testing-library\/react";$/gm, "from '@testing-library/react';")
      .replace(/from '@testing-library\/jest-dom$/gm, "from '@testing-library/jest-dom';")
      .replace(/from '\.\.\/components\/[^"]*";$/gm, (match) => match.replace('";', "';"))
      
      // Fix unterminated describe and test strings
      .replace(/describe\('([^']*)"$/gm, "describe('$1', () => {")
      .replace(/test\('([^']*)"$/gm, "test('$1', () => {")
      
      // Fix JSX syntax errors
      .replace(/<([A-Za-z]+)\s+\/\s+\/>/g, '<$1 />')
      .replace(/<([A-Za-z]+)\s+\/\s+\/>/g, '<$1 />')
      
      // Fix unterminated expect statements
      .replace(/expect\([^)]*\)\.toBeInTheDocument\(\);'$/gm, 'expect($1).toBeInTheDocument();')
      
      // Fix missing semicolons and closing braces
      .replace(/}\)$/gm, '});')
      .replace(/}\)$/gm, '});')
      
      // Fix missing closing braces for describe blocks
      .replace(/}\)$/gm, '});')
      .replace(/}\)$/gm, '});')
      
      // Fix specific patterns that are causing issues
      .replace(/import '@testing-library\/jest-dom$/gm, "import '@testing-library/jest-dom';")
      .replace(/describe\('([^']*)"$/gm, "describe('$1', () => {")
      .replace(/test\('([^']*)"$/gm, "test('$1', () => {")
      .replace(/render\(<([A-Za-z]+)\s+\/\s+\/>\)$/gm, 'render(<$1 />);')
      .replace(/expect\([^)]*\)\.toBeInTheDocument\(\);'$/gm, 'expect($1).toBeInTheDocument();')
      .replace(/}\)$/gm, '});')
      .replace(/}\)$/gm, '});');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }