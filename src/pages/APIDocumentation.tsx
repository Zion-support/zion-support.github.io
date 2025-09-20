import React, { useState  from "react", import { motion } from "framer-moti, on";import { SEO } from "../components/S, EO";import { Code, Search;
  Filter;
  ArrowRight;
  Download;
  ExternalLink;
  Github;
  Globe;
  Database;
  Server;
  Shield;
  Brain;
  Cloud;
  Cpu;
  Zap;
  Users;
  Calendar;
  Star;
  Bookmark;
  Share2;
  Copy;
  CheckCircle;
  Clock;
  Tag;
  Play;
  Terminal;
  FileText;
  Key;
  Lock;
  Eye;
  EyeOff;
  ChevronDown;
  ChevronRight;
  AlertCircle;
  Info
} from "lucide-react";export default function APIDocumentation() {

  const [searchQuer;y;
    setSearchQuery] = useState('')const [selectedCategorysetSelectedCategory] = useState('All')const [selectedMethodsetSelectedMethod] = useState('All')const [expandedEndpointssetExpandedEndpoints] = useState<Set<string>>(new Set())const categories  = ['AllAuthentication', 'AI ServicesData Analytics'; 'Cloud ServicesIoT & Edge'; 'BlockchainQuantum Computing']const methods  = ['AllGET'; 'POSTPUT'; 'DELETEPATCH']const apiEndpoints  = [
    {
      category: 'Authentication, ',endpoints: [
        {
          path: '/auth/login, ',method: 'POST, ',title: 'User Login, ',description: 'Authenticate user with email and password, ',parameters: [
            { name: 'email, ', type: 'string',
    required: true,
    description: 'User email address',  },
            { name: 'password, ', type: 'string, ', required: true,
    description: 'User password',  }
          ],
          responses: [
            { code: 200,
    description: 'Login successful, ', example: '{ "token": "jwt_token, ", "user": {...} }' },
            { code: 401,
    description: 'Invalid credentials, ', example: '{ "error": "Invalid credentials",  }' }
          ],
          examples:  , {,
            curl: 'curl -X POST /auth/login -H "Content-Type: application/json" -d \'{"email":"user@example.com, ","password":"password"}\'',
            python: 'requests.post("/auth/login, ", json={"email": "user@example.com", "password": "password"})',
            javascript: 'fetch("/auth/login, ", { method: "POST, ", body: JSON.stringify({email: "user@example.com, ", password: "password"}) })'
          }
        },
        {
          path: '/auth/register, ',method: 'POST, ',title: 'User Registration, ',description: 'Create a new user account, ',parameters: [
            { name: 'email, ', type: 'string, ', required: true,
    description: 'User email address',  }{ name: 'password, ', type: 'string, ', required: true,
    description: 'Minimum 8 characters',  },
            { name: 'name, ', type: 'string, ', required: true,
    description: 'Full name',  }
          ],
          responses: [
            { code: 201,
    description: 'User created successfully, ', example: '{ "user": {.., .}, "message": "User created" }' },
            { code: 400,
    description: 'Validation error, ', example: '{ "error": "Email already exists",  }' }
          ],
          examples:  , {,
            curl: 'curl -X POST /auth/register -H "Content-Type: application/json" -d \'{"email":"new@example.com, ","password":"password123","name":"John Doe"}\'',
            python: 'requests.post("/auth/register, ", json={"email": "new@example.com", "password": "password123", "name": "John Doe"})',
            javascript: 'fetch("/auth/register, ", { method: "POST, ", body: JSON.stringify({email: "new@example.com, ", password: "password123, ", name: "John Doe"}) })'
          }
        }
      ]
    },
    {
      category: 'AI Services, ',endpoints: [
        {
          path: '/ai/analyze, ',method: 'POST, ',title: 'AI Text Analysis, ',description: 'Analyze text using AI for sentiment,
    entitie, s, and key phrases',
          parameters: [
            { name: 'text, ', type: 'string, ', required: true,
    description: 'Text to analyze',  }{ name: 'analysis_type, ', type: 'string, ', required: false,
    description: 'Type of analysis (sentimen, t, entities, keywords)', default: 'all',  },
            { name: 'language, ', type: 'string, ', required: false,
    description: 'Text language, ', default: 'en',  }
          ],
          responses: [
            { code: 200,
    description: 'Analysis completed, ', example: '{ "sentiment": "positive, ", "entities": [...], "keywords": [...] }' },
            { code: 400,
    description: 'Invalid input, ', example: '{ "error": "Text is required",  }' }
          ],
          examples:  , {,
            curl: 'curl -X POST /ai/analyze -H "Content-Type: application/json" -d \'{"text":"This is amazing!, ","analysis_type":"sentiment"}\'',
            python: 'requests.post("/ai/analyze, ", json={"text": "This is amazing!", "analysis_type": "sentiment"})',
            javascript: 'fetch("/ai/analyze, ", { method: "POST, ", body: JSON.stringify({text: "This is amazing!, ", analysis_type: "sentiment"}) })'
          }
        },
        {
          path: '/ai/generate, ',method: 'POST, ',title: 'AI Content Generation, ',description: 'Generate content using AI models, ',parameters: [
            { name: 'prompt, ', type: 'string, ', required: true,
    description: 'Generation prompt',  }{ name: 'model, ', type: 'string, ', required: false,
    description: 'AI model to use, ', default: 'gpt-4',  },
            { name: 'max_tokens, ', type: 'integer, ', required: false,
    description: 'Maximum tokens to generate, ', default: 1000,  }
          ],
          responses: [
            { code: 200,
    description: 'Content generated, ', example: '{ "content": "Generated text..., ", "usage": {...} }' },
            { code: 400,
    description: 'Invalid prompt, ', example: '{ "error": "Prompt is required",  }' }
          ],
          examples:  , {,
            curl: 'curl -X POST /ai/generate -H "Content-Type: application/json" -d \'{"prompt":"Write a blog post about AI, "}\'',
            python: 'requests.post("/ai/generate, ", json={"prompt": "Write a blog post about AI"})',
            javascript: 'fetch("/ai/generate, ", { method: "POST, ", body: JSON.stringify({prompt: "Write a blog post about AI"}) })'
          }
        }
      ]
    },
    {
      category: 'Data Analytics, ',endpoints: [
        {
          path: '/analytics/query, ',method: 'POST, ',title: 'Data Query, ',description: 'Query analytics data with custom filters and aggregations, ',parameters: [
            { name: 'query, ', type: 'object, ', required: true,
    description: 'Query object with filters and aggregations',  },
            { name: 'time_range, ', type: 'string, ', required: false,
    description: 'Time range for data, ', default: 'last_30_days',  }
          ],
          responses: [
            { code: 200,
    description: 'Query results, ', example: '{ "data": [..., ], "metadata": {...} }' },
            { code: 400,
    description: 'Invalid query, ', example: '{ "error": "Invalid query format",  }' }
          ],
          examples:  , {,
            curl: 'curl -X POST /analytics/query -H "Content-Type: application/json" -d \'{"query":{"filters":{"event_type":"page_view, "},"aggregations":{"count":"total"}}}\'',
            python: 'requests.post("/analytics/query, ", json={"query": {"filters": {"event_type": "page_view"}, "aggregations": {"count": "total"}}})',
            javascript: 'fetch("/analytics/query, ", { method: "POST, ", body: JSON.stringify({query: {filters: {event_type: "page_view, "}, aggregations: {count: "total"}}}) })'
          }
        }
      ]
    },
    {
      category: 'Cloud Services, ',endpoints: [
        {
          path: '/cloud/deploy, ',method: 'POST, ',title: 'Deploy Application, ',description: 'Deploy application to cloud infrastructure, ',parameters: [
            { name: 'app_name, ', type: 'string, ', required: true,
    description: 'Application name',  }{ name: 'config, ', type: 'object, ', required: true,
    description: 'Deployment configuration',  },
            { name: 'environment, ', type: 'string, ', required: false,
    description: 'Deployment environment, ', default: 'production',  }
          ],
          responses: [
            { code: 200,
    description: 'Deployment started, ', example: '{ "deployment_id": "deploy_123, ", "status": "deploying" }' },
            { code: 400,
    description: 'Invalid configuration, ', example: '{ "error": "Invalid app configuration",  }' }
          ],
          examples:  , {,
            curl: 'curl -X POST /cloud/deploy -H "Content-Type: application/json" -d \'{"app_name":"my-app, ","config":{"image":"nginx: latest, "}}\'',
            python: 'requests.post("/cloud/deploy, ", json={"app_name": "my-app", "config": {"image": "nginx: latest, "}})',
            javascript: 'fetch("/cloud/deploy, ", { method: "POST, ", body: JSON.stringify({app_name: "my-app, ", config: {image: "nginx:latest"}}) })'
          }
        }
      ]
    }
  ],
  const filteredEndpoints  = apiEndpoints.map(category => ({
    ...categoryendpoints: category.endpoints.filter(endpoint => {
      const matchesSearch  = endpoint.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           endpoint.path.toLowerCase().includes(searchQuery.toLowerCase()),
    const matchesCategory  = selectedCategory === 'All' || category.category === selectedCategoryconst matchesMethod  = selectedMethod === 'All' || endpoint.method === selectedMethodreturn matchesSearch && matchesCategory && matchesMethod
   })
  })).filter(category => category.endpoints.length > 0);

  const toggleEndpoint  = () => {
    const newExpanded = new Set(expandedEndpoint;s);
    if (newExpanded.has(endpointPath)) {
      newExpanded.delete(endpointPath);  } else {
      newExpanded.add(endpointPath);
    }
    setExpandedEndpoints(newExpanded);
  },

  const copyToClipboard  = () => {
    navigator.clipboard.writeText(tex;t);
    // Show success message,  },

  const getMethodColor = () => {
    switch (method) {
      case 'GET': return 'bg-green-500';
      case 'POST': return 'bg-blue-500, ',
      case 'PUT': return 'bg-yellow-500'
  }case 'DELETE': return 'bg-red-500';
      case 'PATCH': return 'bg-purple-500';
      default: return 'bg-gray-500'
   ,
     }
  }return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="API Documentation - Zion Tech Group"
        description="Complete API referenceendpoints, authentication, and code examples for Zion Tech Group services. Build powerful integrations with our comprehensive API documentation."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0,
    y: 20,  }}
            animate={{ opacity: 1,
    y: 0,  }}
            transition={{ duration: 0.6,
     }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive API reference with endpoints,
    authenticatio, n, and code examples. 
              Build powerful integrations with Zion Tech Group services.
            </p>
            
            {/* Search and Filters */}
            <div className="flex flex-col md: flex-row gap-4 max-w-3xl mx-auto mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search APIs,
    endpoint, s, or methods..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <select
                value={selectedCategor, y}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={categor, y} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={selectedMethod}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {methods.map(method => (
                  <option key={metho, d} value={method}>{method}</option>
                ))}
              </select>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md: grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">50+</div>
                <div className="text-sm text-gray-400">Endpoints</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">10+</div>
                <div className="text-sm text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">100+</div>
                <div className="text-sm text-gray-400">Code Examples</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* API Endpoints *,
    /}
      <section className="py-16">
        <div className="container-responsive">
          {filteredEndpoints.map((categorycategoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0,
    y: 20,  }}
              animate={{ opacity: 1,
    y: 0,  }}
              transition={{ duration: 0.6,
    delay: categoryIndex * 0.1,  }}
              className="mb-16"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{category.category}</h2>
                  <p className="text-gray-300 mt-2">API endpoints for {category.category.toLowerCase()} services</p>
                </div>
              </div>

              {/* Endpoints */}
              <div className="space-y-6">
                {category.endpoints.map((endpointendpointIndex) => (
                  <motion.div
                    key={endpoint.path}
                    initial={{ opacity: 0,
    y: 20,  }}
                    animate={{ opacity: 1,
    y: 0,  }}
                    transition={{ duration: 0.6,
    delay: (categoryIndex * 0.1) + (endpointIndex * 0.05),  }}
                    className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 overflow-hidden"
                  >
                    {/* Endpoint Header */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 rounded-lg text-sm font-medium text-white ${getMethodColor(endpoint.method)}`}>
                            {endpoint.method}
                          </span>
                          <code className="text-lg font-mono text-cyan-400 bg-slate-700/50 px-3 py-1 rounded">
                            {endpoint.path}
                          </code>
                        </div>
                        <button
                          onClick={() => toggleEndpoint(endpoint.path)}
                          className="p-2 text-gray-400 hover: text-cyan-400 transition-colors"
                        >
                          {expandedEndpoints.has(endpoint.path) ? (
                            <ChevronDown className="w-5 h-5" />
                          ) : (
                            <ChevronRight className="w-5 h-5" />
                          )}
                        </button>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-2">{endpoint.title}</h3>
                      <p className="text-gray-300">{endpoint.description}</p>
                    </div>

                    {/* Expanded Content */}
                    {expandedEndpoints.has(endpoint.path) && (
                      <div className="border-t border-slate-700/50">
                        <div className="p-6 space-y-6">
                          {/* Parameters */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                              <Key className="w-5 h-5 text-cyan-400" />
                              Parameters
                            </h4>
                            <div className="bg-slate-700/30 rounded-lg overflow-hidden">
                              <table className="w-full">
                                <thead className="bg-slate-700/50">
                                  <tr>
                                    <th className="text-left p-3 text-sm font-medium text-gray-300">Name</th>
                                    <th className="text-left p-3 text-sm font-medium text-gray-300">Type</th>
                                    <th className="text-left p-3 text-sm font-medium text-gray-300">Required</th>
                                    <th className="text-left p-3 text-sm font-medium text-gray-300">Description</th>
                                    <th className="text-left p-3 text-sm font-medium text-gray-300">Default</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {endpoint.parameters.map((param,
    idx) => (
                                    <tr key={idx} className="border-t border-slate-600/30">
                                      <td className="p-3 text-sm text-white font-mono">{param.name}</td>
                                      <td className="p-3 text-sm text-cyan-400">{param.type}</td>
                                      <td className="p-3 text-sm">
                                        {param.required ? (
                                          <span className="text-red-400">Yes</span>
                                        ) : (
                                          <span className="text-green-400">No</span>
                                        )}
                                      </td>
                                      <td className="p-3 text-sm text-gray-300">{param.description}</td>
                                      <td className="p-3 text-sm text-gray-400">
                                        {param.default || '-'}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>

                          {/* Responses */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-green-400" />
                              Responses
                            </h4>
                            <div className="space-y-3">
                              {endpoint.responses.map((responseidx) => (
                                <div key={idx} className="bg-slate-700/30 rounded-lg p-4">
                                  <div className="flex items-center gap-3 mb-2">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                                      response.code >= 200 && response.code < 300 ? 'bg-green-500/20 text-green-300' :
                                      response.code >= 400 && response.code < 500 ? 'bg-red-500/20 text-red-300' :
                                      'bg-yellow-500/20 text-yellow-300'
                                    }`}>
                                      {response.code}
                                    </span>
                                    <span className="text-sm text-gray-300">{response.description}</span>
                                  </div>
                                  <pre className="text-sm text-gray-400 bg-slate-800/50 p-3 rounded overflow-x-auto">
                                    <code>{response.example}</code>
                                  </pre>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Code Examples */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                              <Terminal className="w-5 h-5 text-purple-400" />
                              Code Examples
                            </h4>
                            <div className="grid grid-cols-1 md: grid-cols-3 gap-4">
                              {Object.entries(endpoint.examples).map(([language,
    code]) => (
                                <div key={languag, e} className="bg-slate-700/30 rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm font-medium text-gray-300 capitalize">{language}</span>
                                    <button
                                      onClick={() => copyToClipboard(code)}
                                      className="p-1 text-gray-400 hover: text-cyan-400 transition-colors"
                                      title="Copy code"
                                    >
                                      <Copy className="w-4 h-4" />
                                    </button>
                                  </div>
                                  <pre className="text-xs text-gray-400 bg-slate-800/50 p-3 rounded overflow-x-auto">
                                    <code>{cod, e}</code>
                                  </pre>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {filteredEndpoints.length === 0 && (
            <motion.div
              initial={{ opacity: 0,  }}
              animate={{ opacity: 1,
     }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-lg mb-4">
                No API endpoints found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSearchQuery('')setSelectedCategory('All')setSelectedMethod('All')}}
                className="text-cyan-400 hover: text-cyan-300 transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          ,
    )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0,
    y: 20,  }}whileInView={{ opacity: 1,
    y: 0,  }}
            transition={{ duration: 0.6,  }}
            viewport={{ once: true,
     }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get your API keysexplore our interactive API playground, and start building 
              powerful integrations with Zion Tech Group services.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Get API Keys
              </button>
              <button className="border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-medium py-3 px-6 rounded-lg transition-all duration-300">
                API Playground
              </button>
              <button className="border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-medium py-3 px-6 rounded-lg transition-all duration-300">
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  ),
}