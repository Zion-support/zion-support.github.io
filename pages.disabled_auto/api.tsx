import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Code, Key, Globe, Database, Shield, Zap, Copy, Check } from 'lucide-react';

const ApiPage: NextPage = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const apiEndpoints = [
    {
      method: 'POST',
      endpoint: '/v1/analyze',
      description: 'Analyze text using AI models',
      category: 'AI Services',
      color: 'blue'
    },
    {
      method: 'GET',
      endpoint: '/v1/models',
      description: 'List available AI models',
      category: 'AI Services',
      color: 'blue'
    },
    {
      method: 'POST',
      endpoint: '/v1/predict',
      description: 'Make predictions with custom models',
      category: 'AI Services',
      color: 'blue'
    },
    {
      method: 'GET',
      endpoint: '/v1/health',
      description: 'Check API health status',
      category: 'System',
      color: 'green'
    },
    {
      method: 'POST',
      endpoint: '/v1/upload',
      description: 'Upload files for processing',
      category: 'File Management',
      color: 'purple'
    },
    {
      method: 'GET',
      endpoint: '/v1/status',
      description: 'Get processing status',
      category: 'System',
      color: 'green'
    }
  ];

  const codeExamples = [
    {
      language: 'JavaScript',
      code: `const response = await fetch('https://api.ziontechgroup.com/v1/analyze', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    text: 'Your text to analyze',
    model: 'sentiment-analysis'
  })
});

const data = await response.json();
console.log(data);`
    },
    {
      language: 'Python',
      code: `import requests

url = 'https://api.ziontechgroup.com/v1/analyze'
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}
data = {
    'text': 'Your text to analyze',
    'model': 'sentiment-analysis'
}

response = requests.post(url, headers=headers, json=data)
result = response.json()
print(result)`
    },
    {
      language: 'cURL',
      code: `curl -X POST https://api.ziontechgroup.com/v1/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Your text to analyze",
    "model": "sentiment-analysis"
  }'`
    }
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET':
        return 'bg-green-100 text-green-800';
      case 'POST':
        return 'bg-blue-100 text-blue-800';
      case 'PUT':
        return 'bg-yellow-100 text-yellow-800';
      case 'DELETE':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-100',
      green: 'text-green-600 bg-green-100',
      purple: 'text-purple-600 bg-purple-100'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const copyToClipboard = async (code: string, language: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(language);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <MainLayout
      title="API Reference - Zion Tech Group"
      description="Complete API reference for Zion Tech Group services. Access endpoints, authentication, code examples, and SDKs for developers."
      keywords="API reference, REST API, developer documentation, API endpoints, authentication, SDKs"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            API Reference
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Complete API documentation for integrating with Zion Tech Group services. 
            Build powerful applications with our RESTful APIs and comprehensive SDKs.
          </p>
        </div>
      </section>

      {/* API Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">RESTful API</h3>
                <p className="text-gray-600">Standard HTTP methods and JSON responses</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Secure</h3>
                <p className="text-gray-600">API key authentication and HTTPS encryption</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fast</h3>
                <p className="text-gray-600">Low latency responses and high availability</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">SDKs</h3>
                <p className="text-gray-600">Official SDKs for popular programming languages</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Authentication</h2>
              <p className="text-xl text-gray-600">
                Secure your API requests with API key authentication.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Key className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">API Key Authentication</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Include your API key in the Authorization header of all requests:
              </p>
              
              <div className="bg-gray-900 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm">Authorization Header</span>
                  <button
                    onClick={() => copyToClipboard('Authorization: Bearer YOUR_API_KEY', 'auth')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === 'auth' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <pre className="text-green-400 text-sm">
                  <code>Authorization: Bearer YOUR_API_KEY</code>
                </pre>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> Keep your API key secure and never expose it in client-side code. 
                  You can generate and manage your API keys in the dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">API Endpoints</h2>
              <p className="text-xl text-gray-600">
                Complete list of available API endpoints and their descriptions.
              </p>
            </div>
            
            <div className="space-y-4">
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMethodColor(endpoint.method)}`}>
                        {endpoint.method}
                      </span>
                      <code className="text-lg font-mono text-gray-900">{endpoint.endpoint}</code>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(endpoint.color)}`}>
                      {endpoint.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-3">{endpoint.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Code Examples</h2>
              <p className="text-xl text-gray-600">
                Get started quickly with these code examples in popular programming languages.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {codeExamples.map((example, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
                    <h3 className="text-white font-semibold">{example.language}</h3>
                    <button
                      onClick={() => copyToClipboard(example.code, example.language)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === example.language ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="p-6">
                    <pre className="text-sm text-gray-800 overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Official SDKs</h2>
            <p className="text-xl text-gray-600 mb-12">
              Use our official SDKs to integrate with our APIs more easily.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">🟨</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">JavaScript</h3>
                <p className="text-gray-600 mb-4">npm install ziontechgroup-js</p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold">
                  View Docs →
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">🐍</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Python</h3>
                <p className="text-gray-600 mb-4">pip install ziontechgroup</p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold">
                  View Docs →
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">☕</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Java</h3>
                <p className="text-gray-600 mb-4">Maven/Gradle dependency</p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold">
                  View Docs →
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">🔷</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">C#</h3>
                <p className="text-gray-600 mb-4">NuGet package</p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold">
                  View Docs →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Rate Limits</h2>
              <p className="text-xl text-gray-600">
                API rate limits to ensure fair usage and system stability.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1,000</div>
                  <div className="text-gray-600">Requests per minute</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">10,000</div>
                  <div className="text-gray-600">Requests per hour</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100,000</div>
                  <div className="text-gray-600">Requests per day</div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> Rate limits are applied per API key. 
                  Higher limits are available for enterprise customers. 
                  Contact us to discuss your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get your API key and start building with our powerful APIs today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              Get API Key
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ApiPage;