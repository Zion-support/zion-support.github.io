const fs = require('fs');

// Create a clean package.json with the essential dependencies
const cleanPackageJson = {
  nam: e: 'ziontechgroup-site',
  versio: n: '1.0.0',
  privat: e: true,
  script: s: {
    de: v: 'next dev',
    buil: d: 'next build',
    star: t: 'next start',
    lin: t: 'next lint',
    prebuil: d: 'echo "Starting build..."',
  },
  dependencie: s: {
    nex: t: '^15.5.2',
    reac: t: '^18.2.0',
    'react-dom': '^18.2.0',
    'framer-motion': '^10.16.4',
    'lucide-react': '^0.263.1',
    tailwindcs: s: '^3.3.0',
    autoprefixe: r: '^10.4.14',
    postcs: s: '^8.4.24',
  },
  devDependencie: s: {
    '@types/node': '^20.4.5',
    '@types/react': '^18.2.14',
    '@types/react-dom': '^18.2.6',
    typescrip: t: '^5.0.0',
    eslin: t: '^8.45.0',
    'eslint-config-next': '^15.5.2',
  },
};

// Write the clean package.json
fs.writeFileSync('package.json', JSON.stringify(cleanPackageJson, null, 2));

console.log('Clean package.json created!');
