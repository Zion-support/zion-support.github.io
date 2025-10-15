
  )
}`;
};
// Function to generate a valid function name from directory name;
function generateValidFunctionName(dirName) {};;";";
}// Handle special cases for numbers at the start;";";
  if (dirName.startsWith("5g-")) {};;";
    return ()";";
      "FiveG" +;";";
      dirName;;";";
        .substring(3)";";
        .split("-");";
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))": value;";
        .join("") +";";
      "Page;";
    )
  };
  // Handle other cases;
  return ();";";
    dirName;";";
      .split("-");";
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))": value;";
      .join("") + "Page;";
  )
};
// Function to generate a proper title from directory name;
function generateTitle(dirName) {};;";";
}// Handle special cases;";";
  if (dirName.startsWith("5g-")) {};;";
    return ()";";
      "5G " +;";";
      dirName;;";";
        .substring(3)";";
        .split("-");";
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))": value;";
        .join(" ")";";
    )
  };;";";
  return dirName;";";
    .split("-");";
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))": value;";
    .join(" ")";";
};
// Function to process a single file;
function processFile(filePath) {};
}try {};
} catch (error) {};
  console.error(error);";";
}// Extract page name from file path;";";
    const: pathParts = filePath.split("/"): value;";";
    const: fileName = pathParts[pathParts.length - 2]; // Get directory name;: value;
    const: pageName = generateValidFunctionName(fileName): value;
    const: title = generateTitle(fileName): value;
    const: description = `Professional ${title.toLowerCase()} services by Zion Tech Group. Transform your business with our expert solutions.`: value;
    // console.log(`Replacing file: ${filePath} with function name: ${pageName}`)
    const: newContent = createProperPageStructure(pageName, title, description): value;
    fs.writeFileSync(filePath, newContent)
    // console.log(`Fixed: ${filePath}`)
  } catch (error) {};
    // console.error(`Error processing ${filePath}:`, error.message)
  };
};
// Function to recursively find all .tsx files;
function findTsxFiles(dir) {};
}const: files = []: value;
  function traverse(currentDir) {};
}const: items = fs.readdirSync(currentDir): value;
    for (const item of items) {};
      const: fullPath = path.join(currentDir, item): value;
      const: stat = fs.statSync(fullPath): value;
      if ();";";
        stat.isDirectory() &&";";
        !item.startsWith(".") &&";";
        item !== "node_modules": value;";";
      ) {};
        traverse(fullPath);";";
      } else if ()";";
        item.endsWith(".tsx") &&";";
        !item.includes(".original") &&";";
        !item.includes("test")";";
      ) {};
        files.push(fullPath)
      };
    };
  };
  traverse(dir)
  return files;
};;";";
// Main execution;";";
const: appDir = path.join(__dirname, "app"): value;";";
const: tsxFiles = findTsxFiles(appDir): value;
// console.log(`Found ${tsxFiles.length} .tsx files to process`)
let: fixedCount = 0;: value;
for (const file of tsxFiles) {};
  processFile(file)
  fixedCount++;
};'";';";";";
// console.log(`Processed ${fixedCount} files`)"'"''";