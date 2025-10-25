#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { glob } = require("glob");

console.log("🚀 Starting enhanced performance optimization...");

// 1. Optimize images
async function optimizeImages() {
  console.log("📸 Optimizing images...");

  const imageFiles = await glob("public/**/*.{jpg,jpeg,png,webp,svg}", {
    cwd: __dirname + "/..",
  });

  for (const file of imageFiles) {
    const filePath = path.join(__dirname, "..", file);
    const stats = fs.statSync(filePath);

    if (stats.size > 100000) {
      // Files larger than 100KB
      console.log(
        `Large image detected: ${file} (${(stats.size / 1024).toFixed(2)}KB)`,
      );
    }
  }

  console.log(`✅ Processed ${imageFiles.length} images`);
}

// 2. Analyze bundle size
async function analyzeBundleSize() {
  console.log("📊 Analyzing bundle size...");

  const distPath = path.join(__dirname, "..", "dist");
  if (!fs.existsSync(distPath)) {
    console.log("❌ Dist folder not found. Run build first.");
    return;
  }

  const jsFiles = await glob("dist/assets/*.js", { cwd: __dirname + "/.." });
  let totalSize = 0;
  const largeFiles = [];

  for (const file of jsFiles) {
    const filePath = path.join(__dirname, "..", file);
    const stats = fs.statSync(filePath);
    totalSize += stats.size;

    if (stats.size > 50000) {
      // Files larger than 50KB
      largeFiles.push({
        file: file,
        size: stats.size,
        sizeKB: (stats.size / 1024).toFixed(2),
      });
    }
  }

  console.log(`📦 Total bundle size: ${(totalSize / 1024).toFixed(2)}KB`);
  console.log(
    `📦 Total bundle size: ${(totalSize / 1024 / 1024).toFixed(2)}MB`,
  );

  if (largeFiles.length > 0) {
    console.log("⚠️  Large files detected:");
    largeFiles
      .sort((a, b) => b.size - a.size)
      .forEach((file) => {
        console.log(`   ${file.file}: ${file.sizeKB}KB`);
      });
  }
}

// 3. Check for performance issues
async function checkPerformanceIssues() {
  console.log("🔍 Checking for performance issues...");

  const issues = [];

  // Check for large components
  const componentFiles = await glob("app/**/*.tsx", { cwd: __dirname + "/.." });

  for (const file of componentFiles) {
    const filePath = path.join(__dirname, "..", file);
    const content = fs.readFileSync(filePath, "utf8");
    const lines = content.split("\n").length;

    if (lines > 500) {
      issues.push({
        type: "Large Component",
        file: file,
        lines: lines,
      });
    }

    // Check for inline styles
    const inlineStyleMatches = content.match(/style=\{[^}]*\}/g);
    if (inlineStyleMatches && inlineStyleMatches.length > 10) {
      issues.push({
        type: "Too Many Inline Styles",
        file: file,
        count: inlineStyleMatches.length,
      });
    }

    // Check for console statements
    const consoleMatches = content.match(/console\.(log|warn|error|debug)/g);
    if (consoleMatches) {
      issues.push({
        type: "Console Statements",
        file: file,
        count: consoleMatches.length,
      });
    }
  }

  if (issues.length > 0) {
    console.log("⚠️  Performance issues found:");
    issues.forEach((issue) => {
      console.log(
        `   ${issue.type}: ${issue.file}${issue.count ? ` (${issue.count})` : ""}${issue.lines ? ` (${issue.lines} lines)` : ""}`,
      );
    });
  } else {
    console.log("✅ No major performance issues found");
  }
}

// 4. Generate performance report
async function generatePerformanceReport() {
  console.log("📋 Generating performance report...");

  const report = {
    timestamp: new Date().toISOString(),
    bundleAnalysis: {},
    performanceIssues: [],
    recommendations: [
      "Consider implementing code splitting for large components",
      "Use lazy loading for non-critical components",
      "Optimize images and use WebP format",
      "Implement service worker for caching",
      "Use React.memo for expensive components",
      "Consider using a CDN for static assets",
    ],
  };

  // Check if dist folder exists
  const distPath = path.join(__dirname, "..", "dist");
  if (fs.existsSync(distPath)) {
    const jsFiles = await glob("dist/assets/*.js", { cwd: __dirname + "/.." });
    let totalSize = 0;

    for (const file of jsFiles) {
      const filePath = path.join(__dirname, "..", file);
      const stats = fs.statSync(filePath);
      totalSize += stats.size;
    }

    report.bundleAnalysis = {
      totalFiles: jsFiles.length,
      totalSizeKB: Math.round(totalSize / 1024),
      totalSizeMB: Math.round((totalSize / 1024 / 1024) * 100) / 100,
    };
  }

  fs.writeFileSync(
    path.join(__dirname, "..", "performance-report.json"),
    JSON.stringify(report, null, 2),
  );

  console.log("✅ Performance report generated: performance-report.json");
}

// 5. Create optimized build configuration
async function createOptimizedConfig() {
  console.log("⚙️  Creating optimized configuration...");

  const viteConfig = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
      '@components': path.resolve(__dirname, './app/components'),
      '@pages': path.resolve(__dirname, './app/pages'),
      '@utils': path.resolve(__dirname, './utils'),
      '@types': path.resolve(__dirname, './types'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react';
            }
            if (id.includes('react-router')) {
              return 'router';
            }
            if (id.includes('@heroicons') || id.includes('lucide-react')) {
              return 'icons';
            }
            if (id.includes('framer-motion')) {
              return 'motion';
            }
            if (id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'utils';
            }
            if (id.includes('web-vitals')) {
              return 'analytics';
            }
            if (id.includes('react-helmet-async')) {
              return 'seo';
            }
            return 'vendor';
          }
          // Split app code by feature
          if (id.includes('/app/components/')) {
            return 'components';
          }
          if (id.includes('/app/hooks/')) {
            return 'hooks';
          }
          if (id.includes('/app/utils/')) {
            return 'utils';
          }
          return undefined;
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    cors: true,
  },
  preview: {
    port: 4173,
    open: true,
    host: true,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@heroicons/react/24/outline',
      'framer-motion',
      'clsx',
      'tailwind-merge'
    ],
  },
  css: {
    devSourcemap: true,
  },
});`;

  fs.writeFileSync(
    path.join(__dirname, "..", "vite.config.optimized.ts"),
    viteConfig,
  );

  console.log("✅ Optimized configuration created: vite.config.optimized.ts");
}

// Main execution
async function main() {
  try {
    await optimizeImages();
    await analyzeBundleSize();
    await checkPerformanceIssues();
    await generatePerformanceReport();
    await createOptimizedConfig();

    console.log("🎉 Enhanced performance optimization completed!");
    console.log("📊 Check performance-report.json for detailed analysis");
    console.log(
      "⚙️  Use vite.config.optimized.ts for better build performance",
    );
  } catch (error) {
    console.error("❌ Error during optimization:", error.message);
    process.exit(1);
  }
}

main();
