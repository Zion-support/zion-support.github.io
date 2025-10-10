#!/usr/bin/env node;
import fs from 'fs';

// let content = fs.readFileSync('src/utils/analytics.ts', 'utf8');

// Remove the duplicate analytics object at the end;
<<<<<<< HEAD
content = content.replace(/export const analytics = \{\s*track: \(event: string,[\s\S]*?\}\s*;\s*$/g)
  ''
=======
content = content.replace(/export const analytics = \{/* TODO: Fix JSX expression */}
  t: string,[\s\S]*?\}\s*;\s*$/g,
  '')
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
);

fs.writeFileSync('src/utils/analytics.ts', content);

// 