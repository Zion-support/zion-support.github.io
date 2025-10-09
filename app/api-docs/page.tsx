import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Code, Zap, Shield, ArrowRight, Copy, Check } from 'lucide-react';

const ApiDocsPage: React.FC = () => {
  const apiEndpoints = [
    {
      method: 'POST',
      endpoint: '/api/v1/ai/analyze',
      description: 'Analyze text using AI models',
      parameters: [
        { name: 'text', type: 'string', required: true, description: 'Text to analyze' },
        { name: 'model', type: 'string', required: false, description: 'AI model to use' }
      ]
    },
    {
      method: 'GET',
      endpoint: '/api/v1/ai/models',
      description: 'Get available AI models',
      parameters: []
    },
    {
      method: 'POST',
      endpoint: '/api/v1/ai/generate',
      description: 'Generate content using AI',
      parameters: [
        { name: 'prompt', type: 'string', required: true, description: 'Generation prompt' },
        { name: 'max_tokens', type: 'number', required: false, description: 'Maximum tokens to generate' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            API <span className="text-cyan-400">Reference</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Complete API documentation for integrating with our AI services
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-xl font-bold text-white mb-4">Quick Start</h2>
                <div className="space-y-4">
                  <a href="#authentication" className="block text-cyan-400 hover:text-cyan-300">Authentication</a>
                  <a href="#endpoints" className="block text-cyan-400 hover:text-cyan-300">Endpoints</a>
                  <a href="#examples" className="block text-cyan-400 hover:text-cyan-300">Examples</a>
                  <a href="#sdks" className="block text-cyan-400 hover:text-cyan-300">SDKs</a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <section id="authentication" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Authentication</h2>
                <div className="bg-gray-900 rounded-lg p-6">
                  <p className="text-gray-300 mb-4">
                    All API requests require authentication using an API key. Include your API key in the Authorization header:
                  </p>
                  <div className="bg-black rounded p-4 font-mono text-sm">
                    <div className="text-green-400">curl -H "Authorization: Bearer YOUR_API_KEY" \</div>
                    <div className="text-white">  https://api.ziontechgroup.com/v1/ai/analyze</div>
                  </div>
                </div>
              </section>

              <section id="endpoints" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">API Endpoints</h2>
                <div className="space-y-6">
                  {apiEndpoints.map((endpoint, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className={`px-3 py-1 rounded text-sm font-semibold ${
                          endpoint.method === 'POST' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-cyan-400 font-mono">{endpoint.endpoint}</code>
                      </div>
                      <p className="text-gray-300 mb-4">{endpoint.description}</p>
                      {endpoint.parameters.length > 0 && (
                        <div>
                          <h4 className="text-white font-semibold mb-3">Parameters</h4>
                          <div className="space-y-2">
                            {endpoint.parameters.map((param, paramIndex) => (
                              <div key={paramIndex} className="flex items-start space-x-4">
                                <code className="text-cyan-400 font-mono min-w-0 flex-shrink-0">{param.name}</code>
                                <span className={`px-2 py-1 rounded text-xs ${
                                  param.required ? 'bg-red-500/20 text-red-400' : 'bg-gray-500/20 text-gray-400'
                                }`}>
                                  {param.type}
                                </span>
                                <span className="text-gray-300 text-sm">{param.description}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              <section id="examples" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Code Examples</h2>
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-4">JavaScript</h3>
                    <div className="bg-black rounded p-4 font-mono text-sm overflow-x-auto">
                      <div className="text-gray-400">const response = await fetch('https://api.ziontechgroup.com/v1/ai/analyze', {'{'}</div>
                      <div className="text-gray-400 ml-4">method: 'POST',</div>
                      <div className="text-gray-400 ml-4">headers: {'{'}</div>
                      <div className="text-gray-400 ml-8">'Authorization': 'Bearer YOUR_API_KEY',</div>
                      <div className="text-gray-400 ml-8">'Content-Type': 'application/json'</div>
                      <div className="text-gray-400 ml-4">{'}'},</div>
                      <div className="text-gray-400 ml-4">body: JSON.stringify({'{'}</div>
                      <div className="text-gray-400 ml-8">text: 'Hello, world!'</div>
                      <div className="text-gray-400 ml-4">{'}'})</div>
                      <div className="text-gray-400">{'});</div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-4">Python</h3>
                    <div className="bg-black rounded p-4 font-mono text-sm overflow-x-auto">
                      <div className="text-gray-400">import requests</div>
                      <div className="text-gray-400">import json</div>
                      <div className="text-white">response = requests.post(</div>
                      <div className="text-white ml-4">'https://api.ziontechgroup.com/v1/ai/analyze',</div>
                      <div className="text-white ml-4">headers={'{'}'Authorization': 'Bearer YOUR_API_KEY'},</div>
                      <div className="text-white ml-4">json={'{'}'text': 'Hello, world!'}</div>
                      <div className="text-white">)</div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApiDocsPage;
