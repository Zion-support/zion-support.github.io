'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Code, Key, Zap, ArrowRight, Copy, Check, Brain, Cloud, Shield, BarChart, Users, Settings, Globe, Lock, Star, CheckCircle, Clock, Eye, MessageSquare, TrendingUp, Award, Target, Phone, Mail, MapPin, Sparkles, Activity, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown } from 'lucide-react';

const APIDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const apiEndpoints = [
    {
      title: 'AI Services',
      icon: Brain,
      description: 'Artificial Intelligence and Machine Learning APIs',
      endpoints: [
        {
          method: 'POST',
          path: '/api/ai/chat',
          description: 'Chat with AI assistant',
          example: `curl -X POST "https://api.ziontechgroup.com/ai/chat" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "Hello, how can you help me?",
    "context": "business"
  }'`
        },
        {
          method: 'POST',
          path: '/api/ai/analyze',
          description: 'Analyze text or data with AI',
          example: `curl -X POST "https://api.ziontechgroup.com/ai/analyze" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Your text to analyze",
    "analysis_type": "sentiment"
  }'`
        }
      ]
    },
    {
      title: 'Cloud Services',
      icon: Cloud,
      description: 'Cloud infrastructure and deployment APIs',
      endpoints: [
        {
          method: 'GET',
          path: '/api/cloud/status',
          description: 'Get cloud service status',
          example: `curl -X GET "https://api.ziontechgroup.com/cloud/status" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        },
        {
          method: 'POST',
          path: '/api/cloud/deploy',
          description: 'Deploy application to cloud',
          example: `curl -X POST "https://api.ziontechgroup.com/cloud/deploy" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "app_name": "my-app",
    "environment": "production"
  }'`
        }
      ]
    },
    {
      title: 'Analytics',
      icon: BarChart,
      description: 'Data analytics and reporting APIs',
      endpoints: [
        {
          method: 'GET',
          path: '/api/analytics/metrics',
          description: 'Get analytics metrics',
          example: `curl -X GET "https://api.ziontechgroup.com/analytics/metrics?period=30d" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        },
        {
          method: 'POST',
          path: '/api/analytics/events',
          description: 'Track custom events',
          example: `curl -X POST "https://api.ziontechgroup.com/analytics/events" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "event": "user_signup",
    "properties": {
      "source": "website"
    }
  }'`
        }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      description: 'Security and authentication APIs',
      endpoints: [
        {
          method: 'POST',
          path: '/api/auth/login',
          description: 'Authenticate user',
          example: `curl -X POST "https://api.ziontechgroup.com/auth/login" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password"
  }'`
        },
        {
          method: 'POST',
          path: '/api/auth/refresh',
          description: 'Refresh access token',
          example: `curl -X POST "https://api.ziontechgroup.com/auth/refresh" \\
  -H "Authorization: Bearer YOUR_REFRESH_TOKEN"`
        }
      ]
    }
  ];

  const codeExamples = [
    {
      title: 'JavaScript SDK',
      language: 'javascript',
      code: `import { ZionAPI } from '@ziontechgroup/sdk';

const api = new ZionAPI({
  apiKey: 'your-api-key',
  baseURL: 'https://api.ziontechgroup.com'
});

// Chat with AI
const response = await api.ai.chat({
  message: 'Hello, how can you help me?',
  context: 'business'
});

console.log(response.data);`
    },
    {
      title: 'Python SDK',
      language: 'python',
      code: `from ziontechgroup import ZionAPI

api = ZionAPI(
    api_key='your-api-key',
    base_url='https://api.ziontechgroup.com'
)

# Chat with AI
response = api.ai.chat(
    message='Hello, how can you help me?',
    context='business'
)

print(response.data)`
    },
    {
      title: 'cURL',
      language: 'bash',
      code: `curl -X POST "https://api.ziontechgroup.com/ai/chat" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "Hello, how can you help me?",
    "context": "business"
  }'`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            API
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive API documentation with examples, SDKs, and interactive testing tools.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search API endpoints..."
              className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">API Endpoints</h2>
          <div className="space-y-8">
            {apiEndpoints.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {category.endpoints.map((endpoint, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <span className={`px-3 py-1 rounded text-sm font-medium mr-4 ${
                            endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                            endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                            endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-white font-mono">{endpoint.path}</code>
                        </div>
                        <button
                          onClick={() => copyToClipboard(endpoint.example, `${index}-${idx}`)}
                          className="flex items-center px-3 py-1 bg-purple-500/20 text-purple-400 rounded hover:bg-purple-500/30 transition-colors"
                        >
                          {copiedCode === `${index}-${idx}` ? (
                            <>
                              <Check className="w-4 h-4 mr-1" />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 mr-1" />
                              Copy
                            </>
                          )}
                        </button>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Code Examples</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {codeExamples.map((example, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{example.title}</h3>
                <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-gray-300 text-sm">
                    <code>{example.code}</code>
                  </pre>
                </div>
                <button
                  onClick={() => copyToClipboard(example.code, `example-${index}`)}
                  className="mt-4 flex items-center px-4 py-2 bg-purple-500/20 text-purple-400 rounded hover:bg-purple-500/30 transition-colors"
                >
                  {copiedCode === `example-${index}` ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Code
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get your API key and start building amazing applications with our powerful APIs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get API Key
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View SDKs
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default APIDocsPage;