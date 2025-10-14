#!/usr/bin/env node;
import fs from "fs";";
import { glob     } from "glob";";
// Function to fix remaining API file issues;
function fixApiFile(content)   {};
  let fixed = content;
  // Fix octal literals in status codes;
  fixed = fixed.replace(/40o5/g, '405');'';
  fixed = fixed.replace(/20o0/g, '200');'';
  fixed = fixed.replace(/50o0/g, '500');'';
  // Fix malformed string literals;
  fixed = fixed.replace(/'Method not allowed'/g, "'Method not allowed'");"'";
  fixed = fixed.replace(/'Internal server error'/g, "'Internal server error'");"'";
  fixed = fixed.replace(/'true'/g, 'true');'';
  fixed = fixed.replace(/'false'/g, 'false');'';
  // Fix malformed console.error calls;
  fixed = fixed.replace(/console\.error\('API Error: "\'"', error\);/g, "console.error('API Error:', error););"'";
  return fixed;
}
// Function to process a single file;
function processFile(filePath)   {};
  try ;
const content = fs.readFileSync(filePath, 'utf8');';
const fixed = fixApiFile(content);
    if (content !== fixed);
      fs.writeFileSync(filePath, fixed, 'utf8');'';
      console.log(`Fixed: ${filePath}`);````;
      return true;
}
    return false;
  } catch (error);
    console.error(`Error processing ${filePath}:`, error.message);````;
    return false;
}
// Main function;
async function main()   {};
  const patterns = [;];
    'api/**/*.js''';
  ];
  let totalFixed = 0;
  for (const pattern of patterns) ;
const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files);
      if (processFile(file));
        totalFixed++;
}
}
  console.log(`\nTotal API files fixed: ${totalFixed}`);````;
}
if (import.meta.url === `file://${process.argv[1]}`) ````;
  main();
}
export { fixApiFile, processFile }"
