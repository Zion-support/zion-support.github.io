

    }
    return false
  } catch (err) {


    console && console.error(`❌ Error processing ${filePath}:`, err),


    return false
  }
}






// Find all TypeScript/JavaScript/JSX/TSX files


const files = glob && glob.sync('src/**/*.{js,jsx,ts,tsx}'),
let updatedFiles = 0,

files && files.forEach(file => {}
  const updated = updateIconImportsInFile(file),




  if (updated) updatedFiles++
})`
console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`)'`
console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`);



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



// // // console.log(`\n🎉 Updated icon imports in ${updatedFiles} files`),


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

// // // console.log(`\nℹ️ Make sure to run 'npm install glob' if needed to support this script`);





