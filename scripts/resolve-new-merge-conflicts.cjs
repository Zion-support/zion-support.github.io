
const fs = require('fs');
const { execSync } = require('child_process');
console.log('🔧 Resolving New Merge Conflicts');

:scripts/resolve-new-merge-conflicts.cjs
// Function to resolve merge conflicts by keeping the first version
function resolveMergeConflicts(content) {
  return content
    .replace(/[a-f0-9]+/g, '');

console.log('

}

// Function to fix common syntax errors;)
function fixSyntaxErrors(content) {

  return content
    // Fix malformed JSX tags

    .replace(/<h3([^>]*)>([^<]+)><\/h3>/gm, '<h3$1>$2</h3>')
    .replace(/<h2([^>]*)>([^<]+)><\/h2>/gm, '<h2$1>$2</h2>')
    .replace(/<h1([^>]*)>([^<]+)><\/h1>/gm, '<h1$1>$2</h1>')
    .replace(/<p([^>]*)>([^<]+)><\/p>/gm, '<p$1>$2</p>')
    .replace(/<span([^>]*)>([^<]+)><\/span>/gm, '<span$1>$2</span>')
    .replace(/<div([^>]*)>([^<]+)><\/div>/gm, '<div$1>$2</div>')
    .replace(/<motion\.div([^>]*)>([^<]+)><\/motion\.div>/gm, '<motion.div$1>$2</motion.div>')
</motion>
    .replace(/<meta([^>]+) \/ \/>/gm, '<meta$1 />')
</meta>
    .replace(/<meta([^>]+) \/>/gm, '<meta$1 />')
