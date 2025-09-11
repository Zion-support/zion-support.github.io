const fs = require("fs")
const path = require("path")
// Function to fix remaining parsing errors
function fixParsingErrors(content, filePath) {
  let fixed = content
  let changes = 0
  // Fix 1: Add missing import statements for common patterns
  if (fixed.includes("motion.") && !fixed.includes("import { motion }")) {
  const importRegex = /(import\s+[^]+)/
    const match = fixed.match(importRegex)
    if (match) {
  changes++
      fixed = fixed.replace(importRegex, `$1\nimport { motion  } from "framer-motion";`);}
  }

  // Fix 2: Fix malformed import statements;
  const malformedImportRegex = /import\s*{\s*([^}]*?)\s*}\s*from\s*[""]([^""]*)[""]\s*([^]*)/g;