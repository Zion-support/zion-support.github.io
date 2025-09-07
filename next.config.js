/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  compress: true,
  poweredByHeader: false,
  eslint: { 
    ignoreDuringBuilds: true 
  },
  typescript: { 
    ignoreBuildErrors: true 
  },
  experimental: {
    forceSwcTransforms: false,
    esmExternals: false,
    newNextLinkBehavior: true,
    // Ensure standard Next.js page extensions are recognized alongside any custom route files
    pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'route.tsx', 'route.ts'],
    outputFileTracingExcludes: {
      '*': [
        './.git/**',
        './.next/**',
        './node_modules/**',
        './public/**',
        './temp_backup/**',
        './temp_broken_files/**',
        './temp_exclude/**',
        './test_build/**',
        './src/pages.disabled/**',
        './src/components/ui/**',
        './src/mobile/**',
        './src/test/**',
        './*.test.js',
        './*.test.ts',
        './*.test.tsx',
        './*.spec.js',
        './*.spec.ts',
        './*.spec.tsx',
        './src-disabled/**',
        './zion-os.disabled/**',
        './zion_academy/**',
        './automation/**',
        './automation_backup/**',
        './backup/**',
        './lib_backup/**',
        './data_backup/**',
        './styles_backup/**',
        './api-backup/**',
        './corrupted_files_backup_2/**',
        './ai-optimization-backups/**',
        './optimization-reports/**',
        './test-generation-reports/**',
        './test-reports/**',
        './security-reports/**',
        './pages.__backup/**',
        './pages-disabled/**',
        './pages.disabled_auto/**',
        './pm2-automation/**',
        './scripts/**',
        './*.report.json',
        './temp_*/',
        './tests.disabled/**',
        './pages.disabled/**',
        './src.disabled/**',
        './components.disabled/**',
        './hooks.disabled/**',
        './types.disabled/**',
        './contracts.disabled/**',
        './solutions.disabled/**',
        './zion-os.disabled/**',
        './src_backup_temp/**',
        './temp-backup/**',
        './tests/**',
        './supabase/**',
        './temp_footer_start.tsx',
        './test-simple.js',
        './test-utils.js',
        './ultimate-automation-runner.js',
        './vite.config-backup.ts',
        './vite.config.ts',
        './types/empty.ts',
        './types/index.ts',
        './pages_backup_conflicts/**',
        './pages_disabled/**',
        './src.broken/**',
        './src.corrupted/**',
        './src.pages.disabled/**',
        './performance-monitor.js',
        './performance-optimization.js',
        './playwright.config.ts',
        './postcss.config-backup.js',
        './public/**',
        './resolve-conflicts.js',
        './resolve-merge-conflicts.js',
        './run-automation-safely.js',
        './run-automation.js',
        './run-complete-automation.js',
        './security-config.js',
        './server/**',
        './setupTests.ts',
        './simple-test.js',
        './src/components/layout/**',
        './types/**',
        './utils/**',
        './pages_backup/**',
        './pages_backup_before_cleanup/**',
        './services/**',
        './components.disabled_full/**',
        './comprehensive-automation-runner.js',
        './comprehensive-automation.js',
        './comprehensive-merge-resolver.js',
        './corrupted-files-backup/**',
        './cypress.config.ts',
        './cypress_backup/**',
        './data.disabled/**',
        './database/**',
        './ecosystem.simple.js',
        './ecosystem.working.js',
        './execute-automation.js',
        './fix_all_function_names.js',
        './fix_corrupted_files.js',
        './fix_empty_pages.js',
        './fix_utils_files.js',
        './fix_variable_names.js',
        './git-ops.js',
        './health-endpoint.js',
        './hooks/**',
        './improve-app.js',
        './jest.config.ts',
        './jest.setup.js',
        './lib.broken/**',
        './lib.disabled/**',
        './lib/**',
        './lint-stub.js',
        './lint-target/**',
        './maintenance-scheduler.js',
        './merge-prs.js',
        './merge-resolver.js',
        './middleware.security.ts',
        './middleware/**',
        './monitoring-system.js',
        './netlify/**',
        './next-env.d.ts',
        './next.config.analyze.js',
        './next.config.analyzer.js',
        './next.config.optimized.js',
        './next.config.resolved.js',
        './optimized-build.js',
        './pages-backup/**',
        './pages._quarantine/**',
        './pages.disabled_full/**',
        './pages.old/**',
        './App.tsx',
                        './advanced-app-improvements.js',
                        './analyze-missing-pages.js',
                        './api-disabled/**',
                        './api.disabled/**',
                        './api/**',
                        './automation-runner.js',
                        './basic-test.js',
                        './broken_files_backup/**',
                        './build-verification.js',
                        './check-syntax.js',
                        './clean-conflicts.js',
                        './commit-and-push.js'
      ]
    }
  },
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  webpack: (config, { dev, isServer }) => {
    // Completely exclude problematic directories from the build
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: [
        /node_modules/,
        /api-backup/,
        /pages\.disabled/,
        /backup-pages/,
        /\.backup/,
        /\.disabled/,
        /automation\/backups/,
        /automation_backup/,
        /broken_files_backup/,
        /contracts/,
        /hardhat/,
        /^components\//, // Exclude root components directory
      ]
    });

    // Add fallback for problematic modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false
    };

    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true
      }
    ]
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2
  }
};

export default nextConfig;