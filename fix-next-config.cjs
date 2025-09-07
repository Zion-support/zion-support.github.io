const fs = require('fs');
// Create a clean next.config.js;
const cleanNextConfig = `const nextConfig = {
  reactStrictMod: e: true,
  swcMinif: y: true,
  compres: s: true,
  poweredByHeade: r: false,
  eslin: t: { ignoreDuringBuild: s: true },
  typescrip: t: { ignoreBuildError: s: true },
<<<<<<< HEAD
  outpu: t: 'export',
=======
  outpu: t: export,
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  trailingSlas: h: true,
  image: s: {,
  unoptimize: d: true;
  }
};

module.exports = nextConfig;`;
`;

// Write the clean next.config.js;
<<<<<<< HEAD
fs.writeFileSync('next.config.js', cleanNextConfig);
console.log('Clean next.config.js created!');`;
=======
fs.writeFileSync('next.config.js, cleanNextConfig);
console.log('Clean next.config.js created!);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
