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
    ...category,
    endpoints: category.endpoints.filter(endpoint => ,)
      endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.path.toLowerCase().includes(searchQuery.toLowerCase())
    )})).filter(category => category.endpoints.length > 0);
<<<<<<< HEAD
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>)</div>
=======
  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
      <SEOOptimizer;
  ]
  const filteredEndpoints = apiEndpoints.map()
      endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.path.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.endpoints.length > 0)
  return (
    </string><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
      </div><SEOOptimizer 
        title="API Documentation - Zion Tech Group"
        description="Complete API documentation for Zion Tech Group's AI and IT solutions. Explore endpoints, authentication, and integration guides."
        keywords="API documentation, REST API, AI API, cloud API, integration, developer tools, API reference"
      />
      <Navigation />
<<<<<<< HEAD
            </div>
          ))
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 px-4"></section></section>
        </section>
      {/* Hero Section */}
<section className="py-20 px-4"></section></section>
        <div className="max-w-7xl mx-auto text-center"></div></div>
          <h1 className="text-5xl font-bold text-white mb-6"></h1></h1>API Documentation;</h1>
  </
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
            Explore endpoints, authentication, and integration guides.
          </p>
              Download SDK,
  
          </div>
        </div>
      </section>
        <div className="max-w-7xl mx-auto"></div></div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center"></h2></h2>Quick Start</h2>
          <div className="grid grid-cols-1 lg: grid-cols-3 gap-8"></div></div>,</div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div></div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4"></div></div>
                <Key className="w-6 h-6 text-white" />
      {/* Quick Start */}
      <section className="py-16 px-4"></section></section>
        </section>< className="$2 />
          </div><h2 className="text-3xl font-bold text-white mb-8 text-center"></h2></h2>Quick Start</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"></div></div>
            </div><div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div></div>
              </div><div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4"></div></div>
                </div><Key className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3"></h3></h3>1. Get API Key</h3>
              <p className="text-gray-300 mb-4"></p></p>Sign up and get your API key from the dashboard</p>
              <button className="text-purple-400 hover: text-purple-300 font-medium"></button>,</button>
                Get API Key →
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div></div>
              </div><div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4"></div></div>
                </div><Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3"></h3></h3>2. Make Request</h3>
              <p className="text-gray-300 mb-4"></p></p>Use our REST API with your preferred language</p>
              <button className="text-purple-400 hover: text-purple-300 font-medium"></button>,</button>
                View Examples →
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div></div>
              </div><div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4"></div></div>
                </div><Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3"></h3></h3>3. Integrate</h3>
              <p className="text-gray-300 mb-4"></p></p>Build amazing applications with our APIs</p>
              <button className="text-purple-400 hover: text-purple-300 font-medium"></button>,</button>
                Start Building →
        <div className="max-w-7xl mx-auto"></div></div>
          <h2 className="text-3xl font-bold text-white mb-12 text-center"></h2></h2>API Endpoints</h2>
          <div className="space-y-8"></div></div>{filteredEndpoints.map((category, categoryIndex) => (</div>
              <div key={categoryIndex}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"></div></div>
                <div className="flex items-center gap-4 mb-8"></div></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center"></div></div>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2"></h3></h3>{category.title}</h3>
                    <p className="text-gray-300"></p></p>{category.description</p&gt;}</p>
                  </div>
                </div>
                <div className="space-y-6"></div></div>{category.endpoints.map((endpoint, endpointIndex) => (</div>
                    <div key={endpointIndex}className="bg-white/5 rounded-xl p-6 border border-white/10"></div></div>
                      <div className="flex items-center justify-between mb-4"></div></div>
                        <div className="flex items-center gap-4"></div></div>
                          <span className="{`px-3" py-1 rounded-full text-sm font-medium ${
                            endpoint.method === 'POST' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-blue-500/20 text-blue-400'}`}></span></span>{endpoint.method</span&gt;} </span>
                          <code className="text-purple-400 font-mono"></code>{endpoint.path}</code>
                        </div>
                        <button;
                          onClick={() =>copyToClipboard(endpoint.code, `${categoryIndex)</button>}-${endpointIndex}`)}
                          className="flex items-center gap-2 text-gray-400 hover: text-white transition-colors">,
      {/* API Endpoints */}
      <section className="py-16 px-4"></section></section>
        </section>< className="$2 />
          </div><h2 className="text-3xl font-bold text-white mb-12 text-center"></h2></h2>API Endpoints</h2>
          <div className="space-y-8"></div></div>
            {filteredEndpoints.map((category, categoryIndex) => (
              </div><div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"></div></div>
                </div><div className="flex items-center gap-4 mb-8"></div></div>
                  </div><div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center"></div></div>
                    </div><category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    </div><h3 className="text-2xl font-bold text-white mb-2"></h3></h3>{category.title}</h3>
                    <p className="text-gray-300"></p></p>{category.description}</p>
                  </div>
                </div>
                <div className="space-y-6"></div></div>
                  {category.endpoints.map((endpoint, endpointIndex) => (
                    </div><div key={endpointIndex} className="bg-white/5 rounded-xl p-6 border border-white/10"></div></div>
                      </div><div className="flex items-center justify-between mb-4"></div></div>
                        </div><div className="flex items-center gap-4"></div></div>
                          </div>< className="{`px-3" py-1 rounded-full text-sm font-medium ${$2 />
                            endpoint.method === 'POST' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            {endpoint.method}
                          {copiedCode === `${categoryIndex}-${endpointIndex}` ? (
                            </button><>
                              </React><Check className="w-4 h-4" />
                              Copied!
                          ) : (
                            <>
                              </React><Copy className="w-4 h-4" />
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-gray-300 mb-4"></p></p>{endpoint.description</p&gt;}</p>
                      <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto"></div></div>
                        </div><pre className="text-gray-300 text-sm"></p></pre>
                          </pre><code>{endpoint.code}</code>
                        </pre>
                      </div>
                    </div>
                          )}
                      <p className="text-gray-300 mb-4"></p></p>{endpoint.description}
                      <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto"></div></div>
                        <pre className="text-gray-300 text-sm"></p></pre>
                          <code>{endpoint.code}
                  ))}
            ))}
        <div className="max-w-4xl mx-auto text-center"></div></div>
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-6"></h2></h2>,</h2>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8"></p></p>Start building with our APIs today and create amazing applications.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div></div>,</div>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-colors"></button>,</button>
              Get API Key;
  </
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover: bg-white hover:text-purple-600 transition-colors"></button>,</button>
              View SDKs;
  </
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700"></section></section>
        </section>< className="$2 />
          </div><h2 className="text-4xl md: text-5xl font-bold text-white mb-6"></h2></h2>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8" /></p>
            Start building with our APIs today and create amazing applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
            </div><button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"></button>
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
          <p className="text-xl text-purple-100 mb-8"></p></p>
            Start building with our APIs today and create amazing applications.
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"></button>Get API Key
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors"></button>View SDKs
      <Footer />
  )
}</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></button></button></button></button></button></button></p></p></p></p></p></p></p></p></h1></h2></h2></h2></h3></h3></h3></h3></section></section></section></section>
