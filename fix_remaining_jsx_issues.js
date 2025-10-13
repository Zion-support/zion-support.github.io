import fs from 'fs';
import path from 'path';
#!/usr/bin/env node;
// Function to fix remaining JSX issues;
function fixRemainingJSXIssues(content) {
  // Fix missing closing div tags - look for the pattern where we have:
</Link>
</div>
  // );
  // }
  // But missing the outer div closing tag;
  content = content.replace(;
    /(\s*<\/Link>\s*<\/div>\s*\);\s*})/g,
    '\n        </Link>\n      </div>\n    </div>\n  );\n}'
  );
}
