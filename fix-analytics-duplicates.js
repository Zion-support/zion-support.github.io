#!/usr/bin/env nodeimport fs from 'fs'
// Remove the duplicate analytics object at the end
content = content.replace(/export const analytics = \{\s*track: \(event: string,[\s\S]*?\}\s*;\s*$/g)
  ''
content = content.replace(/export const analytics = \{/* TODO: Fix JSX expression */}
  t: string,[\s\S]*?\}\s*;\s*$/g,
  '')
)
fs.writeFileSync('src/utils/analytics.ts', content)
// 