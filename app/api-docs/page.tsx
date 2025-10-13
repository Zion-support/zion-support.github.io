'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Search, Code, Key, Zap, ArrowRight, Copy, Check } from 'lucide-react';

const ApiDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };
  const apiEndpoints = [
    {
'use client'
import React, { useState } from 'react'
import { Search, Code, Key, Zap, ArrowRight, Copy, Check, Globe, Brain, Cloud, Shield, Settings, Users, Database, Eye, Sparkles, BookOpen, FileText, Download } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
export default function APIDocsPage() {
    const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id),
    setTimeout(() => setCopiedCode(null), 2000)
  }
const apiEndpoints = [
[
        {
      title: 'AI Services',
      description: 'Access our AI-powered services through RESTful APIs',
      endpoints: [
import SEOOptimizer from '../components/SEOOptimizer';
export default function APIDocsPage() {const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const copyToClipboard = (code: string, id: string) => {,
    navigator.clipboard.writeText(code)
    setCopiedCode(id),
    setTimeout(() => setCopiedCode(null), 2000)}const apiEndpoints = [
    {title: 'AI Services',
      description: 'Artificial Intelligence and Machine Learning APIs',
      icon: Brain,
      endpoints: [,
        {
          method: 'POST',
          path: '/api/ai/analyze',
          description: 'Analyze text using AI',
          example: `curl -X POST https://api.ziontechgroup.com/ai/analyze \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{"text": "Your text to analyze"}'`
        },
        {
          method: 'GET',
          path: '/api/ai/status',
          description: 'Check AI service status',
          example: `curl -X GET https://api.ziontechgroup.com/ai/status \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        }
          method: 'POST',
          path: '/api/ai/text-analysis',
          description: 'Analyze text sentiment, entities, and key phrases',
          code: `curl -X POST "https://api.ziontechgroup.com/ai/text-analysis" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Your text to analyze",
    "features": ["sentiment", "entities", "key_phrases"]
  }'`
        },
        {
          name: 'Image Recognition',
          method: 'POST',
          path: '/api/ai/image-recognition',
          description: 'Identify objects, faces, and scenes in images',
          code: `curl -X POST "https://api.ziontechgroup.com/ai/image-recognition" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "image_url": "https://example.com/image.jpg",
    "features": ["objects", "faces", "text"]
  }'`
        };
      ]
    },
    {
      title: 'Cloud Services',
      description: 'Cloud infrastructure and deployment APIs',
      icon: Cloud,
      endpoints: [
        {
          name: 'Deploy Application',
          method: 'POST',
          path: '/api/cloud/deploy',
          description: 'Deploy applications to cloud infrastructure',
          code: `curl -X POST "https://api.ziontechgroup.com/cloud/deploy" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "app_name": "my-app",
    "environment": "production",
    "config": {
      "cpu": "2",
      "memory": "4GB",
      "instances": 3
    };
  }'`
        };
      ]
    },
    {
      title: 'Data Analytics',
      description: 'Retrieve and analyze your data',
      endpoints: [
        {
          method: 'GET',
          path: '/api/analytics/dashboard',
          description: 'Get dashboard data',
          example: `curl -X GET https://api.ziontechgroup.com/analytics/dashboard \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        }
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            API Documentation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive API documentation for integrating with Zion Tech Group's AI and IT services
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">API Endpoints</h2>
          <div className="space-y-8">
            {apiEndpoints.map((category, categoryIndex) => (
              <div key={categoryIndex} className="cyber-card hologram-card p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <div className="space-y-4">
                  {category.endpoints.map((endpoint, endpointIndex) => (
                    <div key={endpointIndex} className="bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <span className={`px-3 py-1 rounded text-sm font-bold mr-4 ${
                          endpoint.method === 'GET' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-cyan-400 font-mono">{endpoint.path}</code>
                      </div>
                      <p className="text-gray-300 mb-3">{endpoint.description}</p>
                      <div className="bg-gray-900 rounded p-4 relative">
                        <button
                          onClick={() => copyToClipboard(endpoint.example, `${categoryIndex}-${endpointIndex}`)}
                          className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                        >
                          {copiedCode === `${categoryIndex}-${endpointIndex}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                        <pre className="text-sm text-gray-300 overflow-x-auto">
                          <code>{endpoint.example}</code>
  ]
  const filteredEndpoints = apiEndpoints.map(category => ({)
const filteredEndpoints = apiEndpoints.map(category => ({
    ...category,
    endpoints: category.endpoints.filter(endpoint => ,)
      endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.path.toLowerCase().includes(searchQuery.toLowerCase())
    )})).filter(category => category.endpoints.length > 0);
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <SEOOptimizer;
        title="API Documentation - Zion Tech Group"
        description="Complete API documentation for Zion Tech Group's AI and IT solutions. Explore endpoints, authentication, and integration guides."
        keywords="API documentation, REST API, AI API, cloud API, integration, developer tools, API reference"
      /></SEOOptimizer>
      <Navigation /></Navigation>
      {/* Hero Section */}
<section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">API Documentation;</h1>
            API Documentation
  </
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Complete API documentation for Zion Tech Group's AI and IT solutions.</p>
            Explore endpoints, authentication, and integration guides.
          </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">,</button>
              <Code className="mr-2 h-5 w-5" />
              Get Started;
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
              <Download className="mr-2 h-5 w-5" />
<section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl font-bold text-white mb-6"></h1>
            API Documentation
  </

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Complete API documentation for Zion Tech Group's AI and IT solutions. 
            Explore endpoints, authentication, and integration guides.
          </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"></button>
              <Code className="mr-2 h-5 w-5" /></Code>
              Get Started
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button>
              <Download className="mr-2 h-5 w-5" /></Download>
              Download SDK,
  </
          </div>
        </div>
      </section>
      {/* Quick Start */} <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Start</h2>
          <div className="grid grid-cols-1 lg: grid-cols-3 gap-8">,</div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      {/* Quick Start */};
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Start<
          <div className="grid grid-cols-1 lg: grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Key className="w-6 h-6 text-white" />
      {/* Quick Start */}
      <section className="py-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center"></h>Quick Start</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4"></div>
                <Key className="w-6 h-6 text-white" /></Key>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3"></h>1. Get API Key</h3>
              <p className="text-gray-300 mb-4">Sign up and get your API key from the dashboard</p>
              <button className="text-purple-400 hover: text-purple-300 font-medium">,</button>
                Get API Key →
              </button>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4"></div>
                <Code className="w-6 h-6 text-white" /></Code>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3"></h>2. Make Request</h3>
              <p className="text-gray-300 mb-4">Use our REST API with your preferred language</p>
              <button className="text-purple-400 hover: text-purple-300 font-medium">,</button>
                View Examples →
              </button>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4"></div>
                <Zap className="w-6 h-6 text-white" /></Zap>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3"></h>3. Integrate</h3>
              <p className="text-gray-300 mb-4">Build amazing applications with our APIs</p>
              <button className="text-purple-400 hover: text-purple-300 font-medium">,</button>
                Start Building →
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* API Endpoints */} <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
      <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">API Endpoints</h2>
          <div className="space-y-8">{filteredEndpoints.map((category, categoryIndex) => (</div>
              <div key={categoryIndex}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300">{category.description</p>}</p>
                  </div>
                </div>
                <div className="space-y-6">{category.endpoints.map((endpoint, endpointIndex) => (</div>
                    <div key={endpointIndex}className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            endpoint.method === 'POST' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-blue-500/20 text-blue-400'}`}>{endpoint.method</span>} </span>
                          </span>
                          <code className="text-purple-400 font-mono">{endpoint.path}</code>
                        </div>
                        <button;
                          onClick={() =>copyToClipboard(endpoint.code, `${categoryIndex)</button>}-${endpointIndex}`)}
                          className="flex items-center gap-2 text-gray-400 hover: text-white transition-colors">,
      {/* API Endpoints */}
      <section className="py-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <h2 className="text-3xl font-bold text-white mb-12 text-center"></h>API Endpoints</h2>
          <div className="space-y-8"></div>
            {filteredEndpoints.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"></div>
                <div className="flex items-center gap-4 mb-8"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center"></div>
                    <category.icon className="w-6 h-6 text-white" /></category>
                  </div>
                  <div></div>
                    <h3 className="text-2xl font-bold text-white mb-2"></h>{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-6"></div>
                  {category.endpoints.map((endpoint, endpointIndex) => (
                    <div key={endpointIndex} className="bg-white/5 rounded-xl p-6 border border-white/10"></div>
                      <div className="flex items-center justify-between mb-4"></div>
                        <div className="flex items-center gap-4"></div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            endpoint.method === 'POST' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-blue-500/20 text-blue-400'
                          }`}></span>
                            {endpoint.method}
                          </span>
                          <code className="text-purple-400 font-mono"></cod>{endpoint.path}</code>
                        </div>
                        <button
                          onClick={() =></button> copyToClipboard(endpoint.code, `${categoryIndex}-${endpointIndex}`)}
                          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                          {copiedCode === `${categoryIndex}-${endpointIndex}` ? (
                            <React.Fragment></React>
                              <Check className="w-4 h-4" /></Check>
                              Copied!
                            </React.Fragment>
                          ) : (
                            <React.Fragment>
                              <Copy className="w-4 h-4" />
                              Copy;
                            <React.Fragment></React>
                              <Copy className="w-4 h-4" /></Copy>
                              Copy
                            </React.Fragment>
                          )}
                        </button>
                      </div>
                      <p className="text-gray-300 mb-4">{endpoint.description</p>}</p>
                      <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-gray-300 text-sm">
                          <code>{endpoint.code}</code>
                      <p className="text-gray-300 mb-4">{endpoint.description}</p>
                      <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto"></div>
                        <pre className="text-gray-300 text-sm"></pre>
                          <code></cod>{endpoint.code}</code>
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className="text-center py-16">
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Contact us for API access and integration support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Key className="w-5 h-5" />
                  +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Code className="w-5 h-5" />
                  kleber@ziontechgroup.com
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Authentication</h3>
              <p className="text-gray-300 mb-4">
                All API requests require authentication using your API key. Include it in the Authorization header:
              </p>
              <code className="bg-gray-800 text-cyan-400 p-2 rounded block">
                Authorization: Bearer YOUR_API_KEY
              </code>
            </div>
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Rate Limits</h3>
              <p className="text-gray-300 mb-4">
                API requests are limited to 1000 requests per hour per API key. Contact us for higher limits.
              </p>
            </div>
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Need Help?</h2>
          <p className="text-gray-300 mb-8">
            Contact our developer support team for assistance with API integration
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start building with our APIs today and create amazing applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:dev@ziontechgroup.com"
              className="cyber-button"
            >
              Email Support
            </a>
            <a
              href="/contact"
              className="cyber-button"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
        </div>
      </section>
      {/* CTA Section */} <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">Start building with our APIs today and create amazing applications.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-colors">,</button>
              Get API Key;
  </
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover: bg-white hover:text-purple-600 transition-colors">,</button>
              View SDKs;
  </
          </div>
        </div>
      </section>
      <Footer /></Footer>
    </div>
  );
};
export default ApiDocsPage;
    <>
      <Helmet>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="API Documentation services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced API Documentation solutions by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApiDocsPage
export default ApiDocsPage;
