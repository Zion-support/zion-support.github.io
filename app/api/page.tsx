'use client'

import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Code, Shield, Zap, Globe, Target } from 'lucide-react'

const ApiPage: React.FC = () => {
  const apiEndpoints = [
    {
      title: 'AI Services',
      description: 'Artificial Intelligence and Machine Learning APIs',
      icon: Code,
      endpoints: [
        {
          method: 'POST',
          path: '/api/ai/chat',
          description: 'AI-powered chat completion',
          parameters: ['message', 'model', 'temperature'],
          example: {
            request: {
              message: "Hello, how can I help you?",
              model: "gpt-4",
              temperature: 0.7
            },
            response: {
              response: "Hello! I'm here to help you with any questions or tasks you might have.",
              confidence: 0.95,
              tokens_used: 25
            }
          }
        },
        {
          method: 'POST',
          path: '/api/ai/analyze',
          description: 'Data analysis and insights',
          parameters: ['data', 'analysis_type', 'options'],
          example: {
            request: {
              data: [1, 2, 3, 4, 5],
              analysis_type: "trend",
              options: { include_forecast: true }
            },
            response: {
              trend: "increasing",
              forecast: [6, 7, 8],
              confidence: 0.88
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
          method: 'POST',
          path: '/api/data/process',
          description: 'Process and transform data',
          parameters: ['data', 'operation', 'options'],
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                API Services
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Access our powerful APIs to integrate AI and data services into your applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get API Key
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                  View Documentation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* API Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {apiEndpoints.map((category, categoryIndex) => (
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
                            <h3 className="text-xl font-semibold text-white">{endpoint.description}</h3>
                            <p className="text-gray-300">{endpoint.path}</p>
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
                          <h4 className="text-sm text-gray-400 mb-2">Parameters:</h4>
                          <div className="flex flex-wrap gap-2">
                            {endpoint.parameters.map((param, paramIndex) => (
                              <span key={paramIndex} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                                {param}
                              </span>
                            ))}
                          </div>
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

export default ApiPage
