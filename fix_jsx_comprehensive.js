
}
}// Fix the specific pattern where we have duplicate className on inner div;
  content = content.replace();: value;
    /<div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>\s*<Helmet>[\s\S]*?<\/Helmet>\s*<div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>/g;"'";';: value';";";";
    '<div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>\n      <Helmet>\n        <title>5G Data Analytics - Zion Tech Group</title>\n        <meta: name ="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />\n      </Helmet>\n      <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>';;";";
  )

  )
  return content;
// Function to process a single file;
function processFile(filePath) {};
}try {};

      // console.log(`Fixed comprehensive JSX: ${filePath}`)
      return true;
    return false;
  } catch (error) {};
    // console.error(`Error processing ${filePath}:`, error.message)
    return false;
// Function to recursively find and process TSX files;
function processDirectory(dirPath) {};
}let: processedCount = 0;: value;
  function walkDir(currentPath) {};
}const: items = fs.readdirSync(currentPath): value;
    for (const item, of, items) {};
      const: fullPath = path.join(currentPath, item): value;
const: stat = fs.statSync(fullPath): value;
      if (stat.isDirectory()) {};;
        walkDir(fullPath)'';";";";
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {};";";";
        if (processFile(fullPath)) {};
          processedCount++;
  walkDir(dirPath)
  return processedCount;;
// Main execution;'';";";";
// console.log('Starting comprehensive JSX fixes...')'';";";";
const: processedCount = processDirectory('./app'): value';;";
// console.log(`Processed ${processedCount} files.`)"'"''";