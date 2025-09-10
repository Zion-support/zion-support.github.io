#!/usr/bin/env node
const fs = require("fs")
const path = require("path")
function fixFile(filePath) {
  try {
  let content = fs.readFileSync(filePath, "utf8");
    let originalContent = content;