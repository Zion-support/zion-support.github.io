import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Key, 
  Shield, 
  Zap, 
  Brain, 
  Database, 
  Cloud, 
  Lock, 
  Play, 
  Download,
  Copy,
  CheckCircle,
  AlertCircle,
  Terminal,
  BookOpen,
  FileText,
  Cpu,
  Globe,
  Server,
  Network,
  BarChart3,
  Users,
  Settings,
  GitBranch,
  Package,
  Activity,
  Clock,
  Star,
  TrendingUp,
  Rocket,
  Atom,
  Heart,
  Eye,
  PenTool,
  Target,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';

export default function APIDocumentation() {
  const apiServices = [
    {
      name: 'AI Business Intelligence API',
      description: 'Advanced analytics and business intelligence powered by AI',
      endpoints: [
        { method: 'POST', path: '/api/v1/ai-bi/analyze', description: 'Analyze business data with AI' },
        { method: 'GET', path: '/api/v1/ai-bi/insights', description: 'Get AI-generated business insights' },
        { method: 'POST', path: '/api/v1/ai-bi/predict', description: 'Predict business trends and outcomes' }
      ],
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'Data visualization'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'AI Healthcare Analytics API',
      description: 'Medical AI diagnostics and healthcare analytics platform',
      endpoints: [
        { method: 'POST', path: '/api/v1/healthcare/diagnose', description: 'AI-powered medical diagnosis' },
        { method: 'GET', path: '/api/v1/healthcare/analytics', description: 'Healthcare data analytics' },
        { method: 'POST', path: '/api/v1/healthcare/predict', description: 'Predict health outcomes' }
      ],
      features: ['Medical diagnostics', 'Health analytics', 'Patient monitoring', 'Clinical insights'],
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'AI Legal Document Analysis API',
      description: 'Legal document processing and analysis with AI',
      endpoints: [
        { method: 'POST', path: '/api/v1/legal/analyze', description: 'Analyze legal documents' },
        { method: 'POST', path: '/api/v1/legal/extract', description: 'Extract key information from documents' },
        { method: 'POST', path: '/api/v1/legal/summarize', description: 'Generate legal document summaries' }
      ],
      features: ['Document analysis', 'Legal insights', 'Contract review', 'Compliance checking'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'AI Supply Chain Optimization API',
      description: 'Supply chain optimization and logistics with AI',
      endpoints: [
        { method: 'POST', path: '/api/v1/supply-chain/optimize', description: 'Optimize supply chain routes' },
        { method: 'GET', path: '/api/v1/supply-chain/analytics', description: 'Supply chain analytics' },
        { method: 'POST', path: '/api/v1/supply-chain/predict', description: 'Predict supply chain disruptions' }
      ],
      features: ['Route optimization', 'Inventory management', 'Demand forecasting', 'Risk assessment'],
      color: 'from-green-500 to-blue-500'
    },
    {
      name: 'AI Financial Trading API',
      description: 'AI-powered financial trading and market analysis',
      endpoints: [
        { method: 'POST', path: '/api/v1/trading/analyze', description: 'Analyze market data' },
        { method: 'POST', path: '/api/v1/trading/signals', description: 'Get trading signals' },
        { method: 'POST', path: '/api/v1/trading/portfolio', description: 'Portfolio optimization' }
      ],
      features: ['Market analysis', 'Trading signals', 'Portfolio management', 'Risk assessment'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Digital Twin Platform API',
      description: 'Digital twin creation and simulation platform',
      endpoints: [
        { method: 'POST', path: '/api/v1/digital-twin/create', description: 'Create digital twin' },
        { method: 'GET', path: '/api/v1/digital-twin/simulate', description: 'Run simulations' },
        { method: 'PUT', path: '/api/v1/digital-twin/update', description: 'Update digital twin' }
      ],
      features: ['3D modeling', 'Real-time simulation', 'IoT integration', 'Predictive maintenance'],
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const authenticationMethods = [
    {
      name: 'API Key Authentication',
      description: 'Simple API key-based authentication for basic access',
      code: `Authorization: Bearer YOUR_API_KEY`,
      security: 'Medium',
      useCase: 'Basic integrations and testing'
    },
    {
      name: 'OAuth 2.0',
      description: 'Secure OAuth 2.0 authentication with refresh tokens',
      code: `Authorization: Bearer ACCESS_TOKEN`,
      security: 'High',
      useCase: 'Production applications and user-specific data'
    },
    {
      name: 'JWT Tokens',
      description: 'JSON Web Token authentication for stateless applications',
      code: `Authorization: Bearer JWT_TOKEN`,
      security: 'High',
      useCase: 'Microservices and distributed systems'
    }
  ];

  const codeExamples = [
    {
      language: 'JavaScript',
      title: 'AI Business Intelligence Analysis',
      code: `const analyzeBusinessData = async (data) => {
  const response = await fetch('/api/v1/ai-bi/analyze', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: data,
      analysis_type: 'business_intelligence',
      timeframe: '30d'
    })
  });
  
  return await response.json();
};`
    },
    {
      language: 'Python',
      title: 'Healthcare Analytics Request',
      code: `import requests

def get_healthcare_analytics(patient_data):
    url = "https://api.ziontechgroup.com/api/v1/healthcare/analytics"
    headers = {
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json"
    }
    
    response = requests.post(url, json=patient_data, headers=headers)
    return response.json()`
    },
    {
      language: 'cURL',
      title: 'Legal Document Analysis',
      code: `curl -X POST https://api.ziontechgroup.com/api/v1/legal/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "document": "base64_encoded_document",
    "analysis_type": "contract_review",
    "jurisdiction": "US"
  }'`
    }
  ];

  const rateLimits = [
    { plan: 'Free', requests: '1,000/month', burst: '100/hour', features: 'Basic API access' },
    { plan: 'Starter', requests: '10,000/month', burst: '1,000/hour', features: 'Standard support' },
    { plan: 'Professional', requests: '100,000/month', burst: '10,000/hour', features: 'Priority support' },
    { plan: 'Enterprise', requests: 'Unlimited', burst: 'Custom', features: 'Dedicated support' }
  ];

  const contactInfo = {
    email: 'api@ziontechgroup.com',
    phone: '+1 302 464 0950',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Code className="w-4 h-4" />
              Developer Resources
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              API Documentation
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive API documentation for Zion Tech Group's cutting-edge AI services. 
              Build powerful applications with our intelligent APIs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                <Play className="w-5 h-5" />
                Quick Start Guide
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-white font-medium rounded-lg transition-all duration-300 border border-slate-600/50">
                <Download className="w-5 h-5" />
                Download SDKs
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* API Services Overview */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Available AI Services APIs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive suite of AI-powered APIs designed to transform your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {apiServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-cyan-400/30 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Brain className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {service.endpoints.map((endpoint, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <span className={`px-2 py-1 rounded text-xs font-mono ${
                        endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                        endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                        endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-cyan-400 font-mono">{endpoint.path}</code>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Authentication & Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Secure your API calls with our multiple authentication methods and enterprise-grade security
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {authenticationMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${
                    method.security === 'High' ? 'bg-green-500/20 text-green-400' :
                    method.security === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{method.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      method.security === 'High' ? 'bg-green-500/20 text-green-400' :
                      method.security === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {method.security} Security
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {method.description}
                </p>
                
                <div className="bg-slate-900/50 rounded-lg p-3 mb-4">
                  <code className="text-cyan-400 font-mono text-sm">{method.code}</code>
                </div>
                
                <p className="text-sm text-gray-500">
                  <strong>Use Case:</strong> {method.useCase}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Code Examples
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started quickly with our comprehensive code examples in multiple programming languages
            </p>
          </motion.div>

          <div className="space-y-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={example.language}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden"
              >
                <div className="bg-slate-700/50 px-6 py-4 border-b border-slate-700/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">{example.language}</span>
                      <button className="p-1 hover:bg-slate-600/50 rounded transition-colors">
                        <Copy className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">{example.title}</h3>
                  <pre className="bg-slate-900/50 rounded-lg p-4 overflow-x-auto">
                    <code className="text-gray-300 text-sm">{example.code}</code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Limits & Pricing */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Rate Limits & Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs with transparent pricing and generous rate limits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rateLimits.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-xl rounded-2xl border p-6 ${
                  plan.plan === 'Professional' ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700/50'
                }`}
              >
                {plan.plan === 'Professional' && (
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full mb-4">
                    <Star className="w-3 h-3" />
                    Recommended
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-white mb-2">{plan.plan}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Requests:</span>
                    <span className="text-white font-medium">{plan.requests}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Burst:</span>
                    <span className="text-white font-medium">{plan.burst}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-400 mb-4">{plan.features}</p>
                
                <button className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                  plan.plan === 'Professional' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white' 
                    : 'bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 hover:text-white'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs & Tools */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              SDKs & Development Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Accelerate your development with our official SDKs, testing tools, and comprehensive documentation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'JavaScript SDK', icon: Code, description: 'Official Node.js and browser SDK', downloads: '50K+' },
              { name: 'Python SDK', icon: Package, description: 'Python client library with async support', downloads: '25K+' },
              { name: 'Postman Collection', icon: FileText, description: 'Ready-to-use API testing collection', downloads: '10K+' },
              { name: 'API Explorer', icon: Globe, description: 'Interactive API testing interface', downloads: '15K+' },
              { name: 'CLI Tool', icon: Terminal, description: 'Command-line interface for API management', downloads: '5K+' },
              { name: 'Webhooks', icon: Network, description: 'Real-time event notifications', downloads: '8K+' }
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-cyan-400/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {tool.name}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {tool.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{tool.downloads} downloads</span>
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                    Download →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Contact */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help? Get Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our developer support team is here to help you succeed with our APIs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Our Team</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-300">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Support Resources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Support Resources</h3>
              
              <div className="space-y-4">
                {[
                  { name: 'API Status Page', description: 'Check real-time API status and uptime', icon: Activity },
                  { name: 'Developer Forum', description: 'Connect with other developers', icon: Users },
                  { name: 'Video Tutorials', description: 'Step-by-step implementation guides', icon: Play },
                  { name: 'Knowledge Base', description: 'Comprehensive documentation and FAQs', icon: BookOpen }
                ].map((resource, index) => (
                  <div key={resource.name} className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                    <div className="w-10 h-10 bg-slate-600/50 rounded-lg flex items-center justify-center">
                      <resource.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{resource.name}</h4>
                      <p className="text-gray-400 text-sm">{resource.description}</p>
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}