import React from 'react';
import { Code, Zap, Shield, Database, Cloud, Brain } from 'lucide-react';

const APIPage: React.FC = () => {
  const apiEndpoints = [
    {
      category: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/ai/analyze',
          description: 'Analyze text using AI models',
          example: 'curl -X POST https://api.ziontechgroup.com/v1/ai/analyze'
        },
        {
          method: 'POST',
          path: '/api/v1/ai/generate',
          description: 'Generate content using AI',
          example: 'curl -X POST https://api.ziontechgroup.com/v1/ai/generate'
        },
        {
          method: 'GET',
          path: '/api/v1/ai/models',
          description: 'List available AI models',
          example: 'curl https://api.ziontechgroup.com/v1/ai/models'
        }
      ]
    },
    {
      category: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/infrastructure/deploy',
          description: 'Deploy infrastructure resources',
          example: 'curl -X POST https://api.ziontechgroup.com/v1/infrastructure/deploy'
        },
        {
          method: 'GET',
          path: '/api/v1/infrastructure/status',
          description: 'Get infrastructure status',
          example: 'curl https://api.ziontechgroup.com/v1/infrastructure/status'
        },
        {
          method: 'POST',
          path: '/api/v1/security/scan',
          description: 'Run security scan',
          example: 'curl -X POST https://api.ziontechgroup.com/v1/security/scan'
        }
      ]
    },
    {
      category: 'Data Analytics',
      icon: Database,
      color: 'text-green-400',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/analytics/query',
          description: 'Query analytics data',
          example: 'curl -X POST https://api.ziontechgroup.com/v1/analytics/query'
        },
        {
          method: 'GET',
          path: '/api/v1/analytics/metrics',
          description: 'Get performance metrics',
          example: 'curl https://api.ziontechgroup.com/v1/analytics/metrics'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            API Reference
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Complete API documentation for integrating with our AI and IT services.
          </p>
        </div>

        {/* API Endpoints */}
        <div className="space-y-12">
          {apiEndpoints.map((category, categoryIndex) => (
            <div key={categoryIndex} className="cyber-card hologram-card p-8">
              <div className="flex items-center mb-6">
                <category.icon className={`w-8 h-8 ${category.color} mr-3`} />
                <h2 className="text-2xl font-bold text-white">{category.category}</h2>
              </div>
              
              <div className="space-y-6">
                {category.endpoints.map((endpoint, endpointIndex) => (
                  <div key={endpointIndex} className="border border-gray-700 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded text-sm font-medium ${
                          endpoint.method === 'GET' ? 'bg-green-600 text-white' :
                          endpoint.method === 'POST' ? 'bg-blue-600 text-white' :
                          'bg-yellow-600 text-white'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-cyan-400 font-mono">{endpoint.path}</code>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{endpoint.description}</p>
                    
                    <div className="bg-gray-800 rounded p-4">
                      <code className="text-gray-300 text-sm">{endpoint.example}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Authentication Info */}
        <div className="cyber-card hologram-card p-8 mt-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Shield className="w-8 h-8 text-cyan-400 mr-3" />
            Authentication
          </h2>
          <p className="text-gray-300 mb-4">
            All API requests require authentication using an API key. Include your API key in the Authorization header:
          </p>
          <div className="bg-gray-800 rounded p-4 mb-6">
            <code className="text-gray-300 text-sm">
              Authorization: Bearer YOUR_API_KEY
            </code>
          </div>
          <p className="text-gray-300">
            Get your API key from the <a href="/contact" className="text-cyan-400 hover:text-cyan-300">contact page</a> or 
            <a href="/docs" className="text-cyan-400 hover:text-cyan-300 ml-1">documentation</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default APIPage;
