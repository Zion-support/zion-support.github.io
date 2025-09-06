
/** @type {import ('next').NextConfig} */;
const next_config = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  page_extensions: ['tsx', 'ts', 'jsx', 'js'],
  images: {
    domains: ["localhost", "ziontechgroup.com"]
  }
  output: 'standalone'
  trailingSlash: false
  distDir: '.next'
}
    domains: ["localhost", "ziontechgroup.com"],
  },
  output: 'standalone',
  trailingSlash: false,
  distDir: '.next',
};
<<<<<<< HEAD
module.exports = nextConfig;

module.exports = nextConfig;
module.exports = nextConfig;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
