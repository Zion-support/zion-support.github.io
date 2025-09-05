const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
<<<<<<< HEAD
  }
};

module.exports = nextConfig;
=======
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
