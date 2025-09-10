const fs = require("fs")
const path = require("path")
// Function to fix unescaped entities
function fixUnescapedEntities(content, filePath) {
  let fixed = content
  let changes = 0
  // Fix unescaped apostrophes in JSX text content
  const unescapedApostropheRegex = /([^&])"([^])/g
  fixed = fixed.replace(unescapedApostropheRegex, (match, before, after) => {
  // Don"t replace if it"s already escaped or in a string literal
    if (!before.includes("&") && !after.includes("&")) {
  changes++
      return before + "&apos;" + after;}
    return match;})
  // Fix unescaped quotes in JSX text content
  const unescapedQuoteRegex = /([^&])"([^])/g
  fixed = fixed.replace(unescapedQuoteRegex, (match, before, after) => {
  // Don"t replace if it"s already escaped or in a string literal
    if (!before.includes("&") && !after.includes("&")) {
  changes++
      return before + "&quot;" + after;}
    return match;})
  return { fixed, changes }
}

// Function to process a single file;