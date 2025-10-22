'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Search, Code, Key, Zap, ArrowRight, Copy, Check, Globe, Brain, Cloud, Shield, Settings, Users, Database, Eye, Sparkles, BookOpen, FileText, Download } from 'lucide-react'

const ApiDocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const apiEndpoints = [
    {
      id: 'auth-login',
      method: 'POST',
      path: '/api/auth/login',
      description: 'Authenticate user and return access token',
      parameters: [
        { name: 'email', type: 'string', required: true, description: 'User email address' },
        { name: 'password', type: 'string', required: true, description: 'User password' }
      ],
      response: {
        status: 200,
        data: {
          token: 'string',
          user: 'object',
          expiresIn: 'number'
        }
      },
      example: `curl -X POST https://api.ziontechgroup.com/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email": "user@example.com", "password": "password123"}'`
    },
    {
      id: 'users-list',
      method: 'GET',
      path: '/api/users',
      description: 'Get list of users with pagination',
      parameters: [
        { name: 'page', type: 'number', required: false, description: 'Page number (default: 1)' },
        { name: 'limit', type: 'number', required: false, description: 'Items per page (default: 10)' }
      ],
      response: {
        status: 200,
        data: {
          users: 'array',
          total: 'number',
          page: 'number',
          limit: 'number'
        }
      },
      example: `curl -X GET "https://api.ziontechgroup.com/users?page=1&limit=10" \\
  -H "Authorization: Bearer YOUR_TOKEN"`
    },
    {
      id: 'ai-chat',
      method: 'POST',
      path: '/api/ai/chat',
      description: 'Send message to AI chatbot and get response',
      parameters: [
        { name: 'message', type: 'string', required: true, description: 'User message' },
        { name: 'context', type: 'string', required: false, description: 'Additional context' }
      ],
      response: {
        status: 200,
        data: {
          response: 'string',
          confidence: 'number',
          timestamp: 'string'
        }
      },
      example: `curl -X POST https://api.ziontechgroup.com/ai/chat \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -d '{"message": "Hello, how can you help me?", "context": "customer_support"}'`
    }
  ]

  const filteredEndpoints = apiEndpoints.filter(endpoint =>
    endpoint.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
    endpoint.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const stats = [
    { label: 'API Endpoints', value: '50+', icon: Code },
    { label: 'Response Time', value: '<100ms', icon: Zap },
    { label: 'Uptime', value: '99.9%', icon: Shield },
    { label: 'Documentation', value: '100%', icon: BookOpen }
  ]

  return (
    <>
      <Helmet>
        <title>API Documentation | Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services. Get started with our APIs quickly and easily." />
        <meta name="keywords" content="API documentation, REST API, developer docs, Zion Tech Group API" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive API documentation to help you integrate with our services quickly and easily. 
              Get started with our powerful APIs in minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search API endpoints..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white mb-8">API Endpoints</h2>
            <div className="space-y-8">
              {filteredEndpoints.map((endpoint) => (
                <div key={endpoint.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <span className={`px-3 py-1 rounded text-sm font-semibold ${
                          endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                          endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                          endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-cyan-400 font-mono text-lg">{endpoint.path}</code>
                      </div>
                      <p className="text-gray-300">{endpoint.description}</p>
                    </div>
                  </div>

                  {/* Parameters */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Parameters</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-slate-700">
                            <th className="text-left py-2 text-gray-400">Name</th>
                            <th className="text-left py-2 text-gray-400">Type</th>
                            <th className="text-left py-2 text-gray-400">Required</th>
                            <th className="text-left py-2 text-gray-400">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {endpoint.parameters.map((param, index) => (
                            <tr key={index} className="border-b border-slate-700/50">
                              <td className="py-2 text-cyan-400 font-mono">{param.name}</td>
                              <td className="py-2 text-gray-300">{param.type}</td>
                              <td className="py-2">
                                <span className={`px-2 py-1 rounded text-xs ${
                                  param.required 
                                    ? 'bg-red-500/20 text-red-400' 
                                    : 'bg-gray-500/20 text-gray-400'
                                }`}>
                                  {param.required ? 'Required' : 'Optional'}
                                </span>
                              </td>
                              <td className="py-2 text-gray-300">{param.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Example */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">Example Request</h3>
                      <button
                        onClick={() => copyToClipboard(endpoint.example, endpoint.id)}
                        className="flex items-center gap-2 px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded text-sm text-gray-300 transition-colors"
                      >
                        {copiedCode === endpoint.id ? (
                          <>
                            <Check className="w-4 h-4 text-green-400" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-gray-300 text-sm font-mono whitespace-pre-wrap">{endpoint.example}</pre>
                    </div>
                  </div>

                  {/* Response */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Response</h3>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-sm font-semibold">
                          {endpoint.response.status}
                        </span>
                        <span className="text-gray-400 text-sm">Success</span>
                      </div>
                      <pre className="text-gray-300 text-sm font-mono">
                        {JSON.stringify(endpoint.response.data, null, 2)}
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start building with our APIs today. Get your API key and begin integrating 
              with our powerful services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get API Key
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Try Interactive Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default ApiDocsPage