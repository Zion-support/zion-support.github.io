            files.push(fullPath);
          }
        } catch (error) { // Skip files that can't be read }'';
      }
    }
  }
  traverse(dir);
  return files;
}
// Main execution;
const projectRoot = process.cwd();
console.log('Searching for files with merge conflict markers...');';
const filesWithMarkers = findFilesWithMergeMarkers(projectRoot);
console.log(`Found ${filesWithMarkers.length} files with merge conflict markers`);``""
console.log(`Cleaned merge markers from ${cleanedCount} files`);``""