
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


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
});
