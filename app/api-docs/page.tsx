'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Code, Key, Zap, ArrowRight, Copy, Check } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const APIDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const apiEndpoints = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics API',
      description: 'Get insights from your data using our AI-powered analytics',
      method: 'POST',
      endpoint: '/api/v1/analytics/analyze',
      category: 'AI Services',
      color: 'text-purple-400 bg-purple-500/10',
      examples: [
        {
          language: 'JavaScript',
          code: `const response = await fetch('/api/v1/analytics/analyze', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    data: yourDataArray,
    analysisType: 'sentiment',
    options: {
      language: 'en',
      detailed: true
    }
  })
});

const result = await response.json();
console.log(result);`
        },
        {
          language: 'Python',
          code: `import requests

url = "https://api.ziontechgroup.com/v1/analytics/analyze"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
}
data = {
    "data": your_data_array,
    "analysisType": "sentiment",
    "options": {
        "language": "en",
        "detailed": True
    }
}

response = requests.post(url, json=data, headers=headers)
result = response.json()
print(result)`
        }
      ]
    },
    {
      id: 'cloud-management',
      title: 'Cloud Management API',
      description: 'Manage your cloud infrastructure and resources',
      method: 'GET',
      endpoint: '/api/v1/cloud/resources',
      category: 'Cloud Services',
      color: 'text-blue-400 bg-blue-500/10',
      examples: [
        {
          language: 'JavaScript',
          code: `const response = await fetch('/api/v1/cloud/resources', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

const resources = await response.json();
console.log(resources);`
        }
      ]
    },
    {
      id: 'security-scan',
      title: 'Security Scan API',
      description: 'Scan your applications for security vulnerabilities',
      method: 'POST',
      endpoint: '/api/v1/security/scan',
      category: 'Security',
      color: 'text-red-400 bg-red-500/10',
      examples: [
        {
          language: 'JavaScript',
          code: `const response = await fetch('/api/v1/security/scan', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    target: 'https://your-app.com',
    scanType: 'comprehensive',
    options: {
      includeSubdomains: true,
      deepScan: true
    }
  })
});

const scanResult = await response.json();
console.log(scanResult);`
        }
      ]
    }
  ];

  const responseExamples = [
    {
      title: 'Success Response',
      code: `{
  "success": true,
  "data": {
    "analysisId": "anal_123456789",
    "results": {
      "sentiment": "positive",
      "confidence": 0.95,
      "keywords": ["excellent", "amazing", "love"],
      "summary": "Overall positive sentiment detected"
    },
    "timestamp": "2024-01-15T10:30:00Z"
  },
  "message": "Analysis completed successfully"
}`
    },
    {
      title: 'Error Response',
      code: `{
  "success": false,
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Invalid request parameters",
    "details": {
      "field": "data",
      "issue": "Data array cannot be empty"
    }
  },
  "timestamp": "2024-01-15T10:30:00Z"
}`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="API Documentation - Zion Tech Group"
        description="Complete API reference for our AI, cloud, and cybersecurity services. Get started with code examples and detailed documentation."
        keywords={["API documentation","API reference","REST API","AI API","cloud API","security API"]}
        canonicalUrl="https://ziontechgroup.com/api-docs"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              API Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete API reference for our AI, cloud, and cybersecurity services. Get started with code examples and detailed documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#getting-started"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Get Started
              </a>
              <a
                href="#endpoints"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Endpoints
              </a>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section id="getting-started" className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Getting Started</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">1. Get Your API Key</h3>
                  <p className="text-gray-300 mb-4">
                    Sign up for an account and generate your API key from the dashboard.
                  </p>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Key className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-400">API Key</span>
                    </div>
                    <code className="text-green-400 text-sm">sk-1234567890abcdef...</code>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">2. Base URL</h3>
                  <p className="text-gray-300 mb-4">
                    All API requests should be made to our base URL:
                  </p>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <code className="text-cyan-400 text-sm">https://api.ziontechgroup.com/v1</code>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">3. Authentication</h3>
                  <p className="text-gray-300 mb-4">
                    Include your API key in the Authorization header:
                  </p>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <code className="text-gray-300 text-sm">Authorization: Bearer YOUR_API_KEY</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section id="endpoints" className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">API Endpoints</h2>
            <div className="space-y-8">
              {apiEndpoints.map((endpoint) => (
                <div key={endpoint.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 ${endpoint.color.split(' ')[1]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Zap className={`w-6 h-6 ${endpoint.color.split(' ')[0]}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl font-semibold text-white">{endpoint.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${endpoint.color}`}>
                          {endpoint.category}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{endpoint.description}</p>
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded text-sm font-medium ${
                          endpoint.method === 'POST' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-cyan-400 text-sm">{endpoint.endpoint}</code>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {endpoint.examples.map((example, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-lg font-semibold text-white">{example.language} Example</h4>
                          <button
                            onClick={() => copyToClipboard(example.code, `${endpoint.id}-${index}`)}
                            className="flex items-center gap-2 px-3 py-1 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20 transition-colors">
                            {copiedCode === `${endpoint.id}-${index}` ? (
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
                          <pre className="text-gray-300 text-sm">
                            <code>{example.code}</code>
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

        {/* Response Examples */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Response Examples</h2>
            <div className="space-y-6">
              {responseExamples.map((example, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">{example.title}</h3>
                  <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-gray-300 text-sm">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Need Help with the API?
            </h2>
            <p className="text-gray-300 mb-8">
              Our developer support team is here to help you integrate our APIs successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/support"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Contact Support
              </a>
              <a
                href="mailto:api-support@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Email API Team
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default APIDocsPage;