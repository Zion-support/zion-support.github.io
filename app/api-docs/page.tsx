import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Code, Key, Zap, Shield, Copy, Check, ExternalLink, ChevronRight, ChevronDown } from 'lucide-react';

const ApiDocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedEndpoints, setExpandedEndpoints] = useState<string[]>(['authentication']);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const toggleEndpoint = (endpointId: string) => {
    setExpandedEndpoints(prev => 
      prev.includes(endpointId) 
        ? prev.filter(id => id !== endpointId)
        : [...prev, endpointId]
    );
  };

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const apiEndpoints = [
    {
      id: 'authentication',
      title: 'Authentication',
      method: 'POST',
      path: '/api/auth/token',
      description: 'Get access token for API authentication',
      category: 'Auth'
    },
    {
      id: 'ai-predict',
      title: 'AI Prediction',
      method: 'POST',
      path: '/api/ai/predict',
      description: 'Make predictions using our AI models',
      category: 'AI'
    },
    {
      id: 'ai-train',
      title: 'Train Model',
      method: 'POST',
      path: '/api/ai/train',
      description: 'Train custom AI models with your data',
      category: 'AI'
    },
    {
      id: 'data-upload',
      title: 'Upload Data',
      method: 'POST',
      path: '/api/data/upload',
      description: 'Upload datasets for processing',
      category: 'Data'
    },
    {
      id: 'analytics',
      title: 'Get Analytics',
      method: 'GET',
      path: '/api/analytics',
      description: 'Retrieve analytics and insights',
      category: 'Analytics'
    },
    {
      id: 'status',
      title: 'Service Status',
      method: 'GET',
      path: '/api/status',
      description: 'Check service health and status',
      category: 'System'
    }
  ];

  const codeExamples = {
    authentication: {
      request: `curl -X POST https://api.ziontechgroup.com/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "api_key": "your_api_key",
    "client_id": "your_client_id"
  }'`,
      response: `{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "read write"
}`,
      javascript: `const response = await fetch('https://api.ziontechgroup.com/auth/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    api_key: 'your_api_key',
    client_id: 'your_client_id'
  })
});

const data = await response.json();
console.log(data.access_token);`
    },
    'ai-predict': {
      request: `curl -X POST https://api.ziontechgroup.com/ai/predict \\
  -H "Authorization: Bearer your_access_token" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_id": "sentiment-analysis-v1",
    "input": "This is a great product!",
    "parameters": {
      "confidence_threshold": 0.8
    }
  }'`,
      response: `{
  "prediction": {
    "label": "positive",
    "confidence": 0.95,
    "probability": 0.92
  },
  "model_info": {
    "version": "1.0.0",
    "training_date": "2024-01-15"
  }
}`,
      javascript: `const response = await fetch('https://api.ziontechgroup.com/ai/predict', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_access_token',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model_id: 'sentiment-analysis-v1',
    input: 'This is a great product!',
    parameters: {
      confidence_threshold: 0.8
    }
  })
});

const prediction = await response.json();
console.log(prediction.prediction.label);`
    }
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'text-green-400 bg-green-400/20';
      case 'POST': return 'text-blue-400 bg-blue-400/20';
      case 'PUT': return 'text-yellow-400 bg-yellow-400/20';
      case 'DELETE': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const filteredEndpoints = apiEndpoints.filter(endpoint =>
    endpoint.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    endpoint.path.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-cyan-400">
              <span className="text-3xl">⚡</span>
              <span>Zion Tech Group</span>
            </Link>
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/services" className="text-white hover:text-cyan-400 transition-colors">Services</Link>
              <Link to="/api-docs" className="text-cyan-400 font-semibold">API Docs</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            API <span className="text-cyan-400">Reference</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Complete API documentation with examples, authentication, and integration guides.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search API endpoints..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-slate-800 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Start</h3>
                <div className="space-y-2">
                  <Link to="#authentication" className="block text-cyan-400 hover:text-cyan-300 text-sm">
                    <Key className="w-4 h-4 inline mr-2" />
                    Authentication
                  </Link>
                  <Link to="#getting-started" className="block text-cyan-400 hover:text-cyan-300 text-sm">
                    <Zap className="w-4 h-4 inline mr-2" />
                    Getting Started
                  </Link>
                  <Link to="#rate-limits" className="block text-cyan-400 hover:text-cyan-300 text-sm">
                    <Shield className="w-4 h-4 inline mr-2" />
                    Rate Limits
                  </Link>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-4">SDKs</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-cyan-400 hover:text-cyan-300 text-sm">
                    <Code className="w-4 h-4 inline mr-2" />
                    JavaScript/Node.js
                  </a>
                  <a href="#" className="block text-cyan-400 hover:text-cyan-300 text-sm">
                    <Code className="w-4 h-4 inline mr-2" />
                    Python
                  </a>
                  <a href="#" className="block text-cyan-400 hover:text-cyan-300 text-sm">
                    <Code className="w-4 h-4 inline mr-2" />
                    Java
                  </a>
                  <a href="#" className="block text-cyan-400 hover:text-cyan-300 text-sm">
                    <Code className="w-4 h-4 inline mr-2" />
                    PHP
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Getting Started */}
            <section id="getting-started" className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Getting Started</h2>
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">1. Get Your API Key</h3>
                <p className="text-gray-300 mb-4">
                  Sign up for an account and generate your API key from the dashboard.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Get API Key
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </section>

            {/* Authentication */}
            <section id="authentication" className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Authentication</h2>
              <div className="bg-slate-800 rounded-lg p-6">
                <p className="text-gray-300 mb-4">
                  All API requests require authentication using your API key. Include it in the Authorization header.
                </p>
                <div className="bg-slate-900 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Authorization Header</span>
                    <button
                      onClick={() => copyToClipboard('Authorization: Bearer your_api_key', 'auth-header')}
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      {copiedCode === 'auth-header' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <code className="text-green-400 text-sm">Authorization: Bearer your_api_key</code>
                </div>
              </div>
            </section>

            {/* API Endpoints */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">API Endpoints</h2>
              <div className="space-y-4">
                {filteredEndpoints.map((endpoint) => (
                  <div key={endpoint.id} className="bg-slate-800 rounded-lg border border-slate-700">
                    <button
                      onClick={() => toggleEndpoint(endpoint.id)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded text-sm font-semibold ${getMethodColor(endpoint.method)}`}>
                          {endpoint.method}
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{endpoint.title}</h3>
                          <p className="text-gray-400 text-sm font-mono">{endpoint.path}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-400 bg-slate-700 px-2 py-1 rounded">
                          {endpoint.category}
                        </span>
                        {expandedEndpoints.includes(endpoint.id) ? (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {expandedEndpoints.includes(endpoint.id) && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 mb-6">{endpoint.description}</p>
                        
                        {codeExamples[endpoint.id as keyof typeof codeExamples] && (
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-white font-semibold mb-2">Request Example</h4>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm text-gray-400">cURL</span>
                                  <button
                                    onClick={() => copyToClipboard(codeExamples[endpoint.id as keyof typeof codeExamples].request, `${endpoint.id}-request`)}
                                    className="text-cyan-400 hover:text-cyan-300"
                                  >
                                    {copiedCode === `${endpoint.id}-request` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                  </button>
                                </div>
                                <pre className="text-green-400 text-sm overflow-x-auto">
                                  <code>{codeExamples[endpoint.id as keyof typeof codeExamples].request}</code>
                                </pre>
                              </div>
                            </div>

                            <div>
                              <h4 className="text-white font-semibold mb-2">Response Example</h4>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm text-gray-400">JSON</span>
                                  <button
                                    onClick={() => copyToClipboard(codeExamples[endpoint.id as keyof typeof codeExamples].response, `${endpoint.id}-response`)}
                                    className="text-cyan-400 hover:text-cyan-300"
                                  >
                                    {copiedCode === `${endpoint.id}-response` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                  </button>
                                </div>
                                <pre className="text-blue-400 text-sm overflow-x-auto">
                                  <code>{codeExamples[endpoint.id as keyof typeof codeExamples].response}</code>
                                </pre>
                              </div>
                            </div>

                            <div>
                              <h4 className="text-white font-semibold mb-2">JavaScript Example</h4>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm text-gray-400">JavaScript</span>
                                  <button
                                    onClick={() => copyToClipboard(codeExamples[endpoint.id as keyof typeof codeExamples].javascript, `${endpoint.id}-javascript`)}
                                    className="text-cyan-400 hover:text-cyan-300"
                                  >
                                    {copiedCode === `${endpoint.id}-javascript` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                  </button>
                                </div>
                                <pre className="text-yellow-400 text-sm overflow-x-auto">
                                  <code>{codeExamples[endpoint.id as keyof typeof codeExamples].javascript}</code>
                                </pre>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Rate Limits */}
            <section id="rate-limits" className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Rate Limits</h2>
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">1000</div>
                    <div className="text-gray-300">Requests per hour</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">100</div>
                    <div className="text-gray-300">Concurrent requests</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">10MB</div>
                    <div className="text-gray-300">Max payload size</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Support */}
            <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need Help with Integration?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Our technical team is here to help you integrate our APIs successfully. 
                Get personalized support and code examples.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Contact Support
                </Link>
                <Link
                  to="/docs"
                  className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
                >
                  View Full Docs
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApiDocsPage;