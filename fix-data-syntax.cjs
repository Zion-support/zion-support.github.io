#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filePath = '/workspace/data/2025-advanced-innovative-services-expansion-v3.js';

console.log('Fixing syntax errors in data file...');

let content = fs.readFileSync(filePath, 'utf8');

// Fix common syntax errors
content = content
  // Fix malformed strings with extra commas
  .replace(/, ([^,]+), /g, ', "$1", ')
  .replace(/, ([^,]+),$/g, ', "$1"')
  .replace(/, ([^,]+);/g, ', "$1"')
  .replace(/, ([^,]+)]/g, ', "$1"]')
  .replace(/, ([^,]+)}/g, ', "$1"}')
  
  // Fix unquoted strings
  .replace(/id: ([^,]+),/g, 'id: "$1",')
  .replace(/name: ([^,]+),/g, 'name: "$1",')
  .replace(/tagline: ([^,]+),/g, 'tagline: "$1",')
  .replace(/price: ([^,]+),/g, 'price: "$1",')
  .replace(/period: ([^,]+),/g, 'period: "$1",')
  .replace(/description: ([^,]+),/g, 'description: "$1",')
  .replace(/marketPosition: ([^,]+),/g, 'marketPosition: "$1",')
  .replace(/targetAudience: ([^,]+),/g, 'targetAudience: "$1",')
  .replace(/setupTime: ([^,]+),/g, 'setupTime: "$1",')
  .replace(/category: ([^,]+),/g, 'category: "$1",')
  .replace(/roi: ([^,]+),/g, 'roi: "$1",')
  .replace(/marketSize: ([^,]+),/g, 'marketSize: "$1",')
  .replace(/growthRate: ([^,]+),/g, 'growthRate: "$1",')
  .replace(/variant: ([^,]+),/g, 'variant: "$1",')
  .replace(/implementationDetails: ([^,]+),/g, 'implementationDetails: "$1",')
  .replace(/launchDate: ([^,]+),/g, 'launchDate: "$1",')
  
  // Fix icon and color properties
  .replace(/icon: '([^,]+), ,/g, 'icon: "$1",')
  .replace(/color: , ([^,]+),/g, 'color: "$1",')
  .replace(/textColor: , ([^,]+), ,/g, 'textColor: "$1",')
  .replace(/link: , ([^,]+),/g, 'link: "$1",')
  
  // Fix mobile, email, address, website
  .replace(/mobile: , ([^,]+), ,/g, 'mobile: "$1",')
  .replace(/email: , ([^,]+),/g, 'email: "$1",')
  .replace(/address: '([^,]+), ,/g, 'address: "$1",')
  .replace(/website: , ([^,]+),/g, 'website: "$1",')
  
  // Fix array syntax
  .replace(/\[([^]]+);/g, '[$1]')
  .replace(/\[, ([^]]+)]/g, '["$1"]')
  .replace(/\[([^]]+), ,/g, '[$1]')
  
  // Fix object syntax
  .replace(/\{([^}]+);/g, '{$1}')
  .replace(/\{([^}]+), ,/g, '{$1}')
  
  // Fix semicolons to commas in objects
  .replace(/;(\s*})/g, ',$1')
  .replace(/;(\s*])/g, ',$1')
  
  // Fix trailing commas
  .replace(/,(\s*[}\]])/g, '$1')
  
  // Fix specific patterns
  .replace(/'([^']+), ,/g, '"$1",')
  .replace(/, ([^,]+), ,/g, ', "$1",')
  .replace(/, ([^,]+),$/g, ', "$1"')
  .replace(/, ([^,]+);/g, ', "$1"')
  .replace(/, ([^,]+)]/g, ', "$1"]')
  .replace(/, ([^,]+)}/g, ', "$1"}')
  
  // Fix specific malformed patterns
  .replace(/, ([^,]+), ,/g, ', "$1",')
  .replace(/, ([^,]+),$/g, ', "$1"')
  .replace(/, ([^,]+);/g, ', "$1"')
  .replace(/, ([^,]+)]/g, ', "$1"]')
  .replace(/, ([^,]+)}/g, ', "$1"}')
  
  // Fix array elements
  .replace(/'([^']+)';/g, '"$1",')
  .replace(/'([^']+),/g, '"$1",')
  .replace(/'([^']+)]/g, '"$1"]')
  .replace(/'([^']+)}/g, '"$1"}')
  
  // Fix object properties
  .replace(/(\w+): , ([^,]+),/g, '$1: "$2",')
  .replace(/(\w+): , ([^,]+);/g, '$1: "$2",')
  .replace(/(\w+): , ([^,]+)]/g, '$1: "$2",')
  .replace(/(\w+): , ([^,]+)}/g, '$1: "$2",')
  
  // Clean up any remaining issues
  .replace(/, ,/g, ',')
  .replace(/, ,/g, ',')
  .replace(/,,/g, ',')
  .replace(/,(\s*[}\]])/g, '$1')
  .replace(/;(\s*[}\]])/g, '$1');

// Write the fixed content back
fs.writeFileSync(filePath, content, 'utf8');

console.log('Syntax errors fixed successfully!');