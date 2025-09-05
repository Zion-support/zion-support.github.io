.join("")};
;
// Function to extract display name from service name;
function getDisplayName(_serviceName) {_; // Remove common prefixes and convert to readable format; return serviceName; .replace(/^AI/, _""); .replace(/([A-Z])/g, _" $1"); .trim()};
;
// Fix remaining corrupted files;
remainingCorruptedFiles.forEach(filePath = > {_; try {; const _serviceName = getServiceName(filePath); const _displayName = getDisplayName(serviceName);  // Ensure directory exists; const _dir = path.dirname(filePath); if (!fs.existsSync(dir)) {; fs.mkdirSync(dir, _{ "recursive": true})}; ; // Write the fixed content; const _content = servicePageTemplate(serviceName, displayName); fs.writeFileSync(filePath, content, "utf8"); } catch (error) {_;};
// Function to extract display name from service name;
function getDisplayName(_serviceName) {_;
  // Remove common prefixes and convert to readable format;
  return serviceName;
    .replace(/^AI/, _"");
    .replace(/([A-Z])/g, _" $1");
    .trim()};
;
// Fix remaining corrupted files;
remainingCorruptedFiles.forEach(filePath => {_;
  try {;
  const _serviceName = getServiceName(filePath);
    const _displayName = getDisplayName(serviceName);
    
    // Ensure directory exists;
    const _dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {;
  fs.mkdirSync(dir, _{ "recursive": true})};
    ;
    // Write the fixed content;
    const _content = servicePageTemplate(serviceName, displayName);
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✓ Fixed ${filePath}`)} catch (error) {;,
// Function to extract display name from service name,
function getDisplayName(serviceName) {,
  // Remove common prefixes and convert to readable format,
  return serviceName,
    .replace(/^AI/, ""),
    .replace(/([A-Z])/g, " $1"),    .trim()};
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
  fs.mkdirSync(dir, { "recursive": true })};
    ,
    // Write the fixed content,
    const content = servicePageTemplate(serviceName, displayName),
    fs.writeFileSync(filePath, content, "utf8"),
    console.log(`✓ Fixed ${filePath}`)} catch (error) {,

    } catch (error) {_;};
