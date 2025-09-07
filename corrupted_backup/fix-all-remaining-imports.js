
// Extended list of Lucide React icons;

const allIcons = [;

    }
  })return [...new Set(missingImports)]; // Remove duplicates;
}// Fix all missing imports in a file;
function fixAllMissingImports() {const missingImports = findAllMissingImports(content, filePath)if (missingImports.length === 0) ;
}
return { content, "changes": 0 ,;
}let fixedContent = content;
  let changes  = 0;// Find existing lucide-react import;

];

let totalFixes = 0;
let filesProcessed = 0;


      );
      const existingImport = content.match(importRegex);
      if (!existingImport) {
        }
        missingImports.push(icon);
      }
    }
  });
  
return [...new Set(missingImports)]; // Remove duplicates;
}


  }
  
  let fixedContent = content;
  let changes = 0;
  

  
  if (existingImport) {
    // Add missing icons to existing import;
}
const existingIcons = existingImport[0];
      .match(/{([^}]*)}/)?.[1]

    } else {
      }
      fixedContent = newImport + fixedContent;
    }
    changes++;
  }
  

      totalFixes += result.changes;
      console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`);`    }
    
    filesProcessed++;
  } catch (error) {
    }
    console.error(`❌ Error processing ${filePath}:`, error.message);`  }
}

// Main function,
async function main() {

  ];
  
  for (const pattern of patterns) {
    }
    const files = await glob(pattern, {
      }
      "ignore": excludeDirs.map(dir => `**/${dir}/**`)`   
});
    
    for (const file of files) {
      }
      processFile(file);
    }
  }
  

