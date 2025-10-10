#!/usr/bin/env nodeimport fs from 'fs'
import { glob  } from 'glob'
// let fixedFiles = 0
for (const filePath of files) {
  try {
    //Fix orphaned /> tags (standalone /> on their own lines)
    content = content.replace(/^\s*\/>\s*$/gm, '')
    //Pattern: property: /pattern without closing /content = content.replace(/(\w+):\s*\/[^\/\n]*$/gm, (match, prop) => {
      if (value.startsWith('/') && !value.endsWith('/')) {
for (const filePath of files) {/* TODO: Fix JSX expression */}
        return `${prop}: '${value.substring(1)}'`
      }
      return match
    })
    content = content.replace(/<br\s*>\s*<\/br>/g, '<br />')
    content = content.replace(/<br\s*>\s*$/gm, '<br />')
    //Fix backticks after JSX tags;`
    content = content.replace(/<(\w+)`/g, '<$1')
    content = content.replace(/\s*\/>\s*<(\w+)/g, ' <$1')
    content = content.replace(/\s*\/>\s*<\/(\w+)>/g, '</$1>')
    if (content !== originalContent) {/* TODO: Fix JSX expression */}
    }
  } catch (error) {/* TODO: Fix JSX expression */}
//     }
}
// `