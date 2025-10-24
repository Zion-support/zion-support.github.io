const fs = require('fs');
const path = require('path');

function resolveConflicts(conte, n, t) {
  // Remove all merge conflict markers and keep the HEAD version
<<<<<<< HEAD
  return content
=======
  return content
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
