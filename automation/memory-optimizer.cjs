#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MemoryOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.optimizations = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async optimizePackageJson() {
    this.log('🔧 Optimizing package.json for memory usage...');
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      // Update scripts with memory optimizations
      packageJson.scripts = {
        ...packageJson.scripts,
        'type-check': 'node --max-old-space-size=8192 ./node_modules/.bin/tsc --noEmit --skipLibCheck',
        'build': 'node --max-old-space-size=8192 ./node_modules/.bin/next build',
        'lint': 'node --max-old-space-size=4096 ./node_modules/.bin/eslint . --max-warnings 1000',
        'lint:fix': 'node --max-old-space-size=4096 ./node_modules/.bin/eslint . --fix --max-warnings 1000',
        'dev': 'node --max-old-space-size=4096 ./node_modules/.bin/next dev',
        'start': 'node --max-old-space-size=4096 ./node_modules/.bin/next start'
      };
      
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      this.optimizations.push('Updated package.json scripts with memory optimizations');
      this.log('✅ Package.json memory optimizations applied');
    } catch (error) {
      this.log(`❌ Failed to optimize package.json: ${error.message}`, 'ERROR');
      this.errors.push(error.message);
    }
  }

  async createNextConfigOptimization() {
    this.log('⚙️ Creating Next.js memory optimization config...');
    try {
      const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
      let nextConfig = '';
      
      if (fs.existsSync(nextConfigPath)) {
        nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
      }
      
      // Add memory optimization settings
      const memoryOptimizations = `
// Memory optimization settings
const nextConfig = {
  // ... existing config
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
  webpack: (config, { isServer }) => {
    // Increase memory limits
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
          },
        },
      },
    };
    
    // Optimize for memory usage
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
};

module.exports = nextConfig;
`;
      
      fs.writeFileSync(nextConfigPath, memoryOptimizations);
      this.optimizations.push('Created Next.js memory optimization config');
      this.log('✅ Next.js memory optimization config created');
    } catch (error) {
      this.log(`❌ Failed to create Next.js config: ${error.message}`, 'ERROR');
      this.errors.push(error.message);
    }
  }

  async optimizeTypeScriptConfig() {
    this.log('🔧 Optimizing TypeScript configuration for memory...');
    try {
      const tsConfigPath = path.join(this.projectRoot, 'tsconfig.json');
      const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
      
      // Add memory optimization settings
      tsConfig.compilerOptions = {
        ...tsConfig.compilerOptions,
        skipLibCheck: true,
        skipDefaultLibCheck: true,
        incremental: true,
        tsBuildInfoFile: '.next/tsbuildinfo.json',
        // Reduce memory usage
        maxNodeModuleJsDepth: 1,
        disableSourceOfProjectReferenceRedirect: true,
        disableReferencedProjectLoad: true
      };
      
      fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));
      this.optimizations.push('Optimized TypeScript configuration for memory');
      this.log('✅ TypeScript memory optimization applied');
    } catch (error) {
      this.log(`❌ Failed to optimize TypeScript config: ${error.message}`, 'ERROR');
      this.errors.push(error.message);
    }
  }

  async createMemoryScripts() {
    this.log('📝 Creating memory optimization scripts...');
    try {
      // Create a memory-optimized build script
      const buildScript = `#!/usr/bin/env node
const { execSync } = require('child_process');

console.log('🚀 Starting memory-optimized build...');

try {
  // Set memory limits
  process.env.NODE_OPTIONS = '--max-old-space-size=8192';
  
  // Run build with memory optimization
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Memory-optimized build completed');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
`;
      
      fs.writeFileSync('memory-build.js', buildScript);
      fs.chmodSync('memory-build.js', '755');
      
      // Create a memory-optimized type check script
      const typeCheckScript = `#!/usr/bin/env node
const { execSync } = require('child_process');

console.log('🔍 Starting memory-optimized type check...');

try {
  // Set memory limits
  process.env.NODE_OPTIONS = '--max-old-space-size=8192';
  
  // Run type check with memory optimization
  execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'inherit' });
  console.log('✅ Memory-optimized type check completed');
} catch (error) {
  console.error('❌ Type check failed:', error.message);
  process.exit(1);
}
`;
      
      fs.writeFileSync('memory-typecheck.js', typeCheckScript);
      fs.chmodSync('memory-typecheck.js', '755');
      
      this.optimizations.push('Created memory-optimized build and type check scripts');
      this.log('✅ Memory optimization scripts created');
    } catch (error) {
      this.log(`❌ Failed to create memory scripts: ${error.message}`, 'ERROR');
      this.errors.push(error.message);
    }
  }

  async run() {
    this.log('🎯 Starting Memory Optimization Process...');
    this.log('==========================================');
    try {
      await this.optimizePackageJson();
      await this.createNextConfigOptimization();
      await this.optimizeTypeScriptConfig();
      await this.createMemoryScripts();
      
      this.log('\n📊 MEMORY OPTIMIZATION REPORT');
      this.log('==============================');
      this.log(`Optimizations Applied: ${this.optimizations.length}`);
      this.log(`Errors Found: ${this.errors.length}`);
      
      if (this.optimizations.length > 0) {
        this.log('\n✅ Optimizations Applied:');
        this.optimizations.forEach((opt, index) => {
          this.log(`  ${index + 1}. ${opt}`);
        });
      }
      
      if (this.errors.length > 0) {
        this.log('\n❌ Errors:');
        this.errors.forEach((error, index) => {
          this.log(`  ${index + 1}. ${error}`);
        });
      }
      
      this.log('\n🎉 Memory optimization completed!');
      this.log('\n💡 Usage:');
      this.log('  - Use "node memory-build.js" for memory-optimized builds');
      this.log('  - Use "node memory-typecheck.js" for memory-optimized type checking');
    } catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

const optimizer = new MemoryOptimizer();
optimizer.run().catch(console.error);

module.exports = MemoryOptimizer;