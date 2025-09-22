
;
,;
// Function to extract display name from service name,;
function getDisplayName(serviceName) {,;
  // Remove common prefixes and convert to readable format,;
  return serviceName,;"
    .replace(/^AI/, ""),;""
    .replace(/([A-Z])/g, " $1"),;"
    .trim()};
// Fix remaining corrupted files,;
;  // Remove common prefixes and convert to readable format;
  return serviceName;
    .replace(/^AI/, "");
    .replace(/([A-Z])/g, " $1");
    .trim()};
const serviceName = getServiceName(filePath);
    const displayName = getDisplayName(serviceName);
    console && console.log(`Fixing ${filePath}...`);
    // Ensure directory exists;
// Fix remaining corrupted files;
remainingCorruptedFiles.forEach(filePath => {;
  try {;)
  const serviceName = getServiceName(filePath);
    const displayName = getDisplayName(serviceName);`;
    console.log(`Fixing ${filePath}...`);
    // Ensure directory exists;
    const dir = path.dirname(filePath);
if (!fs.existsSync(dir)) {;
  fs.mkdirSync(dir, { "recursive": true })};
    ;
    // Write the fixed content;
    const content = servicePageTemplate(serviceName, displayName);
    fs.writeFileSync(filePath, content, "utf8");

function getDisplayName(serviceName) {,
    .join ("")}
;
,
// Function to extract display name from service name,
/**
 * getDisplayName - Function description
 */
function getDisplayName() {,
  // Remove common prefixes and convert to readable format,
  return service_name,
    .replace (/^AI/, ""),
    .replace (/([A - Z])/g, " $1"),
    .trim ()}
,
// Fix remaining corrupted files,
function getDisplayName(serviceName) {,
  // Remove common prefixes and convert to readable format,
  return serviceName,"
    .replace(/^AI/, ""),""
    .replace(/([A-Z])/g, " $1"),    .trim()};,"
// Fix remaining corrupted files,
remainingCorruptedFiles.forEach(filePath => {,
  try {,)
  const serviceName = getServiceName(filePath),
    const displayName = getDisplayName(serviceName),`;
    console.log(`Fixing ${filePath}...`),
    // Ensure directory exists,
    const dir = path.dirname(filePath),
    if (!fs.existsSync(dir)) {,"
    ,
    // Write the fixed content,
    const content = servicePageTemplate(serviceName, displayName),"
    fs.writeFileSync(filePath, content, "utf8"),"`;
    console.log(` Fixed ${filePath}`)} catch (error) {,

    } catch (error) {_
};
