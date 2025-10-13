<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client';
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced Page solutions by Zion Tech Group" />
      </Helmet>
      
<<<<<<< HEAD
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Api Docs - Zion Tech Group</title>
        <meta name="description" content="Advanced api docs solutions by Zion Tech Group" />
      </Helmet>

>>>>>>> cursor/fix-errors-and-merge-to-main-6053
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page
          </h1>
          <p className="text-xl text-gray-600 mb-8">
<<<<<<< HEAD
            This page is under development. Please check back later.
=======
            Advanced AI and IT solutions for your business needs.
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
          </p>
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            Api Docs
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Professional api docs services by Zion Tech Group.
          </p>
          
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              We are working on bringing you the most advanced api docs solutions. 
              Stay tuned for updates!
            </p>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
'use client';';
import React, {useState}from 'react';';';
import {Search, Code, Key, Zap, ArrowRight, Copy, Check, Globe, Brain, Cloud, Shield, Settings, Users, Database, Eye, Sparkles, BookOpen, FileText, Download}}from 'lucide-react';';';
import Navigation from '../components/Navigation';';';
import Footer from '../components/Footer';';';
import SEOOptimizer from '../components/SEOOptimizer';';';
export default function APIDocsPage() {const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState(');'';
const copyToClipboard = (code: string, id: string) => {,
    navigator.clipboard.writeText(code)
    setCopiedCode(id),
    setTimeout(() => setCopiedCode(null), 2000)}const apiEndpoints = [
  // TODO: Add items
]
  // TODO: Add items
]
    {title: 'AI Services','
      description: 'Artificial Intelligence and Machine Learning APIs','
      icon: Brain,
      endpoints: [,
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          name: 'Text Analysis','
          method: 'POST','
          path: '/api/ai/text-analysis','
          description: 'Analyze text sentiment, entities, and key phrases','
          code: `curl -X POST "https://api.ziontechgroup.com/ai/text-analysis" \\,"
  -H "Authorization: Bearer YOUR_API_KEY" \\,"
  -H "Content-Type: application/json" \\,"
  -d '{'
    "text": "Your text to analyze","
    "features": ["sentiment", "entities", "key_phrases"]}'`'"
  }'`'
>>>>>>> origin/main
        },
        {name: 'Image Recognition','
          method: 'POST','
          path: '/api/ai/image-recognition','
          description: 'Identify objects, faces, and scenes in images','
          code: `curl -X POST "https://api.ziontechgroup.com/ai/image-recognition" \\,"
  -H "Authorization: Bearer YOUR_API_KEY" \\,"
  -H "Content-Type: application/json" \\,"
  -d '{'
    "image_url": "https://example.com/image.jpg","
    "features": ["objects", "faces", "text"]}'`'"
        }
  ]
    },
    {title: 'Cloud Services','
      description: 'Cloud infrastructure and deployment APIs','
      icon: Cloud,
      endpoints: [,
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          name: 'Deploy Application','
          method: 'POST','
          path: '/api/cloud/deploy','
          description: 'Deploy applications to cloud infrastructure','
          code: `curl -X POST "https://api.ziontechgroup.com/cloud/deploy" \\,"
  -H "Authorization: Bearer YOUR_API_KEY" \\,"
  -H "Content-Type: application/json" \\,"
  -d '{'
    "app_name": "my-app","
    "environment": "production","
    "config": {"
      "cpu": "2","
      "memory": "4GB","
      "instances": 3;}}'`'"
        }
      ],
    },
    {title: 'Data Analytics','
      description: 'Data processing and analytics APIs','
      icon: Database,
      endpoints: [,
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          name: 'Process Data','
          method: 'POST','
          path: '/api/analytics/process','
          description: 'Process and analyze large datasets','
          code: `curl -X POST "https://api.ziontechgroup.com/analytics/process" \\,"
  -H "Authorization: Bearer YOUR_API_KEY" \\,"
  -H "Content-Type: application/json" \\,"
  -d '{'
    "dataset_id": "dataset_123","
    "operations": ["aggregate", "filter", "transform"],"
    "output_format": "json"}'`'"
        }
  ]
  ];];
  const filteredEndpoints = apiEndpoints.map(category => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
    ...category,
    endpoints: category.endpoints.filter(endpoint => ,)
      endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.path.toLowerCase().includes(searchQuery.toLowerCase())
    )})).filter(category => category.endpoints.length > 0);
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>"
<SEOOptimizer;
        title="API Documentation - Zion Tech Group""
        description="Complete API documentation for Zion Tech Group's AI and IT solutions. Explore endpoints, authentication, and integration guides."'"
        keywords="API documentation, REST API, AI API, cloud API, integration, developer tools, API reference""
      />
<Navigation /></div>
          ))
        </div></section>

      {/* Quick Start */}
      <section className="py-16 px-4"></section>"
            Explore endpoints, authentication, and integration guides.
          </p>
<button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">,</button>"
<Code className="mr-2 h-5 w-5" />"
              Get Started;
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>"
<Download className="mr-2 h-5 w-5" />"
              Download SDK,

          </div></div>
</section>
      {/* Quick Start */} <section className="py-16 px-4">"
<div className="max-w-7xl mx-auto">"
<h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Start</h2>"
<div className="grid grid-cols-1 lg: grid-cols-3 gap-8">,</div>"
<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">"
<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">"
<Key className="w-6 h-6 text-white" /></div>"
<h3 className="text-xl font-semibold text-white mb-3">1. Get API Key</h3>"
<p className="text-gray-300 mb-4">Sign up and get your API key from the dashboard</p>"
<button className="text-purple-400 hover: text-purple-300 font-medium">,</button>"
                Get API Key →
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div>"
<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4"></div>"
<Code className="w-6 h-6 text-white" /></div>"
<h3 className="text-xl font-semibold text-white mb-3">2. Make Request</h3>"
<p className="text-gray-300 mb-4">Use our REST API with your preferred language</p>"
<button className="text-purple-400 hover: text-purple-300 font-medium">,</button>"
                View Examples →
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div>"
<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4"></div>"
<Zap className="w-6 h-6 text-white" /></div>"
<h3 className="text-xl font-semibold text-white mb-3">3. Integrate</h3>"
<p className="text-gray-300 mb-4">Build amazing applications with our APIs</p>"
<button className="text-purple-400 hover: text-purple-300 font-medium">,</button>"
                Start Building →

      {/* API Endpoints */}
      <section className="py-16 px-4"></section>"
<div className="max-w-7xl mx-auto">"
<h2 className="text-3xl font-bold text-white mb-12 text-center">API Endpoints</h2>"
<div className="space-y-8">{filteredEndpoints.map((category, categoryIndex) => (</div>"
<div key={categoryIndex}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">"
<div className="flex items-center gap-4 mb-8">"
<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">"
<category.icon className="w-6 h-6 text-white" /></div>"
<div>
<h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>"
<p className="text-gray-300">{category.description</p>}</p></div>"
</div>
<div className="space-y-6">{category.endpoints.map((endpoint, endpointIndex) => (</div>"
<div key={endpointIndex}className="bg-white/5 rounded-xl p-6 border border-white/10">"
<div className="flex items-center justify-between mb-4">"
<div className="flex items-center gap-4">"
<span className={`px-3 py-1 rounded-full text-sm font-medium ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                            endpoint.method === 'POST' '
                              ? 'bg-green-500/20 text-green-400' '
                              : 'bg-blue-500/20 text-blue-400'}`}>{endpoint.method</span>} </span>'
<code className="text-purple-400 font-mono">{endpoint.path}</code></div>"
<button;
                          onClick={() =>copyToClipboard(endpoint.code, `${categoryIndex)</button>}-${endpointIndex}`)}
                          className="flex items-center gap-2 text-gray-400 hover: text-white transition-colors">,"
                          {copiedCode === `${categoryIndex}-${endpointIndex}` ? (
  // TODO: Add parameters
)
                            </button>
<React.Fragment />
<Check className="w-4 h-4" />"
                              Copied!

                          ) : (
  // TODO: Add parameters
)
                          </div>
                          )}
>>>>>>> origin/main
                        </button></div>
<p className="text-gray-300 mb-4">{endpoint.description</p>}</p>"
<div className="bg-slate-900 rounded-lg p-4 overflow-x-auto"></div>"
<pre className="text-gray-300 text-sm"></pre>"
<code>{endpoint.code}</code></pre>
</div></div>
                          )}
                      <p className="text-gray-300 mb-4">{endpoint.description}"
                      <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">"
<pre className="text-gray-300 text-sm">"
<code>{endpoint.code}
                  ))}
            ))}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700"></section>"
<div className="max-w-4xl mx-auto text-center">"
<h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>"
            Ready to Get Started?
          </h2>
<p className="text-xl text-purple-100 mb-8">Start building with our APIs today and create amazing applications.</p></p>"
<div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>"
<button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-colors">,</button>"
              Get API Key;
  </
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover: bg-white hover:text-purple-600 transition-colors">,</button>"
              View SDKs;
  </
          </div></div>
</section>
<Footer/ />
</div>
  ),
}
  </button></button>
</button></button>
</h1></SEOOptimizer>
</string>
<p className="text-xl text-purple-100 mb-8">"
            Start building with our APIs today and create amazing applications.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
<button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">Get API Key"
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors">View SDKs"
      <Footer />
  )
}</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</button></button>
</button></button>
</button></button>
</p></p>
</p></p>
</p></p>
</p></p>
</h1></h2>
</h2></h2>
</h3></h3>
</h3></h3>
</section></section>
</section></section>
>>>>>>> cursor/delete-records-a75e
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
