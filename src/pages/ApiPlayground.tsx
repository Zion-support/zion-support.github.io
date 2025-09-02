import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Play, 
  Copy, 
  Check, 
  Globe, 
  Zap, 
  Shield, 
  Database,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Terminal,
  Settings,
  Eye,
  Download
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ApiPlayground() {
  const [activeTab, setActiveTab] = useState('playground');
  const [selectedApi, setSelectedApi] = useState(null);
  const [copied, setCopied] = useState(false);

  const apis = [
    {
      id: 'user-management',
      name: 'User Management API',
      description: 'Complete user authentication and management system',
      endpoint: '/api/users',
      method: 'GET',
      documentation: 'https://docs.ziontechgroup.com/api/users',
      sdk: 'https://github.com/ziontechgroup/user-sdk'
    },
    {
      id: 'services',
      name: 'Services API',
      description: 'Access to all Zion Tech Group services and pricing',
      endpoint: '/api/services',
      method: 'GET',
      documentation: 'https://docs.ziontechgroup.com/api/services',
      sdk: 'https://github.com/ziontechgroup/services-sdk'
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEO 
        title="API Playground - Zion Tech Group"
        description="Test and explore Zion Tech Group APIs with our interactive playground"
        keywords="API, playground, testing, Zion Tech Group, developer tools"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                API <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Playground</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Test and explore our APIs with our interactive playground
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* API List */}
              <div className="lg:col-span-1">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <h2 className="text-2xl font-bold text-white mb-6">Available APIs</h2>
                  <div className="space-y-4">
                    {apis.map((api) => (
                      <motion.div
                        key={api.id}
                        whileHover={{ scale: 1.02 }}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          selectedApi?.id === api.id 
                            ? 'border-blue-500 bg-blue-500/10' 
                            : 'border-slate-700 hover:border-slate-600'
                        }`}
                        onClick={() => setSelectedApi(api)}
                      >
                        <h3 className="text-white font-semibold mb-2">{api.name}</h3>
                        <p className="text-gray-400 text-sm">{api.description}</p>
                        <div className="flex items-center gap-2 mt-3">
                          <span className={`px-2 py-1 rounded text-xs ${
                            api.method === 'GET' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            {api.method}
                          </span>
                          <span className="text-gray-500 text-xs">{api.endpoint}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* API Details */}
              <div className="lg:col-span-2">
                {selectedApi ? (
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-white">{selectedApi.name}</h2>
                      <div className="flex gap-2">
                        <button
                          onClick={() => copyToClipboard(selectedApi.endpoint)}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                        >
                          {copied ? <Check size={16} /> : <Copy size={16} />}
                          {copied ? 'Copied!' : 'Copy Endpoint'}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                        <p className="text-gray-300">{selectedApi.description}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Endpoint</h3>
                        <div className="bg-slate-900 p-4 rounded-lg">
                          <code className="text-green-400">{selectedApi.endpoint}</code>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={selectedApi.documentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                        >
                          <BookOpen size={16} />
                          Documentation
                          <ExternalLink size={16} />
                        </a>
                        <a
                          href={selectedApi.sdk}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                        >
                          <Code size={16} />
                          SDK
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center">
                    <Terminal size={48} className="text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Select an API</h3>
                    <p className="text-gray-400">Choose an API from the list to view details and test endpoints</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}