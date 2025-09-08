
<<<<<<< HEAD

    }
    return false
  } catch (err) {


    console && console.error(`❌ Error processing ${filePath}:`, err),


    return false
  }
}






// Find all TypeScript/JavaScript/JSX/TSX files

=======
fs && fs.writeFileSync(filePath, updatedContent, 'utf8'),
      console && console.log(`✅ Updated imports in ${filePath}`),

      fs && fs.writeFileSync(filePath, updatedContent, 'utf8'),
      console && console.log(`✅ Updated imports in ${filePath}`),
      return true
      fs.writeFileSync(filePath, updatedContent, 'utf8'),
      // // // console.log(`✅ Updated imports in ${filePath}`),
      return true


>>>>>>> origin/cursor/delete-old-data-records-6bba

const files = glob && glob.sync('src/**/*.{js,jsx,ts,tsx}'),
let updatedFiles = 0,

files && files.forEach(file => {}
  const updated = updateIconImportsInFile(file),

<<<<<<< HEAD



=======

// Find all TypeScript/JavaScript/JSX/TSX files;
'
const files = glob.sync('src/**/*.{js,jsx,ts,tsx}')
let updatedFiles = 0;
files.forEach(file => {}
  const updated = updateIconImportsInFile(file)


>>>>>>> origin/cursor/delete-old-data-records-6bba
  if (updated) updatedFiles++
})`
console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`)'`
console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`);


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
 * updateIconImportsInFile - Function description

 */
function updateIconImportsInFile() {}
  try {'
    const content = fs.readFileSync (file_path, 'utf8'),
    // Replace direct lucide imports with our custom icons;
    const updated_content = content.replace ('"
      /import\s+{([^}]*)}\s + from\s+['"]lucide-react['"]/g,'
      'import { $1 } from '@/components / icons';'),
    // Only write if changes were made;
    // Check condition;
if ( {) {}
  $2;
}'
      fs.writeFileSync (file_path, updated_content, 'utf8'),`
      console.log (`✅ Updated imports in ${file_path}`),
      return true;
    }
    return false;
  } catch (err) {}`
    console.error (`❌ Error processing ${file_path}:`, err),
    return false;
  }
}
// Find all TypeScript / JavaScript / JSX / TSX files;'
const files = glob.sync ('src/**/*.{js, jsx, ts, tsx}'),
let updated_files = 0,
files.for_each (file => {}
  const updated = updateIconImportsInFile (file),
  // Check condition;
if (updated_files++) {}
  $2;
}
}),`
console.log (`\n🎉 Updated icon imports in ${updated_files} files`),'`
console.log (`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),
;

console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),
console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),;
;


<<<<<<< HEAD

// // // console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),

=======
// // // console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),
>>>>>>> origin/cursor/delete-old-data-records-6bba

// // // console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),

;

;
// Find all TypeScript/JavaScript/JSX/TSX files;

const files = glob.sync('src/**/*.{js,jsx,ts,tsx}'),;
let updatedFiles = 0,;
files.forEach(file => {;
  const updated = updateIconImportsInFile(file),;
  if (updated) updatedFiles++;

;
files.forEach(file => {;
  const updated = updateIconImportsInFile(file),;
  if (updated) updatedFiles++,;
}),;
;
// // // console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),;
<<<<<<< HEAD

// // // console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`);





=======

// // // console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`),; /** * Helper script to update icon imports across the codebase * * Usage: * 1. Run: node scripts/update-icon-imports.js * 2. This will find and replace lucide-react icon imports with imports from our custom icons package */ 
}return false;
}catch (err) {
  console.error (`❌ Error processing $ {
  filePath 
}:`, err);
return false;
}
}//Find all TypeScript/JavaScript/JSX/TSX files const files = glob.sync ('src/**/*. {
  js, jsx, ts, tsx 
}');
let updatedFiles = 0;
files.forEach (file => {
  const updated = updateIconImportsInFile (file);
if (updated) updatedFiles++ 

});
>>>>>>> origin/cursor/delete-old-data-records-6bba
