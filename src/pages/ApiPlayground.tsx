import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import {
  Code,
  Play,
  Copy,
  Download,
  BookOpen,
  Search,
  Filter,
  ExternalLink,
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Database,
  Zap,
  Globe,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  Calendar,
  MapPin,
  DollarSign,
  FileText,
  Lightbulb,
  Microscope,
  Rocket,
  Network,
  Cpu,
  Lock,
  BarChart3,
  Palette,
  Smartphone,
  Eye,
  Star,
  Terminal,
  Settings,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Info,
  BarChart,
  PieChart,
  LineChart,
  Tool,
  Briefcase,
  Home,
  Building,
  Car,
  Truck,
  Plane,
  Ship,
  Leaf,
  Gauge,
  ShieldAlert,
  UserCheck,
  Users2,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserClock,
  UserStar,
  UserHeart,
  UserShield,
  UserZap,
  UserTrendingUp,
  UserTrendingDown,
  UserPlus2,
  UserMinus2,
  UserX2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  UserCheck3,
  UserClock2,
  UserStar2,
  UserHeart2,
  UserShield2,
  UserZap2,
  UserTrendingUp2,
  UserTrendingDown2,
  Key
} from 'lucide-react';

interface ApiEndpoint {
  id: number;
  name: string;
  description: string;
  category: string;
  method: string;
  endpoint: string;
  baseUrl: string;
  version: string;
  status: string;
  rateLimit: string;
  authentication: string;
  parameters: ApiParameter[];
  requestExample: any;
  responseExample: any;
  documentation: string;
  sdk: string;
  featured: boolean;
}

interface ApiParameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

const ApiPlayground: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeMethod, setActiveMethod] = useState('all');
  const [selectedApi, setSelectedApi] = useState<ApiEndpoint | null>(null);
  const [requestBody, setRequestBody] = useState('');
  const [responseData, setResponseData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('playground');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Code, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 6 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 5 },
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 7 },
    { id: 'iot', name: 'IoT & Edge', icon: Network, count: 4 }
  ];

  const methods = [
    { id: 'all', name: 'All Methods', count: 0 },
    { id: 'GET', name: 'GET', count: 0, color: 'text-green-400' },
    { id: 'POST', name: 'POST', count: 0, color: 'text-blue-400' },
    { id: 'PUT', name: 'PUT', count: 0, color: 'text-yellow-400' },
    { id: 'DELETE', name: 'DELETE', count: 0, color: 'text-red-400' }
  ];

  const apis: ApiEndpoint[] = [
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
        ]
      },
      documentation: 'https://docs.ziontechgroup.com/api/cloud-resources',
      sdk: 'https://github.com/ziontechgroup/cloud-sdk',
      featured: false
    },
    {
      id: 3,
      name: 'Cybersecurity Threat Detection',
      description: 'Detect and analyze security threats in real-time.',
      category: 'security',
      method: 'POST',
      endpoint: '/api/v1/security/threats',
      baseUrl: 'https://api.ziontechgroup.com',
      version: '1.0.0',
      status: 'stable',
      rateLimit: '200 requests/hour',
      authentication: 'Bearer Token',
      parameters: [
        { name: 'data', type: 'object', required: true, description: 'Security event data' },
        { name: 'source', type: 'string', required: true, description: 'Data source identifier' }
      ],
      requestExample: {
        data: {
          event_type: "login_attempt",
          ip_address: "192.168.1.100",
          user_agent: "Mozilla/5.0...",
          timestamp: "2024-01-15T10:30:00Z"
        },
        source: "web_application"
      },
      responseExample: {
        threat_level: "medium",
        risk_score: 0.7,
        recommendations: [
          "Enable two-factor authentication",
          "Monitor login patterns"
        ],
        blocked: false
      },
      documentation: 'https://docs.ziontechgroup.com/api/security-threats',
      sdk: 'https://github.com/ziontechgroup/security-sdk',
      featured: true
    }
  ];

  const filteredApis = apis.filter(api => {
    const matchesSearch = api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         api.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || api.category === activeCategory;
    const matchesMethod = activeMethod === 'all' || api.method === activeMethod;
    
    return matchesSearch && matchesCategory && matchesMethod;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.icon : Code;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : 'General';
  };

  const getMethodColor = (method: string) => {
    const methodInfo = methods.find(m => m.id === method);
    return methodInfo ? methodInfo.color : 'text-gray-400';
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const testApi = async () => {
    if (!selectedApi) return;
    
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setResponseData(JSON.stringify(selectedApi.responseExample, null, 2));
    } catch (error) {
      setResponseData(JSON.stringify({ error: 'Request failed' }, null, 2));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="API Playground - Zion Tech Group"
        description="Test and explore our comprehensive API endpoints for AI, cloud computing, cybersecurity, and data analytics. Interactive playground with real-time testing."
        keywords="API playground, API testing, REST API, AI API, cloud API, cybersecurity API, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              API Playground
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Test and explore our comprehensive API endpoints for AI, cloud computing, 
              cybersecurity, and data analytics with our interactive playground.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Search APIs</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search APIs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Method</label>
                <select
                  value={activeMethod}
                  onChange={(e) => setActiveMethod(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {methods.map(method => (
                    <option key={method.id} value={method.id}>
                      {method.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* API List and Playground */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* API List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Available APIs</h2>
              <div className="space-y-4">
                {filteredApis.map((api, index) => (
                  <motion.div
                    key={api.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className={`bg-slate-800/80 backdrop-blur-sm rounded-xl border transition-all duration-300 cursor-pointer ${
                      selectedApi?.id === api.id 
                        ? 'border-blue-500 bg-blue-500/10' 
                        : 'border-slate-600/20 hover:border-slate-500/40'
                    }`}
                    onClick={() => setSelectedApi(api)}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded ${getMethodColor(api.method)}`}>
                            {api.method}
                          </span>
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded">
                            {getCategoryName(api.category)}
                          </span>
                          {api.featured && (
                            <span className="px-2 py-1 bg-yellow-500 text-yellow-900 text-xs font-medium rounded">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-gray-400">
                          v{api.version}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2">{api.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{api.description}</p>

                      <div className="text-xs text-gray-400 font-mono bg-slate-900/50 p-2 rounded mb-3">
                        {api.baseUrl}{api.endpoint}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>Rate: {api.rateLimit}</span>
                        <span>Auth: {api.authentication}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* API Playground */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">API Playground</h2>
              
              {selectedApi ? (
                <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-600/20 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">{selectedApi.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${getMethodColor(selectedApi.method)}`}>
                        {selectedApi.method}
                      </span>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded">
                        {selectedApi.status}
                      </span>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex border-b border-slate-600 mb-6">
                    <button
                      onClick={() => setActiveTab('playground')}
                      className={`px-4 py-2 font-medium transition-colors ${
                        activeTab === 'playground'
                          ? 'text-blue-400 border-b-2 border-blue-400'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Playground
                    </button>
                    <button
                      onClick={() => setActiveTab('docs')}
                      className={`px-4 py-2 font-medium transition-colors ${
                        activeTab === 'docs'
                          ? 'text-blue-400 border-b-2 border-blue-400'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Documentation
                    </button>
                  </div>

                  {activeTab === 'playground' && (
                    <div className="space-y-6">
                      {/* Request Body */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Request Body (JSON)
                        </label>
                        <textarea
                          value={requestBody || JSON.stringify(selectedApi.requestExample, null, 2)}
                          onChange={(e) => setRequestBody(e.target.value)}
                          className="w-full h-32 px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter JSON request body..."
                        />
                      </div>

                      {/* Test Button */}
                      <button
                        onClick={testApi}
                        disabled={isLoading}
                        className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
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

                      {/* Response */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="block text-sm font-medium text-gray-300">
                            Response
                          </label>
                          <button
                            onClick={() => copyToClipboard(responseData)}
                            className="flex items-center gap-1 text-xs text-gray-400 hover:text-white"
                          >
                            <Copy className="w-4 h-4" />
                            Copy
                          </button>
                        </div>
                        <div className="w-full h-32 px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white font-mono text-sm overflow-auto">
                          {responseData || 'Response will appear here...'}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'docs' && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Parameters</h4>
                        <div className="space-y-2">
                          {selectedApi.parameters.map((param, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-white font-medium">{param.name}</span>
                                  <span className="text-xs text-gray-400">({param.type})</span>
                                  {param.required && (
                                    <span className="px-1 py-0.5 bg-red-500 text-white text-xs rounded">
                                      Required
                                    </span>
                                  )}
                                </div>
                                <p className="text-gray-300 text-sm">{param.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={selectedApi.documentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <BookOpen className="w-4 h-4" />
                          Documentation
                        </a>
                        <a
                          href={selectedApi.sdk}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <Code className="w-4 h-4" />
                          SDK
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-600/20 p-6 text-center">
                  <Code className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-300">Select an API from the list to start testing</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Integrate?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our APIs today. Sign up for an API key and start building 
              powerful applications with our AI, cloud, and security services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
                <Key className="w-5 h-5 inline mr-2" />
                Get API Key
              </button>
              <Link
                to="/documentation"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
              >
                <BookOpen className="w-5 h-5 inline mr-2" />
                View Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ApiPlayground;
