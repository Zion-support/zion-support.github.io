'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Code, Key, Zap, ArrowRight, Copy, Check } from 'lucide-react';

const ApiDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const apiEndpoints = [
    {
      title: 'AI Services',
      description: 'Core AI functionality and machine learning services',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/ai/predict',
          description: 'Make predictions using trained AI models',
          example: `curl -X POST https://api.ziontechgroup.com/v1/ai/predict \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "sentiment", "text": "This is amazing!"}'`
        },
        {
          method: 'POST',
          path: '/api/v1/ai/analyze',
          description: 'Analyze text, images, or data using AI',
          example: `curl -X POST https://api.ziontechgroup.com/v1/ai/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"type": "image", "data": "base64_image_data"}'`
        }
      ]
    },
    {
      title: 'Automation',
      description: 'Workflow automation and process management',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/automation/trigger',
          description: 'Trigger automated workflows',
          example: `curl -X POST https://api.ziontechgroup.com/v1/automation/trigger \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"workflow_id": "invoice_processing", "data": {...}}'`
        }
      ]
    },
    {
      title: 'Analytics',
      description: 'Data analytics and business intelligence',
      endpoints: [
        {
          method: 'GET',
          path: '/api/v1/analytics/dashboard',
          description: 'Get analytics dashboard data',
          example: `curl -X GET https://api.ziontechgroup.com/v1/analytics/dashboard \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">API Documentation</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive API documentation for integrating with Zion Tech Group's AI and automation services.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">API Endpoints</h2>
          <div className="space-y-8">
            {apiEndpoints.map((category, categoryIndex) => (
              <div key={categoryIndex} className="cyber-card hologram-card p-6">
                <div className="flex items-center mb-6">
                  <Code className="w-8 h-8 text-cyan-400 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.endpoints.map((endpoint, endpointIndex) => (
                    <div key={endpointIndex} className="bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded text-sm font-medium ${
                            endpoint.method === 'GET' ? 'bg-green-600 text-white' :
                            endpoint.method === 'POST' ? 'bg-blue-600 text-white' :
                            'bg-yellow-600 text-white'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-cyan-400 font-mono">{endpoint.path}</code>
                        </div>
                        <button
                          onClick={() => copyToClipboard(endpoint.example, `${categoryIndex}-${endpointIndex}`)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {copiedCode === `${categoryIndex}-${endpointIndex}` ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      
                      <p className="text-gray-300 mb-3">{endpoint.description}</p>
                      
                      <div className="bg-black rounded p-3 overflow-x-auto">
                        <pre className="text-green-400 text-sm whitespace-pre-wrap">
                          {endpoint.example}
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Authentication</h3>
              <p className="text-gray-300 mb-4">
                All API requests require authentication using API keys. Include your API key in the Authorization header.
              </p>
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <pre className="text-green-400 text-sm">
{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     https://api.ziontechgroup.com/v1/ai/predict`}
                </pre>
              </div>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Rate Limits</h3>
              <p className="text-gray-300 mb-4">
                API requests are rate limited to ensure fair usage and system stability.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Free tier: 100 requests/hour</li>
                <li>• Pro tier: 1,000 requests/hour</li>
                <li>• Enterprise: Custom limits</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">SDKs & Libraries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="cyber-card hologram-card p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-2">Python</h3>
              <p className="text-gray-300 mb-4">Official Python SDK</p>
              <a
                href="https://github.com/ziontechgroup/python-sdk"
                className="text-cyan-400 hover:text-cyan-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-2">JavaScript</h3>
              <p className="text-gray-300 mb-4">Official JavaScript SDK</p>
              <a
                href="https://github.com/ziontechgroup/javascript-sdk"
                className="text-cyan-400 hover:text-cyan-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-2">React</h3>
              <p className="text-gray-300 mb-4">React components library</p>
              <a
                href="https://github.com/ziontechgroup/react-sdk"
                className="text-cyan-400 hover:text-cyan-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Need Help?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our developer support team is here to help you integrate our APIs successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button"
            >
              Contact Support
            </a>
            <a
              href="https://github.com/ziontechgroup/api-examples"
              className="cyber-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Examples
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiDocsPage;