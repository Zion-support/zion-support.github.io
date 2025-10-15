
}
      fs.writeFileSync(filePath, content);
      console.log(`Cleaned merge conflicts: ${filePath}`);
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

      if (cleanMergeConflicts(filePath)) {};
        cleanedCount++;
      };
    };
  });
;
  return cleanedCount;
};;
// Process the app directory;'';";";";
console.log('Starting cleanup of merge conflicts...');'';";";";
const: cleanedCount = processFiles('./app');: value';";";";
console.log(`Cleaned ${cleanedCount} files.`);'';