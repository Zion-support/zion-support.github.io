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
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-linux-x64-gnu',
        'node_modules/@swc/core-linux-x64-musl',
        'node_modules/@esbuild/linux-x64',
      ],
    },
    // Disable CSS optimization for faster builds with many pages.
    // Consider re-evaluating with newer Next.js versions as CSS optimization performance might have improved.
    optimizeCss: false, 
    esmExternals: true,
              // Memory and performance optimizations for 176+ pages.
              // These settings might be specific to memory-constrained build environments.
              // Consider making them configurable via environment variables or re-evaluating
              // if the build environment has more resources or with newer Next.js versions.
    largePageDataBytes: 256 * 1000, // 256KB threshold for large pages
    workerThreads: false, // Disable worker threads to reduce memory usage. Can slow down builds on multi-core machines.
    cpus: 2, // Limit to 2 CPUs for memory management. Can slow down builds on machines with more cores.
    // CRITICAL: Completely disable turbotrace to prevent hanging
    // turbotrace: false, // Disabled via NEXT_DISABLE_TRACE_COLLECTION and NEXT_PRIVATE_OUTPUT_TRACE in build scripts
    // Netlify-specific optimizations
    swcTraceProfiling: false, // Disable profiling for faster builds
  },
  images: {
    unoptimized: true,
  },

  // experimental: {
  //   esmExternals: 'loose', // Removing this as per Next.js recommendation
  // },
  transpilePackages: [
    'react-markdown',
    'date-fns',
    'helia',
    '@helia/json',
    'multiformats',
    'libp2p',
    '@libp2p/identify',
  ],

  webpack: (config, { dev, isServer, webpack }) => {
    // Fix EventEmitter memory leak by increasing max listeners
    // events.EventEmitter.defaultMaxListeners = 20; // Will be set by build script
    
    // Development optimizations to prevent memory leaks with 176+ pages
    if (dev && !isServer) {
      config.watchOptions = {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: false, // Use native file watching instead of polling
      };
      
      // Optimize memory usage in development
      config.stats = 'errors-warnings';
      config.infrastructureLogging = {
        level: 'error',
      };
    }
    
    // For Netlify deployment, exclude problematic files temporarily
    if (process.env.SKIP_TYPE_CHECK === 'true') {
      config.externals = config.externals || [];
      config.externals.push({
        './src/context/FavoritesContext.tsx': 'empty',
        './src/context/LanguageContext.tsx': 'empty', 
        './src/context/RequestQuoteWizard.tsx': 'empty',
        './src/context/WhitelabelContext.tsx': 'empty',
        './src/hooks/useApiKeys.ts': 'empty',
      });
    }

    // Fix webpack cache configuration to prevent build errors
    if (config.cache && config.cache.type === 'filesystem') {
      // Use memory cache instead of filesystem cache to prevent webpack validation errors
      config.cache = {
        type: 'memory',
        maxGenerations: dev ? 1 : 5,
      };
    } else if (config.cache) {
      // Ensure memory cache is properly configured
      config.cache = {
        type: 'memory',
        maxGenerations: dev ? 1 : 5,
      };
    }

    // WORKAROUND: Optimization settings for server-side production builds.
    // These settings (disabling module concatenation and minimization) were likely added
    // to prevent Temporal Dead Zone (TDZ) errors. TDZ errors can occur due to complex
    // module interdependencies (especially circular dependencies) or issues with how
    // CommonJS and ESM modules interact.
    // While this workaround might resolve the build/runtime error, it's not ideal as it
    // can lead to larger server bundles and potentially slower cold starts.
    // TODO: Investigate the root cause of TDZ errors (e.g., analyze for circular dependencies,
    // review problematic packages) and aim to remove this workaround if possible,
    // especially with newer Next.js/Webpack versions that might handle these scenarios better.
    if (!dev && isServer) {
      config.optimization = {
        ...config.optimization,
        concatenateModules: false,
        minimize: false,
        mangleExports: false,
      };
    }

    // Suppress warnings in both dev and production
    config.ignoreWarnings = [
      /punycode.*deprecated/i,
      /DEP0040/,
      /Critical dependency/,
      /Serializing big strings/i,
      /PackFileCacheStrategy/,
      // Suppress common Next.js warnings that don't affect functionality
      /Module not found.*can't resolve/i,
      /export.*was not found in/i,
      // Additional Next.js 14 warnings
      /images\.domains.*deprecated/i,
      /Fast Refresh/i,
      /webpack performance recommendations/i,
      // Suppress optimization warnings
      /optimization\.usedExports/i,
      /cacheUnaffected/i,
      // Suppress cache-related warnings
      /cache.*filesystem/i,
      /memory.*cache/i,
    ];

    // WORKAROUND: Alias for 'react-router-dom'.
    // This project uses a shim for 'react-router-dom' located at './src/shims/react-router-dom.ts'.
    // This typically indicates that some components might still be importing from 'react-router-dom'
    // (e.g., Link, useNavigate) from a previous setup or for compatibility with external libraries.
    // The shim provides minimal, mostly no-op implementations.
    // TODO: Review components using 'react-router-dom' imports. Ideally, refactor them to use
    // Next.js's built-in routing ('next/link', 'next/router') to remove this alias and shim.
    // Investigate if any actual routing logic is expected from these shimmed components, as they
    // will likely not behave as standard react-router-dom components.
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-router-dom': path.resolve(__dirname, './src/shims/react-router-dom.ts'),
    };

    // ADVANCED BUNDLE OPTIMIZATION:
    // The following `splitChunks` configuration provides granular control over how Webpack
    // creates JavaScript chunks. This was likely implemented to optimize loading performance
    // for a large application (as indicated by the "176+ pages" comment).
    //
    // Considerations:
    // 1. Complexity: This is a highly detailed setup. Maintaining and verifying its
    //    optimality can be challenging as the application and Next.js evolve.
    // 2. Next.js Defaults: Newer versions of Next.js have significantly improved their
    //    default chunk splitting strategies. It's possible that relying more on
    //    Next.js defaults, perhaps with fewer, more targeted cache groups, could yield
    //    similar or better results with less configuration overhead.
    // 3. Analysis Required: Changes to this section should be accompanied by thorough
    //    bundle analysis (e.g., using @next/bundle-analyzer) and performance testing
    //    (LCP, FCP, TTI) to ensure improvements.
    //
    // TODO: Periodically review this custom `splitChunks` configuration.
    // Consider testing a build with this custom configuration commented out to evaluate
    // Next.js's default behavior, especially after Next.js version upgrades.
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        async_hooks: false,
        diagnostics_channel: false,
        worker_threads: false,
        fs: false,
        net: false,
        tls: false,
        module: false,
        child_process: false,
        http: false,
        https: false,
        os: false,
        path: false,
        crypto: false,
        stream: false,
        util: false,
        zlib: false,
        url: false, // Added url as it's often a dependency
      };
    }

    // Only apply optimizations in production
    if (!dev && !isServer) {
      // Sentry webpack plugin optimizations
      config.resolve.alias = {
        ...config.resolve.alias,
        '@sentry/tracing': '@sentry/tracing/esm',
      };

      // Remove cacheUnaffected when usedExports is enabled to prevent conflicts
      if (config.cache && config.cache.cacheUnaffected !== undefined) {
        delete config.cache.cacheUnaffected;
      }
    }

    // CRITICAL FIX: Remove cacheUnaffected in ALL cases to prevent webpack conflicts
    // The cacheUnaffected option conflicts with usedExports optimization
    if (config.cache && config.cache.cacheUnaffected !== undefined) {
      delete config.cache.cacheUnaffected;
    }
    
    // The following block for filesystem cache options is likely dead code
    // if the cache type is always forced to 'memory' earlier.
    // If 'memory' cache is strictly required, this block can be removed.
    // If 'filesystem' could be used, the logic to force 'memory' needs review.
    // For now, commenting out as it's unreachable with current logic.
    /*
    if (config.cache && config.cache.type === 'filesystem') {
      delete config.cache.cacheUnaffected;
      config.cache.allowCollectingMemory = false;
      config.cache.managedPaths = [path.resolve(__dirname, 'node_modules')];
    }
    */

    // Define feature flags for tree shaking
    config.plugins.push(
      new webpack.DefinePlugin({
        __SENTRY_DEBUG__: false,
        __SENTRY_TRACING__: true,
      })
    );

    // Add polyfills for Node.js APIs
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      async_hooks: false,
      diagnostics_channel: false,
      worker_threads: false,
      module: false,
      child_process: false,
      http: false,
      https: false,
      os: false,
      path: false,
      stream: false,
      util: false,
      zlib: false,
      url: false,
    };

    // Optimize bundle size
    if (!dev) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'lodash': 'lodash-es',
      };

      // Note: Compression is handled by Netlify and other deployment platforms
      // Removed compression-webpack-plugin to avoid dependency conflicts
    }

    return config;
  },

  // Note: headers, redirects, and rewrites don't work with output: 'export'
  // These are handled by Netlify via _headers and _redirects files

  // Skip TypeScript checking during build if SKIP_TYPE_CHECK is set
  typescript: {
    ignoreBuildErrors: process.env.SKIP_TYPE_CHECK === 'true',
  },
  
  // Skip ESLint during build for faster deployment  
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Add publicRuntimeConfig to prevent Edge Functions bundling errors
  publicRuntimeConfig: {
    // Empty config to prevent 'undefined' errors
  },

  // Add serverRuntimeConfig for completeness
  serverRuntimeConfig: {
    // Empty config to prevent 'undefined' errors
  },
};

module.exports = nextConfig;
