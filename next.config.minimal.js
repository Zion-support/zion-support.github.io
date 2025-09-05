<<<<<<< HEAD
/** @type {import('next').NextConfig} */;
const nextConfig = {;
  reactStrictMode:true,;
  eslint:{ ignoreDuringBuilds:true },;
  typescript:{ ignoreBuildErrors:true },;
  pageExtensions:['tsx', 'ts', 'jsx', 'js'],;
  images:{;
    domains:["localhost", "ziontechgroup.com"],;
  },;
  output:'standalone',;
  trailingSlash:false,;
  distDir:'.next',;
};
<<<<<<< HEAD
;
module.exports = nextConfig;
=======

module.exports = nextConfig;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
};
};
;
export default nextConfig;
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
