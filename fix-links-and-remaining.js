;
//Function to extract display name from service name;
function getDisplayName (serviceName) {
  ;
//Remove common prefixes and convert to readable format;
return serviceName;
.trim () 
};
;
//Fix remaining corrupted files;
remainingCorruptedFiles.forEach (filePath => {
  ;
try {
  ;
const serviceName = getServiceName (filePath);
const displayName = getDisplayName (serviceName);
//console.log (`Fixing $ {
  filePath 
}...`);
// Ensure directory exists;
const dir = path.dirname (filePath);
if (!fs.existsSync (dir) ) {
  ;
console.error (`✗ Error fixing $ {
  filePath 
}:`, error.message) 
};
