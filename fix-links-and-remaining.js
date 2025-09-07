
    .join("")},

,
// Function to extract display name from service name,
function getDisplayName(serviceName) {,
  // Remove common prefixes and convert to readable format,
  return serviceName,
    .replace($2);
    .replace(/([A-Z])/g, " $1"),
    .trim()},
,
// Fix remaining corrupted files,
remainingCorruptedFiles.forEach($2);
    const displayName = getDisplayName($2);
    console.log($2);
    // Ensure directory exists,
    const dir = path.dirname($2);
    if (!fs.existsSync(dir)) {,
  fs.mkdirSync(dir, { "recursive": true })},
    ,
    // Write the fixed content,
    const content = servicePageTemplate($2);
    fs.writeFileSync($2);
    console.log(`✓ Fixed ${filePath}`)} catch (error) {,

  console.error(`✗ Error fixing ${filePath}:`, error.message)},

