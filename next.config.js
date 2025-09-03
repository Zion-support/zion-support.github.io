/** @type {import('next').NextConfig} */
const nextConfig = {
  "__esModule": true,
  "default": {
    "reactStrictMode": true,
    "swcMinify": true,
    "compress": true,
    "poweredByHeader": false,
    "eslint": {
      "ignoreDuringBuilds": false
    },
    "experimental": {
      "optimizePackageImports": [
        "lucide-react",
        "framer-motion",
        "@heroicons/react"
      ],
      "turbo": {
        "rules": {
          "*.svg": {
            "loaders": [
              "@svgr/webpack"
            ],
            "as": "*.js"
          }
        }
      },
      "optimizeCss": true,
      "scrollRestoration": true
    },
    "typescript": {
      "ignoreBuildErrors": false
    },
    "images": {
      "domains": [
        "ziontechgroup.com"
      ],
      "formats": [
        "image/webp",
        "image/avif"
      ],
      "deviceSizes": [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
      ],
      "imageSizes": [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
      ],
      "minimumCacheTTL": 60,
      "dangerouslyAllowSVG": true,
      "contentSecurityPolicy": "default-src 'self'; script-src 'none'; sandbox;"
    },
    "compiler": {
      "removeConsole": false,
      "styledComponents": true
    },
    "onDemandEntries": {
      "maxInactiveAge": 25000,
      "pagesBufferLength": 2
    }
  },
  "experimental": {
    "optimizeCss": true,
    "scrollRestoration": true,
    "optimizePackageImports": [
      "lucide-react",
      "framer-motion"
    ]
  },
  "compiler": {
    "removeConsole": false
  },
  "images": {
    "formats": [
      "image/webp",
      "image/avif"
    ],
    "minimumCacheTTL": 60,
    "dangerouslyAllowSVG": true,
    "contentSecurityPolicy": "default-src 'self'; script-src 'none'; sandbox;"
  }
};

module.exports = nextConfig;
