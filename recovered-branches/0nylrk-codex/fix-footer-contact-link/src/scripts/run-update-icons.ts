
<<<<<<< HEAD
// This is a simple script wrapper to execute our icon update script
import { exec } from 'child_process',
import path from 'path',
const scriptPath = path.join(__dirname, '../../scripts/update-icon-imports.js'),

<<<<<<< HEAD
// // // console.log('Running icon import updater...'),
=======
const scriptPath = path.join(__dirname, '../../scripts/update-icon-imports.js');

// console.log('Running icon import updater...');
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
exec(`node ${scriptPath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing script: ${error}`),
    return
  }
  
<<<<<<< HEAD
  // // // console.log(stdout),
=======
  // console.log(stdout);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  if (stderr) {
    console.error(stderr)
  }
  
<<<<<<< HEAD
  // // // console.log('Icon imports updated successfully!')
}),
=======
  // console.log('Icon imports updated successfully!');
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
// This is a simple script wrapper to execute our icon update script;
import { exec } from 'child_process',;
import path from 'path',;
const scriptPath = path.join(__dirname, '../../scripts/update-icon-imports.js'),;
// // // console.log('Running icon import updater...'),;
exec(`node ${scriptPath}`, (error, stdout, stderr) => {;
  if (error) {;
    console.error(`Error executing script: ${error}`),;
    return;
  }
;
  // // // console.log(stdout),;
  if (stderr) {;
    console.error(stderr);
  }
;
  // // // console.log('Icon imports updated successfully!');
});
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
