<<<<<<< HEAD


=======
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node const fs = require("fs"); const path = require("path"); const { execSync } = require("child_process"); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,"utf8"); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {'`'"`
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node const fs = require("fs"); const path = require("path"); const { execSync } = require("child_process"); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,"utf8"); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {'`'"`
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {
=======
<<<<<<< HEAD
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {
=======
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node const fs = require("fs"); const path = require("path"); const { execSync } = require("child_process"); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,"utf8"); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {'`'"`
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node const fs = require("fs"); const path = require("path"); const { execSync } = require("child_process"); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,"utf8"); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {'`'"`
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function resolveMergeConflicts() {
  try {
    // Get list of conflicted files
    const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(file => file.length > 0);

    console.log(`Found ${conflictedFiles.length} conflicted files`);

    // Accept our changes for all conflicted files
    for (const file of conflictedFiles) {
      try {
        execSync(`git checkout --ours "${file}"`, { stdio: 'pipe' });
        execSync(`git add "${file}"`, { stdio: 'pipe' });
        console.log(`Resolved: ${file}`);
      } catch (error) {
        console.log(`Error resolving ${file}: ${error.message}`);
      }
    }

    console.log('All merge conflicts resolved');
  } catch (error) {
    console.error('Error resolving merge conflicts:', error.message);
  }
}

resolveMergeConflicts();
<<<<<<< HEAD


>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
