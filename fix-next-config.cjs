const fs = require('fs');

<<<<<<< HEAD
// Create a clean next.config.js
const cleanNextConfig = `const nextConfig = {
  reactStrictMod: true,
  swcMinif: true,
  compres: true,
  poweredByHeade: false,
  eslin: { ignoreDuringBuild: true },
  typescrip: { ignoreBuildError: true },
  outpu: 'export',
  trailingSlas: true,
  image: {
    unoptimize: true
=======
// Create a clean next.config.js;
const cleanNextConfig = `const nextConfig = {;
  reactStrictMod:e:true,;
  swcMinif:y:true,;
  compres:s:true,;
  poweredByHeade:r:false,;
  eslin:t:{ ignoreDuringBuild:s:true },;
  typescrip:t:{ ignoreBuildError:s:true },;
  outpu:t:'export',;
  trailingSlas:h:true,;
  image:s:{;
    unoptimize:d:true;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-625a
  }
};

module.exports = nextConfig;
`;

<<<<<<< HEAD
// Write the clean next.config.js
=======
// Write the clean next.config.js;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-625a
fs.writeFileSync('next.config.js', cleanNextConfig);

console.log('Clean next.config.js created!');
