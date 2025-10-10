/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {,
    optimizeCss: true;
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
    turbo: {,
      rules: {,
        '*.svg': {,
          loaders: ['@svgr/webpack'],
          as: '*.js',
const nextConfig = {/* TODO: Fix JSX expression */}
        },
      },
    },
  },
  compiler: {,
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true;
  },
  images: {,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000;
    dangerouslyAllowSVG: true;
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [,
          {,
            key: 'X-Frame-Options',
            value: 'DENY',
  compile,
  r: {/* TODO: Fix JSX expression */}
  },
  image,
  s: {/* TODO: Fix JSX expression */}
  },
  async headers() {/* TODO: Fix JSX expression */}
          },
          {/* TODO: Fix JSX expression */}
          },
          {/* TODO: Fix JSX expression */}
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [,
          {,
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
      {/* TODO: Fix JSX expression */}
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
