import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Copy, Check, ArrowRight, Zap, Shield, Cloud, Database } from 'lucide-react';

const ApiDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const apiEndpoints = [
    {
      method: 'POST',
      path: '/api/v1/ai/predict',
      description: 'Make predictions using AI models',
      category: 'AI Services',
      icon: Zap,
      color: 'text-purple-400',
      example: `curl -X POST "https://api.ziontechgroup.com/v1/ai/predict" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "text-classification",
    "input": "This is a positive review",
    "parameters": {
      "confidence_threshold": 0.8
    }
  }'`
    },
    {
      method: 'GET',
      path: '/api/v1/models',
      description: 'List available AI models',
      category: 'AI Services',
      icon: Database,
      color: 'text-blue-400',
      example: `curl -X GET "https://api.ziontechgroup.com/v1/models" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    },
    {
      method: 'POST',
      path: '/api/v1/security/scan',
      description: 'Scan for security vulnerabilities',
      category: 'Security',
      icon: Shield,
      color: 'text-red-400',
      example: `curl -X POST "https://api.ziontechgroup.com/v1/security/scan" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "target": "https://example.com",
    "scan_type": "vulnerability"
  }'`
    },
    {
      method: 'GET',
      path: '/api/v1/cloud/status',
      description: 'Get cloud infrastructure status',
      category: 'Infrastructure',
      icon: Cloud,
      color: 'text-green-400',
      example: `curl -X GET "https://api.ziontechgroup.com/v1/cloud/status" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    }
  ];

  const sdkExamples = [
    {
      language: 'Python',
      code: `import ziontech

# Initialize the client
client = ziontech.Client(api_key="your_api_key")

# Make a prediction
result = client.ai.predict(
    model="text-classification",
    input="This is a positive review"
)

print(result)`,
      description: 'Python SDK for easy integration'
    },
    {
      language: 'JavaScript',
      code: `const ziontech = require('ziontech-sdk');

// Initialize the client
const client = new ziontech.Client({
  apiKey: 'your_api_key'
});

// Make a prediction
client.ai.predict({
  model: 'text-classification',
  input: 'This is a positive review'
}).then(result => {
  console.log(result);
});`,
      description: 'Node.js SDK for JavaScript applications'
    },
    {
      language: 'cURL',
      code: `curl -X POST "https://api.ziontechgroup.com/v1/ai/predict" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "text-classification",
    "input": "This is a positive review"
  }'`,
      description: 'Direct HTTP API calls'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            API Documentation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Complete API reference for integrating Zion Tech Group's AI and IT services into your applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get API Key
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/docs"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              View Full Docs
            </Link>
          </div>
        </div>

        {/* API Endpoints */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            API Endpoints
          </h2>
          <div className="space-y-8">
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <endpoint.icon className={`w-8 h-8 ${endpoint.color}`} />
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`px-3 py-1 rounded text-sm font-semibold ${
                          endpoint.method === 'POST' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-cyan-400 font-mono text-lg">{endpoint.path}</code>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{endpoint.description}</h3>
                      <span className="text-gray-400">{endpoint.category}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white">Example Request</h4>
                    <button
                      onClick={() => copyToClipboard(endpoint.example, `endpoint-${index}`)}
                      className="flex items-center space-x-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors"
                    >
                      {copiedCode === `endpoint-${index}` ? (
                        <>
                          <Check className="w-4 h-4 text-green-400" />
                          <span className="text-green-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="text-gray-300 text-sm overflow-x-auto">
                    <code>{endpoint.example}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SDK Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            SDK Examples
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sdkExamples.map((sdk, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Code className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white">{sdk.language}</h3>
                </div>
                <p className="text-gray-300 mb-4">{sdk.description}</p>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Code Example</span>
                    <button
                      onClick={() => copyToClipboard(sdk.code, `sdk-${index}`)}
                      className="flex items-center space-x-1 px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs transition-colors"
                    >
                      {copiedCode === `sdk-${index}` ? (
                        <>
                          <Check className="w-3 h-3 text-green-400" />
                          <span className="text-green-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="text-gray-300 text-xs overflow-x-auto">
                    <code>{sdk.code}</code>
                  </pre>
                </div>
                
                <Link
                  to="/contact"
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium inline-flex items-center"
                >
                  Get {sdk.language} SDK
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Authentication */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Authentication
          </h2>
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">API Key Authentication</h3>
            <p className="text-gray-300 mb-6">
              All API requests require authentication using an API key. Include your API key in the Authorization header:
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">Authorization Header</h4>
                <button
                  onClick={() => copyToClipboard('Authorization: Bearer YOUR_API_KEY', 'auth-header')}
                  className="flex items-center space-x-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors"
                >
                  {copiedCode === 'auth-header' ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="text-gray-300 text-sm">
                <code>Authorization: Bearer YOUR_API_KEY</code>
              </pre>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Getting Your API Key</h4>
                <ol className="text-gray-300 space-y-2">
                  <li>1. Sign up for a Zion Tech Group account</li>
                  <li>2. Navigate to the API section in your dashboard</li>
                  <li>3. Generate a new API key</li>
                  <li>4. Copy and securely store your key</li>
                </ol>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Rate Limits</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• 1000 requests per hour (free tier)</li>
                  <li>• 10,000 requests per hour (pro tier)</li>
                  <li>• 100,000 requests per hour (enterprise)</li>
                  <li>• Rate limit headers included in responses</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cyber-card p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get your API key and start building amazing AI-powered applications today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get API Key
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/support"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              API Support
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ApiDocsPage;