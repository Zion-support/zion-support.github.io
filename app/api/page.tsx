'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import {Code, Database, Zap, Shield, Globe, Cpu, BarChart, Users, Settings, ArrowRight, CheckCircle, Star, ExternalLink}}from 'lucide-react';

const ApiPage: React.FC = () => {
  const apiEndpoints = const apiEndpoints = const apiEndpoints = [
    {
      category: 'AI Services',
      endpoints: [,
        {
          method: 'POST',
          path: '/api/ai/chat',
          description: 'AI-powered chat completion',
          parameters: ['message', 'model', 'temperature'],
          example: ,
      request:  ,
      message: "Hello, how can I help you?",
              model: "gpt-4",
              temperature: 0.7;
            },
            response: {,
      response: "Hello! I'm here to help you with any questions or tasks you might have.",
              confidence: 0.95,
              tokens_used: 25;
            }
          }
        },
        {method: 'POST',
          path: '/api/ai/analyze',
          description: 'Data analysis and insights',
          parameters: ['data', 'analysis_type', 'options'],
          example: {,
      request:  ,
      data: [1, 2, 3, 4, 5],
              analysis_type: "trend",
              options:  include_forecast: true }
            },
            response: {,
      trend: "increasing",
              forecast: [6, 7, 8],
              confidence: 0.88;
            }
          }
        },
        {method: 'POST',
          path: '/api/ai/generate-content',
          description: 'AI content generation',
          parameters: ['prompt', 'type', 'length', 'style'],
          example: ,
      request:  ,
      prompt: "Write a blog post about AI",
              type: "blog_post",
              length: "medium",
              style: "professional"
            },
            response: {,
      content: "Artificial Intelligence is revolutionizing...",
              word_count: 500,
              readability_score: 8.2;
            }
          };
        };
      ];
    },
    {category: 'IT Services',
      endpoints: [,
        {
          method: 'GET',
          path: '/api/infrastructure/status',
          description: 'Infrastructure health check',
          parameters: ['service_id'],
          example: ,
      request:  service_id: "web-server-01" },
            response: {,
      status: "healthy",
              uptime: "99.9%",
              last_check: "2024-01-15T10:30:00Z",}}
        },
        {method: 'POST',
          path: '/api/security/scan',
          description: 'Security vulnerability scan',
          parameters: ['target', 'scan_type', 'options'],
          example: {,
      request:  ,
      target: "https://example.com",
              scan_type: "comprehensive",
              options:  include_ssl: true }
            },
            response: {,
      vulnerabilities: [],
              score: 95,
              recommendations: ["Keep SSL certificates updated"],}}
        }
  ]
    },
    {category: 'Micro SaaS',
      endpoints: [,
        {
          method: 'GET',
          path: '/api/analytics/dashboard',
          description: 'Analytics dashboard data',
          parameters: ['date_range', 'metrics'],
          example: ,
      request:  ,
      date_range: "last_30_days",
              metrics: ["visitors", "conversions", "revenue"]
            },
            response: {,
      visitors: 15420,
              conversions: 234,
              revenue: 12500,
              growth_rate: 12.5;
            }
          }
        },
        {method: 'POST',
          path: '/api/email/send',
          description: 'Send transactional emails',
          parameters: ['to', 'template', 'data'],
          example: {,
      request:  ,
      to: "user@example.com",
              template: "welcome",
              data:  name: "John", company: "Acme Corp" }
            },
            response: {,
      message_id: "msg_123456",
              status: "sent",
              delivery_time: "2024-01-15T10:30:15Z",}}
        }
  ]
    }
  ];
  const authenticationMethods = const authenticationMethods = const authenticationMethods = [
    {
      name: 'API Key',
      description: 'Simple API key authentication',
      example: 'Authorization: Bearer sk-1234567890abcdef',
      security: 'High',},
    {name: 'OAuth 2.0',
      description: 'Industry-standard OAuth 2.0 flow',
      example: 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      security: 'Very High',},
    {name: 'JWT Token',
      description: 'JSON Web Token authentication',
      example: 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      security: 'High';
    };
  ];
  const rateLimits = const rateLimits = const rateLimits = [
    { tier: 'Free', requests: '1,000/month', burst: '10/minute' },
    { tier: 'Pro', requests: '50,000/month', burst: '100/minute' },;
    { tier: 'Enterprise', requests: 'Unlimited', burst: '1,000/minute' };
  ];
  return() {authenticationMethods.map((method, index) => ()

        <title>API Reference - Zion Tech Group</title>
        <meta name="description" content="Complete API reference for Zion Tech Group's AI, IT, and Micro SaaS services. Get started with our comprehensive API documentation." />
        <meta name="keywords" content="API, documentation, AI API, IT services API, micro SaaS API, developer tools" />
        <link rel="canonical" href="https: //ziontechgroup.com/api" />,
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        </div></div><div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          </div></div><div className="text-center mb-16">
            </div></div><h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              API Reference;
            </h1></h1></h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive API documentation for all Zion Tech Group services. 
              Build powerful applications with our AI, IT, and Micro SaaS APIs.
            </p></p></p>
            <div className="flex flex-wrap justify-center gap-4">
              </div></div><a;
                href="#getting-started" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Get Started;
              </a>
              <a;
                href="#authentication" className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Authentication;
              </a>
              <a;
                href="#endpoints" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View Endpoints;
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            </div></div><div className="cyber-card-enhanced p-6 text-center">
              </div></div><Code className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">50+</div></div></div>
              <div className="text-gray-300">API Endpoints</div></div></div>
            </div>
            <div className="cyber-card-enhanced p-6 text-center">
              </div></div><Zap className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">99.9%</div></div></div>
              <div className="text-gray-300">Uptime SLA</div></div></div>
            </div>
            <div className="cyber-card-enhanced p-6 text-center">
              </div></div><Shield className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">256-bit</div></div></div>
              <div className="text-gray-300">SSL Encryption</div></div></div>
            </div>
            <div className="cyber-card-enhanced p-6 text-center">
              </div></div><Globe className="w-8 h-8 text-orange-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">24/7</div></div></div>
              <div className="text-gray-300">Support</div></div></div>
            </div>
          </div>

          {/* Getting Started */}
          <section id="getting-started" className="mb-16">
            </section></section><h2 className="text-3xl font-bold text-white mb-8 text-center">Getting Started</h2></h2></h2>
            <div className="cyber-card-enhanced p-8">
              </div></div><h3 className="text-xl font-semibold text-white mb-4">1. Get Your API Key</h3></h3></h3>
              <p className="text-gray-300 mb-6">
                Sign up for a free account and get your API key from the dashboard.
              </p></p></p>
              
              <h3 className="text-xl font-semibold text-white mb-4">2. Make Your First Request</h3></h3></h3>
              <div className="bg-slate-800 rounded-lg p-4 mb-6">
                </div></div><pre className="text-green-400 text-sm overflow-x-auto">
{`curl -X POST https://api.ziontechgroup.com/v1/ai/chat \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '
    "message": "Hello, world!",
    "model": "gpt-4"
  }'`}
                </p></p></pre>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">3. Explore the Documentation</h3></h3></h3>
              <p className="text-gray-300">
                Browse our comprehensive API documentation to discover all available endpoints and features.
              </p></p></p>
            </div>
          </section>

          {/* Authentication */}
          <section id="authentication" className="mb-16">
            </section></section><h2 className="text-3xl font-bold text-white mb-8 text-center">Authentication</h2></h2></h2>)
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">)
              {authenticationMethods.map((method, index) => (
                </div></div><div key=index} className="cyber-card-enhanced p-6">
                  </div></div><h3 className="text-lg font-semibold text-white mb-3">{method.name}</h3></h3></h3>
                  <p className="text-gray-300 mb-4">{method.description}</p></p></p>
                  <div className="bg-slate-800 rounded p-3 mb-4">
                    </div></div><code className="text-green-400 text-sm">{method.example}</code>
                  </div>
                  <div className="flex items-center justify-between">
                    </div></div><span className="text-sm text-gray-400">Security Level:</span></span></span>
                    <span className={`text-sm font-semibold $
                      method.security === 'Very High' ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                      {method.security}
                    </span></span></span>
                  </div>)
                </div>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              ))}
            </div>
          </section>

          {/* Rate Limits */}
          <section className="mb-16" /></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Rate Limits</h2>
            <div className="cyber-card-enhanced p-8" /></div>
              <div className="overflow-x-auto" /></div>
                <table className="w-full" /></table>
                  <thead></thead>
                    <tr className="border-b border-gray-700" /></tr>
          <section className="mb-16">
            </section></section><h2 className="text-3xl font-bold text-white mb-8 text-center">Rate Limits</h2></h2></h2>
            <div className="cyber-card-enhanced p-8">
              </div></div><div className="overflow-x-auto">
                </div></div><table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                      <th className="text-left text-white py-3 px-4">Tier</th>
                      <th className="text-left text-white py-3 px-4">Monthly Requests</th>
                      <th className="text-left text-white py-3 px-4">Burst Limit</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                    {rateLimits.map((limit, index) => ()
                  <tbody>
                    {rateLimits.map((limit, index) => (
                      <tr key=index} className="border-b border-gray-800">
                        <td className="py-3 px-4 text-white font-semibold">{limit.tier}</td>
                        <td className="py-3 px-4 text-gray-300">{limit.requests}</td>
                        <td className="py-3 px-4 text-gray-300">{limit.burst}</td>)
                      </tr>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* API Endpoints */}
          <section id="endpoints" className="mb-16" /></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">API Endpoints</h2>
            <div className="space-y-8" /></div>
              {apiEndpoints.map((category, categoryIndex) => ()
                    {category.endpoints.map((endpoint, endpointIndex) => ()
                              {endpoint.parameters.map((param, paramIndex) => ()
                              ))}
                            </ul>
                          </div>
                          <div></div>
                            <h4 className="text-white font-semibold mb-2">Example</h4>
                            <div className="bg-slate-800 rounded p-3" /></div>
                              <div className="text-xs text-gray-400 mb-2">Request:</div>
                              <pre className="text-green-400 text-xs overflow-x-auto" /></pre>
                                {JSON.stringify(endpoint.example.request, null, 2)}
                              </pre>
                              <div className="text-xs text-gray-400 mb-2 mt-3">Response:</div>
                              <pre className="text-blue-400 text-xs overflow-x-auto" /></pre>
          <section id="endpoints" className="mb-16">
            </section></section><h2 className="text-3xl font-bold text-white mb-8 text-center">API Endpoints</h2></h2></h2>
            <div className="space-y-8">
              {apiEndpoints.map((category, categoryIndex) => (
                </div></div><div key=categoryIndex} className="cyber-card-enhanced p-8">
                  </div></div><h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    </h3></h3><Database className="w-6 h-6 mr-3 text-cyan-400" />
                    {category.category}
                  </h3>)
                  <div className="space-y-6">)
                    {category.endpoints.map((endpoint, endpointIndex) => (
                      </div></div><div key=endpointIndex} className="border border-gray-700 rounded-lg p-6">
                        </div></div><div className="flex items-center justify-between mb-4">
                          </div></div><div className="flex items-center space-x-4">
                            </div></div><span className={`px-3 py-1 rounded text-sm font-semibold $
                              endpoint.method === 'GET' 
                                ? 'bg-green-600 text-white' 
                                : 'bg-blue-600 text-white'
                            }`}>
                              {endpoint.method}
                            </span></span></span>
                            <code className="text-cyan-400 font-mono">{endpoint.path}</code>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">{endpoint.description}</p></p></p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          </div></div><div>
                            </div></div><h4 className="text-white font-semibold mb-2">Parameters</h4>)
                            <ul className="space-y-1">)
                              {endpoint.parameters.map((param, paramIndex) => (
                                <li key=paramIndex} className="text-gray-300 text-sm">
                                  <code className="text-cyan-400">{param}</code>)
                                </li>)
                              ))}
                            </ul>
                          </div>
                          <div>
                            </div></div><h4 className="text-white font-semibold mb-2">Example</h4>
                            <div className="bg-slate-800 rounded p-3">
                              </div></div><div className="text-xs text-gray-400 mb-2">Request:</div></div></div>
                              <pre className="text-green-400 text-xs overflow-x-auto">
                                {JSON.stringify(endpoint.example.request, null, 2)}
                              </p></p></pre>
                              <div className="text-xs text-gray-400 mb-2 mt-3">Response:</div></div></div>
                              <pre className="text-blue-400 text-xs overflow-x-auto">
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                                {JSON.stringify(endpoint.example.response, null, 2)}
                              </p></p></pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SDKs and Libraries */}
          <section className="mb-16" /></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">SDKs & Libraries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" /></div>
              <div className="cyber-card-enhanced p-6 text-center" /></div>
                <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" / /></Code>
                <h3 className="text-lg font-semibold text-white mb-2">JavaScript/Node.js</h3>
                <p className="text-gray-300 mb-4">Official SDK for JavaScript and Node.js applications</p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm" /></a>
                  View on GitHub <ExternalLink className="w-4 h-4 inline ml-1" / /></ExternalLink>
                </a>
              </div>
              <div className="cyber-card-enhanced p-6 text-center" /></div>
                <Cpu className="w-12 h-12 text-green-400 mx-auto mb-4" / /></Cpu>
                <h3 className="text-lg font-semibold text-white mb-2">Python</h3>
                <p className="text-gray-300 mb-4">Python SDK with full type hints and async support</p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm" /></a>
                  View on PyPI <ExternalLink className="w-4 h-4 inline ml-1" / /></ExternalLink>
                </a>
              </div>
              <div className="cyber-card-enhanced p-6 text-center" /></div>
                <Database className="w-12 h-12 text-purple-400 mx-auto mb-4" / /></Database>
                <h3 className="text-lg font-semibold text-white mb-2">PHP</h3>
                <p className="text-gray-300 mb-4">PHP SDK with Composer support</p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm" /></a>
                  View on Packagist <ExternalLink className="w-4 h-4 inline ml-1" / /></ExternalLink>
          <section className="mb-16">
            </section></section><h2 className="text-3xl font-bold text-white mb-8 text-center">SDKs & Libraries</h2></h2></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              </div></div><div className="cyber-card-enhanced p-6 text-center">
                </div></div><Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">JavaScript/Node.js</h3></h3></h3>
                <p className="text-gray-300 mb-4">Official SDK for JavaScript and Node.js applications</p></p></p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  View on GitHub <ExternalLink className="w-4 h-4 inline ml-1" />
                </a>
              </div>
              <div className="cyber-card-enhanced p-6 text-center">
                </div></div><Cpu className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Python</h3></h3></h3>
                <p className="text-gray-300 mb-4">Python SDK with full type hints and async support</p></p></p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  View on PyPI <ExternalLink className="w-4 h-4 inline ml-1" />
                </a>
              </div>
              <div className="cyber-card-enhanced p-6 text-center">
                </div></div><Database className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">PHP</h3></h3></h3>
                <p className="text-gray-300 mb-4">PHP SDK with Composer support</p></p></p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">
                  View on Packagist <ExternalLink className="w-4 h-4 inline ml-1" />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </a>
              </div>
            </div>
          </section>

          {/* Support */}
          <section className="mb-16" /></section>
            <div className="cyber-card-enhanced p-8 text-center" /></div>
              <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
              <p className="text-gray-300 mb-6" /></p>
                Our developer support team is here to help you integrate our APIs successfully.
              </p>
              <div className="flex flex-wrap justify-center gap-4" /></div>
                <a href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300" /></a>
                  Contact Support
                </a>
                <a href="/docs"
                  className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300" /></a>
                  View Documentation
                </a>
                <a href="/community"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300" /></a>
                  Join Community
          <section className="mb-16">
            </section></section><div className="cyber-card-enhanced p-8 text-center">
              </div></div><h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2></h2></h2>
              <p className="text-gray-300 mb-6">
                Our developer support team is here to help you integrate our APIs successfully.
              </p></p></p>
              <div className="flex flex-wrap justify-center gap-4">
                </div></div><a;
                  href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Contact Support;
                </a>
                <a;
                  href="/docs" className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Documentation;
                </a>
                <a;
                  href="/community" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  Join Community;
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ApiPage;
