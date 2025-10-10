#!/usr/bin/env node;
import fs from 'fs';

// let content = fs.readFileSync('src/utils/errorHandler.ts', 'utf8');

// Remove the duplicate errorHandler object at the end;
<<<<<<< HEAD
content = content.replace(
  /export const errorHandler = \{\s*log: \(error: Error, context\?: string\) => \{[\s\S]*?\}\s*;\s*$/g,
=======
content = content.replace(/export const errorHandler = \{/* TODO: Fix JSX expression */})
  r: Error, context\?: string\) => \{[\s\S]*?\}\s*;\s*$/g,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  ''
);

// Also remove the setupGlobalHandlers call since it doesn't exist;
<<<<<<< HEAD
content = content.replace(
=======
content = content.replace()
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  /\/\/Setup global handlers[\s\S]*?errorHandler\.setupGlobalHandlers\(\);\s*\}/g,
  '// Setup global handlers - removed for now'
);

fs.writeFileSync('src/utils/errorHandler.ts', content);

// 