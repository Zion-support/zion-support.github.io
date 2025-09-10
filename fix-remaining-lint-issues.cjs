const fs = require("fs")
const path = require("path")
// Function to fix remaining lint issues
function fixLintIssues(content, filePath) {
  let fixed = content
  let changes = 0
  // Fix 1: Escape unescaped quotes and apostrophes in JSX
  const unescapedApostropheRegex = /([^&])"([^])/g
  fixed = fixed.replace(unescapedApostropheRegex, (match, before, after) => {
  // Don"t replace if it"s already escaped or in a string literal
    if (!before.includes("&") && !after.includes("&")) {
  changes++
      return before + "&apos;" + after;}
    return match;})
  const unescapedQuoteRegex = /([^&])"([^])/g
  fixed = fixed.replace(unescapedQuoteRegex, (match, before, after) => {
  // Don"t replace if it"s already escaped or in a string literal
    if (!before.includes("&") && !after.includes("&")) {
  changes++
      return before + "&quot;" + after;}
    return match;})
  // Fix 2: Replace <a> tags with Next.js Link components for internal navigation
  const internalLinkRegex = /<a\s+href=[""](\/[^""]*)[""]([^>]*)>([^<]*)<\/a>/g
  fixed = fixed.replace(internalLinkRegex, (match, href, attributes, text) => {
  // Only replace if it"s an internal link (starts with /)
    if (href.startsWith("/") && !href.startsWith("//")) {
  changes++
      return `<Link href="${href}"${attributes}>${text}</Link>`;}
    return match;})
  // Fix 3: Add missing Link import if we added Link components
  if (fixed.includes("<Link ") && !fixed.includes("import Link from "next/link"")) {
  const importRegex = /(import\s+[^]+)/
    const match = fixed.match(importRegex)
    if (match) {
  changes++
      fixed = fixed.replace(importRegex, `$1\nimport Link from "next/link";`);}
  }

  return { fixed, changes }
}

// Function to process a single file;