import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Code, Zap, Shield, Database, Globe, CheckCircle } from 'lucide-react';

const APIPage: React.FC = () => {
  const apiEndpoints = [
    {
      category: 'AI Services',
      icon: Zap,
      color: 'text-purple-400',
      endpoints: [
        { method: 'POST', path: '/api/v1/ai/predict', description: 'Make predictions with AI models' },
        { method: 'POST', path: '/api/v1/ai/train', description: 'Train custom AI models' },
        { method: 'GET', path: '/api/v1/ai/models', description: 'List available AI models' },
        { method: 'POST', path: '/api/v1/ai/chat', description: 'Chat with AI assistants' }
      ]
    },
    {
      category: 'Data Analytics',
      icon: Database,
      color: 'text-blue-400',
      endpoints: [
        { method: 'POST', path: '/api/v1/analytics/query', description: 'Query data analytics' },
        { method: 'GET', path: '/api/v1/analytics/dashboards', description: 'Get dashboard data' },
        { method: 'POST', path: '/api/v1/analytics/reports', description: 'Generate reports' },
        { method: 'GET', path: '/api/v1/analytics/metrics', description: 'Get performance metrics' }
      ]
    },
    {
      category: 'Authentication',
      icon: Shield,
      color: 'text-green-400',
      endpoints: [
        { method: 'POST', path: '/api/v1/auth/login', description: 'User authentication' },
        { method: 'POST', path: '/api/v1/auth/register', description: 'User registration' },
        { method: 'POST', path: '/api/v1/auth/refresh', description: 'Refresh access token' },
        { method: 'GET', path: '/api/v1/auth/profile', description: 'Get user profile' }
      ]
    },
    {
      category: 'System',
      icon: Globe,
      color: 'text-orange-400',
      endpoints: [
        { method: 'GET', path: '/api/v1/status', description: 'API status and health' },
        { method: 'GET', path: '/api/v1/version', description: 'API version information' },
        { method: 'GET', path: '/api/v1/limits', description: 'Rate limit information' },
        { method: 'GET', path: '/api/v1/docs', description: 'API documentation' }
      ]
    }
  ];

  const features = [
    'RESTful API design',
    'JSON request/response format',
    'OAuth 2.0 authentication',
    'Rate limiting and throttling',
    'Comprehensive error handling',
    'Interactive API explorer',
    'SDK support for multiple languages',
    'Webhook notifications'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              API Reference
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, easy-to-use APIs for integrating AI capabilities into your applications
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#getting-started"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </a>
              <a 
                href="/docs"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Documentation
              </a>
            </div>
          </div>

          {/* API Features */}
          <div className="cyber-card hologram-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">API Features</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-4 text-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-3" />
                  <p className="text-gray-300 text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* API Endpoints */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">API Endpoints</h2>
            
            <div className="space-y-8">
              {apiEndpoints.map((category, categoryIndex) => (
                <div key={categoryIndex} className="cyber-card hologram-card p-8">
                  <div className="flex items-center mb-6">
                    <category.icon className={`w-8 h-8 ${category.color} mr-4`} />
                    <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.endpoints.map((endpoint, endpointIndex) => (
                      <div key={endpointIndex} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            endpoint.method === 'GET' ? 'bg-green-900 text-green-300' :
                            endpoint.method === 'POST' ? 'bg-blue-900 text-blue-300' :
                            endpoint.method === 'PUT' ? 'bg-yellow-900 text-yellow-300' :
                            'bg-red-900 text-red-300'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-cyan-400 font-mono">{endpoint.path}</code>
                        </div>
                        <span className="text-gray-300 text-sm">{endpoint.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Getting Started */}
          <div id="getting-started" className="cyber-card hologram-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Getting Started</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">1. Authentication</h3>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <pre className="text-gray-300 text-sm overflow-x-auto">
{`curl -X POST https://api.ziontechgroup.com/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "your-email@example.com",
    "password": "your-password"
  }'`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">2. Make API Calls</h3>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <pre className="text-gray-300 text-sm overflow-x-auto">
{`curl -X POST https://api.ziontechgroup.com/v1/ai/predict \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "text-classification",
    "input": "Your text to analyze"
  }'`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">3. Handle Responses</h3>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <pre className="text-gray-300 text-sm overflow-x-auto">
{`{
  "success": true,
  "data": {
    "prediction": "positive",
    "confidence": 0.95,
    "model_version": "1.2.0"
  },
  "timestamp": "2024-01-15T10:30:00Z"
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* SDKs */}
          <div className="cyber-card hologram-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">SDKs & Libraries</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6">
                <Code className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Python SDK</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Official Python SDK for easy integration with our AI services.
                </p>
                <div className="space-y-2">
                  <code className="block text-xs text-gray-400">pip install ziontechgroup-sdk</code>
                  <a href="/docs/sdk/python" className="text-cyan-400 hover:text-cyan-300 text-sm">
                    Documentation →
                  </a>
                </div>
              </div>
              
              <div className="cyber-card p-6">
                <Code className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">JavaScript SDK</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Node.js and browser-compatible JavaScript SDK.
                </p>
                <div className="space-y-2">
                  <code className="block text-xs text-gray-400">npm install @ziontechgroup/sdk</code>
                  <a href="/docs/sdk/javascript" className="text-cyan-400 hover:text-cyan-300 text-sm">
                    Documentation →
                  </a>
                </div>
              </div>
              
              <div className="cyber-card p-6">
                <Code className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Java SDK</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Enterprise-grade Java SDK for server-side applications.
                </p>
                <div className="space-y-2">
                  <code className="block text-xs text-gray-400">Coming Soon</code>
                  <span className="text-gray-500 text-sm">Documentation →</span>
                </div>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="cyber-card hologram-card p-8 text-center">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Need Help?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our developer support team is here to help you integrate our APIs successfully.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="mailto:api-support@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Email API Team
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default APIPage;
