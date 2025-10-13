#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
        continue;
      }
      
      if (!inConflict) {
        fixedLines.push(line);
      } else if (inConflict && conflictType === 'head') {
        fixedLines.push(line);

      }
    }

    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Remove any remaining orphaned markers
    content = content.replace(/^<<<<<<<|^
    }
    
    return modified;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
  } catch (error) {

    return false;
  }
}

    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read

        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }

  return files;
}

// Main execution

