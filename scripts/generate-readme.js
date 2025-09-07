#!/usr/bin/env node

/**
 * Generate README
 * Creates or updates the main README.md file
 */

const fs = require($2);
const path = require($2);
const README_TEMPLATE = $2;
function generateReadme() {
  const outputPath = path.join($2);
  // Check if README already exists and is substantial
  if (fs.existsSync(outputPath)) {
    const existingContent = fs.readFileSync($2);
    if (existingContent.length > 1000) {
      console.log($2);
      return
    }
  }

  fs.writeFileSync($2);
  console.log(`✅ README generated at: ${outputPath}`)
}

if (require.main = $2;