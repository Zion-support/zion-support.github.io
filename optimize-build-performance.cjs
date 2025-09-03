#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Optimizing build performance and configuration...');

// 1. Optimize package.json scripts
const packageJsonPath = path.join(__dirname, 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Add optimized build scripts
  packageJson.scripts = {
    ...packageJson.scripts,
    'build:fast': 'next build --no-lint',
    'build:analyze': 'ANALYZE=true next build',
    'build:production': 'NODE_ENV=production next build',
    'dev:fast': 'next dev --turbo',
    'lint:fix': 'eslint . --fix --ext .ts,.tsx,.js,.jsx',
    'lint:check': 'eslint . --ext .ts,.tsx,.js,.jsx --max-warnings 0',
    'type-check': 'tsc --noEmit',
    'test:ci': 'jest --ci --coverage --watchAll=false',
    'test:watch': 'jest --watch',
    'clean': 'rm -rf .next out dist',
    'prebuild': 'npm run clean',
    'postbuild': 'npm run type-check'
  };
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Optimized package.json scripts')}

// 2. Create optimized Next.js config
const nextConfigContent = `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'production' },
  
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@heroicons/react'],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js' } } },
    optimizeCss: true,
    scrollRestoration: true },
  
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'production' },
  
  images: {
    domains: ['ziontechgroup.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;" },
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true },
  
  // Performance optimizations
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2 },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY' }, {
            key: 'X-Content-Type-Options',
            value: 'nosniff' }, {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin' }, {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()' }, {
            key: 'X-DNS-Prefetch-Control',
            value: 'on' }, {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains' } ] } ]},
  
  // Webpack optimizations
  webpack: (config { dev, isServer }) => {
    // Exclude problematic directories
    config.module.rules.push({
      test: /\\.(ts|tsx)$/,
      exclude: [
        /node_modules/,
        /api-backup/,
        /pages\\.disabled/,
        /backup-pages/,
        /\\.backup/,
        /\\.disabled/,
        /automation\\/backups/,
        /automation_backup/,
        /broken_files_backup/,
        /contracts/,
        /hardhat/,
        /__tests__/,
        /tests/,
        /test/ ] });

    // Performance optimizations
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\\\/]node_modules[\\\\/]/,
            name: 'vendors',
            chunks: 'all' },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true } } }}

    // Add fallback for problematic modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      stream: false,
      url: false,
      zlib: false,
      http: false,
      https: false,
      assert: false,
      os: false,
      path: false };

    return config},
  
  // Bundle analyzer
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false })
      );
      return config} }) };

export default nextConfig;
`;

fs.writeFileSync('next.config.js', nextConfigContent);
console.log('✅ Optimized Next.js configuration');

// 3. Create performance monitoring script
const performanceScript = `#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('📊 Performance Analysis Report');
console.log('==');

// Check bundle sizes
const nextDir = path.join(__dirname, '.next');
if (fs.existsSync(nextDir)) {
  const getDirSize = (dir) => {
    let size = 0;
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        size += getDirSize(filePath)} else {
        size += stat.size}
    }
    
    return size};
  
  const size = getDirSize(nextDir);
  const sizeInMB = (size / 1024 / 1024).toFixed(2);
  
  console.log(\`Build size: \${sizeInMB} MB\`);
  
  if (size > 50 * 1024 * 1024) { // 50MB
    console.log('⚠️  Build size is large. Consider optimizing.')} else {
    console.log('✅ Build size is reasonable.')}
}

// Check for large files
const checkLargeFiles = (dir, maxSize = 1024 * 1024) => { // 1MB
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      checkLargeFiles(filePath, maxSize)} else if (stat.isFile() && stat.size > maxSize) {
      const sizeInMB = (stat.size / 1024 / 1024).toFixed(2);
      console.log(\`⚠️  Large file: \${filePath} (\${sizeInMB} MB)\`)}
  }
};

console.log('\\nChecking for large files...');
checkLargeFiles(__dirname);

console.log('\\n🎉 Performance analysis complete!');
`;

fs.writeFileSync('analyze-performance.cjs', performanceScript);
console.log('✅ Created performance analysis script');

// 4. Create optimized ESLint config
const eslintConfig = `module.exports = {
  extends: [
    'next/core-web-vitals',
    '@typescript-eslint/recommended' ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn' { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unescaped-entities': 'off' },
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
    'dist/',
    'api-backup/',
    'pages.disabled/',
    'backup-pages/',
    '.backup/',
    '.disabled/',
    'automation/backups/',
    'automation_backup/',
    'broken_files_backup/',
    'contracts/',
    'hardhat/' ] };
`;

fs.writeFileSync('.eslintrc.js', eslintConfig);
console.log('✅ Optimized ESLint configuration');

// 5. Create TypeScript config optimization
const tsConfigPath = path.join(__dirname, 'tsconfig.json');
if (fs.existsSync(tsConfigPath)) {
  const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
  
  tsConfig.compilerOptions = {
    ...tsConfig.compilerOptions,
    skipLibCheck: true,
    incremental: true,
    tsBuildInfoFile: '.next/cache/tsconfig.tsbuildinfo' };
  
  tsConfig.exclude = [
    ...(tsConfig.exclude || []),
    'node_modules',
    '.next',
    'out',
    'dist',
    'api-backup',
    'pages.disabled',
    'backup-pages',
    '.backup',
    '.disabled',
    'automation/backups',
    'automation_backup',
    'broken_files_backup',
    'contracts',
    'hardhat' ];
  
  fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));
  console.log('✅ Optimized TypeScript configuration')}

console.log('\\n🎉 Build optimization complete!');
console.log('\\nNext steps:');
console.log('1. Run: npm run build:fast');
console.log('2. Run: node analyze-performance.cjs');
console.log('3. Check bundle analyzer: npm run build:analyze');