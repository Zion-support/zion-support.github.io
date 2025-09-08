


    const importCommaRegex = /import\s*\{([^}]+)\}\s*from\s*['"][^'"]+['"];?/g;

    // Fix missing commas in import statements;





        .filter((item) => item.trim());
        .join(", ");
      return match.replace(imports, fixedImports);
    });
    // Fix object property syntax errors (semicolon instead of comma)



      modified = true;
    }
    return modified;
  } catch (error) {



          ].includes(item)
        ) {
          continue;
        }
        traverse(fullPath);


        }
      }
    }
  }



for (const file of files) {
  if (fixImportSyntax(file)) {
    fixedCount++;
    console.log(`Fixed syntax in: ${file}`);
  }



