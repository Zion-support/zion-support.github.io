import React from 'react';
import { Code, Book, Zap, Shield } from 'lucide-react';
import SEO from '../components/SEO';

const APIDocumentation = () => {
  const apiFeatures = [
    {
      title: "RESTful API",
      description: "Clean, intuitive REST API endpoints for easy integration",
      icon: <Code className="h-8 w-8 text-blue-400" />
    },
    {
      title: "Comprehensive Documentation",
      description: "Detailed documentation with examples and code snippets",
      icon: <Book className="h-8 w-8 text-green-400" />
    },
    {
      title: "High Performance",
      description: "Optimized for speed and reliability with 99.9% uptime",
      icon: <Zap className="h-8 w-8 text-yellow-400" />
    },
    {
      title: "Secure Authentication",
      description: "OAuth 2.0 and API key authentication for secure access",
      icon: <Shield className="h-8 w-8 text-red-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="API Documentation - Zion Tech Group"
        description="Comprehensive API documentation for integrating with our AI and technology services."
        keywords={["API", "documentation", "integration", "developer", "REST API"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">API Documentation</h1>
          <p className="text-xl text-gray-300">
            Integrate with our services using our comprehensive API
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {apiFeatures.map((feature, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Getting Started</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Authentication</h3>
              <div className="bg-slate-900 rounded-lg p-4">
                <code className="text-green-400">
                  curl -H "Authorization: Bearer YOUR_API_KEY" https://api.ziontechgroup.com/v1/endpoint
                </code>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Make Your First Request</h3>
              <div className="bg-slate-900 rounded-lg p-4">
                <code className="text-green-400">
                  GET /v1/ai/analyze<br/>
                  Content-Type: application/json<br/>
                  {`{"text": "Your input text here"}`}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIDocumentation;