
<<<<<<< HEAD
// This is a simple script wrapper to execute our icon update script;
import { exec } from 'child_process',;
import path from 'path',;
;
const scriptPath = path.join(__dirname, '../../scripts/update-icon-imports.js'),;
;
// // // console.log('Running icon import updater...'),;
exec(`node ${scriptPath}`, (error, stdout, stderr) => {;
  if (error) {;
    console.error(`Error executing script:${error}`),;
    return,;
  }
  ;
  // // // console.log(stdout),;
  if (stderr) {;
    console.error(stderr),;
  }
  ;
  // // // console.log('Icon imports updated successfully!'),;
}),;
=======
// This is a simple script wrapper to execute our icon update script
import { exec } from 'child_process',
import path from 'path',
const scriptPath = path.join(__dirname, '../../scripts/update-icon-imports.js'),

// // // console.log('Running icon import updater...'),exec(`node ${scriptPath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing script: ${error}`),
    return
  }
  
  // // // console.log(stdout),  if (stderr) {
    console.error(stderr)
  }
  
  // // // console.log('Icon imports updated successfully!')
}),});
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
