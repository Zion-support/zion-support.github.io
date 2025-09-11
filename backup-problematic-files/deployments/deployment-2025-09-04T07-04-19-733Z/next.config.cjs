<<<<<<< HEAD:deployments/deployment-2025-09-04T07-04-19-733Z/next.config.cjs
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const nextConfig = { reactStrictMode: true,"" outputFileTracingRoot: "/workspace"," images: {" formats: ["image/avif", "image/webp"]," minimumCacheTTL: 60 * 60 * 24, / 1 day"" remotePatterns: [{ protocol: "https", hostname: "ziontechgroup.com" },"" { protocol: "https", hostname: "www.ziontechgroup.com" },"" { protocol: "https", hostname: "images.unsplash.com" } ] }," poweredByHeader: false, async headers() { return [{"" source: "/(.*)"," headers: ["" { key: "X-DNS-Prefetch-Control", value: "on" },"" { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },"" { key: "X-Frame-Options", value: "SAMEORIGIN" },"" { key: "X-Content-Type-Options", value: "nosniff" },"" { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },"" { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }, {"" key: "Content-Security-Policy"," value: ["" "default-src "self"","" "script-src "self" "unsafe-inline" "unsafe-eval" https: ","" "style-src "self" "unsafe-inline" https: ","" "img-src "self" data: https:","" "font-src "self" data: https:","" "connect-src "self" https: ","" "frame-ancestors "self"","" "base-uri "self"","" "form-action "self""" ].join("; ") } ] }, {"" source: "/_next/static/(.*)","" headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" } ] }, {"" source: "/public/(.*)","" headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" } ] } ]}};module.exports = nextConfig;"""
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
const nextConfig = { reactStrictMode: true,"" outputFileTracingRoot: "/workspace"," images: {" formats: ["image/avif", "image/webp"]," minimumCacheTTL: 60 * 60 * 24, / 1 day"" remotePatterns: [{ protocol: "https", hostname: "ziontechgroup.com" },"" { protocol: "https", hostname: "www.ziontechgroup.com" },"" { protocol: "https", hostname: "images.unsplash.com" } ] }," poweredByHeader: false, async headers() { return [{"" source: "/(.*)"," headers: ["" { key: "X-DNS-Prefetch-Control", value: "on" },"" { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },"" { key: "X-Frame-Options", value: "SAMEORIGIN" },"" { key: "X-Content-Type-Options", value: "nosniff" },"" { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },"" { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }, {"" key: "Content-Security-Policy"," value: ["" "default-src "self"","" "script-src "self" "unsafe-inline" "unsafe-eval" https: ","" "style-src "self" "unsafe-inline" https: ","" "img-src "self" data: https:","" "font-src "self" data: https:","" "connect-src "self" https: ","" "frame-ancestors "self"","" "base-uri "self"","" "form-action "self""" ].join("; ") } ] }, {"" source: "/_next/static/(.*)","" headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" } ] }, {"" source: "/public/(.*)","" headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" } ] } ]}};module.exports = nextConfig;"""
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/deployments/deployment-2025-09-04T07-04-19-733Z/next.config.cjs
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD:deployments/deployment-2025-09-04T07-04-19-733Z/next.config.cjs
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
      {
        source: '/public/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      }
    ]}
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/deployments/deployment-2025-09-04T07-04-19-733Z/next.config.cjs
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {}
        "source": '/public/(.*)',
        "headers": [{ key: 'Cache-Control', "value": 'public, max-age=31536000, immutable' };]
        ];
      };
    ]};
};
<<<<<<< HEAD:deployments/deployment-2025-09-04T07-04-19-733Z/next.config.cjs
module.exports = nextConfig;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

module.exports = nextConfig;

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

module.exports = nextConfig;

=======
module.exports = nextConfig;
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
module.exports = nextConfig;
=======

module.exports = nextConfig;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======

module.exports = nextConfig;

>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/deployments/deployment-2025-09-04T07-04-19-733Z/next.config.cjs
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
