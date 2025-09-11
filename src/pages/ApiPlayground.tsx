import React, { useState } from 'react';
import { Code, Play, Copy, Download, BookOpen, Search, Filter, ExternalLink, ArrowRight, Brain, Cloud, Shield, Database, Zap, Globe, Target, TrendingUp, Award, CheckCircle, Calendar, MapPin, DollarSign, FileText, Lightbulb, Microscope, Rocket, Network, Cpu, Lock, BarChart3, Palette, Smartphone, Eye, Star, Terminal, Settings, Zap as ZapIcon, RefreshCw, CheckCircle2, AlertCircle, Info } from 'lucide-react';

export default function ApiPlayground() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeMethod, setActiveMethod] = useState('all');
  const [selectedApi, setSelectedApi] = useState<any>(null);
  const [requestBody, setRequestBody] = useState('');
  const [responseData, setResponseData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('playground');

  const categories = [
    { id: 'all', name: 'All Categories', icon: <Code className="w-5 h-5" />, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: 8 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: <Cloud className="w-5 h-5" />, count: 6 },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: 5 },
    { id: 'data', name: 'Data & Analytics', icon: <Database className="w-5 h-5" />, count: 7 },
    { id: 'iot', name: 'IoT & Edge', icon: <Network className="w-5 h-5" />, count: 4 }
  ];

  const methods = [
    { id: 'all', name: 'All Methods', count: 0 },
    { id: 'GET', name: 'GET', count: 0, color: 'text-green-400' },
    { id: 'POST', name: 'POST', count: 0, color: 'text-blue-400' },
    { id: 'PUT', name: 'PUT', count: 0, color: 'text-yellow-400' },
    { id: 'DELETE', name: 'DELETE', count: 0, color: 'text-red-400' }
  ];

  const apis = [
    {
      id: 1,
      name: 'AI Text Analysis',
      description: 'Analyze text sentiment, extract entities, and perform language processing tasks.',
      category: 'ai-ml',
      method: 'POST',
      endpoint: '/api/v1/ai/text-analysis',
      baseUrl: 'https://api.ziontechgroup.com',
      version: '1.0.0',
      status: 'stable',
      rateLimit: '1000 requests/hour',
      authentication: 'Bearer Token',
      parameters: [
        { name: 'text', type: 'string', required: true, description: 'Text to analyze' },
        { name: 'language', type: 'string', required: false, description: 'Language code (default: auto-detect)' },
        { name: 'features', type: 'array', required: false, description: 'Analysis features to enable' }
      ],
      requestExample: {
        text: "I love this new AI technology! It's amazing how it can understand context.",
        language: "en",
        features: ["sentiment", "entities", "keywords"]
      },
      responseExample: {
        sentiment: { score: 0.9, label: "positive" },
        entities: [
          { text: "AI technology", type: "technology", confidence: 0.95 }
        ],
        keywords: ["AI", "technology", "amazing", "context"],
        language: "en"
      },
      documentation: 'https://docs.ziontechgroup.com/api/ai-text-analysis',
      sdk: 'https://github.com/ziontechgroup/ai-sdk',
      featured: true
    },
    {
      id: 2,
      name: 'Cloud Resource Management',
      description: 'Manage cloud infrastructure, deploy resources, and monitor performance.',
      category: 'cloud',
      method: 'GET',
      endpoint: '/api/v1/cloud/resources',
      baseUrl: 'https://api.ziontechgroup.com',
      version: '1.0.0',
      status: 'stable',
      rateLimit: '500 requests/hour',
      authentication: 'API Key',
      parameters: [
        { name: 'region', type: 'string', required: false, description: 'Cloud region' },
        { name: 'type', type: 'string', required: false, description: 'Resource type' },
        { name: 'status', type: 'string', required: false, description: 'Resource status' }
      ],
      requestExample: {
        region: "us-east-1",
        type: "compute",
        status: "running"
      },
      responseExample: {
        resources: [
          {
            id: "i-1234567890abcdef0",
            name: "web-server-01",
            type: "compute",
            status: "running",
            region: "us-east-1"
          }
        ],
        total: 1
      },
      documentation: 'https://docs.ziontechgroup.com/api/cloud-resources',
      sdk: 'https://github.com/ziontechgroup/cloud-sdk',
      featured: false
    },
    {
      id: 3,
      name: 'Security Threat Detection',
      description: 'Detect and analyze security threats in real-time.',
      category: 'security',
      method: 'POST',
      endpoint: '/api/v1/security/threats',
      baseUrl: 'https://api.ziontechgroup.com',
      version: '1.0.0',
      status: 'beta',
      rateLimit: '200 requests/hour',
      authentication: 'OAuth 2.0',
      parameters: [
        { name: 'data', type: 'object', required: true, description: 'Security event data' },
        { name: 'source', type: 'string', required: true, description: 'Data source identifier' },
        { name: 'timestamp', type: 'string', required: false, description: 'Event timestamp' }
      ],
      requestExample: {
        data: {
          ip: "192.168.1.100",
          user_agent: "Mozilla/5.0...",
          action: "login_attempt"
        },
        source: "web_application",
        timestamp: "2024-01-15T10:30:00Z"
      },
      responseExample: {
        threat_level: "low",
        risk_score: 0.2,
        recommendations: ["Enable 2FA", "Monitor login patterns"],
        detected: false
      },
      documentation: 'https://docs.ziontechgroup.com/api/security-threats',
      sdk: 'https://github.com/ziontechgroup/security-sdk',
      featured: true
    },
    {
      id: 4,
      name: 'Data Analytics Query',
      description: 'Query and analyze large datasets with SQL-like syntax.',
      category: 'data',
      method: 'POST',
      endpoint: '/api/v1/data/query',
      baseUrl: 'https://api.ziontechgroup.com',
      version: '1.0.0',
      status: 'stable',
      rateLimit: '100 requests/hour',
      authentication: 'API Key',
      parameters: [
        { name: 'query', type: 'string', required: true, description: 'SQL query string' },
        { name: 'format', type: 'string', required: false, description: 'Response format (json, csv, xml)' },
        { name: 'timeout', type: 'integer', required: false, description: 'Query timeout in seconds' }
      ],
      requestExample: {
        query: "SELECT user_id, COUNT(*) as login_count FROM user_logins WHERE date >= '2024-01-01' GROUP BY user_id ORDER BY login_count DESC LIMIT 10",
        format: "json",
        timeout: 30
      },
      responseExample: {
        results: [
          { user_id: "user123", login_count: 45 },
          { user_id: "user456", login_count: 38 }
        ],
        total_rows: 2,
        execution_time: 0.15
      },
      documentation: 'https://docs.ziontechgroup.com/api/data-query',
      sdk: 'https://github.com/ziontechgroup/data-sdk',
      featured: false
    },
    {
      id: 5,
      name: 'IoT Device Management',
      description: 'Manage IoT devices, monitor sensors, and control actuators.',
      category: 'iot',
      method: 'GET',
      endpoint: '/api/v1/iot/devices',
      baseUrl: 'https://api.ziontechgroup.com',
      version: '1.0.0',
      status: 'stable',
      rateLimit: '300 requests/hour',
      authentication: 'API Key',
      parameters: [
        { name: 'location', type: 'string', required: false, description: 'Device location' },
        { name: 'type', type: 'string', required: false, description: 'Device type' },
        { name: 'status', type: 'string', required: false, description: 'Device status' }
      ],
      requestExample: {
        location: "building-a",
        type: "sensor",
        status: "active"
      },
      responseExample: {
        devices: [
          {
            id: "sensor-001",
            name: "Temperature Sensor A1",
            type: "sensor",
            location: "building-a",
            status: "active",
            last_reading: 22.5
          }
        ],
        total: 1
      },
      documentation: 'https://docs.ziontechgroup.com/api/iot-devices',
      sdk: 'https://github.com/ziontechgroup/iot-sdk',
      featured: false
    }
  ];

  // Update counts
  categories.forEach(cat => {
    cat.count = apis.filter(api => api.category === cat.id).length;
  });

  methods.forEach(method => {
    method.count = apis.filter(api => api.method === method.id).length;
  });

  const filteredApis = apis.filter(api => {
    const matchesSearch = api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         api.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || api.category === category.id;
    const matchesMethod = activeMethod === 'all' || api.method === method.id;
    
    return matchesSearch && matchesCategory && matchesMethod;
  });

  const getCategoryIcon = (categoryId: string) => {
    return categories.find(c => c.id === categoryId)?.icon || <Code className="w-5 h-5" />;
  };

  const getMethodColor = (method: string) => {
    return methods.find(m => m.id === method)?.color || 'text-zion-slate-light';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable': return 'text-green-400';
      case 'beta': return 'text-yellow-400';
      case 'alpha': return 'text-red-400';
      default: return 'text-zion-slate-light';
    }
  };

  const handleApiSelect = (api: any) => {
    setSelectedApi(api);
    setRequestBody(JSON.stringify(api.requestExample, null, 2));
    setResponseData('');
    setActiveTab('playground');
  };

  const handleTestApi = async () => {
    if (!selectedApi) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setResponseData(JSON.stringify(selectedApi.responseExample, null, 2));
      setIsLoading(false);
    }, 1500);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const downloadResponse = () => {
    if (!responseData) return;
    
    const blob = new Blob([responseData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedApi?.name.toLowerCase().replace(/\s+/g, '-')}-response.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-zion-cyan/20 rounded-full">
              <Code className="w-16 h-16 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            API Playground
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Explore, test, and integrate with our powerful APIs. Build amazing applications with our comprehensive developer tools.
          </p>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Search and Filters */}
            <div className="mb-8">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search APIs..."
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>

              <div className="flex flex-wrap gap-4">
                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                        activeCategory === category.id
                          ? 'bg-zion-cyan text-zion-slate-dark'
                          : 'bg-zion-slate text-zion-slate-light hover:bg-zion-slate-light hover:text-white'
                      }`}
                    >
                      {category.icon}
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>

                {/* Methods */}
                <div className="flex flex-wrap gap-2">
                  {methods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setActiveMethod(method.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        activeMethod === method.id
                          ? 'bg-zion-purple text-white'
                          : 'bg-zion-slate text-zion-slate-light hover:bg-zion-slate-light hover:text-white'
                      }`}
                    >
                      {method.name} ({method.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* API List */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-white mb-6">Available APIs</h2>
                <div className="space-y-4">
                  {filteredApis.map((api) => (
                    <div
                      key={api.id}
                      onClick={() => handleApiSelect(api)}
                      className={`bg-zion-slate border border-zion-slate-light rounded-lg p-4 cursor-pointer hover:border-zion-cyan transition-colors ${
                        selectedApi?.id === api.id ? 'border-zion-cyan ring-2 ring-zion-cyan/20' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(api.category)}
                          <span className="text-sm text-zion-slate-light bg-zion-slate-light/20 px-2 py-1 rounded-full">
                            {categories.find(c => c.id === api.category)?.name}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-medium ${getMethodColor(api.method)}`}>
                            {api.method}
                          </div>
                          <div className={`text-xs ${getStatusColor(api.status)}`}>
                            {api.status}
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
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* API Playground */}
              <div className="lg:col-span-2">
                {selectedApi ? (
                  <div className="bg-zion-slate border border-zion-slate-light rounded-lg">
                    {/* API Header */}
                    <div className="p-6 border-b border-zion-slate-light">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h2 className="text-2xl font-bold text-white">{selectedApi.name}</h2>
                          <p className="text-zion-slate-light">{selectedApi.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMethodColor(selectedApi.method)}`}>
                            {selectedApi.method}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedApi.status)}`}>
                            {selectedApi.status}
                          </span>
                        </div>
                      </div>

                      <div className="bg-zion-slate-dark p-4 rounded-lg font-mono text-sm">
                        <div className="text-zion-slate-light mb-2">Endpoint:</div>
                        <div className="text-white">{selectedApi.baseUrl}{selectedApi.endpoint}</div>
                      </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-zion-slate-light">
                      <button
                        onClick={() => setActiveTab('playground')}
                        className={`px-6 py-3 font-medium transition-colors ${
                          activeTab === 'playground'
                            ? 'text-zion-cyan border-b-2 border-zion-cyan'
                            : 'text-zion-slate-light hover:text-white'
                        }`}
                      >
                        Playground
                      </button>
                      <button
                        onClick={() => setActiveTab('docs')}
                        className={`px-6 py-3 font-medium transition-colors ${
                          activeTab === 'docs'
                            ? 'text-zion-cyan border-b-2 border-zion-cyan'
                            : 'text-zion-slate-light hover:text-white'
                        }`}
                      >
                        Documentation
                      </button>
                      <button
                        onClick={() => setActiveTab('sdk')}
                        className={`px-6 py-3 font-medium transition-colors ${
                          activeTab === 'sdk'
                            ? 'text-zion-cyan border-b-2 border-zion-cyan'
                            : 'text-zion-slate-light hover:text-white'
                          }`}
                      >
                        SDK
                      </button>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6">
                      {activeTab === 'playground' && (
                        <div className="space-y-6">
                          {/* Request */}
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Request</h3>
                            <div className="bg-zion-slate-dark p-4 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-zion-slate-light text-sm">Request Body (JSON)</span>
                                <button
                                  onClick={() => copyToClipboard(requestBody)}
                                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
                              </div>
                              <textarea
                                value={requestBody}
                                onChange={(e) => setRequestBody(e.target.value)}
                                className="w-full h-32 bg-zion-slate border border-zion-slate-light rounded p-3 text-white font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                                placeholder="Enter request body..."
                              />
                            </div>
                          </div>

                          {/* Test Button */}
                          <div className="flex justify-center">
                            <button
                              onClick={handleTestApi}
                              disabled={isLoading}
                              className="bg-zion-cyan text-zion-slate-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
                            >
                              {isLoading ? (
                                <>
                                  <RefreshCw className="w-5 h-5 animate-spin" />
                                  Testing...
                                </>
                              ) : (
                                <>
                                  <Play className="w-5 h-5" />
                                  Test API
                                </>
                              )}
                            </button>
                          </div>

                          {/* Response */}
                          {responseData && (
                            <div>
                              <h3 className="text-lg font-semibold text-white mb-3">Response</h3>
                              <div className="bg-zion-slate-dark p-4 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-zion-slate-light text-sm">Response Data</span>
                                  <div className="flex items-center gap-2">
                                    <button
                                      onClick={() => copyToClipboard(responseData)}
                                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                                    >
                                      <Copy className="w-4 h-4" />
                                    </button>
                                    <button
                                      onClick={downloadResponse}
                                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                                    >
                                      <Download className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>
                                <pre className="text-white font-mono text-sm overflow-x-auto">
                                  {responseData}
                                </pre>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

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
                                        {param.required ? 'Required' : 'Optional'}
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
                            <a
                              href={selectedApi.documentation}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-zion-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-zion-purple-light transition-colors inline-flex items-center gap-2"
                            >
                              <BookOpen className="w-5 h-5" />
                              View Full Documentation
                            </a>
                          </div>
                        </div>
                      )}

                      {activeTab === 'sdk' && (
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">SDK & Libraries</h3>
                            <div className="bg-zion-slate-dark p-6 rounded-lg">
                              <div className="text-center">
                                <Code className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                                <h4 className="text-xl font-semibold text-white mb-2">Official SDK</h4>
                                <p className="text-zion-slate-light mb-4">
                                  Get started quickly with our official SDKs and libraries
                                </p>
                                <a
                                  href={selectedApi.sdk}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-zion-cyan text-zion-slate-dark px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors inline-flex items-center gap-2"
                                >
                                  <ExternalLink className="w-5 h-5" />
                                  View SDK
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
                      Choose an API from the list to start testing and exploring
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Get your API keys, explore our documentation, and start building with our powerful APIs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-zion-cyan text-zion-slate-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
              Get API Keys
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-slate-dark transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}