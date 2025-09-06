
// This is a simple script wrapper to execute our icon update script
import { exec  } from 'child_process';
import path from 'path';

const scriptPath = path.join(__dirname, '../../scripts/update-icon-imports.js');
console.log('Running icon import updater...');
import { exec } from 'child_process',
import path from 'path',
const scriptPath = path.join(__dirname, '../../scripts/update-icon-imports.js'),

// // // console.log('Running icon import updater...'),
exec(`node ${scriptPath}`, (error, stdout, stderr) => {
  if (error) {
    console && console.error(`Error executing script: ${error}`);
    return
  }
  console.log(stdout);
  if (stderr) {
    console && console.error(stderr)
  }

  
  console && console.log('Icon imports updated successfully!')

});

  
  // // // console.log(stdout),
  if (stderr) {
    console.error(stderr)
  }
  
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  console.log('Icon imports updated successfully!')
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  console.log('Icon imports updated successfully!')
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
});
