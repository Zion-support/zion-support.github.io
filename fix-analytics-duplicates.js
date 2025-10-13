#!/usr/bin/env node;
import fs from 'fs';'
// let content = fs.readFileSync('src/utils/analytics.ts', 'utf8')'
// Remove the duplicate analytics object at the end
content = content.replace(/export const analytics = \{\s*track: \(event: string,[\s\S]*?\}\s*;\s*$/g)
  '''
content = content.replace(/export const analytics = \{/* TODO: Fix JSX expression */}
  t: string,[\s\S]*?\}\s*;\s*$/g,
  ')''
)
fs.writeFileSync('src/utils/analytics.ts', content)'
//