<<<<<<< HEAD
import React from 'react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// Get all page files;
const srcDir = "path.join(__dirname, 'src');"
const pageFiles="[];"
=======
import React from react;

import fs from fs;

import path from path;

import { fileURLToPath } from url;

// Get all page files;

const srcDir = path.join(__dirname, src);;

const pageFiles = [];;

>>>>>>> origin/main
;

function findPageFiles(dir) {/* TODO: Fix JSX expression */}

    } else if (file === 'page.tsx' || file === 'page.ts) {/* TODO: Fix JSX expression */}

    }

findPageFiles(srcDir);

;
<<<<<<< HEAD
function cleanUnusedImports(filePath) {}
  try {;
let content = "fs.readFileSync(filePath, 'utf8');"
    let modified="false;"
    // Fix lucide-react imports;
    const lucideImportMatch = "content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);"
    if (lucideImportMatch) {;
const imports = lucideImportMatch[1].split(',').map(imp = "> imp.trim());"
      const usedImports="[];"
      // Check which imports are actually used in the file;
      imports.forEach(imp = "> {}"
return (
);
const cleanImp = "imp.replace(/\s*as\s+\w+/, '').trim();"
        if (content.includes(`<${cleanImp}`) || content.includes(`${cleanImp}.`) || content.includes(`${cleanImp}(`)) {}
=======

function cleanUnusedImports(filePath) {
  try {;

let content = fs.readFileSync(filePath, utf8);;

    let modified = false;;

    // Fix lucide-react imports;

    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['];?/);;

    if (lucideImportMatch) {;

const imports = lucideImportMatch[1].split(,).map(imp => imp.trim());;

      const usedImports = [];;

      // Check which imports are actually used in the file;

      imports.forEach(imp => {
  return (

);

const cleanImp = imp.replace(/\s*as\s+\w+/, ).trim();;

        if (content.includes(`<${cleanImp}`) || content.includes(`${cleanImp}.`) || content.includes(`${cleanImp}()) {
>>>>>>> origin/main
          usedImports.push(imp)});
      if (usedImports.length !== imports.length) {;
<<<<<<< HEAD
const newImport="usedImports.length>"
=======

const newImport = usedImports.length >;;

>>>>>>> origin/main
);

} 0;

function cleanUnusedImports(filePath) {/* TODO: Fix JSX expression */}
<<<<<<< HEAD
    const lucideImportMatch = "content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);"
=======

    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['];?/);;

>>>>>>> origin/main
    if (lucideImportMatch) {/* TODO: Fix JSX expression */}

        if (content.includes(`<${cleanImp}`) || content.includes(`${cleanImp}.`) || content.includes(`${cleanImp}()) {/* TODO: Fix JSX expression */}

      });
<<<<<<< HEAD
      if (usedImports.length !== imports.length) {/* TODO: Fix JSX expression */}`
          ? `import { ${usedImports.join(', ')} } from 'lucide-react';`
          : '';
        content = "content.replace(lucideImportMatch[0], newImport);"
        modified="true;"
    // Remove unused component imports;
    const componentImports = "['Navigation', 'Footer', 'SEOOptimizer'];"
    componentImports.forEach(comp = "> {);"
const importRegex = "new RegExp(`import\\s+${comp}\\s+from\\s+['"][^'"]+['"];?\\s*`, 'g');"
      if (importRegex.test(content) && !content.includes(`<${comp}`) && !content.includes(`${comp}.`)) {}
        content = "content.replace(importRegex, '');"
    // Remove unused variable declarations that are assigned but never used;
    const lines="content.split('\n');"
    const newLines="[];"
    for (let i = "0; i < lines.length; i++) {;"
const line="lines[i];"
=======

      if (usedImports.length !== imports.length) {/* TODO: Fix JSX expression */}

          ? `import { ${usedImports.join(', ')} } from 'lucide-react';

          : ;

        content = content.replace(lucideImportMatch[0], newImport);

        modified = true;

    // Remove unused component imports;

    const componentImports = ['Navigation', 'Footer', SEOOptimizer];;

    componentImports.forEach(comp => {);

const importRegex = new RegExp(`import\\s+${comp}\\s+from\\s+['"][^'"]+['"];?\\s*`, g);;

      if (importRegex.test(content) && !content.includes(`<${comp}`) && !content.includes(`${comp}.)) {
        content = content.replace(importRegex, );

    // Remove unused variable declarations that are assigned but never used;

    const lines = content.split(\n);;

    const newLines = [];;

    for (let i = 0; i < lines.length; i++) {;;

const line = lines[i];;

>>>>>>> origin/main
      // Check for unused variable declarations;

      const varMatch = line.match(/const\s+(\w+)\s*=\s*React\.FC.*?;/);;

      if (varMatch) {;
<<<<<<< HEAD
const varName="varMatch[1];"
        const isUsed = content.includes(varName) && content.indexOf(varName) !== content.lastIndexOf(varName);
        if (!isUsed) {}
=======

const varName = varMatch[1];;

        const isUsed = content.includes(varName) && content.indexOf(varName) !== content.lastIndexOf(varName);;

        if (!isUsed) {
>>>>>>> origin/main
          continue; // Skip this line;

      newLines.push(line);
<<<<<<< HEAD
    if (newLines.length !== lines.length) {}
      content="newLines.join('\n');"
    if (modified) {}
      fs.writeFileSync(filePath, content);
      // console.log removed for production;
}`)} catch (error) {}
    // console.error removed for production;
// Process all page files;
pageFiles.forEach(file = "> {)"
  cleanUnusedImports(file);
    componentImports.forEach(comp = "> {/* TODO: Fix JSX expression */}")`;"
const importRegex = "new RegExp(`import\\s+${comp}\\s+from\\s+['"][^'"]+['"];?\\s*`, 'g');`"
      if (importRegex.test(content) && !content.includes(`<${comp}`) && !content.includes(`${comp}.`)) {/* TODO: Fix JSX expression */}`
  d: ${path.relative(__dirname, filePath)}`)} catch (error) {/* TODO: Fix JSX expression */}`
    // console.error removed for production;
// Process all page files;
pageFiles.forEach(file = "> {/* TODO: Fix JSX expression */})`"
// console.log removed for production;
const trimmedLine="line.trim();"
      // Check if this is an import line;
      if (trimmedLine.startsWith('import ')) {}
        // Extract the imported names from the import line;
        const importMatch = "trimmedLine.match(/import\s*{([^}]+)}\s*from/);"
        if (importMatch) {;
const imports = importMatch[1].split(',').map(imp = "> imp.trim());"
          const usedImports = imports.filter(imp = "> {);"
const name = "imp.split(' as ')[0].trim();"
            // Check if the name is used in the content (excluding the import line itself);
const contentWithoutImport = "content.replace(line, '');"
            return contentWithoutImport.includes(name) && 
                   !contentWithoutImport.includes(`import ${name}`) &&
                   !contentWithoutImport.includes(`{ ${name}`) &&
                   !contentWithoutImport.includes(`{${name}`);
          if (usedImports.length === 0) {}
            // No used imports, remove the entire line;
            continue} else if (usedImports.length < imports.length) {}
            // Some imports are unused, keep only the used ones;
            const newImportLine = "line.replace(importMatch[1], usedImports.join(', '));"
            newLines.push(newImportLine)} else {}
            // All imports are used, keep the line;
          // For default imports, check if they're used;
          const defaultImportMatch = "trimmedLine.match(/import\s+(\w+)\s+from/);"
          if (defaultImportMatch) {;
const name="defaultImportMatch[1];"
            if (contentWithoutImport.includes(name) && 
                !contentWithoutImport.includes(`import ${name}`)) {}
            // If not used, skip the line (don't add it)
            // Other import types, keep them;
    const newContent="newLines.join('\n');"
    if (newContent !== content) {}
      fs.writeFileSync(filePath, newContent, 'utf8');
      // console.log removed for production;
if (trimmedLine.startsWith('import ')) {/* TODO: Fix JSX expression */}
        const importMatch = "trimmedLine.match(/import\s*{([^}]+)}\s*from/);"
        if (importMatch) {/* TODO: Fix JSX expression */}`
                   !contentWithoutImport.includes(`import ${name}`) &&`
                   !contentWithoutImport.includes(`{ ${name}`) &&`
                   !contentWithoutImport.includes(`{${name}`);
=======

    if (newLines.length !== lines.length) {
      content = newLines.join(\n);

    if (modified) {
      fs.writeFileSync(filePath, content);

      // console.log removed for production
})} catch (error) {
    // console.error removed for production
// Process all page files;

pageFiles.forEach(file => {)
  cleanUnusedImports(file);

    componentImports.forEach(comp => {/* TODO: Fix JSX expression */}");

const importRegex = new RegExp(`import\\s+${comp}\\s+from\\s+['"][^'"]+['"];?\\s*`, 'g');;;

      if (importRegex.test(content) && !content.includes(`<${comp}`) && !content.includes(`${comp}.`)) {/* TODO: Fix JSX expression */}

  d: ${path.relative(__dirname, filePath)}`)} catch (error) {/* TODO: Fix JSX expression */}

    // console.error removed for production
// Process all page files;

pageFiles.forEach(file => {/* TODO: Fix JSX expression */})
// console.log removed for production
const trimmedLine = line.trim();;

      // Check if this is an import line;

      if (trimmedLine.startsWith('import )) {
        // Extract the imported names from the import line;

        const importMatch = trimmedLine.match(/import\s*{([^}]+)}\s*from/);;

        if (importMatch) {;

const imports = importMatch[1].split(,).map(imp => imp.trim());;

          const usedImports = imports.filter(imp => {);;

const name = imp.split( as )[0].trim();;

            // Check if the name is used in the content (excluding the import line itself);

const contentWithoutImport = content.replace(line, );;

            return contentWithoutImport.includes(name) && 
                   !contentWithoutImport.includes(`import ${name}) &&
                   !contentWithoutImport.includes(`{ ${name}) &&
                   !contentWithoutImport.includes(`{${name});

          if (usedImports.length === 0) {
            // No used imports, remove the entire line;

            continue} else if (usedImports.length < imports.length) {
            // Some imports are unused, keep only the used ones;

            const newImportLine = line.replace(importMatch[1], usedImports.join(, ));;

            newLines.push(newImportLine)} else {
            // All imports are used, keep the line;

          // For default imports, check if theyre used;

          const defaultImportMatch = trimmedLine.match(/import\s+(\w+)\s+from/);;

          if (defaultImportMatch) {;

const name = defaultImportMatch[1];;

            if (contentWithoutImport.includes(name) && 
                !contentWithoutImport.includes(`import ${name})) {
            // If not used, skip the line (dont add it)
            // Other import types, keep them;

    const newContent = newLines.join(\n);;

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, utf8);

      // console.log removed for production
if (trimmedLine.startsWith('import )) {/* TODO: Fix JSX expression */}

        const importMatch = trimmedLine.match(/import\s*{([^}]+)}\s*from/);;

        if (importMatch) {/* TODO: Fix JSX expression */}

                   !contentWithoutImport.includes(`import ${name}`) &&
                   !contentWithoutImport.includes(`{ ${name}`) &&
                   !contentWithoutImport.includes(`{${name});

>>>>>>> origin/main
          if (usedImports.length === 0) {/* TODO: Fix JSX expression */}

          } else if (usedImports.length < imports.length) {/* TODO: Fix JSX expression */}

          } else {/* TODO: Fix JSX expression */}

                !contentWithoutImport.includes(`import ${name}`)) {/* TODO: Fix JSX expression */}

  in: ${filePath});

      return true;
<<<<<<< HEAD
=======

>>>>>>> origin/main
  return false;
// Get all TypeScript/JavaScript files in src directory;
<<<<<<< HEAD
function getAllFiles(dir, extensions = "['.ts', '.tsx', '.js', '.jsx']) {;"
let results="[];"
  const list="fs.readdirSync(dir);"
  list.forEach(file = "> {)"
=======

function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', .jsx]) {;

let results = [];;

  const list = fs.readdirSync(dir);;

  list.forEach(file => {)
>>>>>>> origin/main
    )
    if (stat && stat.isDirectory()) {}
      // Skip node_modules and other common directories;
<<<<<<< HEAD
      if (!['node_modules', '.git', 'dist', '.next', 'out', 'build'].includes(file)) {}
        results = "results.concat(getAllFiles(filePath, extensions));"
      const ext="path.extname(file);"
      if (extensions.includes(ext)) {}
        results.push(filePath);
=======

      if (!['node_modules', '.git', 'dist', '.next', 'out', 'build].includes(file)) {
        results = results.concat(getAllFiles(filePath, extensions));

      const ext = path.extname(file);;

      if (extensions.includes(ext)) {
        results.push(filePath);

>>>>>>> origin/main
  return results;
// Main execution;
<<<<<<< HEAD
// console.log removed for production;
;
const files = "getAllFiles('./src', ['.ts', '.tsx', '.js', '.jsx']);"
;
let fixedCount="0;"
files.forEach(file = "> {)"
  if (removeUnusedImportsFromFile(file)) {}
=======

// console.log removed for production
;

const files = getAllFiles('./src', ['.ts', '.tsx', '.js', .jsx]);;

;

let fixedCount = 0;;

files.forEach(file => {)
  if (removeUnusedImportsFromFile(file)) {
>>>>>>> origin/main
    fixedCount++;

;
<<<<<<< HEAD
function getAllFiles(dir, extensions = "['.ts', '.tsx', '.js', '.jsx']) {/* TODO: Fix JSX expression */}`"
// console.log removed for production;
=======

function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {/* TODO: Fix JSX expression */}

// console.log removed for production
>>>>>>> origin/main
"`