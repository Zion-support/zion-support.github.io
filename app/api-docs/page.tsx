'use client'

import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Code, Copy, Search, Shield, Zap } from 'lucide-react'

const ApiDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const apiEndpoints = [
    {
      title: 'AI Services',
      description: 'Artificial Intelligence and Machine Learning APIs',
      icon: Code,
      endpoints: [
        {
          name: 'Text Analysis',
          method: 'POST',
          path: '/api/ai/text-analysis',
          description: 'Analyze text sentiment, entities, and key phrases',
          example: {
            request: {
              text: "I love this product!",
              analysis_type: "sentiment"
            },
            response: {
              sentiment: "positive",
              confidence: 0.95,
              entities: ["product"]
            }
          }
        },
        {
          name: 'Image Recognition',
          method: 'POST',
          path: '/api/ai/image-recognition',
          description: 'Identify objects, faces, and scenes in images',
          example: {
            request: {
              image_url: "https://example.com/image.jpg",
              features: ["objects", "faces"]
            },
            response: {
              objects: ["car", "person"],
              faces: 2,
              confidence: 0.89
            }
          }
        }
      ]
    },
    {
      title: 'Data Services',
      description: 'Data processing and analytics APIs',
      icon: Shield,
      endpoints: [
        {
          name: 'Data Processing',
          method: 'POST',
          path: '/api/data/process',
          description: 'Process and transform data using various algorithms',
          example: {
            request: {
              data: [1, 2, 3, 4, 5],
              operation: "normalize"
            },
            response: {
              processed_data: [0.2, 0.4, 0.6, 0.8, 1.0],
              status: "success"
            }
          }
        }
      ]
    }
  ]

  const filteredEndpoints = apiEndpoints.map(category => ({
    ...category,
    endpoints: category.endpoints.filter(endpoint =>
      endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.endpoints.length > 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                API Documentation
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive API documentation for all our services. Get started with our APIs in minutes.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search APIs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* API Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {filteredEndpoints.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-16">
                  <div className="flex items-center mb-8">
                    <category.icon className="w-8 h-8 text-blue-400 mr-4" />
                    <div>
                      <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                      <p className="text-gray-300">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {category.endpoints.map((endpoint, endpointIndex) => (
                      <div key={endpointIndex} className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-white">{endpoint.name}</h3>
                            <p className="text-gray-300">{endpoint.description}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-3 py-1 rounded text-sm font-medium ${
                              endpoint.method === 'POST' ? 'bg-green-500/20 text-green-400' :
                              endpoint.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                              'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {endpoint.method}
                            </span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <code className="text-blue-400 font-mono">{endpoint.path}</code>
                        </div>
                        
                        {/* Example Code */}
                        <div className="bg-gray-900 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-400">Example Request</span>
                            <button
                              onClick={() => copyToClipboard(JSON.stringify(endpoint.example.request, null, 2), `${categoryIndex}-${endpointIndex}-request`)}
                              className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
                            >
                              <Copy className="w-4 h-4" />
                              <span className="text-sm">
                                {copiedCode === `${categoryIndex}-${endpointIndex}-request` ? 'Copied!' : 'Copy'}
                              </span>
                            </button>
                          </div>
                          <pre className="text-sm text-gray-300 overflow-x-auto">
                            <code>{JSON.stringify(endpoint.example.request, null, 2)}</code>
                          </pre>
                        </div>
                        
                        <div className="bg-gray-900 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-400">Example Response</span>
                            <button
                              onClick={() => copyToClipboard(JSON.stringify(endpoint.example.response, null, 2), `${categoryIndex}-${endpointIndex}-response`)}
                              className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
                            >
                              <Copy className="w-4 h-4" />
                              <span className="text-sm">
                                {copiedCode === `${categoryIndex}-${endpointIndex}-response` ? 'Copied!' : 'Copy'}
                              </span>
                            </button>
                          </div>
                          <pre className="text-sm text-gray-300 overflow-x-auto">
                            <code>{JSON.stringify(endpoint.example.response, null, 2)}</code>
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
      </main>
      
      <Footer />
    </div>
  )
}

export default ApiDocsPage
