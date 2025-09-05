const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
<<<<<<< HEAD
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  trailingSlash: true,
  images: {
    domains: [
      'localhost',
      'ziontechgroup.com',
      'images.unsplash.com',
      'via.placeholder.com'
    ],
    formats: ['image/webp', 'image/avif'],
=======
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: [&apos;tsx&apos;, &apos;ts&apos;, &apos;jsx&apos;, &apos;js&apos;],
  trailingSlash: true,
  images: {
    domains: [
      &apos;localhost&apos;,
      &apos;ziontechgroup.com&apos;,
      &apos;images.unsplash.com&apos;,
      &apos;via.placeholder.com&apos;],
    formats: [&apos;image/webp&apos;, &apos;image/avif&apos;],
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000
  },
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        ignored: [
          &apos;**/node_modules/**&apos;,
          &apos;**/.git/**&apos;,
          &apos;**/pages_backup*/**&apos;,
          &apos;**/pages.*/**&apos;,
          &apos;**/pages-*/**&apos;,
          &apos;**/pages_disabled*/**&apos;,
          &apos;**/pages.disabled*/**&apos;,
          &apos;**/pages.broken*/**&apos;,
          &apos;**/pages.corrupted*/**&apos;,
          &apos;**/pages.old*/**&apos;,
          &apos;**/pages._*/**&apos;,
          &apos;**/pages.__*/**&apos;,
          &apos;**/backup-pages/**&apos;,
          &apos;**/src.pages.disabled/**&apos;,
          &apos;**/lib_backup*/**&apos;,
          &apos;**/src_backup*/**&apos;,
          &apos;**/corrupted-files-backup*/**&apos;,
          &apos;**/performance-reports*/**&apos;,
          &apos;**/log-analysis-reports*/**&apos;,
          &apos;**/link-reports*/**&apos;,
          &apos;**/lint-target*/**&apos;,
          &apos;**/monitoring*/**&apos;,
          &apos;**/pm2-automation*/**&apos;,
          &apos;**/automation/logs*/**&apos;,
          &apos;**/automation/backup*/**&apos;,
          &apos;**/performance-*.json&apos;,
          &apos;**/performance-*.js&apos;,
          &apos;**/performance-*.cjs&apos;,
          &apos;**/performance-*.sh&apos;,
          &apos;**/performance-*.html&apos;,
          &apos;**/performance-*.md&apos;,
          &apos;**/performance-*.txt&apos;
        ],
        poll: 1000,
        aggregateTimeout: 300
      }
    }
    return config
  }
}

export default nextConfig