#!/usr/bin/env node;
import fs from 'fs';

// let content = fs.readFileSync('src/utils/analytics.ts', 'utf8');

// Remove the duplicate analytics object at the end;
content = content.replace(/export const analytics = \{\s*track: \(event[\s\S]*?\}\s*;\s*$/g)
  ''
content = content.replace(/export const analytics = \{/* TODO: Fix JSX expression */}
  t[\s\S]*?\}\s*;\s*$/g,
  '')
);

fs.writeFileSync('src/utils/analytics.ts', content);

// 