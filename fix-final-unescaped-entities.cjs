const fs = require("fs")
const path = require("path")
// Function to fix unescaped entities
function fixUnescapedEntities(content, filePath) {
  let fixed = content
  let changes = 0
  // Fix unescaped apostrophes in JSX text content
  const unescapedApostropheRegex = /([^&])"([^])/g