#!/usr/bin/env node

import fs from 'fs';

// console.log('🔧 Fixing duplicate errorHandler declarations...');

let content = fs.readFileSync('src/utils/errorHandler.ts', 'utf8');

// Remove the duplicate errorHandler object at the end
content = content.replace(
  /export const errorHandler = \{\s*log: \(error: Error, context\?: string\) => \{[\s\S]*?\}\s*;\s*$/g,
  ''
);

// Also remove the setupGlobalHandlers call since it doesn't exist
content = content.replace(
  /\/\/Setup global handlers[\s\S]*?errorHandler\.setupGlobalHandlers\(\);\s*\}/g,
  '// Setup global handlers - removed for now'
);

fs.writeFileSync('src/utils/errorHandler.ts', content);

// console.log('✅ Fixed duplicate errorHandler declarations');
