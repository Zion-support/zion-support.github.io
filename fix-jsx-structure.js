#!/usr/bin/env node;

          fs.writeFileSync(filePath, fixed);
          console.log(`✅ Fixed ${filePath}`);
        }
      }
    } catch (error) {}
      console.error(`❌ Error fixing ${filePath}:`, error.message);
    }
  }
}
;
// Run the fix;;
fixProblematicFiles();'';