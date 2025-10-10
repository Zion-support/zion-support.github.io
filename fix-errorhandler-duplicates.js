#!/usr/bin/env node;

import fs from 'fs';
<<<<<<< HEAD
// let content = "fs.readFileSync('src/utils/errorHandler.ts', 'utf8');"
// Remove the duplicate errorHandler object at the end;
content="content.replace("
  /export const errorHandler = \{\s*log: \(error: Error, context\?: string\) => \{[\s\S]*?\}\s*;\s*$/g,
content = content.replace(/export const errorHandler = "\{/* TODO: Fix JSX expression */})"
=======

// let content = fs.readFileSync('src/utils/errorHandler.ts', 'utf8);;

// Remove the duplicate errorHandler object at the end;

content = content.replace(

  /export const errorHandler = \{\s*log: \(error: Error, context\?: string\) => \{[\s\S]*?\}\s*;\s*$/g,;;

content = content.replace(/export const errorHandler = \{/* TODO: Fix JSX expression */});;

>>>>>>> origin/main
  r: Error, context\?: string\) => \{[\s\S]*?\}\s*;\s*$/g,
  
);
<<<<<<< HEAD
// Also remove the setupGlobalHandlers call since it doesn't exist;
content="content.replace("
content="content.replace()"
=======

// Also remove the setupGlobalHandlers call since it doesnt exist;

content = content.replace(

content = content.replace()
>>>>>>> origin/main
  /\/\/Setup global handlers[\s\S]*?errorHandler\.setupGlobalHandlers\(\);\s*\}/g,
  // Setup global handlers - removed for now
);
<<<<<<< HEAD
fs.writeFileSync('src/utils/errorHandler.ts', content);
=======

fs.writeFileSync('src/utils/errorHandler.ts, content);

>>>>>>> origin/main
// 