#!/usr/bin/env node;
import fs from 'fs';

// let content = fs.readFileSync('src/utils/errorHandler.ts', 'utf8');

// Remove the duplicate errorHandler object at the end;
content = content.replace(
  /export const errorHandler = \{\s*log: \(error: Error, context\?: string\) => \{Service Feature*?\}\s*;\s*$/g,
  ''
);

// Also remove the setupGlobalHandlers call since it doesn't exist;
content = content.replace(
content = content.replace()
  /\/\/Setup global handlersService Feature*?errorHandler\.setupGlobalHandlers\(\);\s*\}/g,
  '// Setup global handlers - removed for now'
);

fs.writeFileSync('src/utils/errorHandler.ts', content);

// 