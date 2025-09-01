import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Play, Copy, Check } from 'lucide-react';
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
      status: 'stable'
    },
    {
      id: 'image-generation',
      name: 'Image Generation API',
      description: 'AI-powered image creation and manipulation',
      method: 'POST',
      endpoint: '/api/v1/images/generate',
      status: 'beta'
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics API',
      description: 'Real-time data processing and insights',
      method: 'GET',
      endpoint: '/api/v1/analytics',
      status: 'stable'
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
        description="Test and explore our APIs with our interactive playground. Try out endpoints, see responses, and integrate with our services."
        keywords="API playground, API testing, API documentation, REST API, API integration"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Header */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Playground</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Test and explore our APIs with our interactive playground. Try out endpoints, 
                see responses, and integrate with our services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* API Selection */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {apis.map((api, index) => (
                <motion.button
                  key={api.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => handleApiSelect(api.id)}
                  className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                    selectedApi === api.id
                      ? 'bg-blue-600/20 border-blue-500/50'
                      : 'bg-slate-800/50 border-slate-700/50 hover:border-blue-500/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{api.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(api.status)}`}>
                      {api.status}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{api.description}</p>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium bg-slate-700/50 ${getMethodColor(api.method)}`}>
                      {api.method}
                    </span>
                    <span className="text-gray-400 text-xs font-mono">{api.endpoint}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* API Testing Interface */}
        {selectedApiData && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedApiData.name}</h2>
                  <p className="text-gray-300 mb-4">{selectedApiData.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className={`px-3 py-1 rounded-full font-medium ${getMethodColor(selectedApiData.method)} bg-slate-700/50`}>
                      {selectedApiData.method}
                    </span>
                    <span className="text-gray-400 font-mono">{selectedApiData.endpoint}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedApiData.status)}`}>
                      {selectedApiData.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Request Section */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">Request</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Request Body (JSON)
                        </label>
                        <textarea
                          value={requestBody}
                          onChange={(e) => setRequestBody(e.target.value)}
                          placeholder="Enter JSON request body..."
                          className="w-full h-32 px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                        />
                      </div>
                      <button
                        onClick={handleTestApi}
                        disabled={isLoading}
                        className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
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
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-white">Response</h3>
                      {responseData && (
                        <button
                          onClick={() => copyToClipboard(responseData)}
                          className="px-3 py-1 bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 rounded text-sm transition-colors flex items-center gap-1"
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          {copied ? 'Copied!' : 'Copy'}
                        </button>
                      )}
                    </div>
                    <div className="bg-slate-900/50 border border-slate-600/50 rounded-lg p-4 h-32 overflow-auto">
                      {responseData ? (
                        <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                          {responseData}
                        </pre>
                      ) : (
                        <p className="text-gray-500 text-sm">
                          Response will appear here after testing the API
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Integrate?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get started with our APIs and build powerful integrations with our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/documentation"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Code className="w-5 h-5 mr-2" />
                  View Full Documentation
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300"
                >
                  Get API Support
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ApiPlayground;