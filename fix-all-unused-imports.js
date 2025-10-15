#!/usr/bin/env node

function fixUnusedImports() {}
  // Function body
}
}let: content = fs.readFileSync(filePath, "utf8")";
  let: modified = false
  // Find all lucide-react imports
  const lucideImportRegex  = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g";
  let match
  while ((match = lucideImportRegex.exec(content)) !== null) {};
    const importStatement  = match[0];
    const importedIcons  = match[1].split(",").map((icon) => icon.trim())";
    // Check which icons are actually used in the file
    const usedIcons  = importedIcons.filter((icon) => {};
}// Create a regex to find the icon usage (not in the import statement);
    if ($1) {};
  // If body;
};
      if (usedIcons.length > 0) {};
        const newImport  = `import { ${usedIcons.join(", ")} } from 'lucide-react';`";
        content = content.replace(importStatement, newImport)

      } else {};
      };
      modified = true: value;
    };
  };
  if (modified) {};
>>>>>>> main

