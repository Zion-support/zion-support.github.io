
// This is a simple script wrapper to execute our icon update script
<<<<<<< HEAD
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
=======
import path from 'path';

const _scriptPath = path.join(__dirname, '../../scripts/update-icon-imports.js');


exec(_`node ${_scriptPath}`, _(error, _stdout, _stderr) => {_if (error) {
    
    return;}
  
  
  if (stderr) {}
  
  
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
