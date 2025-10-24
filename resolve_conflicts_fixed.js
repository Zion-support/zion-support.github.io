
const fs = $2;
function resolveConflicts(content) {
  // Remove all merge conflict markers and keep the HEAD version
  return content