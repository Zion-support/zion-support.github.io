'use client';
import React, {useState}from 'react';
import {Search, Code, Key, Zap, ArrowRight, Copy, Check, Globe, Brain, Cloud, Shield, Settings, Users, Database, Eye, Sparkles, BookOpen, FileText, Download}}from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
export default function APIDocsPage() {const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const copyToClipboard = (code: string, id: string) => {,
    navigator.clipboard.writeText(code)
    setCopiedCode(id),
    setTimeout(() => setCopiedCode(null), 2000)}const apiEndpoints = [
    {title: 'AI Services',
      description: 'Artificial Intelligence and Machine Learning APIs',
      icon: Brain,
      endpoints: [,
        {
          name: 'Text Analysis',
          method: 'POST',
          path: '/api/ai/text-analysis',
          description: 'Analyze text sentiment, entities, and key phrases',
          code: `curl -X POST "https://api.ziontechgroup.com/ai/text-analysis" \\,
  -H "Authorization: Bearer YOUR_API_KEY" \\,
  -H "Content-Type: application/json" \\,
  -d '{
    "text": "Your text to analyze",
    "features": ["sentiment", "entities", "key_phrases"]}'`
  }'`
        },
        {name: 'Image Recognition',
          method: 'POST',
          path: '/api/ai/image-recognition',
          description: 'Identify objects, faces, and scenes in images',
          code: `curl -X POST "https://api.ziontechgroup.com/ai/image-recognition" \\,
  -H "Authorization: Bearer YOUR_API_KEY" \\,
  -H "Content-Type: application/json" \\,
  -d '{
    "image_url": "https://example.com/image.jpg",
    "features": ["objects", "faces", "text"]}'`
        }
  ]
    },
    {title: 'Cloud Services',
      description: 'Cloud infrastructure and deployment APIs',
      icon: Cloud,
      endpoints: [,
        {
          name: 'Deploy Application',
          method: 'POST',
          path: '/api/cloud/deploy',
          description: 'Deploy applications to cloud infrastructure',
          code: `curl -X POST "https://api.ziontechgroup.com/cloud/deploy" \\,
  -H "Authorization: Bearer YOUR_API_KEY" \\,
  -H "Content-Type: application/json" \\,
  -d '{
    "app_name": "my-app",
    "environment": "production",
    "config": {
      "cpu": "2",
      "memory": "4GB",
      "instances": 3;}}'`
        }
      ],
    },
    {title: 'Data Analytics',
      description: 'Data processing and analytics APIs',
      icon: Database,
      endpoints: [,
        {
          name: 'Process Data',
          method: 'POST',
          path: '/api/analytics/process',
          description: 'Process and analyze large datasets',
          code: `curl -X POST "https://api.ziontechgroup.com/analytics/process" \\,
  -H "Authorization: Bearer YOUR_API_KEY" \\,
  -H "Content-Type: application/json" \\,
  -d '{
    "dataset_id": "dataset_123",
    "operations": ["aggregate", "filter", "transform"],
    "output_format": "json"}'`
        }
  ]
  const filteredEndpoints = apiEndpoints.map(category => ({)
  ];];
  const filteredEndpoints = apiEndpoints.map(category => ({
    ...category,
    endpoints: category.endpoints.filter(endpoint => ,)
      endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.path.toLowerCase().includes(searchQuery.toLowerCase())
    )})).filter(category => category.endpoints.length > 0);
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <SEOOptimizer;
  ]
  const filteredEndpoints = apiEndpoints.map()
      endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.path.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.endpoints.length > 0)
  return (
    </string><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      </div><SEOOptimizer 
        title="API Documentation - Zion Tech Group"
        description="Complete API documentation for Zion Tech Group's AI and IT solutions. Explore endpoints, authentication, and integration guides."
        keywords="API documentation, REST API, AI API, cloud API, integration, developer tools, API reference"
      />
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
            Integrate with our powerful AI and IT solutions through our comprehensive REST API. 
            Build amazing applications with our developer-friendly endpoints.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search API endpoints..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
      
            </div>
          ))
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 px-4">
        </section>
      {/* Hero Section */}
<section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">API Documentation;</h1>
  </
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Complete API documentation for Zion Tech Group's AI and IT solutions.</p>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Complete API documentation for Zion Tech Group's AI and IT solutions. 
            Explore endpoints, authentication, and integration guides.
          </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">,</button>
              <Code className="mr-2 h-5 w-5" />
              Get Started;
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
              <Download className="mr-2 h-5 w-5" />
              Download SDK,
  
          </div>
        </div>
      </section>
      {/* Quick Start */} <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Start</h2>
          <div className="grid grid-cols-1 lg: grid-cols-3 gap-8">,</div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Key className="w-6 h-6 text-white" />
      {/* Quick Start */}
      <section className="py-16 px-4">
        </section>< className="$2 />
          </div><h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Start</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            </div><div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              </div><div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                </div><Key className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Get API Key</h3>
              <p className="text-gray-300 mb-4">Sign up and get your API key from the dashboard</p>
              <button className="text-purple-400 hover: text-purple-300 font-medium">,</button>
                Get API Key →
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              </div><div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                </div><Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Make Request</h3>
              <p className="text-gray-300 mb-4">Use our REST API with your preferred language</p>
              <button className="text-purple-400 hover: text-purple-300 font-medium">,</button>
                View Examples →
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              </div><div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                </div><Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">3. Integrate</h3>
              <p className="text-gray-300 mb-4">Build amazing applications with our APIs</p>
              <button className="text-purple-400 hover: text-purple-300 font-medium">,</button>
                Start Building →
              </button>
            </div>
          ))
        </div>
      </section>

      {/* API Endpoints */}
      <section$1>
        <div$2>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">API Endpoints</h2>
          <div className="space-y-8">{filteredEndpoints.map((category, categoryIndex) => (</div>
              <div key={categoryIndex}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300">{category.description</p>}</p>
                  </div>
                </div>
                <div className="space-y-6">{category.endpoints.map((endpoint, endpointIndex) => (</div>
                    <div key={endpointIndex}className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            endpoint.method === 'POST' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-blue-500/20 text-blue-400'}`}>{endpoint.method</span>} </span>
                          <code className="text-purple-400 font-mono">{endpoint.path}</code>
                        </div>
                        <button;
                          onClick={() =>copyToClipboard(endpoint.code, `${categoryIndex)</button>}-${endpointIndex}`)}
                          className="flex items-center gap-2 text-gray-400 hover: text-white transition-colors">,
      {/* API Endpoints */}
      <section className="py-16 px-4">
        </section>< className="$2 />
          </div><h2 className="text-3xl font-bold text-white mb-12 text-center">API Endpoints</h2>
          <div className="space-y-8">
            {filteredEndpoints.map((category, categoryIndex) => (
              </div><div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                </div><div className="flex items-center gap-4 mb-8">
                  </div><div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    </div><category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    </div><h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  {category.endpoints.map((endpoint, endpointIndex) => (
                    </div><div key={endpointIndex} className="bg-white/5 rounded-xl p-6 border border-white/10">
                      </div><div className="flex items-center justify-between mb-4">
                        </div><div className="flex items-center gap-4">
                          </div>< className={`px-3 py-1 rounded-full text-sm font-medium ${$2 />
                            endpoint.method === 'POST' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-purple-400 font-mono">{endpoint.path}</code>
                        </div>
                        <button
                          onClick={() => copyToClipboard(endpoint.code, `${categoryIndex}-${endpointIndex}`</div>
                          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                          {copiedCode === `${categoryIndex}-${endpointIndex}` ? (
                            </button><React.Fragment>
                              </React><Check className="w-4 h-4" />
                              Copied!

                          ) : (
                            <>
  </>
                              <Copy className="w-4 h-4" />
                              Copy;
                            </React.Fragment>

                          </div>
                            <React.Fragment>
                              </React><Copy className="w-4 h-4" />
                              Copy
                            </React.Fragment>
                          )}
                        </button>
                      </div>
                      <p className="text-gray-300 mb-4">{endpoint.description</p>}</p>
                      <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                        </div><pre className="text-gray-300 text-sm">
                          </pre><code>{endpoint.code}</code>
                        </pre>
                      </div>
                    </div>
                          )}
                      <p className="text-gray-300 mb-4">{endpoint.description}
                      <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-gray-300 text-sm">
                          <code>{endpoint.code}
                  ))}
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section$1>
        <div$2>
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">Start building with our APIs today and create amazing applications.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-colors">,</button>
              Get API Key;
  </
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover: bg-white hover:text-purple-600 transition-colors">,</button>
              View SDKs;
  </
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700">
        </section>< className="$2 />
          </div><h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8" /></p>
            Start building with our APIs today and create amazing applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div><button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Get API Key
  
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors" /></button>
              View SDKs
  
          </div>
        </div>
      </section>
      <Footer /></Footer>
    </div>
  ),
}
  </button>
  </button>
  </button>
  </button>
  </h1>
  </SEOOptimizer>
  </string>
          <p className="text-xl text-purple-100 mb-8">
            Start building with our APIs today and create amazing applications.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">Get API Key
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors">View SDKs
      <Footer />
  )
}</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></button></button></button></button></button></button></p></p></p></p></p></p></p></p></h1></h2></h2></h2></h3></h3></h3></h3></section></section></section></section>
