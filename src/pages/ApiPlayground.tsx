import { useCallback  } from "react";
import React, { useState } from "react"
import { Code, Play, Copy, Download, BookOpen, Search, Filter, ExternalLink, ArrowRight, Brain, Cloud, Shield, Database, Zap, Globe, Target, TrendingUp, Award, CheckCircle, Calendar, MapPin, DollarSign, FileText, Lightbulb, Microscope, Rocket, Network, Cpu, Lock, BarChart3, Palette, Smartphone, Eye, Star, Terminal, Settings, Zap as ZapIcon, RefreshCw, CheckCircle2, AlertCircle, Info   } from "lucide-react";
export default function ApiPlayground() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeMethod, setActiveMethod] = useState('all')
  const [selectedApi, setSelectedApi] = useState<any>(null)
  const [requestBody, setRequestBody] = useState('')
  const [responseData, setResponseData] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('playground')
  const categories = [
  { id: 'all', na,
  m: e: 'All Categories', ic,
  o: n: <Code className="w-5 h-5" />, cou,
  n: t: 0 },
  },
  { id: 'ai-ml', na,
  m: e: 'AI & Machine Learning', ic,
  o: n: <Brain className="w-5 h-5" />, cou,
  n: t: 8 },
  },
  { id: 'cloud', na,
  m: e: 'Cloud & Infrastructure', ic,
  o: n: <Cloud className="w-5 h-5" />, cou,
  n: t: 6 },
  },
  { id: 'security', na,
  m: e: 'Cybersecurity', ic,
  o: n: <Shield className="w-5 h-5" />, cou,
  n: t: 5 },
  },
  { id: 'data', na,
  m: e: 'Data & Analytics', ic,
  o: n: <Database className="w-5 h-5" />, cou,
  n: t: 7 },
  },
  { id: 'iot', na,
  m: e: 'IoT & Edge', ic,
  o: n: <Network className="w-5 h-5" />, cou,
  n: t: 4 },
  },
  ]
  const methods = [
  { id: 'all', na,
  m: e: 'All Methods', cou,
  n: t: 0 },
  },
  { id: 'GET', na,
  m: e: 'GET', cou,
  n: t: 0, col,
  o: r: 'text-green-400' },
  },
  { id: 'POST', na,
  m: e: 'POST', cou,
  n: t: 0, col,
  o: r: 'text-blue-400' },
  },
  { id: 'PUT', na,
  m: e: 'PUT', cou,
  n: t: 0, col,
  o: r: 'text-yellow-400' },
  },
  { id: 'DELETE', na,
  m: e: 'DELETE', cou,
  n: t: 0, col,
  o: r: 'text-red-400' },
  },
  ]
  const apis = [
  {
  id: 1,na,
  m: e: 'AI Text Analysis',descripti,
  o: n: 'Analyze text sentiment, extract entities, and perform language processing tasks.'
      catego,
  r: y: 'ai-ml',meth,
  o: d: 'POST',endpoi,
  n: t: '/api/v1/ai/text-analysis',baseU,
  r: l: 'http,
  s://api.ziontechgroup.com',versi,
  o: n: '1.0.0',stat,
  u: s: 'stable',rateLim,
  i: t: '1000 requests/hour',authenticati,
  o: n: 'Bearer Token',paramete,
  r: s: [
  { nam,
  e: 'text', ty,
  p: e: 'string', requir,
  e: d: true, descripti,
  o: n: 'Text to analyze' },
  },
  { na,
  m: e: 'language', ty,
  p: e: 'string', requir,
  e: d: false, descripti,
  o: n: 'Language code (defaul,
  t: auto-detect)' },
  },
  { na,
  m: e: 'features', ty,
  p: e: 'array', requir,
  e: d: false, descripti,
  o: n: 'Analysis features to enable' },
  },
  ]
      requestExamp,
  l: e: {
  tex,
  t: "I love this new AI technology! It's amazing how it can understand context.",langua,
  g: e: "en",featur,
  e: s: [["sentiment", "entities", "keywords"],
  ],
  }
      responseExamp,
  l: e: {
  sentime,
  n: t: { scor,
  e: 0.9, lab,
  e: l: "positive" },
  }
        entiti,
  e: s: [
  { tex,
  t: "AI technology", ty,
  p: e: "technology", confiden,
  c: e: 0.95 },
  },
  ]
        keywor,
  d: s: ["AI", "technology", "amazing", "context"]
        langua,
  g: e: "en"
}
      documentati,
  o: n: 'http,
  s://docs.ziontechgroup.com/api/ai-text-analysis',s,
  d: k: 'http,
  s://github.com/ziontechgroup/ai-sdk',featur,
  e: d: true;
},
  {
  id: 2,na,
  m: e: 'Cloud Resource Management',descripti,
  o: n: 'Manage cloud infrastructure, deploy resources, and monitor performance.'
      catego,
  r: y: 'cloud',meth,
  o: d: 'GET',endpoi,
  n: t: '/api/v1/cloud/resources',baseU,
  r: l: 'http,
  s://api.ziontechgroup.com',versi,
  o: n: '1.0.0',stat,
  u: s: 'stable',rateLim,
  i: t: '500 requests/hour',authenticati,
  o: n: 'API Key',paramete,
  r: s: [
  { nam,
  e: 'region', ty,
  p: e: 'string', requir,
  e: d: false, descripti,
  o: n: 'Cloud region' },
  },
  { na,
  m: e: 'type', ty,
  p: e: 'string', requir,
  e: d: false, descripti,
  o: n: 'Resource type' },
  },
  { na,
  m: e: 'status', ty,
  p: e: 'string', requir,
  e: d: false, descripti,
  o: n: 'Resource status' },
  },
  ]
      requestExamp,
  l: e: {
  regio,
  n: "us-east-1",ty,
  p: e: "compute",stat,
  u: s: "running"
}
      responseExamp,
  l: e: {
  resourc,
  e: s: [
  {
  i,
  d: "i-1234567890abcdef0",na,
  m: e: "web-server-01",ty,
  p: e: "compute",stat,
  u: s: "running",regi,
  o: n: "us-east-1"
},
  ]
        tot,
  a: l: 1;
}
      documentati,
  o: n: 'http,
  s://docs.ziontechgroup.com/api/cloud-resources',s,
  d: k: 'http,
  s://github.com/ziontechgroup/cloud-sdk',featur,
  e: d: false;
},
  {
  id: 3,na,
  m: e: 'Security Threat Detection',descripti,
  o: n: 'Detect and analyze security threats in real-time.',catego,
  r: y: 'security',meth,
  o: d: 'POST',endpoi,
  n: t: '/api/v1/security/threats',baseU,
  r: l: 'http,
  s://api.ziontechgroup.com',versi,
  o: n: '1.0.0',stat,
  u: s: 'beta',rateLim,
  i: t: '200 requests/hour',authenticati,
  o: n: 'OAuth 2.0',paramete,
  r: s: [
  { nam,
  e: 'data', ty,
  p: e: 'object', requir,
  e: d: true, descripti,
  o: n: 'Security event data' },
  },
  { na,
  m: e: 'source', ty,
  p: e: 'string', requir,
  e: d: true, descripti,
  o: n: 'Data source identifier' },
  },
  { na,
  m: e: 'timestamp', ty,
  p: e: 'string', requir,
  e: d: false, descripti,
  o: n: 'Event timestamp' },
  },
  ]
      requestExamp,
  l: e: {
  da,
  t: a: {
  i,
  p: "192.168.1.100",user_age,
  n: t: "Mozilla/5.0...",acti,
  o: n: "login_attempt"
}
        sour,
  c: e: "web_application",timesta,
  m: p: "2024-01-15T,
  1: 0:3,
  0:00Z"
}
      responseExamp,
  l: e: {
  threat_leve,
  l: "low",risk_sco,
  r: e: 0.2,recommendatio,
  n: s: ["Enable 2FA", "Monitor login patterns"]
        detect,
  e: d: false;
}
      documentati,
  o: n: 'http,
  s://docs.ziontechgroup.com/api/security-threats',s,
  d: k: 'http,
  s://github.com/ziontechgroup/security-sdk',featur,
  e: d: true;
},
  {
  id: 4,na,
  m: e: 'Data Analytics Query',descripti,
  o: n: 'Query and analyze large datasets with SQL-like syntax.',catego,
  r: y: 'data',meth,
  o: d: 'POST',endpoi,
  n: t: '/api/v1/data/query',baseU,
  r: l: 'http,
  s://api.ziontechgroup.com',versi,
  o: n: '1.0.0',stat,
  u: s: 'stable',rateLim,
  i: t: '100 requests/hour',authenticati,
  o: n: 'API Key',paramete,
  r: s: [
  { nam,
  e: 'query', ty,
  p: e: 'string', requir,
  e: d: true, descripti,
  o: n: 'SQL query string' },
  },
  { na,
  m: e: 'format', ty,
  p: e: 'string', requir,
  e: d: false, descripti,
  o: n: 'Response format (json, csv, xml)' },
  { na,
  m: e: 'timeout', ty,
  p: e: 'integer', requir,
  e: d: false, descripti,
  o: n: 'Query timeout in seconds' },
  },
  ]
      requestExamp,
  l: e: {
  quer,
  y: "SELECT user_id, COUNT(*) as login_count FROM user_logins WHERE date >= '2024-01-01' GROUP BY user_id ORDER BY login_count DESC LIMIT 10"
        form,
  a: t: "json",timeo,
  u: t: 30;
}
      responseExamp,
  l: e: {
  resul,
  t: s: [
  { user_i,
  d: "user123", login_cou,
  n: t: 45 },
  },
  { user_,
  i: d: "user456", login_cou,
  n: t: 38 },
  },
  ]
        total_ro,
  w: s: 2,execution_ti,
  m: e: 0.15;
}
      documentati,
  o: n: 'http,
  s://docs.ziontechgroup.com/api/data-query',s,
  d: k: 'http,
  s://github.com/ziontechgroup/data-sdk',featur,
  e: d: false;
},
  {
  id: 5,na,
  m: e: 'IoT Device Management',descripti,
  o: n: 'Manage IoT devices, monitor sensors, and control actuators.'
      catego,
  r: y: 'iot',meth,
  o: d: 'GET',endpoi,
  n: t: '/api/v1/iot/devices',baseU,
  r: l: 'http,
  s://api.ziontechgroup.com',versi,
  o: n: '1.0.0',stat,
  u: s: 'stable',rateLim,
  i: t: '300 requests/hour',authenticati,
  o: n: 'API Key',paramete,
  r: s: [
  { nam,
  e: 'location', ty,
  p: e: 'string', requir,
  e: d: false, descripti,
  o: n: 'Device location' },
  },
  { na,
  m: e: 'type', ty,
  p: e: 'string', requir,
  e: d: false, descripti,
  o: n: 'Device type' },
  },
  { na,
  m: e: 'status', ty,
  p: e: 'string', requir,
  e: d: false, descripti,
  o: n: 'Device status' },
  },
  ]
      requestExamp,
  l: e: {
  locatio,
  n: "building-a",ty,
  p: e: "sensor",stat,
  u: s: "active"
}
      responseExamp,
  l: e: {
  devic,
  e: s: [
  {
  i,
  d: "sensor-001",na,
  m: e: "Temperature Sensor A1",ty,
  p: e: "sensor",locati,
  o: n: "building-a",stat,
  u: s: "active",last_readi,
  n: g: 22.5;
},
  ]
        tot,
  a: l: 1;
}
      documentati,
  o: n: 'http,
  s://docs.ziontechgroup.com/api/iot-devices',s,
  d: k: 'http,
  s://github.com/ziontechgroup/iot-sdk',featur,
  e: d: false;
},
  ]
  // Update counts;
  categories.forEach(cat () => {
  cat.count = apis.filter(api => api.category === cat.id).length;
})

  methods.forEach(method () => {
  method.count = apis.filter(api => api.method === method.id).length;
})

  const filteredApis = apis.filter(api () => {
  const matchesSearch = api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         api.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = activeCategory === 'all' || api.category === category.id;
const matchesMethod = activeMethod === 'all' || api.method === method.id;
    return matchesSearch && matchesCategory && matchesMethod;
})

  const getCategoryIcon = (category,
  I: d: string) () => {
  return categories.find(c => c.id === categoryId)?.icon || <Code className="w-5 h-5" />
  }
  const getMethodColor = (meth,
  o: d: string) () => {
  return methods.find(m => m.id === method)?.color || 'text-zion-slate-light'
}
  const getStatusColor = (stat,
  u: s: string) () => {
  switch (status) {
  case 'stable': return 'text-green-400'
      case 'beta': return 'text-yellow-400'
      case 'alpha': return 'text-red-400'
      defaul,
  t: return 'text-zion-slate-light'
},
  }
  const handleApiSelect = (a,
  p: i: any) () => {
  setSelectedApi(api)
    setRequestBody(JSON.stringify(api.requestExample, null, 2))
    setResponseData('')
    setActiveTab('playground')
  }

  const handleTestApi = async () () => {
    if (!selectedApi) return;
    setIsLoading(true)

    // Simulate API call;
    setTimeout(() () => {
      setResponseData(JSON.stringify(selectedApi.responseExample, null, 2))
      setIsLoading(false)
    }, 1500)
  }

  const copyToClipboard = (te,
  x: t: string) () => {
  navigator.clipboard.writeText(text)
  }
  const downloadResponse = () () => {
    if (!responseData) return;
const blob = new Blob([responseData], { ty,
  p: e: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url;
    a.download = `${selectedApi?.name.toLowerCase().replace(/\s+/g, '-')}-response.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */},
  }
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-zion-cyan/20 rounded-full">
              <Code className="w-16 h-16 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            API Playground;
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Explore, test, and integrate with our powerful APIs. Build amazing applications with our comprehensive developer tools.
          </p>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Search and Filters */},
  }
            <div className="mb-8">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input;
                  type="text"
                  value={searchQuery},
  }
                  onChange={(e) => setSearchQuery(e.target.value)},
  }
                  placeholder="Search APIs..."
                  className="className="w-full pl-12 pr-4 py-4 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-zion-slate-light,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan focu,
  s:border-transparent";"
                />
              </div>

              <div className="flex flex-wrap gap-4">
                {/* Categories */},
  }
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
  <button;
                      key={category.id},
  }
                      onClick={onClick={() => setActiveCategory(category.id)},
  },
  }
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
  activeCategory === category.id;
                          ? 'bg-zion-cyan text-zion-slate-dark'
                          : 'bg-zion-slate text-zion-slate-light,
  hove: r: bg-zion-slate-light hove,
  r:text-white'
}`}
                    >
                      {category.icon},
  },
  {category.name} ({category.count})
                    </button>
                  ))}
                </div>

                {/* Methods */},
  }
                <div className="flex flex-wrap gap-2">
                  {methods.map((method) => (
  <button;
                      key={method.id},
  }
                      onClick={onClick={() => setActiveMethod(method.id)},
  },
  }
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
  activeMethod === method.id;
                          ? 'bg-zion-purple text-white'
                          : 'bg-zion-slate text-zion-slate-light,
  hove: r: bg-zion-slate-light hove,
  r:text-white'
}`}
                    >
                      {method.name} ({method.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1,
  l: g:grid-cols-3 gap-8">
              {/* API List */},
  }
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-white mb-6">Available APIs</h2>
                <div className="space-y-4">
                  {filteredApis.map((api) => (
  <div;
                      key={api.id},
  }
                      onClick={onClick={() => handleApiSelect(api)},
  },
  }
                      className={`bg-zion-slate border border-zion-slate-light rounded-lg p-4 cursor-pointer,
  hove: r:border-zion-cyan transition-colors ${
  selectedApi?.id === api.id ? 'border-zion-cyan ring-2 ring-zion-cyan/20' : ''
}`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(api.category)},
  }
                          <span className="text-sm text-zion-slate-light bg-zion-slate-light/20 px-2 py-1 rounded-full">
                            {categories.find(c => c.id === api.category)?.name},
  }
                          </span>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-medium ${getMethodColor(api.method)}`}>
                            {api.method},
  }
                          </div>
                          <div className={`text-xs ${getStatusColor(api.status)}`}>
                            {api.status},
  }
                          </div>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-2">{api.name}</h3>
                      <p className="text-zion-slate-light text-sm mb-3">{api.description}</p>

                      <div className="flex items-center justify-between text-xs text-zion-slate-light">
                        <span>v{api.version}</span>
                        <span>{api.rateLimit}</span>
                      </div>

                      {api.featured && (
  <div className="mt-3">
                          <span className="px-2 py-1 bg-zion-cyan text-zion-slate-dark rounded-full text-xs font-medium">
                            Featured;
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* API Playground */},
  }
              <div className="lg:col-span-2">
                {selectedApi ? (
  <div className="bg-zion-slate border border-zion-slate-light rounded-lg">
                    {/* API Header */},
  }
                    <div className="p-6 border-b border-zion-slate-light">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h2 className="text-2xl font-bold text-white">{selectedApi.name}</h2>
                          <p className="text-zion-slate-light">{selectedApi.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMethodColor(selectedApi.method)}`}>
                            {selectedApi.method},
  }
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedApi.status)}`}>
                            {selectedApi.status},
  }
                          </span>
                        </div>
                      </div>

                      <div className="bg-zion-slate-dark p-4 rounded-lg font-mono text-sm">
                        <div className="text-zion-slate-light mb-2">Endpoi,
  n: t:</div>
                        <div className="text-white">{selectedApi.baseUrl},
  {selectedApi.endpoint}</div>
                      </div>
                    </div>

                    {/* Tabs */},
  }
                    <div className="flex border-b border-zion-slate-light">
                      <button;
                        onClick={onClick={() => setActiveTab('playground')},
  },
  }
                        className={`px-6 py-3 font-medium transition-colors ${
  activeTab === 'playground'
                            ? 'text-zion-cyan border-b-2 border-zion-cyan'
                            : 'text-zion-slate-light,
  hove: r:text-white'
}`}
                      >
                        Playground;
                      </button>
                      <button;
                        onClick={onClick={() => setActiveTab('docs')},
  },
  }
                        className={`px-6 py-3 font-medium transition-colors ${
  activeTab === 'docs'
                            ? 'text-zion-cyan border-b-2 border-zion-cyan'
                            : 'text-zion-slate-light,
  hove: r:text-white'
}`}
                      >
                        Documentation;
                      </button>
                      <button;
                        onClick={onClick={() => setActiveTab('sdk')},
  },
  }
                        className={`px-6 py-3 font-medium transition-colors ${
  activeTab === 'sdk'
                            ? 'text-zion-cyan border-b-2 border-zion-cyan'
                            : 'text-zion-slate-light,
  hove: r:text-white'
}`}
                      >
                        SDK;
                      </button>
                    </div>

                    {/* Tab Content */},
  }
                    <div className="p-6">
                      {activeTab === 'playground' && (
  <div className="space-y-6">
                          {/* Request */},
  }
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Request</h3>
                            <div className="bg-zion-slate-dark p-4 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-zion-slate-light text-sm">Request Body (JSON)</span>
                                <button;
                                  onClick={onClick={() => copyToClipboard(requestBody)},
  },
  }
                                  className="className="text-zion-cyan,
  hove: r:text-zion-cyan-light transition-colors";"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
                              </div>
                              <textarea;
                                value={requestBody},
  }
                                onChange={(e) => setRequestBody(e.target.value)},
  }
                                className="className="w-full h-32 bg-zion-slate border border-zion-slate-light rounded p-3 text-white font-mono text-sm resize-none,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-zion-cyan";"
                                placeholder="Enter request body..."
                              />
                            </div>
                          </div>

                          {/* Test Button */},
  }
                          <div className="flex justify-center">
                            <button;
                              onClick={onClick={handleTestApi},
  },
  }
                              disabled={isLoading},
  }
                              className="className="bg-zion-cyan text-zion-slate-dark px-8 py-3 rounded-lg font-semibold,
  hove: r: bg-zion-cyan-light transition-colors,
  disable: d:opacity-50 disable,
  d:cursor-not-allowed inline-flex items-center gap-2";"
                            >
                              {isLoading ? (
  <>
                                  <RefreshCw className="w-5 h-5 animate-spin" />
                                  Testing...
                                </>
                              ) : (
  <>
                                  <Play className="w-5 h-5" />
                                  Test API;
                                </>
                              )}
                            </button>
                          </div>

                          {/* Response */},
  },
  {responseData && (
  <div>
                              <h3 className="text-lg font-semibold text-white mb-3">Response</h3>
                              <div className="bg-zion-slate-dark p-4 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-zion-slate-light text-sm">Response Data</span>
                                  <div className="flex items-center gap-2">
                                    <button;
                                      onClick={onClick={() => copyToClipboard(responseData)},
  },
  }
                                      className="className="text-zion-cyan,
  hove: r:text-zion-cyan-light transition-colors";"
                                    >
                                      <Copy className="w-4 h-4" />
                                    </button>
                                    <button;
                                      onClick={onClick={downloadResponse},
  },
  }
                                      className="className="text-zion-cyan,
  hove: r:text-zion-cyan-light transition-colors";"
                                    >
                                      <Download className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>
                                <pre className="text-white font-mono text-sm overflow-x-auto">
                                  {responseData},
  }
                                </pre>
                              </div>
                            </div>
                          )}
                        </div>
                      )},
  {activeTab === 'docs' && (
  <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Parameters</h3>
                            <div className="space-y-3">
                              {selectedApi.parameters.map((param, index) => (
  <div key={index} className="bg-zion-slate-dark p-4 rounded-lg">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-white font-medium">{param.name}</span>
                                    <div className="flex items-center gap-2">
                                      <span className={`px-2 py-1 rounded text-xs ${
  param.required ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
}`}>
                                        {param.required ? 'Required' : 'Optional'},
  }
                                      </span>
                                      <span className="text-zion-slate-light text-sm">{param.type}</span>
                                    </div>
                                  </div>
                                  <p className="text-zion-slate-light text-sm">{param.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <a;
                              href={selectedApi.documentation},
  }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="className="bg-zion-purple text-white px-6 py-3 rounded-lg font-semibold,
  hove: r:bg-zion-purple-light transition-colors inline-flex items-center gap-2";"
                            >
                              <BookOpen className="w-5 h-5" />
                              View Full Documentation;
                            </a>
                          </div>
                        </div>
                      )},
  {activeTab === 'sdk' && (
  <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">SDK & Libraries</h3>
                            <div className="bg-zion-slate-dark p-6 rounded-lg">
                              <div className="text-center">
                                <Code className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                                <h4 className="text-xl font-semibold text-white mb-2">Official SDK</h4>
                                <p className="text-zion-slate-light mb-4">
                                  Get started quickly with our official SDKs and libraries;
                                </p>
                                <a;
                                  href={selectedApi.sdk},
  }
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="className="bg-zion-cyan text-zion-slate-dark px-6 py-3 rounded-lg font-semibold,
  hove: r:bg-zion-cyan-light transition-colors inline-flex items-center gap-2";"
                                >
                                  <ExternalLink className="w-5 h-5" />
                                  View SDK;
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
  <div className="bg-zion-slate border border-zion-slate-light rounded-lg p-12 text-center">
                    <Code className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Select an API</h3>
                    <p className="text-zion-slate-light">
                      Choose an API from the list to start testing and exploring;
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */},
  }
      <div className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Get your API keys, explore our documentation, and start building with our powerful APIs.
          </p>
          <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-zion-cyan text-zion-slate-dark px-8 py-3 rounded-lg font-semibold,
  hove: r:bg-zion-cyan-light transition-colors">
              Get API Keys;
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold,
  hove: r:bg-white hove,
  r:text-zion-slate-dark transition-colors">
              View Documentation;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}