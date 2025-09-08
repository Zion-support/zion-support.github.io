import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { Code,
  Search,
  Filter,
  ArrowRight,
  Download,
  ExternalLink,
  Terminal,
  Database,
  Shield,
  Zap,
  Globe,
  Target,
  TrendingUp,
  CheckCircle,
  Clock,
  User,
  Star,
  Key,
  Lock,
  Brain,
  Cloud,
  Rocket,
  BookOpen,
  Users
} from 'lucide-react';

export default function API() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const endpoints = [
    {
      id: 'auth',
      name: 'Authentication',
      method: 'POST',
      description: 'Analyze text content using advanced AI algorithms for sentiment, entities, and key insights',
      version: 'v2',
      status: 'stable',
      rateLimit: '1000 requests/hour',
      auth: 'Bearer Token',
      featured: true
    },
    {
      id: 2,
      name: 'Image Recognition',
      category: 'ai',
      endpoint: '/api/v2/ai/image/recognize',
      method: 'POST',
      description: 'Identify objects, faces, and text in images using computer vision AI',
      version: 'v2',
      status: 'stable',
      rateLimit: '500 requests/hour',
      auth: 'Bearer Token',
      featured: true
    },
    {
      id: 3,
      name: 'User Authentication',
      category: 'security',
      endpoint: '/api/v2/auth/login',
      method: 'POST',
      description: 'Authenticate users and generate access tokens for API access',
      version: 'v2',
      status: 'stable',
      rateLimit: '100 requests/hour',
      auth: 'Basic Auth',
      featured: false
    },
    {
      id: 4,
      name: 'Data Analytics',
      category: 'data',
      endpoint: '/api/v2/data/analytics',
      method: 'GET',
      path: '/api/v1/analytics',
      description: 'Get analytics and metrics data',
      category: 'analytics'
    },
    {
      id: 'services',
      name: 'Get Services',
      method: 'GET',
      path: '/api/v1/services',
      description: 'Retrieve all available services',
      category: 'services'
    },
    {
      id: 'ai-models',
      name: 'AI Models',
      method: 'POST',
      path: '/api/v1/ai/models',
      description: 'Train and deploy AI models',
      category: 'ai'
    },
    {
      id: 'cloud-deploy',
      name: 'Cloud Deployment',
      method: 'POST',
      path: '/api/v1/cloud/deploy',
      description: 'Deploy applications to cloud infrastructure',
      category: 'cloud'
    },
    {
      id: 'security-scan',
      name: 'Security Scan',
      method: 'POST',
      path: '/api/v1/security/scan',
      description: 'Perform security vulnerability scan',
      category: 'security'
    }
  ];

  const codeExamples = [
    {
      id: 1,
      title: 'Python SDK Example',
      language: 'python',
      code: `import ziontech

  const responseExamples = {
    auth: `{
  "success": true,
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expires_in": 3600,
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "name": "John Doe"
    }
  }
}`,
    users: `{
  "success": true,
  "data": {
    "users": [
      {
        "id": "user_123",
        "email": "user@example.com",
        "name": "John Doe",
        "role": "admin"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 1
    }
  }
}`,
    projects: `{
  "success": true,
  "data": {
    "project": {
      "id": "proj_456",
      "name": "My Project",
      "description": "Project description",
      "type": "web_application",
      "status": "created",
      "created_at": "2024-01-15T10:30:00Z"
    }
  }
}`,
    analytics: `{
  "success": true,
  "data": {
    "metrics": {
      "total_users": 1250,
      "active_users": 890,
      "total_projects": 456,
      "success_rate": 98.5
    },
    {
      id: 2,
      title: 'JavaScript SDK Example',
      language: 'javascript',
      code: `import { ZionTech } from 'ziontech-sdk';

// Initialize client
const client = new ZionTech('your_api_key');

// Analyze image
const response = await client.ai.image.recognize({
    image: imageFile,
    features: ['objects', 'faces']
});

console.log(response.objects);
console.log(response.faces);`,
      featured: true
    },
    {
      id: 3,
      title: 'cURL Example',
      language: 'bash',
      code: `curl -X POST "https://api.ziontechgroup.com/api/v2/ai/text/analyze" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Hello world",
    "analysis_type": "sentiment"
  }'`,
      featured: false
    }
  ];

  const sdkDownloads = [
    {
      id: 1,
      name: 'Python SDK',
      version: '2.1.0',
      downloads: 15420,
      size: '2.4 MB',
      description: 'Official Python SDK for Zion Tech Group APIs',
      features: ['Async support', 'Type hints', 'Comprehensive docs']
    },
    {
      id: 2,
      name: 'JavaScript SDK',
      version: '2.0.5',
      downloads: 12850,
      size: '1.8 MB',
      description: 'Official JavaScript/Node.js SDK for Zion Tech Group APIs',
      features: ['ES6 modules', 'TypeScript support', 'Browser compatible']
    },
    {
      id: 3,
      name: 'Go SDK',
      version: '1.9.2',
      downloads: 9870,
      size: '3.2 MB',
      description: 'Official Go SDK for Zion Tech Group APIs',
      features: ['Context support', 'Error handling', 'High performance']
    },
    {
      id: 4,
      name: 'Java SDK',
      version: '2.0.1',
      downloads: 7560,
      size: '4.1 MB',
      description: 'Official Java SDK for Zion Tech Group APIs',
      features: ['Spring integration', 'Async support', 'Comprehensive testing']
    }
  ];

  const filteredEndpoints = apiEndpoints.filter(endpoint => {
    const matchesSearch = endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         endpoint.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || endpoint.category === selectedCategory;
    const matchesVersion = selectedVersion === 'all' || endpoint.version === selectedVersion;
    
    return matchesSearch && matchesCategory && matchesVersion;
  });

  const featuredEndpoints = filteredEndpoints.filter(endpoint => endpoint.featured);
  const regularEndpoints = filteredEndpoints.filter(endpoint => !endpoint.featured);

  const getMethodColor = (method: string) => {
    const colors = {
      GET: 'bg-green-100 text-green-800',
      POST: 'bg-blue-100 text-blue-800',
      PUT: 'bg-yellow-100 text-yellow-800',
      DELETE: 'bg-red-100 text-red-800',
      PATCH: 'bg-purple-100 text-purple-800'
    };
    return colors[method as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const categories = [
    { id: 'all', name: 'All APIs', count: endpoints.length },
    { id: 'auth', name: 'Authentication', count: endpoints.filter(e => e.category === 'auth').length },
    { id: 'users', name: 'User Management', count: endpoints.filter(e => e.category === 'users').length },
    { id: 'projects', name: 'Projects', count: endpoints.filter(e => e.category === 'projects').length },
    { id: 'analytics', name: 'Analytics', count: endpoints.filter(e => e.category === 'analytics').length },
    { id: 'ai', name: 'AI Services', count: endpoints.filter(e => e.category === 'ai').length },
    { id: 'cloud', name: 'Cloud Services', count: endpoints.filter(e => e.category === 'cloud').length },
    { id: 'security', name: 'Security', count: endpoints.filter(e => e.category === 'security').length }
  ];

  const filteredEndpoints = endpoints.filter(endpoint => {
    const matchesCategory = selectedCategory === 'all' || endpoint.category === selectedCategory;
    const matchesSearch = endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         endpoint.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET':
        return 'bg-green-500';
      case 'POST':
        return 'bg-blue-500';
      case 'PUT':
        return 'bg-yellow-500';
      case 'DELETE':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'auth':
        return Key;
      case 'users':
        return User;
      case 'projects':
        return Target;
      case 'analytics':
        return TrendingUp;
      case 'ai':
        return Brain;
      case 'cloud':
        return Cloud;
      case 'security':
        return Shield;
      default:
        return Code;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <SEO 
        title="API Reference - Zion Tech Group"
        description="Complete API documentation for Zion Tech Group services. RESTful APIs, authentication, endpoints, and code examples."
        keywords={['API', 'documentation', 'REST API', 'GraphQL', 'endpoints', 'authentication', 'Zion Tech Group']}
      />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            API Reference
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Complete API documentation for all Zion Tech Group services. 
            Integrate our AI, cloud, and security solutions into your applications.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Search Bar */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search APIs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white border-cyan-500'
                      : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20 hover:border-cyan-400/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* API Endpoints */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">API Endpoints</h2>
          <div className="space-y-6">
            {filteredEndpoints.map((endpoint, index) => (
              <motion.div
                key={endpoint.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <getCategoryIcon category={endpoint.category} className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{endpoint.name}</h3>
                      <p className="text-gray-400 text-sm">{endpoint.description}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-lg text-white text-sm font-medium ${getMethodColor(endpoint.method)}`}>
                    {endpoint.method}
                  </span>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                  <code className="text-cyan-400 font-mono text-sm break-all">
                    {endpoint.path}
                  </code>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Request Example */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Request Example</h4>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <pre className="text-gray-300 text-xs overflow-x-auto">
                        <code>{codeExamples[endpoint.id as keyof typeof codeExamples] || 'Example not available'}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Response Example */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Response Example</h4>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <pre className="text-gray-300 text-xs overflow-x-auto">
                        <code>{responseExamples[endpoint.id as keyof typeof responseExamples] || 'Example not available'}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredEndpoints.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No APIs found</h3>
              <p className="text-gray-300 mb-4">
                Try adjusting your search or filters to find relevant APIs.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Quick Start Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Start Guide</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Key className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">1. Get API Key</h3>
                <p className="text-gray-300 text-sm">Sign up and generate your API key from the dashboard</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">2. Make First Request</h3>
                <p className="text-gray-300 text-sm">Use the authentication endpoint to get your access token</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">3. Start Building</h3>
                <p className="text-gray-300 text-sm">Integrate our APIs into your applications</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Additional Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="/documentation"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
            >
              <BookOpen className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
              <p className="text-gray-300 text-sm">Comprehensive guides and tutorials</p>
            </a>

            <a
              href="/help"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
            >
              <Terminal className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-white mb-2">SDKs & Libraries</h3>
              <p className="text-gray-300 text-sm">Client libraries for popular languages</p>
            </a>

            <a
              href="/contact"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
            >
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
              <p className="text-gray-300 text-sm">Get help from our technical team</p>
            </a>

            <a
              href="/blog"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
            >
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-white mb-2">Examples</h3>
              <p className="text-gray-300 text-sm">Real-world integration examples</p>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
