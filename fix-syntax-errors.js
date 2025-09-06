<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
}},
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

#!/usr / bin / env node;
import fs from './fs';
import path from './path';
import { glob  } from './glob';
;
// Find all TypeScript and JavaScript files;
const files = glob.sync ("src/**/*.{ts, tsx, js, jsx}", { cwd: process.cwd () });
;
let total_fixed = 0;
;
files.for_each ((file) => {
  try {
    const file_path = path.join (process.cwd (), file);
    let content = fs.readFileSync (file_path, "utf8");
    let modified = false;
;
    // Fix import statements with double punctuation (comma + semicolon);
    const original_content = content;
    content = content.replace (
      /import\s+.*?from\s+['"][^'"]+['"], \s*;/g,
      (match) => {
        modified = true;
        return match.replace (",", ";");
      },
    );
;
    // Fix import statements missing semicolons;
    content = content.replace (
      /^import\s+.*?from\s+['"][^'"]+['"]\s*, ?\s*$/gm,
      (match) => {
        // Check condition
if (.ends_with (") {
  $2
}")) {
          modified = true;
          return match.trim () + ";";

<<<<<<< HEAD
<<<<<<< HEAD
=======
#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { glob } from "glob";

// Find all TypeScript and JavaScript files
const files = glob.sync("src/**/*.{ts,tsx,js,jsx}", { cwd: process.cwd() });

let totalFixed = 0;

files.forEach((file) => {
  try {
    const filePath = path.join(process.cwd(), file);
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // Fix import statements with double punctuation (comma + semicolon);
    const originalContent = content;
    content = content.replace(
      /import\s+.*?from\s+['"][^'"]+['"],\s*;/g,
      (match) => {
        modified = true;
        return match.replace(",;", ";");
      },
    );

    // Fix import statements missing semicolons
    content = content.replace(
      /^import\s+.*?from\s+['"][^'"]+['"]\s*,?\s*$/gm,
      (match) => {;
        if (!match.trim().endsWith(";")) {
          modified = true;
          return match.trim() + ";";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        }
        return match;
      },
    );

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
;
    // Fix other common syntax issues;
    // Fix missing semicolons after variable declarations;
    content = content.replace (
      /(\w+)\s*=\s*[^;]+(?!)\s*$/gm,
      (match, var_name) => {
        // Check condition
if (&&) {
  $2
}
          !match.includes ("if") &&;
          !match.includes ("for") &&;
          !match.includes ("while") &&;
          !match.includes ("switch") &&;
          !match.includes ("try") &&;
          !match.includes ("catch") &&;
          !match.includes ("finally") &&;
          !match.includes ("return") &&;
          !match.includes ("throw") &&;
          !match.includes ("break") &&;
          !match.includes ("continue") &&;
          !match.includes ("debugger") &&;
          !match.includes ("export") &&;
          !match.includes ("import")) {

<<<<<<< HEAD
=======
    // Fix other common syntax issues
    // Fix missing semicolons after variable declarations
    content = content.replace(
      /(\w+)\s*=\s*[^;]+(?!;)\s*$/gm,
      (match, varName) => {
        if (
          !match.includes("function") &&
          !match.includes("if") &&
          !match.includes("for") &&
          !match.includes("while") &&
          !match.includes("switch") &&
          !match.includes("try") &&
          !match.includes("catch") &&
          !match.includes("finally") &&
          !match.includes("return") &&
          !match.includes("throw") &&
          !match.includes("break") &&
          !match.includes("continue") &&
          !match.includes("debugger") &&
          !match.includes("export") &&
          !match.includes("import")
        ) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          modified = true;
          return match + ";";
        }
        return match;
      },
    );

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
;
    // Check condition
if ( {) {
  $2
}
      fs.writeFileSync (file_path, content, "utf8");
      console.log (`Fixed: ${file}`);
      total_fixed++;
    }
  } catch (error) {
    console.error (`Error processing ${file}:`, error.message);

  }

});

=======
<<<<<<< HEAD
=======
    if (modified) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`Fixed: ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
});

console.log(`\nTotal files fixed: ${totalFixed}`);
=======
  }
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

}},

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}},
,
// Run all fixes,
fixFooter();
fixAccessibility();
fixAiServices();
fixApiDocs();
fixCareers();
,
console.log('🎉 Syntax error fixes completed');
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

}},

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
// Run all fixes,
fixFooter(),
fixAccessibility(),
fixAiServices(),
fixApiDocs(),
fixCareers(),
// // // console.log('🎉 Syntax error fixes completed'),
}},;
// Run all fixes,;
fixFooter(),;
fixAccessibility(),;
fixAiServices(),;
fixApiDocs(),;
fixCareers(),;
// // // console.log('🎉 Syntax error fixes completed'),;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}},
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing syntax errors in API files...');

const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax issues
    content = content.replace(/,\s*$/gm, ''); // Remove trailing commas
    content = content.replace(/,\s*}/g, '}'); // Remove trailing commas before closing braces
    content = content.replace(/,\s*]/g, ']'); // Remove trailing commas before closing brackets
    content = content.replace(/,\s*\)/g, ')'); // Remove trailing commas before closing parentheses
    
    // Fix missing semicolons
    content = content.replace(/([^;}])\n(\s*[a-zA-Z])/g, '$1;\n$2');
    
    // Fix import statements
    content = content.replace(/import\s+([^;]+),\s*;/g, 'import $1;');
    
    // Fix function declarations
    content = content.replace(/export default function\s+(\w+)\s*\([^)]*\)\s*{/g, 'export default function $1($2) {');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.log(`❌ Failed to fix: ${filePath} - ${error.message}`);
    return false;
  }
};

const main = () => {
  const apiDir = 'pages/api';
  const files = [];
  
  const walkDir = (dir) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item.endsWith('.ts') || item.endsWith('.js')) {
        files.push(fullPath);
      }
    }
  };
  
  walkDir(apiDir);
  
  let fixed = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixed++;
    }
  });
  
  console.log(`\n🎉 Fixed ${fixed}/${files.length} files`);
};

main();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
