import React from 'react';
import { Helmet } from 'react-helmet-async';

const DocsPage = () => {
  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI and IT solutions. API references, guides, and tutorials." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive guides, API references, and tutorials to help you get the most out of our solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Getting Started</h3>
              <p className="text-gray-300 mb-6">
                Quick start guides and setup instructions for our core services.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Installation guides</li>
                <li>• Configuration setup</li>
                <li>• First steps tutorials</li>
                <li>• Common issues</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">API Reference</h3>
              <p className="text-gray-300 mb-6">
                Complete API documentation with examples and code snippets.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• REST API endpoints</li>
                <li>• Authentication methods</li>
                <li>• Request/response formats</li>
                <li>• Error handling</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">SDKs & Libraries</h3>
              <p className="text-gray-300 mb-6">
                Client libraries and SDKs for popular programming languages.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• JavaScript/TypeScript</li>
                <li>• Python</li>
                <li>• Java</li>
                <li>• C#/.NET</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Tutorials</h3>
              <p className="text-gray-300 mb-6">
                Step-by-step tutorials for common use cases and integrations.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Integration examples</li>
                <li>• Best practices</li>
                <li>• Advanced features</li>
                <li>• Troubleshooting</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Guides</h3>
              <p className="text-gray-300 mb-6">
                In-depth guides covering advanced topics and enterprise features.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Architecture patterns</li>
                <li>• Security best practices</li>
                <li>• Performance optimization</li>
                <li>• Deployment strategies</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Community</h3>
              <p className="text-gray-300 mb-6">
                Connect with other developers and get help from our community.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Community forums</li>
                <li>• GitHub discussions</li>
                <li>• Stack Overflow</li>
                <li>• Discord server</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Need Help Getting Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our documentation team is here to help you succeed with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Support
              </a>
              <a
                href="/tutorials"
                className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Browse Tutorials
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocsPage;