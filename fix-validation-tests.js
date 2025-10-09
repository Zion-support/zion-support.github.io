#!/usr/bin/env node

import fs from 'fs';

// Read the validation test file
const content = fs.readFileSync('__tests__/validation.test.ts', 'utf8');

// Replace function calls with correct ones
let newContent = content
  .replace(/validateEmail\(/g, 'isValidEmail(')
  .replace(/validateURL\(/g, 'isValidUrl(')
  .replace(/validateLength\(/g, 'minLength(')
  .replace(/validatePassword\(/g, 'isStrongPassword(')
  .replace(/sanitizeHTML\(/g, 'sanitizeHtml(')
  .replace(/validateDate\(/g, 'isValidDate(')
  .replace(/validateCreditCard\(/g, 'isValidCreditCard(')
  .replace(/validateJSON\(/g, 'isValidJson(')
  .replace(/validateComposite\(/g, 'validateObject(')
  .replace(/validateAsync\(/g, 'validateAsync(');

// Write the fixed content back
fs.writeFileSync('__tests__/validation.test.ts', newContent);

console.log('Fixed validation test function calls');