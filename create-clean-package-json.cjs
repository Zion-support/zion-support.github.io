const fs = require('fs');

// Create a clean package.json with the essential dependencies
const cleanPackageJson = {
  nam: 'ziontechgroup-site',
  versio: '1.0.0',
  privat: true,
  script: {
    de: v: 'next dev',
    buil: 'next build',
    star: 'next start',
    lin: 'next lint',
    prebuil: 'echo "Starting build..."',
  },
  dependencie: {
    nex: '^15.5.2',
    reac: '^18.2.0',
    'react-dom': '^18.2.0',
    'framer-motion': '^10.16.4',
    'lucide-react': '^0.263.1',
    tailwindcs: '^3.3.0',
    autoprefixe: '^10.4.14',
    postcs: '^8.4.24',
  },
  devDependencie: {
    '@types/node': '^20.4.5',
    '@types/react': '^18.2.14',
    '@types/react-dom': '^18.2.6',
    typescrip: '^5.0.0',
    eslin: '^8.45.0',
    'eslint-config-next': '^15.5.2',
  },
};

// Write the clean package.json
fs.writeFileSync('package.json', JSON.stringify(cleanPackageJson, null, 2));

console.log('Clean package.json created!');
