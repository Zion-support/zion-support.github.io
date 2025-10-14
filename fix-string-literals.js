#!/usr/bin/env node,
import fs from 'fs';
import { glob } from 'glob';
// Function to fix unterminated string literals and other syntax issues,
function fixStringLiterals(content, filePath) {
  let fixed = content;
  let changes = 0;
  // Fix unterminated string literals in import statements,
fixed = fixed.replace(/import\s+React\s+from\s+"([^"]*)$/gm, 'import React from "react"');
  changes += (content.match(/import\s+React\s+from\s+"([^"]*)$/gm) || []).length;
  // Fix unterminated string literals in Helmet imports,
fixed = fixed.replace(/import\s+\{\s*Helmet\s*\}\s+from\s+"([^"]*)$/gm, 'import { Helmet } from 'react-helmet-async';');
  changes += (content.match(/import\s+\{\s*Helmet\s*\}\s+from\s+"([^"]*)$/gm) || []).length;
  // Fix malformed JSX fragments that are missing closing tags,
const fragmentOpenCount = (fixed.match(/<>/g) || []).length;
  const fragmentCloseCount = (fixed.match(/<\/>/g) || []).length;
  if (fragmentOpenCount > fragmentCloseCount) {
    const missingFragments = fragmentOpenCount - fragmentCloseCount;
    // Add missing closing fragments at the end before the last closing brace,
const lastBraceIndex = fixed.lastIndexOf('}');
    if (lastBraceIndex !== -1) {
      const beforeLastBrace = fixed.substring(0, lastBraceIndex);
      const afterLastBrace = fixed.substring(lastBraceIndex);
      fixed = beforeLastBrace + '</>'.repeat(missingFragments) + afterLastBrace;
      changes += missingFragments;
    }
  }
  // Fix incomplete JSX structures that are missing proper closing
  // Look for patterns like: <Helmet>\n\n        </div>\n      </div>\n    </>\n  );\n}
  fixed = fixed.replace(/<Helmet>\s*\n\s*\n\s*<\/div>\s*\n\s*<\/div>\s*\n\s*<\/>\s*\n\s*\);\s*\n\s*\}/g, '');
  changes += (content.match(/<Helmet>\s*\n\s*\n\s*<\/div>\s*\n\s*<\/div>\s*\n\s*<\/>\s*\n\s*\);\s*\n\s*\}/g) || []).length;
  // Fix malformed JSX with missing closing tags,
fixed = fixed.replace(/<Helmet>\s*\n\s*<\/div>\s*\n\s*<\/div>\s*\n\s*<\/>/g, '');
  changes += (content.match(/<Helmet>\s*\n\s*<\/div>\s*\n\s*<\/div>\s*\n\s*<\/>/g) || []).length;
  // Fix incomplete function definitions,
fixed = fixed.replace(/export default function Page\(\) \{\s*return\s*\(\s*<>\s*<Helmet>\s*\n\s*<\/div>\s*\n\s*<\/div>\s*\n\s*<\/>\s*\);\s*\}/g
    ""
}""
        closingTags += `</${tagName}>""
      console.log(`Fixed ${changes} issues in ${filePath}""
    console.error(`Error processing ${filePath}:""
  console.log(`\nCompleted! Fixed ${totalChanges} issues across ${filesProcessed} files."")