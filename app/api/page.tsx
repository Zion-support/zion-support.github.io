'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Database, Zap, Shield, Globe, Cpu, BarChart, Users, Settings, ArrowRight, CheckCircle, Star, ExternalLink } from 'lucide-react';

const ApiPage: React.FC = () => {
  const apiEndpoints = const apiEndpoints = const apiEndpoints = [
    {
      category: 'AI Services',
      endpoints: [
        {
          method: 'POST',
          path: '/api/ai/chat',
          description: 'AI-powered chat completion',
          parameters: ['message', 'model', 'temperature'],
          example: {
            request: {
              message: "Hello, how can I help you?",
              model: "gpt-4",
              temperature: 0.7
            },
            response: {
              response: "Hello! I'm here to help you with any questions or tasks you might have.",
              confidence: 0.95,
              tokens_used: 25
            }
          }
        },
        {
          method: 'POST',
          path: '/api/ai/analyze',
          description: 'Data analysis and insights',
          parameters: ['data', 'analysis_type', 'options'],
          example: {
            request: {
              data: [1, 2, 3, 4, 5],
              analysis_type: "trend",
              options: { include_forecast: true }
            },
            response: {
              trend: "increasing",
              forecast: [6, 7, 8],
              confidence: 0.88
            }
          }
        },
        {
          method: 'POST',
          path: '/api/ai/generate-content',
          description: 'AI content generation',
          parameters: ['prompt', 'type', 'length', 'style'],
          example: {
            request: {
              prompt: "Write a blog post about AI",
              type: "blog_post",
              length: "medium",
              style: "professional"
            },
            response: {
              content: "Artificial Intelligence is revolutionizing...",
              word_count: 500,
              readability_score: 8.2
            }
          };
        };
      ];
    },
    {
      category: 'IT Services',
      endpoints: [
        {
          method: 'GET',
          path: '/api/infrastructure/status',
          description: 'Infrastructure health check',
          parameters: ['service_id'],
          example: {
            request: { service_id: "web-server-01" },
            response: {
              status: "healthy",
              uptime: "99.9%",
              last_check: "2024-01-15T10:30:00Z"
            }
          }
        },
        {
          method: 'POST',
          path: '/api/security/scan',
          description: 'Security vulnerability scan',
          parameters: ['target', 'scan_type', 'options'],
          example: {
            request: {
              target: "https://example.com",
              scan_type: "comprehensive",
              options: { include_ssl: true }
            },
            response: {
              vulnerabilities: [],
              score: 95,
              recommendations: ["Keep SSL certificates updated"]
            }
          }
        }
  ]
    },
    {
      category: 'Micro SaaS',
      endpoints: [
        {
          method: 'GET',
          path: '/api/analytics/dashboard',
          description: 'Analytics dashboard data',
          parameters: ['date_range', 'metrics'],
          example: {
            request: {
              date_range: "last_30_days",
              metrics: ["visitors", "conversions", "revenue"]
            },
            response: {
              visitors: 15420,
              conversions: 234,
              revenue: 12500,
              growth_rate: 12.5
            }
          }
        },
        {
          method: 'POST',
          path: '/api/email/send',
          description: 'Send transactional emails',
          parameters: ['to', 'template', 'data'],
          example: {
            request: {
              to: "user@example.com",
              template: "welcome",
              data: { name: "John", company: "Acme Corp" }
            },
            response: {
              message_id: "msg_123456",
              status: "sent",
              delivery_time: "2024-01-15T10:30:15Z"
            }
          }
        }
  ]
    }
  ];
  const authenticationMethods = const authenticationMethods = const authenticationMethods = [
    {
      name: 'API Key',
      description: 'Simple API key authentication',
      example: 'Authorization: Bearer sk-1234567890abcdef',
      security: 'High'
    },
    {
      name: 'OAuth 2.0',
      description: 'Industry-standard OAuth 2.0 flow',
      example: 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      security: 'Very High'
    },
    {
      name: 'JWT Token',
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
                      <th className="text-left text-white py-3 px-4">Tier</th>
                      <th className="text-left text-white py-3 px-4">Monthly Requests</th>
                      <th className="text-left text-white py-3 px-4">Burst Limit</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                    {rateLimits.map((limit, index) => ()
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
                                {JSON.stringify(endpoint.example.response, null, 2)}
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
