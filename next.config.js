const nextConfig = {_reactStrictMode: true, _eslint: {
    ignoreDuringBuilds: true, },
  typescript: {_ignoreBuildErrors: true, },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  trailingSlash: true,
  images: {_domains: [
      'localhost', _'ziontechgroup.com', _'images.unsplash.com', _'via.placeholder.com', _], _formats: ['image/webp', _'image/avif'], _deviceSizes: [640, _750, _828, _1080, _1200, _1920, _2048, _3840], _imageSizes: [16, _32, _48, _64, _96, _128, _256, _384], _minimumCacheTTL: 31536000, },
  webpack: (_config, _{_dev, _isServer}) => {_if (dev) {
      config.watchOptions = {
        ignored: [
          '**/node_modules/**', _'**/.git/**', _'**/pages_backup*/**', _'**/pages.*/**', _'**/pages-*/**', _'**/pages_disabled*/**', _'**/pages.disabled*/**', _'**/pages.broken*/**', _'**/pages.corrupted*/**', _'**/pages.old*/**', _'**/pages._*/**', _'**/pages.__*/**', _'**/backup-pages/**', _'**/src.pages.disabled/**', _'**/lib_backup*/**', _'**/src_backup*/**', _'**/corrupted-files-backup*/**', _'**/performance-reports*/**', _'**/log-analysis-reports*/**', _'**/link-reports*/**', _'**/lint-target*/**', _'**/monitoring*/**', _'**/pm2-automation*/**', _'**/automation/logs*/**', _'**/automation/backup*/**', _'**/performance-*.json', _'**/performance-*.js', _'**/performance-*.cjs', _'**/performance-*.sh', _'**/performance-*.html', _'**/performance-*.md', _'**/performance-*.txt', _], _poll: 1000, _aggregateTimeout: 300, };
    }
    return config;
  },
};

export default nextConfig;
