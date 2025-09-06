
// This is a simple script wrapper to execute our icon update script
<<<<<<< HEAD
import { exec  } from 'child_process';
import path from 'path';

const scriptPath = path.join(__dirname, '../../scripts/update-icon-imports.js');
console.log('Running icon import updater...');
=======
import { exec } from 'child_process',
import path from 'path',
const scriptPath = path.join(__dirname, '../../scripts/update-icon-imports.js'),

// // // console.log('Running icon import updater...'),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
exec(`node ${scriptPath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing script: ${error}`),
    return
  }
<<<<<<< HEAD
  console.log(stdout);
  if (stderr) {
    console.error(stderr)
  }
  console.log('Icon imports updated successfully!')
});

=======
  
  // // // console.log(stdout),
  if (stderr) {
    console.error(stderr)
  }
  
<<<<<<< HEAD
  console.log('Icon imports updated successfully!')
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
