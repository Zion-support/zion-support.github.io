import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Code, 
  BookOpen, 
  Zap, 
  Shield, 
  Database, 
  Cloud, 
  Brain, 
  Globe, 
  Users, 
  Lock, 
  Key, 
  Terminal,
  Download,
  Play,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

const APIDocs: React.FC = () => {
  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/v1/health',
      description: 'Check API health status',
      auth: 'None'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/auth/login',
      description: 'Authenticate user',
      auth: 'Basic'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/services',
      description: 'List available services',
      auth: 'Bearer'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/ai/analyze',
      description: 'AI content analysis',
      auth: 'Bearer'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/analytics/dashboard',
      description: 'Get analytics data',
      auth: 'Bearer'
    }
  ];

  const sdkExamples = [
    {
      language: 'JavaScript',
      code: `import { ZionTechAPI } from '@ziontech/api';

const api = new ZionTechAPI({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Analyze content with AI
const result = await api.ai.analyze({
  content: 'Your content here',
  type: 'text'
});`
    },
    {
      language: 'Python',
      code: `from ziontech import ZionTechAPI

api = ZionTechAPI(
    api_key="your-api-key",
    environment="production"
)

# Analyze content with AI
result = api.ai.analyze(
    content="Your content here",
    type="text"
)`
    },
    {
      language: 'cURL',
      code: `curl -X POST https://api.ziontechgroup.com/v1/ai/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "content": "Your content here",
    "type": "text"
  }'`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="API Documentation - Zion Tech Group"
        description="Comprehensive API documentation for Zion Tech Group services. Integrate AI, analytics, and business solutions with our powerful APIs."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-400/30 mb-6">
              <Code className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">API Documentation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              API
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600">
                Documentation
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Integrate Zion Tech Group's powerful AI and business solutions into your applications. 
              Our comprehensive APIs provide access to cutting-edge technology with simple, secure endpoints.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-cyan-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20">
                Get API Key
              </button>
              <button className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200">
                View Examples
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Zap className="w-8 h-8 text-cyan-400 mr-3" />
              Quick Start
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Key className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">1. Get API Key</h3>
                <p className="text-gray-400">Sign up and obtain your unique API key from the dashboard</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">2. Install SDK</h3>
                <p className="text-gray-400">Choose your preferred language and install our SDK</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">3. Start Building</h3>
                <p className="text-gray-400">Make your first API call and start integrating our services</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Core API Endpoints</h2>
            
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left p-4 text-gray-300 font-semibold">Method</th>
                      <th className="text-left p-4 text-gray-300 font-semibold">Endpoint</th>
                      <th className="text-left p-4 text-gray-300 font-semibold">Description</th>
                      <th className="text-left p-4 text-gray-300 font-semibold">Auth</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiEndpoints.map((endpoint, index) => (
                      <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                            endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {endpoint.method}
                          </span>
                        </td>
                        <td className="p-4 font-mono text-cyan-400">{endpoint.endpoint}</td>
                        <td className="p-4 text-gray-300">{endpoint.description}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded text-xs ${
                            endpoint.auth === 'None' ? 'bg-gray-500/20 text-gray-400' :
                            endpoint.auth === 'Basic' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-purple-500/20 text-purple-400'
                          }`}>
                            {endpoint.auth}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SDK Examples Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">SDK Examples</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {sdkExamples.map((example, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Code className="w-6 h-6 text-cyan-400 mr-2" />
                    {example.language}
                  </h3>
                  <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-sm text-gray-300">{example.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authentication Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-8 h-8 text-green-400 mr-3" />
              Authentication & Security
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">API Key Authentication</h3>
                <p className="text-gray-300 mb-4">
                  All API requests require authentication using your API key. Include it in the Authorization header:
                </p>
                <div className="bg-slate-900 rounded-lg p-4">
                  <code className="text-sm text-cyan-400">
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Rate Limiting</h3>
                <p className="text-gray-300 mb-4">
                  API requests are rate-limited to ensure fair usage. Check response headers for rate limit information.
                </p>
                <div className="bg-slate-900 rounded-lg p-4">
                  <code className="text-sm text-cyan-400">
                    X-RateLimit-Remaining: 999
                  </code>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers building the future with Zion Tech Group's powerful APIs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/20">
                Get Your API Key
              </button>
              <button className="px-8 py-4 border border-cyan-400/30 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default APIDocs;