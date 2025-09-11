#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
console.log("🚀 Optimizing build performance and configuration...");
// 1. Optimize package.json scripts;
const packageJsonPath = path.join(__dirname, "package.json");
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  // Add optimized build scripts;
  packageJson.scripts = {;
  ...packageJson.scripts,
    "build:fast": "next build --no-lint",
    "build:analyze": "ANALYZE=true next build",
    "build:production": "NODE_ENV=production next build",
    "dev:fast": "next dev --turbo",
    "lint:fix": "eslint . --fix --ext .ts,.tsx,.js,.jsx",
    "lint:check": "eslint . --ext .ts,.tsx,.js,.jsx --max-warnings 0",
    "type-check": "tsc --noEmit",
    "test:ci": "jest --ci --coverage --watchAll=false",
    "test:watch": "jest --watch",
    "clean": "rm -rf .next out dist",
    "prebuild": "npm run clean",
    "postbuild": "npm run type-check";,