import withBundleAnalyzer from '@next/bundle-analyzer';';
import crypto from 'crypto';';';
const bundleAnalyzer = withBundleAnalyzer({
  // TODO: Add properties
}
  // TODO: Add properties
}
  enabled: process.env.ANALYZE === 'true','
})
/** @type {import('next').NextConfig} */;';
const nextConfig = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  eslint: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    ignoreDuringBuilds: true,
  },
  typescript: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    ignoreBuildErrors: true,
  },

  images: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    domains: ['images.unsplash.com', 'via.placeholder.com', 'ziontechgroup.com'],'
    formats: ['image/webp', 'image/avif'],'
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox,","'"
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    // Fix for "self is not defined" error by providing a polyfill"
    if (isServer) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      config.plugins.push(
  // TODO: Add parameters
)
        new webpack.DefinePlugin({
  // TODO: Add properties
}
  // TODO: Add properties
}
          'self': 'undefined','
        })
      )
    }

    // Optimize bundle size
    config.optimization = {
  // TODO: Add properties
}
  // TODO: Add properties
}
      ...config.optimization,
      splitChunks: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        chunks: 'all','
        cacheGroups: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          default: false,
          vendors: false,
          framework: {
  // TODO: Add properties
}
  // TODO: Add properties
}
            chunks: 'all','
            name: 'framework','
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    test(module) {
  // TODO: Add properties
}
  // TODO: Add properties
}
              return (
  // TODO: Add parameters
)
                module.size() > 160000 &&
                /node_modules[/\\]/.test(module.identifier())
              )
  },
            name(module) {;
const _hash = crypto.createHash('sha1')'
              _hash.update(module.identifier())
              return _hash.digest('hex').substring(0, 8)'
  },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          commons: {
  // TODO: Add properties
}
  // TODO: Add properties
}
            name: 'commons','
            minChunks: 2,
            priority: 20,
          },
          shared: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    name(module, chunks) {
  // TODO: Add properties
}
  // TODO: Add properties
}
              return (
  // TODO: Add parameters
)
                'shared-' +'
                crypto
                  .createHash('sha1')'
                  .update(chunks.reduce((acc, chunk) => acc + chunk.name, ''))'
                  .digest('hex')'
                  .substring(0, 8)
              )
  },
            priority: 10,
            minChunks: 2,
            reuseExistingChunk: true,
          },
        },
        maxInitialRequests: 25,
        minSize: 20000,
      },
      minimize: !dev,
    }

    // Tree shaking
    config.optimization.usedExports = true
    return config
  },

  async headers() {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return [
  // TODO: Add items
]
  // TODO: Add items
]
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        source: '/:path*','
        headers: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            key: 'X-Frame-Options','
            value: 'DENY','
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            key: 'X-Content-Type-Options','
            value: 'nosniff','
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            key: 'Referrer-Policy','
            value: 'strict-origin-when-cross-origin','
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            key: 'X-XSS-Protection','
            value: '1, mode=block','
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            key: 'Permissions-Policy','
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()','
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            key: 'Strict-Transport-Security','
            value: 'max-age=63072000; includeSubDomains, preload','
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            key: 'Content-Security-Policy','
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self',","'"
          },
        ],
      },
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        source: '/_next/static/:path*','
        headers: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            key: 'Cache-Control','
            value: 'public, max-age=31536000, immutable','
          },
        ],
      },
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        source: '/images/:path*','
        headers: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            key: 'Cache-Control','
            value: 'public, max-age=86400, s-maxage=604800, stale-while-revalidate','
          },
        ],
      },
    ]
  },

  async redirects() {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return [
  // TODO: Add items
]
  // TODO: Add items
]
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        source: '/home','
        destination: '/','
        permanent: true,
      },
    ]
  },

  experimental: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@heroicons/react'],'
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'],'
  },

  // Performance optimizations
  modularizeImports: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    'lucide-react': {'
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}','
    },
    '@heroicons/react': {'
      transform: '@heroicons/react/{{member}}','
    },
  },

  // Compiler optimizations
  compiler: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    removeConsole: process.env.NODE_ENV === 'production' ? {'
      exclude: ['error', 'warn'],'
    } : false,
  },
}
;
export default bundleAnalyzer(nextConfig)