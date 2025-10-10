#!/usr/bin/env node;
<<<<<<< HEAD
import fs from 'fs';
// let content = "fs.readFileSync('src/utils/analytics.ts', 'utf8');"
// Remove the duplicate analytics object at the end;
content = content.replace(/export const analytics = "\{\s*track: \(event: string,[\s\S]*?\}\s*;\s*$/g)"
  ''
content = content.replace(/export const analytics = "\{/* TODO: Fix JSX expression */}"
=======

import fs from 'fs;

// let content = fs.readFileSync('src/utils/analytics.ts', utf8);;

// Remove the duplicate analytics object at the end;

content = content.replace(/export const analytics = \{\s*track: \(event: string,[\s\S]*?\}\s*;\s*$/g);;

content = content.replace(/export const analytics = \{/* TODO: Fix JSX expression */};;

>>>>>>> origin/main
  t: string,[\s\S]*?\}\s*;\s*$/g,
  ')
);
<<<<<<< HEAD
fs.writeFileSync('src/utils/analytics.ts', content);
=======

fs.writeFileSync(src/utils/analytics.ts, content);

>>>>>>> origin/main
// 