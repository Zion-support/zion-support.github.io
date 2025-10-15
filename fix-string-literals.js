
}
      fs.writeFileSync(filePath, content);
      console.log(`Fixed string literals: ${filePath}`);
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

      if (fixStringLiterals(filePath)) {};
        fixedCount++;
      };
    };
  });
;
  return fixedCount;
};;
// Process the app directory;'';";";";
console.log('Starting fix of string literal syntax errors...');'';";";";
const: fixedCount = processFiles('./app');: value';;";
console.log(`Fixed ${fixedCount} files.`);"'"''";