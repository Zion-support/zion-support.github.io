import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function DocumentationPage() {
  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for our AI and IT solutions, APIs, and development guides." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-8">Documentation</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive guides, API documentation, and resources to help you get the most out of our AI and IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Getting Started</h3>
              <p className="text-gray-300 mb-6">
                Quick start guides and tutorials to help you begin using our solutions.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Installation Guide</li>
                <li>• First Steps Tutorial</li>
                <li>• Configuration Setup</li>
                <li>• Common Use Cases</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">API Reference</h3>
              <p className="text-gray-300 mb-6">
                Complete API documentation with examples and code snippets.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• REST API Endpoints</li>
                <li>• Authentication</li>
                <li>• Request/Response Examples</li>
                <li>• Error Handling</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">SDKs & Libraries</h3>
              <p className="text-gray-300 mb-6">
                Software development kits and libraries for various programming languages.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Python SDK</li>
                <li>• JavaScript/Node.js SDK</li>
                <li>• Java SDK</li>
                <li>• C# SDK</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Solutions</h3>
              <p className="text-gray-300 mb-6">
                Documentation for our AI services and machine learning solutions.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Machine Learning APIs</li>
                <li>• Model Training Guides</li>
                <li>• Data Preprocessing</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Cloud Services</h3>
              <p className="text-gray-300 mb-6">
                Guides for deploying and managing cloud infrastructure solutions.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Cloud Deployment</li>
                <li>• Infrastructure Management</li>
                <li>• Monitoring & Logging</li>
                <li>• Security Best Practices</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Troubleshooting</h3>
              <p className="text-gray-300 mb-6">
                Common issues, solutions, and debugging guides.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• FAQ</li>
                <li>• Error Codes</li>
                <li>• Debugging Tips</li>
                <li>• Performance Issues</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="/docs/api" className="block p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                <h3 className="text-lg font-bold mb-2">API Documentation</h3>
                <p className="text-gray-400 text-sm">Complete API reference</p>
              </a>
              <a href="/docs/sdks" className="block p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                <h3 className="text-lg font-bold mb-2">SDKs & Libraries</h3>
                <p className="text-gray-400 text-sm">Download and integrate</p>
              </a>
              <a href="/docs/examples" className="block p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                <h3 className="text-lg font-bold mb-2">Code Examples</h3>
                <p className="text-gray-400 text-sm">Sample implementations</p>
              </a>
              <a href="/docs/guides" className="block p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                <h3 className="text-lg font-bold mb-2">User Guides</h3>
                <p className="text-gray-400 text-sm">Step-by-step tutorials</p>
              </a>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/support" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Contact Support
              </a>
              <a href="/tutorials" className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                View Tutorials
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}