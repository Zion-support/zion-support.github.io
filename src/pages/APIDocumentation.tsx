import React, { useState } from "react"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import {
  Code
  Search,
  Filter
  ArrowRight
  Download
  ExternalLink
  Github
  Globe
  Database
  Server
  Shield
  Brain
  Cloud
  Cpu
  Zap
  Users
  Calendar
  Star
  Bookmark
  Share2
  Copy
  CheckCircle
  Clock
  Tag
  Play
  Terminal
  FileText
  Key
  Lock
  Eye
  EyeOff
  ChevronDown
  ChevronRight
  AlertCircle
  Info
} from "lucide-react"
export default function APIDocumentation() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedMethod, setSelectedMethod] = useState('All')
  const [expandedEndpoints, setExpandedEndpoints] = useState<Set<string>>(new Set())
  const categories = [['AllAuthentication', 'AI ServicesData Analytics', 'Cloud ServicesIoT & Edge', 'BlockchainQuantum Computing'],
  ]
  const methods = [['AllGET', 'POSTPUT', 'DELETEPATCH'],
  ]
  const apiEndpoints = [
  {
  catego,
  r: y: 'Authentication',endpoin,
  t: s: [
  {
  pat,
  h: '/auth/login',meth,
  o: d: 'POST',tit,
  l: e: 'User Login',descripti,
  o: n: 'Authenticate user with email and password',paramete,
  r: s: [
  { nam,
  e: 'email', ty,
  p: e: 'string', requir,
  e: d: true, descripti,
  o: n: 'User email address' },
  },
  { na,
  m: e: 'password', ty,
  p: e: 'string', requir,
  e: d: true, descripti,
  o: n: 'User password' },
  },
  ]
          respons,
  e: s: [
  { cod,
  e: 200, descripti,
  o: n: 'Login successful', examp,
  l: e: '{ "token": "jwt_token", "user": {...},
  }' },
  { co,
  d: e: 401, descripti,
  o: n: 'Invalid credentials', examp,
  l: e: '{ "error": "Invalid credentials" }' },
  ]
          exampl,
  e: s: {
  cu,
  r: l: 'curl -X POST /auth/login -H "Content-Typ,
  e: application/json" -d \'{"email":"user@example.com","password":"password"}\''
            pyth,
  o: n: 'requests.post("/auth/login", json={"email": "user@example.com", "password": "password"})'
            javascri,
  p: t: 'fetch("/auth/login", { meth,
  o: d: "POST", bo,
  d: y: JSON.stringify({emai,
  l: "user@example.com", passwo,
  r: d: "password"}) })'
},
  },
  {
  pa,
  t: h: '/auth/register',meth,
  o: d: 'POST',tit,
  l: e: 'User Registration',descripti,
  o: n: 'Create a new user account',paramete,
  r: s: [
  { nam,
  e: 'email', ty,
  p: e: 'string', requir,
  e: d: true, descripti,
  o: n: 'User email address' },
  },
  { na,
  m: e: 'password', ty,
  p: e: 'string', requir,
  e: d: true, descripti,
  o: n: 'Minimum 8 characters' },
  },
  { na,
  m: e: 'name', ty,
  p: e: 'string', requir,
  e: d: true, descripti,
  o: n: 'Full name' },
  },
  ]
          respons,
  e: s: [
  { cod,
  e: 201, descripti,
  o: n: 'User created successfully', examp,
  l: e: '{ "user": {...}, "message": "User created" }' },
  { co,
  d: e: 400, descripti,
  o: n: 'Validation error', examp,
  l: e: '{ "error": "Email already exists" }' },
  ]
          exampl,
  e: s: {
  cu,
  r: l: 'curl -X POST /auth/register -H "Content-Typ,
  e: application/json" -d \'{"email":"new@example.com","password":"password123","name":"John Doe"}\''
            pyth,
  o: n: 'requests.post("/auth/register", json={"email": "new@example.com", "password": "password123", "name": "John Doe"})'
            javascri,
  p: t: 'fetch("/auth/register", { meth,
  o: d: "POST", bo,
  d: y: JSON.stringify({emai,
  l: "new@example.com", passwo,
  r: d: "password123", na,
  m: e: "John Doe"}) })'
},
  },
  ],
  },
  {
  catego,
  r: y: 'AI Services',endpoin,
  t: s: [
  {
  pat,
  h: '/ai/analyze',meth,
  o: d: 'POST',tit,
  l: e: 'AI Text Analysis',descripti,
  o: n: 'Analyze text using AI for sentiment, entities, and key phrases'
          paramete,
  r: s: [
  { nam,
  e: 'text', ty,
  p: e: 'string', requir,
  e: d: true, descripti,
  o: n: 'Text to analyze' },
  },
  { na,
  m: e: 'analysis_type', ty,
  p: e: 'string', requir,
  e: d: false, descripti,
  o: n: 'Type of analysis (sentiment, entities, keywords)', defau,
  l: t: 'all' },
  },
  { na,
  m: e: 'language', ty,
  p: e: 'string', requir,
  e: d: false, descripti,
  o: n: 'Text language', defau,
  l: t: 'en' },
  },
  ]
          respons,
  e: s: [
  { cod,
  e: 200, descripti,
  o: n: 'Analysis completed', examp,
  l: e: '{ "sentiment": "positive", "entities": [...], "keywords": [...],
  }' },
  { co,
  d: e: 400, descripti,
  o: n: 'Invalid input', examp,
  l: e: '{ "error": "Text is required" }' },
  ]
          exampl,
  e: s: {
  cu,
  r: l: 'curl -X POST /ai/analyze -H "Content-Typ,
  e: application/json" -d \'{"text":"This is amazing!","analysis_type":"sentiment"}\''
            pyth,
  o: n: 'requests.post("/ai/analyze", json={"text": "This is amazing!", "analysis_type": "sentiment"})'
            javascri,
  p: t: 'fetch("/ai/analyze", { meth,
  o: d: "POST", bo,
  d: y: JSON.stringify({tex,
  t: "This is amazing!", analysis_ty,
  p: e: "sentiment"}) })'
},
  },
  {
  pa,
  t: h: '/ai/generate',meth,
  o: d: 'POST',tit,
  l: e: 'AI Content Generation',descripti,
  o: n: 'Generate content using AI models',paramete,
  r: s: [
  { nam,
  e: 'prompt', ty,
  p: e: 'string', requir,
  e: d: true, descripti,
  o: n: 'Generation prompt' },
  },
  { na,
  m: e: 'model', ty,
  p: e: 'string', requir,
  e: d: false, descripti,
  o: n: 'AI model to use', defau,
  l: t: 'gpt-4' },
  },
  { na,
  m: e: 'max_tokens', ty,
  p: e: 'integer', requir,
  e: d: false, descripti,
  o: n: 'Maximum tokens to generate', defau,
  l: t: 1000 },
  },
  ]
          respons,
  e: s: [
  { cod,
  e: 200, descripti,
  o: n: 'Content generated', examp,
  l: e: '{ "content": "Generated text...", "usage": {...},
  }' },
  { co,
  d: e: 400, descripti,
  o: n: 'Invalid prompt', examp,
  l: e: '{ "error": "Prompt is required" }' },
  ]
          exampl,
  e: s: {
  cu,
  r: l: 'curl -X POST /ai/generate -H "Content-Typ,
  e: application/json" -d \'{"prompt":"Write a blog post about AI"}\''
            pyth,
  o: n: 'requests.post("/ai/generate", json={"prompt": "Write a blog post about AI"})'
            javascri,
  p: t: 'fetch("/ai/generate", { meth,
  o: d: "POST", bo,
  d: y: JSON.stringify({promp,
  t: "Write a blog post about AI"}) })'
},
  },
  ],
  },
  {
  catego,
  r: y: 'Data Analytics',endpoin,
  t: s: [
  {
  pat,
  h: '/analytics/query',meth,
  o: d: 'POST',tit,
  l: e: 'Data Query',descripti,
  o: n: 'Query analytics data with custom filters and aggregations',paramete,
  r: s: [
  { nam,
  e: 'query', ty,
  p: e: 'object', requir,
  e: d: true, descripti,
  o: n: 'Query object with filters and aggregations' },
  },
  { na,
  m: e: 'time_range', ty,
  p: e: 'string', requir,
  e: d: false, descripti,
  o: n: 'Time range for data', defau,
  l: t: 'last_30_days' },
  },
  ]
          respons,
  e: s: [
  { cod,
  e: 200, descripti,
  o: n: 'Query results', examp,
  l: e: '{ "data": [...], "metadata": {...},
  }' },
  { co,
  d: e: 400, descripti,
  o: n: 'Invalid query', examp,
  l: e: '{ "error": "Invalid query format" }' },
  ]
          exampl,
  e: s: {
  cu,
  r: l: 'curl -X POST /analytics/query -H "Content-Typ,
  e: application/json" -d \'{"query":{"filters":{"event_type":"page_view"},"aggregations":{"count":"total"},
  },
  }\''
            pyth,
  o: n: 'requests.post("/analytics/query", json={"query": {"filters": {"event_type": "page_view"}, "aggregations": {"count": "total"},
  },
  })'
            javascri,
  p: t: 'fetch("/analytics/query", { meth,
  o: d: "POST", bo,
  d: y: JSON.stringify({que,
  r: y: {filte,
  r: s: {event_typ,
  e: "page_view"}, aggregatio,
  n: s: {coun,
  t: "total"},
  },
  }) })'
},
  },
  ],
  },
  {
  catego,
  r: y: 'Cloud Services',endpoin,
  t: s: [
  {
  pat,
  h: '/cloud/deploy',meth,
  o: d: 'POST',tit,
  l: e: 'Deploy Application',descripti,
  o: n: 'Deploy application to cloud infrastructure',paramete,
  r: s: [
  { nam,
  e: 'app_name', ty,
  p: e: 'string', requir,
  e: d: true, descripti,
  o: n: 'Application name' },
  },
  { na,
  m: e: 'config', ty,
  p: e: 'object', requir,
  e: d: true, descripti,
  o: n: 'Deployment configuration' },
  },
  { na,
  m: e: 'environment', ty,
  p: e: 'string', requir,
  e: d: false, descripti,
  o: n: 'Deployment environment', defau,
  l: t: 'production' },
  },
  ]
          respons,
  e: s: [
  { cod,
  e: 200, descripti,
  o: n: 'Deployment started', examp,
  l: e: '{ "deployment_id": "deploy_123", "status": "deploying" }' },
  { co,
  d: e: 400, descripti,
  o: n: 'Invalid configuration', examp,
  l: e: '{ "error": "Invalid app configuration" }' },
  ]
          exampl,
  e: s: {
  cu,
  r: l: 'curl -X POST /cloud/deploy -H "Content-Typ,
  e: application/json" -d \'{"app_name":"my-app","config":{"image":"ngi,
  n: x: latest"},
  }\''
            pyth,
  o: n: 'requests.post("/cloud/deploy", json={"app_name": "my-app", "config": {"image": "ngi,
  n: x: latest"},
  })'
            javascri,
  p: t: 'fetch("/cloud/deploy", { meth,
  o: d: "POST", bo,
  d: y: JSON.stringify({app_nam,
  e: "my-app", conf,
  i: g: {ima,
  g: e: "ngin,
  x:latest"},
  }) })'
},
  },
  ],
  },
  ]
  const filteredEndpoints = apiEndpoints.map(category => ({
  ...category,
  endpoint: s: category.endpoints.filter(endpoint () => {
  const matchesSearch = endpoint.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           endpoint.path.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || category.category === selectedCategory
const matchesMethod = selectedMethod === 'All' || endpoint.method === selectedMethod
      return matchesSearch && matchesCategory && matchesMethod
})
  })).filter(category => category.endpoints.length > 0)

  const toggleEndpoint = (endpointPa,
  t: h: string) () => {
  const newExpanded = new Set(expandedEndpoints)
    if (newExpanded.has(endpointPath)) {
  newExpanded.delete(endpointPath)
    } else {
      newExpanded.add(endpointPath)
    }
    setExpandedEndpoints(newExpanded)
  }

  const copyToClipboard = (te,
  x: t: string) () => {
  navigator.clipboard.writeText(text)
    // Show success message
}

  const getMethodColor = (meth,
  o: d: string) () => {
  switch (method) {
  case 'GET': return 'bg-green-500'
      case 'POST': return 'bg-blue-500'
      case 'PUT': return 'bg-yellow-500'
      case 'DELETE': return 'bg-red-500'
      case 'PATCH': return 'bg-purple-500'
      defaul,
  t: return 'bg-gray-500'
},
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="API Documentation - Zion Tech Group"
        description="Complete API reference, endpoints, authentication, and code examples for Zion Tech Group services. Build powerful integrations with our comprehensive API documentation."
      />
      
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive API reference with endpoints, authentication, and code examples. 
              Build powerful integrations with Zion Tech Group services.
            </p>
            
            {/* Search and Filters */},
  }
            <div className="flex flex-col,
  m: d:flex-row gap-4 max-w-3xl mx-auto mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search APIs, endpoints, or methods..."
                  value={searchQuery},
  }
                  onChange={(e) => setSearchQuery(e.target.value)},
  }
                  className="className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500 focu,
  s:border-transparent";"
                />
              </div>
              <select
                value={selectedCategory},
  }
                onChange={(e) => setSelectedCategory(e.target.value)},
  }
                className="className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500 focu,
  s:border-transparent";"
              >
                {categories.map(category => (
  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={selectedMethod},
  }
                onChange={(e) => setSelectedMethod(e.target.value)},
  }
                className="className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-500 focu,
  s:border-transparent";"
              >
                {methods.map(method => (
  <option key={method} value={method}>{method}</option>
                ))}
              </select>
            </div>

            {/* Quick Stats */},
  }
            <div className="grid grid-cols-2,
  m: d:grid-cols-4 gap-6 max-w-2xl mx-auto">
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

      {/* API Endpoints */},
  }
      <section className="py-16">
        <div className="container-responsive">
          {filteredEndpoints.map((category, categoryIndex) => (
  <motion.div
              key={category.category},
  }
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.6, del,
  a: y: categoryIndex * 0.1 },
  }
              className="className="mb-16";"
            >
              {/* Category Header */},
  }
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{category.category}</h2>
                  <p className="text-gray-300 mt-2">API endpoints for {category.category.toLowerCase()} services</p>
                </div>
              </div>

              {/* Endpoints */},
  }
              <div className="space-y-6">
                {category.endpoints.map((endpoint, endpointIndex) => (
  <motion.div
                    key={endpoint.path},
  }
                    initial={ opaci,
  t: y: 0, y: 20 },
  }
                    animate={ opaci,
  t: y: 1, y: 0 },
  }
                    transition={ durati,
  o: n: 0.6, del,
  a: y: (categoryIndex * 0.1) + (endpointIndex * 0.05) },
  }
                    className="className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 overflow-hidden";"
                  >
                    {/* Endpoint Header */},
  }
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 rounded-lg text-sm font-medium text-white ${getMethodColor(endpoint.method)}`}>
                            {endpoint.method},
  }
                          </span>
                          <code className="text-lg font-mono text-cyan-400 bg-slate-700/50 px-3 py-1 rounded">
                            {endpoint.path},
  }
                          </code>
                        </div>
                        <button
                          onClick={onClick={() => toggleEndpoint(endpoint.path)},
  },
  }
                          className="className="p-2 text-gray-400,
  hove: r:text-cyan-400 transition-colors";"
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

                    {/* Expanded Content */},
  },
  {expandedEndpoints.has(endpoint.path) && (
  <div className="border-t border-slate-700/50">
                        <div className="p-6 space-y-6">
                          {/* Parameters */},
  }
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
                                  {endpoint.parameters.map((param, idx) => (
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
                                        {param.default || '-'},
  }
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>

                          {/* Responses */},
  }
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-green-400" />
                              Responses
                            </h4>
                            <div className="space-y-3">
                              {endpoint.responses.map((response, idx) => (
  <div key={idx} className="bg-slate-700/30 rounded-lg p-4">
                                  <div className="flex items-center gap-3 mb-2">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${
  response.code >= 200 && response.code < 300 ? 'bg-green-500/20 text-green-300' :
                                      response.code >= 400 && response.code < 500 ? 'bg-red-500/20 text-red-300' :
                                      'bg-yellow-500/20 text-yellow-300'
}`}>
                                      {response.code},
  }
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

                          {/* Code Examples */},
  }
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                              <Terminal className="w-5 h-5 text-purple-400" />
                              Code Examples
                            </h4>
                            <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-4">
                              {Object.entries(endpoint.examples).map(([language, code]) => (
  <div key={language} className="bg-slate-700/30 rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm font-medium text-gray-300 capitalize">{language}</span>
                                    <button
                                      onClick={onClick={() => copyToClipboard(code)},
  },
  }
                                      className="className="p-1 text-gray-400,
  hove: r: text-cyan-400 transition-colors";"
                                      title="Copy code"
                                    >
                                      <Copy className="w-4 h-4" />
                                    </button>
                                  </div>
                                  <pre className="text-xs text-gray-400 bg-slate-800/50 p-3 rounded overflow-x-auto">
                                    <code>{code}</code>
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
          ))},
  {filteredEndpoints.length === 0 && (
  <motion.div
              initial={ opaci,
  t: y: 0 },
  }
              animate={ opaci,
  t: y: 1 },
  }
              className="className="text-center py-16";"
            >
              <div className="text-gray-400 text-lg mb-4">
                No API endpoints found matching your criteria.
              </div>
              <button
                onClick={() () => {
                  setSearchQuery('')
                  setSelectedCategory('All')
                  setSelectedMethod('All')
                },
  }
                className="className="text-cyan-400,
  hove: r:text-cyan-300 transition-colors";"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-16">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 rounded-2xl p-8 text-center";"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get your API keys, explore our interactive API playground, and start building 
              powerful integrations with Zion Tech Group services.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600,
  hove: r:from-cyan-600,
  hove: r:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-cyan-500/25">
                Get API Keys
              </button>
              <button className="border border-cyan-400/50 text-cyan-400,
  hove: r:bg-cyan-400/10 font-medium py-3 px-6 rounded-lg transition-all duration-300">
                API Playground
              </button>
              <button className="border border-cyan-400/50 text-cyan-400 hove,
  r:bg-cyan-400/10 font-medium py-3 px-6 rounded-lg transition-all duration-300">
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}