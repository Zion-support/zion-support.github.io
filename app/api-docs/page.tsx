import React from 'react';
import { Code, Zap, Shield, Globe, Book, Terminal } from 'lucide-react';

const APIDocsPage: React.FC = () => {
  const apiEndpoints = [
    {
      method: 'POST',
      endpoint: '/api/v1/ai/generate',
      description: 'Generate content using AI models',
      category: 'AI Services'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/ai/models',
      description: 'List available AI models',
      category: 'AI Services'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/ai/analyze',
      description: 'Analyze data using AI algorithms',
      category: 'AI Services'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/services',
      description: 'List all available services',
      category: 'Services'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/auth/login',
      description: 'Authenticate user and get access token',
      category: 'Authentication'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/user/profile',
      description: 'Get user profile information',
      category: 'User Management'
    }
  ];

  const sdkLanguages = [
    { name: 'Python', icon: '🐍', description: 'Official Python SDK with full API support' },
    { name: 'JavaScript', icon: '🟨', description: 'Node.js and browser-compatible SDK' },
    { name: 'Java', icon: '☕', description: 'Enterprise-grade Java SDK' },
    { name: 'C#', icon: '🔷', description: '.NET SDK for Windows applications' },
    { name: 'Go', icon: '🐹', description: 'High-performance Go SDK' },
    { name: 'PHP', icon: '🐘', description: 'PHP SDK for web applications' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            API Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Complete API reference for integrating our AI and IT services into your applications. 
            Get started with our RESTful APIs and SDKs.
          </p>
          
          {/* API Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">API Endpoints</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">6</div>
              <div className="text-gray-300">SDK Languages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">API Support</div>
            </div>
          </div>
        </div>

        {/* Quick Start */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Quick Start
          </h2>
          <div className="bg-gray-900 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <Terminal className="w-6 h-6 text-green-400 mr-2" />
              <span className="text-green-400 font-medium">Terminal</span>
            </div>
            <pre className="text-gray-300 text-sm overflow-x-auto">
              <code>{`# Install the SDK
pip install ziontechgroup-sdk

# Set your API key
export ZION_API_KEY="your-api-key-here"

# Make your first API call
from ziontechgroup import Client

client = Client(api_key="your-api-key")
response = client.ai.generate(
    prompt="Write a blog post about AI",
    model="gpt-4"
)
print(response.content)`}</code>
            </pre>
          </div>
        </div>

        {/* API Endpoints */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            API Endpoints
          </h2>
          <div className="space-y-4">
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded text-sm font-medium ${
                      endpoint.method === 'GET' ? 'bg-green-400 text-green-900' :
                      endpoint.method === 'POST' ? 'bg-blue-400 text-blue-900' :
                      'bg-gray-400 text-gray-900'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-cyan-400 font-mono">{endpoint.endpoint}</code>
                  </div>
                  <span className="text-sm text-gray-400">{endpoint.category}</span>
                </div>
                <p className="text-gray-300">{endpoint.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SDKs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            SDK Downloads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdkLanguages.map((sdk, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="text-4xl mb-4">{sdk.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sdk.name}</h3>
                  <p className="text-gray-600 mb-4">{sdk.description}</p>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all">
                    Download SDK
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Authentication */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Authentication
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">API Key Authentication</h3>
            <p className="text-gray-300 mb-6">
              All API requests require authentication using your API key. Include your API key in the 
              Authorization header of your requests.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 mb-6">
              <pre className="text-gray-300 text-sm">
                <code>{`curl -X GET "https://api.ziontechgroup.com/v1/ai/models" \\
  -H "Authorization: Bearer your-api-key-here" \\
  -H "Content-Type: application/json"`}</code>
              </pre>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Getting Your API Key</h4>
                <ol className="text-gray-300 space-y-2">
                  <li>1. Sign up for an account</li>
                  <li>2. Navigate to API settings</li>
                  <li>3. Generate a new API key</li>
                  <li>4. Copy and store securely</li>
                </ol>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Rate Limits</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• 1000 requests per hour</li>
                  <li>• 10,000 requests per day</li>
                  <li>• Burst limit: 100 requests/minute</li>
                  <li>• Upgrade for higher limits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Code Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">Python Example</h3>
              <pre className="text-gray-300 text-sm overflow-x-auto">
                <code>{`import requests

headers = {
    'Authorization': 'Bearer your-api-key',
    'Content-Type': 'application/json'
}

data = {
    'prompt': 'Write a blog post about AI',
    'model': 'gpt-4',
    'max_tokens': 500
}

response = requests.post(
    'https://api.ziontechgroup.com/v1/ai/generate',
    headers=headers,
    json=data
)

result = response.json()
print(result['content'])`}</code>
              </pre>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">JavaScript Example</h3>
              <pre className="text-gray-300 text-sm overflow-x-auto">
                <code>{`const axios = require('axios');

const headers = {
    'Authorization': 'Bearer your-api-key',
    'Content-Type': 'application/json'
};

const data = {
    prompt: 'Write a blog post about AI',
    model: 'gpt-4',
    max_tokens: 500
};

axios.post('https://api.ziontechgroup.com/v1/ai/generate', data, { headers })
    .then(response => {
        console.log(response.data.content);
    })
    .catch(error => {
        console.error('Error:', error);
    });`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need API Help?
          </h2>
          <p className="text-purple-100 mb-6">
            Our developer support team is here to help you integrate our APIs successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Developer Support
            </a>
            <a
              href="/docs"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Full Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIDocsPage;