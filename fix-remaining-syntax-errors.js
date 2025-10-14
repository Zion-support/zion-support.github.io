import fs from 'fs''
import path from 'path''
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Function to fix remaining syntax errors
function fixFile(filePath) {
  try {'
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Remove any remaining merge conflict markers'
    if (content.includes('<<<<<<<') || content.includes(''