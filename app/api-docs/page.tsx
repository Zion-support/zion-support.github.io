import React from 'react';
import SEOHead from '../components/SEOHead';
import { Code, Book, Zap, Shield, Cloud, Database } from 'lucide-react';

const ApiDocsPage: React.FC = () => {
  const apiCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'AI Solutions API',
      description: 'Integrate our AI capabilities into your applications',
      endpoints: ['/ai/analyze', '/ai/predict', '/ai/classify', '/ai/generate'],
      status: 'Live'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Management API',
      description: 'Manage your cloud infrastructure programmatically',
      endpoints: ['/cloud/deploy', '/cloud/monitor', '/cloud/scale', '/cloud/backup'],
      status: 'Live'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security API',
      description: 'Security monitoring and threat detection endpoints',
      endpoints: ['/security/scan', '/security/alerts', '/security/compliance', '/security/audit'],
      status: 'Live'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Analytics API',
      description: 'Access and analyze your data with our analytics platform',
      endpoints: ['/analytics/query', '/analytics/reports', '/analytics/insights', '/analytics/export'],
      status: 'Beta'
    }
  ];

  return (
    <>
      <SEOHead
        title="API Documentation - Zion Tech Group"
        description="Comprehensive API documentation for Zion Tech Group's AI solutions, cloud services, cybersecurity, and analytics platforms."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive API documentation for integrating our AI solutions, cloud services, and security features into your applications.
            </p>
          </div>

          {/* Quick Start */}
          <div className="bg-slate-800 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6">Quick Start</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Authentication</h3>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <code className="text-green-400">
                    curl -H "Authorization: Bearer YOUR_API_KEY" \<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;https://api.ziontechgroup.com/v1/ai/analyze
                  </code>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Base URL</h3>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <code className="text-blue-400">
                    https://api.ziontechgroup.com/v1
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* API Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {apiCategories.map((category, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-4">{category.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      category.status === 'Live' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-yellow-600 text-white'
                    }`}>
                      {category.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Available Endpoints:</h4>
                  <ul className="space-y-1">
                    {category.endpoints.map((endpoint, endpointIndex) => (
                      <li key={endpointIndex} className="text-sm text-gray-400 font-mono">
                        {endpoint}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Getting Started */}
          <div className="bg-slate-800 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Get Your API Key</h3>
                <p className="text-gray-300 mb-4">
                  Sign up for an account and generate your API key from the dashboard.
                </p>
                <a 
                  href="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
                >
                  Get API Key
                </a>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">2. Make Your First Request</h3>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <code className="text-green-400">
                    curl -X POST \<br />
                    &nbsp;&nbsp;-H "Content-Type: application/json" \<br />
                    &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY" \<br />
                    &nbsp;&nbsp;-d '{"text": "Hello, world!"}' \<br />
                    &nbsp;&nbsp;https://api.ziontechgroup.com/v1/ai/analyze
                  </code>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">3. Explore the Documentation</h3>
                <p className="text-gray-300">
                  Browse our comprehensive API reference to understand all available endpoints and parameters.
                </p>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our developer support team is here to help you integrate our APIs successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Contact Support
              </a>
              <a 
                href="/support" 
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Support Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiDocsPage;