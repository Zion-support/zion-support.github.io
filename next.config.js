/** @type {import('next').NextConfig} */;
const nextConfig = {reactStrictMode: true,experimental: {optimizePackageImports: ['@radix-ui/react-icons'];
  },images: {domains: ['images.unsplash.com', 'via.placeholder.com'],formats: ['image/webp', 'image/avif'];
  },typescript: {ignoreBuildErrors: true;
  },eslint: {ignoreDuringBuilds: true;
  },webpack: (config, { dev, isServer }) => {// Exclude problematic directories from webpack compilation;
    config.watchOptions = {...config.watchOptions,ignored: [;
        '**/node_modules/**','**/apps/**','**/temp_conflicts/**','**/pages_backup*/**','**/pages.*/**','**/pages-*/**','**/pages_disabled*/**','**/pages.disabled*/**','**/pages.broken*/**','**/pages.corrupted*/**','**/pages.old*/**','**/pages._*/**','**/pages.__*/**','**/backup-pages/**','**/src.pages.disabled/**','**/lib_backup*/**','**/src_backup*/**','**/corrupted-files-backup*/**','**/performance-reports*/**','**/log-analysis-reports*/**','**/link-reports*/**','**/lint-target*/**','**/monitoring*/**','**/pm2-automation*/**','**/automation/logs*/**','**/automation/backup*/**';
      ];
    }// Add custom webpack rule to ignore problematic directories;
    config.module.rules.push({test: /\.(ts|tsx|js|jsx)$/,include: [;
        /apps\//,/pages\.disabled/,/backup-pages/,/\.backup/,/\.disabled/,/automation\/backups/,/automation_backup/,/broken_files_backup/,/contracts/,/hardhat/;
      ],use: 'ignore-loader';
    })// Add fallback for problematic modules;
    config.resolve.fallback = {...config.resolve.fallback,fs: false,net: false,tls: false;
    }return config;
  }
}module.exports = nextConfig;