<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Play, 
  Copy, 
  Check, 
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
  Lock,
  BookOpen,
  Github,
  MessageSquare
} from 'lucide-react';
const API: React.FC = () => {
<<<<<<< HEAD
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedEndpoint, setSelectedEndpoint] = useState('auth');

  const copyToClipboard = async (text: string, endpoint: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const apiEndpoints = [
=======
  const endpoints = [
    {
      method: 'GET',
      path: '/api/v1/services',
      description: 'Retrieve all available services',
      auth: 'Required'
    },
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    {
      id: 'auth',
      name: 'Authentication',
      method: 'POST',
      path: '/api/v1/auth/login',
      description: 'Authenticate user and get access token',
      category: 'auth'
    },
    {
      id: 'users',
      name: 'Get Users',
      method: 'GET',
      path: '/api/v1/users',
      description: 'Retrieve list of users with pagination',
      category: 'users'
    },
    {
      id: 'projects',
      name: 'Create Project',
      method: 'POST',
      path: '/api/v1/projects',
      description: 'Create a new project',
      category: 'projects'
    },
    {
      id: 'analytics',
      name: 'Analytics Data',
      method: 'GET',
      path: '/api/v1/analytics',
<<<<<<< HEAD
      description: 'Get analytics and metrics data',
      category: 'analytics'
    }
  ];

  const codeExamples = {
    auth: `curl -X POST https://api.ziontechgroup.com/api/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password"
  }'`,
    users: `curl -X GET https://api.ziontechgroup.com/api/v1/users \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json"`,
    projects: `curl -X POST https://api.ziontechgroup.com/api/v1/projects \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "My Project",
    "description": "Project description",
    "type": "web_application"
  }'`,
    analytics: `curl -X GET https://api.ziontechgroup.com/api/v1/analytics \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -G -d "start_date=2024-01-01&end_date=2024-12-31"`
  };

  const responseExamples = {
    auth: `{
  "success": true,
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refresh_token": "refresh_token_here",
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
        "name": "John Doe",
        "email": "john@example.com",
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
    "id": "proj_456",
    "name": "My Project",
    "description": "Project description",
    "type": "web_application",
    "created_at": "2024-01-15T10:30:00Z",
    "status": "active"
  }
}`,
    analytics: `{
  "success": true,
  "data": {
    "metrics": {
      "total_users": 1250,
      "active_projects": 89,
      "api_calls": 45678
    },
    "period": {
      "start_date": "2024-01-01",
      "end_date": "2024-12-31"
    }
  }
}`
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'endpoints', label: 'Endpoints', icon: Code },
    { id: 'playground', label: 'Playground', icon: Play },
    { id: 'sdks', label: 'SDKs', icon: Download }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <Code className="w-10 h-10 text-white" />
=======
      description: 'Get analytics data',
      auth: 'Required'
    },;
    {;
      method: 'PUT',;
      path: '/api/v1/user/profile',;
      description: 'Update user profile',;
      auth: 'Required';
    };
  ];
  const features = [
    {
      icon: Shield,
      title: 'Secure Authentication',
      description: 'OAuth 2.0 and API key authentication'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Sub-100ms response times guaranteed'
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Worldwide edge locations for fast access';
    },;
    {;
      icon: Database,;
      title: 'Real-time Data',;
      description: 'Live data synchronization across all endpoints';
    };
  ];
url = "https://api.ziontechgroup.com/v1/ai/text/analyze"
headers = {"Authorization": "Bearer YOUR_API_KEY"}
response = requests.post(url, json={
    "text": "Your text here",
    "analysis_type": "sentiment"
})
print(response.json())`,
    category: 'AI & ML'
  },
  {
    title: 'Cloud Resource Management',
    language: 'JavaScript',
    description: 'Example of managing cloud resources through our infrastructure API.',
    code: `const axios = require('axios');
const api = axios.create({
    baseURL: 'https://api.ziontechgroup.com/v1/cloud',
    headers: {'Authorization': 'Bearer YOUR_API_KEY'}
});
const createInstance = async () => {
    const response = await api.post('/instances', {
        type: 'compute',
        size: 'medium',
        region: 'us-east-1'
    });
    return response.data;
};`,
    category: 'Cloud & DevOps'
  },
  {
    title: 'Security Threat Detection',
    language: 'Python',
    description: 'Implement real-time threat detection using our security API.',
    code: `import requests
def check_threat(ip_address):
    url = "https://api.ziontechgroup.com/v1/security/threat-check"
    headers = {"Authorization": "Bearer YOUR_API_KEY"}
    response = requests.post(url, json={
        "ip": ip_address,
        "check_type": "comprehensive"
    })
    return response.json()`,
    category: 'Security'
  }
];
export default function API() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="API Reference - Zion Tech Group"
        description="Comprehensive API documentation for Zion Tech Group services. Integrate with our platform using RESTful APIs, SDKs, and developer tools."
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.1),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            animate = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            className="text-center"
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-400/30 mb-6">
              <Code className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">API Reference</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Developer
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400">
                API Reference
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Integrate Zion Tech Group's cutting-edge services into your applications
              with our comprehensive RESTful APIs. Build, deploy, and scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-cyan-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20">
                Get API Key
              </button>
              <button className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200">
                View Documentation
              </button>
            </div>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          </motion.div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <Code className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Developer
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400">
              API Reference
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Integrate Zion Tech Group's cutting-edge services into your applications
            with our comprehensive RESTful APIs. Build, deploy, and scale with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-cyan-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20">
              Get API Key
            </button>
            <button className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200">
              View Documentation
            </button>
          </div>
        </div>
<<<<<<< HEAD
      </motion.div>

      {/* API Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'API Endpoints', value: '50+', icon: Code, color: 'from-cyan-500 to-blue-500' },
              { label: 'Response Time', value: '<100ms', icon: Zap, color: 'from-green-500 to-emerald-500' },
              { label: 'Uptime', value: '99.9%', icon: Shield, color: 'from-purple-500 to-pink-500' },
              { label: 'Active Users', value: '10K+', icon: Globe, color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
=======
      </section>
      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            <h2 className="text-4xl font-bold text-white mb-4">
              API Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful tools for developers to build amazing applications
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">
            {apiCategories.map((category, index)  => (
              <motion.div
                key={feature.title}
                initial = {
  { opacity: 0,
  y: 20 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-200 hover:scale-105"
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="px-4 sm:px-6 lg:px-8 mb-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center border-b border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 text-sm font-medium transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Tab Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="max-w-7xl mx-auto">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Getting Started</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <Lock className="w-5 h-5 mr-2 text-cyan-400" />
                      Authentication
                    </h3>
                    <p className="text-gray-300 mb-4">
                      All API requests require authentication using Bearer tokens. Get your access token by authenticating with your credentials.
                    </p>
                    <div className="bg-gray-800 rounded-lg p-4 text-sm text-gray-300 font-mono">
                      Authorization: Bearer YOUR_ACCESS_TOKEN
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <Database className="w-5 h-5 mr-2 text-green-400" />
                      Base URL
                    </h3>
                    <p className="text-gray-300 mb-4">
                      All API endpoints are relative to our base URL:
                    </p>
                    <div className="bg-gray-800 rounded-lg p-4 text-sm text-gray-300 font-mono">
                      https://api.ziontechgroup.com
                    </div>
=======
      </section>
      {/* Endpoints Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            <h2 className="text-4xl font-bold text-white mb-4">
              API Endpoints
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our RESTful API endpoints
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg: grid-cols-3 gap-8">
            {quickStartExamples.map((example, index)  => (
              <motion.div
                key={endpoint.path}
                initial = {
  { opacity: 0,
  x: -20 
}}
                whileInView = {
  { opacity: 1,
  x: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-200"
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                      endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                      endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-blue-300 font-mono text-lg">{endpoint.path}</code>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                  </div>
                </div>
<<<<<<< HEAD
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Features</h2>
                <div className="space-y-4">
                  {[
                    { icon: Zap, title: 'RESTful Design', description: 'Clean, intuitive REST API design' },
                    { icon: Shield, title: 'Enterprise Security', description: 'OAuth 2.0, JWT tokens, and rate limiting' },
                    { icon: Globe, title: 'Global CDN', description: 'Lightning-fast response times worldwide' },
                    { icon: Terminal, title: 'Developer Tools', description: 'Interactive playground and comprehensive docs' }
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      className="flex items-start p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Endpoints Tab */}
          {activeTab === 'endpoints' && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">API Endpoints</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Available Endpoints</h3>
                  <div className="space-y-3">
                    {apiEndpoints.map((endpoint) => (
                      <button
                        key={endpoint.id}
                        onClick={() => setSelectedEndpoint(endpoint.id)}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                          selectedEndpoint === endpoint.id
                            ? 'bg-cyan-500/20 border border-cyan-500/50'
                            : 'bg-white/5 hover:bg-white/10 border border-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-2 py-1 rounded text-xs font-mono ${
                            endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                            endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {endpoint.method}
                          </span>
                          <span className="text-sm text-gray-400">{endpoint.category}</span>
                        </div>
                        <div className="font-mono text-sm text-white mb-1">{endpoint.path}</div>
                        <div className="text-gray-400 text-sm">{endpoint.description}</div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Code Example</h3>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-400">cURL Request</span>
                      <button
                        onClick={() => copyToClipboard(codeExamples[selectedEndpoint as keyof typeof codeExamples], selectedEndpoint)}
                        className="flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      >
                        {copiedEndpoint === selectedEndpoint ? (
                          <>
                            <Check className="w-4 h-4 mr-1" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-1" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{codeExamples[selectedEndpoint as keyof typeof codeExamples]}</code>
                    </pre>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mt-6 mb-3">Response Example</h4>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{responseExamples[selectedEndpoint as keyof typeof responseExamples]}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Playground Tab */}
          {activeTab === 'playground' && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">API Playground</h2>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                  <div className="text-center mb-8">
                    <Terminal className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Interactive API Testing</h3>
                    <p className="text-gray-300">
                      Test our APIs directly in your browser. No setup required.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Endpoint</label>
                      <select className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                        <option value="/api/v1/auth/login">POST /api/v1/auth/login</option>
                        <option value="/api/v1/users">GET /api/v1/users</option>
                        <option value="/api/v1/projects">POST /api/v1/projects</option>
                        <option value="/api/v1/analytics">GET /api/v1/analytics</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Request Body (JSON)</label>
                      <textarea
                        rows={6}
                        className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder='{
  "email": "user@example.com",
  "password": "your_password"
}'
                      />
                    </div>
                    
                    <div className="flex gap-4">
                      <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                        Send Request
                      </button>
                      <button className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
                        Clear
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SDKs Tab */}
          {activeTab === 'sdks' && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">SDKs & Libraries</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'JavaScript/Node.js', icon: '⚡', description: 'Official Node.js SDK with TypeScript support', download: 'npm install @ziontechgroup/sdk' },
                  { name: 'Python', icon: '🐍', description: 'Python SDK for data science and automation', download: 'pip install ziontechgroup-sdk' },
                  { name: 'React', icon: '⚛️', description: 'React hooks and components for frontend integration', download: 'npm install @ziontechgroup/react' },
                  { name: 'PHP', icon: '🐘', description: 'PHP SDK for web applications', download: 'composer require ziontechgroup/sdk' },
                  { name: 'Go', icon: '🐹', description: 'Go SDK for high-performance applications', download: 'go get github.com/ziontechgroup/go-sdk' },
                  { name: 'Java', icon: '☕', description: 'Java SDK for enterprise applications', download: 'Maven dependency available' }
                ].map((sdk, index) => (
                  <motion.div
                    key={sdk.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{sdk.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{sdk.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{sdk.description}</p>
                    <div className="bg-gray-800 rounded-lg p-3 text-xs text-gray-300 font-mono">
                      {sdk.download}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-6">
              Join thousands of developers building amazing applications with our APIs.
=======
                <p className="text-gray-300 mt-3">{endpoint.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* SDKs Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            <h2 className="text-4xl font-bold text-white mb-4">
              SDKs & Libraries
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Official SDKs for popular programming languages
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdks.map((sdk, index) => (
              <motion.div
                key={sdk.name}
                initial = {
  { opacity: 0,
  y: 20 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-200 hover:scale-105"
                <div className="text-4xl mb-4">{sdk.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{sdk.name}</h3>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors text-sm">
                    <Download className="w-4 h-4 inline mr-1" />
                    Download
                  </button>
                  <button className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg hover:bg-slate-600/50 transition-colors text-sm">
                    <BookOpen className="w-4 h-4 inline mr-1" />
                    Docs
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get API access, explore our documentation, and start integrating
              Zion Tech Group services into your applications today.
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get API Key
<<<<<<< HEAD
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
=======
              </button>
              <button className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200">
                View Full Documentation
              </button>
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  );
};
export default API;
