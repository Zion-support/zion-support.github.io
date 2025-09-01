import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Play, Copy, Check, Zap, Brain, Database, Shield, Globe, ArrowRight, ExternalLink } from 'lucide-react';
import { SEO } from '../components/SEO';

const ApiPlayground: React.FC = () => {
  const [selectedApi, setSelectedApi] = useState<string>('ai-chat');
  const [requestBody, setRequestBody] = useState('');
  const [responseData, setResponseData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const apis = [
    {
      id: 'ai-chat',
      name: 'AI Chat API',
      description: 'Natural language processing and chat capabilities',
      method: 'POST',
      endpoint: '/api/v1/chat',
      status: 'stable',
      icon: Brain
    },
    {
      id: 'image-generation',
      name: 'Image Generation API',
      description: 'AI-powered image creation and manipulation',
      method: 'POST',
      endpoint: '/api/v1/images/generate',
      status: 'beta',
      icon: Zap
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics API',
      description: 'Real-time data processing and insights',
      method: 'GET',
      endpoint: '/api/v1/analytics',
      status: 'stable',
      icon: Database
    },
    {
      id: 'security-scan',
      name: 'Security Scan API',
      description: 'Vulnerability assessment and security monitoring',
      method: 'POST',
      endpoint: '/api/v1/security/scan',
      status: 'stable',
      icon: Shield
    }
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET':
        return 'text-green-400';
      case 'POST':
        return 'text-blue-400';
      case 'PUT':
        return 'text-yellow-400';
      case 'DELETE':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable':
        return 'bg-green-500/20 text-green-400';
      case 'beta':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'deprecated':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const handleApiSelect = (apiId: string) => {
    setSelectedApi(apiId);
    setRequestBody('');
    setResponseData('');
  };

  const handleTestApi = () => {
    setIsLoading(true);
    setResponseData('');

    // Simulate API call
    setTimeout(() => {
      setResponseData(JSON.stringify({
        success: true,
        data: {
          message: 'API call successful',
          timestamp: new Date().toISOString(),
          requestId: Math.random().toString(36).substr(2, 9)
        }
      }, null, 2));
      setIsLoading(false);
    }, 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedApiData = apis.find(api => api.id === selectedApi);

  return (
    <>
      <SEO
        title="API Playground - Zion Tech Group"
        description="Test and explore our APIs in real-time. Interactive playground for AI, image generation, data analytics, and security APIs."
        keywords="API playground, API testing, AI APIs, image generation API, data analytics API, Zion Tech Group APIs"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              API{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Playground
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Test and explore our APIs in real-time. Interactive playground for AI, image generation,
              data analytics, and security APIs with live examples and documentation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* API Selection */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Choose an API to Test</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select from our collection of powerful APIs and test them in real-time
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {apis.map((api, index) => (
              <motion.button
                key={api.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleApiSelect(api.id)}
                className={`p-6 rounded-2xl border transition-all duration-300 text-left ${
                  selectedApi === api.id
                    ? 'bg-indigo-500/20 border-indigo-400/50'
                    : 'bg-white/5 backdrop-blur-sm border-white/10 hover:border-indigo-400/30'
                }`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    selectedApi === api.id
                      ? 'bg-indigo-500/20'
                      : 'bg-slate-700/50'
                  }`}>
                    <api.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{api.name}</h3>
                    <p className="text-gray-400 text-sm">{api.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getMethodColor(api.method)}`}>
                    {api.method}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(api.status)}`}>
                    {api.status}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* API Testing Interface */}
      {selectedApiData && (
        <section className="py-16 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">{selectedApiData.name}</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">{selectedApiData.description}</p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {/* Request Section */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Request</h3>
                  
                  <div className="mb-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMethodColor(selectedApiData.method)}`}>
                        {selectedApiData.method}
                      </span>
                      <code className="text-gray-300 bg-slate-800/50 px-3 py-1 rounded-lg">
                        {selectedApiData.endpoint}
                      </code>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Request Body (JSON)
                    </label>
                    <textarea
                      value={requestBody}
                      onChange={(e) => setRequestBody(e.target.value)}
                      placeholder="Enter JSON request body..."
                      className="w-full h-32 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400/50 focus:ring-1 focus:ring-indigo-400/20 font-mono text-sm"
                    />
                  </div>

                  <button
                    onClick={handleTestApi}
                    disabled={isLoading}
                    className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Testing...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5" />
                        <span>Test API</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Response Section */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">Response</h3>
                    {responseData && (
                      <button
                        onClick={() => copyToClipboard(responseData)}
                        className="flex items-center space-x-2 px-3 py-1 bg-slate-700/50 text-gray-300 rounded-lg hover:bg-slate-600/50 transition-all duration-300"
                      >
                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
                      </button>
                    )}
                  </div>
                  
                  <div className="bg-slate-900/50 rounded-lg p-4 h-32 overflow-auto">
                    {responseData ? (
                      <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">
                        {responseData}
                      </pre>
                    ) : (
                      <p className="text-gray-500 text-sm">Response will appear here after testing the API</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Documentation Links */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Integrate?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get your API keys, view detailed documentation, and start building with our powerful APIs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Documentation</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-indigo-400/50 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-400/10 transition-all duration-300 flex items-center space-x-2"
              >
                <Zap className="w-5 h-5" />
                <span>Get API Keys</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ApiPlayground;