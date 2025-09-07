<<<<<<< HEAD
<<<<<<< HEAD:scripts/final-syntax-cleanup.cjs
=======
<<<<<<< HEAD:backup-problematic-files/scripts/final-syntax-cleanup.cjs
=======
=======


>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
<<<<<<< HEAD
#!/usr/bin/env node;
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:scripts/final-syntax-cleanup.cjs
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58:backup-problematic-files/scripts/final-syntax-cleanup.cjs
=======
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
#!/usr/bin/env node
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
const fs = require('fs');
console.log('🔧 Final Syntax Cleanup');
console.log('=');
<<<<<<< HEAD

// Function to fix all remaining syntax errors
=======
// Function to fix all remaining syntax errors;
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
function fixAllSyntax(content) {
  return content;
    // Fix malformed JSX tags;
<<<<<<< HEAD
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
=======
    .replace(/<h3([^>]*)>([^<]+)><\/h3>/gm,<h3$1>$2</h3>')
    .replace(/<h2([^>]*)>([^<]+)><\/h2>/gm,<h2$1>$2</h2>')
    .replace(/<h1([^>]*)>([^<]+)><\/h1>/gm,<h1$1>$2</h1>')
    .replace(/<p([^>]*)>([^<]+)><\/p>/gm,<p$1>$2</p>')
    .replace(/<span([^>]*)>([^<]+)><\/span>/gm,<span$1>$2</span>')
    .replace(/<div([^>]*)>([^<]+)><\/div>/gm,<div$1>$2</div>')
    .replace(/<motion\.div([^>]*)>([^<]+)><\/motion\.div>/gm,<motion.div$1>$2</motion.div>')
</motion>'
    .replace(/<meta([^>]+) \/ \/>/gm,<meta$1 />')
</meta>'
    .replace(/<meta([^>]+) \/>/gm,<meta$1 />')
</meta>'
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
