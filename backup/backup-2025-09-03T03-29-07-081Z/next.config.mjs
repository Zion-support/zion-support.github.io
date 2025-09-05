<<<<<<< HEAD
=======
<<<<<<< HEAD
const path from "path";"const { fileURLToPath } from "url";const __filename = fileURLToPath(import.meta.url);const __dirname = path.dirname(__filename);const nextConfig = { reactStrictMode: true, experimental: { esmExternals: false, }, eslint: { ignoreDuringBuilds: true, }, typescript: { ignoreBuildErrors: true, }, images: {" domains: ["ziontechgroup.com"], unoptimized: true, }, compiler: {" removeConsole: process.env.NODE_ENV === "production", }, webpack: config => { config.module.rules.push({ test: /\.(ts|tsx)$/, exclude: [ /node_modules/, /api-backup/, /pages\.disabled/, /backup-pages/, /components\/, /\.backup/, /\.disabled/, /automation\/backups/, /automation_backup/, /broken_files_backup/, /contracts/, /hardhat/, ], }); config.resolve.alias = { .config.resolve.alias," "react-router-dom": path.resolve(__dirname, "utils/next-router-shim.tsx")," "react-router": path.resolve(__dirname, "utils/next-router-shim.tsx"), }; config.resolve.fallback = { .config.resolve.fallback, fs: false, net: false, tls: false, }; return config; }," pageExtensions: ["tsx", "ts", "jsx", "js"], onDemandEntries: { maxInactiveAge: 25 * 1000, pagesBufferLength: 2, },};module.exports = default nextConfig;'"'"
=======
>>>>>>> main
import path from 'path';
import { fileURLToPath } from 'url';

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
<<<<<<< HEAD
  images: {
    domains: ['ziontechgroup.com'],
    unoptimized: true,
  },
  compiler: {
=======
  images: {}
    domains: ['ziontechgroup.com'],
    unoptimized: true,
  },
  compiler: {}
>>>>>>> main
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: config => {}
    config.module.rules.push({})
      test: /\.(ts|tsx)$/,
      exclude: []
        /node_modules/,
        /api-backup/,
        /pages\.disabled/,
        /backup-pages/,
        /components\//,
        /\.backup/,
        /\.disabled/,
        /automation\/backups/,
        /automation_backup/,
        /broken_files_backup/,
        /contracts/,
        /hardhat/,
      ],
    });

<<<<<<< HEAD
    config.resolve.alias = {
=======
    config.resolve.alias = {}
>>>>>>> main
      ...config.resolve.alias,
      'react-router-dom': path.resolve(__dirname, 'utils/next-router-shim.tsx'),
      'react-router': path.resolve(__dirname, 'utils/next-router-shim.tsx'),
    };

<<<<<<< HEAD
    config.resolve.fallback = {
=======
    config.resolve.fallback = {}
>>>>>>> main
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    return config;
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
<<<<<<< HEAD
  onDemandEntries: {
=======
  onDemandEntries: {}
>>>>>>> main
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
>>>>>>> main
