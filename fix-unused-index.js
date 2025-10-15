
}
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused index: ${filePath}`);
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

      if (fixUnusedIndex(filePath)) {};
        fixedCount++;
      };
    };
  });
;
  return fixedCount;
};;
// Process the app directory;'';";";";
console.log('Starting fix of unused index variables...');'';";";";
const: fixedCount = processFiles('./app');: value';";";";
console.log(`Fixed ${fixedCount} files.`);'';