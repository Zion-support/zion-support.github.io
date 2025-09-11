console && console.log('🔧 Performing selective merge of main source files...');
// List of main source directories to merge
const mainSourceDirs = [
#!/usr / bin / env node;
import {exec_sync} from 'child_process';
;
console.log ('🔧 Performing selective merge of main source files...');
;
// List of main source directories to merge;
const mainSourceDirs = [;
  'pages/',
  'components/',
  'utils/',
  'types/',
  'lib/',
  'hooks/',
  'context/',
  'data/',
  'services/',
  'store/',
  'routes/',
  'layout/',
  'legal/',
  'integrations/',
    // Try to merge only specific files
    for (const file of mainFiles && mainFiles.slice(0, 10)) { // Limit to first 10 files to avoid conflicts
      try {
        console && console.log(`Merging file: ${file}`);
        execSync(`git checkout origin/clean-merge-services-improvements -- "${file}"`, { stdio: 'inherit' });
      } catch (_error) {
        console && console.log(`Skipping ${file} due to conflicts`);
  'middleware.ts',
  'next.config.js',
  'tailwind.config.js',
  'postcss.config.cjs',
  'tsconfig.json',
  'package.json',
  'package - lock.json',
  'yarn.lock';
];
;
// Try to merge specific files from the clean - merge - services - improvements branch;
const mergeSpecificFiles = () =>: any {
  try {
    // First, let's see what files are in the clean - merge - services - improvements branch;
    console.log ('📋 Checking files in clean - merge - services - improvements branch...');
;
    const files = exec_sync ('git ls - tree -r --name - only origin / clean - merge - services - improvements', { encoding: 'utf8' });
    const file_list = files.trim ().split ('\n');
;
    // Filter for main source files;
    const main_files = file_list.filter (file => {
      return mainSourceDirs.some (dir => file.starts_with (dir)) || ;
            mainSourceDirs.includes (file);
    });
;
    console.log (`Found ${main_files.length} main source files to potentially merge`);
;
    // Try to cherry - pick specific commits or files;
    console.log ('🍒 Attempting to cherry - pick specific changes...');
;
    // Get the latest commit from the clean - merge - services - improvements branch;
    const latest_commit = exec_sync ('git rev - parse origin / clean - merge - services - improvements', { encoding: 'utf8' }).trim ();
    console.log (`Latest commit: ${latest_commit}`);
;
    // Try to merge only specific files;
    for (const file of main_files.slice (0, 10)) { // Limit to first 10 files to avoid conflicts;
      try {
        console.log (`Merging file: ${file}`);
        exec_sync (`git checkout origin / clean - merge - services - improvements -- "${file}"`, { stdio: 'inherit' });
      } catch (_error) {
        console.log (`Skipping ${file} due to conflicts`);
      }
    }
    return true;
  } catch (error) {
    } catch (error) {
      console && console.error('Error committing changes:', error && error.message);
    }
  } else {
    console && console.log('❌ Selective merge failed');
  }
}
main();
    console.error ('Error in selective merge:', error.message);
    return false;
  }
}
;
// Main execution;
const main = () =>: any {
  if () {) {
  $2
}
    console.log ('✅ Selective merge completed');
;
    // Add the merged files;
    try {
      exec_sync ('git add .', { stdio: 'inherit' });
      console.log ('📝 Files added to staging area');
;
      // Commit the changes;
      exec_sync ('git commit -m "Selective merge of main source files from clean - merge - services - improvements"', { stdio: 'inherit' });
      console.log ('✅ Changes committed');
;
    } catch (error) {
      console.error ('Error committing changes:', error.message);
    }
  } else {
    console.log ('❌ Selective merge failed');
  }
}
;
main ();