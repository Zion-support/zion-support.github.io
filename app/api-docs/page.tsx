'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
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
      id: 'ai-prediction',
      method: 'POST',
      path: '/api/v1/ai/predict',
      description: 'Generate AI predictions based on input data',
      example: `curl -X POST https://api.ziontechgroup.com/v1/ai/predict \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "model": "text-generation",
    "input": "Generate a business proposal for AI automation",
    "parameters": {
      "max_tokens": 500,
      "temperature": 0.7
    }
  }'`
    },
    {
      id: 'data-analysis',
      method: 'POST',
      path: '/api/v1/analytics/analyze',
      description: 'Analyze data and generate insights',
      example: `curl -X POST https://api.ziontechgroup.com/v1/analytics/analyze \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "dataset": "sales_data.csv",
    "analysis_type": "trend_analysis",
    "timeframe": "last_12_months"
  }'`
    },
    {
      id: 'automation-trigger',
      method: 'POST',
      path: '/api/v1/automation/trigger',
      description: 'Trigger automated workflows',
      example: `curl -X POST https://api.ziontechgroup.com/v1/automation/trigger \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "workflow_id": "customer_onboarding",
    "trigger_data": {
      "customer_id": "12345",
      "email": "customer@example.com"
    }
  }'`
    }
  ];

  const sdkExamples = [
    {
      language: 'JavaScript',
      code: `import { ZionTechAPI } from '@ziontechgroup/api-client';

const client = new ZionTechAPI({
  apiKey: 'your-api-key',
  baseURL: 'https://api.ziontechgroup.com'
});

// Generate AI prediction
const prediction = await client.ai.predict({
  model: 'text-generation',
  input: 'Generate a marketing email',
  parameters: { max_tokens: 200 }
});

console.log(prediction.result);`
    },
    {
      language: 'Python',
      code: `from ziontechgroup import APIClient

client = APIClient(api_key='your-api-key')

# Analyze data
result = client.analytics.analyze(
    dataset='sales_data.csv',
    analysis_type='trend_analysis'
)

print(result.insights)`
    },
    {
      language: 'cURL',
      code: `# Get API status
curl -X GET https://api.ziontechgroup.com/v1/status \\
  -H "Authorization: Bearer YOUR_API_KEY"

# Response
{
  "status": "operational",
  "version": "1.0.0",
  "uptime": "99.9%"
}`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">API Documentation</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Integrate with our AI and automation services using our comprehensive REST API.
          </p>
        </section>

        {/* Quick Start */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Zap className="w-8 h-8 mr-3 text-cyan-400" />
              Quick Start
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Get Your API Key</h3>
                <p className="text-gray-300 mb-4">
                  Sign up for an account and generate your API key from the dashboard.
                </p>
                <Link 
                  href="/contact" 
                  className="cyber-button inline-flex items-center"
                >
                  Get API Key
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">2. Make Your First Request</h3>
                <div className="bg-gray-800 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`curl -X POST https://api.ziontechgroup.com/v1/ai/predict \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"input": "Hello world"}'`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">API Endpoints</h2>
          <div className="space-y-6">
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className={`px-3 py-1 rounded text-sm font-semibold mr-4 ${
                        endpoint.method === 'POST' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-cyan-400 font-mono">{endpoint.path}</code>
                    </div>
                    <p className="text-gray-300">{endpoint.description}</p>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4 relative">
                  <button
                    onClick={() => copyToClipboard(endpoint.example, endpoint.id)}
                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === endpoint.id ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    {endpoint.example}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SDK Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">SDK Examples</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sdkExamples.map((example, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-cyan-400" />
                  {example.language}
                </h3>
                <div className="bg-gray-800 rounded-lg p-4 relative">
                  <button
                    onClick={() => copyToClipboard(example.code, `${example.language}-${index}`)}
                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === `${example.language}-${index}` ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    {example.code}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Authentication */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Key className="w-8 h-8 mr-3 text-cyan-400" />
              Authentication
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">API Key Authentication</h3>
                <p className="text-gray-300 mb-4">
                  Include your API key in the Authorization header of all requests.
                </p>
                <div className="bg-gray-800 rounded-lg p-4">
                  <pre className="text-green-400 text-sm">
{`Authorization: Bearer YOUR_API_KEY`}
                  </pre>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Rate Limits</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Free tier: 1,000 requests/month</li>
                  <li>• Pro tier: 10,000 requests/month</li>
                  <li>• Enterprise: Custom limits</li>
                  <li>• Rate limit: 100 requests/minute</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="text-center">
          <div className="cyber-card hologram-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-gray-300 mb-6">
              Our developer support team is here to help you integrate our APIs successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="cyber-button inline-flex items-center justify-center"
              >
                Contact Support
              </Link>
              <Link 
                href="/docs" 
                className="cyber-button inline-flex items-center justify-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                View Full Documentation
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiDocsPage;