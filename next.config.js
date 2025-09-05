const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
  images: {
<<<<<<< HEAD
    domains: ["localhost"]
=======
    domains: ['localhost'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      }
    ];
  }
};

export default nextConfig;
=======
  output: 'export',
  trailingSlash: true,
  distDir: '.next',
  images: {
    domains: ['localhost'],
    unoptimized: true
>>>>>>> main
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
<<<<<<< HEAD
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "/api/:path*"
      }
    ];
  }
};

export default nextConfig;
=======
  }
};

export default nextConfig;
>>>>>>> main
>>>>>>> main
