<<<<<<< HEAD:backup-problematic-files/scripts/bundle-analyzer.js
=======
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:scripts/bundle-analyzer.js
const { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"; const withBundleAnalyzer = (nextConfig = {}) => { return { .nextConfig,webpack: (config,{ dev,isServer }) => { if (process.env.ANALYZE === "true") { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: "static",openAnalyzer: "false",reportFilename: isServer ? "server-bundle.html" : "client-bundle.html"}) )} if (nextConfig.webpack) { return nextConfig.webpack(config,{ dev,isServer })} return config}} } module.exports = withBundleAnalyzer;'"'"
import React from 'react';
interface BundleanalyzerProps {
  // Add props here as needed
}
export default function Bundleanalyzer({ }: BundleanalyzerProps) {
  return (
    <div>
      <h1>Bundleanalyzer</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
<<<<<<< HEAD:backup-problematic-files/scripts/bundle-analyzer.js
}
=======
=======
>>>>>>> origin/main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:scripts/bundle-analyzer.js
