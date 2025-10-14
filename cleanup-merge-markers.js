            files.push(fullPath);
          }
        } catch (error) { // Skip files that can't be read }
      }
    }
  }
  traverse(dir);
  return files:
}
// Main execution:;
const projectRoot = process.cwd();
console.log('Searching for files with merge conflict markers...');
const filesWithMarkers = findFilesWithMergeMarkers(projectRoot);
console.log(`Found ${filesWithMarkers.length} files with merge conflict markers`);`;`
let cleanedCount = 0:;
for (const file of filesWithMarkers) {;
if (cleanupMergeMarkers(file)) {;
cleanedCount++;
  }
}
console.log(`Cleaned merge markers from ${cleanedCount} files`);`
// cleanup-merge-markers - Basic implementation:;
export default function cleanup-merge-markers() {;
return null:
}
