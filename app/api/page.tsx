'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CodeBracketIcon,
  KeyIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

export default function APIPage() {
  const apiEndpoints = [
    {
      title: "Authentication",
      description: "Secure API authentication and authorization",
      method: "POST",
      endpoint: "/api/auth/login",
      icon: KeyIcon,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Models",
      description: "Access our AI models and machine learning services",
      method: "POST",
      endpoint: "/api/ai/models",
      icon: CpuChipIcon,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud Services",
      description: "Manage cloud infrastructure and resources",
      method: "GET",
      endpoint: "/api/cloud/services",
      icon: CloudIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cybersecurity",
      description: "Security monitoring and threat detection APIs",
      method: "POST",
      endpoint: "/api/security/scan",
      icon: ShieldCheckIcon,
      color: "from-red-500 to-orange-500"
    }
  ];

  const codeExamples = [
    {
      language: "JavaScript",
      title: "Authentication Example",
      code: `// Get API key from dashboard
const apiKey = 'your-api-key-here';

// Make authenticated request
const response = await fetch('https://api.ziontechgroup.com/v1/auth/login', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'your-username',
    password: 'your-password'
  })
});

const data = await response.json();
console.log(data);`
    },
    {
      language: "Python",
      title: "AI Model Prediction",
      code: `import requests

# Set up API client
api_key = "your-api-key-here"
base_url = "https://api.ziontechgroup.com/v1"

# Make prediction request
response = requests.post(
    f"{base_url}/ai/models/predict",
    headers={
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    },
    json={
        "model_id": "text-classifier-v1",
        "input_data": "This is a sample text for classification"
    }
)

result = response.json()
print(result)`
    },
    {
      language: "cURL",
      title: "Cloud Resource Management",
      code: `# List cloud resources
curl -X GET "https://api.ziontechgroup.com/v1/cloud/resources" \\
  -H "Authorization: Bearer your-api-key-here" \\
  -H "Content-Type: application/json"

# Create new resource
curl -X POST "https://api.ziontechgroup.com/v1/cloud/resources" \\
  -H "Authorization: Bearer your-api-key-here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "my-server",
    "type": "compute",
    "region": "us-east-1"
  }'`
    }
  ];

  return (
    <>
      <Helmet>
        <title>API Reference - Zion Tech Group</title>
        <meta name="description" content="Complete API reference for Zion Tech Group's services. Find endpoints, authentication, code examples, and integration guides." />
        <meta name="keywords" content="API reference, REST API, authentication, endpoints, integration, developers" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              API Reference
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Complete API documentation for developers
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Integrate with our AI, IT, and cloud services using our comprehensive REST API. 
              Find endpoints, authentication methods, and code examples to get started quickly.
            </p>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">API Endpoints</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {apiEndpoints.map((endpoint, index) => {
                const Icon = endpoint.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${endpoint.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{endpoint.title}</h3>
                        <p className="text-gray-300">{endpoint.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`px-3 py-1 rounded text-sm font-semibold ${
                          endpoint.method === 'POST' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-gray-300 bg-slate-800 px-3 py-1 rounded text-sm">
                          {endpoint.endpoint}
                        </code>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/api/${endpoint.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-green-400 hover:text-green-300 font-semibold flex items-center gap-2"
                    >
                      View Documentation <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Code Examples</h2>
            <div className="space-y-8">
              {codeExamples.map((example, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 overflow-hidden">
                  <div className="p-6 border-b border-slate-600">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">{example.title}</h3>
                      <span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold">
                        {example.language}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <pre className="bg-slate-900 text-gray-300 p-6 rounded-lg overflow-x-auto text-sm">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-green-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Authentication</h2>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">API Key Authentication</h3>
              <p className="text-gray-300 mb-6">
                All API requests require authentication using an API key. You can obtain your API key from the dashboard.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Include API key in Authorization header</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Use Bearer token format</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Keep your API key secure and private</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-slate-900 rounded-lg">
                <code className="text-gray-300">
                  Authorization: Bearer your-api-key-here
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Rate Limits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Free Tier</h3>
                <p className="text-3xl font-bold text-green-400 mb-2">1,000</p>
                <p className="text-gray-300">requests per hour</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Pro Tier</h3>
                <p className="text-3xl font-bold text-green-400 mb-2">10,000</p>
                <p className="text-gray-300">requests per hour</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-3xl font-bold text-green-400 mb-2">Unlimited</p>
                <p className="text-gray-300">requests per hour</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-green-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Get your API key and start building with our services today
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get API Key
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/docs" 
                className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Documentation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}