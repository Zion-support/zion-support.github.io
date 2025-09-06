
/** @type {import ('next').NextConfig} */;
const next_config = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  page_extensions: ['tsx', 'ts', 'jsx', 'js'],
  images: {
    domains: ["localhost", "ziontechgroup.com"],
  },
  output: 'standalone',
  trailing_slash: false,
  dist_dir: '.next',
}
;
module.exports = next_config;
;

=======

    domains: ["localhost", "ziontechgroup.com"],
  },
  output: 'standalone',
  trailingSlash: false,
  distDir: '.next',
};
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
module.exports = nextConfig;
=======
<<<<<<< HEAD

module.exports = nextConfig;
=======
module.exports = nextConfig;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
