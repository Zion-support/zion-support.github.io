<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f





ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
<<<<<<< HEAD
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======



ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"; const withBundleAnalyzer = (nextConfig = {}) => { return { .nextConfig,webpack: (config,{ dev,isServer }) => { if (process.env.ANALYZE === "true") { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: "static",openAnalyzer: "false",reportFilename: isServer ? "server-bundle.html" : "client-bundle.html"}) )} if (nextConfig.webpack) { return nextConfig.webpack(config,{ dev,isServer })} return config}} } module.exports = withBundleAnalyzer;'"'"
import React from 'react';
interface BundleanalyzerProps {
  // Add props here as needed
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
ursor/fix-syntax-push-and-merge-to-main-40de;
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
const { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"; const withBundleAnalyzer = (nextConfig = {}) => { return { .nextConfig,webpack: (config,{ dev,isServer }) => { if (process.env.ANALYZE === "true") { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: "static",openAnalyzer: "false",reportFilename: isServer ? "server-bundle.html" : "client-bundle.html"}) )} if (nextConfig.webpack) { return nextConfig.webpack(config,{ dev,isServer })} return config}} } module.exports = withBundleAnalyzer;'"'"""
import React from 'react';
interface BundleanalyzerProps {
  // TODO: Implement
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
  // Add props here as needed;






origin/cursor/integrate-build-improve-and-re-verify-c7b5

=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


ursor/fix-syntax-push-and-merge-to-main-40de;
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
}
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


}



}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export default function Bundleanalyzer({ }: BundleanalyzerProps) {
=======
export default function Bundleanalyzer({ }: BundleanalyzerProps) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <div>
</div>
      <h1>Bundleanalyzer</h1>
      <p>This component is currently under development.</p>
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
=======
=======
=======
>>>>>>> origin/main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

<<<<<<< HEAD
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
}
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

}


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======






>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
}
<<<<<<< HEAD
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
}
=======
>>>>>>> origin/main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
}




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


}





origin/cursor/integrate-build-improve-and-re-verify-c7b5


}

}
    </div>)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
