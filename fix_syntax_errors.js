const fs = require('fs''
const path = require('path''
  fixed = fixed.replace(/export const "metadata": Metadata = {}\n\s*"title": /g, 'export const "metadata": Metadata = {\n  title:'',
  fixed = fixed.replace(/const features = \[\]\n\s*\{\}\n\s*,/g, 'const features = [\n    {''
  fixed = fixed.replace(/import \{\}\n\s*ArrowRight,/g, 'import {\n  ArrowRight,''
  fixed = fixed.replace(/= \{\}\n\s*"title": /g, '= {\n  "title": '',
  fixed = fixed.replace(/= \{\}\n\s*"icon": /g, '= {\n  "icon": '',
  fixed = fixed.replace(/= \[\]\n\s*\{\}\n\s*"icon": /g, '= [\n    {\n      "icon": '',
  fixed = fixed.replace(/= \[\]\n\s*\{\}/g, '= [\n    {''
    return match.replace('import {}', 'import {''
  fixed = fixed.replace(/export const "metadata": Metadata = \{\n\s*title:/g, 'export const "metadata": Metadata = {\n  title:'',
  fixed = fixed.replace(/const \w+: React\.FC = \(\) => \{\}\n\s*const/g, 'const $"1": React.FC = () => {\n  const'',}
    const content = fs.readFileSync(filePath, 'utf8''
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules''
    } else if (item.endsWith('.tsx') || item.endsWith('.jsx''
console.log('Fixing syntax errors...''
processDirectory('/workspace/app''
processDirectory('/workspace/src'';
console.log('Syntax error fixing complete!''