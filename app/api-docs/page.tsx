import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Code, Copy, Check, Zap, Brain, Shield, ChevronDown, ChevronRight } from 'lucide-react';

const ApiDocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEndpoint, setSelectedEndpoint] = useState('auth');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const apiEndpoints = [
    {
      id: 'auth',
      name: 'Authentication',
      description: 'Authenticate and manage API access',
      methods: ['POST', 'GET', 'DELETE'],
      icon: Shield
    },
    {
      id: 'ai-models',
      name: 'AI Models',
      description: 'Train, deploy, and manage AI models',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      icon: Brain
    },
    {
      id: 'predictions',
      name: 'Predictions',
      description: 'Make predictions using trained models',
      methods: ['POST', 'GET'],
      icon: Zap
    },
    {
      id: 'data',
      name: 'Data Management',
      description: 'Upload and manage training data',
      methods: ['POST', 'GET', 'PUT', 'DELETE'],
      icon: Code
    }
  ];

  const codeExamples = {
    auth: {
      title: 'Get API Token',
      description: 'Authenticate and receive your API token',
      method: 'POST',
      endpoint: '/api/v1/auth/token',
      code: `curl -X POST https://api.ziontechgroup.com/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "api_key": "your_api_key",
    "api_secret": "your_api_secret"
  }'`,
      response: `{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "read write"
}`
    },
    'ai-models': {
      title: 'List AI Models',
      description: 'Retrieve all available AI models',
      method: 'GET',
      endpoint: '/api/v1/models',
      code: `curl -X GET https://api.ziontechgroup.com/v1/models \\
  -H "Authorization: Bearer your_access_token"`,
      response: `{
  "models": [
    {
      "id": "model_123",
      "name": "Text Classification Model",
      "type": "classification",
      "status": "active",
      "created_at": "2024-01-15T10:30:00Z",
      "accuracy": 0.95
    }
  ],
  "total": 1,
  "page": 1,
  "per_page": 20
}`
    },
    predictions: {
      title: 'Make Prediction',
      description: 'Get predictions from a trained model',
      method: 'POST',
      endpoint: '/api/v1/predictions',
      code: `curl -X POST https://api.ziontechgroup.com/v1/predictions \\
  -H "Authorization: Bearer your_access_token" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_id": "model_123",
    "input": {
      "text": "This is a sample text for classification"
    }
  }'`,
      response: `{
  "prediction_id": "pred_456",
  "model_id": "model_123",
  "prediction": {
    "class": "positive",
    "confidence": 0.92,
    "probabilities": {
      "positive": 0.92,
      "negative": 0.08
    }
  },
  "created_at": "2024-01-15T10:35:00Z"
}`
    },
    data: {
      title: 'Upload Training Data',
      description: 'Upload data for model training',
      method: 'POST',
      endpoint: '/api/v1/data/upload',
      code: `curl -X POST https://api.ziontechgroup.com/v1/data/upload \\
  -H "Authorization: Bearer your_access_token" \\
  -F "file=@training_data.csv" \\
  -F "name=My Training Dataset" \\
  -F "description=Customer sentiment data"`,
      response: `{
  "dataset_id": "dataset_789",
  "name": "My Training Dataset",
  "description": "Customer sentiment data",
  "file_size": 1024000,
  "rows": 1000,
  "columns": 5,
  "status": "processing",
  "created_at": "2024-01-15T10:40:00Z"
}`
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const currentExample = codeExamples[selectedEndpoint as keyof typeof codeExamples];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-gray-900/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
            <div className="flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            API Documentation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Integrate with our AI and technology services using our comprehensive REST API. 
            Build powerful applications with our easy-to-use endpoints.
          </p>
        </div>

        {/* Search */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search API endpoints..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-white mb-4">API Endpoints</h2>
              <div className="space-y-2">
                {apiEndpoints.map((endpoint) => (
                  <button
                    key={endpoint.id}
                    onClick={() => setSelectedEndpoint(endpoint.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedEndpoint === endpoint.id
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <endpoint.icon className="w-4 h-4" />
                      <div>
                        <div className="font-medium">{endpoint.name}</div>
                        <div className="text-xs opacity-75">{endpoint.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{currentExample.title}</h2>
                  <p className="text-gray-300">{currentExample.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    {currentExample.method}
                  </span>
                  <code className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm">
                    {currentExample.endpoint}
                  </code>
                </div>
              </div>

              {/* Request Example */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Request Example</h3>
                <div className="bg-gray-900 rounded-lg p-4 relative">
                  <button
                    onClick={() => copyToClipboard(currentExample.code, 'request')}
                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'request' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <pre className="text-gray-300 text-sm overflow-x-auto">
                    <code>{currentExample.code}</code>
                  </pre>
                </div>
              </div>

              {/* Response Example */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Response Example</h3>
                <div className="bg-gray-900 rounded-lg p-4 relative">
                  <button
                    onClick={() => copyToClipboard(currentExample.response, 'response')}
                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'response' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <pre className="text-gray-300 text-sm overflow-x-auto">
                    <code>{currentExample.response}</code>
                  </pre>
                </div>
              </div>

              {/* Parameters */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Parameters</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-300">Parameter</th>
                        <th className="text-left py-2 text-gray-300">Type</th>
                        <th className="text-left py-2 text-gray-300">Required</th>
                        <th className="text-left py-2 text-gray-300">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800">
                        <td className="py-2 text-white font-mono">api_key</td>
                        <td className="py-2 text-gray-300">string</td>
                        <td className="py-2 text-red-400">Yes</td>
                        <td className="py-2 text-gray-300">Your API key</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-2 text-white font-mono">api_secret</td>
                        <td className="py-2 text-gray-300">string</td>
                        <td className="py-2 text-red-400">Yes</td>
                        <td className="py-2 text-gray-300">Your API secret</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Status Codes */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Status Codes</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">200</span>
                    <span className="text-gray-300">Success</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">400</span>
                    <span className="text-gray-300">Bad Request</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">401</span>
                    <span className="text-gray-300">Unauthorized</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">500</span>
                    <span className="text-gray-300">Internal Server Error</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <section className="mt-16 bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get your API key and start building amazing applications with our AI services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Get API Key
            </Link>
            <Link
              to="/docs"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              View Full Documentation
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ApiDocsPage;