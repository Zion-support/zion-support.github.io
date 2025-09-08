<<<<<<< HEAD
=======

>>>>>>> origin/main
import { execSync } from "child_process";

console.log("🔧 Performing selective merge of main source files...");

// List of main source directories to merge
<<<<<<< HEAD
const mainSourceDirs = [  'pages/',
=======
const mainSourceDirs = [
#!/usr / bin / env node;
import {exec_sync} from 'child_process';
;
console.log ('🔧 Performing selective merge of main source files...');
;
// List of main source directories to merge;
const mainSourceDirs = [;

  'pages/',
>>>>>>> origin/main
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
    // Try to merge only specific files;
    for (const file of mainFiles && mainFiles.slice(0, 10)) { // Limit to first 10 files to avoid conflicts;
      try {
        console && console.log(`Merging file: ${file}`);
        execSync(`git checkout origin/clean-merge-services-improvements -- "${file}`, { stdio: 'inherit });
      } catch (_error) {
        console && console.log(`Skipping ${file} due to conflicts`);


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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Filter for main source files;

      return mainSourceDirs.some (dir => file.starts_with (dir)) || ;
            mainSourceDirs.includes (file);
    });

<<<<<<< HEAD


        console.log (`Skipping ${file} due to conflicts`);

=======
    console.log(
      `Found ${mainFiles.length} main source files to potentially merge`,
    );

    // Try to cherry-pick specific commits or files
    console.log("🍒 Attempting to cherry-pick specific changes...");

    // Get the latest commit from the clean-merge-services-improvements branch
    const latestCommit = execSync(
      "git rev-parse origin/clean-merge-services-improvements",
      { encoding: "utf8" },
    ).trim();
    console.log(`Latest commit: ${latestCommit}`);

    // Try to merge only specific files
    for (const file of mainFiles.slice(0, 10)) {
      // Limit to first 10 files to avoid conflicts
      try {
        console.log(`Merging file: ${file}`);
        execSync(
          `git checkout origin/clean-merge-services-improvements -- "${file}"`,
          { stdio: "inherit" },
        );
      } catch (_error) {
        console.log (`Skipping ${file} due to conflicts`);
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }
    }

    return true;
  } catch (error) {
<<<<<<< HEAD
    console.error("Error in selective merge:", error.message);    } catch (error) {
=======
    } catch (error) {
>>>>>>> origin/main
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
};




=======
  } catch (error) {
    console.error("Error in selective merge:", error.message);
    console.error("Error in selective merge:", error.message);


>>>>>>> origin/cursor/delete-old-data-records-6bba
  if (mergeSpecificFiles()) {
    console && console.log('✅ Selective merge completed');
    // Add the merged files
    try {
      execSync("git add .", { stdio: "inherit" });
      console.log("📝 Files added to staging area");

      // Commit the changes
      execSync(
        'git commit -m "Selective merge of main source files from clean-merge-services-improvements"',
        { stdio: "inherit" },
      );
      console.log("✅ Changes committed");
    } catch (error) {
      console && console.error('Error committing changes:', error && error.message);
    }
  } else {
    console && console.log('❌ Selective merge failed');
  }
}
<<<<<<< HEAD
main();
