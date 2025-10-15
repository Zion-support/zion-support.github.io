#!/usr/bin/env node

import fs from "fs";
import { glob } from "glob";

// Common unused imports that need to be removed
const unusedImports = [
  "Cloud",
  "Code",
  "Monitor",
  "BarChart",
  "Star",
  "Settings",
  "Users",
  "DollarSign",
  "TrendingUp",
  "Shield",
  "Target",
  "Mail",
  "Phone",
  "Clock",
  "PieChart",
  "Activity",
  "Award",
  "BookOpen",
  "Briefcase",
  "Building",
  "Calendar",
  "Camera",
  "Command",
  "CreditCard",
  "FileText",
  "Gift",
  "Heart",
  "Home",
  "Image",
  "Laptop",
  "Lock",
  "MessageCircle",
  "Palette",
  "Play",
  "Search",
  "ShoppingCart",
  "Smartphone",
  "Tablet",
  "Terminal",
  "Truck",
  "Wifi",
  "Cpu",
  "Database",
  "Server",
  "Layers",
];

function fixUnusedImports(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let modified = false;

  // Fix 'use client' directive placement
  if (
    content.includes("'use client';") &&
    !content.startsWith("'use client';")
  ) {
    content = content.replace(/'use client';\s*\n/, "");
    content = "'use client';\n" + content;
    modified = true;
  }

  // Remove unused imports
  const lucideImportMatch = content.match(
    /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/,
  );

  if (lucideImportMatch) {
    const existingIcons = lucideImportMatch[1].split(",").map((i) => i.trim());
    const usedIcons = existingIcons.filter((icon) => {
      // Check if the icon is actually used in the file
      const iconRegex = new RegExp(`\\b${icon}\\b`, "g");
      const matches = content.match(iconRegex);
      return matches && matches.length > 1; // More than just the import
    });

    if (usedIcons.length !== existingIcons.length) {
      if (usedIcons.length > 0) {
        content = content.replace(
          lucideImportMatch[0],
          `import { ${usedIcons.join(", ")} } from 'lucide-react';`,
        );
      } else {
        content = content.replace(lucideImportMatch[0] + "\n", "");
      }
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
}

// Main execution
async function main() {
  const pageFiles = await glob("app/**/page.tsx");
  console.log(`Found ${pageFiles.length} page files to fix...`);

  pageFiles.forEach(fixUnusedImports);
  console.log("Unused imports fix completed!");
}

main().catch(console.error);
