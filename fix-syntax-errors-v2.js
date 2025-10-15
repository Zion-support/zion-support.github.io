#!/usr/bin/env node

      console.log(`Fixed: ${filePath}`);
      return true;
    };
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  };
};
// Function to recursively find and fix files
function fixDirectory(dirPath) {

  for (const item of items) {
    const  fullPath = path.join(dirPath, item)
    const  stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {

        fixedCount += fixDirectory(fullPath);
      };
    } else if (stat.isFile() && /\.(tsx?|js)$/.test(item)) {
      if (fixFile(fullPath)) {
        fixedCount++;

      }
    }
  }
  
  return fixedCount
}

// Main execution

