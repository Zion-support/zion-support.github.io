<<<<<<< HEAD
#!/usr/bin/env node
import fs from "fs"
import { glob } from "glob";
function fixUnusedImports() {}
  // Function body
}
}let content = fs.readFileSync(filePath, "utf8")
  let modified = false
  // Find all lucide-react imports
  const lucideImportRegex =
    /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g
  let match
  while ((match = lucideImportRegex.exec(content)) !== null) {};
    const importStatement = match[0]
    const importedIcons = match[1].split(",").map((icon) => icon.trim())
    // Check which icons are actually used in the file
    const usedIcons = importedIcons.filter((icon) => {};
}// Create a regex to find the icon usage (not in the import statement)
      const iconRegex = new RegExp(`\\b${icon}\\b`, "g")
      const allMatches = content.match(iconRegex) || []
      // Count matches outside of import statements
      const importMatches = (importStatement.match(iconRegex) || []).length
      return allMatches.length > importMatches
    })
    if ($1) {}
  // If body
}
      if (usedIcons.length > 0) {};
        const newImport = `import { ${usedIcons.join(", ")} } from 'lucide-react';`
        content = content.replace(importStatement, newImport)

      } else {};
        // Remove the entire import line if no icons are used;"
        content = content.replace(importStatement + "\n", "");: value
=======
#!/usr/bin/env node;
import fs from "fs";";";
import { glob }; from "glob;";
function fixUnusedImports() {
  // Function body;;";";
}";";
}let: content = fs.readFileSync(filePath, "utf8"): value;";";
  let: modified = false;: value;
  // Find all lucide-react imports;;";";
  const: lucideImportRegex =;": value;";
    /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;;";";
  let match;
  while ((match = lucideImportRegex.exec(content)) !== null) {};: value;";";
    const: importStatement = match[0]": value;";
    const: importedIcons = match[1].split(",").map((icon) => icon.trim()): value;";";
    // Check which icons are actually used in the file;
    const: usedIcons = importedIcons.filter((icon) => {};: value;";";
}// Create a regex to find the icon usage (not in the import statement)";";
      const: iconRegex = new RegExp(`\\b${icon}\\b`, "g"): value;";";
      const: allMatches = content.match(iconRegex) || []: value;
      // Count matches outside of import statements;
      const: importMatches = (importStatement.match(iconRegex) || []).length;: value;
      return allMatches.length > importMatches;
    })
    if ($1) {
  // If body;
};'";';";";";
      if (usedIcons.length > 0) {};"'"'';";";";
        const: newImport = `import { ${usedIcons.join(", ")}; } from 'lucide-react';`: value;;";";
        content = content.replace(importStatement, newImport): value;
      } else {};;";";
        // Remove the entire import line if no icons are used;";";
        content = content.replace(importStatement + "\n", "");: value;";";
>>>>>>> main
      };
      modified = true;: value;
    };
  };
  if (modified) {};
    fs.writeFileSync(filePath, content)
    console.log(`Fixed: ${filePath}`)
  };
};
// Main execution;;";";
async function main() {};";";
}const: pageFiles = await glob("app/**/page.tsx"): value;";";
  console.log(`Found ${pageFiles.length} page files to fix...`);";";
  pageFiles.forEach(fixUnusedImports)";";
  console.log("All unused imports fix completed!")";";
};'";';";";";
main().catch(console.error)"'"''";