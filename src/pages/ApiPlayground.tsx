import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
<<<<<<< HEAD
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  Info
} from 'lucide-react';

=======
  Zap as ZapIcon, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  Info,
  ChevronDown,
  ChevronUp,
  Heart,
  Share2,
  Bookmark,
  MessageCircle,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Navigation,
  Compass,
  Home,
  ShoppingCart,
  CreditCard,
  Wallet,
  Receipt,
  Calculator,
  TrendingDown,
  MinusCircle,
  PlusCircle,
  AlertTriangle,
  HelpCircle,
  CheckSquare,
  Square,
  Radio,
  ToggleLeft,
  ToggleRight,
  Sliders,
  SlidersHorizontal,
  Volume1,
  Volume3,
  Mic,
  MicOff,
  Headphones,
  Speaker,
  SpeakerOff,
  Play as PlayIcon,
  Pause,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle as ShuffleIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  Rewind as RewindIcon,
  FastForward as FastForwardIcon,
  Repeat as RepeatIcon,
  Repeat1 as Repeat1Icon,
  Shuffle as ShuffleIcon2,
  SkipBack as SkipBackIcon2,
  SkipForward as SkipForwardIcon2,
  Rewind as RewindIcon2,
  FastForward as FastForwardIcon2,
  Repeat as RepeatIcon2,
  Repeat1 as Repeat1Icon2
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
  status: 'stable' | 'beta' | 'alpha' | 'deprecated';
  rateLimit: string;
  authentication: string;
  parameters: ApiParameter[];
  requestExample: any;
  responseExample: any;
  documentation: string;
  sdk: string;
  featured?: boolean;
}

interface ApiParameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  count: number;
}

interface Method {
  id: string;
  name: string;
  count: number;
  color: string;
}

>>>>>>> cursor/add-new-services-and-advertise-them-650b
export default function ApiPlayground() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeMethod, setActiveMethod] = useState('all');
  const [selectedApi, setSelectedApi] = useState<ApiEndpoint | null>(null);
  const [requestBody, setRequestBody] = useState('');
  const [responseData, setResponseData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('playground');

<<<<<<< HEAD
  const categories = [
    { id: 'all', name: 'All Categories', icon: Code, count: 0 },
=======
  const categories: Category[] = [
    { id: 'all', name: 'All Categories', icon: Code, count: 30 },
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 6 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 5 },
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 7 },
    { id: 'iot', name: 'IoT & Edge', icon: Network, count: 4 }
  ];

<<<<<<< HEAD
  const methods = [
    { id: 'all', name: 'All Methods', count: 0 },
    { id: 'GET', name: 'GET', count: 0, color: 'text-green-400' },
    { id: 'POST', name: 'POST', count: 0, color: 'text-blue-400' },
    { id: 'PUT', name: 'PUT', count: 0, color: 'text-yellow-400' },
    { id: 'DELETE', name: 'DELETE', count: 0, color: 'text-red-400' }
=======
  const methods: Method[] = [
    { id: 'all', name: 'All Methods', count: 30 },
    { id: 'GET', name: 'GET', count: 12, color: 'text-green-400' },
    { id: 'POST', name: 'POST', count: 10, color: 'text-blue-400' },
    { id: 'PUT', name: 'PUT', count: 4, color: 'text-yellow-400' },
    { id: 'DELETE', name: 'DELETE', count: 4, color: 'text-red-400' }
>>>>>>> cursor/add-new-services-and-advertise-them-650b
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
        ],
        total: 1,
        region: "us-east-1"
      },
      documentation: 'https://docs.ziontechgroup.com/api/cloud-resources',
      sdk: 'https://github.com/ziontechgroup/cloud-sdk'
    },
    {
      id: 3,
      name: 'Security Threat Detection',
      description: 'Real-time threat detection and security monitoring for your applications.',
      category: 'security',
      method: 'POST',
      endpoint: '/api/v1/security/threats',
      baseUrl: 'https://api.ziontechgroup.com',
      version: '1.0.0',
      status: 'stable',
      rateLimit: '2000 requests/hour',
      authentication: 'Bearer Token',
      parameters: [
        { name: 'event', type: 'object', required: true, description: 'Security event data' },
        { name: 'source', type: 'string', required: true, description: 'Event source identifier' },
        { name: 'timestamp', type: 'string', required: false, description: 'Event timestamp (ISO 8601)' }
      ],
      requestExample: {
        event: {
          type: "login_attempt",
          user_id: "user123",
          ip_address: "192.168.1.100",
          user_agent: "Mozilla/5.0...",
          success: false
        },
        source: "web_application",
        timestamp: "2025-01-15T10:30:00Z"
      },
      responseExample: {
        threat_level: "medium",
        risk_score: 0.7,
        recommendations: [
          "Enable two-factor authentication",
          "Review login patterns",
          "Consider IP whitelisting"
        ],
        action_required: true
      },
      documentation: 'https://docs.ziontechgroup.com/api/security-threats',
      sdk: 'https://github.com/ziontechgroup/security-sdk',
      featured: true
    },
    {
      id: 4,
      name: 'Data Analytics Query',
      description: 'Query and analyze large datasets with SQL-like syntax and real-time processing.',
      category: 'data',
      method: 'POST',
      endpoint: '/api/v1/data/query',
      baseUrl: 'https://api.ziontechgroup.com',
      version: '1.0.0',
      status: 'beta',
      rateLimit: '100 requests/hour',
      authentication: 'Bearer Token',
      parameters: [
        { name: 'query', type: 'string', required: true, description: 'SQL-like query string' },
        { name: 'dataset', type: 'string', required: true, description: 'Target dataset identifier' },
        { name: 'format', type: 'string', required: false, description: 'Response format (json, csv, xml)' }
      ],
      requestExample: {
        query: "SELECT user_id, COUNT(*) as login_count FROM user_logins WHERE date >= '2025-01-01' GROUP BY user_id ORDER BY login_count DESC LIMIT 10",
        dataset: "user_analytics",
        format: "json"
      },
      responseExample: {
        results: [
          { user_id: "user123", login_count: 45 },
          { user_id: "user456", login_count: 38 },
          { user_id: "user789", login_count: 32 }
        ],
        total_rows: 10,
        execution_time: "0.245s",
        dataset: "user_analytics"
      },
      documentation: 'https://docs.ziontechgroup.com/api/data-query',
<<<<<<< HEAD
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

    const matchesCategory = activeCategory === 'all' || api.category === activeCategory;
    const matchesMethod = activeMethod === 'all' || api.method === activeMethod;

    return matchesSearch && matchesCategory && matchesMethod;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.icon : Code;
  };

  const getMethodColor = (method: string) => {
    return methods.find(m => m.id === method)?.color || 'text-gray-400';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable': return 'text-green-400';
      case 'beta': return 'text-yellow-400';
      case 'alpha': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const handleApiSelect = (api: any) => {
=======
      sdk: 'https://github.com/ziontechgroup/data-sdk'
    }
  ];

  const filteredApis = apis.filter(api => {
    const matchesSearch = !searchQuery || 
      api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.endpoint.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || api.category === activeCategory;
    const matchesMethod = activeMethod === 'all' || api.method === activeMethod;
    
    return matchesSearch && matchesCategory && matchesMethod;
  });

  const handleApiSelect = (api: ApiEndpoint) => {
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    setSelectedApi(api);
    setRequestBody(JSON.stringify(api.requestExample, null, 2));
    setResponseData('');
    setActiveTab('playground');
  };

  const handleTestApi = async () => {
    if (!selectedApi) return;
    
    setIsLoading(true);
    setResponseData('');
    
    // Simulate API call
    setTimeout(() => {
      setResponseData(JSON.stringify(selectedApi.responseExample, null, 2));
      setIsLoading(false);
    }, 1500);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

<<<<<<< HEAD
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
=======
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'beta':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'alpha':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'deprecated':
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'POST':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'PUT':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'DELETE':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  };

  return (
    <>
      <SEO 
        title="API Playground - Zion Tech Group"
<<<<<<< HEAD
        description="Explore, test, and integrate with our powerful APIs. Build amazing applications with our comprehensive developer tools."
        keywords="API playground, developer tools, API testing, integration, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/api-playground"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-500/20 rounded-full">
                <Code className="w-16 h-16 text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              API Playground
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
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
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search APIs..."
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                            ? 'bg-blue-500 text-white'
                            : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700 hover:text-white'
                        }`}
                      >
                        <category.icon className="w-4 h-4" />
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
                            ? 'bg-purple-500 text-white'
                            : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700 hover:text-white'
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
                        className={`bg-slate-800/50 border border-slate-600/50 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors ${
                          selectedApi?.id === api.id ? 'border-blue-500 ring-2 ring-blue-500/20' : ''
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <getCategoryIcon categoryId={api.category} className="w-5 h-5" />
                            <span className="text-sm text-gray-300 bg-gray-600/20 px-2 py-1 rounded-full">
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
                        <p className="text-gray-300 text-sm mb-3">{api.description}</p>

                        <div className="flex items-center justify-between text-xs text-gray-300">
                          <span>v{api.version}</span>
                          <span>{api.rateLimit}</span>
                        </div>

                        {api.featured && (
                          <div className="mt-3">
                            <span className="px-2 py-1 bg-blue-500 text-white rounded-full text-xs font-medium">
                              Featured
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
=======
        description="Test and explore our APIs in real-time. Interactive playground for AI, cloud, security, and data analytics endpoints with live examples."
        keywords="API playground, API testing, REST API, AI API, cloud API, security API, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Header Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                API{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Playground
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Test and explore our APIs in real-time. Interactive playground for AI, cloud, security, 
                and data analytics endpoints with live examples and documentation.
              </p>
              
              {/* Search Form */}
              <form className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search APIs, endpoints, or descriptions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
                  />
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Method Filter */}
              <div className="flex items-center gap-4">
                <div className="flex bg-white/10 rounded-lg p-1 border border-white/20">
                  {methods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setActiveMethod(method.id)}
                      className={`px-4 py-2 rounded-md transition-all duration-300 ${
                        activeMethod === method.id
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {method.name}
                      {method.id !== 'all' && (
                        <span className="text-xs ml-1">({method.count})</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* API List */}
              <div className="lg:col-span-1">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Available APIs</h2>
                  
                  {filteredApis.length > 0 ? (
                    <div className="space-y-4">
                      {filteredApis.map((api) => (
                        <motion.div
                          key={api.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                            selectedApi?.id === api.id
                              ? 'border-cyan-400 bg-cyan-400/10'
                              : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                          }`}
                          onClick={() => handleApiSelect(api)}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getMethodColor(api.method)}`}>
                                  {api.method}
                                </span>
                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(api.status)}`}>
                                  {api.status}
                                </span>
                                {api.featured && (
                                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                                    Featured
                                  </span>
                                )}
                              </div>
                              <h3 className="text-lg font-bold text-white mb-2">{api.name}</h3>
                              <p className="text-gray-300 text-sm leading-relaxed">{api.description}</p>
                            </div>
                          </div>
                          
                          <div className="text-sm text-gray-400 font-mono">
                            {api.endpoint}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="text-4xl mb-4">🔍</div>
                      <h3 className="text-lg font-semibold text-white mb-2">No APIs found</h3>
                      <p className="text-gray-300 text-sm">
                        Try adjusting your search terms or filters.
                      </p>
                    </div>
                  )}
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                </div>

<<<<<<< HEAD
                {/* API Playground */}
                <div className="lg:col-span-2">
                  {selectedApi ? (
                    <div className="bg-slate-800/50 border border-slate-600/50 rounded-lg">
                      {/* API Header */}
                      <div className="p-6 border-b border-slate-600/50">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h2 className="text-2xl font-bold text-white">{selectedApi.name}</h2>
                            <p className="text-gray-300">{selectedApi.description}</p>
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

                        <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm">
                          <div className="text-gray-300 mb-2">Endpoint:</div>
                          <div className="text-white">{selectedApi.baseUrl}{selectedApi.endpoint}</div>
                        </div>
                      </div>

                      {/* Tabs */}
                      <div className="flex border-b border-slate-600/50">
                        <button
                          onClick={() => setActiveTab('playground')}
                          className={`px-6 py-3 font-medium transition-colors ${
                            activeTab === 'playground'
                              ? 'text-blue-400 border-b-2 border-blue-400'
                              : 'text-gray-300 hover:text-white'
                          }`}
                        >
                          Playground
                        </button>
                        <button
                          onClick={() => setActiveTab('docs')}
                          className={`px-6 py-3 font-medium transition-colors ${
                            activeTab === 'docs'
                              ? 'text-blue-400 border-b-2 border-blue-400'
                              : 'text-gray-300 hover:text-white'
                          }`}
                        >
                          Documentation
                        </button>
                        <button
                          onClick={() => setActiveTab('sdk')}
                          className={`px-6 py-3 font-medium transition-colors ${
                            activeTab === 'sdk'
                              ? 'text-blue-400 border-b-2 border-blue-400'
                              : 'text-gray-300 hover:text-white'
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
                              <div className="bg-slate-900 p-4 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-gray-300 text-sm">Request Body (JSON)</span>
                                  <button
                                    onClick={() => copyToClipboard(requestBody)}
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                  >
                                    <Copy className="w-4 h-4" />
                                  </button>
                                </div>
                                <textarea
                                  value={requestBody}
                                  onChange={(e) => setRequestBody(e.target.value)}
                                  className="w-full h-32 bg-slate-800 border border-slate-600 rounded p-3 text-white font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="Enter request body..."
                                />
                              </div>
                            </div>

                            {/* Test Button */}
                            <div className="flex justify-center">
                              <button
                                onClick={handleTestApi}
                                disabled={isLoading}
                                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
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
                                <div className="bg-slate-900 p-4 rounded-lg">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-gray-300 text-sm">Response Data</span>
                                    <div className="flex items-center gap-2">
                                      <button
                                        onClick={() => copyToClipboard(responseData)}
                                        className="text-blue-400 hover:text-blue-300 transition-colors"
                                      >
                                        <Copy className="w-4 h-4" />
                                      </button>
                                      <button
                                        onClick={downloadResponse}
                                        className="text-blue-400 hover:text-blue-300 transition-colors"
                                      >
                                        <Download className="w-4 h-4" />
                                      </button>
=======
              {/* API Playground */}
              <div className="lg:col-span-2">
                {selectedApi ? (
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
                    {/* API Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getMethodColor(selectedApi.method)}`}>
                            {selectedApi.method}
                          </span>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(selectedApi.status)}`}>
                            {selectedApi.status}
                          </span>
                          <span className="text-gray-400 text-sm">
                            v{selectedApi.version}
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">{selectedApi.name}</h2>
                        <p className="text-gray-300 mb-4">{selectedApi.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Rate Limit:</span>
                            <div className="text-white">{selectedApi.rateLimit}</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Authentication:</span>
                            <div className="text-white">{selectedApi.authentication}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-white/20 mb-6">
                      <button
                        onClick={() => setActiveTab('playground')}
                        className={`px-4 py-2 font-medium transition-colors ${
                          activeTab === 'playground'
                            ? 'text-cyan-400 border-b-2 border-cyan-400'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        Playground
                      </button>
                      <button
                        onClick={() => setActiveTab('documentation')}
                        className={`px-4 py-2 font-medium transition-colors ${
                          activeTab === 'documentation'
                            ? 'text-cyan-400 border-b-2 border-cyan-400'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        Documentation
                      </button>
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'playground' && (
                      <div className="space-y-6">
                        {/* Request Section */}
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">Request</h3>
                          <div className="bg-slate-900 rounded-lg p-4 border border-white/20">
                            <div className="flex items-center justify-between mb-3">
                              <div className="text-sm text-gray-400">
                                <span className="font-mono">{selectedApi.baseUrl}</span>
                                <span className="font-mono text-cyan-400">{selectedApi.endpoint}</span>
                              </div>
                              <button
                                onClick={() => copyToClipboard(selectedApi.baseUrl + selectedApi.endpoint)}
                                className="p-2 text-gray-400 hover:text-white transition-colors"
                              >
                                <Copy className="w-4 h-4" />
                              </button>
                            </div>
                            
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                Request Body
                              </label>
                              <textarea
                                value={requestBody}
                                onChange={(e) => setRequestBody(e.target.value)}
                                className="w-full h-32 bg-slate-800 border border-white/20 rounded-lg p-3 text-white font-mono text-sm focus:outline-none focus:border-cyan-400"
                                placeholder="Enter request body..."
                              />
                            </div>
                            
                            <button
                              onClick={handleTestApi}
                              disabled={isLoading}
                              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                              {isLoading ? (
                                <>
                                  <RefreshCw className="w-4 h-4 animate-spin" />
                                  Testing...
                                </>
                              ) : (
                                <>
                                  <Play className="w-4 h-4" />
                                  Test API
                                </>
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Response Section */}
                        {responseData && (
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Response</h3>
                            <div className="bg-slate-900 rounded-lg p-4 border border-white/20">
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-gray-400">Response Data</span>
                                <button
                                  onClick={() => copyToClipboard(responseData)}
                                  className="p-2 text-gray-400 hover:text-white transition-colors"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
                              </div>
                              <pre className="text-sm text-green-400 font-mono overflow-x-auto">
                                {responseData}
                              </pre>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === 'documentation' && (
                      <div className="space-y-6">
                        {/* Parameters */}
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3">Parameters</h3>
                          <div className="bg-slate-900 rounded-lg p-4 border border-white/20">
                            <div className="space-y-3">
                              {selectedApi.parameters.map((param, index) => (
                                <div key={index} className="flex items-start justify-between p-3 bg-slate-800 rounded-lg">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="text-white font-medium">{param.name}</span>
                                      <span className="text-gray-400 text-sm">({param.type})</span>
                                      {param.required && (
                                        <span className="text-red-400 text-xs bg-red-400/10 px-2 py-1 rounded-full">
                                          Required
                                        </span>
                                      )}
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                                    </div>
                                    <p className="text-gray-300 text-sm">{param.description}</p>
                                  </div>
<<<<<<< HEAD
                                  <pre className="text-white font-mono text-sm overflow-x-auto">
                                    {responseData}
                                  </pre>
=======
>>>>>>> cursor/add-new-services-and-advertise-them-650b
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
                                  <div key={index} className="bg-slate-900 p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                      <span className="text-white font-medium">{param.name}</span>
                                      <div className="flex items-center gap-2">
                                        <span className={`px-2 py-1 rounded text-xs ${
                                          param.required ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                                        }`}>
                                          {param.required ? 'Required' : 'Optional'}
                                        </span>
                                        <span className="text-gray-300 text-sm">{param.type}</span>
                                      </div>
                                    </div>
                                    <p className="text-gray-300 text-sm">{param.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="flex justify-center">
                              <a
                                href={selectedApi.documentation}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors inline-flex items-center gap-2"
                              >
                                <BookOpen className="w-5 h-5" />
                                View Full Documentation
                              </a>
                            </div>
                          </div>
<<<<<<< HEAD
                        )}

                        {activeTab === 'sdk' && (
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-semibold text-white mb-3">SDK & Libraries</h3>
                              <div className="bg-slate-900 p-6 rounded-lg">
                                <div className="text-center">
                                  <Code className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                                  <h4 className="text-xl font-semibold text-white mb-2">Official SDK</h4>
                                  <p className="text-gray-300 mb-4">
                                    Get started quickly with our official SDKs and libraries
                                  </p>
                                  <a
                                    href={selectedApi.sdk}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
                                  >
                                    <ExternalLink className="w-5 h-5" />
                                    View SDK
                                  </a>
                                </div>
=======
                        </div>

                        {/* Examples */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Request Example</h3>
                            <div className="bg-slate-900 rounded-lg p-4 border border-white/20">
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-gray-400">JSON</span>
                                <button
                                  onClick={() => copyToClipboard(JSON.stringify(selectedApi.requestExample, null, 2))}
                                  className="p-2 text-gray-400 hover:text-white transition-colors"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                              </div>
                              <pre className="text-sm text-blue-400 font-mono overflow-x-auto">
                                {JSON.stringify(selectedApi.requestExample, null, 2)}
                              </pre>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Response Example</h3>
                            <div className="bg-slate-900 rounded-lg p-4 border border-white/20">
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-gray-400">JSON</span>
                                <button
                                  onClick={() => copyToClipboard(JSON.stringify(selectedApi.responseExample, null, 2))}
                                  className="p-2 text-gray-400 hover:text-white transition-colors"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
                              </div>
                              <pre className="text-sm text-green-400 font-mono overflow-x-auto">
                                {JSON.stringify(selectedApi.responseExample, null, 2)}
                              </pre>
                            </div>
                          </div>
<<<<<<< HEAD
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-slate-800/50 border border-slate-600/50 rounded-lg p-12 text-center">
                      <Code className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">Select an API</h3>
                      <p className="text-gray-300">
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
        <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Get your API keys, explore our documentation, and start building with our powerful APIs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                Get API Keys
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Documentation
              </button>
            </div>
=======
                        </div>

                        {/* Links */}
                        <div className="flex gap-4">
                          <a
                            href={selectedApi.documentation}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors"
                          >
                            <BookOpen className="w-4 h-4" />
                            View Documentation
                          </a>
                          <a
                            href={selectedApi.sdk}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors"
                          >
                            <Code className="w-4 h-4" />
                            Download SDK
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-12 text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Select an API to Get Started</h3>
                    <p className="text-gray-300 mb-6">
                      Choose an API from the list to explore its endpoints, test requests, 
                      and view documentation in our interactive playground.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                      <Terminal className="w-5 h-5" />
                      <span className="text-sm">Interactive testing environment</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Integrate?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get started with our APIs today. Download SDKs, access comprehensive documentation, 
                and join our developer community for support and updates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/documentation"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  View Full Documentation
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Get Support
                </a>
              </div>
            </motion.div>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
          </div>
        </section>
      </div>
    </>
  );
}
