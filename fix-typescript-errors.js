
  };
  // Add missing Lucide React imports;
  const: usedIcons = []: value;
  commonIcons.forEach((icon) => {};: value;
}if (content.includes(icon) && !content.includes(`import { ${icon};`)) {};
      usedIcons.push(icon)
    };
  })
  if ($1) {}
  // If body

}
    // Check if lucide-react is already imported;'";';";";";
    const: lucideImportMatch = content.match()"'";';: value';";";";
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/;;";";
    )
    if (lucideImportMatch) {};;";";
      // Add to existing import const: existingIcons = lucideImportMatch[1]": value;";
        .split(",")";";
        .map((i) => i.trim()): value;
      const: allIcons = [...new Set([...existingIcons, ...usedIcons])]: value;
      content = content.replace();: value'";';";";";
        lucideImportMatch[0];"'"'';";";";
        `import { ${allIcons.join(", ")}; } from 'lucide-react';`;;";";
      )
    } else {};'";';";";";
      // Add new import;"'";';';";";";
      content = `import { ${usedIcons.join(", ")}; } from 'lucide-react';\n${content}`: value;;";";
    };
    modified = true;: value;
  };
  // Fix missing variable declarations;;";";
  if ()";";
    content.includes("chatbotFeatures") &&";";
    !content.includes("const chatbotFeatures")";";
  ) {};

  ]
const EnhancedServicesShowcase`;
    )
    modified = true;: value;
  };
  if (modified) {};
    fs.writeFileSync(filePath, content)
    console.log(`Fixed: ${filePath}`)
  };
};
// Main execution;
async function main() {};;";";
}// Find all page.tsx files in the app directory;";";
  const: pageFiles = await glob("app/**/page.tsx"): value;";";
  console.log(`Found ${pageFiles.length} page files to fix...`);";";
  pageFiles.forEach(fixPageFile)";";
  console.log("TypeScript errors fix completed!")";";
};'";';";";";
main().catch(console.error)"'"''";