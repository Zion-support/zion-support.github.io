const fs = require('fs');

// Create a clean package.json with the essential dependencies
const cleanPackageJson = {
  name: 'ziontechgroup-site',
  version: '1.0.0',
  private: true,
  scripts: {
    dev: 'next dev',
    build: 'next build',
    start: 'next start',
    lint: 'next lint',
    prebuild: 'echo "Starting build..."',
  },
  dependencies: {
    next: '^15.5.2',
    react: '^18.2.0',
    'react-dom': '^18.2.0',
    'framer-motion': '^10.16.4',
    'lucide-react': '^0.263.1',
    tailwindcss: '^3.3.0',
    autoprefixer: '^10.4.14',
    postcss: '^8.4.24',
  },
  devDependencies: {
    '@types/node': '^20.4.5',
    '@types/react': '^18.2.14',
    '@types/react-dom': '^18.2.6',
    typescript: '^5.0.0',
    eslint: '^8.45.0',
    'eslint-config-next': '^15.5.2',
  },
};

// Write the clean package.json
fs.writeFileSync('package.json', JSON.stringify(cleanPackageJson, null, 2));

console.log('Clean package.json created!');
