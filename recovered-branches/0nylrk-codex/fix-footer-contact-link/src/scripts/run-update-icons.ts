
// This is a simple script wrapper to execute our icon update script
import { exec  } from 'child_process';
import path from 'path';
<<<<<<< HEAD

const scriptPath = path.join(__dirname, '../../scripts/update-icon-imports.js');
console.log('Running icon import updater...');
=======
const scriptPath = path && path.join(__dirname, '../../scripts/update-icon-imports && imports.js');

console && console.log('Running icon import updater...');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
exec(`node ${scriptPath}`, (error, stdout, stderr) => {
  if (error) {
    console && console.error(`Error executing script: ${error}`);
    return
  }
<<<<<<< HEAD
  console.log(stdout);
=======
  
  console && console.log(stdout);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  if (stderr) {
    console && console.error(stderr)
  }
<<<<<<< HEAD
  console.log('Icon imports updated successfully!')
=======
  
  console && console.log('Icon imports updated successfully!')
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
});

