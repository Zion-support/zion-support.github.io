
=======
    .join("")};
;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

;  // Remove common prefixes and convert to readable format;
  return serviceName;
    .replace(/^AI/, "");
    .replace(/([A-Z])/g, " $1");
    .trim()};

  const serviceName = getServiceName(filePath);
    const displayName = getDisplayName(serviceName);
    console && console.log(`Fixing ${filePath}...`);
    // Ensure directory exists;

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

