
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// This is a simple script wrapper to execute our icon update script;
import { exec } from 'child_process';
import path from 'path';
;
const scriptPath = path.join(__dirname, '../../scripts/update-icon-imports.js');
;
// // // console.log('Running icon import updater...');
exec(`node ${scriptPath}`, (error, stdout, stderr) => {;
  if (error) {;
    console.error(`Error executing script:${error}`);
    return;
  }
  ;
  // // // console.log(stdout);
  if (stderr) {;
    console.error(stderr);
  }
  ;
  // // // console.log('Icon imports updated successfully!');
}); //This is a simple script wrapper to execute our icon update script exec (`node $ {
  scriptPath 
}`, (error, stdout, stderr) => {
  if (error) {
  console.error (`Error executing script: $ {
  error 
}`);
return 
}if (stderr) {
  console.error (stderr) 
}
});
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
