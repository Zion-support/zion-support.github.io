import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code, Key, Zap, Shield, Globe, Database, Cpu } from 'lucide-react';

const ApiDocsPage: React.FC = () => {
  const apiEndpoints = [
    {
      category: 'Authentication',
      icon: '🔐',
      endpoints: [
        { method: 'POST', path: '/auth/login', description: 'Authenticate user and get access token' },
        { method: 'POST', path: '/auth/refresh', description: 'Refresh access token' },
        { method: 'POST', path: '/auth/logout', description: 'Logout and invalidate token' },
        { method: 'GET', path: '/auth/me', description: 'Get current user information' }
      ]
    },
    {
      category: 'AI Services',
      icon: '🤖',
      endpoints: [
        { method: 'POST', path: '/ai/predict', description: 'Make predictions using AI models' },
        { method: 'POST', path: '/ai/train', description: 'Train new AI models' },
        { method: 'GET', path: '/ai/models', description: 'List available AI models' },
        { method: 'GET', path: '/ai/models/{id}', description: 'Get specific model details' },
        { method: 'POST', path: '/ai/chat', description: 'Chat with AI assistant' },
        { method: 'POST', path: '/ai/analyze', description: 'Analyze text or data' }
      ]
    },
    {
      category: 'Data Management',
      icon: '📊',
      endpoints: [
        { method: 'GET', path: '/data/datasets', description: 'List all datasets' },
        { method: 'POST', path: '/data/datasets', description: 'Create new dataset' },
        { method: 'GET', path: '/data/datasets/{id}', description: 'Get dataset details' },
        { method: 'PUT', path: '/data/datasets/{id}', description: 'Update dataset' },
        { method: 'DELETE', path: '/data/datasets/{id}', description: 'Delete dataset' },
        { method: 'POST', path: '/data/upload', description: 'Upload data files' }
      ]
    },
    {
      category: 'Predictions',
      icon: '🔮',
      endpoints: [
        { method: 'POST', path: '/predictions/create', description: 'Create new prediction' },
        { method: 'GET', path: '/predictions', description: 'List predictions' },
        { method: 'GET', path: '/predictions/{id}', description: 'Get prediction details' },
        { method: 'POST', path: '/predictions/{id}/run', description: 'Execute prediction' },
        { method: 'GET', path: '/predictions/{id}/results', description: 'Get prediction results' }
      ]
    },
    {
      category: 'Webhooks',
      icon: '🔗',
      endpoints: [
        { method: 'GET', path: '/webhooks', description: 'List webhooks' },
        { method: 'POST', path: '/webhooks', description: 'Create webhook' },
        { method: 'GET', path: '/webhooks/{id}', description: 'Get webhook details' },
        { method: 'PUT', path: '/webhooks/{id}', description: 'Update webhook' },
        { method: 'DELETE', path: '/webhooks/{id}', description: 'Delete webhook' }
      ]
    },
    {
      category: 'Analytics',
      icon: '📈',
      endpoints: [
        { method: 'GET', path: '/analytics/usage', description: 'Get usage analytics' },
        { method: 'GET', path: '/analytics/performance', description: 'Get performance metrics' },
        { method: 'GET', path: '/analytics/errors', description: 'Get error logs' },
        { method: 'GET', path: '/analytics/requests', description: 'Get request logs' }
      ]
    }
  ];

  const codeExamples = [
    {
      language: 'JavaScript',
      title: 'Making a Prediction',
      code: `const response = await fetch('https://api.ziontechgroup.com/ai/predict', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'sentiment-analysis',
    input: 'This is a great product!',
    options: {
      confidence_threshold: 0.8
    }
  })
});

const result = await response.json();
console.log(result.prediction);`
    },
    {
      language: 'Python',
      title: 'Training a Model',
      code: `import requests

url = 'https://api.ziontechgroup.com/ai/train'
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

data = {
    'name': 'custom-classifier',
    'type': 'classification',
    'training_data': [
        {'text': 'Positive example', 'label': 'positive'},
        {'text': 'Negative example', 'label': 'negative'}
    ],
    'parameters': {
        'algorithm': 'random_forest',
        'max_depth': 10
    }
}

response = requests.post(url, headers=headers, json=data)
result = response.json()
print(f"Model ID: {result['model_id']}")`
    },
    {
      language: 'cURL',
      title: 'Authentication',
      code: `curl -X POST https://api.ziontechgroup.com/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "your-email@example.com",
    "password": "your-password"
  }'

# Response:
# {
#   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
#   "token_type": "Bearer",
#   "expires_in": 3600
# }`
    }
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-100 text-green-800';
      case 'POST': return 'bg-blue-100 text-blue-800';
      case 'PUT': return 'bg-yellow-100 text-yellow-800';
      case 'DELETE': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              API Reference
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Complete API documentation for integrating with our AI services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get API Key
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Examples
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* API Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              API Overview
            </h2>
            <p className="text-xl text-gray-600">
              Our RESTful API provides programmatic access to all AI services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">RESTful API</h3>
              <p className="text-gray-600 text-sm">Standard HTTP methods and status codes</p>
            </div>
            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure</h3>
              <p className="text-gray-600 text-sm">OAuth 2.0 and API key authentication</p>
            </div>
            <div className="text-center p-6">
              <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast</h3>
              <p className="text-gray-600 text-sm">Low latency responses and caching</p>
            </div>
            <div className="text-center p-6">
              <Code className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Developer Friendly</h3>
              <p className="text-gray-600 text-sm">Clear documentation and examples</p>
            </div>
          </div>
        </div>
      </section>

      {/* Base URL and Authentication */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Base URL</h2>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                https://api.ziontechgroup.com/v1
              </div>
              <p className="text-gray-600 mt-4">
                All API requests should be made to this base URL with the appropriate endpoint.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Authentication</h2>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                Authorization: Bearer YOUR_API_KEY
              </div>
              <p className="text-gray-600 mt-4">
                Include your API key in the Authorization header for all requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              API Endpoints
            </h2>
            <p className="text-xl text-gray-600">
              Complete list of available API endpoints
            </p>
          </div>
          <div className="space-y-12">
            {apiEndpoints.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
                  <div className="flex items-center">
                    <span className="text-3xl mr-4">{category.icon}</span>
                    <h3 className="text-2xl font-bold">{category.category}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {category.endpoints.map((endpoint, endpointIndex) => (
                      <div key={endpointIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMethodColor(endpoint.method)}`}>
                            {endpoint.method}
                          </span>
                          <code className="text-gray-900 font-mono">{endpoint.path}</code>
                        </div>
                        <div className="text-gray-600 text-sm">
                          {endpoint.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Code Examples
            </h2>
            <p className="text-xl text-gray-600">
              Get started quickly with these code examples
            </p>
          </div>
          <div className="space-y-8">
            {codeExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-900 text-white p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{example.title}</h3>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {example.language}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rate Limits
            </h2>
            <p className="text-xl text-gray-600">
              API usage limits and quotas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Free Tier</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">1,000</div>
              <p className="text-blue-700">requests per month</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-green-900 mb-2">Pro Tier</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">10,000</div>
              <p className="text-green-700">requests per month</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">Unlimited</div>
              <p className="text-purple-700">requests per month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our developer support team is here to help you integrate our API
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:api-support@ziontechgroup.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📧 api-support@ziontechgroup.com
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              📞 +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiDocsPage;