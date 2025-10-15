import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Key, Star, Code, ArrowRight } from 'lucide-react';

const ApiDocsPage = () => {
  const apiEndpoints = [
    {
      method: 'POST',
      path: '/v1/ai/predict',
      description: 'Make predictions using AI models',
      example: `curl -X POST "https://api.ziontechgroup.com/v1/ai/predict" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_id": "sentiment-analysis-v1",
    "input_data": {
      "text": "I love this product!"
    }
  }'`
    },
    {
      method: 'GET',
      path: '/v1/ai/models',
      description: 'List available AI models',
      example: `curl -X GET "https://api.ziontechgroup.com/v1/ai/models" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    }
  ];

  const features = [
    {
      icon: <Key className="w-8 h-8" />,
      title: 'Authentication',
      description: 'Secure API key-based authentication with role-based access control'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Rate Limiting',
      description: 'Intelligent rate limiting to ensure fair usage and optimal performance'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Real-time Data',
      description: 'Access to real-time data and analytics through our RESTful API'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Complete API documentation for Zion Tech Group's AI and data services." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">API Documentation</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete API documentation for our AI and data services
          </p>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                <div className="text-cyan-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* API Endpoints Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">API Endpoints</h2>
          <div className="space-y-8">
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
                <div className="flex items-center mb-6">
                  <span className={`px-3 py-1 rounded text-sm font-semibold mr-4 ${
                    endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                    endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="text-cyan-400 font-mono text-lg">{endpoint.path}</code>
                </div>
                <p className="text-gray-300 mb-4">{endpoint.description}</p>
                <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-gray-300 text-sm">
                    <code>{endpoint.example}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Help?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact our support team for assistance with API integration
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2 mx-auto">
            <span>Contact Support</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      </div>
    </div>
  );
};

export default ApiDocsPage;