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
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      method: 'POST',
      endpoint: '/api/ai/content/generate',
      description: 'Generate high-quality content using AI',
      parameters: [
        { name: 'prompt', type: 'string', required: true, description: 'Content prompt' },
        { name: 'tone', type: 'string', required: false, description: 'Content tone (professional, casual, etc.)' },
        { name: 'length', type: 'number', required: false, description: 'Desired content length' }
      ],
      example: {
        request: `{
  "prompt": "Write a blog post about AI in healthcare",
  "tone": "professional",
  "length": 1000
}`,
        response: `{
  "success": true,
  "content": "AI is revolutionizing healthcare...",
  "metadata": {
    "word_count": 1000,
    "tone": "professional",
    "generated_at": "2024-01-15T10:30:00Z"
  }
}`
      }
    },
    {
      id: 'ai-analysis',
      title: 'AI Data Analysis',
      method: 'POST',
      endpoint: '/api/ai/analyze',
      description: 'Analyze data using AI algorithms',
      parameters: [
        { name: 'data', type: 'array', required: true, description: 'Data to analyze' },
        { name: 'analysis_type', type: 'string', required: true, description: 'Type of analysis to perform' }
      ],
      example: {
        request: `{
  "data": [1, 2, 3, 4, 5],
  "analysis_type": "trend"
}`,
        response: `{
  "success": true,
  "analysis": {
    "trend": "increasing",
    "confidence": 0.95,
    "insights": ["Data shows upward trend"]
  }
}`
      }
    },
    {
      id: 'ai-automation',
      title: 'AI Workflow Automation',
      method: 'POST',
      endpoint: '/api/ai/automate',
      description: 'Automate business workflows',
      parameters: [
        { name: 'workflow_id', type: 'string', required: true, description: 'Workflow identifier' },
        { name: 'trigger_data', type: 'object', required: true, description: 'Trigger data' }
      ],
      example: {
        request: `{
  "workflow_id": "email_campaign",
  "trigger_data": {
    "user_id": "12345",
    "campaign_type": "welcome"
  }
}`,
        response: `{
  "success": true,
  "workflow_executed": true,
  "execution_id": "exec_789",
  "status": "completed"
}`
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            API Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive API documentation for all Zion Tech Group AI services and endpoints
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#getting-started"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </a>
            <a
              href="#endpoints"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all"
            >
              View Endpoints
            </a>
          </div>
        </section>

        {/* Getting Started */}
        <section id="getting-started" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Getting Started</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Authentication</h3>
            <p className="text-gray-600 mb-4">
              All API requests require authentication using your API key. Include it in the Authorization header:
            </p>
            <div className="bg-gray-100 rounded p-4 mb-4">
              <code>Authorization: Bearer YOUR_API_KEY</code>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Base URL</h3>
            <div className="bg-gray-100 rounded p-4 mb-4">
              <code>https://api.ziontechgroup.com/v1</code>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Rate Limits</h3>
            <p className="text-gray-600">
              API requests are limited to 1000 requests per hour per API key. Contact us for higher limits.
            </p>
          </div>
        </section>

        {/* API Endpoints */}
        <section id="endpoints" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">API Endpoints</h2>
          <div className="space-y-8">
            {apiEndpoints.map((endpoint) => (
              <div key={endpoint.id} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold">{endpoint.title}</h3>
                  <span className={`px-3 py-1 rounded text-sm font-medium ${
                    endpoint.method === 'POST' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {endpoint.method}
                  </span>
                </div>
                
                <div className="bg-gray-100 rounded p-3 mb-4 font-mono text-sm">
                  {endpoint.endpoint}
                </div>
                
                <p className="text-gray-600 mb-6">{endpoint.description}</p>
                
                <h4 className="text-lg font-semibold mb-3">Parameters</h4>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Required</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {endpoint.parameters.map((param, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2 font-mono">{param.name}</td>
                          <td className="border border-gray-300 px-4 py-2">{param.type}</td>
                          <td className="border border-gray-300 px-4 py-2">
                            {param.required ? (
                              <span className="text-red-600 font-semibold">Yes</span>
                            ) : (
                              <span className="text-gray-500">No</span>
                            )}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">{param.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <h4 className="text-lg font-semibold mb-3">Example Request</h4>
                <div className="bg-gray-900 rounded p-4 mb-4 relative">
                  <button
                    onClick={() => copyToClipboard(endpoint.example.request, `${endpoint.id}-request`)}
                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === `${endpoint.id}-request` ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{endpoint.example.request}</code>
                  </pre>
                </div>
                
                <h4 className="text-lg font-semibold mb-3">Example Response</h4>
                <div className="bg-gray-900 rounded p-4 relative">
                  <button
                    onClick={() => copyToClipboard(endpoint.example.response, `${endpoint.id}-response`)}
                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === `${endpoint.id}-response` ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                  <pre className="text-blue-400 text-sm overflow-x-auto">
                    <code>{endpoint.example.response}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Need Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our developer support team is here to help you integrate our APIs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="mailto:api@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all"
            >
              Email API Team
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiDocsPage;