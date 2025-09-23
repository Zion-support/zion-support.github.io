/** @type {import('next').NextConfig} */
const nextConfig = {}
  "reactStrictMode": true,
  "outputFileTracingRoot": '/workspace',
  "images": {}
    formats: ['image/avif', 'image/webp'],
    "minimumCacheTTL": 60 * 60 * 24, // 1 day;
    "remotePatterns": [{ protocol: 'https', "hostname": 'ziontechgroup.com' },]
      { "protocol": 'https', "hostname": 'www.ziontechgroup.com' },
      { "protocol": 'https', "hostname": 'images.unsplash.com' };
    ];
  },
  "poweredByHeader": false,
  async headers() {}
    return [{}]
        "source": '/(.*)',
        "headers": []
          { key: 'X-DNS-Prefetch-Control', "value": 'on' },
          { "key": 'Strict-Transport-Security', "value": 'max-age=63072000; includeSubDomains; preload' },
          { "key": 'X-Frame-Options', "value": 'SAMEORIGIN' },
          { "key": 'X-Content-Type-Options', "value": 'nosniff' },
          { "key": 'Referrer-Policy', "value": 'strict-origin-when-cross-origin' },
          { "key": 'Permissions-Policy', "value": 'camera=(), microphone=(), geolocation=()' },
          {}
            "key": 'Content-Security-Policy',
            "value": []
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' "https": ",
              "style-src 'self' 'unsafe-inline' "https": ",
              "img-src 'self' "data": https:",
              "font-src 'self' "data": https:",
              "connect-src 'self' "https": ",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self''
            ].join('; ');
          };
        ];
      },
      {}
        "source": '/_next/static/(.*)',
        "headers": [{ key: 'Cache-Control', "value": 'public, max-age=31536000, immutable' };]
        ];
      },
      {}
        "source": '/public/(.*)',
        "headers": [{ key: 'Cache-Control', "value": 'public, max-age=31536000, immutable' };]
        ];
      };
    ]};
};

module.exports = nextConfig;

