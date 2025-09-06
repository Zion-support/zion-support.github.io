<<<<<<< HEAD

// This is a simple script wrapper to execute our icon update script
import { exec  } from 'child_process';
import path from 'path';

const scriptPath = path.join(__dirname, '../../scripts/update-icon-imports.js');
console.log('Running icon import updater...');
import { exec } from 'child_process',
import path from 'path',
const scriptPath = path.join(__dirname, '../../scripts/update-icon-imports.js'),

// // // console.log('Running icon import updater...'),
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
exec(`node ${scriptPath}`, (error, stdout, stderr) => {
  if (error) {
    console && console.error(`Error executing script: ${error}`);
    return
  }
<<<<<<< HEAD
  console.log(stdout);
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  if (stderr) {
    console && console.error(stderr)
  }
});

<<<<<<< HEAD
  
  // // // console.log(stdout),
  if (stderr) {
    console.error(stderr)
  }
  
<<<<<<< HEAD
  console.log('Icon imports updated successfully!')
  // // // console.log('Icon imports updated successfully!')
}),
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
// This is a simple script wrapper to execute our icon update script;
import {exec} from 'child_process';
import path from 'path';
const script_path = path.join (__dirname, '../../scripts / update - icon - imports.js');
;
console.log ('Running icon import updater...');
exec (`node ${script_path}`, (error, stdout, stderr) => {
  // Check condition
if ( {) {
  $2
}
    console.error (`Error executing script: ${error}`);
    return;
  }
  console.log (stdout);
  // Check condition
if ( {) {
  $2
}
    console.error (stderr);
  }
  console.log ('Icon imports updated successfully!');
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
});
