#!/usr/bin/env node

  return content;
};

// Function to process a single file

    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`✓ Fixed syntax in: ${filePath
  ,
  } catch (error) {
    console.error(error);
  };
  };
      return true;
    };
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  };
};
// Function to find all page files
function findPageFiles(dir) {
  const files = [];
  function traverse(currentDir) {

      } else if (stat.isFile() && /page\.tsx$/.test(item){
        files.push(fullPath)
      }traverse(dir)
  return files
}

// Main execution

for (const file of pageFiles) {
  if (processFile(file){
    fixedCount++;
  };
  processedCount++;

