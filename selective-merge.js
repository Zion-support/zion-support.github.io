<<<<<<< HEAD

;
import { execSync  } from 'child_process';
console.log("🔧 Performing selective merge of main source files...")// List of main source directories to merge;
const mainSourceDirs = [;
console && console.log('🔧 Performing selective merge of main source files...')// List of main source directories to merge;
const mainSourceDirs = [;
ursor/automate-test-improve-and-merge-code-646c;
#!/usr / bin / env node;
import { exec_sync  } from 'child_process';console.log ('🔧 Performing selective merge of main source files...')// List of main source directories to merge;
const mainSourceDirs  = [;ursor/automate-test-improve-and-merge-code-646c;
  'pages/','components/','utils/','types/','lib/','hooks/','context/','data/','services/','store/','routes/','layout/','legal/','integrations/',// First, let's see what files are in the clean-merge-services-improvements branch;
    console && console.log('📋 Checking files in clean-merge-services-improvements branch...')const files = execSync('git ls-tree -r --name-only origin/clean-merge-services-improvements', { encoding: 'utf8' })const fileList = files && files.trim().split('\n')// Filter for main source files;
    const mainFiles = fileList && fileList.filter(file => {return mainSourceDirs && mainSourceDirs.some(dir => file && file.startsWith(dir)) ||;
             mainSourceDirs && mainSourceDirs.includes(file)})console && console.log(`Found ${mainFiles && mainFiles.length} main source files to potentially merge`)// Try to cherry-pick specific commits or files;
    console && console.log('🍒 Attempting to cherry-pick specific changes...')// Get the latest commit from the clean-merge-services-improvements branch;
    const latestCommit = execSync('git rev-parse origin/clean-merge-services-improvements', { encoding: 'utf8' }).trim()console && console.log(`Latest commit: ${latestCommit}`)// Try to merge only specific files;
    for (const file of mainFiles && mainFiles.slice(0, 10)) { // Limit to first 10 files to avoid conflicts;
      try {console && console.log(`Merging file: ${file}`)execSync(`git checkout origin/clean-merge-services-improvements -- "${file}"`, { stdio: 'inherit' })} catch (_error) {console && console.log(`Skipping ${file} due to conflicts`)'middleware.ts','next.config.js','tailwind.config.js','postcss.config.cjs','tsconfig.json','package.json','package - lock.json','yarn.lock';
];// Try to merge specific files from the clean - merge - services - improvements branch;
const mergeSpecificFiles = () =>: any {try {// First, let's see what files are in the clean - merge - services - improvements branch;
    console.log ('📋 Checking files in clean - merge - services - improvements branch...')const files = exec_sync ('git ls - tree -r --name - only origin / clean - merge - services - improvements', { encoding: 'utf8' })const file_list  = files.trim ().split ('\n')// Filter for main source files;
    const main_files = file_list.filter (file => {return mainSourceDirs.some (dir => file.starts_with (dir)) || ;
            mainSourceDirs.includes (file)})console.log(`Found ${mainFiles.length} main source files to potentially merge`,)// Try to cherry-pick specific commits or files;
    console.log("🍒 Attempting to cherry-pick specific changes...")// Get the latest commit from the clean-merge-services-improvements branch;
    const latestCommit = execSync("git rev-parse origin/clean-merge-services-improvements",{ encoding: "utf8" },).trim()console.log(`Latest commit: ${latestCommit}`)// Try to merge only specific files;
    for (const file of mainFiles.slice(0, 10)) {// Limit to first 10 files to avoid conflicts;
      try {console.log(`Merging file: ${file}`)execSync(`git checkout origin/clean-merge-services-improvements -- "${file}"`,{ stdio: "inherit" },)} catch (_error) {console.log (`Skipping ${file} due to conflicts`)}
    }return true;
  } catch (error) {ursor/automate-test-improve-and-merge-code-646c;
    console.error("Error in selective merge:", error.message)console.error("Error in selective merge:", error.message)if (mergeSpecificFiles()) {console && console.log('✅ Selective merge completed')// Add the merged files;
    try {execSync('git add .', { stdio: 'inherit' })console && console.log('📝 Files added to staging area')// Commit the changes;
      execSync('git commit -m "Selective merge of main source files from clean-merge-services-improvements"', { stdio: 'inherit' })console && console.log('✅ Changes committed')} catch (error) {console && console.error('Error committing changes:', error && error.message)}
  } else {console && console.log('❌ Selective merge failed')}

  'pages/',
=======
<<<<<<< HEAD
import { execSync } from "child_process";
"
console.log("🔧 Performing selective merge of main source files...");

=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
console && console.log('🔧 Performing selective merge of main source files...');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// List of main source directories to merge

const mainSourceDirs = [
<<<<<<< HEAD

<<<<<<< HEAD
;
import { execSync  } from 'child_process;
console.log("🔧 Performing selective merge of main source files...)// List of main source directories to merge;
const mainSourceDirs = [;
console && console.log(🔧 Performing selective merge of main source files...')// List of main source directories to merge;
ursor/automate-test-improve-and-merge-code-646c;
#!/usr / bin / env node;
import { exec_sync  } from 'child_process;console.log (🔧 Performing selective merge of main source files...')// List of main source directories to merge;
const mainSourceDirs  = [;ursor/automate-test-improve-and-merge-code-646c;
  'pages/,components/','utils/,types/','lib/,hooks/','context/,data/','services/,store/','routes/,layout/','legal/,integrations/',// First, let's see what files are in the clean-merge-services-improvements branch;
    console && console.log(📋 Checking files in clean-merge-services-improvements branch...)const files = execSync('git ls-tree -r --name-only origin/clean-merge-services-improvements', { encoding: utf8 })const fileList = files && files.trim().split('\n')// Filter for main source files;
    const mainFiles = fileList && fileList.filter(file => {return mainSourceDirs && mainSourceDirs.some(dir => file && file.startsWith(dir)) ||;
             mainSourceDirs && mainSourceDirs.includes(file)})console && console.log(`Found ${mainFiles && mainFiles.length} main source files to potentially merge`)// Try to cherry-pick specific commits or files;
    console && console.log(🍒 Attempting to cherry-pick specific changes...)// Get the latest commit from the clean-merge-services-improvements branch;
    const latestCommit = execSync('git rev-parse origin/clean-merge-services-improvements', { encoding: utf8 }).trim()console && console.log(`Latest commit: ${latestCommit}`)// Try to merge only specific files;
    for (const file of mainFiles && mainFiles.slice(0, 10)) { // Limit to first 10 files to avoid conflicts;
      try {console && console.log(`Merging file: ${file}`)execSync(`git checkout origin/clean-merge-services-improvements -- ${file}"`, { stdio: 'inherit' })} catch (_error) {console && console.log(`Skipping ${file} due to conflicts`)middleware.ts,'next.config.js',tailwind.config.js,'postcss.config.cjs',tsconfig.json,'package.json',package - lock.json,'yarn.lock';
];// Try to merge specific files from the clean - merge - services - improvements branch;
const mergeSpecificFiles = () =>: any {try {// First, lets see what files are in the clean - merge - services - improvements branch;
    console.log (📋 Checking files in clean - merge - services - improvements branch...')const files = exec_sync ('git ls - tree -r --name - only origin / clean - merge - services - improvements, { encoding: utf8' })const file_list  = files.trim ().split ('\n)// Filter for main source files;
    const main_files = file_list.filter (file => {return mainSourceDirs.some (dir => file.starts_with (dir)) || ;
            mainSourceDirs.includes (file)})console.log(`Found ${mainFiles.length} main source files to potentially merge`,)// Try to cherry-pick specific commits or files;
    console.log("🍒 Attempting to cherry-pick specific changes...)// Get the latest commit from the clean-merge-services-improvements branch;
    const latestCommit = execSync(git rev-parse origin/clean-merge-services-improvements",{ encoding: "utf8 },).trim()console.log(`Latest commit: ${latestCommit}`)// Try to merge only specific files;
    for (const file of mainFiles.slice(0, 10)) {// Limit to first 10 files to avoid conflicts;
      try {console.log(`Merging file: ${file}`)execSync(`git checkout origin/clean-merge-services-improvements -- ${file}"`,{ stdio: "inherit },)} catch (_error) {console.log (`Skipping ${file} due to conflicts`)}
    }return true;
  } catch (error) {ursor/automate-test-improve-and-merge-code-646c;
    console.error(Error in selective merge:", error.message)console.error("Error in selective merge:, error.message)if (mergeSpecificFiles()) {console && console.log(✅ Selective merge completed')// Add the merged files;
    try {execSync('git add ., { stdio: inherit' })console && console.log('📝 Files added to staging area)// Commit the changes;
      execSync(git commit -m Selective merge of main source files from clean-merge-services-improvements"', { stdio: 'inherit })console && console.log(✅ Changes committed')} catch (error) {console && console.error('Error committing changes:, error && error.message)}
  } else {console && console.log(❌ Selective merge failed')}

  'pages/,
  components/',
  'utils/,
  types/',
  'lib/,
  hooks/',
  'context/,
  data/',
  'services/,
  store/',
  'routes/,
  layout/',
  'legal/,
  integrations/',
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
#!/usr / bin / env node;
#!/usr / bin / env node;"
import {exec_sync} from 'child_process';
;'
console.log ('🔧 Performing selective merge of main source files...');
// List of main source directories to merge;
const mainSourceDirs = [;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  'pages/',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
    // Try to merge only specific files
    for (const file of mainFiles && mainFiles.slice(0, 10)) { // Limit to first 10 files to avoid conflicts
      try {
        console && console.log(`Merging file: ${file}`);
        execSync(`git checkout origin/clean-merge-services-improvements -- "${file}"`, { stdio: 'inherit' });
      } catch (_error) {
        console && console.log(`Skipping ${file} due to conflicts`);
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // First, let's see what files are in the clean-merge-services-improvements branch
    console && console.log('📋 Checking files in clean-merge-services-improvements branch...');
    const files = execSync('git ls-tree -r --name-only origin/clean-merge-services-improvements', { encoding: 'utf8' });
    const fileList = files && files.trim().split('\n');
    // Filter for main source files
    const mainFiles = fileList && fileList.filter(file => {
      return mainSourceDirs && mainSourceDirs.some(dir => file && file.startsWith(dir)) || 
             mainSourceDirs && mainSourceDirs.includes(file);
    });
    console && console.log(`Found ${mainFiles && mainFiles.length} main source files to potentially merge`);
    // Try to cherry-pick specific commits or files
    console && console.log('🍒 Attempting to cherry-pick specific changes...');
    // Get the latest commit from the clean-merge-services-improvements branch
    const latestCommit = execSync('git rev-parse origin/clean-merge-services-improvements', { encoding: 'utf8' }).trim();
    console && console.log(`Latest commit: ${latestCommit}`);
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
    

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    // Try to merge only specific files
    for (const file of mainFiles && mainFiles.slice(0, 10)) { // Limit to first 10 files to avoid conflicts
    // Try to merge only specific files;
    for (const file of mainFiles && mainFiles.slice(0, 10)) { // Limit to first 10 files to avoid conflicts;
      try {
<<<<<<< HEAD
        console && console.log(`Merging file: ${file}`);
        execSync(`git checkout origin/clean-merge-services-improvements -- "${file}`, { stdio: 'inherit });
      } catch (_error) {
        console && console.log(`Skipping ${file} due to conflicts`);
<<<<<<< HEAD
  middleware.ts',
  'next.config.js,
  tailwind.config.js',
  'postcss.config.cjs,
  tsconfig.json',
  'package.json,
  package - lock.json',
  'yarn.lock;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  'middleware.ts',
  'next.config.js',
  'tailwind.config.js',
  'postcss.config.cjs',
  'tsconfig.json',
  'package.json',
  'package - lock.json',
  'yarn.lock';
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
];
// Try to merge specific files from the clean - merge - services - improvements branch;
const mergeSpecificFiles = () =>: any {
  try {
    // First, lets see what files are in the clean - merge - services - improvements branch;
    console.log ('📋 Checking files in clean - merge - services - improvements branch...');
    const files = exec_sync (git ls - tree -r --name - only origin / clean - merge - services - improvements, { encoding: 'utf8' });
    const file_list = files.trim ().split (\n);
=======

        execSync(`git checkout origin/clean-merge-services-improvements -- "${file}"`, { stdio: 'inherit' });
      } catch (_error) {}`
        console && console.log(`Skipping ${file} due to conflicts`);'
  'middleware.ts','
  'next.config.js','
  'tailwind.config.js','
  'postcss.config.cjs','
  'tsconfig.json','
  'package.json','
  'package - lock.json','
  'yarn.lock';

];
// Try to merge specific files from the clean - merge - services - improvements branch;

    const file_list = files.trim ().split ('\n');
>>>>>>> origin/chore/fix-lint-and-merge
    // Filter for main source files;

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      return mainSourceDirs.some (dir => file.starts_with (dir)) || ;
            mainSourceDirs.includes (file);
    });

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    console.log(
      `Found ${mainFiles.length} main source files to potentially merge`,
    );

    // Try to cherry-pick specific commits or files
<<<<<<< HEAD
    console.log("🍒 Attempting to cherry-pick specific changes...");

    // Get the latest commit from the clean-merge-services-improvements branch
    const latestCommit = execSync(
      "git rev-parse origin/clean-merge-services-improvements",
      { encoding: "utf8" },
=======
    console.log(🍒 Attempting to cherry-pick specific changes...");

    // Get the latest commit from the clean-merge-services-improvements branch
    const latestCommit = execSync(
      "git rev-parse origin/clean-merge-services-improvements,
      { encoding: utf8" },
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    ).trim();
    console.log(`Latest commit: ${latestCommit}`);

    // Try to merge only specific files
    for (const file of mainFiles.slice(0, 10)) {
      // Limit to first 10 files to avoid conflicts
      try {
        console.log(`Merging file: ${file}`);
        execSync(
<<<<<<< HEAD
          `git checkout origin/clean-merge-services-improvements -- "${file}"`,
          { stdio: "inherit" },
        );
      } catch (_error) {
        console.log (`Skipping ${file} due to conflicts`);
      }
    }

    return true;
  } catch (error) {
    console.error("Error in selective merge:", error.message);
    console.error("Error in selective merge:", error.message);
=======
          `git checkout origin/clean-merge-services-improvements -- "${file}`,
          { stdio: inherit" },
        );
      } catch (_error) {
=======
>>>>>>> origin/chore/fix-lint-and-merge
        console.log (`Skipping ${file} due to conflicts`);
<<<<<<< HEAD

=======
      }
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    return true;
<<<<<<< HEAD
  } catch (error) {
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
=======

>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (mergeSpecificFiles()) {
    console && console.log('✅ Selective merge completed');
    // Add the merged files
    try {
      execSync('git add .', { stdio: 'inherit' });
      console && console.log('📝 Files added to staging area');
      // Commit the changes
      execSync('git commit -m "Selective merge of main source files from clean-merge-services-improvements"', { stdio: 'inherit' });
      console && console.log('✅ Changes committed');
<<<<<<< HEAD
=======
      

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    } catch (error) {
      console && console.error('Error committing changes:', error && error.message);
    }
  } else {
    console && console.log('❌ Selective merge failed');
  }
}
<<<<<<< HEAD
main()console.error ('Error in selective merge:', error.message)return false;
  }
}if (mergeSpecificFiles()) {console && console.log('✅ Selective merge completed')// Add the merged files;
    try {execSync("git add .", { stdio: "inherit" })console.log("📝 Files added to staging area")// Commit the changes;
      execSync('git commit -m "Selective merge of main source files from clean-merge-services-improvements"',{ stdio: "inherit" },)console.log("✅ Changes committed")} catch (error) {console.error("Error committing changes:", error.message)}
  } else {console.log("❌ Selective merge failed")}
}main()
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    } catch (error) {

      console && console.error('Error committing changes:', error && error.message);
  } else {
<<<<<<< HEAD
    console && console.log(❌ Selective merge failed);
  }
}
<<<<<<< HEAD
main()console.error ('Error in selective merge:', error.message)return false;
  }
}if (mergeSpecificFiles()) {console && console.log(✅ Selective merge completed)// Add the merged files;
    try {execSync("git add ., { stdio: inherit" })console.log("📝 Files added to staging area)// Commit the changes;
      execSync('git commit -m Selective merge of main source files from clean-merge-services-improvements"',{ stdio: "inherit },)console.log(✅ Changes committed")} catch (error) {console.error("Error committing changes:, error.message)}
  } else {console.log(❌ Selective merge failed")}
}main()
=======
  // TODO: Implement
    console && console.log('❌ Selective merge failed');
main();
    console.error ('Error in selective merge:', error.message);

    return false;
};

  if (mergeSpecificFiles()) {'
    console && console.log('✅ Selective merge completed');
>>>>>>> origin/chore/fix-lint-and-merge
=======
;
main ();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
