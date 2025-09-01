import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Play, Copy, Check } from 'lucide-react';
import { SEO } from '../components/SEO';
;
const ApiPlayground: React.FC = () => {;
  const [selectedApi, setSelectedApi] = useState<string>('ai-chat');
  const [requestBody, setRequestBody] = useState('');
  const [responseData, setResponseData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
;
  const apis = [;
    {;
      id: 'ai-chat',;
      name: 'AI Chat API',;
      description: 'Natural language processing and chat capabilities',;
      method: 'POST',;
      endpoint: '/api/v1/chat',;
      status: 'stable';
    },;
    {;
      id: 'image-generation',;
      name: 'Image Generation API',;
      description: 'AI-powered image creation and manipulation',;
      method: 'POST',;
      endpoint: '/api/v1/images/generate',;
      status: 'beta';
    },;
    {;
      id: 'data-analytics',;
      name: 'Data Analytics API',;
      description: 'Real-time data processing and insights',;
      method: 'GET',;
      endpoint: '/api/v1/analytics',;
      status: 'stable';
    };
  ];
;
  const getMethodColor = (method: string) => {;
    switch (method) {;
      case 'GET':;
        return 'text-green-400';
      case 'POST':;
        return 'text-blue-400';
      case 'PUT':;
        return 'text-yellow-400';
      case 'DELETE':;
        return 'text-red-400';
      default:;
        return 'text-gray-400';
    };
  };
;
  const getStatusColor = (status: string) => {;
    switch (status) {;
      case 'stable':;
        return 'bg-green-500/20 text-green-400';
      case 'beta':;
        return 'bg-yellow-500/20 text-yellow-400';
      case 'deprecated':;
        return 'bg-red-500/20 text-red-400';
      default:;
        return 'bg-gray-500/20 text-gray-400';
    };
  };
;
  const handleApiSelect = (apiId: string) => {;
    setSelectedApi(apiId);
    setRequestBody('');
    setResponseData('');
  };
;
  const handleTestApi = () => {;
    setIsLoading(true);
    setResponseData('');
;
    // Simulate API call;
    setTimeout(() => {;
      setResponseData(JSON.stringify({;
        success: true,;
        data: {;
          message: 'API call successful',;
          timestamp: new Date().toISOString(),;
          requestId: Math.random().toString(36).substr(2, 9);
        };
      }, null, 2));
      setIsLoading(false);
    }, 2000);
  };
;
  const copyToClipboard = (text: string) => {;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
;
  const selectedApiData = apis.find(api => api.id === selectedApi);
;
  return (;
    <>;
      <SEO;
        title="API Playground - Zion Tech Group";""
        description="Interactive API playground for testing and exploring Zion Tech Group's APIs. Try our AI, cloud, security, and data analytics APIs.";""
        keywords="API playground, API testing, REST API, AI API, cloud API, security API, Zion Tech Group";""
      />";""
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">;""
        {/* Header */}";""
        <section className="pt-32 pb-16 px-4">";""
          <div className="max-w-7xl mx-auto text-center">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};"
              transition={{ duration: 0.6 }};""
            >";""
              <div className="flex items-center justify-center space-x-3 mb-6">";""
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">";""
                  <Code className="w-8 h-8 text-white" />;"
                </div>;""
              </div>";""
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">;"
                API Playground;""
              </h1>";""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
                Interactive playground for testing and exploring Zion Tech Group's APIs.;
                Try our AI, cloud, security, and data analytics APIs.;
              </p>;
            </motion.div>;
          </div>;"
        </section>;""
        {/* Main Content */}";""
        <section className="py-16 px-4">";""
          <div className="max-w-7xl mx-auto">";""
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;""
              {/* API List */}";""
              <div className="lg:col-span-1">";""
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">";""
                  <h2 className="text-2xl font-bold text-white mb-6">;
                    Available APIs;"
                  </h2>;";""
                  <div className="space-y-4">;
                    {apis.map((api, index) => (;
                      <motion.div;
                        key={api.id};
                        initial={{ opacity: 0, x: -20 }};
                        animate={{ opacity: 1, x: 0 }};
                        transition={{ duration: 0.6, delay: index * 0.1 }};
                        className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${;
                          selectedApi === api.id;
                            ? 'border-blue-500 bg-blue-500/10';
                            : 'border-slate-700/50 bg-slate-700/30 hover:border-slate-600/50';
                        }`};"
                        onClick={() => handleApiSelect(api.id)};""
                      >";""
                        <div className="flex items-start justify-between mb-2">";""
                          <h3 className="text-white font-semibold">;"
                            {api.name};""
                          </h3>";""
                          <div className="flex items-center gap-2">;
                            <span;
                              className={`px-2 py-1 rounded text-xs font-medium ${getMethodColor(api.method)}`};
                            >;
                              {api.method};
                            </span>;
                            <span;
                              className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(api.status)}`};
                            >;
                              {api.status};
                            </span>;"
                          </div>;""
                        </div>";""
                        <p className="text-gray-300 text-sm">;"
                          {api.description};""
                        </p>";""
                        <p className="text-gray-400 text-xs mt-2 font-mono">;
                          {api.endpoint};
                        </p>;
                      </motion.div>;
                    ))};
                  </div>;
                </div>;"
              </div>;""
              {/* API Testing Area */}";""
              <div className="lg:col-span-2">";""
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">";""
                  <h2 className="text-2xl font-bold text-white mb-6">;
                    Test API: {selectedApiData?.name};"
                  </h2>;";""
                  <div className="space-y-6">;"
                    {/* Request Body */};""
                    <div>";""
                      <label className="block text-sm font-medium text-white mb-2">;
                        Request Body (JSON);
                      </label>;
                      <textarea;"
                        value={requestBody};""
                        onChange={(e) => setRequestBody(e.target.value)}";""
                        placeholder="Enter JSON request body...";""
                        className="w-full h-32 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 font-mono text-sm";
                      />;
                    </div>;
                    {/* Test Button */};
                    <button;"
                      onClick={handleTestApi};""
                      disabled={isLoading}";""
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";""
                    >";""
                      <Play className="w-5 h-5" />;
                      <span>{isLoading ? 'Testing...' : 'Test API'}</span>;
                    </button>;
                    {/* Response */};"
                    {responseData && (;""
                      <div>";""
                        <div className="flex items-center justify-between mb-2">";""
                          <label className="block text-sm font-medium text-white">;
                            Response;
                          </label>;"
                          <button;""
                            onClick={() => copyToClipboard(responseData)}";""
                            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors";""
                          >";""
                            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}";""
                            <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>;"
                          </button>;""
                        </div>";""
                        <pre className="w-full p-4 bg-slate-700/50 border border-slate-600/50 rounded-lg text-green-400 font-mono text-sm overflow-x-auto">;
                          {responseData};
                        </pre>;
                      </div>;
                    )};
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
};"
;""
export default ApiPlayground;";""