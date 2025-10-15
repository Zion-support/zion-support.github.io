import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Copy, Play, BookOpen, Key, Shield, Zap, ChevronDown, ChevronUp } from 'lucide-react';

const ApiDocsPage: React.FC = () => {
  const [activeEndpoint, setActiveEndpoint] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const apiEndpoints = [
    {
      id: 'auth',
      method: 'POST',
      path: '/api/auth/login',
      title: 'User Authentication',
      description: 'Authenticate users and obtain access tokens',
      parameters: [
        { name: 'email', type: 'string', required: true, description: 'User email address' },
        { name: 'password', type: 'string', required: true, description: 'User password' }
      ],
      responses: [
        { code: 200, description: 'Authentication successful', example: { token: 'jwt_token_here', user: { id: 1, email: 'user@example.com' } } },
        { code: 401, description: 'Invalid credentials', example: { error: 'Invalid email or password' } }
      ],
      example: {
        request: `curl -X POST https://api.ziontechgroup.com/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password"
  }'`,
        response: `{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe"
  }
}`
      }
    },
    {
      id: 'ai-content',
      method: 'POST',
      path: '/api/ai/generate-content',
      title: 'AI Content Generation',
      description: 'Generate content using our AI models',
      parameters: [
        { name: 'prompt', type: 'string', required: true, description: 'Content generation prompt' },
        { name: 'type', type: 'string', required: true, description: 'Content type (article, blog, email, etc.)' },
        { name: 'length', type: 'number', required: false, description: 'Desired content length in words' }
      ],
      responses: [
        { code: 200, description: 'Content generated successfully', example: { content: 'Generated content here...', wordCount: 250 } },
        { code: 400, description: 'Invalid request parameters', example: { error: 'Invalid prompt or content type' } }
      ],
      example: {
        request: `curl -X POST https://api.ziontechgroup.com/ai/generate-content \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Write about artificial intelligence trends",
    "type": "article",
    "length": 500
  }'`,
        response: `{
  "content": "Artificial intelligence is rapidly transforming industries...",
  "wordCount": 487,
  "generatedAt": "2024-01-15T10:30:00Z"
}`
      }
    },
    {
      id: 'analytics',
      method: 'GET',
      path: '/api/analytics/dashboard',
      title: 'Analytics Dashboard',
      description: 'Retrieve analytics data for dashboard',
      parameters: [
        { name: 'period', type: 'string', required: false, description: 'Time period (day, week, month, year)' },
        { name: 'metrics', type: 'array', required: false, description: 'Specific metrics to retrieve' }
      ],
      responses: [
        { code: 200, description: 'Analytics data retrieved successfully', example: { visitors: 1250, conversions: 45, revenue: 12500 } },
        { code: 403, description: 'Insufficient permissions', example: { error: 'Access denied' } }
      ],
      example: {
        request: `curl -X GET "https://api.ziontechgroup.com/analytics/dashboard?period=month" \\
  -H "Authorization: Bearer YOUR_TOKEN"`,
        response: `{
  "period": "month",
  "visitors": 1250,
  "conversions": 45,
  "revenue": 12500,
  "topPages": [
    { "path": "/", "views": 500 },
    { "path": "/about", "views": 300 }
  ]
}`
      }
    },
    {
      id: 'projects',
      method: 'GET',
      path: '/api/projects',
      title: 'List Projects',
      description: 'Retrieve a list of user projects',
      parameters: [
        { name: 'page', type: 'number', required: false, description: 'Page number for pagination' },
        { name: 'limit', type: 'number', required: false, description: 'Number of items per page' },
        { name: 'status', type: 'string', required: false, description: 'Filter by project status' }
      ],
      responses: [
        { code: 200, description: 'Projects retrieved successfully', example: { projects: [], total: 0, page: 1 } },
        { code: 401, description: 'Authentication required', example: { error: 'Token required' } }
      ],
      example: {
        request: `curl -X GET "https://api.ziontechgroup.com/projects?page=1&limit=10" \\
  -H "Authorization: Bearer YOUR_TOKEN"`,
        response: `{
  "projects": [
    {
      "id": 1,
      "name": "Website Redesign",
      "status": "active",
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ],
  "total": 1,
  "page": 1,
  "totalPages": 1
}`
      }
    }
  ];

  const sdkExamples = [
    {
      language: 'JavaScript',
      code: `// Install the SDK
npm install @ziontechgroup/api-client

// Initialize the client
import { ZionTechClient } from '@ziontechgroup/api-client';

const client = new ZionTechClient({
  apiKey: 'your_api_key_here',
  baseUrl: 'https://api.ziontechgroup.com'
});

// Generate content
const content = await client.ai.generateContent({
  prompt: 'Write about AI trends',
  type: 'article',
  length: 500
});

console.log(content);`
    },
    {
      language: 'Python',
      code: `# Install the SDK
pip install ziontechgroup-api

# Initialize the client
from ziontechgroup import ZionTechClient

client = ZionTechClient(
    api_key='your_api_key_here',
    base_url='https://api.ziontechgroup.com'
)

# Generate content
content = client.ai.generate_content(
    prompt='Write about AI trends',
    type='article',
    length=500
)

print(content)`
    },
    {
      language: 'PHP',
      code: `<?php
// Install via Composer
composer require ziontechgroup/api-client

// Initialize the client
use ZionTechGroup\\ApiClient\\ZionTechClient;

$client = new ZionTechClient([
    'api_key' => 'your_api_key_here',
    'base_url' => 'https://api.ziontechgroup.com'
]);

// Generate content
$content = $client->ai->generateContent([
    'prompt' => 'Write about AI trends',
    'type' => 'article',
    'length' => 500
]);

echo $content;
?>`
    }
  ];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <>
      <Helmet>
        <title>API Documentation - Zion Tech Group | Developer Resources</title>
        <meta name="description" content="Complete API documentation for Zion Tech Group services. Learn how to integrate our AI and IT solutions with your applications." />
        <meta name="keywords" content="API documentation, developer resources, integration, REST API, SDK, authentication" />
        <meta property="og:title" content="API Documentation - Zion Tech Group" />
        <meta property="og:description" content="Developer resources and API documentation for our services" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                API <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Documentation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Integrate our AI and IT services into your applications with our comprehensive REST API and SDKs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#getting-started"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="#endpoints"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  View Endpoints
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section id="getting-started" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Getting Started</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Quick setup guide to start using our API
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                <Key className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">1. Get API Key</h3>
                <p className="text-gray-300 mb-6">Sign up for an account and generate your API key from the dashboard.</p>
                <a href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">Get API Key →</a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">2. Choose Integration</h3>
                <p className="text-gray-300 mb-6">Use our REST API directly or choose from our official SDKs for your language.</p>
                <a href="#sdks" className="text-cyan-400 hover:text-cyan-300 transition-colors">View SDKs →</a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                <Play className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">3. Make Requests</h3>
                <p className="text-gray-300 mb-6">Start making API calls and integrate our services into your application.</p>
                <a href="#endpoints" className="text-cyan-400 hover:text-cyan-300 transition-colors">View Examples →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-8 text-center">Authentication</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">API Key Authentication</h3>
                <p className="text-gray-300 mb-6">
                  All API requests require authentication using an API key. Include your API key in the Authorization header:
                </p>
                <div className="bg-slate-800 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-400 font-mono text-sm">Authorization Header</span>
                    <button
                      onClick={() => copyToClipboard('Authorization: Bearer YOUR_API_KEY', 'auth-header')}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === 'auth-header' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <code className="text-gray-300 font-mono text-sm">Authorization: Bearer YOUR_API_KEY</code>
                </div>
                <div className="bg-slate-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-400 font-mono text-sm">Example Request</span>
                    <button
                      onClick={() => copyToClipboard('curl -H "Authorization: Bearer YOUR_API_KEY" https://api.ziontechgroup.com/projects', 'auth-example')}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === 'auth-example' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <code className="text-gray-300 font-mono text-sm">curl -H "Authorization: Bearer YOUR_API_KEY" https://api.ziontechgroup.com/projects</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section id="endpoints" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">API Endpoints</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our available API endpoints with detailed documentation and examples
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto space-y-6">
              {apiEndpoints.map((endpoint) => (
                <div key={endpoint.id} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
                  <button
                    onClick={() => setActiveEndpoint(activeEndpoint === endpoint.id ? null : endpoint.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded text-sm font-semibold ${
                        endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                        endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-white font-mono">{endpoint.path}</code>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-white font-semibold">{endpoint.title}</span>
                      {activeEndpoint === endpoint.id ? (
                        <ChevronUp className="w-5 h-5 text-cyan-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  {activeEndpoint === endpoint.id && (
                    <div className="px-8 pb-6 border-t border-white/10">
                      <p className="text-gray-300 mb-6">{endpoint.description}</p>
                      
                      {/* Parameters */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Parameters</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-white/10">
                                <th className="text-left text-cyan-400 py-2">Name</th>
                                <th className="text-left text-cyan-400 py-2">Type</th>
                                <th className="text-left text-cyan-400 py-2">Required</th>
                                <th className="text-left text-cyan-400 py-2">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              {endpoint.parameters.map((param, index) => (
                                <tr key={index} className="border-b border-white/5">
                                  <td className="py-2 text-white font-mono">{param.name}</td>
                                  <td className="py-2 text-gray-300">{param.type}</td>
                                  <td className="py-2">
                                    <span className={`px-2 py-1 rounded text-xs ${
                                      param.required ? 'bg-red-500/20 text-red-400' : 'bg-gray-500/20 text-gray-400'
                                    }`}>
                                      {param.required ? 'Required' : 'Optional'}
                                    </span>
                                  </td>
                                  <td className="py-2 text-gray-300">{param.description}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      
                      {/* Example */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Example</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-cyan-400 font-mono text-sm">Request</span>
                              <button
                                onClick={() => copyToClipboard(endpoint.example.request, `request-${endpoint.id}`)}
                                className="text-gray-400 hover:text-white transition-colors"
                              >
                                {copiedCode === `request-${endpoint.id}` ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                              </button>
                            </div>
                            <div className="bg-slate-800 rounded-lg p-4">
                              <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap">{endpoint.example.request}</pre>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-cyan-400 font-mono text-sm">Response</span>
                              <button
                                onClick={() => copyToClipboard(endpoint.example.response, `response-${endpoint.id}`)}
                                className="text-gray-400 hover:text-white transition-colors"
                              >
                                {copiedCode === `response-${endpoint.id}` ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                              </button>
                            </div>
                            <div className="bg-slate-800 rounded-lg p-4">
                              <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap">{endpoint.example.response}</pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SDKs */}
        <section id="sdks" className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Official SDKs</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Use our official SDKs for easier integration with your preferred programming language
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {sdkExamples.map((sdk, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                    <h3 className="text-xl font-bold text-white mb-4">{sdk.language}</h3>
                    <div className="bg-slate-800 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-cyan-400 font-mono text-sm">Installation & Usage</span>
                        <button
                          onClick={() => copyToClipboard(sdk.code, `sdk-${index}`)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {copiedCode === `sdk-${index}` ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                      <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap overflow-x-auto">{sdk.code}</pre>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-8 text-center">Rate Limits</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">1,000</div>
                    <div className="text-gray-300">Requests per hour</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">10,000</div>
                    <div className="text-gray-300">Requests per day</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">100</div>
                    <div className="text-gray-300">Concurrent requests</div>
                  </div>
                </div>
                <p className="text-gray-300 mt-6 text-center">
                  Rate limits are applied per API key. Contact us for higher limits or enterprise plans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Need Help?</h2>
              <p className="text-xl text-white/90 mb-8">
                Our developer support team is here to help you integrate our API successfully.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/help"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Developer Support
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ApiDocsPage;