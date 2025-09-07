const fs = require('fs');
const path = require('path');

function resolveConflictsInFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');