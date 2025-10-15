import React from 'react';
import { Helmet } from 'react-helmet-async';

const DocumentationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for our APIs, services, and solutions. Find guides, tutorials, and reference materials." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive guides and reference materials for our services and APIs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">API Reference</h3>
              <p className="text-gray-300 mb-4">
                Complete API documentation with examples and interactive testing.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• REST API Endpoints</li>
                <li>• Authentication Guide</li>
                <li>• Code Examples</li>
                <li>• Interactive Testing</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Getting Started</h3>
              <p className="text-gray-300 mb-4">
                Quick start guides to help you get up and running with our services.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Installation Guide</li>
                <li>• First Steps</li>
                <li>• Configuration</li>
                <li>• Common Use Cases</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">Tutorials</h3>
              <p className="text-gray-300 mb-4">
                Step-by-step tutorials for building applications with our platform.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Building AI Apps</li>
                <li>• Cloud Deployment</li>
                <li>• Integration Examples</li>
                <li>• Best Practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentationPage;