import fs from 'fs';
import path from 'path';
#!/usr/bin/env node;
// Function to fix missing closing div tags;
function fixMissingClosingDivs(content) {
  // Fix the pattern where we have:
</Link>
</div>
  // );
  // }
  // But missing the outer div closing tag;
  content = content.replace(;
    /(\s*<\/Link>\s*<\/div>\s*\);\s*})/g,
//     '$1'
  );
}
