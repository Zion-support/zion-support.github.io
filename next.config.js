import withBundleAnalyzer from '@next/bundle-analyzer';
import crypto from 'crypto';
<<<<<<< HEAD

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
=======
;
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'});
/** @type {import('next').NextConfig} */;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const nextConfig = {
};
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
<<<<<<< HEAD
    ignoreBuildErrors: true,
  },
  
=======
    ignoreBuildErrors: true},
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'ziontechgroup.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
<<<<<<< HEAD
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
=======
<<<<<<< HEAD
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox,",
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  },

=======
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"},
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Fix for "self is not defined" error by providing a polyfill
    if (isServer) {
      config.plugins.push(
        new webpack.DefinePlugin({
<<<<<<< HEAD
          'self': 'undefined',
        })
      );
    }

=======
          'self': 'undefined'})
      )};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    // Optimize bundle size
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test(module) {
              return (
                module.size() > 160000 &&
                /node_modules[/\\]/.test(module.identifier())
              );
            },
            name(module) {
              const _hash = crypto.createHash('sha1');
              _hash.update(module.identifier());
              return _hash.digest('hex').substring(0, 8);
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
          },
          shared: {
            name(module, chunks) {
              return (
                'shared-' +
                crypto
                  .createHash('sha1')
                  .update(chunks.reduce((acc, chunk) => acc + chunk.name, ''))
                  .digest('hex')
                  .substring(0, 8)
              );
            },
            priority: 10,
            minChunks: 2,
            reuseExistingChunk: true,
          },
        },
        maxInitialRequests: 25,
<<<<<<< HEAD
        minSize: 20000,
      },
      minimize: !dev,
    };

    // Tree shaking
    config.optimization.usedExports = true;

    return config;
  },

=======
        minSize: 20000},
      minimize: !dev};
    // Tree shaking
    config.optimization.usedExports = true;
    return config},
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  async headers() {
    return [
      {
        source: '/:path*',
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
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
<<<<<<< HEAD
            value: 'public, max-age=86400, s-maxage=604800, stale-while-revalidate',
          },
        ],
      },
    ];
  },

=======
            value: 'public, max-age=86400, s-maxage=604800, stale-while-revalidate'}]}]},
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
<<<<<<< HEAD
        permanent: true,
      },
    ];
  },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@heroicons/react', 'recharts', 'framer-motion'],
  },

=======
        permanent: true}]},
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@heroicons/react'],
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB']},
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  // Performance optimizations
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
    },
    '@heroicons/react': {
<<<<<<< HEAD
      transform: '@heroicons/react/{{member}}',
    },
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
};

=======
      transform: '@heroicons/react/{{member}}'}},
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn']} : false}};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export default bundleAnalyzer(nextConfig);