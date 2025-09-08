
const { execSync } = require('child_process');
const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

class BuildErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();

    this.fixesApplied = [];
    this.startTime = new Date()}
;
  async log(message) {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(`logMessage);
    await fs.appendFile(this.logFile, logMessage + `\n`)}

    }
  }
;
  async fixBuildErrors() {;
    await this.log('🔧 Fixing build errors...');

    // Reinstall dependencies;
    await this.log('📦 Reinstalling dependencies...');
    const installResult = await this.runCommand('npm install --legacy-peer-deps');
    if (installResult.success) {;
      await this.log('✅ Dependencies reinstalled successfully');
      this.fixesApplied.push({;
        type: 'dependency-reinstall',;
        action: 'npm install --legacy-peer-deps',;
        timestamp: new Date().toISOString()})}
  }
;
  async fixNextConfig() {;
    await this.log('🔧 Fixing Next.js configuration...');
    ;
    try {;
      const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
      let nextConfig = ';
      ;
      if (await fs.access(nextConfigPath).then(() => true).catch(() => false)) {;
        nextConfig = await fs.readFile(nextConfigPath, 'utf8')}

    // Add any webpack customizations here;
    return config}

      await fs.writeFile(nextConfigPath, fixedConfig`);
      await this.log('✅ Next.js configuration fixed')})} catch (error) {  await this.log(`❌ Error fixing Next.js config: ${error.message  }`)}
  }

        tsConfig.compilerOptions = {}}
      ;
      tsConfig.compilerOptions = {;
        ...tsConfig.compilerOptions,;
        target: 'es5',;
        lib: ['dom', 'dom.iterable', 'es6'],;
        allowJs: true,;
        skipLibCheck: true,;
        strict: false,;
        forceConsistentCasingInFileNames: true,;
        noEmit: true,;
        esModuleInterop: true,;
        module: 'esnext',;
        moduleResolution: 'node',;
        resolveJsonModule: true,;
        isolatedModules: true,;
        jsx: 'preserve',;
        incremental: true,;
        plugins: [
          {;
            name: 'next'}
        ]};
      ;
      await fs.writeFile(tsConfigPath, JSON.stringify(tsConfig, null, 2));
      await this.log('✅ TypeScript configuration fixed')})} catch (error) {  await this.log(`❌ Error fixing TypeScript config: ${error.message  }`)}
  }

        packageJson.scripts = {}}
      ;
      packageJson.scripts = {;
        ...packageJson.scripts,;
        dev: 'next dev',;
        build: 'next build',;
        start: 'next start',;
        lint: 'next lint',type-check': 'tsc --noEmit'};
      ;
      await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
      await this.log('✅ package.json fixed')})} catch (error) {  await this.log(`❌ Error fixing package.json: ${error.message  }`)}
  }

      await this.fixNextConfig();
      await this.fixTypeScriptConfig();
      await this.fixPackageJson();
      await this.fixBuildErrors();
      await this.testBuild();
      ;
      const endTime = new Date();
      const duration = endTime - this.startTime;
      await this.log(`✅ Build Error Fixer completed in ${duration.getTime()}ms`);await this.log(`📈 Fixes applied: ${this.fixesApplied.length}`);
      ;
      return {;
        success: true,;
        fixesApplied: this.fixesApplied.length,;
        duration: duration.getTime()};

      throw error}
  }
}

      process.exit(1)})}
;
module.exports = BuildErrorFixer;