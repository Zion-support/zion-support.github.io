const path = require('path');

const __dirname = path.resolve();

// Configure CDN asset prefix when running in production
const isProd = process.env.NODE_ENV === 'production';
const isNetlify = process.env.NETLIFY === 'true';
const isPreviewBuild = process.env.CONTEXT !== 'production';

// Only use CDN if:
// 1. In production mode
// 2. CDN URL is provided and not a placeholder
// 3. Not a Netlify preview build (unless it's the main domain)
// 4. CDN URL is a valid HTTPS URL
const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL;
const isValidCDN = cdnUrl && 
  cdnUrl.startsWith('https://') && 
  !cdnUrl.includes('yourdomain.com') && 
  !cdnUrl.includes('example.com') && 
  !cdnUrl.includes('localhost');

const shouldUseCDN = isProd && isValidCDN && (!isNetlify || !isPreviewBuild);

const assetPrefix = shouldUseCDN ? cdnUrl : '';

// Log configuration for debugging
if (process.env.NODE_ENV === 'development') {
  console.log('Next.js Configuration:', {
    isProd,
    isNetlify,
    isPreviewBuild,
    cdnUrl: cdnUrl || 'Not set',
    isValidCDN,
    shouldUseCDN,
    assetPrefix: assetPrefix || 'Disabled (serving from origin)',
    imageOptimization: !(isNetlify && isPreviewBuild) ? 'Enabled' : 'Disabled for Netlify preview'
  });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/api-documentation', destination: '/api-docs', permanent: true },
      { source: '/ai-consciousness-evolution-2025', destination: '/ai-consciousness-evolution-2029', permanent: false }
    ];
  }
};

module.exports = nextConfig;
