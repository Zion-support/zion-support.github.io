<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {
=======
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
>>>>>>> cc0d21868188b9c53a0c112e24cd567ac1f67490
  // Enable static export for Netlify
  output: 'export',
  trailingSlash: true,
  
<<<<<<< HEAD
  // Disable TypeScript and ESLint during build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Image optimization for static export
  images: {
    unoptimized: true,
=======
  // Disable ESLint and TypeScript checking during build to avoid parsing issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Exclude certain directories from compilation
  webpack: (config, { dev, isServer }) => {
    // Fix for CSS processing issues with Node.js compatibility
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Configure webpack extensions
    config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx', '.json'];
    
    // Add path alias resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '.'),
    };
    
    // Exclude contracts directory from compilation
    config.module.rules.push({
      test: /\.ts$/,
      include: path.resolve(__dirname, 'contracts'),
      use: 'ignore-loader'
    });
    
    if (!dev && !isServer) {
      // Optimize bundle size
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[/]node_modules[/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    
    // Fix for OpenSSL legacy provider issue
    config.resolve.alias = {
      ...config.resolve.alias,
      crypto: false,
    };
    
    // Disable PostCSS processing to avoid matchAll issues
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((oneOf) => {
          if (oneOf.use && Array.isArray(oneOf.use)) {
            oneOf.use = oneOf.use.filter((use) => {
              return !use.loader || !use.loader.includes('postcss-loader');
            });
          }
        });
      }
    });
    
    return config;
>>>>>>> cc0d21868188b9c53a0c112e24cd567ac1f67490
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
<<<<<<< HEAD
  
  // Experimental features
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
=======
  generateEtags: false,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  
  // Experimental features for performance
  experimental: {
    optimizeCss: false,
    scrollRestoration: true,
  },
};

export default nextConfig;
>>>>>>> cc0d21868188b9c53a0c112e24cd567ac1f67490
