const fs = require('fs');
<<<<<<< HEAD
;
// Create a clean package.json with the essential dependencies;
const cleanPackageJson = {;
  nam:e:'ziontechgroup-site',;
  versio:n:'1.0.0',;
  privat:e:true,;
  script:s:{;
    de:v:'next dev',;
    buil:d:'next build',;
    star:t:'next start',;
    lin:t:'next lint',;
    prebuil:d:'echo "Starting build..."',;
  },;
  dependencie:s:{;
    nex:t:'^15.5.2',;
    reac:t:'^18.2.0',;
    'react-dom':'^18.2.0',;
    'framer-motion':'^10.16.4',;
    'lucide-react':'^0.263.1',;
    tailwindcs:s:'^3.3.0',;
    autoprefixe:r:'^10.4.14',;
    postcs:s:'^8.4.24',;
  },;
  devDependencie:s:{;
    '@types/node':'^20.4.5',;
    '@types/react':'^18.2.14',;
    '@types/react-dom':'^18.2.6',;
    typescrip:t:'^5.0.0',;
    eslin:t:'^8.45.0',;
    'eslint-config-next':'^15.5.2',;
  },;
=======

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
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
};
;
// Write the clean package.json;
fs.writeFileSync('package.json', JSON.stringify(cleanPackageJson, null, 2));
;
console.log('Clean package.json created!');
