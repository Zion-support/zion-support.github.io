const fs = require('fs');
const path = require('path');

function resolveConflicts(conte, n, t) {
  // Remove all merge conflict markers and keep the HEAD version
  return content