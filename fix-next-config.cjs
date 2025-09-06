const fs = require('fs');

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
  }
};
;
module.exports = nextConfig;
`;

// Write the clean next.config.js;
fs.writeFileSync('next.config.js', cleanNextConfig);

console.log('Clean next.config.js created!');
