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
        {
          method: 'POST',
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
        {
          method: 'POST',
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
    {
      category: 'IT Services',
      endpoints: [
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
              last_check: "2024-01-15T10:30:00Z"
            }
          }
        },
        {
          method: 'POST',
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
        {
          method: 'POST',
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
              ))}
            </div>
          </section>

          {/* Rate Limits */}
                      <th className="text-left text-white py-3 px-4">Tier</th>
                      <th className="text-left text-white py-3 px-4">Monthly Requests</th>
                      <th className="text-left text-white py-3 px-4">Burst Limit</th>
                    </tr>
                  </thead>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* API Endpoints */}
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
                </a>
              </div>
            </div>
          </section>

          {/* Support */}
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
