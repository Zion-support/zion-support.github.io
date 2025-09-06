<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"; const withBundleAnalyzer = (nextConfig = {}) => { return { .nextConfig,webpack: (config,{ dev,isServer }) => { if (process.env.ANALYZE === "true") { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: "static",openAnalyzer: "false",reportFilename: isServer ? "server-bundle.html" : "client-bundle.html"}) )} if (nextConfig.webpack) { return nextConfig.webpack(config,{ dev,isServer })} return config}} } module.exports = withBundleAnalyzer;'"'"
import React from 'react';
interface BundleanalyzerProps {
  // Add props here as needed

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export default function Bundleanalyzer({ }: BundleanalyzerProps) {
  return (
    <div>
      <h1>Bundleanalyzer</h1>
      <p>This component is currently under development.</p>
    </div>
  );
<<<<<<< HEAD
=======

}

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

