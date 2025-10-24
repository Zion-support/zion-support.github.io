
const fs = require('fs''
const path = require('path''
    let content = fs.readFileSync(filePath, 'utf8''
    content = content.replace(/"icon": ([A-Z][a-zA-Z0-9]+),/g, ''
    content = content.replace(/"icon": ([A-Z][a-zA-Z0-9]+)/g, ''