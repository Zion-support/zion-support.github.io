'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Code, Key, Zap, ArrowRight, Copy, Check } from 'lucide-react';

const APIDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);</string></<<<strin>const</strin></<<strin>copyToClipboard</strin> = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const apiEndpoints = [
    {
      title: 'AI Services',
      description: 'Core AI functionality and machine learning services',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/ai/predict',
          description: 'Make predictions using trained AI models',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/ai/predict" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_id": "sentiment-analysis-v1",
    "input_data": {
      "text": "I love this product!"
    }
  }'`
        },
        {
          method: 'POST',
          path: '/api/v1/ai/train',
          description: 'Train a new AI model with your data',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/ai/train" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_name": "custom-classifier",
    "training_data": [...],
    "model_type": "classification"
  }'`
        }
      ]
    },
    {
      title: 'Micro SAAS',
      description: 'Micro SAAS tools and utilities',
      endpoints: [
        {
          method: 'GET',
          path: '/api/v1/micro-saas/tools',
          description: 'Get list of available micro SAAS tools',
          example: `curl -X GET "https://api.ziontechgroup.com/v1/micro-saas/tools" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        },
        {
          method: 'POST',
          path: '/api/v1/micro-saas/execute',
          description: 'Execute a micro SAAS tool',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/micro-saas/execute" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "tool_id": "content-generator",
    "parameters": {
      "topic": "AI Technology",
      "length": "500"
    }
  }'`
        }
      ]
    }
  ];
</<<<string>return</string></string> (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg particle-system"></div>
      <Navigation /></Navigatio>

      <main className="relative z-10 pt-20">{/* Hero Section */}</mai>
        <section className="py-20 px-4 text-center"></sectio>
          <div className="max-w-6 xl mx-auto"></div>
            <h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6 neon-text cyber-text-enhanced floating"></h1></<<<h1>API</h1></<<h1>Documentation</h1><p className="text-xl md:text-2 xl text-cyan-400 mb-8 font-medium cyber-glow"></p></<<<p>Complete</p></<<p>API</p> Reference<p className="text-base sm:text-lg text-gray-300 max-w-4 xl mx-auto mb-12 leading-relaxed">Comprehensive API documentation for all our services. Get started with our APIs</p></<<<p>and</p></<<p>integrate</p> our AI and micro SAAS solutions into your applications.</p>
            </p>

            {/* Search Bar */}
            <div className="max-w-2 xl mx-auto mb-12"></div>
              <div className="relative"></div>
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /></Searc>
                <input
                  type="text"
                  placeholder="Search API endpoints..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm"
                /></inpu>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16 px-4"></sectio>
          <div className="max-w-7 xl mx-auto"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-12 text-center neon-text"></h2></<<<h2>API</h2></<<h2>Endpoints</h2><div className="space-y-12">{apiEndpoints.map((category, categoryIndex) => (</div>
                <div key={categoryIndex} className="cyber-card-enhanced p-8"></div>
                  <div className="mb-8"></div>
                    <h3 className="text-2 xl font-bold text-white mb-2"></h>{category.title}<p className="text-gray-300"></p>{category.description}<div className="space-y-6">{category.endpoints.map((endpoint, endpointIndex) => (</div>
                      <div key={endpointIndex} className="cyber-card hologram-card p-6"></div>
                        <div className="flex items-center justify-between mb-4"></div>
                          <div className="flex items-center space-x-4"></div>
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              endpoint.method === 'GET' ? 'bg-green-400 text-slate-900' :
                              endpoint.method === 'POST' ? 'bg-blue-400 text-slate-900' :
                              endpoint.method === 'PUT' ? 'bg-yellow-400 text-slate-900' :
                              'bg-red-400 text-slate-900'
                            }`}></spa>{endpoint.method}<code className="text-cyan-400 font-mono text-lg">{endpoint.path}</code><p className="text-gray-300 mb-4">{endpoint.description}</p>

                        <div className="bg-slate-900/50 rounded-lg p-4"></div>
                          <div className="flex items-center justify-between mb-2"></div>
                            <span className="text-sm text-gray-400"></span></<<<span>Example</span></<<span>Request</span><button
                              onClick={() =>copyToClipboard(endpoint.example, `${categoryIndex}-${endpointIndex}`)}</button></<<<butto>className</butto></butto>="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                            ></button>
                              {copiedCode === `${categoryIndex}-${endpointIndex}` ? (</button>
                                <>{}</>{}{}
                                  <Check className="w-4 h-4" /></Chec>
                                  <span className="text-sm">Copied!</spa>
                                
                              ) : (
                                <>{}</>{}{}
                                  <Copy className="w-4 h-4" /></Cop>
                                  <span className="text-sm">Copy</spa>
                                
                              )}
                            </button>
                          </div>
                          <pre className="text-sm text-gray-300 overflow-x-auto"></pre>
                            <code>{endpoint.example}</cod>
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="py-16 px-4 bg-slate-800/30"></sectio>
          <div className="max-w-6 xl mx-auto"></div>
            <h2 className="text-3 xl font-bold text-white mb-8 text-center neon-text">Authentication</h>
            </h2>
            <div className="cyber-card-enhanced p-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
                <div></div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center"></h>
                    <Key className="w-6 h-6 text-cyan-400 mr-2" >API Key Authentication</Key><p className="text-gray-300 mb-4">All API requests require authentication using an API key. Include your API key</p></<<<p>in</p></<<p>the</p> Authorization header of each request.</p>
                  </p>
                  <div className="bg-slate-900/50 rounded-lg p-4"></div>
                    <pre className="text-sm text-gray-300"></pre>
                      <<<<code>Authorization</code></code>: Bearer YOUR_API_KEY</code>
                    </pre>
                  </div>
                </div>
                <div></div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center"></h>
                    <Zap className="w-6 h-6 text-cyan-400 mr-2" >Rate Limiting</Zap><p className="text-gray-300 mb-4">API requests are rate limited to ensure fair usage. Standard rate limits are:</p>
                  </p>
                  <ul className="text-gray-300 space-y-2"></u>
                    <li>• 1000 requests per hour for free tier</li><li>• 10,000 requests per hour for paid plans</li><li>• 100,000 requests per hour for enterprise</l>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SDKs */}
        <section className="py-16 px-4"></sectio>
          <div className="max-w-6 xl mx-auto"></div>
            <h2 className="text-3 xl font-bold text-white mb-8 text-center neon-text">Software Development Kits</h>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              <div className="cyber-card hologram-card p-6 text-center"></div>
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" /></Cod>
                <h3 className="text-xl font-bold text-white mb-2"></h3></<<<h3>JavaScript</h3></<<h3>SDK</h3><p className="text-gray-300 mb-4"></p></<<<p>Official</p></<<p>JavaScript</p>/Node.js SDK<a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">View Documentation →</a>
                </a>
              </div>
              <div className="cyber-card hologram-card p-6 text-center"></div>
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" /></Cod>
                <h3 className="text-xl font-bold text-white mb-2"></h3></<<<h3>Python</h3></<<h3>SDK</h3><p className="text-gray-300 mb-4"></p></<<<p>Official</p></<<p>Python</p> SDK<a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">View Documentation →</a>
                </a>
              </div>
              <div className="cyber-card hologram-card p-6 text-center"></div>
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" /></Cod>
                <h3 className="text-xl font-bold text-white mb-2"></h3></<<<h3>REST</h3></<<h3>API</h3><p className="text-gray-300 mb-4"></p></<<<p>Direct</p></<<p>REST</p> API access<a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">View Documentation →</a>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30"></sectio>
          <div className="max-w-4 xl mx-auto text-center"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>Ready</h2></<<h2>to</h2> Get Started?<p className="text-lg text-gray-300 mb-8">Get your API key and start building with our powerful AI and micro SAAS services.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link
                to="/contact"
                className="cyber-button px-8 py-4"
              >Get API Key</Lin>
                <ArrowRight className="w-4 h-4 ml-2" /></ArrowRigh>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >Call: (302) 464-0950</a>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer /></Foote>
    </div>
  );
};

export default ApiDocsPage;
