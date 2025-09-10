#!/usr/bin/env node
const fs = require("fs")
const path = require("path")
function fixFile(filePath) {
  try {
  let content = fs.readFileSync(filePath, "utf8");
    let originalContent = content;

    // Fix malformed function declarations;
    content = content.replace(;
      /export function (\w+)\(\.\.\.args: \[\]\): \{/g,
      "export function $1() {";
    );
    content = content.replace(;
      /export function (\w+)\(\.\.\.args: \[\]\): \{/g,
      "export function $1() {";
    );

    // Fix malformed useState;
    content = content.replace(/useState<>\(null\)/g, 'useState(null)');
    content = content.replace(/useState<>\(null\)/g, 'useState(null)');

    // Fix malformed type annotations;
    content = content.replace(/:\s*{;/g, ': {');
    content = content.replace(/:\s*};/g, ': };');

    // Fix malformed object properties;
    content = content.replace(/(\w+)\s*:\s*{;/g, '$1: {');
    content = content.replace(/(\w+)\s*:\s*string\s*;/g, '$1: string;');
    content = content.replace(/(\w+)\s*:\s*number\s*;/g, '$1: number;');
    content = content.replace(/(\w+)\s*:\s*boolean\s*;/g, '$1: boolean;');

    // Fix malformed function parameters;
    content = content.replace(/\(\s*(\w+)\s*:\s*string\s*\)/g, "($1: string)");
    content = content.replace(/\(\s*(\w+)\s*:\s*number\s*\)/g, "($1: number)");
    content = content.replace(;
      /\(\s*(\w+)\s*:\s*boolean\s*\)/g,
      "($1: boolean)";
    );

    // Fix malformed JSX;
    content = content.replace(/<\/([^>]+)>/g, `</$1>`);

    // Write back if changed;