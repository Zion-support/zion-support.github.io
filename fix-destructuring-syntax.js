function fixDestructuringSyntax(content) {
  // Pattern to match the incorrect destructuring syntax
  const pattern = /const WorkingPage = \(\{ title: "Page", description: "Professional page services by Zion Tech Group\." \}: \{ title: string; description: string \}\) => \{/g;
  
  // Replace with correct syntax
  const replacement = 'const WorkingPage = ({ title = "Page", description = "Professional page services by Zion Tech Group." }: { title: string; description: string }) => {';
  
  return content.replace(pattern, replacement);
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixDestructuringSyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');