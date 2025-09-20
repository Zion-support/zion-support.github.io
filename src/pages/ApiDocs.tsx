import React from "react"
import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import {
  Code
  Code2,
  Search,
  Copy,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Download,
  Play
  Terminal
  Database
  Globe
  Shield
  Zap
  Clock
  User
  Star
  Bookmark
  Share2
  ChevronRight
  ChevronDown
  FileText
  Settings
  Key
  Lock
  Server
  Cloud
  Cpu
  Brain
  Eye
  MessageSquare
  Image
  FileText as FileTextIcon
  BarChart3
  TrendingUp
  Target
  Rocket
  GitBranch
  Package
  Database as DatabaseIcon
  Network
  Monitor
  Smartphone
  Tablet
  Laptop
} from "lucide-react"
export,
  const: ApiDocs: React.FC = () () => {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState('all')
  const [expandedSections, setExpandedSections] = React.useState<string[]>(['authenticationai-services'])
  const categories = [
  { id: 'all', na,
  m: e: 'All APIs', cou,
  n: t: 0, acti,
  v: e: true },
  },
  { id: 'authentication', na,
  m: e: 'Authentication', cou,
  n: t: 3, acti,
  v: e: false },
  },
  { id: 'ai-services', na,
  m: e: 'AI Services', cou,
  n: t: 8, acti,
  v: e: false },
  },
  { id: 'data-analytics', na,
  m: e: 'Data Analytics', cou,
  n: t: 5, acti,
  v: e: false },
  },
  { id: 'cloud-services', na,
  m: e: 'Cloud Services', cou,
  n: t: 4, acti,
  v: e: false },
  },
  { id: 'security', na,
  m: e: 'Security', cou,
  n: t: 3, acti,
  v: e: false },
  },
  { id: 'iot', na,
  m: e: 'IoT & Edge', cou,
  n: t: 4, acti,
  v: e: false },
  },
  { id: 'quantum', na,
  m: e: 'Quantum Computing', cou,
  n: t: 2, acti,
  v: e: false },
  },
  ]
  const apiSections = [
  {
  id: 'authentication',tit,
  l: e: 'Authentication & Security',ic,
  o: n: Shield,col,
  o: r: 'from-green-500 to-emerald-500',descripti,
  o: n: 'Secure your API calls with authentication and authorization',ap,
  i: s: [
  {
  nam,
  e: 'OAuth 2.0',descripti,
  o: n: 'Industry-standard OAuth 2.0 authentication flow',endpoi,
  n: t: '/oauth2/authorize',meth,
  o: d: 'POST',stat,
  u: s: 'stable',versi,
  o: n: 'v1',featur,
  e: d: true,documentati,
  o: n: '/docs/api/oauth2',s,
  d: k: true,exampl,
  e: s: true
},
  {
  na,
  m: e: 'API Key Management',descripti,
  o: n: 'Generate and manage API keys for your applications',endpoi,
  n: t: '/api/v1/keys',meth,
  o: d: 'GET',stat,
  u: s: 'stable',versi,
  o: n: 'v1',featur,
  e: d: true,documentati,
  o: n: '/docs/api/keys',s,
  d: k: true,exampl,
  e: s: true
},
  {
  na,
  m: e: 'JWT Tokens',descripti,
  o: n: 'JSON Web Token authentication for stateless APIs',endpoi,
  n: t: '/auth/jwt',meth,
  o: d: 'POST',stat,
  u: s: 'stable',versi,
  o: n: 'v1',featur,
  e: d: false,documentati,
  o: n: '/docs/api/jwt',s,
  d: k: true,exampl,
  e: s: true
},
  ],
  },
  {
  id: 'ai-services',tit,
  l: e: 'AI & Machine Learning Services',ic,
  o: n: Brain,col,
  o: r: 'from-purple-500 to-pink-500',descripti,
  o: n: 'Access our cutting-edge AI capabilities through RESTful APIs',ap,
  i: s: [
  {
  nam,
  e: 'Natural Language Processing',descripti,
  o: n: 'Text analysis, sentiment analysis, and language understanding'
          endpoi,
  n: t: '/api/v1/nlp/analyze',meth,
  o: d: 'POST',stat,
  u: s: 'stable',versi,
  o: n: 'v2',featur,
  e: d: true,documentati,
  o: n: '/docs/api/nlp',s,
  d: k: true,exampl,
  e: s: true
},
  {
  na,
  m: e: 'Computer Vision',descripti,
  o: n: 'Image recognition, object detection, and visual analysis'
          endpoi,
  n: t: '/api/v1/vision/analyze',meth,
  o: d: 'POST',stat,
  u: s: 'stable',versi,
  o: n: 'v2',featur,
  e: d: true,documentati,
  o: n: '/docs/api/vision',s,
  d: k: true,exampl,
  e: s: true
},
  {
  na,
  m: e: 'Speech Recognition',descripti,
  o: n: 'Convert speech to text with high accuracy',endpoi,
  n: t: '/api/v1/speech/transcribe',meth,
  o: d: 'POST',stat,
  u: s: 'stable',versi,
  o: n: 'v1',featur,
  e: d: true,documentati,
  o: n: '/docs/api/speech',s,
  d: k: true,exampl,
  e: s: true
},
  {
  na,
  m: e: 'Chatbot API',descripti,
  o: n: 'Build conversational AI chatbots',endpoi,
  n: t: '/api/v1/chat/completions',meth,
  o: d: 'POST',stat,
  u: s: 'stable',versi,
  o: n: 'v1',featur,
  e: d: true,documentati,
  o: n: '/docs/api/chat',s,
  d: k: true,exampl,
  e: s: true
},
  {
  na,
  m: e: 'Predictive Analytics',descripti,
  o: n: 'Machine learning models for business predictions',endpoi,
  n: t: '/api/v1/ml/predict',meth,
  o: d: 'POST',stat,
  u: s: 'beta',versi,
  o: n: 'v1',featur,
  e: d: false,documentati,
  o: n: '/docs/api/ml',s,
  d: k: true,exampl,
  e: s: false
},
  {
  na,
  m: e: 'Recommendation Engine',descripti,
  o: n: 'AI-powered product and content recommendations',endpoi,
  n: t: '/api/v1/recommendations',meth,
  o: d: 'POST',stat,
  u: s: 'beta',versi,
  o: n: 'v1',featur,
  e: d: false,documentati,
  o: n: '/docs/api/recommendations',s,
  d: k: false,exampl,
  e: s: false
},
  {
  na,
  m: e: 'Anomaly Detection',descripti,
  o: n: 'Detect unusual patterns in data streams',endpoi,
  n: t: '/api/v1/anomaly/detect',meth,
  o: d: 'POST',stat,
  u: s: 'alpha',versi,
  o: n: 'v1',featur,
  e: d: false,documentati,
  o: n: '/docs/api/anomaly',s,
  d: k: false,exampl,
  e: s: false
},
  {
  na,
  m: e: 'AutoML',descripti,
  o: n: 'Automated machine learning model training',endpoi,
  n: t: '/api/v1/automl/train',meth,
  o: d: 'POST',stat,
  u: s: 'alpha',versi,
  o: n: 'v1',featur,
  e: d: false,documentati,
  o: n: '/docs/api/automl',s,
  d: k: false,exampl,
  e: s: false
},
  ],
  },
  {
  id: 'data-analytics',tit,
  l: e: 'Data Analytics & Business Intelligence',ic,
  o: n: BarChart3,col,
  o: r: 'from-blue-500 to-cyan-500',descripti,
  o: n: 'Transform raw data into actionable business insights',ap,
  i: s: [
  {
  nam,
  e: 'Data Processing',descripti,
  o: n: 'ETL operations and data transformation',endpoi,
  n: t: '/api/v1/data/process',meth,
  o: d: 'POST',stat,
  u: s: 'stable',versi,
  o: n: 'v1',featur,
  e: d: true,documentati,
  o: n: '/docs/api/data-processing',s,
  d: k: true,exampl,
  e: s: true
},
  {
  na,
  m: e: 'Real-time Analytics',descripti,
  o: n: 'Live data streaming and analysis',endpoi,
  n: t: '/api/v1/analytics/stream',meth,
  o: d: 'GET',stat,
  u: s: 'stable',versi,
  o: n: 'v1',featur,
  e: d: true,documentati,
  o: n: '/docs/api/real-time-analytics',s,
  d: k: true,exampl,
  e: s: true
},
  {
  na,
  m: e: 'Report Generation',descripti,
  o: n: 'Automated report creation and scheduling',endpoi,
  n: t: '/api/v1/reports/generate',meth,
  o: d: 'POST',stat,
  u: s: 'stable',versi,
  o: n: 'v1',featur,
  e: d: false,documentati,
  o: n: '/docs/api/reports',s,
  d: k: true,exampl,
  e: s: true
},
  {
  na,
  m: e: 'Data Visualization',descripti,
  o: n: 'Create charts, graphs, and dashboards'
          endpoi,
  n: t: '/api/v1/visualization/create',meth,
  o: d: 'POST',stat,
  u: s: 'beta',versi,
  o: n: 'v1',featur,
  e: d: false,documentati,
  o: n: '/docs/api/visualization',s,
  d: k: false,exampl,
  e: s: true
},
  {
  na,
  m: e: 'Data Mining',descripti,
  o: n: 'Discover patterns and relationships in data',endpoi,
  n: t: '/api/v1/mining/discover',meth,
  o: d: 'POST',stat,
  u: s: 'alpha',versi,
  o: n: 'v1',featur,
  e: d: false,documentati,
  o: n: '/docs/api/data-mining',s,
  d: k: false,exampl,
  e: s: false
},
  ],
  },
  {
  id: 'cloud-services',tit,
  l: e: 'Cloud & Infrastructure Services',ic,
  o: n: Cloud,col,
  o: r: 'from-indigo-500 to-purple-500',descripti,
  o: n: 'Manage cloud resources and infrastructure programmatically',ap,
  i: s: [
  {
  nam,
  e: 'Container Orchestration',descripti,
  o: n: 'Deploy and manage containerized applications',endpoi,
  n: t: '/api/v1/containers/deploy',meth,
  o: d: 'POST',stat,
  u: s: 'stable',versi,
  o: n: 'v1',featur,
  e: d: true,documentati,
  o: n: '/docs/api/containers',s,
  d: k: true,exampl,
  e: s: true
},
  {
  na,
  m: e: 'Serverless Functions',descripti,
  o: n: 'Deploy and manage serverless functions',endpoi,
  n: t: '/api/v1/functions/deploy',meth,
  o: d: 'POST',stat,
  u: s: 'stable',versi,
  o: n: 'v1',featur,
  e: d: true,documentati,
  o: n: '/docs/api/functions',s,
  d: k: true,exampl,
  e: s: true
},
  {
  na,
  m: e: 'Database Management',descripti,
  o: n: 'Create and manage databases and tables',endpoi,
  n: t: '/api/v1/databases',meth,
  o: d: 'GET',stat,
  u: s: 'stable',versi,
  o: n: 'v1',featur,
  e: d: false,documentati,
  o: n: '/docs/api/databases',s,
  d: k: true,exampl,
  e: s: true
},
  {
  na,
  m: e: 'Load Balancing',descripti,
  o: n: 'Configure and manage load balancers',endpoi,
  n: t: '/api/v1/loadbalancers',meth,
  o: d: 'GET',stat,
  u: s: 'beta',versi,
  o: n: 'v1',featur,
  e: d: false,documentati,
  o: n: '/docs/api/loadbalancers',s,
  d: k: false,exampl,
  e: s: true
},
  ],
  },
  ]
  const toggleSection = (section,
  I: d: string) () => {
  setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [[...prev, sectionId],
  ]
    )
  }

  const filteredSections = apiSections.filter(section => 
    selectedCategory === 'all' || section.id === selectedCategory
)

  const allApis = apiSections.flatMap(section => 
    section.apis.map(api => ({ ...api, secti,
  o: n: section.title, section,
  I: d: section.id }))
  )
  const filteredApis = allApis.filter(api =>
    api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    api.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    api.section.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getStatusColor = (stat,
  u: s: string) () => {
  switch (status) {
  case 'stable': return 'bg-green-500/20 text-green-400 border-green-400/30'
      case 'beta': return 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30'
      case 'alpha': return 'bg-red-500/20 text-red-400 border-red-400/30'
      defaul,
  t: return 'bg-gray-500/20 text-gray-400 border-gray-400/30'
},
  }
  const getMethodColor = (meth,
  o: d: string) () => {
  switch (method) {
  case 'GET': return 'bg-green-500/20 text-green-400 border-green-400/30'
      case 'POST': return 'bg-blue-500/20 text-blue-400 border-blue-400/30'
      case 'PUT': return 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30'
      case 'DELETE': return 'bg-red-500/20 text-red-400 border-red-400/30'
      defaul,
  t: return 'bg-gray-500/20 text-gray-400 border-gray-400/30'
},
  }
  // Update category counts
  React.useEffect(() () => {
    categories.forEach(cat () => {
  if (if (cat.id !== 'all') {
  ) {
        const section = apiSections.find(s => s.id === cat.id)
        cat.count = section ? section.apis.length : 0
},
  })
    categories[0].count = allApis.length
}, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="API Documentation - Zion Tech Group"
        description="Comprehensive API documentation, endpoints, authentication, and integration guides for Zion Tech Group services."
      />
      
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-400 text-sm font-medium mb-6">
              <Code2 className="w-4 h-4" />
              Developer APIs
            </div>
            
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              API Documentation &
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Integration Guides
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build powerful applications with our comprehensive API suite. 
              From AI services to cloud infrastructure, everything you need to integrate Zion Tech Group solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Code2 className="w-5 h-5" />
                <span>{allApis.length} API Endpoints</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Code className="w-5 h-5" />
                <span>Multiple SDKs</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="w-5 h-5" />
                <span>Secure & Reliable</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */},
  }
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Search and Filter Section */},
  }
      <section className="py-12 border-b border-slate-700/50">
        <div className="container-responsive">
          <div className="flex flex-col,
  l: g:flex-row gap-6 items-center justify-between">
            {/* Search */},
  }
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search APIs..."
                value={searchQuery},
  }
                onChange={(e) => setSearchQuery(e.target.value)},
  }
                className="className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:border-indigo-400,
  focu: s:ring-2 focu,
  s:ring-indigo-400/20 transition-all duration-200";"
              />
            </div>

            {/* Category Filter */},
  }
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
  <button
                  key={category.id},
  }
                  onClick={onClick={() => setSelectedCategory(category.id)},
  },
  }
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
  selectedCategory === category.id
                      ? 'bg-indigo-400/20 border-indigo-400/40 text-indigo-400'
                      : 'bg-slate-700/50 border-slate-600/50 text-gray-300,
  hove: r: bg-slate-600/50 hove,
  r:border-indigo-400/30'
}`}
                >
                  {category.name},
  }
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* API Content */},
  }
      <section className="py-16">
        <div className="container-responsive">
          {searchQuery ? (
  // Search Results
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Search Results for "{searchQuery}"
                </h2>
                <p className="text-gray-400">
                  Found {filteredApis.length} APIs
                </p>
              </div>
              
              <div className="space-y-4">
                {filteredApis.map((api, index) => (
  <motion.div
                    key={`${api.sectionId}-${index}`}
                    initial={ opaci,
  t: y: 0, y: 20 },
  }
                    animate={ opaci,
  t: y: 1, y: 0 },
  }
                    transition={ durati,
  o: n: 0.3, del,
  a: y: index * 0.1 },
  }
                    className="className="group bg-slate-800/30 border border-slate-700/30 rounded-xl p-6,
  hove: r: border-slate-600/50 transition-all duration-300 hove,
  r:bg-slate-800/50";"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="inline-block px-3 py-1 bg-slate-700/50 text-indigo-400 text-xs font-medium rounded-full">
                            {api.section},
  }
                          </span>
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(api.status)}`}>
                            {api.status},
  }
                          </span>
                          {api.featured && (
  <span className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded-full">
                              <Star className="w-3 h-3" />
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-lg font-semibold text-white mb-2 group-hov,
  e: r:text-indigo-400 transition-colors">
                          {api.name},
  }
                        </h3>
                        
                        <p className="text-gray-400 text-sm mb-3">
                          {api.description},
  }
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Code className="w-4 h-4" />
                            {api.endpoint},
  }
                          </span>
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getMethodColor(api.method)}`}>
                            {api.method},
  }
                          </span>
                          <span className="flex items-center gap-1">
                            <FileText className="w-4 h-4" />
                            v{api.version},
  }
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0 ml-4">
                        <button className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 border border-indigo-400/30 text-indigo-400 text-sm font-medium rounded-lg,
  hove: r:bg-indigo-500/30 transition-all duration-300">
                          View Docs
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {filteredApis.length === 0 && (
  <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">No APIs found matching your search.</p>
                  <p className="text-gray-500 text-sm mt-2">Try different keywords or browse by category.</p>
                </div>
              )}
            </div>
          ) : (
  // Category-based API Documentation
            <div className="space-y-8">
              {filteredSections.map((section, sectionIndex) => (
  <motion.div
                  key={section.id},
  }
                  initial={ opaci,
  t: y: 0, y: 20 },
  }
                  animate={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: sectionIndex * 0.1 },
  }
                  className="className="bg-slate-800/30 border border-slate-700/30 rounded-2xl overflow-hidden";"
                >
                  {/* Section Header */},
  }
                  <button
                    onClick={onClick={() => toggleSection(section.id)},
  },
  }
                    className="className="w-full p-6 text-left,
  hove: r:bg-slate-800/50 transition-colors duration-200";"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                          <section.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                          <p className="text-gray-400 text-sm">
                            {section.apis.length} APIs • {section.description},
  }
                          </p>
                        </div>
                      </div>
                      {expandedSections.includes(section.id) ? (
  <ChevronDown className="w-6 h-6 text-gray-400" />
                      ) : (
  <ChevronRight className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  {/* Section Content */},
  },
  {expandedSections.includes(section.id) && (
  <div className="border-t border-slate-700/30">
                      <div className="grid grid-cols-1,
  l: g:grid-cols-2 gap-4 p-6">
                        {section.apis.map((api, apiIndex) => (
  <motion.div
                            key={api.endpoint},
  }
                            initial={ opaci,
  t: y: 0, sca,
  l: e: 0.95 },
  }
                            animate={ opaci,
  t: y: 1, sca,
  l: e: 1 },
  }
                            transition={ durati,
  o: n: 0.3, del,
  a: y: apiIndex * 0.1 },
  }
                            className="className="group bg-slate-700/20 border border-slate-600/20 rounded-xl p-4,
  hove: r: border-slate-500/40 hove,
  r:bg-slate-700/30 transition-all duration-300";"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center gap-2">
                                {api.featured && (
  <Star className="w-4 h-4 text-yellow-400" />
                                )}
                                <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(api.status)}`}>
                                  {api.status},
  }
                                </span>
                                <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getMethodColor(api.method)}`}>
                                  {api.method},
  }
                                </span>
                              </div>
                              <span className="text-xs text-gray-500">v{api.version}</span>
                            </div>
                            
                            <h3 className="text-lg font-semibold text-white mb-2 group-hov,
  e: r:text-indigo-400 transition-colors">
                              {api.name},
  }
                            </h3>
                            
                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                              {api.description},
  }
                            </p>
                            
                            <div className="mb-4">
                              <code className="text-xs text-gray-300 bg-slate-800/50 px-2 py-1 rounded">
                                {api.endpoint},
  }
                              </code>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex gap-2">
                                {api.sdk && (
  <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                                    <Package className="w-3 h-3" />
                                    SDK
                                  </span>
                                )},
  {api.examples && (
  <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                                    <Code className="w-3 h-3" />
                                    Examples
                                  </span>
                                )}
                              </div>
                              
                              <button className="inline-flex items-center gap-2 text-indigo-400,
  hove: r:text-indigo-300 text-sm font-medium transition-colors">
                                View Docs
                                <ArrowRight className="w-4 h-4" />
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick Actions */},
  }
      <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Quick Actions</h2>
            <p className="text-gray-400">Get started quickly with these popular resources</p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-4 gap-6">
            {[
  { nam,
  e: 'API Playground', ic,
  o: n: Terminal, col,
  o: r: 'from-green-500 to-emerald-500', hr,
  e: f: '/api-playground' },
  },
  { na,
  m: e: 'SDK Downloads', ic,
  o: n: Download, col,
  o: r: 'from-blue-500 to-cyan-500', hr,
  e: f: '/sdk-downloads' },
  },
  { na,
  m: e: 'Code Examples', ic,
  o: n: Code, col,
  o: r: 'from-purple-500 to-pink-500', hr,
  e: f: '/code-examples' },
  },
  { na,
  m: e: 'Rate Limits', ic,
  o: n: Settings, col,
  o: r: 'from-orange-500 to-red-500', hr,
  e: f: '/rate-limits' },
  },
  ].map((action, index) => (
  <motion.a
                key={action.name},
  }
                href={action.href},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center,
  hove: r: border-indigo-400/50 transition-all duration-300 hove,
  r:bg-slate-800/70";"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mx-auto mb-4 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hov,
  e: r:text-indigo-400 transition-colors">
                  {action.name},
  }
                </h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get your API keys, explore our interactive playground, and start integrating 
              Zion Tech Group services into your applications today.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600,
  hove: r:from-indigo-600,
  hove: r:to-purple-700 text-white font-medium rounded-lg transition-all duration-300,
  transform: hover:scale-105">
                Get API Keys
              </button>
              <button className="px-8 py-4 bg-slate-800/50 border border-slate-600 text-white font-medium rounded-lg hove,
  r:bg-slate-700/50 transition-all duration-300">
                Try API Playground
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default ApiDocs