'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Code, Key, Zap, ArrowRight, Copy, Check, Globe, Brain, Cloud, Shield, Settings, Users, Database, Eye, Sparkles, BookOpen, FileText, Download } from 'lucide-react';

const APIDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const apiEndpoints = [
    {
      title: 'AI Services',
      description: 'Access our AI-powered services and machine learning models',
      baseUrl: 'https://api.ziontechgroup.com/v1/ai',
      endpoints: [
        {
          method: 'POST',
          path: '/generate-text',
          description: 'Generate text using AI models',
          parameters: [
            { name: 'prompt', type: 'string', required: true, description: 'The input prompt for text generation' },
            { name: 'max_tokens', type: 'number', required: false, description: 'Maximum number of tokens to generate' },
            { name: 'temperature', type: 'number', required: false, description: 'Controls randomness in generation' }
          ],
          example: {
            request: {
              prompt: 'Write a brief description of artificial intelligence',
              max_tokens: 100,
              temperature: 0.7
            },
            response: {
              generated_text: 'Artificial intelligence (AI) is a branch of computer science that focuses on creating intelligent machines capable of performing tasks that typically require human intelligence...',
              tokens_used: 45,
              model: 'gpt-4'
            }
          }
        },
        {
          method: 'POST',
          path: '/analyze-sentiment',
          description: 'Analyze sentiment of text using AI',
          parameters: [
            { name: 'text', type: 'string', required: true, description: 'The text to analyze' },
            { name: 'language', type: 'string', required: false, description: 'Language code (default: en)' }
          ],
          example: {
            request: {
              text: 'I love this product!',
              language: 'en'
            },
            response: {
              sentiment: 'positive',
              confidence: 0.95,
              scores: {
                positive: 0.95,
                negative: 0.02,
                neutral: 0.03
              }
            }
          }
        }
      ]
    },
    {
      title: 'Cloud Services',
      description: 'Manage cloud resources and infrastructure',
      baseUrl: 'https://api.ziontechgroup.com/v1/cloud',
      endpoints: [
        {
          method: 'GET',
          path: '/instances',
          description: 'List all cloud instances',
          parameters: [
            { name: 'status', type: 'string', required: false, description: 'Filter by instance status' },
            { name: 'region', type: 'string', required: false, description: 'Filter by region' }
          ],
          example: {
            request: {
              status: 'running',
              region: 'us-east-1'
            },
            response: {
              instances: [
                {
                  id: 'i-1234567890abcdef0',
                  name: 'web-server-01',
                  status: 'running',
                  region: 'us-east-1',
                  type: 't3.medium'
                }
              ],
              total: 1
            }
          }
        }
      ]
    },
    {
      title: 'Data Analytics',
      description: 'Access data analytics and reporting features',
      baseUrl: 'https://api.ziontechgroup.com/v1/analytics',
      endpoints: [
        {
          method: 'GET',
          path: '/metrics',
          description: 'Retrieve analytics metrics',
          parameters: [
            { name: 'metric', type: 'string', required: true, description: 'The metric to retrieve' },
            { name: 'start_date', type: 'string', required: false, description: 'Start date for the range' },
            { name: 'end_date', type: 'string', required: false, description: 'End date for the range' }
          ],
          example: {
            request: {
              metric: 'user_activity',
              start_date: '2024-01-01',
              end_date: '2024-01-31'
            },
            response: {
              metric: 'user_activity',
              period: '2024-01-01 to 2024-01-31',
              data: [
                { date: '2024-01-01', value: 1250 },
                { date: '2024-01-02', value: 1380 }
              ]
            }
          }
        }
      ]
    }
  ];

  const codeExamples = [
    {
      language: 'JavaScript',
      title: 'Generate Text with AI',
      code: `const response = await fetch('https://api.ziontechgroup.com/v1/ai/generate-text', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    prompt: 'Write a brief description of artificial intelligence',
    max_tokens: 100,
    temperature: 0.7
  })
});

const data = await response.json();
console.log(data.generated_text);`
    },
    {
      language: 'Python',
      title: 'Analyze Sentiment',
      code: `import requests

url = 'https://api.ziontechgroup.com/v1/ai/analyze-sentiment'
headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
}
data = {
    'text': 'I love this product!',
    'language': 'en'
}

response = requests.post(url, headers=headers, json=data)
result = response.json()
print(f"Sentiment: {result['sentiment']}")`
    },
    {
      language: 'cURL',
      title: 'Get Cloud Instances',
      code: `curl -X GET "https://api.ziontechgroup.com/v1/cloud/instances" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -G -d "status=running&region=us-east-1"`
    }
  ];

  const features = [
    {
      icon: Code,
      title: 'RESTful API',
      description: 'Clean, intuitive REST API design'
    },
    {
      icon: Key,
      title: 'Secure Authentication',
      description: 'API key and OAuth 2.0 support'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Fast response times and high availability'
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Worldwide content delivery network'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime', icon: Shield },
    { number: '< 100ms', label: 'Response Time', icon: Zap },
    { number: '100+', label: 'Endpoints', icon: Code },
    { number: '24/7', label: 'Support', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            API
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive API documentation with examples, interactive testing, and real-time updates.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search API endpoints..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">API Endpoints</h2>
          <div className="space-y-8">
            {apiEndpoints.map((service, serviceIndex) => (
              <div key={serviceIndex} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex items-center text-sm text-purple-400">
                    <Code className="w-4 h-4 mr-2" />
                    Base URL: {service.baseUrl}
                  </div>
                </div>
                
                <div className="space-y-6">
                  {service.endpoints.map((endpoint, endpointIndex) => (
                    <div key={endpointIndex} className="border border-white/10 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <span className={`px-3 py-1 rounded text-sm font-medium mr-3 ${
                            endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                            endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-white font-mono">{endpoint.path}</code>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{endpoint.description}</p>
                      
                      {endpoint.parameters && endpoint.parameters.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2">Parameters:</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-white/10">
                                  <th className="text-left text-gray-300 py-2">Name</th>
                                  <th className="text-left text-gray-300 py-2">Type</th>
                                  <th className="text-left text-gray-300 py-2">Required</th>
                                  <th className="text-left text-gray-300 py-2">Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                {endpoint.parameters.map((param, paramIndex) => (
                                  <tr key={paramIndex} className="border-b border-white/5">
                                    <td className="py-2">
                                      <code className="text-purple-400">{param.name}</code>
                                    </td>
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
                      )}
                      
                      {endpoint.example && (
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-white font-semibold mb-2">Example Request:</h4>
                            <div className="bg-gray-900 rounded-lg p-4 relative">
                              <pre className="text-green-400 text-sm overflow-x-auto">
                                <code>{JSON.stringify(endpoint.example.request, null, 2)}</code>
                              </pre>
                              <button
                                onClick={() => copyToClipboard(JSON.stringify(endpoint.example.request, null, 2), `request-${serviceIndex}-${endpointIndex}`)}
                                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                              >
                                {copiedCode === `request-${serviceIndex}-${endpointIndex}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                              </button>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-white font-semibold mb-2">Example Response:</h4>
                            <div className="bg-gray-900 rounded-lg p-4 relative">
                              <pre className="text-blue-400 text-sm overflow-x-auto">
                                <code>{JSON.stringify(endpoint.example.response, null, 2)}</code>
                              </pre>
                              <button
                                onClick={() => copyToClipboard(JSON.stringify(endpoint.example.response, null, 2), `response-${serviceIndex}-${endpointIndex}`)}
                                className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                              >
                                {copiedCode === `response-${serviceIndex}-${endpointIndex}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Code Examples</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {codeExamples.map((example, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{example.title}</h3>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                    {example.language}
                  </span>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 relative">
                  <pre className="text-gray-300 text-sm overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                  <button
                    onClick={() => copyToClipboard(example.code, `example-${index}`)}
                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === `example-${index}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Our API?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for developers, by developers. Our API is designed to be powerful, reliable, and easy to use.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get your API key and start building amazing applications with our powerful API.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get API Key
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default APIDocsPage;