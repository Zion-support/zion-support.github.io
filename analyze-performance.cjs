#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
console.log("📊 Performance Analysis Report");
console.log("==");
// Check bundle sizes;
const nextDir = path.join(__dirname, ".next");