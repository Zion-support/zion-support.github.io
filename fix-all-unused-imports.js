
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