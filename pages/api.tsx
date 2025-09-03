import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Code, Key, Globe, Database, Shield, Zap, ArrowRight, Copy, CheckCircle, ExternalLink, Clock, Users } from 'lucide-react';

export default function API() {
  const apiEndpoints = [
<<<<<<< HEAD
    {
<<<<<<< HEAD
      method: 'GET', endpoint: '/api/v1/users',
      description: 'Retrieve user information', category: 'Users'
    },
    {
      method: 'POST', endpoint: '/api/v1/users',
      description: 'Create a new user', category: 'Users'
    },
    {
      method: 'GET', endpoint: '/api/v1/projects',
      description: 'List all projects', category: 'Projects'
    },
    {
      method: 'POST', endpoint: '/api/v1/projects',
      description: 'Create a new project', category: 'Projects'
    },
    {
      method: 'GET', endpoint: '/api/v1/analytics',
      description: 'Get analytics data', category: 'Analytics'
    },
    {
      method: 'POST', endpoint: '/api/v1/webhooks',
      description: 'Create a webhook', category: 'Webhooks'
=======
      method: 'GET', endpoint: '/api/v1/ai/models',
      description: 'List all available AI models', category: 'AI Services',
=======
  {
      method: 'GET',
      endpoint: '/api/v1/ai/models',
      description: 'List all available AI models',
      category: 'AI Services',
>>>>>>> main
      auth: 'Required'
    }, {
      method: 'POST',
      endpoint: '/api/v1/ai/predict', description: 'Make predictions using AI models',
      category: 'AI Services', auth: 'Required'
    },
    {
      method: 'GET', endpoint: '/api/v1/cloud/status',
      description: 'Get cloud service status', category: 'Cloud Services',
      auth: 'Required'
    }, {
      method: 'POST',
      endpoint: '/api/v1/cloud/deploy', description: 'Deploy application to cloud',
      category: 'Cloud Services', auth: 'Required'
    },
    {
      method: 'GET', endpoint: '/api/v1/security/scan',
      description: 'Perform security scan', category: 'Security',
      auth: 'Required'
    }, {
      method: 'POST',
      endpoint: '/api/v1/security/audit', description: 'Run security audit',
      category: 'Security', auth: 'Required'
>>>>>>> main
    }
  ];

  const sdkLanguages = [
<<<<<<< HEAD
    { name: 'JavaScript', version: '2.1.0', icon: '🟨' }, { name: 'Python', version: '1.8.2', icon: '🐍' },
    { name: 'PHP', version: '1.5.0', icon: '🐘' }, { name: 'Java', version: '1.3.0', icon: '☕' },
    { name: 'Go', version: '1.2.0', icon: '🐹' }, { name: 'Ruby', version: '1.1.0', icon: '💎' }
  ];

  return (
    <MainLayout
      title="API Reference - Zion Tech Group"
      description="Complete API reference and documentation for Zion Tech Group services."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md: text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">API Reference</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Complete API documentation for integrating with Zion Tech Group services.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Get API Key
            </button>
            <Link href="/documentation" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* API Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">API Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our RESTful API provides programmatic access to all Zion Tech Group services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">RESTful API</h3>
              <p className="text-gray-600">Standard HTTP methods and status codes</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure</h3>
              <p className="text-gray-600">OAuth 2.0 and API key authentication</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast</h3>
              <p className="text-gray-600">Low latency and high performance</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg text-center">
              <Database className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliable</h3>
              <p className="text-gray-600">99.9% uptime guarantee</p>
=======
<<<<<<< HEAD
    {
      name: 'Python', version: 'v2.1.0',
      description: 'Official Python SDK for Zion Tech Group APIs', icon: '🐍',
      features: ['Async support', 'Type hints', 'Error handling', 'Documentation']
    }, {
      name: 'JavaScript',
      version: 'v1.8.0', description: 'Node.js and browser-compatible JavaScript SDK',
      icon: '🟨', features: ['Promise-based', 'Browser support', 'TypeScript', 'Examples']
    }, {
      name: 'Java',
      version: 'v1.5.0', description: 'Java SDK for enterprise applications',
      icon: '☕', features: ['Maven support', 'Async operations', 'Logging', 'Testing']
    }, {
      name: 'C#',
      version: 'v1.3.0', description: '.NET SDK for Windows applications',
      icon: '🔷', features: ['NuGet package', 'Async/await', 'LINQ support', 'Documentation']
=======
  {
      name: 'Python',
      version: 'v2.1.0',
      description: 'Official Python SDK for Zion Tech Group APIs',
      icon: '🐍',
      features: ['Async support,Type hints,Error handling,Documentation']
    },
    {
      name: 'JavaScript',
      version: 'v1.8.0',
      description: 'Node.js and browser-compatible JavaScript SDK',
      icon: '🟨',
      features: ['Promise-based,Browser support,TypeScript,Examples']
    },
    {
      name: 'Java',
      version: 'v1.5.0',
      description: 'Java SDK for enterprise applications',
      icon: '☕',
      features: ['Maven support,Async operations,Logging,Testing']
    },
    {
      name: 'C#',
      version: 'v1.3.0',
      description: '.NET SDK for Windows applications',
      icon: '🔷',
      features: ['NuGet package,Async/await,LINQ support,Documentation']
>>>>>>> main
    }
  ];

  const codeExamples = [
<<<<<<< HEAD
    {
      title: 'AI Model Prediction', language: 'python',
=======
  {
      title: 'AI Model Prediction',
      language: 'python',
>>>>>>> main
      code: `import ziontech

# Initialize client
client = ziontech.Client(api_key="your-api-key")

# Make prediction
result = client.ai.predict(
    model_id="sentiment-analysis", data={"text": "I love this product!"}
)

print(result.prediction)  # "positive"`, description: 'Use our AI services to analyze text sentiment'
    },
    {
      title: 'Cloud Deployment', language: 'javascript',
      code: `const ziontech = require('ziontech');

const client = new ziontech.Client({
  apiKey: 'your-api-key'
});

// Deploy to cloud
const deployment = await client.cloud.deploy({
  appName: 'my-app', source: './dist',
  environment: 'production'
});

console.log(deployment.url);`, description: 'Deploy your application to the cloud'
    },
    {
      title: 'Security Scan', language: 'curl',
      code: `curl -X POST "https://api.ziontechgroup.com/v1/security/scan" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
<<<<<<< HEAD
  -d '{'
    "target": "https://example.com", "scan_type": "vulnerability"
=======
  -d '{
    "target": "https://example.com,scan_type": "vulnerability"
>>>>>>> main
  }'`,
      description: 'Perform security scans using our API'
    }
  ];

  const rateLimits = [
<<<<<<< HEAD
    {
      plan: 'Free', requests: '1,000/month', burst: '10/minute',
      features: ['Basic API access', 'Community support']
    }, {
      plan: 'Professional',
      requests: '100, 000/month',
      burst: '100/minute', features: ['Full API access', 'Priority support', 'Webhooks']
    }, {
      plan: 'Enterprise',
      requests: 'Unlimited', burst: '1,000/minute', features: ['Unlimited access', 'Dedicated support', 'Custom limits']
=======
  {
      plan: 'Free',
      requests: '1,000/month',
      burst: '10/minute',
      features: ['Basic API access,Community support']
    },
    {
      plan: 'Professional',
      requests: '100,000/month',
      burst: '100/minute',
      features: ['Full API access,Priority support,Webhooks']
    },
    {
      plan: 'Enterprise',
      requests: 'Unlimited',
      burst: '1,000/minute',
      features: ['Unlimited access,Dedicated support,Custom limits']
>>>>>>> main
    }
  ];

  return (
    <>
      <Head>
        <title>API Reference - Zion Tech Group</title>
        <meta name="description" content="Complete API reference for Zion Tech Group services. Integrate AI, cloud, and security services into your applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                API Reference
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Integrate Zion Tech Group services into your applications with our comprehensive REST API.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="#getting-started">
                  <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </Link>
                <Link href="/docs">
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    View Documentation
                  </button>
                </Link>
              </div>
>>>>>>> main
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section id="getting-started" className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Quick Start
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Get up and running with our API in minutes
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">1. Get Your API Key</h3>
                <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span>API Key</span>
                    <button className="text-blue-400 hover:text-blue-300">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <div>zt_live_1234567890abcdef...</div>
                </div>
                <p className="text-gray-600 mt-4">Sign up for a free account and get your API key from the dashboard.</p>
              </div>
              
<<<<<<< HEAD
              <div className="bg-gray-900 text-green-400 p-6 rounded-lg mb-6 overflow-x-auto">
                <pre className="text-sm">
{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     https://api.ziontechgroup.com/v1/users`}
                </pre>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Getting Your API Key</h4>
                  <ol className="list-decimal list-inside text-gray-600 space-y-2">
                    <li>Sign up for a Zion Tech Group account</li>
                    <li>Navigate to your dashboard</li>
                    <li>Go to API Keys section</li>
                    <li>Generate a new API key</li>
                    <li>Copy and store it securely</li>
                  </ol>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Rate Limits</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Free tier: 1, 000 requests/hour</li>
                    <li>Pro tier: 10,000 requests/hour</li>
                    <li>Enterprise: Custom limits</li>
                    <li>Rate limit headers included</li>
                  </ul>
=======
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">2. Make Your First Request</h3>
                <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
                  <div className="text-blue-400 mb-2">curl -X GET "https://api.ziontechgroup.com/v1/ai/models" \</div>
                  <div className="text-yellow-400">  -H "Authorization: Bearer YOUR_API_KEY"</div>
>>>>>>> main
                </div>
                <p className="text-gray-600 mt-4">Test the API with a simple request to list available AI models.</p>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* API Endpoints */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">API Endpoints</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive API endpoints organized by category.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Endpoint</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {apiEndpoints.map((endpoint, index) => (
                      <tr key={index} className="hover: bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                            endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                            endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {endpoint.method}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                          {endpoint.endpoint}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {endpoint.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="bg-gray-100 text-gray-800 px-2 py-1 text-xs font-semibold rounded-full">
                            {endpoint.category}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Software Development Kits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our official SDKs to integrate with our API in your preferred programming language.
            </p>
          </div>

          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sdkLanguages.map((sdk, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{sdk.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{sdk.name}</h3>
                    <p className="text-gray-600">v{sdk.version}</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                    Install
                  </button>
                  <Link href={`/docs/sdk/${sdk.name.toLowerCase()}`} className="flex-1 border border-blue-600 text-blue-600 hover: bg-blue-50 px-4 py-2 rounded-lg font-semibold transition-colors text-center">
                    Docs
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive API Explorer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive API Explorer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Test our API endpoints directly in your browser.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Try the API</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Endpoint</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500">
                    <option>GET /api/v1/users</option>
                    <option>POST /api/v1/users</option>
                    <option>GET /api/v1/projects</option>
                    <option>POST /api/v1/projects</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">API Key</label>
                  <input
                    type="password"
                    placeholder="Enter your API key"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Send Request
                </button>
              </div>
=======
        {/* API Endpoints */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                API Endpoints
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints
              </p>
            </div>
            
            <div className="space-y-4">
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover: shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-lg font-mono text-gray-900">{endpoint.endpoint}</code>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {endpoint.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        endpoint.auth === 'Required' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {endpoint.auth}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{endpoint.description}</p>
                  <div className="flex items-center space-x-4">
                    <Link href="#" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                      View Documentation
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                    <button className="text-gray-500 hover:text-gray-700 flex items-center">
                      <Copy className="w-4 h-4 mr-1" />
                      Copy
                    </button>
                  </div>
                </div>
              ))}
>>>>>>> main
            </div>
          </div>
        </section>

        {/* SDKs */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Official SDKs
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Use our official SDKs for your preferred programming language
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sdkLanguages.map((sdk, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover: shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{sdk.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{sdk.name}</h3>
                    <p className="text-blue-600 font-semibold">v{sdk.version}</p>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{sdk.description}</p>
                  <ul className="space-y-2 mb-6">
                    {sdk.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Install SDK
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Code Examples
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Get started with these practical examples
              </p>
            </div>
            
            <div className="space-y-8">
              {codeExamples.map((example, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{example.title}</h3>
                    <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {example.language}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{example.description}</p>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 font-mono text-sm">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Rate Limits
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                API usage limits by plan
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {rateLimits.map((limit, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg p-6 ${
                  limit.plan === 'Professional' ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}>
                  {limit.plan === 'Professional' && (
                    <div className="text-center mb-4">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{limit.plan}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-1">{limit.requests}</div>
                    <div className="text-gray-600">requests per month</div>
                    <div className="text-lg font-semibold text-gray-700 mt-2">{limit.burst}</div>
                    <div className="text-gray-600">burst limit</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {limit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    limit.plan === 'Professional' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover: from-blue-700 hover:to-purple-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    {limit.plan === 'Free' ? 'Get Started' : 'Upgrade Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start building with our API today. Get your free API key and begin integrating our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get API Key
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </Link>
              <Link href="/docs">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  View Documentation
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
</>
  );
}