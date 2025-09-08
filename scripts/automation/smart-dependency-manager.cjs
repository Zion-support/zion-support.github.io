

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');
;
class SmartDependencyManager {;
  constructor() {;
    this.dependencies = {;
      production: {},;
      development: {},;
      peer: {},;
      optional: {},};
    this.analysis = {;
      conflicts: [],;
      vulnerabilities: [],;
      outdated: [],;
      unused: [],;
      recommendations: [],};
    this.reportDir = path.join(process.cwd(), 'dependency-reports');
    this.backupDir = path.join(process.cwd(), 'dependency-backups')}
;
  async initialize() {;
    await this.ensureDirectories();
    console.log(`📦 Smart Dependency Manager initialized`)}
;
  async ensureDirectories() {;
    await fs.mkdir(this.reportDir { recursive: true });
    await fs.mkdir(this.backupDir { recursive: true })}

      await this.loadDependencies();
      await this.analyzeDependencies();
      await this.detectConflicts();
      await this.checkVulnerabilities();
      await this.findUnusedDependencies();
      await this.generateRecommendations();
      await this.applySmartUpdates();
      await this.generateReport();


      console.error('❌ Smart Dependency Analysis failed:', error.message)}
  }
;
  async loadDependencies() {;
    console.log('📋 Loading current dependencies...');

      );
;
      this.dependencies.production = packageJson.dependencies || {};
      this.dependencies.development = packageJson.devDependencies || {};
      this.dependencies.peer = packageJson.peerDependencies || {};
      this.dependencies.optional = packageJson.optionalDependencies || {};
      
      console.log(`📊 Loaded dependencies:
        Production: ${Object.keys(this.dependencies.production).length}
        Development: ${Object.keys(this.dependencies.development).length}
        Peer: ${Object.keys(this.dependencies.peer).length}Optional: ${Object.keys(this.dependencies.optional).length})});
;
      const outdatedData = JSON.parse(outdatedOutput);
      this.analysis.outdated = Object.keys(outdatedData).map(pkg => ({;
        name: pkg,;
        current: outdatedData[pkg].current,;
        wanted: outdatedData[pkg].wanted,;
        latest: outdatedData[pkg].latest,;
        location: outdatedData[pkg].location,}));

        const installedVersion = this.getInstalledVersion(pkg);
        if (;
          installedVersion &&;
          !this.isVersionCompatible(version, installedVersion);
        ) {;
          conflicts.push({;
            type: 'peer',;
            package: pkg,;
            required: version,;
            installed: installedVersion,;
            severity: 'high',})}
      }

          })} else {;
          prodVersions.set(pkg, version)}
      }
      
      this.analysis.conflicts = conflicts;
      console.log(⚠️  Found ${conflicts.length} dependency conflicts);

    console.log('🛡️  Checking for vulnerabilities...'`);
;
    try {;
      const auditOutput = execSync('npm audit --audit-level moderate --json' {;
        encoding: 'utf8',;
        cwd: process.cwd(),});
;
      const auditData = JSON.parse(auditOutput);
      this.analysis.vulnerabilities = auditData.vulnerabilities || [];

      )} catch (error) {;
      console.log('⚠️  Could not check vulnerabilities:', error.message)}
  }

  async findUnusedDependencies() {
    console.log('🔍 Finding unused dependencies...');
;
    try {;
      // Use depcheck to find unused dependencies;
      const depcheckOutput = execSync('npx depcheck --json' {;
        encoding: 'utf8',;
        cwd: process.cwd(),});
;
      const depcheckData = JSON.parse(depcheckOutput);
      this.analysis.unused = {;
        dependencies: depcheckData.dependencies || [],;
        devDependencies: depcheckData.devDependencies || [],};

      );
      console.log( 📊 Found ${this.analysis.unused.devDependencies.length} unused development dependencies;
      )} catch (error) {;
      console.log('⚠️  Could not find unused dependencies:', error.message)}
  }

    console.log('💡 Generating smart recommendations...'`);
;
    const recommendations = [];
;
    // Security recommendations;
    if (this.analysis.vulnerabilities.length > 0) {;
      recommendations.push({;
        type: 'security',;
        priority: 'critical',message: Update ${this.analysis.vulnerabilities.length} vulnerable packages immediately,;
        action: 'run npm audit fix',})}
;
    // Conflict resolution recommendations;
    for (const conflict of this.analysis.conflicts) {;
      if (conflict.severity === 'high') {;
        recommendations.push({;
          type: 'conflict',;
          priority: 'high',message: Resolve peer dependency conflict for ${conflict.package}`,action: `update ${conflict.package} to compatible version`,}`)}
    }
    
    // Update recommendations
    const criticalUpdates = this.analysis.outdated.filter(pkg => 
      this.isMajorVersionUpdate(pkg.current, pkg.latest)
    );
;
    if (criticalUpdates.length > 0) {;
      recommendations.push({;
        type: 'update',;
        priority: 'high',message: `Consider major version updates for ${criticalUpdates.length} packages`,;
        action: 'review and update major versions carefully',})}
;
    // Cleanup recommendations;
    if (this.analysis.unused.dependencies.length > 0) {;
      recommendations.push({;
        type: 'cleanup',;
        priority: 'medium',message: `Remove ${this.analysis.unused.dependencies.length} unused production dependencies`,;
        action: 'remove unused dependencies to reduce bundle size',})}
;
    this.analysis.recommendations = recommendations;console.log(`💡 Generated ${recommendations.length} recommendations`)}


    let updatesApplied = 0;
    
    // Apply security fixes first
    if (this.analysis.vulnerabilities.length > 0) {
      try {

        execSync('npm audit fix' { stdio: 'inherit' });
        updatesApplied++} catch (error) {;
        console.log(`'⚠️  Security fixes failed:', error.message)}

    }

      try {console.log(📦 Updating ${pkg.name} to ${pkg.wanted}...);execSync(npm install ${pkg.name}@${pkg.wanted}, { stdio: 'pipe' }`);

        updatesApplied++} catch (error) {  console.log(`⚠️  Failed to update ${pkg.name  }:`, error.message)}
    }

          updatesApplied++} catch (error) {  console.log(`⚠️  Failed to remove ${pkg  }:`, error.message)}
      }
    }
console.log(`✅ Applied ${updatesApplied} smart updates`)}
;
  getInstalledVersion(packageName) {;
    try {const packageJsonPath = require.resolve(`${packageName}/package.json`);
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, `utf8`));
      return packageJson.version;

      return null}
  }

    return currentMajor !== latestMajor}
;
  async generateReport() {;
    const report = {;
      timestamp: new Date().toISOString(),;
      summary: {;
        totalDependencies:;
          Object.keys(this.dependencies.production).length +;
          Object.keys(this.dependencies.development).length,;
        outdated: this.analysis.outdated.length,;
        vulnerabilities: this.analysis.vulnerabilities.length,;
        conflicts: this.analysis.conflicts.length,;
        unused:;
          this.analysis.unused.dependencies.length +;
          this.analysis.unused.devDependencies.length,},;
      analysis: this.analysis,;
      recommendations: this.analysis.recommendations,;
      dependencies: this.dependencies,};

    );
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
console.log(`📊 Dependency analysis report saved to ${reportPath}`)}
}
;
// Main execution;
const AUTOMATION_INTERVAL =;
  parseInt(process.env.AUTOMATION_INTERVAL) || 21600000; // 6 hours;


  const manager = new SmartDependencyManager();
;
  try {;
    await manager.initialize()}
;
runSmartDependencyManager();
