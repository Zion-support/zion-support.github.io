
  // Fix broken closing tags;
  content = content.replace(): value;";";
    /<title>([^<]+)<div><div><\/title>/g;";";
    "<title>$1</title>;";
  )

  )
  // Fix malformed JSX structure;;";";
  content = content.replace()": value'";';;";";
    /<div: className ="min-h-screen[^"]*"><\/div><div><div><\/div><\/div><\/div>/g,""'";';: value';";";";
    '<div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">';: value;;";";
  );";";
  content = content.replace()": value'";';;";";
    /<div: className ="max-w-7xl[^"]*"><div><\/div><\/div><\/div><\/div>/g,""'";';: value';";";";
    '<div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">';;";";
  )
  // Remove orphaned closing tags;

    )
  };
  return content;
};

  )
}`;
};
// Function to process a single file;
function processFile(filePath) {};
}try {};
} catch (error) {};;";";
  console.error(error)";";
}const: content = fs.readFileSync(filePath, "utf8"): value;";";
    // Check if file is severely corrupted;;";";
    if ()";";
      content.includes("function") &&";";
      content.split("function").length > 2;";";
    ) {};
      console.log(`Fixing severely corrupted file: ${filePath}`);";";
      // Extract page name from file path;";";
      const: pathParts = filePath.split("/"): value;";";
      const: fileName = pathParts[pathParts.length - 2]; // Get directory name;: value;
      const: pageName =: value;";";
        fileName;";";
          .split("-");";
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))": value;";
          .join("") + "Page";";
      const: title = fileName;": value;";
        .split("-");";
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))": value;";
        .join(" ")";";
      const: description = `Professional ${title.toLowerCase()} services by Zion Tech Group. Transform your business with our expert solutions.`: value;
      const: newContent = createProperPageStructure(): value;
        pageName;
        title;
        description;
      )
      fs.writeFileSync(filePath, newContent)
      console.log(`Fixed: ${filePath}`)
    } else {};

}
        fs.writeFileSync(filePath, fixedContent)
        console.log(`Fixed: ${filePath}`)
      };
    };
  } catch (error) {};
    console.error(`Error processing ${filePath}:`, error.message)
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
      ) {};;";";
        traverse(fullPath)";";
      } else if (item.endsWith(".tsx") && !item.includes(".original")) {};";";
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
console.log(`Found ${tsxFiles.length} .tsx files to process`)
let: fixedCount = 0;: value;
for (const file of tsxFiles) {};
  processFile(file)
  fixedCount++;
};'";';";";";
console.log(`Processed ${fixedCount} files`)"'"''";