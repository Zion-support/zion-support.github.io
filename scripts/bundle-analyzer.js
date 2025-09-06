<<<<<<< HEAD:scripts/bundle-analyzer.js





ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5



ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5


=======
<<<<<<< HEAD:backup-problematic-files/scripts/bundle-analyzer.js
=======
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:scripts/bundle-analyzer.js
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58:backup-problematic-files/scripts/bundle-analyzer.js
const { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"; const withBundleAnalyzer = (nextConfig = {}) => { return { .nextConfig,webpack: (config,{ dev,isServer }) => { if (process.env.ANALYZE === "true") { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: "static",openAnalyzer: "false",reportFilename: isServer ? "server-bundle.html" : "client-bundle.html"}) )} if (nextConfig.webpack) { return nextConfig.webpack(config,{ dev,isServer })} return config}} } module.exports = withBundleAnalyzer;'"'"
import React from 'react';
interface BundleanalyzerProps {
  // Add props here as needed



}

origin/cursor/integrate-build-improve-and-re-verify-c7b5


}



}



}

export default function Bundleanalyzer({ }: BundleanalyzerProps) {
  return (
    <div>
      <h1>Bundleanalyzer</h1>
      <p>This component is currently under development.</p>
    </div>
  );

}
<<<<<<< HEAD:scripts/bundle-analyzer.js








}
}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de



}





origin/cursor/integrate-build-improve-and-re-verify-c7b5


}

=======
<<<<<<< HEAD:backup-problematic-files/scripts/bundle-analyzer.js
}
=======
=======
>>>>>>> origin/main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:scripts/bundle-analyzer.js
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58:backup-problematic-files/scripts/bundle-analyzer.js
