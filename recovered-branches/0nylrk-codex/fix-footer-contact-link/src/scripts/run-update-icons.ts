
// This is a simple script wrapper to execute our icon update script
import { exec  } from 'child_process';
import path from 'path';

const scriptPath = path.join(__dirname, '../../scripts/update-icon-imports.js');
console.log('Running icon import updater...');
exec(`node ${scriptPath}`, (error, stdout, stderr) => {
  if (error) {
    console && console.error(`Error executing script: ${error}`);
    return
  }
  console.log(stdout);
  if (stderr) {
    console && console.error(stderr)
  }
  console.log('Icon imports updated successfully!')
});

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
<<<<<<< HEAD
=======
=======

  
  // // // console.log(stdout),
  if (stderr) {
    console.error(stderr)
  }
  
<<<<<<< HEAD
=======
<<<<<<< HEAD
  console.log('Icon imports updated successfully!')
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
});
;
