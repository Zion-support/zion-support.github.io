import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Copy, Play, Book, ExternalLink, Key, Shield, Zap } from 'lucide-react';

const APIPage: React.FC = () => {
  const apiEndpoints = [
    {
      category: 'AI Services',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/ai/chat',
          description: 'Send messages to AI chat assistant',
          parameters: [
            { name: 'message', type: 'string', required: true, description: 'The message to send to the AI' },
            { name: 'model', type: 'string', required: false, description: 'AI model to use (default: gpt-4)' },
            { name: 'temperature', type: 'number', required: false, description: 'Response creativity (0-1)' }
          ],
          example: {
            request: {
              message: "Hello, how can you help me?",
              model: "gpt-4",
              temperature: 0.7
            },
            response: {
              id: "chat-123",
              message: "Hello! I'm an AI assistant that can help you with various tasks...",
              model: "gpt-4",
              timestamp: "2024-01-15T10:30:00Z"
            }
          }
        },
        {
          method: 'POST',
          path: '/api/v1/ai/analyze-image',
          description: 'Analyze images using computer vision',
          parameters: [
            { name: 'image', type: 'file', required: true, description: 'Image file to analyze' },
            { name: 'features', type: 'array', required: false, description: 'Analysis features (objects, faces, text, etc.)' }
          ],
          example: {
            request: {
              image: "base64_encoded_image",
              features: ["objects", "faces", "text"]
            },
            response: {
              id: "analysis-456",
              objects: ["person", "car", "building"],
              faces: 2,
              text: ["Welcome to Zion Tech Group"],
              confidence: 0.95
            }
          }
        },
        {
          method: 'POST',
          path: '/api/v1/ai/generate-content',
          description: 'Generate content using AI',
          parameters: [
            { name: 'prompt', type: 'string', required: true, description: 'Content generation prompt' },
            { name: 'type', type: 'string', required: true, description: 'Content type (blog, email, social, etc.)' },
            { name: 'length', type: 'number', required: false, description: 'Desired content length in words' }
          ],
          example: {
            request: {
              prompt: "Write about the benefits of AI in business",
              type: "blog",
              length: 500
            },
            response: {
              id: "content-789",
              content: "Artificial Intelligence is revolutionizing the way businesses operate...",
              word_count: 487,
              type: "blog"
            }
          }
        }
      ]
    },
    {
      category: 'Micro SAAS Tools',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/tools/code-review',
          description: 'Review code for quality and security issues',
          parameters: [
            { name: 'code', type: 'string', required: true, description: 'Code to review' },
            { name: 'language', type: 'string', required: true, description: 'Programming language' },
            { name: 'rules', type: 'array', required: false, description: 'Custom review rules' }
          ],
          example: {
            request: {
              code: "function add(a, b) { return a + b; }",
              language: "javascript",
              rules: ["security", "performance"]
            },
            response: {
              id: "review-101",
              score: 85,
              issues: [
                { line: 1, severity: "warning", message: "Consider adding input validation" }
              ],
              suggestions: ["Add type checking", "Include error handling"]
            }
          }
        },
        {
          method: 'POST',
          path: '/api/v1/tools/seo-analyze',
          description: 'Analyze website SEO performance',
          parameters: [
            { name: 'url', type: 'string', required: true, description: 'Website URL to analyze' },
            { name: 'keywords', type: 'array', required: false, description: 'Target keywords' }
          ],
          example: {
            request: {
              url: "https://example.com",
              keywords: ["AI services", "technology"]
            },
            response: {
              id: "seo-202",
              score: 78,
              issues: [
                { type: "meta_description", message: "Missing meta description" },
                { type: "title_length", message: "Title too long" }
              ],
              recommendations: ["Add meta description", "Optimize title length"]
            }
          }
        }
      ]
    },
    {
      category: 'Analytics',
      endpoints: [
        {
          method: 'GET',
          path: '/api/v1/analytics/metrics',
          description: 'Get analytics metrics and insights',
          parameters: [
            { name: 'start_date', type: 'string', required: true, description: 'Start date (YYYY-MM-DD)' },
            { name: 'end_date', type: 'string', required: true, description: 'End date (YYYY-MM-DD)' },
            { name: 'metrics', type: 'array', required: false, description: 'Specific metrics to retrieve' }
          ],
          example: {
            request: {
              start_date: "2024-01-01",
              end_date: "2024-01-31",
              metrics: ["users", "sessions", "conversions"]
            },
            response: {
              id: "analytics-303",
              period: "2024-01-01 to 2024-01-31",
              metrics: {
                users: 15420,
                sessions: 28950,
                conversions: 1250
              },
              trends: {
                users: "+15%",
                sessions: "+22%",
                conversions: "+8%"
              }
            }
          }
        }
      ]
    }
  ];

  const codeExamples = {
    curl: `curl -X POST https://api.ziontechgroup.com/v1/ai/chat \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "Hello, how can you help me?",
    "model": "gpt-4",
    "temperature": 0.7
  }'`,
    javascript: `const response = await fetch('https://api.ziontechgroup.com/v1/ai/chat', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    message: 'Hello, how can you help me?',
    model: 'gpt-4',
    temperature: 0.7
  })
});

const data = await response.json();
console.log(data);`,
    python: `import requests

url = 'https://api.ziontechgroup.com/v1/ai/chat'
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}
data = {
    'message': 'Hello, how can you help me?',
    'model': 'gpt-4',
    'temperature': 0.7
}

response = requests.post(url, headers=headers, json=data)
result = response.json()
print(result)`
  };

  return (
    <>
      <Helmet>
        <title>API Reference - Zion Tech Group</title>
        <meta name="description" content="Complete API reference for Zion Tech Group's AI services, micro SAAS tools, and analytics. Get started with our RESTful APIs and code examples." />
        <meta name="keywords" content="API reference, REST API, AI API, micro SAAS API, developer documentation, code examples" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Reference
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Complete API documentation for all our AI services and micro SAAS tools
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Key className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Authentication</h3>
                <p className="text-gray-600">Secure API access with Bearer token authentication</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rate Limiting</h3>
                <p className="text-gray-600">Generous rate limits with automatic scaling</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time</h3>
                <p className="text-gray-600">Low-latency responses with real-time processing</p>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">API Endpoints</h2>
            <div className="space-y-12">
              {apiEndpoints.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">{category.category}</h3>
                  <div className="space-y-8">
                    {category.endpoints.map((endpoint, endpointIndex) => (
                      <div key={endpointIndex} className="bg-white rounded-lg shadow-lg p-8">
                        <div className="flex items-center mb-6">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold mr-4 ${
                            endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                            endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                            endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-lg font-mono text-gray-900">{endpoint.path}</code>
                        </div>
                        <p className="text-gray-600 mb-6">{endpoint.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Parameters</h4>
                          <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Name</th>
                                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Type</th>
                                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Required</th>
                                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                {endpoint.parameters.map((param, paramIndex) => (
                                  <tr key={paramIndex} className="border-t border-gray-200">
                                    <td className="px-4 py-2 text-sm font-mono text-gray-900">{param.name}</td>
                                    <td className="px-4 py-2 text-sm text-gray-600">{param.type}</td>
                                    <td className="px-4 py-2 text-sm">
                                      <span className={`px-2 py-1 rounded text-xs ${
                                        param.required ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                                      }`}>
                                        {param.required ? 'Required' : 'Optional'}
                                      </span>
                                    </td>
                                    <td className="px-4 py-2 text-sm text-gray-600">{param.description}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Request Example</h4>
                            <div className="bg-gray-900 rounded-lg p-4 relative">
                              <button className="absolute top-2 right-2 text-gray-400 hover:text-white">
                                <Copy className="w-4 h-4" />
                              </button>
                              <pre className="text-green-400 text-sm overflow-x-auto">
                                <code>{JSON.stringify(endpoint.example.request, null, 2)}</code>
                              </pre>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Response Example</h4>
                            <div className="bg-gray-900 rounded-lg p-4 relative">
                              <button className="absolute top-2 right-2 text-gray-400 hover:text-white">
                                <Copy className="w-4 h-4" />
                              </button>
                              <pre className="text-blue-400 text-sm overflow-x-auto">
                                <code>{JSON.stringify(endpoint.example.response, null, 2)}</code>
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Code Examples</h2>
            <div className="space-y-8">
              {Object.entries(codeExamples).map(([language, code]) => (
                <div key={language} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 capitalize">{language}</h3>
                    <div className="flex space-x-2">
                      <button className="flex items-center text-blue-600 hover:text-blue-800">
                        <Play className="w-4 h-4 mr-1" />
                        Run
                      </button>
                      <button className="flex items-center text-gray-600 hover:text-gray-800">
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-gray-300 text-sm">
                      <code>{code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SDKs and Libraries */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">SDKs & Libraries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'JavaScript/Node.js', version: 'v2.1.0', description: 'Official JavaScript SDK for browsers and Node.js' },
                { name: 'Python', version: 'v1.8.0', description: 'Python SDK with async support and type hints' },
                { name: 'PHP', version: 'v1.5.0', description: 'PHP SDK with Laravel integration' },
                { name: 'Java', version: 'v2.0.0', description: 'Java SDK with Spring Boot support' },
                { name: 'C#/.NET', version: 'v1.7.0', description: 'C# SDK for .NET Framework and Core' },
                { name: 'Go', version: 'v1.3.0', description: 'Go SDK with context support' }
              ].map((sdk, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{sdk.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{sdk.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-semibold">{sdk.version}</span>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Install
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get your API key and start building with our AI services today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get API Key
              </a>
              <a
                href="/docs"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Documentation
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default APIPage;