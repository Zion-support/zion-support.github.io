import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Copy, Play, ChevronDown, ChevronRight, ExternalLink, Key, Shield, Zap } from 'lucide-react';

const APIDocsPage: React.FC = () => {
  const [activeEndpoint, setActiveEndpoint] = useState('authentication');
  const [copiedCode, setCopiedCode] = useState('');

  const endpoints = [
    {
      id: 'authentication',
      title: 'Authentication',
      method: 'POST',
      path: '/api/v1/auth/token',
      description: 'Get an access token for API authentication',
      parameters: [
        { name: 'api_key', type: 'string', required: true, description: 'Your API key' },
        { name: 'api_secret', type: 'string', required: true, description: 'Your API secret' }
      ],
      example: {
        request: `curl -X POST https://api.ziontechgroup.com/v1/auth/token \\
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
      }
    },
    {
      id: 'ai-predict',
      title: 'AI Prediction',
      method: 'POST',
      path: '/api/v1/ai/predict',
      description: 'Make predictions using our AI models',
      parameters: [
        { name: 'model_id', type: 'string', required: true, description: 'ID of the AI model to use' },
        { name: 'input_data', type: 'object', required: true, description: 'Input data for prediction' },
        { name: 'options', type: 'object', required: false, description: 'Additional prediction options' }
      ],
      example: {
        request: `curl -X POST https://api.ziontechgroup.com/v1/ai/predict \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_id": "text-classifier-v1",
    "input_data": {
      "text": "This is a sample text for classification"
    },
    "options": {
      "confidence_threshold": 0.8
    }
  }'`,
        response: `{
  "prediction": {
    "class": "positive",
    "confidence": 0.95,
    "probabilities": {
      "positive": 0.95,
      "negative": 0.05
    }
  },
  "model_info": {
    "id": "text-classifier-v1",
    "version": "1.2.0"
  },
  "request_id": "req_123456789"
}`
      }
    },
    {
      id: 'ai-train',
      title: 'Train AI Model',
      method: 'POST',
      path: '/api/v1/ai/train',
      description: 'Train a new AI model with your data',
      parameters: [
        { name: 'model_type', type: 'string', required: true, description: 'Type of model to train' },
        { name: 'training_data', type: 'array', required: true, description: 'Training dataset' },
        { name: 'config', type: 'object', required: false, description: 'Training configuration' }
      ],
      example: {
        request: `curl -X POST https://api.ziontechgroup.com/v1/ai/train \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_type": "text_classifier",
    "training_data": [
      {"text": "Great product!", "label": "positive"},
      {"text": "Not satisfied", "label": "negative"}
    ],
    "config": {
      "epochs": 10,
      "learning_rate": 0.001
    }
  }'`,
        response: `{
  "model_id": "custom_model_123",
  "status": "training",
  "estimated_completion": "2024-01-20T15:30:00Z",
  "training_progress": 0.0
}`
      }
    }
  ];

  const sdkExamples = [
    {
      language: 'Python',
      code: `from ziontech import Client

# Initialize client
client = Client(api_key='your_api_key', api_secret='your_api_secret')

# Make a prediction
result = client.ai.predict(
    model_id='text-classifier-v1',
    input_data={'text': 'Hello world'}
)

print(result.prediction)`
    },
    {
      language: 'JavaScript',
      code: `const { Client } = require('ziontech');

// Initialize client
const client = new Client({
  apiKey: 'your_api_key',
  apiSecret: 'your_api_secret'
});

// Make a prediction
client.ai.predict({
  modelId: 'text-classifier-v1',
  inputData: { text: 'Hello world' }
}).then(result => {
  console.log(result.prediction);
});`
    },
    {
      language: 'cURL',
      code: `curl -X POST https://api.ziontechgroup.com/v1/ai/predict \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_id": "text-classifier-v1",
    "input_data": {"text": "Hello world"}
  }'`
    }
  ];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const activeEndpointData = endpoints.find(ep => ep.id === activeEndpoint);

  return (
    <>
      <Helmet>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Complete API documentation for Zion Tech Group AI services. Learn how to integrate our APIs with detailed examples and SDKs." />
        <meta name="keywords" content="API documentation, REST API, SDK, integration, developer docs" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <Code className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Integrate our AI services into your applications with our comprehensive REST API. 
              Get started with detailed documentation, examples, and SDKs.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 sticky top-24">
                <h3 className="text-lg font-semibold text-white mb-4">Endpoints</h3>
                <nav className="space-y-2">
                  {endpoints.map((endpoint) => (
                    <button
                      key={endpoint.id}
                      onClick={() => setActiveEndpoint(endpoint.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                        activeEndpoint === endpoint.id
                          ? 'bg-cyan-500 text-white'
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{endpoint.title}</span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          endpoint.method === 'POST' ? 'bg-green-600' : 'bg-blue-600'
                        }`}>
                          {endpoint.method}
                        </span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeEndpointData && (
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className={`px-3 py-1 rounded text-sm font-medium ${
                      activeEndpointData.method === 'POST' ? 'bg-green-600' : 'bg-blue-600'
                    }`}>
                      {activeEndpointData.method}
                    </span>
                    <code className="text-cyan-400 font-mono">{activeEndpointData.path}</code>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-4">{activeEndpointData.title}</h2>
                  <p className="text-gray-300 mb-8">{activeEndpointData.description}</p>

                  {/* Parameters */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Parameters</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-white/20">
                            <th className="text-left py-3 px-4 text-white">Name</th>
                            <th className="text-left py-3 px-4 text-white">Type</th>
                            <th className="text-left py-3 px-4 text-white">Required</th>
                            <th className="text-left py-3 px-4 text-white">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {activeEndpointData.parameters.map((param, index) => (
                            <tr key={index} className="border-b border-white/10">
                              <td className="py-3 px-4">
                                <code className="text-cyan-400">{param.name}</code>
                              </td>
                              <td className="py-3 px-4 text-gray-300">{param.type}</td>
                              <td className="py-3 px-4">
                                <span className={`px-2 py-1 rounded text-xs ${
                                  param.required ? 'bg-red-600' : 'bg-gray-600'
                                }`}>
                                  {param.required ? 'Yes' : 'No'}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-gray-300">{param.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Request Example */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Request Example</h3>
                    <div className="bg-gray-900 rounded-lg p-4 relative">
                      <button
                        onClick={() => copyToClipboard(activeEndpointData.example.request, 'request')}
                        className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedCode === 'request' ? <CheckCircle className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <pre className="text-sm text-gray-300 overflow-x-auto">
                        <code>{activeEndpointData.example.request}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Response Example */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Response Example</h3>
                    <div className="bg-gray-900 rounded-lg p-4 relative">
                      <button
                        onClick={() => copyToClipboard(activeEndpointData.example.response, 'response')}
                        className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedCode === 'response' ? <CheckCircle className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <pre className="text-sm text-gray-300 overflow-x-auto">
                        <code>{activeEndpointData.example.response}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* SDK Examples */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">SDK Examples</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {sdkExamples.map((example, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{example.language}</h3>
                    <button
                      onClick={() => copyToClipboard(example.code, `sdk-${index}`)}
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === `sdk-${index}` ? <CheckCircle className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Authentication */}
          <section className="mt-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
              <div className="flex items-center space-x-3 mb-6">
                <Key className="w-8 h-8 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Authentication</h2>
              </div>
              <p className="text-gray-300 mb-6">
                All API requests require authentication using your API key and secret. 
                Include the access token in the Authorization header.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Getting Started</h3>
                  <ol className="text-gray-300 space-y-2 text-sm">
                    <li>1. Sign up for a Zion Tech Group account</li>
                    <li>2. Generate your API key and secret</li>
                    <li>3. Use the authentication endpoint to get a token</li>
                    <li>4. Include the token in your API requests</li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Rate Limits</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• 1000 requests per hour (free tier)</li>
                    <li>• 10,000 requests per hour (pro tier)</li>
                    <li>• Unlimited requests (enterprise tier)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get your API credentials and start building amazing AI-powered applications today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Get API Access
              </a>
              <a
                href="/docs"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                View Full Docs
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default APIDocsPage;