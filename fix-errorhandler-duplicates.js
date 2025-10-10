#!/usr/bin/env nodeimport fs from 'fs'
// Remove the duplicate errorHandler object at the end
content = content.replace(
  /export const errorHandler = \{\s*log: \(error: Error, context\?: string\) => \{[\s\S]*?\}\s*;\s*$/g,
content = content.replace(/export const errorHandler = \{/* TODO: Fix JSX expression */})
  r: Error, context\?: string\) => \{[\s\S]*?\}\s*;\s*$/g,
  ''
)
content = content.replace(
content = content.replace()
  /\/\/Setup global handlers[\s\S]*?errorHandler\.setupGlobalHandlers\(\);\s*\}/g,
  '// Setup global handlers - removed for now'
)
fs.writeFileSync('src/utils/errorHandler.ts', content)
// 