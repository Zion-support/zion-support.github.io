// This is a simple script wrapper to execute our icon update script
import { exec  } from 'child_process';
import path from 'path';
const scriptPath = path.join($2);
console.log($2);
exec(`node ${scriptPath}`, (error, stdout, stderr) => {
  if (error) {
    console.error($2);
    return
  }
  
  console.log($2);
  if (stderr) {
    console.error(stderr)
  }
  
  console.log('Icon imports updated successfully!')
}),
