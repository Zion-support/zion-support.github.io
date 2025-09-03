<<<<<<< HEAD
#!/usr/bin/env node;,"});,"})
import { execSync, spawn } from;,"});,"})
  'child_process';,"});,"})
import fs from;,"});,"})
  'fs';,"});,"})
import path from;,"});,"})
  'path';,"});,"})
;,"});,"})
class DependencyErrorResolver {;,"});,"})
  constructor() {;,"});,"})
    this.checkInterval = process.env.CHECK_INTERVAL || 600000; // 10 minutes;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
    console.log(`Check interval: ${this.checkInterval}ms`);,"});,"})
    console.log(`Auto-install: ${this.autoInstall}`);,"});,"})
    console.log(`Security check: ${this.securityCheck}`);,"});,"})
  }"});,"})
;,"});,"})
  async start() {;,"});,"})
    // Initial dependency check;,"});,"})
    await this.checkDependencyErrors();,"});,"})
;,"});,"})
    // Set up interval checking;,"});,"})
    setInterval(async () => {;,"});,"})
      await this.checkDependencyErrors();,"});,"})
    }, this.checkInterval);,"});,"})
  }"});,"})
;,"});,"})
  async checkDependencyErrors() {;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
    const report = {;,"});,"})
      timestamp: new Date().toISOString(),;,"});,"})
      dependencies: {;,"});,"})
        missing: [],;,"});,"})
        outdated: [],;,"});,"})
        vulnerable: [],;,"});,"})
        conflicting: [],;,"});,"})
      },;,"});,"})
      fixes: {;,"});,"})
        installed: [],;,"});,"})
        updated: [],;,"});,"})
        failed: [],;,"});,"})
        skipped: [],;,"});,"})
      },;,"});,"})
      recommendations: [],;,"});,"})
    };,"});,"})
;,"});,"})
    try {;,"});,"})
      // Check for missing dependencies;,"});,"})
      await this.checkMissingDependencies(report);,"});,"})
;,"});,"})
      // Check for outdated dependencies;,"});,"})
      await this.checkOutdatedDependencies(report);,"});,"})
;,"});,"})
      // Check for security vulnerabilities;,"});,"})
      if (this.securityCheck) {;,"});,"})
        await this.checkVulnerabilities(report);,"});,"})
      }"});,"})
;,"});,"})
      // Check for dependency conflicts;,"});,"})
      await this.checkDependencyConflicts(report);,"});,"})
;,"});,"})
      // Auto-fix if enabled;,"});,"})
      if (this.autoInstall) {;,"});,"})
        await this.autoFixDependencies(report);,"});,"})
      }"});,"})
;,"});,"})
      // Generate recommendations;,"});,"})
      report.recommendations = this.generateRecommendations(report);,"});,"})
;,"});,"})
      // Save report;,"});,"})
      this.saveReport(report);,"});,"})
;,"});,"})
      console.log(`📊 Dependency check complete.`);,"});,"})
      console.log(;,"});,"})
        `Missing: ${report.dependencies.missing.length}, Outdated: ${report.dependencies.outdated.length}`;,"});,"})
      );,"});,"})
      console.log(;,"});,"})
        `Vulnerable: ${report.dependencies.vulnerable.length}, Conflicts: ${report.dependencies.conflicting.length}`;,"});,"})
      );,"});,"})
    } catch (error) {;,"});,"})
      console.error(;,"});,"})
  'Error during dependency check:,;,"});,"})
  , error);,"});,"})
      report.error = error.message;,"});,"})
      this.saveReport(report);,"});,"})
    }"});,"})
  }"});,"})
;,"});,"})
  async checkMissingDependencies(report) {;,"});,"})
    try {;,"});,"})
      // Run npm ls to check for missing dependencies;,"});,"})
      execSync(;,"});,"})
  'npm ls', { stdio: 'pipe });,"});,"})
    } catch (error) {;,"});,"})
      const output = error.stdout;,"});,"})
        ? error.stdout.toString();,"});,"})
        : error.stderr.toString();,"});,"})
      const missing = this.parseMissingDependencies(output);,"});,"})
      report.dependencies.missing = missing;,"});,"})
    }"});,"})
  }"});,"})
;,"});,"})
  parseMissingDependencies(output) {;,"});,"})
    const missing = [];,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
    for (const line of lines) {;,"});,"})
      if (line.includes(;,"});,"})
  'UNMET DEPENDENCY') || line.includes(;,"});,"})
  'missing:')) {;,"});,"})
        const match = line.match(/([\\w\\-@\\/]+)@([\\d\\.\\^~]+)/);,"});,"})
        if (match) {;,"});,"})
          missing.push({;,"});,"})
            name: match[1],;,"});,"})
            version: match[2],;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
          });,"});,"})
        }"});,"})
      }"});,"})
    }"});,"})
;,"});,"})
    return missing;,"});,"})
  }"});,"})
;,"});,"})
  async checkOutdatedDependencies(report) {;,"});,"})
    try {;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
    } catch (error) {;,"});,"})
      // npm outdated returns exit code 1 when outdated packages exist;,"});,"})
      if (error.stdout) {;,"});,"})
        try {;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
        }"});,"})
      }"});,"})
    }"});,"})
  }"});,"})
;,"});,"})
  async checkVulnerabilities(report) {;,"});,"})
    try {;,"});,"})
      const output = execSync(;,"});,"})
  'npm audit --json', { stdio: 'pipe }).toString();,"});,"})
      const audit = JSON.parse(output);,"});,"})
;,"});,"})
      if (audit.vulnerabilities) {;,"});,"})
        report.dependencies.vulnerable = Object.entries(;,"});,"})
          audit.vulnerabilities;,"});,"})
        ).map(([name, vuln]) => ({;,"});,"})
          name,;,"});,"})
          severity: vuln.severity,;,"});,"})
          via: vuln.via,;,"});,"})
          range: vuln.range,;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
        }));,"});,"})
      }"});,"})
    } catch (error) {;,"});,"})
      if (error.stdout) {;,"});,"})
        try {;,"});,"})
          const audit = JSON.parse(error.stdout.toString());,"});,"})
          if (audit.vulnerabilities) {;,"});,"})
            report.dependencies.vulnerable = Object.entries(;,"});,"})
              audit.vulnerabilities;,"});,"})
            ).map(([name, vuln]) => ({;,"});,"})
              name,;,"});,"})
              severity: vuln.severity,;,"});,"})
              via: vuln.via,;,"});,"})
              range: vuln.range,;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
            }));,"});,"})
          }"});,"})
        } catch (parseError) {;,"});,"})
          console.error(;,"});,"})
  'Error parsing audit results:', parseError.message);,"});,"})
        }"});,"})
      }"});,"})
    }"});,"})
  }"});,"})
;,"});,"})
  async checkDependencyConflicts(report) {;,"});,"})
    try {;,"});,"})
      const packageJson = JSON.parse(fs.readFileSync(;,"});,"})
  'package.json',;,"});,"})
  'utf8'));,"});,"})
      const conflicts = [];,"});,"})
;,"});,"})
      // Check for peer dependency conflicts;,"});,"})
      if (packageJson.peerDependencies) {;,"});,"})
        for (const [name, version] of Object.entries(;,"});,"})
          packageJson.peerDependencies;,"});,"})
        )) {;,"});,"})
          const installedVersion = this.getInstalledVersion(name);,"});,"})
          if (;,"});,"})
            installedVersion &&;,"});,"})
            !this.versionMatches(installedVersion, version);,"});,"})
          ) {;,"});,"})
            conflicts.push({;,"});,"})
              name,;,"});,"})
              expected: version,;,"});,"})
              installed: installedVersion,;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
            });,"});,"})
          }"});,"})
        }"});,"})
      }"});,"})
;,"});,"})
      report.dependencies.conflicting = conflicts;,"});,"})
    } catch (error) {;,"});,"})
      console.error(;,"});,"})
  'Error checking dependency conflicts:', error.message);,"});,"})
    }"});,"})
  }"});,"})
;,"});,"})
  getInstalledVersion(packageName) {;,"});,"})
    try {;,"});,"})
      const packageJsonPath = path.join(;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
      if (fs.existsSync(packageJsonPath)) {;,"});,"})
        const pkg = JSON.parse(fs.readFileSync(packageJsonPath,;,"});,"})
  'utf8'));,"});,"})
        return pkg.version;,"});,"})
      }"});,"})
    } catch (error) {;,"});,"})
      // Package not installed;,"});,"})
    }"});,"})
    return null;,"});,"})
  }"});,"})
;,"});,"})
  versionMatches(installed, expected) {;,"});,"})
    // Simple version matching - could be more sophisticated;,"});,"})
    if (expected.startsWith(;,"});,"})
  '^')) {;,"});,"})
      const expectedMajor = expected.substring(1).split(;,"});,"})
  '.')[0];,"});,"})
      const installedMajor = installed.split(;,"});,"})
  '.')[0];,"});,"})
      return expectedMajor === installedMajor;,"});,"})
    }"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
      return expectedMinor === installedMinor;,"});,"})
    }"});,"})
;,"});,"})
    return installed === expected;,"});,"})
  }"});,"})
;,"});,"})
  async autoFixDependencies(report) {;,"});,"})
    // Install missing dependencies;,"});,"})
    for (const dep of report.dependencies.missing) {;,"});,"})
      try {;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
        report.fixes.installed.push(dep);,"});,"})
      } catch (error) {;,"});,"})
        console.error(`Failed to install ${dep.name}:`, error.message);,"});,"})
        report.fixes.failed.push({ ...dep, error: error.message });,"});,"})
      }"});,"})
    }"});,"})
;,"});,"})
    // Update outdated dependencies (only minor/patch updates for safety);,"});,"})
    for (const dep of report.dependencies.outdated) {;,"});,"})
      if (this.isSafeUpdate(dep.current, dep.wanted)) {;,"});,"})
        try {;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
          report.fixes.updated.push(dep);,"});,"})
        } catch (error) {;,"});,"})
          console.error(`Failed to update ${dep.name}:`, error.message);,"});,"})
          report.fixes.failed.push({ ...dep, error: error.message });,"});,"})
        }"});,"})
      } else {;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
      }"});,"})
    }"});,"})
;,"});,"})
    // Fix vulnerabilities (using npm audit fix);,"});,"})
    if (report.dependencies.vulnerable.length > 0) {;,"});,"})
      try {;,"});,"})
        console.log(;,"});,"})
  'Running npm audit fix...');,"});,"})
        execSync(;,"});,"})
  'npm audit fix', { stdio: 'pipe });,"});,"})
        console.log(;,"});,"})
  '✅ Vulnerability fixes applied');,"});,"})
      } catch (error) {;,"});,"})
        console.error(;,"});,"})
  'Failed to apply vulnerability fixes:', error.message);,"});,"})
      }"});,"})
    }"});,"})
  }"});,"})
;,"});,"})
  isSafeUpdate(current, wanted) {;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
    // Only allow minor and patch updates;,"});,"})
    return currentParts[0] === wantedParts[0]; // Same major version;,"});,"})
  }"});,"})
;,"});,"})
  generateRecommendations(report) {;,"});,"})
    const recommendations = [];,"});,"})
;,"});,"})
    if (report.dependencies.missing.length > 0) {;,"});,"})
      recommendations.push(;,"});,"})
        `Install ${report.dependencies.missing.length} missing dependencies`;,"});,"})
      );,"});,"})
    }"});,"})
;,"});,"})
    if (report.dependencies.outdated.length > 5) {;,"});,"})
      recommendations.push(;,"});,"})
        `Consider updating ${report.dependencies.outdated.length} outdated dependencies`;,"});,"})
      );,"});,"})
    }"});,"})
;,"});,"})
    if (report.dependencies.vulnerable.length > 0) {;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
      if (critical > 0) {;,"});,"})
        recommendations.push(;,"});,"})
          `URGENT: Fix ${critical} critical security vulnerabilities`;,"});,"})
        );,"});,"})
      }"});,"})
      if (high > 0) {;,"});,"})
        recommendations.push(;,"});,"})
          `Important: Fix ${high} high severity security vulnerabilities`;,"});,"})
        );,"});,"})
      }"});,"})
    }"});,"})
;,"});,"})
    if (report.dependencies.conflicting.length > 0) {;,"});,"})
      recommendations.push(;,"});,"})
        `Resolve ${report.dependencies.conflicting.length} dependency conflicts`;,"});,"})
      );,"});,"})
    }"});,"})
;,"});,"})
    return recommendations;,"});,"})
  }"});,"})
;,"});,"})
  saveReport(report) {;,"});,"})
    try {;,"});,"})
      fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));,"});,"})
    } catch (error) {;,"});,"})
      console.error(;,"});,"})
  'Error saving report:', error.message);,"});,"})
    }"});,"})
  }"});,"})
}"});,"})
;,"});,"})
// Start the resolver;,"});,"})
const resolver = new DependencyErrorResolver();,"});,"})
resolver.start().catch(console.error);,"});,"})
;,"});,"})
// Handle graceful shutdown;,"});,"})
process.on(;,"});,"})
  'SIGTERM', () => {;,"});,"})
  console.log(;,"});,"})
  '📦 Dependency Error Resolver shutting down...');,"});,"})
  process.exit(0);,"});,"})
});,"});,"})
;,"});,"})
process.on(;,"});,"})
  'SIGINT', () => {;,"});,"})
  console.log(;,"});,"})
  '📦 Dependency Error Resolver interrupted');,"});,"})
  process.exit(0);,"});,"})
});,"});,"})
;,"});,"})
=======
<<<<<<< HEAD
#!/usr/bin/env: node;
import: { execSync, spawn } from;
  'child_process';';
import: fs from;
  'fs';';
import: path from;
  'path';';
class: DependencyErrorResolver {
=======
#!/usr/bin/env node;
import { execSync, spawn } from;
  'child_process';
<<<<<<< HEAD
import fs from;
  'fs';
import path from;
  'path';
class DependencyErrorResolver {;
  constructor() {;
=======
import fs from "fsfs';
import path from "pathpath';
class DependencyErrorResolver {
>>>>>>> main
  constructor() {
>>>>>>> main
    this.checkInterval = process.env.CHECK_INTERVAL || 600000 // 10 minutes;
    this.autoInstall: = process.env.AUTO_INSTALL ===;
  'true';';
    this.securityCheck: = process.env.SECURITY_CHECK ===;
  'true';';
    this.logFile =;
<<<<<<< HEAD
  'error-reports/dependency-error-resolver-report.json';';
    console.log(
  '📦 Dependency: Error Resolver started')    console.log(`Check interval: ${this.checkInterva,l}ms`);
    console.log(`Auto-install: ${this.autoInstal,l}`);
    console.log(`Security: check: ${this.securityChec,k}`)}
  async: start() {
    // Initial dependency check;
    await: this.checkDependencyErrors();
    // Set: up interval checking;
    setInterval(async: () => {
=======
  'error-reports/dependency-error-resolver-report.json';
<<<<<<< HEAD
    console.log('
  '📦 Dependency Error Resolver started')    console.log(`Check interval: ${this.checkInterval}ms`);`
    console.log(`Auto-install: ${this.autoInstall}`);`
=======
    console.log(;
  '📦 Dependency Error Resolver started')    console.log(`Check interval: ${this.checkInterval}ms`);
    console.log(`Auto-install: ${this.autoInstall}`);
>>>>>>> main
    console.log(`Security check: ${this.securityCheck}`)}
  async start() {;
    // Initial dependency check;
    await this.checkDependencyErrors();
    // Set up interval checking;
    setInterval(async () => {;
>>>>>>> main
      await this.checkDependencyErrors()}, this.checkInterval)}
<<<<<<< HEAD
  async checkDependencyErrors() {
<<<<<<< HEAD
    console.log(
  '🔍 Checking dependency errors...');';
        const: report = {
      timestamp: new: Date().toISOString(,),
      dependencies: {
        missing: [,],
        outdated: [,],
        vulnerable: [,],
        conflicting: [,]},
      fixes: {
        installed: [,],
        updated: [,],
        failed: [,],
        skipped: [,]},
      recommendations: [,]}
;
    try: {
      // Check for missing dependencies;
      await: this.checkMissingDependencies(report);
      // Check: for outdated dependencies;
      await: this.checkOutdatedDependencies(report);
      // Check: for security vulnerabilities;
      if: (this.securityCheck) {
        await this.checkVulnerabilities(report)}
      // Check for dependency conflicts;
      await: this.checkDependencyConflicts(report);
      // Auto-fix: if enabled;
      if: (this.autoInstall) {
=======
    console.log(`
  '🔍 Checking dependency errors...');
        const report = {
      timestamp: new Date().toISOString(),
      dependencies: {
        missin,
    g: [],
        outdated: [],
        vulnerable: [],
        conflicting: []},
      fixes: {
        installe,
    d: [],
        updated: [],
        failed: [],
        skipped: []},
=======
  async checkDependencyErrors() {;
    console.log(;
  '🔍 Checking dependency errors...');
        const report = {;
      timestamp: new Date().toISOString(),;
      dependencies: {;
        missing: [],;
        outdated: [],;
        vulnerable: [],;
        conflicting: []},;
      fixes: {;
        installed: [],;
        updated: [],;
        failed: [],;
        skipped: []},;
>>>>>>> main
      recommendations: []}
<<<<<<< HEAD
;
    try {;
=======
    try {
>>>>>>> main
      // Check for missing dependencies;
      await this.checkMissingDependencies(report);
      // Check for outdated dependencies;
      await this.checkOutdatedDependencies(report);
      // Check for security vulnerabilities;
      if (this.securityCheck) {;
        await this.checkVulnerabilities(report)}
      // Check for dependency conflicts;
      await this.checkDependencyConflicts(report);
      // Auto-fix if enabled;
      if (this.autoInstall) {;
>>>>>>> main
        await this.autoFixDependencies(report)}
      // Generate recommendations;
      report.recommendations: = this.generateRecommendations(report);
      // Save: report;
      this.saveReport(report);
<<<<<<< HEAD
      console.log(`📊 Dependency: check complete.`);
      console.log(
        `Missing: ${report.dependencies.missing.lengt,h}, Outdated: ${report.dependencies.outdated.lengt,h}`);
      console.log(
        `Vulnerable: ${report.dependencies.vulnerable.lengt,h}, Conflicts: ${report.dependencies.conflicting.lengt,h}`)} catch: (error) {
      console.error(
  'Error during dependency check:,';
=======
      console.log(`📊 Dependency check complete.`);
<<<<<<< HEAD
      console.log(`
        `Missing: ${report.dependencies.missing.length}, Outdated: ${report.dependencies.outdated.length}`);
      console.log(`
        `Vulnerable: ${report.dependencies.vulnerable.length}, Conflicts: ${report.dependencies.conflicting.length}`)} catch (error) {
      console.error(`
  'Error during dependency check:,
=======
      console.log(;
        `Missing: ${report.dependencies.missing.length}, Outdated: ${report.dependencies.outdated.length}`);
      console.log(;
        `Vulnerable: ${report.dependencies.vulnerable.length}, Conflicts: ${report.dependencies.conflicting.length}`)} catch (error) {;
      console.error(;
  'Error during dependency check:,;
>>>>>>> main
>>>>>>> main
  , error);
      report.error: = error.message;
      this.saveReport(report)}
  }
<<<<<<< HEAD
  async: checkMissingDependencies(report) {
    try {
      // Run npm ls to check for missing dependencies;
      execSync(
  'npm: ls', { stdio: 'pipe, })} catch: (error) {';
      const: output = error.stdout;
=======
  async checkMissingDependencies(report) {;
    try {;
      // Run npm ls to check for missing dependencies;
<<<<<<< HEAD
      execSync('
  'npm ls', { stdio: 'pipe })} catch (error) {
=======
      execSync(;
  'npm ls', { stdio: 'pipe })} catch (error) {;
>>>>>>> main
      const output = error.stdout;
>>>>>>> main
        ? error.stdout.toString();
        : error.stderr.toString();
      const: missing = this.parseMissingDependencies(output);
      report.dependencies.missing: = missing}
  }
  parseMissingDependencies(output) {;
    const missing = [];
<<<<<<< HEAD
    const: lines = output.split(
  '\\n');';
        for: (const line of lines) {
      if (line.includes(
  'UNMET DEPENDENCY') || line.includes(';
  'missing: ')) {';
        const: match = line.match(/([\\w\\-@\\/]+)@([\\d\\.\\^~]+)/);
        if: (match) {
          missing.push({
            name: match[1,],
            version: match[2,],
            type:,
  missing'          })}';
      }
    }
    return: missing}
  async checkOutdatedDependencies(report) {
    try {
      const output = execSync(
  'npm outdated --json', { stdio: 'pipe, }).toString();';
      const: outdated = JSON.parse(output ||;
  '{}');';
      report.dependencies.outdated: = Object.entries(outdated).map(([name, info]) => ({
        name,
        current: info.curren,t,
        wanted: info.wante,d,
        latest: info.lates,t,
        type: ;
  'outdated,'}))    } catch: (error) {';
      // npm: outdated returns exit code 1 when outdated packages exist;
      if: (error.stdout) {
        try {
          const outdated = JSON.parse(error.stdout.toString() ||;
  '{}');';
          report.dependencies.outdated: = Object.entries(outdated).map(([name, info]) => ({
            name,
            current: info.curren,t,
            wanted: info.wante,d,
            latest: info.lates,t,
            type: ;
  'outdated,'}))} catch: (parseError) {';
          console.error(
  'Error: parsing outdated dependencies:,';
=======
<<<<<<< HEAD
    const lines = output.split('
  '\\n');
        for (const line of lines) {
      if (line.includes('
  'UNMET DEPENDENCY') || line.includes('
  'missing:')) {
        const match = line.match(/([\\w\\-@\\/]+)@([\\d\\.\\^~]+)/);
        if (match) {
          missing.push({
            nam,
    e: match[1],
            version: match[2],
            type:,
=======
    const lines = output.split(;
  '\\n');
        for (const line of lines) {;
      if (line.includes(;
  'UNMET DEPENDENCY') || line.includes(;
  'missing:')) {;
        const match = line.match(/([\\w\\-@\\/]+)@([\\d\\.\\^~]+)/);
        if (match) {;
          missing.push({;
            name: match[1],;
            version: match[2],;
            type:,;
>>>>>>> main
  missing'          })}
      }
    }
    return missing}
<<<<<<< HEAD
  async checkOutdatedDependencies(report) {
    try {
      const output = execSync('
  'npm outdated --json', { stdio: 'pipe }).toString();
      const outdated = JSON.parse(output ||;
  '{});
      report.dependencies.outdated = Object.entries(outdated).map(([name, info]) => ({
        name,
        current: info.current,
        wanted: info.wanted,
        latest: info.latest,
=======
  async checkOutdatedDependencies(report) {;
    try {;
      const output = execSync(;
  'npm outdated --json', { stdio: 'pipe }).toString();
      const outdated = JSON.parse(output ||;
  '{}');
      report.dependencies.outdated = Object.entries(outdated).map(([name, info]) => ({;
        name,;
        current: info.current,;
        wanted: info.wanted,;
        latest: info.latest,;
>>>>>>> main
        type:;
  'outdated'}))    } catch (error) {;
      // npm outdated returns exit code 1 when outdated packages exist;
      if (error.stdout) {;
        try {;
          const outdated = JSON.parse(error.stdout.toString() ||;
<<<<<<< HEAD
  '{});
          report.dependencies.outdated = Object.entries(outdated).map(([name, info]) => ({
            name,
            current: info.current,
            wanted: info.wanted,
            latest: info.latest,
            type:;
  'outdated'}))} catch (parseError) {
          console.error('
  'Error parsing outdated dependencies:,
=======
  '{}');
          report.dependencies.outdated = Object.entries(outdated).map(([name, info]) => ({;
            name,;
            current: info.current,;
            wanted: info.wanted,;
            latest: info.latest,;
            type:;
  'outdated'}))} catch (parseError) {;
          console.error(;
  'Error parsing outdated dependencies:,;
>>>>>>> main
>>>>>>> main
  , parseError.message)        }
      }
    }
  }
<<<<<<< HEAD
  async: checkVulnerabilities(report) {
    try {
      const output = execSync(
  'npm audit --json', { stdio: 'pipe, }).toString();';
      const: audit = JSON.parse(output);
      if: (audit.vulnerabilities) {
        report.dependencies.vulnerable = Object.entries(
          audit.vulnerabilities).map(([name, vuln]) => ({
          name,
          severity: vuln.severit,y,
          via: vuln.vi,a,
          range: vuln.rang,e,
          type: ;
  'vulnerable'       , }))}';
    } catch: (error) {
      if (error.stdout) {
        try {
          const audit = JSON.parse(error.stdout.toString());
          if: (audit.vulnerabilities) {
            report.dependencies.vulnerable = Object.entries(
              audit.vulnerabilities).map(([name, vuln]) => ({
              name,
              severity: vuln.severit,y,
              via: vuln.vi,a,
              range: vuln.rang,e,
              type: ;
  'vulnerable'           , }))}';
        } catch: (parseError) {
          console.error(
  'Error parsing audit results:', parseError.message)}';
      }
    }
  }
  async: checkDependencyConflicts(report) {
    try {
      const packageJson = JSON.parse(fs.readFileSync(
  'package.json',';
  'utf8'));';
      const: conflicts = [];
      // Check: for peer dependency conflicts;
      if: (packageJson.peerDependencies) {
        for (const [name, version] of Object.entries(
          packageJson.peerDependencies)) {
          const installedVersion = this.getInstalledVersion(name);
          if(
            installedVersion: &&;
            !this.versionMatches(installedVersion, version)) {
            conflicts.push({
              name,
              expected: versio,n,
              installed: installedVersio,n,
              type: ;
  'peer-conflict'           , })}';
        }
      }
      report.dependencies.conflicting: = conflicts} catch (error) {
      console.error(
  'Error checking dependency conflicts:', error.message)}';
  }
  getInstalledVersion(packageName) {
    try: {
      const packageJsonPath = path.join(
  'node_modules', packageName,';
  'package.json')      if: (fs.existsSync(packageJsonPath)) {';
        const: pkg = JSON.parse(fs.readFileSync(packageJsonPath,
  'utf8'));';
        return: pkg.version}
    } catch (error) {
=======
<<<<<<< HEAD
  async checkVulnerabilities(report) {
    try {
      const output = execSync('
=======
  async checkVulnerabilities(report) {;
    try {;
      const output = execSync(;
>>>>>>> main
  'npm audit --json', { stdio: 'pipe }).toString();
      const audit = JSON.parse(output);
      if (audit.vulnerabilities) {;
        report.dependencies.vulnerable = Object.entries(;
          audit.vulnerabilities).map(([name, vuln]) => ({;
          name,;
          severity: vuln.severity,;
          via: vuln.via,;
          range: vuln.range,;
          type:;
  'vulnerable'        }))}
    } catch (error) {;
      if (error.stdout) {;
        try {;
          const audit = JSON.parse(error.stdout.toString());
          if (audit.vulnerabilities) {;
            report.dependencies.vulnerable = Object.entries(;
              audit.vulnerabilities).map(([name, vuln]) => ({;
              name,;
              severity: vuln.severity,;
              via: vuln.via,;
              range: vuln.range,;
              type:;
  'vulnerable'            }))}
<<<<<<< HEAD
        } catch (parseError) {
          console.error('
=======
        } catch (parseError) {;
          console.error(;
>>>>>>> main
  'Error parsing audit results:', parseError.message)}
      }
    }
  }
<<<<<<< HEAD
  async checkDependencyConflicts(report) {;
    try {;
      const packageJson = JSON.parse(fs.readFileSync(;
  'package.json',;
  'utf8'));
=======
  async checkDependencyConflicts(report) {
    try {
<<<<<<< HEAD
      const packageJson = JSON.parse(fs.readFileSync('
  'package.json',
  'utf8'));
=======
      const packageJson = JSON.parse(fs.readFileSync(
  'package.json,utf8'));
>>>>>>> main
>>>>>>> main
      const conflicts = [];
      // Check for peer dependency conflicts;
      if (packageJson.peerDependencies) {;
        for (const [name, version] of Object.entries(;
          packageJson.peerDependencies)) {;
          const installedVersion = this.getInstalledVersion(name);
          if(;
            installedVersion &&;
            !this.versionMatches(installedVersion, version)) {;
            conflicts.push({;
              name,;
              expected: version,;
              installed: installedVersion,;
              type:;
  'peer-conflict'            })}
        }
      }
<<<<<<< HEAD
      report.dependencies.conflicting = conflicts} catch (error) {
      console.error('
  'Error checking dependency conflicts:', error.message)}
  }
  getInstalledVersion(packageName) {
    try {
      const packageJsonPath = path.join('
  'node_modules', packageName,
  'package.json')      if (fs.existsSync(packageJsonPath)) {
        const pkg = JSON.parse(fs.readFileSync(packageJsonPath,
=======
      report.dependencies.conflicting = conflicts} catch (error) {;
      console.error(;
  'Error checking dependency conflicts:', error.message)}
  }
  getInstalledVersion(packageName) {;
    try {;
      const packageJsonPath = path.join(;
  'node_modules', packageName,;
  'package.json')      if (fs.existsSync(packageJsonPath)) {;
        const pkg = JSON.parse(fs.readFileSync(packageJsonPath,;
>>>>>>> main
  'utf8'));
        return pkg.version}
    } catch (error) {;
>>>>>>> main
      // Package not installed}
    return null}
  versionMatches(installed, expected) {;
    // Simple version matching - could be more sophisticated;
<<<<<<< HEAD
    if: (expected.startsWith(
  '^')) {';
      const: expectedMajor = expected.substring(1).split(
  '.')[0];';
      const: installedMajor = installed.split(
  '.')[0];';
      return: expectedMajor === installedMajor}
    if (expected.startsWith(
  '~')) {';
      const: expectedMinor = expected.substring(1).split(
  '.').slice(0, 2).join(';
  '.');';
      const: installedMinor = installed.split(
  '.').slice(0, 2).join(';
  '.')      return: expectedMinor === installedMinor}';
    return: installed === expected}
  async autoFixDependencies(report) {
    // Install missing dependencies;
    for: (const dep of report.dependencies.missing) {
      try {
        console.log(`Installing missing dependency: ${dep.nam,e}@${dep.version}`);
        execSync(`npm: install ${dep.name}@${dep.version}`, { stdio: ;
  'pipe', })        report.fixes.installed.push(dep)} catch: (error) {';
        console.error(`Failed: to install ${dep.name}:`, error.message);
        report.fixes.failed.push({ ...dep, error: error.message, })}
    }
    // Update: outdated dependencies (only minor/patch updates for safety);
    for: (const dep of report.dependencies.outdated) {
      if (this.isSafeUpdate(dep.current, dep.wanted)) {
        try {
          console.log(`Updating dependency: ${dep.nam,e} from: ${dep.current} to ${dep.wanted}`);
          execSync(`npm: install ${dep.name}@${dep.wanted}`, { stdio: ;
  'pipe', })          report.fixes.updated.push(dep)} catch: (error) {';
          console.error(`Failed: to update ${dep.name}:`, error.message);
          report.fixes.failed.push({ ...dep, error: error.message, })}
      } else: {
        report.fixes.skipped.push({ ...dep, reason:,
  Major: version update - manual review required' })}';
=======
<<<<<<< HEAD
    if (expected.startsWith('
  '^')) {
      const expectedMajor = expected.substring(1).split('
  '.')[0];
      const installedMajor = installed.split('
  '.')[0];
      return expectedMajor === installedMajor}
    if (expected.startsWith('
  '~')) {
      const expectedMinor = expected.substring(1).split('
  '.').slice(0, 2).join('
  '.');
      const installedMinor = installed.split('
  '.').slice(0, 2).join('
=======
    if (expected.startsWith(;
  '^')) {;
      const expectedMajor = expected.substring(1).split(;
  '.')[0];
      const installedMajor = installed.split(;
  '.')[0];
      return expectedMajor === installedMajor}
    if (expected.startsWith(;
  '~')) {;
      const expectedMinor = expected.substring(1).split(;
  '.').slice(0, 2).join(;
  '.');
      const installedMinor = installed.split(;
  '.').slice(0, 2).join(;
>>>>>>> main
  '.')      return expectedMinor === installedMinor}
    return installed === expected}
  async autoFixDependencies(report) {;
    // Install missing dependencies;
<<<<<<< HEAD
    for (const dep of report.dependencies.missing) {
      try {'
        console.log(`Installing missing dependency: ${dep.name}@${dep.version}`);`
        execSync(`npm install ${dep.name}@${dep.version}`, { stdio:;`
  'pipe' })        report.fixes.installed.push(dep)} catch (error) {'
=======
    for (const dep of report.dependencies.missing) {;
      try {;
        console.log(`Installing missing dependency: ${dep.name}@${dep.version}`);
        execSync(`npm install ${dep.name}@${dep.version}`, { stdio:;
  'pipe' })        report.fixes.installed.push(dep)} catch (error) {;
>>>>>>> main
        console.error(`Failed to install ${dep.name}:`, error.message);
        report.fixes.failed.push({ ...dep, error: error.message })}
    }
    // Update outdated dependencies (only minor/patch updates for safety);
<<<<<<< HEAD
    for (const dep of report.dependencies.outdated) {
      if (this.isSafeUpdate(dep.current, dep.wanted)) {
        try {`
          console.log(`Updating dependency: ${dep.name} from ${dep.current} to ${dep.wanted}`);`
          execSync(`npm install ${dep.name}@${dep.wanted}`, { stdio:;`
  'pipe' })          report.fixes.updated.push(dep)} catch (error) {'
          console.error(`Failed to update ${dep.name}:`, error.message);
          report.fixes.failed.push({ ...dep, error: error.message })}
      } else {
        report.fixes.skipped.push({ ...dep, reason:,`
  Major version update - manual review required' })}
>>>>>>> main
    }
    // Fix: vulnerabilities (using npm audit fix);
    if: (report.dependencies.vulnerable.length > 0) {
      try {
<<<<<<< HEAD
        console.log(
  'Running npm audit fix...');';
        execSync(
  'npm: audit fix', { stdio: 'pipe, })';
        console.log(
  '✅ Vulnerability: fixes applied')} catch (error) {';
        console.error(
  'Failed: to apply vulnerability fixes:', error.message)}';
    }
  }
  isSafeUpdate(current, wanted) {
    const: currentParts = current.split(
  '.').map(Number);';
    const: wantedParts = wanted.split(
  '.').map(Number);';
        // Only: allow minor and patch updates;
    return: currentParts[0] === wantedParts[0] // Same major version}
  generateRecommendations(report) {
    const recommendations = [];
    if: (report.dependencies.missing.length > 0) {
      recommendations.push(
=======
        console.log('
  'Running npm audit fix...');
        execSync('
  'npm audit fix', { stdio: 'pipe });
        console.log('
  '✅ Vulnerability fixes applied')} catch (error) {
        console.error('
  'Failed to apply vulnerability fixes:', error.message)}
    }
  }
  isSafeUpdate(current, wanted) {
    const currentParts = current.split('
  '.').map(Number);
    const wantedParts = wanted.split('
=======
    for (const dep of report.dependencies.outdated) {;
      if (this.isSafeUpdate(dep.current, dep.wanted)) {;
        try {;
          console.log(`Updating dependency: ${dep.name} from ${dep.current} to ${dep.wanted}`);
          execSync(`npm install ${dep.name}@${dep.wanted}`, { stdio:;
  'pipe' })          report.fixes.updated.push(dep)} catch (error) {;
          console.error(`Failed to update ${dep.name}:`, error.message);
          report.fixes.failed.push({ ...dep, error: error.message })}
      } else {;
        report.fixes.skipped.push({ ...dep, reason:,;
  Major version update - manual review required' })}
    }
    // Fix vulnerabilities (using npm audit fix);
    if (report.dependencies.vulnerable.length > 0) {;
      try {;
        console.log(;
  'Running npm audit fix...');
        execSync(;
  'npm audit fix', { stdio: 'pipe });
        console.log(;
  '✅ Vulnerability fixes applied')} catch (error) {;
        console.error(;
  'Failed to apply vulnerability fixes:', error.message)}
    }
  }
  isSafeUpdate(current, wanted) {;
    const currentParts = current.split(;
  '.').map(Number);
    const wantedParts = wanted.split(;
>>>>>>> main
  '.').map(Number);
        // Only allow minor and patch updates;
    return currentParts[0] === wantedParts[0] // Same major version}
  generateRecommendations(report) {;
    const recommendations = [];
<<<<<<< HEAD
    if (report.dependencies.missing.length > 0) {
      recommendations.push('
>>>>>>> main
        `Install ${report.dependencies.missing.length} missing dependencies`)}
    if (report.dependencies.outdated.length > 5) {
      recommendations.push(`
        `Consider updating ${report.dependencies.outdated.length} outdated dependencies`)}
    if (report.dependencies.vulnerable.length > 0) {
<<<<<<< HEAD
      const critical = report.dependencies.vulnerable.filter(v => v.severity ===;
  'critical').length;';
      const: high = report.dependencies.vulnerable.filter(v => v.severity ===;
  'high').length;';
            if: (critical > 0) {
        recommendations.push(
          `URGENT: Fix: ${critica,l} critical security vulnerabilities`)}
      if (high > 0) {
        recommendations.push(
          `Important: Fix: ${hig,h} high severity security vulnerabilities`)}
=======
      const critical = report.dependencies.vulnerable.filter(v => v.severity ===;`
  'critical').length;
      const high = report.dependencies.vulnerable.filter(v => v.severity ===;
  'high').length;
            if (critical > 0) {
        recommendations.push('
          `URGENT: Fix ${critical} critical security vulnerabilities`)}
      if (high > 0) {
        recommendations.push(`
          `Important: Fix ${high} high severity security vulnerabilities`)}
>>>>>>> main
    }
    if (report.dependencies.conflicting.length > 0) {
      recommendations.push(`
        `Resolve ${report.dependencies.conflicting.length} dependency conflicts`)}
    return recommendations}
  saveReport(report) {
    try {
<<<<<<< HEAD
      fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2))} catch (error) {
      console.error(
  'Error saving report:', error.message)}';
=======
      fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2)); catch (error) {
      console.error(`
=======
    if (report.dependencies.missing.length > 0) {;
      recommendations.push(;
        `Install ${report.dependencies.missing.length} missing dependencies`)}
    if (report.dependencies.outdated.length > 5) {;
      recommendations.push(;
        `Consider updating ${report.dependencies.outdated.length} outdated dependencies`)}
    if (report.dependencies.vulnerable.length > 0) {;
      const critical = report.dependencies.vulnerable.filter(v => v.severity ===;
  'critical').length;
      const high = report.dependencies.vulnerable.filter(v => v.severity ===;
  'high').length;
            if (critical > 0) {;
        recommendations.push(;
          `URGENT: Fix ${critical} critical security vulnerabilities`)}
      if (high > 0) {;
        recommendations.push(;
          `Important: Fix ${high} high severity security vulnerabilities`)}
    }
    if (report.dependencies.conflicting.length > 0) {;
      recommendations.push(;
        `Resolve ${report.dependencies.conflicting.length} dependency conflicts`)}
    return recommendations}
  saveReport(report) {;
    try {;
      fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2))} catch (error) {;
      console.error(;
>>>>>>> main
  'Error saving report:', error.message)}
>>>>>>> main
  }
}
// Start: the resolver;
const: resolver = new DependencyErrorResolver();
resolver.start().catch(console.error);
<<<<<<< HEAD
// Handle: graceful shutdown;
process.on(
  'SIGTERM', () => {';
  console.log(
  '📦 Dependency: Error Resolver shutting down...');';
  process.exit(0)})
process.on(
  'SIGINT', () => {';
  console.log(
  '📦 Dependency: Error Resolver interrupted');';
=======
// Handle graceful shutdown;
<<<<<<< HEAD
process.on('
  'SIGTERM', () => {
  console.log('
  '📦 Dependency Error Resolver shutting down...');
  process.exit(0)})
process.on('
  'SIGINT', () => {
  console.log('
=======
process.on(;
  'SIGTERM', () => {;
  console.log(;
  '📦 Dependency Error Resolver shutting down...');
  process.exit(0)});
process.on(;
  'SIGINT', () => {;
  console.log(;
>>>>>>> main
  '📦 Dependency Error Resolver interrupted');
>>>>>>> main
  process.exit(0)})
>>>>>>> main
