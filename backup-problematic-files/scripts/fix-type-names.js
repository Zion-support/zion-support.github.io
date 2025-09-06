
#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import {glob} from 'glob';
// Fix malformed type names
const typeFixes = [{ "pattern": /strin\s+g/g, "replacement": 'string' },
  { "pattern": /numbe\s+r/g, "replacement": 'number' },
  { "pattern": /boolea\s+n/g, "replacement": 'boolean' },
  { "pattern": /ClassValu\s+e/g, "replacement": 'ClassValue' },
  { "pattern": /EmergingTechService202\s+7/g, "replacement": 'EmergingTechService2027' },
  { "pattern": /EMERGING_TECH_SERVICES_202\s+7/g, "replacement": 'EMERGING_TECH_SERVICES_2027' }
];
function fixFile(filePath) {
  try {
    const content = fs && fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    let hasChanges = false;
    typeFixes && typeFixes.forEach(fix => {
      const newContent = fixedContent && fixedContent.replace(fix && fix.pattern, fix && fix.replacement);
      if (newContent !== fixedContent) {
        fixedContent = newContent;
        hasChanges = true}
    });
    if (hasChanges) {
      fs && fs.writeFileSync(filePath, fixedContent, 'utf8');
      console && console.log(`Fixed types "in": ${filePath}`);
      return true}
    return false} catch (error) {
    console && console.error(`Error fixing ${filePath}:`, error && error.message);
    return false}

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
async function main() {
  const patterns = ['src/**/*.tsx',
    'src/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts',
    'pages/**/*.tsx',
    'pages/**/*.ts'
  ];
  let totalFixed = 0;

