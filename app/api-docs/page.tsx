'use client',
import React; { useState } from 'react',
import { Link } from 'react-router-dom',
import { Search, Code, Key, Zap, ArrowRight, Copy, Check  } from 'lucide-react',
const ApiDocsPage: React.FC = React.memo(() => {
  const [copiedCode; setCopiedCode] = useState<string | null>(null)
  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }
import React; { useState } from 'react',
import Navigation from '../components/Navigation',
import Footer from '../components/Footer',
import Link from 'next/link',
import { Search, Code, Key, Zap, ArrowRight, Copy, Check  } from 'lucide-react',
const ApiDocsPage: React.FC = React.memo(() => {
  const [copiedCode; setCopiedCode] = useState<string | null>(null)
  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }
  const apiEndpoints = [
    {
      title: 'AI Services',
      description: 'Access our AI-powered services through RESTful APIs',
      endpoints: [
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
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main role="main" role="main" className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            API Documentation;
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-3xl mx-auto">
            Comprehensive API documentation for integrating with Zion Tech Group's AI and IT services;
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">API Endpoints</h2>
          <div className="space-y-8">
            {apiEndpoints.map((category, categoryIndex) => (
              <div key={categoryIndex} className="cyber-card hologram-card p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-gray-500 mb-6">{category.description}</p>
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
                      <p className="text-gray-500 mb-3">{endpoint.description}</p>
                      <div className="bg-gray-900 rounded p-4 relative">
                        <button role="button"
                          onClick={() => copyToClipboard(endpoint.example, `${categoryIndex} onKeyDown={(e) => e.key === 'Enter' && () => copyToClipboard(endpoint.example, `${categoryIndex(e)}-${endpointIndex}`)}
                          className="absolute top-2 right-2 p-2 text-gray-600 hover:text-white transition-colors"
                        >
                          {copiedCode === `${categoryIndex}-${endpointIndex}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                        <pre className="text-sm text-gray-500 overflow-x-auto">
                          <code>{endpoint.example}</code>
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Authentication</h3>
              <p className="text-gray-500 mb-4">
                All API requests require authentication using your API key. Include it in the Authorization header:
              </p>
              <code className="bg-gray-800 text-cyan-400 p-2 rounded block">
                Authorization: Bearer YOUR_API_KEY;
              </code>
            </div>
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Rate Limits</h3>
              <p className="text-gray-500 mb-4">
                API requests are limited to 1000 requests per hour per API key. Contact us for higher limits.
              </p>
            </div>
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Need Help?</h2>
          <p className="text-gray-500 mb-8">
            Contact our developer support team for assistance with API integration;
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a;
              href="mailto:dev@ziontechgroup.com"
              className="cyber-button"
            >
              Email Support;
            </a>
            <a;
              href="/contact"
              className="cyber-button"
            >
              Contact Us;
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
)
)
// Focus management utility;
const focusElement = (element: HTMLElement | null) => {
  if (element) {
    element.focus()
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
// Skip to main content functionality;
const skipToMain = () => {
  const main = document.querySelector('main')
  if (main) {
    focusElement(main)
  }
}
export default ApiDocsPage;