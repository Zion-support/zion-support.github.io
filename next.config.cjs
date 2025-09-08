/** @type {import('next).NextConfig} */
const nextConfig = {

=======
  output: export',
  images: {
    unoptimized: true},
=======

=======
>>>>>>> 19d1d1ef532f9e4690306331c74cc9ccbd0b556b
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
=======
>>>>>>> 19d1d1ef532f9e4690306331c74cc9ccbd0b556b
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
    dirs: []
  },
  typescript: {
    ignoreBuildErrors: true,
    tsconfigPath: false
  },
  experimental: {
    esmExternals: false

=======
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true},
  typescript: {
    ignoreBuildErrors: true,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-625f
  },
  images: {
    domains: ['ziontechgroup.com, images.unsplash.com', 'via.placeholder.com],
    formats: [image/webp', 'image/avif],
    unoptimized: true
  },

  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  },
  experimental: {
    esmExternals: false,
    newNextLinkBehavior: true},
  typescript: {
    ignoreBuildErrors: true},
  eslint: {
    ignoreDuringBuilds: true},
  typescript: {
    ignoreBuildErrors: true},
  images: {
    domains: [ziontechgroup.com'],
    unoptimized: true},
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-625f
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production
  },
  webpack: (config, { dev, isServer }) => {
    // Exclude problematic directories from webpack compilation
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        **/node_modules/**',
        '**/.git/**,
        **/pages_backup*/**',
        '**/pages.*/**,
        **/pages-*/**',
        '**/pages_disabled*/**,
        **/pages.disabled*/**',
        '**/pages.broken*/**,
        **/pages.corrupted*/**',
        '**/pages.old*/**,
        **/pages._*/**',
        '**/pages.__*/**,
        **/backup-pages/**',
        '**/src.pages.disabled/**,
        **/lib_backup*/**',
        '**/src_backup*/**,
        **/corrupted-files-backup*/**',
        '**/performance-reports*/**,
        **/log-analysis-reports*/**',
        '**/link-reports*/**,
        **/lint-target*/**',
        '**/monitoring*/**,
        **/pm2-automation*/**',
        '**/automation/logs*/**,
        **/automation/backup*/**',
        '**/performance-*.json,
        **/performance-*.js',
        '**/performance-*.cjs,
        **/performance-*.sh',
        '**/performance-*.html,
        **/performance-*.md',
        '**/performance-*.txt
      ],
      poll: 1000,
      aggregateTimeout: 300
    }

    // Add fallback for problematic modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false
    }

    return config;
  },
  pageExtensions: [tsx', 'ts, jsx', 'js],
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,

=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======

/** @type {import(next').NextConfig} */
  reactStrictMode: true,
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc:next.config.cjs
=======
=======
  }
}

export default nextConfig;

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
>>>>>>> 19d1d1ef532f9e4690306331c74cc9ccbd0b556b
=======
  images: {
    domains: ["localhost, ziontechgroup.com"],
    formats: ['image/webp, image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  experimental: {
    // Remove optimizePackageImports to satisfy Next 12 validation
  },
  async headers() {
    return [
      {
        source: '/(.*),
        headers: [
          { key: X-Content-Type-Options', value: 'nosniff },
          { key: X-Frame-Options', value: 'DENY },
          { key: X-XSS-Protection', value: '1; mode=block },
          { key: Referrer-Policy', value: 'origin-when-cross-origin' }
        ]
      }
    ];
  }
}

module.exports = nextConfig;
>>>>>>> origin/chore/fix-automation-and-build

=======
    pagesBufferLength: 2
  }
}

module.exports = nextConfig;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-625f
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
