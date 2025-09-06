
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
  output: "standalone",
  trailingSlash: false,
  distDir: ".next",
};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
