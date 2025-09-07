<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node const fs = require("fs"); const path = require("path"); const { execSync } = require("child_process"); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,"utf8"); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {'`'"`
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node const fs = require("fs"); const path = require("path"); const { execSync } = require("child_process"); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,"utf8"); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {'`'"`
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node const fs = require("fs"); const path = require("path"); const { execSync } = require("child_process"); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,"utf8"); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {'`'"`
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {
=======


#!/usr/bin/env node/usr/bin/env node/usr/bin/env node const fs = require("fs"); const path = require("path"); const { execSync } = require("child_process"); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,"utf8"); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {'`'"`
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {

#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {

#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

import fs from 'fs';
import path from 'path';

function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove conflict markers and keep HEAD version
    content = content.replace(/\n([\s\S]*?)\n([\s\S]*?)    
    // Remove any remaining conflict markers
    content = content.replace(/\n/g, '');
    content = content.replace(/\n/g, '');
    content = content.replace(/    
    // Clean up extra whitespace
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error resolving ${filePath}:`, error.message);
    return false;
  }
}

resolveMergeConflicts();
