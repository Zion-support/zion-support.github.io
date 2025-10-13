#!/usr/bin/env node
import fs from 'fs';

function fixMainPage() {
<<<<<<< HEAD
  try {
    let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');
    
=======
  try {;
let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    // Fix self-closing div tags that have content after them
    content = content.replace(/<div([^>]*?)\s*\/>\s*\n\s*<[^/]/g, '<div$1>');
    // Fix specific patterns that are common issues
    content = content.replace(/<div([^>]*?)\s*\/>\s*\n\s*<div/g, '<div$1>\n<div');
    content = content.replace(/<div([^>]*?)\s*\/>\s*\n\s*<h/g, '<div$1>\n<h');
    content = content.replace(/<div([^>]*?)\s*\/>\s*\n\s*<p/g, '<div$1>\n<p');
    content = content.replace(/<div([^>]*?)\s*\/>\s*\n\s*<button/g, '<div$1>\n<button');
    content = content.replace(/<div([^>]*?)\s*\/>\s*\n\s*<span/g, '<div$1>\n<span');
    content = content.replace(/<div([^>]*?)\s*\/>\s*\n\s*<ul/g, '<div$1>\n<ul');
    content = content.replace(/<div([^>]*?)\s*\/>\s*\n\s*<li/g, '<div$1>\n<li');
    content = content.replace(/<div([^>]*?)\s*\/>\s*\n\s*<a/g, '<div$1>\n<a');
    content = content.replace(/<div([^>]*?)\s*\/>\s*\n\s*<img/g, '<div$1>\n<img');
    content = content.replace(/<div([^>]*?)\s*\/>\s*\n\s*<svg/g, '<div$1>\n<svg');
    // Fix map function syntax issues
    content = content.replace(/map\(([^)]*)\)\s*=>\s*\(\s*<\/div>/g, 'map($1) => (');
    // Fix closing tags that don't match opening tags
    content = content.replace(/<\/div>\s*<\/section>/g, '</div>\n        </div>\n      </section>');
    fs.writeFileSync('/workspace/app/page.tsx', content);
<<<<<<< HEAD
    console.log('✅ Fixed main page.tsx file');
    return true;
  } catch (error) {
    console.error('Error fixing main page:', error.message);
    return false;
  }
}

console.log('🔧 Fixing main page.tsx...');
=======
    // console.log removed for production
return true} catch (error) {
    // console.error removed for production
return false};
};
// console.log removed for production
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
fixMainPage();
console.log('🎉 Main page fixes completed!');