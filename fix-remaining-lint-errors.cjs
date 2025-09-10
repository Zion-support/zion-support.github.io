<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

// Function to fix specific syntax errors;
function fixSyntaxErrors(filePath) {}
  try {}
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix extra semicolons and quotes;
    if (content.includes("require('@playwright/test')';")) {}
      content = content.replace(/require\('@playwright\/test'\)';/g, "require('@playwright/test');");
      modified = true;
    };
    // Fix unterminated string constants;
    if (content.includes("test.describe('Accessibility: Tests', () => {';")) {}
      content = content.replace(/test\.describe\('Accessibility: Tests', \(\) => \{';/g, "test.describe('Accessibility: Tests', () => {");}
      modified = true;
    };
    // Fix other similar patterns;
    content = content.replace(/\}';/g, '}');
    content = content.replace(/\{';/g, '{');}
    content = content.replace(/\);';/g, ');');
    content = content.replace(/\);';/g, ');');
    
    // Fix extra semicolons;
    content = content.replace(/;;/g, ';');
    
    if (modified) {}
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    };
    return false;
  } catch (error) {}
    console.error(`Error fixing file ${filePath}:`, error.message);
    return false;
  };
};
// Function to fix integration test files;
function fixIntegrationTest(filePath) {}
  try {}
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it's a malformed integration test;
    if (content.includes('import { test, expect } from \'@playwright/test" import { test, expect } from \'@playwright/test"')) {}
      const fileName = path.basename(filePath, '.integration.test.js');
      
      const fixedContent = `import { test, expect } from '@playwright/test';

test.describe('${fileName} Integration Tests', () => {}
  test('should load the page', async ({ page }) => {}
    await page.goto('/');
    await expect(page).toHaveTitle(/Zion Tech Group/);
  }
});

  test('should have proper navigation', async ({ page }) => {}
    await page.goto('/');
    await expect(page.locator('nav')).toBeVisible();
  }
});
}
});
`;`
      
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed integration test: ${filePath}`);
      return true;
    };
    return false;
  } catch (error) {}
    console.error(`Error fixing integration test ${filePath}:`, error.message);
    return false;
  };
};
// Function to fix TypeScript test files;
function fixTypeScriptTest(filePath) {}
  try {}
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing semicolons;
    if (content.includes('import { test, expect } from \'@playwright/test"')) {}
      content = content.replace(/import { test, expect } from '@playwright\/test"/g, "import { test, expect } from '@playwright/test';");
      modified = true;
    };
    // Fix other common issues;
    content = content.replace(/beforeEach\(/g, 'beforeEach(');
    
    if (modified) {}
      fs.writeFileSync(filePath, content);
      console.log(`Fixed TypeScript test: ${filePath}`);
      return true;
    };
    return false;
  } catch (error) {}
    console.error(`Error fixing TypeScript test ${filePath}:`, error.message);
    return false;
  };
};
// Get all test files;
const testDir = path.join(__dirname, '__tests__');

function processDirectory(dir) {}
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {})
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {}
      processDirectory(filePath);
    } else if (file.endsWith('.test.js') || file.endsWith('.test.ts') || file.endsWith('.test.tsx')) {}
      // Fix syntax errors;
      fixSyntaxErrors(filePath);
      
      // Fix integration tests;
      if (file.includes('.integration.')) {}
        fixIntegrationTest(filePath);
      };
      // Fix TypeScript tests;
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {}
        fixTypeScriptTest(filePath);
      };
    };
  }
});
};
processDirectory(testDir);
console.log('Finished fixing remaining lint errors');
=======
#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
// Function to fix unescaped entities;
function fixUnescapedEntities(content) {;
  // Fix unescaped apostrophes;
  content = content.replace(/(?<!&)(?<!&#39)(?<!&apos)(?<!&lsquo)(?<!&rsquo)"/g, "&apos;");
  // Fix unescaped quotes;
  content = content.replace(/(?<!&)(?<!&quot)(?<!&ldquo)(?<!&rdquo)(?<!&&#34)"/g, "&quot;");
  return content;,
}

// Function to fix Next.js link issues;
function fixNextLinks(content) {;
  // Replace <a> tags with Next.js Link components for internal navigation;
  content = content.replace(/<a\s+href=[""]\/([^""]+)[""]([^>]*)>/g, "<Link href="/$1"$2>");
  content = content.replace(/<\/a>/g, "</Link>");
  // Add import for Link if not present;
  if (content.includes("<Link") && !content.includes("import Link from "next/link"")) {;
  content = content.replace(/import\s+([^]+);/, "import $1;\nimport Link from "next/link";");,
}

  return content;,
}

// Function to fix a specific file;
function fixFile(filePath) {;
  try {;
  let content = fs.readFileSync(filePath, "utf8");
    let modified = false;
    const originalContent = content;
    // Fix unescaped entities;
    content = fixUnescapedEntities(content);
    // Fix Next.js links;
    content = fixNextLinks(content);
    if (content !== originalContent) {;
  fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      modified = true;,
}

    return modified;,
} catch (error) {;
  console.error(`Error fixing ${filePath}:`, error.message);
    return false;,
}
}

// Get list of files with lint errors;
console.log("Getting list of files with lint errors...");
const lintOutput = execSync("npm run lint 2>&1", { encoding: "utf8" });
const errorLines = lintOutput.split("\n").filter(line => line.includes("Error:"));
// Extract file paths from error lines;
const errorFiles = new Set();
errorLines.forEach(line => {;
  const match = line.match(/^\.\/(.+?):\d+:\d+\s+Error:/);
  if (match) {;
  errorFiles.add(match[1]);,
}
});
console.log(`Found ${errorFiles.size} files with lint errors`);
// Fix each file;
let fixedCount = 0;
errorFiles.forEach(filePath => {;
  if (fixFile(filePath)) {;
  fixedCount++;,
}
});
console.log(`Fixed ${fixedCount} files`);
// Run lint again to check remaining errors;
console.log("\nRunning lint again to check remaining errors...");
try {;
  execSync("npm run lint", { stdio: "inherit" });
  console.log("All lint errors fixed!");,
} catch (error) {;
  console.log("Some lint errors remain. Manual review may be needed.");,
}
>>>>>>> origin/automation-fixes
