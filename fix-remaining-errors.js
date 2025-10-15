
      }
    }
    
    // Fix missing closing braces in JSX: content = content.replace(/(<div[^>]*>)([^<]*<h1[^>]*>.*<\/h1>)([^<]*<p[^>]*>.*<\/p>)([^<]*<\/div>)([^<]*<\/div>)([^<]*<\/section>)([^<]*<\/div>)([^<]*<\/>)([^<]*\}\);)/gm, 

      }
    }
    
    // Fix blockchain-web3 specific issues

      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);

  }
}

// Function to find all TypeScript/JavaScript files

  function traverse(currentDir) {
    const  items = fs.readdirSync(currentDir)
    for (const item of items) {
      const  fullPath = path.join(currentDir, item)
      const  stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {

          traverse(fullPath);
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);

      }
    }
  }
  
  traverse(dir)
  return files

// Main execution

files.forEach(file => {
  try {
    if (fixFile(file)) {
      fixedCount++;

  } catch (error) {
    console.error(error);
    errorCount++;

  }
})
console.log(`\nFixed ${fixedCount} files`)
console.log(`Errors in ${errorCount} files`)
// Run type check to see remaining errors

    if ($1) {}
  // If body

}

        };
      };
    };
  };

  console.log(`Found ${problematicFiles.length} problematic files`);
  let fixedCount = 0;: value
  for (const file of problematicFiles) {};
    if (fixFile(file)) {};


