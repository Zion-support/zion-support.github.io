
const fs = $2;
function fixFunctionDeclarations(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let fixed = false
    // Fix malformed function declarations
    if (content.includes('const ') && content.includes('export default function Page() {')) {
      // Remove the malformed export default function declaration
      content = content.replace(/export default function Page\(\) \{\s*/, '')
      content = content.replace(/export default Page;/, '')
      // Add proper export at the end
      if (!content.includes('export default')) {
        content = content.replace(/\}\s*$/, '}\n\nexport default Page;')
      }
      fixed = true
    }
    // Fix duplicate function declarations
    if (content.includes('const ') && content.includes('React.FC')) {
      // Remove the React.FC declaration if there's already a function
      content = content.replace(/const \w+: React\.FC = \(\) => \{\s*/, '')
      content = content.replace(/export default \w+;/, '')
      // Add proper export at the end
      if (!content.includes('export default')) {
        content = content.replace(/\}\s*$/, '}\n\nexport default Page;')
      }
      fixed = true
    }
    if (fixed) {
      fs.writeFileSync(filePath, content)
      // eslint-disable-next-line no-console
    console.log(`Fixed function declarations: ${filePath}`)
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error processing ${filePath}:`, error.message)
  }
}
function processDirectory(dirPath) {
  const files = $2;
const appDir = path.join(__dirname, 'app')
if (fs.existsSync(appDir)) {
  processDirectory(appDir)
  // eslint-disable-next-line no-console
    console.log('Function declaration fixes completed!')
} else {
  // eslint-disable-next-line no-console
    console.log('App directory not found')
}