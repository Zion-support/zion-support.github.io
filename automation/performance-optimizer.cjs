#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class PerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.optimizations = [];
    this.errors = [];
  }

  log(message, type = "INFO") {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type}] ${message}`);
  }

  async optimizeNextConfig() {
    this.log("⚙️ Optimizing Next.js configuration...");
    try {
      const nextConfigPath = path.join(this.projectRoot, "next.config.js");
      
      if (fs.existsSync(nextConfigPath)) {
        let content = fs.readFileSync(nextConfigPath, "utf8");
        let modified = false;
        
        // Add performance optimizations
        if (!content.includes("experimental")) {
          content = content.replace(
            /module\.exports = \{/,
            `module.exports = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },`
          );
          modified = true;
        }
        
        if (modified) {
          fs.writeFileSync(nextConfigPath, content);
          this.optimizations.push("Updated Next.js configuration with performance optimizations");
          this.log("✅ Next.js configuration optimized");
        }
      } else {
        // Create a new Next.js config with optimizations
        const configContent = `/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig`;
        
        fs.writeFileSync(nextConfigPath, configContent);
        this.optimizations.push("Created Next.js configuration with performance optimizations");
        this.log("✅ Created optimized Next.js configuration");
      }
    } catch (error) {
      this.log(`❌ Failed to optimize Next.js config: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  async runPerformanceTest() {
    this.log("🏃 Running performance test...");
    try {
      execSync("npm run build", {
        cwd: this.projectRoot,
        stdio: "pipe",
        timeout: 120000
      });
      this.optimizations.push("Build test successful");
      this.log("✅ Build test successful");
    } catch (error) {
      this.errors.push(`Build test failed: ${error.message}`);
      this.log(`❌ Build test failed: ${error.message}`, "ERROR");
    }
  }

  async run() {
    this.log("🎯 Starting Performance Optimization Process...");
    this.log("===============================================");
    try {
      await this.optimizeNextConfig();
      await this.runPerformanceTest();
      
      this.log("\n📊 PERFORMANCE OPTIMIZATION REPORT");
      this.log("===================================");
      this.log(`Optimizations Applied: ${this.optimizations.length}`);
      this.log(`Errors: ${this.errors.length}`);
      
      if (this.optimizations.length > 0) {
        this.log("\n✅ Optimizations Applied:");
        this.optimizations.forEach((opt, index) => {
          this.log(`  ${index + 1}. ${opt}`);
        });
      }
      
      if (this.errors.length > 0) {
        this.log("\n❌ Errors:");
        this.errors.forEach((error, index) => {
          this.log(`  ${index + 1}. ${error}`);
        });
      }
      
      this.log("\n🎉 Performance optimization completed!");
    } catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, "ERROR");
      process.exit(1);
    }
  }
}

const optimizer = new PerformanceOptimizer();
optimizer.run().catch(console.error);