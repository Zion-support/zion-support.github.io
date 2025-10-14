import withBundleAnalyzer from '; import crypto from ';crypto;,';,enabled: process.env.ANALYZE === 'true'
/** @type {} import( 'next,';,domains: [ 'images.unsplash.com', 'via.placeholder.com', 'ziontechgroup.com,';,formats: ['image/webp', ,'

);,
contentSecurityPolicy: "default-src 'self'; script-src 'none)'""'"'
}
]'""'"'
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      'via.placeholder.com',
      'ziontechgroup.com'
    ],
    formats: ['image/webp', 'image/avif']
  },
  experimental: {
    optimizeCss: true
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
};

module.exports = nextConfig;

>>>>>>> cursor/fix-errors-and-merge-to-main-d09f
