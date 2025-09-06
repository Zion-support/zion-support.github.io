
<<<<<<< HEAD
=======
    .join("")};
;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    .join("")};
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
// Function to extract display name from service name,;
function getDisplayName(serviceName) {,;
  // Remove common prefixes and convert to readable format,;
  return serviceName,;
    .replace(/^AI/, ""),;
    .replace(/([A-Z])/g, " $1"),;
    .trim()};
,;
// Fix remaining corrupted files,;
<<<<<<< HEAD
<<<<<<< HEAD

=======
remainingCorruptedFiles.forEach(filePath => {,;
  try {,;
  const serviceName = getServiceName(filePath),;
    const displayName = getDisplayName(serviceName),;
    console.log(`Fixing ${filePath}...`),;
    // Ensure directory exists,;
    const dir = path.dirname(filePath),;
    if (!fs.existsSync(dir)) {,;
  fs.mkdirSync(dir, { "recursive":true })};
    ,;
    // Write the fixed content,;
    const content = servicePageTemplate(serviceName, displayName),;
    fs.writeFileSync(filePath, content, "utf8"),;
    console.log(` Fixed ${filePath}`)} catch (error) {,;
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;  // Remove common prefixes and convert to readable format;
  return serviceName;
    .replace(/^AI/, "");
    .replace(/([A-Z])/g, " $1");
    .trim()};
<<<<<<< HEAD

  const serviceName = getServiceName(filePath);
    const displayName = getDisplayName(serviceName);
    console && console.log(`Fixing ${filePath}...`);
    // Ensure directory exists;

=======
;
// Fix remaining corrupted files;
remainingCorruptedFiles.forEach(filePath => {;
  try {;
  const serviceName = getServiceName(filePath);
    const displayName = getDisplayName(serviceName);
    console.log(`Fixing ${filePath}...`);
    // Ensure directory exists;
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {;
  fs.mkdirSync(dir, { "recursive": true })};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    ;
    // Write the fixed content;
    const content = servicePageTemplate(serviceName, displayName);
    fs.writeFileSync(filePath, content, "utf8");
<<<<<<< HEAD

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

=======
function getDisplayName(serviceName) {,
  // Remove common prefixes and convert to readable format,
  return serviceName,
    .replace(/^AI/, ""),
    .replace(/([A-Z])/g, " $1"),    .trim()};,
// Fix remaining corrupted files,
remainingCorruptedFiles.forEach(filePath => {,
  try {,
  const serviceName = getServiceName(filePath),
    const displayName = getDisplayName(serviceName),
    console.log(`Fixing ${filePath}...`),
    // Ensure directory exists,
    const dir = path.dirname(filePath),
    if (!fs.existsSync(dir)) {,
  fs.mkdirSync(dir, { "recursive": true })};
    ,
    // Write the fixed content,
    const content = servicePageTemplate(serviceName, displayName),
    fs.writeFileSync(filePath, content, "utf8"),
    console.log(` Fixed ${filePath}`)} catch (error) {,

    } catch (error) {_
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
