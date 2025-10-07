#!/usr/bin/env node

import fs from 'fs';

console.log('🔧 Fixing duplicate analytics declarations...');

let content = fs.readFileSync('src/utils/analytics.ts', 'utf8');

// Remove the duplicate analytics object at the end
content = content.replace(
  /export const analytics = \{\s*track: \(event: string,[\s\S]*?\}\s*;\s*$/g,
  ''
);

fs.writeFileSync('src/utils/analytics.ts', content);

console.log('✅ Fixed duplicate analytics declarations');
