import React from 'react;';"
import fs from 'fs;';"
import path from 'path;';"
import { glob    } from "glob;";"
// Common syntax fixes for merged files
function fixSyntaxErrors(content) {
  // Fix JSX expressions that need one parent element
  content = content.replace()
    /^import.*?from.*?;\s*$([\s\S]*?)(?=export|$)/gm,
    (match, body) => {
      // Check if there are multiple JSX elements at the root level
const jsxElements = body.match(/<[A-Z][^>]*>/g)
      if (jsxElements && jsxElements.length > 1) {
        // Wrap in a fragment
        return match.replace(body, `<div>${body}</div>`)```
}
      return match
    },
  )
  // Fix missing semicolons after JSX
  content = content.replace()
    /(<[A-Z][^>]*>[\s\S]*?<\/[A-Z][^>]*>)\s*$/gm,"
    "$1;",
  )
  // Fix JSX expressions that need proper wrapping
  content = content.replace()
    /^(\s*)(<[A-Z][^>]*>[\s\S]*?<\/[A-Z][^>]*>)\s*$/gm,
    (match, indent, jsx) => {"
      if (!jsx.includes("<>") && !jsx.includes("<div")) {
        return `${indent}<>></div>```
</div>\n${indent}  ${jsx}\n${indent}</>````
}
      return match
    },
  )
  // Fix missing closing tags
  content = content.replace()
    /<section([^>]*)>([\s\S]*?)(?=<section|$)/g,
    (match, attrs, body) => {"
      if (!body.includes("</section>")) {
        return `<section${attrs}>${body}</section>````
}
      return match
    },
  )
  // Fix JSX fragments
  content = content.replace(/<>\s*([\s\S]*?)\s*<\/>/g, (match, body) => {"
    if (body.trim().split("\n").length > 1) {
      return `<div>${body}</div>````
}
    return match
  })
  return content
}
// Find all TypeScript/TSX files in the app directory"
const files = glob.sync("app/**