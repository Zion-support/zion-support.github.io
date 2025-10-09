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
      title: 'AI Services',
      description: 'Access our AI-powered services and solutions',
      endpoints: [
        {
          method: 'POST',
          path: '/api/ai/generate-content',
          description: 'Generate AI content for various use cases',
          example: {
            request: {
              prompt: 'Write a blog post about AI trends',
              type: 'blog',
              length: 'medium'
            },
            response: {
              content: 'Generated blog post content...',
              metadata: {
                wordCount: 500,
                tone: 'professional'
              }
            }
          }
        },
        {
          method: 'POST',
          path: '/api/ai/analyze-data',
          description: 'Analyze data using AI algorithms',
          example: {
            request: {
              data: 'Your dataset here',
              analysisType: 'sentiment'
            },
            response: {
              results: 'Analysis results...',
              confidence: 0.95
            }
          }
        }
      ]
    },
    {
      title: 'Authentication',
      description: 'Manage API authentication and access',
      endpoints: [
        {
          method: 'POST',
          path: '/api/auth/login',
          description: 'Authenticate and get access token',
          example: {
            request: {
              email: 'user@example.com',
              password: 'password123'
            },
            response: {
              token: 'jwt_token_here',
              expiresIn: 3600
            }
          }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            API Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive API documentation for integrating with Zion Tech Group's AI and IT services.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {apiEndpoints.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">{section.title}</h2>
              <p className="text-gray-300 mb-8">{section.description}</p>
              
              <div className="space-y-6">
                {section.endpoints.map((endpoint, endpointIndex) => (
                  <div key={endpointIndex} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded text-sm font-semibold ${
                          endpoint.method === 'POST' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-lg font-mono text-gray-800">{endpoint.path}</code>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{endpoint.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Request Example:</h4>
                        <div className="bg-gray-100 rounded-lg p-4 relative">
                          <button
                            onClick={() => copyToClipboard(JSON.stringify(endpoint.example.request, null, 2), `request-${sectionIndex}-${endpointIndex}`)}
                            className="absolute top-2 right-2 p-2 hover:bg-gray-200 rounded"
                          >
                            {copiedCode === `request-${sectionIndex}-${endpointIndex}` ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                          </button>
                          <pre className="text-sm overflow-x-auto">
                            <code>{JSON.stringify(endpoint.example.request, null, 2)}</code>
                          </pre>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Response Example:</h4>
                        <div className="bg-gray-100 rounded-lg p-4 relative">
                          <button
                            onClick={() => copyToClipboard(JSON.stringify(endpoint.example.response, null, 2), `response-${sectionIndex}-${endpointIndex}`)}
                            className="absolute top-2 right-2 p-2 hover:bg-gray-200 rounded"
                          >
                            {copiedCode === `response-${sectionIndex}-${endpointIndex}` ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                          </button>
                          <pre className="text-sm overflow-x-auto">
                            <code>{JSON.stringify(endpoint.example.response, null, 2)}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">Need Help Getting Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our developer support team is here to help you integrate our APIs successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Contact Support
            </a>
            <a
              href="tel:+13024640950"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all"
            >
              Call: (302) 464-0950
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApiDocsPage;