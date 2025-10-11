'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Copy, Check, ExternalLink, BookOpen, Zap, Shield, Database, Cloud, Brain } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface APIEndpoint {
  id: string;
  method: string;
  path: string;
  description: string;
  parameters: Array<{
    name: string;
    type: string;
    required: boolean;
    description: string;
  }>;
  response: {
    status: number;
    example: any;
  };
  category: string;
}

const ApiDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All APIs', icon: BookOpen },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'cloud', name: 'Cloud', icon: Cloud },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'analytics', name: 'Analytics', icon: Zap }
  ];

  const endpoints: APIEndpoint[] = [
    {
      id: 'ai-chat',
      method: 'POST',
      path: '/api/v1/ai/chat',
      description: 'Send a message to the AI chat service and get a response.',
      category: 'ai',
      parameters: [
        { name: 'message', type: 'string', required: true, description: 'The message to send to the AI' },
        { name: 'model', type: 'string', required: false, description: 'AI model to use (default: gpt-4)' },
        { name: 'temperature', type: 'number', required: false, description: 'Response creativity (0-1, default: 0.7)' }
      ],
      response: {
        status: 200,
        example: {
          response: "Hello! How can I help you today?",
          model: "gpt-4",
          tokens_used: 15,
          timestamp: "2024-01-15T10:30:00Z"
        }
      }
    },
    {
      id: 'ai-content-generate',
      method: 'POST',
      path: '/api/v1/ai/content/generate',
      description: 'Generate content using AI based on provided prompts.',
      category: 'ai',
      parameters: [
        { name: 'prompt', type: 'string', required: true, description: 'Content generation prompt' },
        { name: 'type', type: 'string', required: true, description: 'Content type (blog, email, social, etc.)' },
        { name: 'length', type: 'number', required: false, description: 'Desired content length in words' }
      ],
      response: {
        status: 200,
        example: {
          content: "Generated content based on your prompt...",
          type: "blog",
          word_count: 250,
          timestamp: "2024-01-15T10:30:00Z"
        }
      }
    },
    {
      id: 'analytics-dashboard',
      method: 'GET',
      path: '/api/v1/analytics/dashboard',
      description: 'Retrieve analytics dashboard data.',
      category: 'analytics',
      parameters: [
        { name: 'date_from', type: 'string', required: false, description: 'Start date (YYYY-MM-DD)' },
        { name: 'date_to', type: 'string', required: false, description: 'End date (YYYY-MM-DD)' },
        { name: 'metrics', type: 'array', required: false, description: 'Specific metrics to retrieve' }
      ],
      response: {
        status: 200,
        example: {
          total_users: 1250,
          active_users: 890,
          page_views: 15420,
          conversion_rate: 3.2,
          period: "2024-01-01 to 2024-01-15"
        }
      }
    },
    {
      id: 'cloud-deploy',
      method: 'POST',
      path: '/api/v1/cloud/deploy',
      description: 'Deploy an application to the cloud infrastructure.',
      category: 'cloud',
      parameters: [
        { name: 'app_name', type: 'string', required: true, description: 'Name of the application' },
        { name: 'environment', type: 'string', required: true, description: 'Deployment environment (dev, staging, prod)' },
        { name: 'config', type: 'object', required: true, description: 'Application configuration' }
      ],
      response: {
        status: 200,
        example: {
          deployment_id: "dep_123456",
          status: "deploying",
          url: "https://app-123456.example.com",
          estimated_time: "5 minutes"
        }
      }
    },
    {
      id: 'database-query',
      method: 'POST',
      path: '/api/v1/database/query',
      description: 'Execute a database query.',
      category: 'database',
      parameters: [
        { name: 'query', type: 'string', required: true, description: 'SQL query to execute' },
        { name: 'database', type: 'string', required: true, description: 'Target database name' },
        { name: 'limit', type: 'number', required: false, description: 'Maximum number of results' }
      ],
      response: {
        status: 200,
        example: {
          results: [
            { id: 1, name: "Example", created_at: "2024-01-15T10:30:00Z" }
          ],
          row_count: 1,
          execution_time: "0.05s"
        }
      }
    },
    {
      id: 'security-scan',
      method: 'POST',
      path: '/api/v1/security/scan',
      description: 'Perform a security scan on the specified target.',
      category: 'security',
      parameters: [
        { name: 'target', type: 'string', required: true, description: 'URL or IP to scan' },
        { name: 'scan_type', type: 'string', required: true, description: 'Type of security scan' },
        { name: 'options', type: 'object', required: false, description: 'Additional scan options' }
      ],
      response: {
        status: 200,
        example: {
          scan_id: "scan_789012",
          status: "completed",
          vulnerabilities: 0,
          score: 95,
          report_url: "https://reports.example.com/scan_789012"
        }
      }
    }
  ];

  const filteredEndpoints = endpoints.filter(endpoint => 
    selectedCategory === 'all' || endpoint.category === selectedCategory
  );

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-500';
      case 'POST': return 'bg-blue-500';
      case 'PUT': return 'bg-yellow-500';
      case 'DELETE': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const generateCodeExample = (endpoint: APIEndpoint) => {
    const baseUrl = 'https://api.ziontechgroup.com';
    const exampleParams = endpoint.parameters
      .filter(p => p.required)
      .reduce((acc, param) => {
        acc[param.name] = param.type === 'string' ? `"example_${param.name}"` : 
                         param.type === 'number' ? 123 : 
                         param.type === 'boolean' ? true : 
                         param.type === 'array' ? '[]' : '{}';
        return acc;
      }, {} as any);

    if (endpoint.method === 'GET') {
      const queryParams = Object.entries(exampleParams)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
      return `curl -X GET "${baseUrl}${endpoint.path}?${queryParams}" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`;
    } else {
      return `curl -X ${endpoint.method} "${baseUrl}${endpoint.path}" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(exampleParams, null, 2)}'`;
    }
  };

  return (
    <>
      <Helmet>
        <title>API Documentation - Zion Tech Group | Developer API Reference</title>
        <meta name="description" content="Complete API documentation for Zion Tech Group services. Find endpoints, parameters, examples, and integration guides." />
        <meta name="keywords" content="API, documentation, developer, endpoints, integration, REST API" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-cyan-400">API</span> Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Comprehensive API reference for all our services. Get started with our RESTful APIs 
              and integrate our AI and IT solutions into your applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#getting-started"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Get Started
              </a>
              <a
                href="/docs"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Full Docs
              </a>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section id="getting-started" className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Getting Started</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Authentication</h3>
                <p className="text-gray-300 mb-4">
                  All API requests require authentication using your API key. Include it in the Authorization header.
                </p>
                <div className="bg-slate-900 rounded-lg p-4 relative">
                  <button
                    onClick={() => copyToClipboard('Authorization: Bearer YOUR_API_KEY', 'auth-header')}
                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {copiedCode === 'auth-header' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <code className="text-cyan-300 text-sm">
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Base URL</h3>
                <p className="text-gray-300 mb-4">
                  All API endpoints are relative to our base URL. Use HTTPS for all requests.
                </p>
                <div className="bg-slate-900 rounded-lg p-4 relative">
                  <button
                    onClick={() => copyToClipboard('https://api.ziontechgroup.com', 'base-url')}
                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {copiedCode === 'base-url' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <code className="text-cyan-300 text-sm">
                    https://api.ziontechgroup.com
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Categories */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">API Endpoints</h2>
            <div className="space-y-8">
              {filteredEndpoints.map((endpoint) => (
                <div key={endpoint.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded text-sm font-medium text-white ${getMethodColor(endpoint.method)}`}>
                        {endpoint.method}
                      </span>
                      <code className="text-cyan-300 text-lg font-mono">{endpoint.path}</code>
                    </div>
                    <button
                      onClick={() => copyToClipboard(generateCodeExample(endpoint), endpoint.id)}
                      className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {copiedCode === endpoint.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{endpoint.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Parameters */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Parameters</h4>
                      <div className="space-y-2">
                        {endpoint.parameters.map((param, index) => (
                          <div key={index} className="bg-slate-900 rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <code className="text-cyan-300 font-mono">{param.name}</code>
                              <span className="text-gray-400 text-sm">({param.type})</span>
                              {param.required && (
                                <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded">Required</span>
                              )}
                            </div>
                            <p className="text-gray-300 text-sm">{param.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Response */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Response</h4>
                      <div className="bg-slate-900 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-green-400 text-sm font-medium">Status: {endpoint.response.status}</span>
                        </div>
                        <pre className="text-cyan-300 text-sm overflow-x-auto">
                          {JSON.stringify(endpoint.response.example, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </div>
                  
                  {/* Code Example */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Example Request</h4>
                    <div className="bg-slate-900 rounded-lg p-4 relative">
                      <button
                        onClick={() => copyToClipboard(generateCodeExample(endpoint), `${endpoint.id}-example`)}
                        className="absolute top-2 right-2 p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {copiedCode === `${endpoint.id}-example` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <pre className="text-cyan-300 text-sm overflow-x-auto">
                        {generateCodeExample(endpoint)}
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SDKs and Libraries */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">SDKs & Libraries</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Use our official SDKs and libraries to integrate our APIs into your applications quickly and easily.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">JavaScript/Node.js</h3>
                <p className="text-gray-300 mb-4">Official SDK for JavaScript and Node.js applications.</p>
                <a
                  href="https://npmjs.com/package/@ziontechgroup/api"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  View on NPM
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Python</h3>
                <p className="text-gray-300 mb-4">Python SDK for data science and AI applications.</p>
                <a
                  href="https://pypi.org/project/ziontechgroup-api"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  View on PyPI
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Postman Collection</h3>
                <p className="text-gray-300 mb-4">Import our Postman collection to test APIs quickly.</p>
                <a
                  href="/api/postman-collection.json"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Download Collection
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ApiDocsPage;