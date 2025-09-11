<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"console.log(" Running code quality checks.");const results = { timestamp: new Date().toISOString()," checks: []};/ Check if package.json exists and is valid"if (fs.existsSync("package.json")) { try {" const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8")); results.checks.push({ "" name: "package.json", "" status: "valid"," name: packageJson.name," version: packageJson.version }); console.log(` package.json is valid (${packageJson.name} v${packageJson.version})`)} catch (error) { results.checks.push({ "" name: "package.json", "" status: "invalid"," error: error.message });" console.log(" package.json is invalid")}} else {"" results.checks.push({ name: "package.json", status: "missing" });" console.log(" package.json missing")}/ Check if node_modules exists"if (fs.existsSync("node_modules")) {"" results.checks.push({ name: "node_modules", status: "exists" });" console.log(" node_modules exists")} else {"" results.checks.push({ name: "node_modules", status: "missing" });" console.log(" node_modules missing")}/ Check if TypeScript config exists"if (fs.existsSync("tsconfig.json")) {"" results.checks.push({ name: "tsconfig.json", status: "exists" });" console.log(" tsconfig.json exists")} else {"" results.checks.push({ name: "tsconfig.json", status: "missing" });" console.log(" tsconfig.json missing")}/ Check if ESLint config exists"const eslintConfigs = [".eslintrc.js", ".eslintrc.json", ".eslintrc.yml", ".eslintrc.yaml"];const eslintConfig = eslintConfigs.find(config => fs.existsSync(config));if (eslintConfig) {"" results.checks.push({ name: "eslint-config", status: "exists", file: eslintConfig });` console.log(` ESLint config exists (${eslintConfig})`)} else {"" results.checks.push({ name: "eslint-config", status: "missing" });" console.log(" ESLint config missing")}/ Check if Prettier config exists"const prettierConfigs = [".prettierrc", ".prettierrc.js", ".prettierrc.json"];const prettierConfig = prettierConfigs.find(config => fs.existsSync(config));if (prettierConfig) {"" results.checks.push({ name: "prettier-config", status: "exists", file: prettierConfig });` console.log(` Prettier config exists (${prettierConfig})`)} else {"" results.checks.push({ name: "prettier-config", status: "missing" });" console.log(" Prettier config missing")}/ Save results"fs.writeFileSync("code-quality-report.json", JSON.stringify(results, null, 2));"console.log(" Code quality report saved to code-quality-report.json");/ Summary"const passed = results.checks.filter(check => check.status === "exists" | check.status === "valid").length;const total = results.checks.length;"`console.log(`\n Summary: ${passed}/${total} checks passed`);'"`'"`
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
#!/usr/bin/env node;
/**
 * Simple Code Quality Checker
 * Performs basic code quality checks
 */
<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const results = {
  "timestamp": new Date().toISOString(),
  "checks": []
};
// Check if package.json exists and is valid
if (fs.existsSync('package.json')) {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    results.checks.push({ 
      "name": 'package.json', 
      "status": 'valid',
      "name": packageJson.name,
      "version": packageJson.version
    });
    `)} catch (error) {
    results.checks.push({ 
      "name": 'package.json', 
      "status": 'invalid',
      "error": error.message
    });
    }
} else {
  results.checks.push({ "name": 'package.json', "status": 'missing' });
  }
// Check if node_modules exists
if (fs.existsSync('node_modules')) {
  results.checks.push({ "name": 'node_modules', "status": 'exists' });
  } else {
  results.checks.push({ "name": 'node_modules', "status": 'missing' });
  }
// Check if TypeScript config exists
if (fs.existsSync('tsconfig.json')) {
  results.checks.push({ "name": 'tsconfig.json', "status": 'exists' });
  } else {
  results.checks.push({ "name": 'tsconfig.json', "status": 'missing' });
  }
// Check if ESLint config exists
const eslintConfigs = ['.eslintrc.js', '.eslintrc.json', '.eslintrc.yml', '.eslintrc.yaml'];
const eslintConfig = eslintConfigs.find(config => fs.existsSync(config));
if (eslintConfig) {
  results.checks.push({ "name": 'eslint-config', "status": 'exists', "file": eslintConfig });
  `)} else {
  results.checks.push({ "name": 'eslint-config', "status": 'missing' });
  }
// Check if Prettier config exists
const prettierConfigs = ['.prettierrc', '.prettierrc.js', '.prettierrc.json'];
const prettierConfig = prettierConfigs.find(config => fs.existsSync(config));
if (prettierConfig) {
  results.checks.push({ "name": 'prettier-config', "status": 'exists', "file": prettierConfig });
  `)} else {
  results.checks.push({ "name": 'prettier-config', "status": 'missing' });
  }
// Save results
fs.writeFileSync('code-quality-report.json', JSON.stringify(results, null, 2));
// Summary
const passed = results.checks.filter(check => check.status === 'exists' || check.status === 'valid').length;
const total = results.checks.length;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
const fs = require('fs')
const path = require('path')
console.log(' Running code quality checks...')
if (fs.existsSync('package.json')
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8')
      "name"
      "status"
      "name"
      "status"
  results.checks.push({ "name": 'package.json', "status"})
  results.checks.push({ "name": 'node_modules', "status"})
  results.checks.push({ "name": 'node_modules', "status"})
  results.checks.push({ "name": 'tsconfig.json', "status"})
  results.checks.push({ "name": 'tsconfig.json', "status"})
  results.checks.push({ "name": 'eslint-config', "status"})
  results.checks.push({ "name": 'eslint-config', "status"})
  results.checks.push({ "name": 'prettier-config', "status"})
<<<<<<< HEAD
  results.checks.push({ "name": 'prettier-config', "status"})
=======
  results.checks.push({ "name": 'prettier-config', "status"})
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
