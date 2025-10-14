#!/usr/bin/env node

import fs from 'fs';

const filePath = '/workspace/app/page.tsx';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

let divStack = [];
let sectionStack = [];
let issues = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const lineNum = i + 1;
  
  // Check for opening div tags
  const divMatches = line.match(/<div[^>]*>/g);
  if (divMatches) {
    divMatches.forEach(() => {
      divStack.push({ line: lineNum, content: line.trim() });
    });
  }
  
  // Check for closing div tags
  const closeDivMatches = line.match(/<\/div>/g);
  if (closeDivMatches) {
    closeDivMatches.forEach(() => {
      if (divStack.length > 0) {
        divStack.pop();
      } else {
        issues.push(`Line ${lineNum}: Closing div tag without matching opening tag`);
      }
    });
  }
  
  // Check for opening section tags
  const sectionMatches = line.match(/<section[^>]*>/g);
  if (sectionMatches) {
    sectionMatches.forEach(() => {
      sectionStack.push({ line: lineNum, content: line.trim() });
    });
  }
  
  // Check for closing section tags
  const closeSectionMatches = line.match(/<\/section>/g);
  if (closeSectionMatches) {
    closeSectionMatches.forEach(() => {
      if (sectionStack.length > 0) {
        sectionStack.pop();
      } else {
        issues.push(`Line ${lineNum}: Closing section tag without matching opening tag`);
      }
    });
  }
}

console.log('Issues found:');
issues.forEach(issue => console.log(issue));

console.log('\nUnclosed div tags:');
divStack.forEach(tag => console.log(`Line ${tag.line}: ${tag.content}`));

console.log('\nUnclosed section tags:');
sectionStack.forEach(tag => console.log(`Line ${tag.line}: ${tag.content}`));