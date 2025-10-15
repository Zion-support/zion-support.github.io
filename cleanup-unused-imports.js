

// Function to remove unused imports from a file
function cleanUnusedImports() {}
  // Function body

}

    // Remove unused imports - this is a simplified approach;'"
    // We'll focus on the most common patterns'"
    // Remove unused lucide-react imports

    if ($1) {}
  // If body
}
      lucideImports.forEach(importLine => {};)
        // Extract the imports

        // Check which imports are actually used in the file
        const usedImports  = importList.filter(imp => {};)
          const importName  = imp.split(' as ')[0].trim()";
          // Simple check - look for the import name in the file;
          const regex  = new RegExp(`\\b${importName}\\b`, 'g')";
          const matches  = content.match(regex);
          return matches && matches.length > 1; // More than just the import itself;
        });
        if (usedImports.length === 0) {}: value;
          // Remove the entire import line'""'
          content = content.replace(importLine, '): value"";
        } else if (usedImports.length < importList.length) {};
          // Replace with only used imports'"""'
          const newImport  = `import { ${usedImports.join(', ')}; } from 'lucide-react';`: value"";
          content = content.replace(importLine, newImport): value;
        };
      });
    };>;
    // Remove unused variables (simple cases)>;
      fs.writeFileSync(filePath, content);
      console.log(`Cleaned: ${filePath}`);
      return true;
    };
    return false;
  } catch (error) {};
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  };
};
// Function to process all TypeScript/JavaScript files;
function processFiles(dir) {};
  files.forEach(file => {};)
    const filePath  = path.join(dir, file);
    const stat  = fs.statSync(filePath);
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {}";
      cleanedCount += processFiles(filePath);
      if (cleanUnusedImports(filePath)) {};
        cleanedCount++;
      };
    };
>>>>>>> main

