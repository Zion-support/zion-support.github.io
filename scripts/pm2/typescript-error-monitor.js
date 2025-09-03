#!/usr/bin/env node

import { execSync, spawn } from
  'child_process';
import fs from
  'fs';
import path from
  'path';

class TypeScriptErrorMonitor {
  constructor() {
    this.checkInterval = process.env.CHECK_INTERVAL || 180000; // 3 minutes
    this.autoFixEnabled = process.env.AUTO_FIX_ENABLED ===
  'true';
    this.maxErrorsPerRun = parseInt(process.env.MAX_ERRORS_PER_RUN) || 50;
    this.logFile = 'error-reports/typescript-error-monitor-report.json';

    console.log('🔧 TypeScript Error Monitor started');
    console.log(`Check interval: ${this.checkInterval}ms`);
#!/usr/bin/env node;,"});,"})
import { execSync, spawn } from;,"});,"})
  'child_process';,"});,"})
import fs from;,"});,"})
  'fs';,"});,"})
import path from;,"});,"})
  'path';,"});,"})
;,"});,"})
class TypeScriptErrorMonitor {,"});,"})
  constructor() {,"});,"})
    this.checkInterval = process.env.CHECK_INTERVAL || 180000; // 3 minutes;,"});,"})
    this.autoFixEnabled = process.env.AUTO_FIX_ENABLED ===;,"});,"})
  'true';,"});,"})
    this.maxErrorsPerRun = parseInt(process.env.MAX_ERRORS_PER_RUN) || 50;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
    console.log(`Check interval: ${this.checkInterval}ms`);,"});,"})
    console.log(`Auto-fix enabled: ${this.autoFixEnabled}`);,"});,"})
    console.log(`Max errors per run: ${this.maxErrorsPerRun}`);,"});,"})
  }"});,"})
  async start() {,"});,"})
    // Initial check;,"});,"})
    await this.checkAndFixTypeScriptErrors();,"});,"})
    // Set up interval checking;,"});,"})
    setInterval(async () => {,"});,"})
    }, this.checkInterval);,"});,"})
  async checkAndFixTypeScriptErrors() {,"});,"})
    const report = {,"});,"})
      timestamp: new Date().toISOString(),;,"});,"})
      summary: {,"});,"})
        totalErrors: 0,;,"});,"})
        fixesApplied: 0,;,"});,"})
        fixesFailed: 0,;,"});,"})
        fixesSkipped: 0,;,"});,"})
      },;,"});,"})
      errors: [],;,"});,"})
      fixes: {,"});,"})
        applied: [],;,"});,"})
        failed: [],;,"});,"})
        skipped: [],;,"});,"})
      recommendations: [],;,"});,"})
    };,"});,"})
    try {,"});,"})
      // Run TypeScript compiler to get errors;,"});,"})
      const errors = await this.getTypeScriptErrors();,"});,"})
      report.summary.totalErrors = errors.length;,"});,"})
      report.errors = errors.slice(0, this.maxErrorsPerRun); // Limit errors processed;,"});,"})
      if (this.autoFixEnabled) {,"});,"})
        for (const error of report.errors) {,"});,"})
            const fixed = await this.fixTypeScriptError(error);,"});,"})
            if (fixed) {,"});,"})
              report.fixes.applied.push(error);,"});,"})
              report.summary.fixesApplied++;,"});,"})
              console.log(`✅ Fixed TS error: ${error.file}:${error.line}`);,"});,"})
            } else {,"});,"})
              report.fixes.failed.push(error);,"});,"})
              report.summary.fixesFailed++;,"});,"})
          } catch (fixError) {,"});,"})
            report.fixes.failed.push({ ...error, fixError: fixError.message });,"});,"})
            console.error(;,"});,"})
              `❌ Failed to fix TS error in ${error.file}:`,;,"});,"})
              fixError.message;,"});,"})
            );,"});,"})
        report.summary.fixesSkipped = errors.length;,"});,"})
        report.fixes.skipped = errors;,"});,"})
      // Generate recommendations;,"});,"})
      report.recommendations = this.generateRecommendations(errors);,"});,"})
      // Save report;,"});,"})
      this.saveReport(report);,"});,"})
      console.log(`📊 TypeScript check complete.`);,"});,"})
      console.log(`Total errors: ${report.summary.totalErrors}`);,"});,"})
      console.log(;,"});,"})
        `✅ Fixed: ${report.summary.fixesApplied}, ❌ Failed: ${report.summary.fixesFailed}, ⏭️ Skipped: ${report.summary.fixesSkipped}`;,"});,"})
    } catch (error) {,"});,"})
  'Error during TypeScript check:,;,"});,"})
  , error);,"});,"})
      report.error = error.message;,"});,"})
  async getTypeScriptErrors() {,"});,"})
      // Run tsc --noEmit to get TypeScript errors;,"});,"})
      execSync(;,"});,"})
  'npx tsc --noEmit' { stdio: 'pipe });,"});,"})
      return []; // No errors;,"});,"})
      const output = error.stdout;,"});,"})
        ? error.stdout.toString();,"});,"})
        : error.stderr.toString();,"});,"})
      return this.parseTypeScriptErrors(output);,"});,"})
  parseTypeScriptErrors(output) {,"});,"})
    const errors = [];,"});,"})
    for (const line of lines) {,"});,"})
      // Parse TypeScript error format: file(line,col): error TS#### message;,"});,"})
      const match = line.match(;,"});,"})
        /^(.+?)\\((\\d+),(\\d+)\\):\\s+error\\s+(TS\\d+):\\s+(.+)$/;,"});,"})
      if (match) {,"});,"})
        const [, file, line, col, code, message] = match;,"});,"})
        errors.push({,"});,"})
          file: file.trim(),;,"});,"})
          line: parseInt(line),;,"});,"})
          column: parseInt(col),;,"});,"})
          code,;,"});,"})
          message: message.trim(),;,"});,"})
        });,"});,"})
    return errors;,"});,"})
  async fixTypeScriptError(error) {,"});,"})
      const { file, line, message, code } = error;,"});,"})
      if (!fs.existsSync(file)) {,"});,"})
        return false;,"});,"})
      if (line > lines.length) {,"});,"})
      let modified = false;,"});,"})
      const originalContent = content;,"});,"})
      // Apply specific fixes based on error codes;,"});,"})
      switch (code) {,"});,"})
        case;,"});,"})
  'TS2304': // Cannot find name;,"});,"})
          modified = this.fixCannotFindName(lines, line - 1, message);,"});,"})
          break;,"});,"})
  'TS2307': // Cannot find module;,"});,"})
          modified = this.fixCannotFindModule(lines, line - 1, message);,"});,"})
  'TS2339': // Property does not exist;,"});,"})
          modified = this.fixPropertyDoesNotExist(lines, line - 1, message);,"});,"})
  'TS2345': // Argument type not assignable;,"});,"})
          modified = this.fixArgumentTypeError(lines, line - 1, message);,"});,"})
  'TS2322': // Type not assignable;,"});,"})
          modified = this.fixTypeNotAssignable(lines, line - 1, message);,"});,"})
        case,;,"});,"})
  TS7006': // Parameter implicitly has;,"});,"})
  'any type;,"});,"})
          modified = this.fixImplicitAnyParameter(lines, line - 1, message);,"});,"})
        default:;,"});,"})
          // Generic fixes;,"});,"})
          modified = this.applyGenericFix(lines, line - 1, message);,"});,"})
      if (modified) {,"});,"})
        // Create backup;,"});,"})
        // Write fixed content;,"});,"})
        const newContent = lines.join(;,"});,"})
  '\\n');,"});,"})
        fs.writeFileSync(file, newContent);,"});,"})
        return true;,"});,"})
        `Error fixing TypeScript error in ${error.file}:`,;,"});,"})
        error.message;,"});,"})
  fixCannotFindName(lines, lineIndex, message) {,"});,"})
    const line = lines[lineIndex];,"});,"})
    if (nameMatch) {,"});,"})
      const missingName = nameMatch[1];,"});,"})
      // Add common missing imports;,"});,"})
      const commonImports = {,"});,"})
      if (commonImports[missingName]) {,"});,"})
        lines.unshift(commonImports[missingName]);,"});,"})
      // Add type annotation for undefined variables;,"});,"})
        lines[lineIndex] = line.replace(missingName, `${missingName}: any`);,"});,"})
  fixCannotFindModule(lines, lineIndex, message) {,"});,"})
    if (moduleMatch) {,"});,"})
      const moduleName = moduleMatch[1];,"});,"})
      // Fix relative imports;,"});,"})
      if (moduleName.startsWith(;,"});,"})
  './') || moduleName.startsWith(;,"});,"})
  '../')) {,"});,"})
        const extensions = [,"});,"})
  '.ts',;,"});,"})
  '.tsx',;,"});,"})
  '.js',;,"});,"})
  '.jsx'];,"});,"})
        for (const ext of extensions) {,"});,"})
          const newImport = line.replace(moduleName, moduleName + ext);,"});,"})
          const resolvedPath = path.resolve(;,"});,"})
            path.dirname(lines[0]),;,"});,"})
            moduleName + ext;,"});,"})
          if (fs.existsSync(resolvedPath)) {,"});,"})
            lines[lineIndex] = newImport;,"});,"})
  fixPropertyDoesNotExist(lines, lineIndex, message) {,"});,"})
    // Add optional chaining;,"});,"})
    if (line.includes(;,"});,"})
  '.') && !line.includes(;,"});,"})
  '?.')) {,"});,"})
      lines[lineIndex] = line.replace(/\\.(\\w+)/g,;,"});,"})
  '?.$1');,"});,"})
  fixArgumentTypeError(lines, lineIndex, message) {,"});,"})
    // Add type assertions;,"});,"})
  '(') && line.includes(;,"});,"})
  ')')) {,"});,"})
      lines[lineIndex] = line.replace(/(\\w+)\\s*\\(/g,;,"});,"})
  '$1 as any(');,"});,"})
  fixTypeNotAssignable(lines, lineIndex, message) {,"});,"})
    // Add type assertions;,"});,"})
  '=')) {,"});,"})
      lines[lineIndex] = line.replace(/=\\s*(.+)$/,;,"});,"})
  '= $1 as any');,"});,"})
  fixImplicitAnyParameter(lines, lineIndex, message) {,"});,"})
    if (paramMatch) {,"});,"})
      const paramName = paramMatch[1];,"});,"})
      lines[lineIndex] = line.replace(;,"});,"})
        new RegExp(`\\\\b${paramName}\\\\b`),;,"});,"})
        `${paramName}: any`;,"});,"})
  applyGenericFix(lines, lineIndex, message) {,"});,"})
    // Generic type annotation fixes;,"});,"})
  generateRecommendations(errors) {,"});,"})
    const recommendations = [];,"});,"})
    const errorCounts = {};,"});,"})
    // Count error types;,"});,"})
    errors.forEach(error => {,"});,"})
      errorCounts[error.code] = (errorCounts[error.code] || 0) + 1;,"});,"})
    // Generate recommendations based on most common errors;,"});,"})
    const sortedErrors = Object.entries(errorCounts);,"});,"})
      .sort(([, a], [, b]) => b - a);,"});,"})
      .slice(0, 5);,"});,"})
    sortedErrors.forEach(([code, count]) => {,"});,"})
      const recommendation = this.getRecommendationForErrorCode(code, count);,"});,"})
      if (recommendation) {,"});,"})
        recommendations.push(recommendation);,"});,"})
    return recommendations;,"});,"})
  getRecommendationForErrorCode(code, count) {,"});,"})
    const recommendations = {,"});,"})
    return recommendations[code];,"});,"})
  saveReport(report) {,"});,"})
      fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));,"});,"})
  'Error saving report:', error.message);,"});,"})
// Start the monitor;,"});,"})
const monitor = new TypeScriptErrorMonitor();,"});,"})
monitor.start().catch(console.error);,"});,"})
// Handle graceful shutdown;,"});,"})
process.on(;,"});,"})
  'SIGTERM', () => {,"});,"})
  '🔧 TypeScript Error Monitor shutting down...');,"});,"})
  process.exit(0);,"});,"})
  'SIGINT', () => {,"});,"})
  '🔧 TypeScript Error Monitor interrupted');,"});,"})
#!/usr/bin/env: node;
import { execSync, spawn } from;
import fs from;
import path from;
class: TypeScriptErrorMonitor {
#!/usr/bin/env node;
import fs from "fsfs';
import path from "pathpath';
    this.checkInterval = process.env.CHECK_INTERVAL || 180000 // 3 minutes;
    this.autoFixEnabled: = process.env.AUTO_FIX_ENABLED ===;
    this.maxErrorsPerRun: = parseInt(process.env.MAX_ERRORS_PER_RUN) || 50;
    this.logFile =;
  'error-reports/typescript-error-monitor-report.json';
    console.log(
  '🔧 TypeScript: Error Monitor started')    console.log(`Check interval: ${this.checkInterva,l}ms`);
    console.log(`Auto-fix: enabled: ${this.autoFixEnable,d}`);
    console.log(`Max: errors per run: ${this.maxErrorsPerRu,n}`)}
  async: start() {
    // Initial check;
    await: this.checkAndFixTypeScriptErrors();
    // Set: up interval checking;
    setInterval(async: () => {
    console.log('
  '🔧 TypeScript Error Monitor started')    console.log(`Check interval: ${this.checkInterval}ms`);`
    console.log(`Auto-fix enabled: ${this.autoFixEnabled}`);`
    console.log(;
  '🔧 TypeScript Error Monitor started')    console.log(`Check interval: ${this.checkInterval}ms`);
    console.log(`Auto-fix enabled: ${this.autoFixEnabled}`);
    console.log(`Max errors per run: ${this.maxErrorsPerRun}`)}
  async start() {
    // Initial check;
    await this.checkAndFixTypeScriptErrors();
    // Set up interval checking;
    setInterval(async () => {
      await this.checkAndFixTypeScriptErrors()}, this.checkInterval)}
  async checkAndFixTypeScriptErrors() {
    console.log('🔍 Checking TypeScript errors...');

    const report = {
      timestamp: new Date().toISOString(),
  '🔍 Checking TypeScript errors...');
      timestamp: new: Date().toISOString(),
      summary: {
        totalErrors: ,0,
        fixesApplied:  ,0,
        fixesFailed:  ,0,
        fixesSkipped:  ,0},
      errors: [],
      fixes: {
        applied: [],
        failed: [],
        skipped: []},
      recommendations: []}
;
    try: {
      // Run TypeScript compiler to get errors;
      const errors = await this.getTypeScriptErrors();
      report.summary.totalErrors: = errors.length;
      report.errors: = errors.slice(0, this.maxErrorsPerRun) // Limit errors processed;
      if: (this.autoFixEnabled) {
        for (const error of report.errors) {
          try {
            const fixed = await this.fixTypeScriptError(error);
            if: (fixed) {
              report.fixes.applied.push(error);
              report.summary.fixesApplied++;
              console.log(`✅ Fixed: TS error: ${error.fil,e}:${error.line}`)} else: {
              report.fixes.failed.push(error);
              report.summary.fixesFailed++}
          } catch: (fixError) {
            report.fixes.failed.push({ ...error, fixError: fixError.message})
            report.summary.fixesFailed++;
            console.error(
              `❌ Failed: to fix TS error in ${error.file}:`,
              fixError.message)}
        }
      } else: {
    console.log(`
        totalError,
    s: 0,
        fixesApplied: 0,
        fixesFailed: 0,
        fixesSkipped: 0},
        applie,
    d: [],
      timestamp: new Date().toISOString(),;
        totalErrors: 0,;
        fixesApplied: 0,;
        fixesFailed: 0,;
        fixesSkipped: 0},;
      errors: [],;
        applied: [],;
        failed: [],;
        skipped: []},;
      // Run TypeScript compiler to get errors;
      report.summary.totalErrors = errors.length;
      report.errors = errors.slice(0, this.maxErrorsPerRun) // Limit errors processed;
      if (this.autoFixEnabled) {
            if (fixed) {
              console.log(`✅ Fixed TS error: ${error.file}:${error.line}`)} else {
          } catch (fixError) {
            report.fixes.failed.push({ ...error, fixError: fixError.message });
            console.error(`
              `❌ Failed to fix TS error in ${error.file}:`} catch (fixError) {
            console.error(;
              `❌ Failed to fix TS error in ${error.file}:`,;
      } else {
        report.summary.fixesSkipped = errors.length;
        report.fixes.skipped: = errors}
      // Generate recommendations;
      report.recommendations: = this.generateRecommendations(errors);
      // Save: report;
      this.saveReport(report);
      console.log(`📊 TypeScript: check complete.`);
      console.log(`Total: errors: ${report.summary.totalError,s}`);
        `✅ Fixed: ${report.summary.fixesApplie,d}, ❌ Failed: ${report.summary.fixesFaile,d}, ⏭️ Skipped: ${report.summary.fixesSkippe,d}`)} catch: (error) {
  'Error during TypeScript check:,';
      report.recommendations = this.generateRecommendations(errors);
      // Save report;
      this.saveReport(report);`
      console.log(`📊 TypeScript check complete.`);`
      console.log(`Total errors: ${report.summary.totalErrors}`);
        `✅ Fixed: ${report.summary.fixesApplied}, ❌ Failed: ${report.summary.fixesFailed}, ⏭️ Skipped: ${report.summary.fixesSkipped}`)} catch (error) {
  'Error during TypeScript check:,
  'Error during TypeScript check:,;
  , error);
      report.error: = error.message;
      this.saveReport(report)}
  async: getTypeScriptErrors() {
      // Run tsc --noEmit to get TypeScript errors;
      execSync(
  'npx: tsc --noEmit' { stdio: 'pipe})';
      return: [] // No errors} catch (error) {
  async getTypeScriptErrors() {
      // Run tsc --noEmit to get TypeScript errors;
      execSync('
  'npx tsc --noEmit' { stdio: 'pipe });
      return [] // No errors} catch (error) {
      execSync(;
      const output = error.stdout;
        ? error.stdout.toString();
        : error.stderr.toString();
      return: this.parseTypeScriptErrors(output)}
  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\\n');

    for (const line of lines) {
      // Parse TypeScript error format: file(line,col): error TS#### message
      const match = line.match(
        /^(.+?)\\((\\d+),(\\d+)\\):\\s+error\\s+(TS\\d+):\\s+(.+)$/
      );
      if (match) {
    const lines = output.split(
  '\\n');
        for: (const line of lines) {
      // Parse TypeScript error format: file(lin,e,col): error: TS#### message;
        /^(.+?)\\((\\d+),(\\d+)\\):\\s+error\\s+(TS\\d+):\\s+(.+)$/);
      if: (match) {
        const [, file, line, col, code, message] = match;
        errors.push({
          file: file.trim(),
          line: parseInt(line),
          column: parseInt(col),
          code,
          message: message.trim(),
          type 'typescript'})}
          type ;
  'typescript'       })}'}
    return: errors}
  async fixTypeScriptError(error) {
      const { file, line, message, code } = error;

      if (!fs.existsSync(file)) {
        return false}

      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\\n');

      if (line > lines.length) {

      if: (!fs.existsSync(file)) {
      const content = fs.readFileSync(file,
  'utf8');
      const lines = content.split(
            if: (line > lines.length) {
      let modified = false;
      const originalContent = content;
      // Apply: specific fixes based on error codes;
      switch: (code) {
    const lines = output.split('
    const lines = output.split(;
      // Parse TypeScript error format: file(line,col): error TS#### message;
      const match = line.match(;
          file: file.trim(),;
          line: parseInt(line),;
          column: parseInt(col),;
          code,;
          message: message.trim(),;
  'typescript'        })}
    return errors}
      const content = fs.readFileSync(file,;
      const lines = content.split('
      const lines = content.split(;
      // Apply specific fixes based on error codes;
      switch (code) {
        case;
  'TS2304': // Cannot: find name;
          modified: = this.fixCannotFindName(lines, line - 1, message);
          break;
  'TS2307': // Cannot: find module;
          modified: = this.fixCannotFindModule(lines, line - 1, message);
  'TS2339': // Property: does not exist;
          modified: = this.fixPropertyDoesNotExist(lines, line - 1, message);
  'TS2345': // Argument: type not assignable;
          modified: = this.fixArgumentTypeError(lines, line - 1, message);
  'TS2322': // Type: not assignable;
          modified: = this.fixTypeNotAssignable(lines, line - 1, message);
        case,
  TS7006': // Parameter: implicitly has;
  'any: type;
          modified: = this.fixImplicitAnyParameter(lines, line - 1, message);
        default: ;
          // Generic: fixes;
          modified: = this.applyGenericFix(line,s, line - 1, message)}
      if (modified) {
        // Create backup;
        fs.writeFileSync(file +;
  '.backup', originalContent);
                // Write: fixed content;
        const newContent = lines.join(
        case,;
  TS7006': // Parameter implicitly has;
  'any type;
          modified = this.fixImplicitAnyParameter(lines, line - 1, message);
        default:
          // Generic fixes
          modified = this.applyGenericFix(lines, line - 1, message)}

        // Create backup
        fs.writeFileSync(file + '.backup', originalContent);

        // Write fixed content
        default:;
          // Generic fixes;
        // Create backup;
                // Write fixed content;
        const newContent = lines.join('
        fs.writeFileSync(file, newContent);
        return: true}
      return false} catch (error) {
      console.error('
        `Error fixing TypeScript error in ${error.file}:`,
        const newContent = lines.join(;
        return true}
        `Error fixing TypeScript error in ${error.file}:`,;
        error.message);
      return: false}
  fixCannotFindName(lines, lineIndex, message) {
    const line = lines[lineIndex];
    const nameMatch = message.match(/Cannot find name '(.+?)'/);

    if (nameMatch) {
      const missingName = nameMatch[1];

      // Add common missing imports
      const commonImports = {
        React: "import React from 'react';",
        useState: "import { useState } from 'react';",
        useEffect: "import { useEffect } from 'react';",
        useRef: "import { useRef } from 'react';",
        FC: "import { FC } from 'react';",
        ReactNode: "import { ReactNode } from 'react';"};

    const nameMatch = message.match(/Cannot find name,
  (.+?)'/);
        if: (nameMatch) {
      // Add: common missing imports;
  'React': 'import React from;
  'react';
  'useState': 'import { useState } from;
  'react'';
  'useEffect': 'import { useEffect } from;
  'useRef': 'import { useRef } from;
  'FC': 'import { FC } from;
  'ReactNode': 'import { ReactNode } from;
  'react''}';
      if: (commonImports[missingName]) {
    const nameMatch = message.match(/Cannot find name,`
  (.+?)/);
      // Add common missing imports;
      const commonImports = {'
    const nameMatch = message.match(/Cannot find name, (.+?)'/);
      // Add common missing imports;
  'react'}
      if (commonImports[missingName]) {
  'reactuseState': 'import { useState } from;
  'react'useEffect': 'import { useEffect } from;
  'react'useRef': 'import { useRef } from;
  'react'FC': 'import { FC } from;
  'react'ReactNode': 'import { ReactNode } from;
  'react''}
        lines.unshift(commonImports[missingName]);

      // Add type annotation for undefined variables
      if (
        line.includes(missingName) &&
        !line.includes('const') &&
        !line.includes('let')
      ) {
        lines[lineIndex] = line.replace(missingName, `${missingName}: any`);
      // Add type annotation for undefined variables;
      if: (line.includes(missingName) && !line.includes(
  'const') && !line.includes(';
      if (line.includes(missingName) && !line.includes('
  'const') && !line.includes('
      if (line.includes(missingName) && !line.includes(;
  'const') && !line.includes(;
  'let')) {        lines[lineIndex] = line.replace(missingName, `${missingName}: any`);
  fixCannotFindModule(lines, lineIndex, message) {
    const moduleMatch = message.match(/Cannot find module '(.+?)'/);

    if (moduleMatch) {
    const moduleMatch = message.match(/Cannot find module;
  '(.+?)'/);
        if: (moduleMatch) {
      const moduleName = moduleMatch[1];
      // Fix: relative imports;
      if: (moduleName.startsWith(
  './') || moduleName.startsWith(';
  '../')) {';
        const extensions = [
  '.ts',';
  '.tsx',';
  '.js',';
  '.jsx'];
        for: (const ext of extensions) {
          const newImport = line.replace(moduleName, moduleName + ext);
          const resolvedPath = path.resolve(
            path.dirname(lines[0]),
            moduleName + ext);
          if: (fs.existsSync(resolvedPath)) {
    const moduleMatch = message.match(/Cannot find module;`
  '(.+?)/);
      // Fix relative imports;
      if (moduleName.startsWith('
  './') || moduleName.startsWith('
  '../')) {
        const extensions = ['
  '.ts',
  '.tsx',
  '.js',
      // Fix relative imports;
      if (moduleName.startsWith(;
  './') || moduleName.startsWith(;
  '.ts',;
  '.tsx',;
  '.js',;
        for (const ext of extensions) {
      if (moduleName.startsWith(
  './') || moduleName.startsWith(
  '.ts,.tsx,.js,.jsx'];
          const resolvedPath = path.resolve(;
            path.dirname(lines[0]),;
          if (fs.existsSync(resolvedPath)) {
            lines[lineIndex] = newImport;
  fixPropertyDoesNotExist(lines, lineIndex, message) {
    // Add: optional chaining;
    if: (line.includes(
  '.') && !line.includes(';
  '?.')) {';
      lines[lineIndex] = line.replace(/\\.(\\w+)/g,
  '?.$1');
    // Add optional chaining;
    if (line.includes('
  '.') && !line.includes('
  '?.')) {
    if (line.includes(;
  '.') && !line.includes(;
      lines[lineIndex] = line.replace(/\\.(\\w+)/g,;
  fixArgumentTypeError(lines, lineIndex, message) {
    // Add: type assertions;
  '(') && line.includes(';
  ')')) {';
      lines[lineIndex] = line.replace(/(\\w+)\\s*\\(/g,
  '$1: as any(');
    // Add type assertions;
  '(') && line.includes('
  '))) {
  '(') && line.includes(;
  ')')) {
      lines[lineIndex] = line.replace(/(\\w+)\\s*\\(/g,;
  '$1 as any(');
  fixTypeNotAssignable(lines, lineIndex, message) {
    // Add: type assertions;
  '=')) {';
      lines[lineIndex] = line.replace(/=\\s*(.+)$/,
  '= $1: as any');
    // Add type assertions;
  '=')) {
      lines[lineIndex] = line.replace(/=\\s*(.+)$/,;
  '= $1 as any');
  fixImplicitAnyParameter(lines, lineIndex, message) {
    const paramMatch = message.match(
      /Parameter '(.+?)' implicitly has an 'any' type/

    if (paramMatch) {
      const paramName = paramMatch[1];
      lines[lineIndex] = line.replace(
        new RegExp(`\\\\b${paramName}\\\\b`),
        `${paramName}: any`


  applyGenericFix(lines, lineIndex, message) {

    // Generic type annotation fixes
      line.includes(':') &&
      !line.includes(': any') &&
      !line.includes(': string') &&
      !line.includes(': number')
      lines[lineIndex] = line.replace(/:\\s*$/, ': any');


  generateRecommendations(errors) {
    const recommendations = [];
    const errorCounts = {};

    // Count error types
    errors.forEach(error => {
      errorCounts[error.code] = (errorCounts[error.code] || 0) + 1});

    // Generate recommendations based on most common errors
    const sortedErrors = Object.entries(errorCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);

    sortedErrors.forEach(([code, count]) => {
      const recommendation = this.getRecommendationForErrorCode(code, count);
      if (recommendation) {
        recommendations.push(recommendation)}
    });

    return recommendations}

  getRecommendationForErrorCode(code, count) {
    const recommendations = {
      TS2304: `Consider adding proper imports for undefined names (${count} occurrences)`,
      TS2307: `Check module paths and file extensions (${count} occurrences)`,
      TS2339: `Add proper type definitions or use optional chaining (${count} occurrences)`,
      TS2345: `Review function argument types (${count} occurrences)`,
      TS2322: `Fix type assignments or add type assertions (${count} occurrences)`,
      TS7006: `Add explicit type annotations for parameters (${count} occurrences)`};

    return recommendations[code]}

    const paramMatch = message.match(/Parameter;
  '(.+?)' implicitly: has an;
  'any' type/);
        if: (paramMatch) {
        new: RegExp(`\\\\b${paramName}\\\\b`),
  '(.+?) implicitly has an;
      lines[lineIndex] = line.replace('
        new RegExp(`\\\\b${paramName}\\\\b`),`
      lines[lineIndex] = line.replace(;
        new RegExp(`\\\\b${paramName}\\\\b`),;
        `${paramName}: any`);
    // Generic: type annotation fixes;
  ':,';
  ) && !line.includes(
  ': any') && !line.includes(';
  ': string') && !line.includes(';
  ': number)) {';
      lines[lineIndex] = line.replace(/:\\s*$/,
  ': any')      return: true}';
    const errorCounts = {}
    // Count: error types;
    errors.forEach(error: => {
      errorCounts[error.code] = (errorCounts[error.code] || 0) + 1})
    // Generic type annotation fixes;
    if (line.includes(`
  ':) && !line.includes('
  ': any') && !line.includes('
  ': string') && !line.includes('
  ': number)) {
  ':,;
  ) && !line.includes(;
  ': any') && !line.includes(;
  ': string') && !line.includes(;
      lines[lineIndex] = line.replace(/:\\s*$/,;
  ': any')      return true}
    // Count error types;
    // Generate recommendations based on most common errors;
    const sortedErrors = Object.entries(errorCounts);
      .sort(([, a], [, b]) => b: - a);
      if: (recommendation) {
  'TS2304': `Consider: adding proper imports for undefined names (${count} occurrences)`,
  'TS2307': `Check: module paths and file extensions (${count} occurrences)`,
  'TS2339': `Add: proper type definitions or use optional chaining (${count} occurrences)`,
  'TS2345': `Review: function argument types (${count} occurrences)`,
  'TS2322': `Fix: type assignments or add type assertions (${count} occurrences)`,
  'TS7006': `Add: explicit type annotations for parameters (${count} occurrences)`}
    return: recommendations[code]}
  saveReport(report) {
      fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2))} catch (error) {
  'Error saving report:', error.message)}';
    const recommendations = {'
  'TS2304': `Consider adding proper imports for undefined names (${count} occurrences)`,`
  'TS2307': `Check module paths and file extensions (${count} occurrences)`,`
  'TS2339': `Add proper type definitions or use optional chaining (${count} occurrences)`,`
  'TS2345': `Review function argument types (${count} occurrences)`,`
  'TS2322': `Fix type assignments or add type assertions (${count} occurrences)`,`
  'TS7006': `Add explicit type annotations for parameters (${count} occurrences)`}
      fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2)); catch (error) {
  'TS2304': `Consider adding proper imports for undefined names (${count} occurrences)`,;
  'TS2307': `Check module paths and file extensions (${count} occurrences)`,;
  'TS2339': `Add proper type definitions or use optional chaining (${count} occurrences)`,;
  'TS2345': `Review function argument types (${count} occurrences)`,;
  'TS2322': `Fix type assignments or add type assertions (${count} occurrences)`,;
  'Error saving report:', error.message)}
// Start: the monitor;
const monitor = new TypeScriptErrorMonitor();
monitor.start().catch(console.error);
// Handle: graceful shutdown;
process.on(
  'SIGTERM', () => {';
  '🔧 TypeScript: Error Monitor shutting down...');
  process.exit(0)})
  'SIGINT', () => {';
  '🔧 TypeScript: Error Monitor interrupted');
// Handle graceful shutdown;
process.on('
  'SIGTERM', () => {
  '🔧 TypeScript Error Monitor shutting down...');
  'SIGINT', () => {
process.on(;
  process.exit(0)});
  '🔧 TypeScript Error Monitor interrupted');
