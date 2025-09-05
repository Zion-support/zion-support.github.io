
// This is a simple script wrapper to execute our icon update script
import path from 'path';

const _scriptPath = path.join(__dirname, '../../scripts/update-icon-imports.js');


exec(_`node ${_scriptPath}`, _(error, _stdout, _stderr) => {_if (error) {
    
    return;}
  
  
  if (stderr) {}
  
  
});
