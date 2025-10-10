'use client';

import React from 'react';
import { 
  Code,
  Key,
  Zap,
  ArrowRight,
  CheckCircle,
  Copy,
  Play,
  BookOpen
} from 'lucide-react';

const ApiDocsPage: React.FC = () => {
  const apiEndpoints = [
    {
      method: "POST",
      endpoint: "/api/v1/ai/workflow/automate",
      description: "Automate a workflow using AI",
      parameters: [
        { name: "workflow_id", type: "string", required: true, description: "Unique identifier for the workflow" },
        { name: "data", type: "object", required: true, description: "Input data for the workflow" },
        { name: "options", type: "object", required: false, description: "Additional configuration options" }
      ],
      example: {
        request: `{
  "workflow_id": "wf_123456",
  "data": {
    "input": "Process this document",
    "type": "document_processing"
  },
  "options": {
    "priority": "high",
    "notify": true
  }
}`,
        response: `{
  "success": true,
  "job_id": "job_789012",
  "status": "queued",
  "estimated_completion": "2024-01-15T10:30:00Z"
}`
      }
    },
    {
      method: "GET",
      endpoint: "/api/v1/ai/analytics/dashboard",
      description: "Get analytics dashboard data",
      parameters: [
        { name: "date_range", type: "string", required: false, description: "Date range for analytics (e.g., '7d', '30d', '90d')" },
        { name: "metrics", type: "array", required: false, description: "Specific metrics to retrieve" }
      ],
      example: {
        request: `GET /api/v1/ai/analytics/dashboard?date_range=30d&metrics=usage,performance`,
        response: `{
  "success": true,
  "data": {
    "usage": {
      "total_requests": 15420,
      "success_rate": 99.2
    },
    "performance": {
      "avg_response_time": 245,
      "uptime": 99.9
    }
  }
}`
      }
    },
    {
      method: "POST",
      endpoint: "/api/v1/ai/content/generate",
      description: "Generate content using AI",
      parameters: [
        { name: "prompt", type: "string", required: true, description: "Content generation prompt" },
        { name: "type", type: "string", required: true, description: "Type of content to generate" },
        { name: "length", type: "integer", required: false, description: "Desired content length" }
      ],
      example: {
        request: `{
  "prompt": "Write a blog post about AI trends",
  "type": "blog_post",
  "length": 1000
}`,
        response: `{
  "success": true,
  "content": "Artificial Intelligence is rapidly transforming...",
  "word_count": 987,
  "generated_at": "2024-01-15T10:30:00Z"
}`
      }
    }
  ];

  const codeExamples = [
    {
      language: "JavaScript",
      code: `const response = await fetch('https://api.ziontechgroup.com/v1/ai/workflow/automate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    workflow_id: 'wf_123456',
    data: {
      input: 'Process this document',
      type: 'document_processing'
    }
  })
});

const result = await response.json();
console.log(result);`
    },
    {
      language: "Python",
      code: `import requests

url = 'https://api.ziontechgroup.com/v1/ai/workflow/automate'
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}
data = {
    'workflow_id': 'wf_123456',
    'data': {
        'input': 'Process this document',
        'type': 'document_processing'
    }
}

response = requests.post(url, headers=headers, json=data)
result = response.json()
print(result)`
    },
    {
      language: "cURL",
      code: `curl -X POST https://api.ziontechgroup.com/v1/ai/workflow/automate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "workflow_id": "wf_123456",
    "data": {
      "input": "Process this document",
      "type": "document_processing"
    }
  }'`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            API Documentation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Complete API reference for integrating our AI and IT services into your applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              <Key className="w-5 h-5 mr-2" />
              Get API Key
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Examples
            </button>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              API Endpoints
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive API endpoints for AI and IT services.
            </p>
          </div>
          
          <div className="space-y-8">
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`px-3 py-1 rounded text-sm font-semibold ${
                        endpoint.method === 'GET' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-cyan-400 font-mono text-lg">{endpoint.endpoint}</code>
                    </div>
                    <p className="text-gray-300">{endpoint.description}</p>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Parameters</h3>
                    <div className="space-y-3">
                      {endpoint.parameters.map((param, paramIndex) => (
                        <div key={paramIndex} className="bg-slate-800/50 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <code className="text-cyan-400 font-mono">{param.name}</code>
                            <span className="text-gray-400 text-sm">({param.type})</span>
                            {param.required && (
                              <span className="text-red-400 text-xs">required</span>
                            )}
                          </div>
                          <p className="text-gray-300 text-sm">{param.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Example</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Request</h4>
                        <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                          <pre className="text-gray-300 text-sm">{endpoint.example.request}</pre>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Response</h4>
                        <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                          <pre className="text-gray-300 text-sm">{endpoint.example.response}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Code Examples
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started quickly with our code examples in multiple programming languages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {codeExamples.map((example, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">{example.language}</h3>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
                <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-gray-300 text-sm">{example.code}</pre>
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-4 h-4 mr-2" />
                  Try It
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Authentication
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Secure your API calls with our authentication system.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="cyber-card p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Key className="w-6 h-6 mr-3 text-cyan-400" />
                API Keys
              </h3>
              <p className="text-gray-300 mb-6">
                All API requests require authentication using an API key. Include your API key in the Authorization header.
              </p>
              <div className="bg-slate-900 rounded-lg p-4 mb-6">
                <pre className="text-gray-300 text-sm">Authorization: Bearer YOUR_API_KEY</pre>
              </div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Generate API Key
              </button>
            </div>
            
            <div className="cyber-card p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-cyan-400" />
                Security Best Practices
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Keep your API key secure and never expose it in client-side code</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Use HTTPS for all API requests</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Rotate your API keys regularly</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Monitor your API usage and set up alerts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our developer support team is here to help you integrate our APIs successfully.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Contact Support
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Join Developer Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiDocsPage;