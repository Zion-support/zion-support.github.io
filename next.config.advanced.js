/** @type {import('next').NextConfig} */;';
const nextConfig = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  experimental: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    optimizeCss: true,
    optimizePackageImports: ['@heroicons/react', 'lucide-react', 'framer-motion'],'
  },
  compiler: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    removeConsole: process.env.NODE_ENV === 'production','
  },
  images: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    formats: ['image/webp', 'image/avif'],'
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;","'"
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
        source: '/(.*)','
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
            value: 'origin-when-cross-origin','
          },
        ],
      },
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        source: '/api/(.*)','
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
            value: 'public, max-age=3600, s-maxage=3600','
          },
        ],
      },
    ]
  },
}
module.exports = nextConfig;