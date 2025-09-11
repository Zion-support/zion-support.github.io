const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import("next").NextConfig} */
const nextConfig = {}
  reactStrictMode: true,
  experimental: {}
    esmExternals: false,
  },
  eslint: {}
    ignoreDuringBuilds: true,
  },
  typescript: {}
    ignoreBuildErrors: true,
  },
    return config;
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
