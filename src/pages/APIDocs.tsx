import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Code, Copy, Check, Play, BookOpen, Database, Shield, Zap, Globe, Users, Download, ExternalLink } from 'lucide-react';

const APIDocs: React.FC = () => {
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('authentication');

  const copyToClipboard = (text: string, endpoint: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const apiEndpoints = [
    {
      method: 'POST',
      endpoint: '/api/v1/auth/login',
      description: 'Authenticate user and receive access token',
      parameters: [
        { name: 'email', type: 'string', required: true, description: 'User email address' },
        { name: 'password', type: 'string', required: true, description: 'User password' }
      ],
      response: {
        success: { token: 'string', user: 'object' },
        error: { message: 'string', code: 'number' }
      }
    },
    {
      method: 'GET',
      endpoint: '/api/v1/ai/models',
      description: 'Retrieve available AI models and their capabilities',
      parameters: [
        { name: 'category', type: 'string', required: false, description: 'Filter by model category' },
        { name: 'limit', type: 'number', required: false, description: 'Number of models to return' }
      ],
      response: {
        success: { models: 'array', total: 'number' },
        error: { message: 'string', code: 'number' }
      }
    },
    {
      method: 'POST',
      endpoint: '/api/v1/ai/generate',
      description: 'Generate content using AI models',
      parameters: [
        { name: 'model', type: 'string', required: true, description: 'AI model identifier' },
        { name: 'prompt', type: 'string', required: true, description: 'Input prompt for generation' },
        { name: 'options', type: 'object', required: false, description: 'Generation options' }
      ],
      response: {
        success: { content: 'string', usage: 'object', model: 'string' },
        error: { message: 'string', code: 'number' }
      }
    },
    {
      method: 'GET',
      endpoint: '/api/v1/analytics/dashboard',
      description: 'Retrieve analytics dashboard data',
      parameters: [
        { name: 'dateRange', type: 'string', required: false, description: 'Date range for analytics' },
        { name: 'metrics', type: 'array', required: false, description: 'Specific metrics to retrieve' }
      ],
      response: {
        success: { data: 'object', period: 'string', lastUpdated: 'string' },
        error: { message: 'string', code: 'number' }
      }
    }
  ];

  const sdkExamples = [
    {
      language: 'JavaScript',
      code: `import { ZionTechAPI } from '@ziontech/api';

const api = new ZionTechAPI({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Generate AI content
const response = await api.ai.generate({
  model: 'gpt-4',
  prompt: 'Write a business proposal for...',
  options: {
    maxTokens: 1000,
    temperature: 0.7
  }
});

console.log(response.content);`
    },
    {
      language: 'Python',
      code: `from ziontech import ZionTechAPI

api = ZionTechAPI(
    api_key="your-api-key",
    environment="production"
)

# Generate AI content
response = api.ai.generate(
    model="gpt-4",
    prompt="Write a business proposal for...",
    options={
        "max_tokens": 1000,
        "temperature": 0.7
    }
)

print(response.content)`
    },
    {
      language: 'cURL',
      code: `curl -X POST https://api.ziontechgroup.com/api/v1/ai/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4",
    "prompt": "Write a business proposal for...",
    "options": {
      "maxTokens": 1000,
      "temperature": 0.7
    }
  }'`
    }
  ];

  const tabs = [
    { id: 'authentication', label: 'Authentication', icon: Shield },
    { id: 'endpoints', label: 'API Endpoints', icon: Code },
    { id: 'sdks', label: 'SDKs & Libraries', icon: BookOpen },
    { id: 'examples', label: 'Code Examples', icon: Play },
    { id: 'rate-limits', label: 'Rate Limits', icon: Zap },
    { id: 'errors', label: 'Error Handling', icon: Database }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="API Documentation - Zion Tech Group"
        description="Comprehensive API documentation, SDKs, code examples, and integration guides for our AI-powered platform."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build powerful applications with our comprehensive API. Access AI services, analytics, 
              and business intelligence through simple REST endpoints.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                <Download className="w-5 h-5" />
                Download SDKs
              </button>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                <Play className="w-5 h-5" />
                Try API Playground
              </button>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                <Users className="w-5 h-5" />
                Join Developer Community
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <Globe className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">&lt;100ms</div>
            <div className="text-gray-400">Response Time</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">256-bit</div>
            <div className="text-gray-400">Encryption</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">10K+</div>
            <div className="text-gray-400">Developers</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8">
          {activeTab === 'authentication' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Authentication</h2>
              <p className="text-gray-300 mb-6">
                All API requests require authentication using API keys. Include your API key in the Authorization header.
              </p>
              
              <div className="bg-slate-800 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">Authorization Header</span>
                  <button
                    onClick={() => copyToClipboard('Authorization: Bearer YOUR_API_KEY', 'auth-header')}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    {copiedEndpoint === 'auth-header' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <code className="text-green-400 text-sm">Authorization: Bearer YOUR_API_KEY</code>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Getting Your API Key</h3>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2">
                    <li>Log into your Zion Tech Group account</li>
                    <li>Navigate to API Settings</li>
                    <li>Generate a new API key</li>
                    <li>Copy and store securely</li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Security Best Practices</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Never expose API keys in client-side code</li>
                    <li>Rotate keys regularly</li>
                    <li>Use environment variables</li>
                    <li>Monitor API usage</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'endpoints' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">API Endpoints</h2>
              <p className="text-gray-300 mb-6">
                Explore our comprehensive API endpoints for AI services, analytics, and business intelligence.
              </p>
              
              <div className="space-y-6">
                {apiEndpoints.map((endpoint, index) => (
                  <div key={index} className="bg-slate-800 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                          endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                          endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-white font-mono text-sm">{endpoint.endpoint}</code>
                      </div>
                      <button
                        onClick={() => copyToClipboard(endpoint.endpoint, `endpoint-${index}`)}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        {copiedEndpoint === `endpoint-${index}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{endpoint.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Parameters</h4>
                        <div className="space-y-2">
                          {endpoint.parameters.map((param, paramIndex) => (
                            <div key={paramIndex} className="text-sm">
                              <span className="text-blue-400 font-mono">{param.name}</span>
                              <span className="text-gray-400 mx-2">•</span>
                              <span className="text-gray-300">{param.type}</span>
                              {param.required && <span className="text-red-400 ml-2">required</span>}
                              <div className="text-gray-400 text-xs mt-1">{param.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Response</h4>
                        <div className="space-y-2">
                          <div className="text-sm">
                            <span className="text-green-400">Success:</span>
                            <pre className="text-gray-300 text-xs mt-1 bg-slate-700 p-2 rounded">
                              {JSON.stringify(endpoint.response.success, null, 2)}
                            </pre>
                          </div>
                          <div className="text-sm">
                            <span className="text-red-400">Error:</span>
                            <pre className="text-gray-300 text-xs mt-1 bg-slate-700 p-2 rounded">
                              {JSON.stringify(endpoint.response.error, null, 2)}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'sdks' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">SDKs & Libraries</h2>
              <p className="text-gray-300 mb-6">
                Use our official SDKs and libraries to integrate with your preferred programming language.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-400 font-bold text-lg">JS</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">JavaScript/Node.js</h3>
                      <p className="text-sm text-gray-400">v2.1.0</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    Official JavaScript SDK with TypeScript support, async/await, and comprehensive error handling.
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm font-medium">
                      Install
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-400 font-bold text-lg">PY</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Python</h3>
                      <p className="text-sm text-gray-400">v1.8.2</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    Python SDK with async support, pandas integration, and Jupyter notebook examples.
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm font-medium">
                      Install
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-green-400 font-bold text-lg">GO</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Go</h3>
                      <p className="text-sm text-gray-400">v1.2.1</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    High-performance Go SDK with context support, middleware, and comprehensive testing.
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm font-medium">
                      Install
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'examples' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Code Examples</h2>
              <p className="text-gray-300 mb-6">
                Get started quickly with these code examples in your preferred programming language.
              </p>
              
              <div className="space-y-6">
                {sdkExamples.map((example, index) => (
                  <div key={index} className="bg-slate-800 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">{example.language}</h3>
                      <button
                        onClick={() => copyToClipboard(example.code, `example-${index}`)}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        {copiedEndpoint === `example-${index}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                      <code className="text-green-400 text-sm">{example.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'rate-limits' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Rate Limits</h2>
              <p className="text-gray-300 mb-6">
                Understand our rate limiting policies to ensure optimal API performance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Free Tier</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      1,000 requests per hour
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      10,000 requests per day
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Basic support
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Pro Tier</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      10,000 requests per hour
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      100,000 requests per day
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Priority support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'errors' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Error Handling</h2>
              <p className="text-gray-300 mb-6">
                Learn how to handle errors gracefully and implement proper error handling in your applications.
              </p>
              
              <div className="space-y-6">
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Common Error Codes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-red-400 font-mono">400</span>
                        <span className="text-gray-300">Bad Request</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-red-400 font-mono">401</span>
                        <span className="text-gray-300">Unauthorized</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-red-400 font-mono">403</span>
                        <span className="text-gray-300">Forbidden</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-red-400 font-mono">429</span>
                        <span className="text-gray-300">Rate Limited</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-red-400 font-mono">500</span>
                        <span className="text-gray-300">Internal Error</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-red-400 font-mono">503</span>
                        <span className="text-gray-300">Service Unavailable</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Error Response Format</h3>
                  <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-green-400 text-sm">{`{
  "error": {
    "code": 400,
    "message": "Invalid request parameters",
    "details": {
      "field": "email",
      "issue": "Invalid email format"
    },
    "requestId": "req_123456789"
  }
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default APIDocs;