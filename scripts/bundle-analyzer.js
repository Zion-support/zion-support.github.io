

<<<<<<< HEAD
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"; const withBundleAnalyzer = (nextConfig = {}) => { return { .nextConfig,webpack: (config,{ dev,isServer }) => { if (process.env.ANALYZE === "true") { config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: "static",openAnalyzer: "false",reportFilename: isServer ? "server-bundle.html" : "client-bundle.html"}) )} if (nextConfig.webpack) { return nextConfig.webpack(config,{ dev,isServer })} return config}} } module.exports = withBundleAnalyzer;'"'"
=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
const { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"; const withBundleAnalyzer = (nextConfig = {}) => { return { .nextConfig,webpack: (config,{ dev,isServer }) => { if (process && process.env.ANALYZE === "true") { config && config.plugins.push( new BundleAnalyzerPlugin({ analyzerMode: "static",openAnalyzer: "false",reportFilename: isServer ? "server-bundle && bundle.html" : "client-bundle && bundle.html"}) )} if (nextConfig && nextConfig.webpack) { return nextConfig && nextConfig.webpack(config,{ dev,isServer })} return config}} } module && module.exports = withBundleAnalyzer;'"'"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/bundle-analyzer.js
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

