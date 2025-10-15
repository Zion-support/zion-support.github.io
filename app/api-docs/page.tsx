import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Key, Zap, Shield, Copy, Check, ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';

const ApiDocsPage: React.FC = () => {
  const [activeEndpoint, setActiveEndpoint] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const apiEndpoints = [
    {
      id: 'auth',
      title: 'Authentication',
      method: 'POST',
      path: '/api/auth/login',
      description: 'Authenticate and get access token',
      parameters: [
        { name: 'email', type: 'string', required: true, description: 'User email address' },
        { name: 'password', type: 'string', required: true, description: 'User password' }
      ],
      response: {
        status: 200,
        data: {
          token: 'string',
          user: 'object',
          expires_in: 'number'
        }
      }
    },
    {
      id: 'ai-predict',
      title: 'AI Prediction',
      method: 'POST',
      path: '/api/ai/predict',
      description: 'Make predictions using our AI models',
      parameters: [
        { name: 'model', type: 'string', required: true, description: 'AI model identifier' },
        { name: 'input', type: 'object', required: true, description: 'Input data for prediction' },
        { name: 'options', type: 'object', required: false, description: 'Additional options' }
      ],
      response: {
        status: 200,
        data: {
          prediction: 'object',
          confidence: 'number',
          processing_time: 'number'
        }
      }
    },
    {
      id: 'ai-analyze',
      title: 'AI Analysis',
      method: 'POST',
      path: '/api/ai/analyze',
      description: 'Analyze data using computer vision or NLP',
      parameters: [
        { name: 'type', type: 'string', required: true, description: 'Analysis type (image, text, audio)' },
        { name: 'data', type: 'string', required: true, description: 'Base64 encoded data or text' },
        { name: 'features', type: 'array', required: false, description: 'Specific features to extract' }
      ],
      response: {
        status: 200,
        data: {
          results: 'array',
          metadata: 'object',
          confidence_scores: 'object'
        }
      }
    },
    {
      id: 'projects',
      title: 'Projects',
      method: 'GET',
      path: '/api/projects',
      description: 'Get list of user projects',
      parameters: [
        { name: 'page', type: 'number', required: false, description: 'Page number for pagination' },
        { name: 'limit', type: 'number', required: false, description: 'Number of items per page' }
      ],
      response: {
        status: 200,
        data: {
          projects: 'array',
          pagination: 'object',
          total_count: 'number'
        }
      }
    }
  ];

  const codeExamples = {
    auth: {
      curl: `curl -X POST https://api.ziontechgroup.com/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password"
  }'`,
      javascript: `const response = await fetch('https://api.ziontechgroup.com/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'your_password'
  })
});

const data = await response.json();
console.log(data.token);`,
      python: `import requests

response = requests.post('https://api.ziontechgroup.com/api/auth/login', json={
    'email': 'user@example.com',
    'password': 'your_password'
})

data = response.json()
print(data['token'])`
    },
    'ai-predict': {
      curl: `curl -X POST https://api.ziontechgroup.com/api/ai/predict \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "sentiment-analysis",
    "input": {
      "text": "This is amazing!"
    }
  }'`,
      javascript: `const response = await fetch('https://api.ziontechgroup.com/api/ai/predict', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'sentiment-analysis',
    input: {
      text: 'This is amazing!'
    }
  })
});

const data = await response.json();
console.log(data.prediction);`,
      python: `import requests

headers = {'Authorization': 'Bearer YOUR_TOKEN'}
response = requests.post('https://api.ziontechgroup.com/api/ai/predict', 
  json={
    'model': 'sentiment-analysis',
    'input': {
      'text': 'This is amazing!'
    }
  },
  headers=headers
)

data = response.json()
print(data['prediction'])`
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <>
      <Helmet>
        <title>API Documentation - Zion Tech Group | Complete API Reference</title>
        <meta name="description" content="Complete API documentation for Zion Tech Group's AI and IT services. Find endpoints, parameters, examples, and SDKs." />
        <meta name="keywords" content="API documentation, REST API, endpoints, parameters, code examples, SDK, developer tools" />
        <meta property="og:title" content="API Documentation - Zion Tech Group" />
        <meta property="og:description" content="Complete API reference and documentation" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <Code className="w-16 h-16 inline-block mr-4 text-cyan-400" />
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Complete API reference with endpoints, parameters, examples, and SDKs for all our services.
              </p>
              
              {/* API Status */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">API Status: Operational</span>
                </div>
                <div className="text-gray-400">|</div>
                <div className="text-gray-300">Version: v1.2.0</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Authentication */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <Key className="w-8 h-8 text-cyan-400 mr-4" />
                    <h2 className="text-2xl font-bold text-white">Authentication</h2>
                  </div>
                  <p className="text-gray-300 mb-6">
                    All API requests require authentication using a Bearer token. Get your API key from the dashboard.
                  </p>
                  <div className="bg-slate-800 rounded-lg p-4 mb-4">
                    <code className="text-cyan-400 text-sm">
                      Authorization: Bearer YOUR_API_KEY
                    </code>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                    Get API Key →
                  </button>
                </div>

                {/* Base URL */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <Zap className="w-8 h-8 text-cyan-400 mr-4" />
                    <h2 className="text-2xl font-bold text-white">Base URL</h2>
                  </div>
                  <p className="text-gray-300 mb-6">
                    All API endpoints are relative to our base URL:
                  </p>
                  <div className="bg-slate-800 rounded-lg p-4 mb-4">
                    <code className="text-cyan-400 text-sm">
                      https://api.ziontechgroup.com
                    </code>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                    Test Connection →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">API Endpoints</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Explore our comprehensive API endpoints with detailed documentation and examples
                </p>
              </div>
              
              <div className="space-y-6">
                {apiEndpoints.map((endpoint) => (
                  <div key={endpoint.id} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <button
                      onClick={() => setActiveEndpoint(activeEndpoint === endpoint.id ? null : endpoint.id)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className={`px-3 py-1 rounded text-sm font-semibold mr-4 ${
                          endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                          endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {endpoint.method}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{endpoint.title}</h3>
                          <p className="text-gray-300 font-mono">{endpoint.path}</p>
                        </div>
                      </div>
                      {activeEndpoint === endpoint.id ? (
                        <ChevronDown className="w-6 h-6 text-cyan-400" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-cyan-400" />
                      )}
                    </button>
                    
                    {activeEndpoint === endpoint.id && (
                      <div className="px-8 pb-8">
                        <p className="text-gray-300 mb-6">{endpoint.description}</p>
                        
                        {/* Parameters */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-4">Parameters</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full">
                              <thead>
                                <tr className="border-b border-white/10">
                                  <th className="text-left py-2 text-white">Name</th>
                                  <th className="text-left py-2 text-white">Type</th>
                                  <th className="text-left py-2 text-white">Required</th>
                                  <th className="text-left py-2 text-white">Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                {endpoint.parameters.map((param, index) => (
                                  <tr key={index} className="border-b border-white/5">
                                    <td className="py-2 text-cyan-400 font-mono">{param.name}</td>
                                    <td className="py-2 text-gray-300">{param.type}</td>
                                    <td className="py-2">
                                      <span className={`px-2 py-1 rounded text-xs ${
                                        param.required 
                                          ? 'bg-red-500/20 text-red-400' 
                                          : 'bg-gray-500/20 text-gray-400'
                                      }`}>
                                        {param.required ? 'Yes' : 'No'}
                                      </span>
                                    </td>
                                    <td className="py-2 text-gray-300">{param.description}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Response */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-4">Response</h4>
                          <div className="bg-slate-800 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-green-400 font-semibold">Status: {endpoint.response.status}</span>
                              <button
                                onClick={() => copyToClipboard(JSON.stringify(endpoint.response, null, 2), `response-${endpoint.id}`)}
                                className="text-gray-400 hover:text-white"
                              >
                                {copiedCode === `response-${endpoint.id}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                              </button>
                            </div>
                            <pre className="text-gray-300 text-sm overflow-x-auto">
                              <code>{JSON.stringify(endpoint.response, null, 2)}</code>
                            </pre>
                          </div>
                        </div>

                        {/* Code Examples */}
                        {codeExamples[endpoint.id as keyof typeof codeExamples] && (
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Code Examples</h4>
                            <div className="space-y-4">
                              {Object.entries(codeExamples[endpoint.id as keyof typeof codeExamples]).map(([language, code]) => (
                                <div key={language} className="bg-slate-800 rounded-lg overflow-hidden">
                                  <div className="flex items-center justify-between px-4 py-2 bg-slate-700">
                                    <span className="text-white font-semibold capitalize">{language}</span>
                                    <button
                                      onClick={() => copyToClipboard(code, `${endpoint.id}-${language}`)}
                                      className="text-gray-400 hover:text-white"
                                    >
                                      {copiedCode === `${endpoint.id}-${language}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                  </div>
                                  <pre className="p-4 text-gray-300 text-sm overflow-x-auto">
                                    <code>{code}</code>
                                  </pre>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SDKs and Libraries */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">SDKs & Libraries</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Use our official SDKs and libraries to integrate with our API quickly and easily
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-yellow-400">JS</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">JavaScript</h3>
                  <p className="text-gray-300 mb-6">Node.js and browser support</p>
                  <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                    Install →
                  </button>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-blue-400">PY</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Python</h3>
                  <p className="text-gray-300 mb-6">pip install ziontech-sdk</p>
                  <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                    Install →
                  </button>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-red-400">PHP</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">PHP</h3>
                  <p className="text-gray-300 mb-6">Composer package</p>
                  <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                    Install →
                  </button>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-green-400">GO</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Go</h3>
                  <p className="text-gray-300 mb-6">go get ziontech-sdk</p>
                  <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                    Install →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-cyan-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">Rate Limits</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>We implement rate limiting to ensure fair usage and system stability:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">•</span>
                      <span><strong className="text-white">Free Tier:</strong> 100 requests per hour</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">•</span>
                      <span><strong className="text-white">Professional:</strong> 1,000 requests per hour</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-cyan-400 mr-3">•</span>
                      <span><strong className="text-white">Enterprise:</strong> 10,000 requests per hour</span>
                    </li>
                  </ul>
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-6">
                    <p className="text-yellow-300">
                      <strong>Note:</strong> Rate limit headers are included in all responses. 
                      Contact us for custom rate limits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Building?</h2>
              <p className="text-xl text-white/90 mb-8">
                Get your API key and start integrating with our services today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Get API Key
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  View Examples
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ApiDocsPage;