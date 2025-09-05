
    .join("&quot;)};
,
// Function to extract display name from service name,
function getDisplayName(serviceName) {,
  // Remove common prefixes and convert to readable format,
  return serviceName,
    .replace(/^AI/, "&quot;),
    .replace(/([A-Z])/g, &quot; $1&quot;),

    .trim()};
,
// Fix remaining corrupted files,
remainingCorruptedFiles.forEach(filePath => {,
  try {,
  const serviceName = getServiceName(filePath),
    const displayName = getDisplayName(serviceName),
    // console.log(`Fixing ${filePath}...`),
    // Ensure directory exists,
    const dir = path.dirname(filePath),
    if (!fs.existsSync(dir)) {,

  fs.mkdirSync(dir, { &quot;recursive&quot;: true })};
    ,
    // Write the fixed content,
    const content = servicePageTemplate(serviceName, displayName),
    fs.writeFileSync(filePath, content, &quot;utf8&quot;),
    // console.log(`✓ Fixed ${filePath}`)} catch (error) {,
  console.error(`✗ Error fixing ${filePath}:`, error.message)};
