import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Code, Key, Zap, Shield, Download, Book, CheckCircle, ArrowRight } from 'lucide-react';

const APIPage: React.FC = () => {
  const endpoints = [
    {
      method: 'POST',
      path: '/api/v1/ai/generate',
      description: 'Generate AI content using our advanced models',
      parameters: ['prompt', 'model', 'max_tokens', 'temperature']
    },
    {
      method: 'GET',
      path: '/api/v1/ai/models',
      description: 'List available AI models and their capabilities',
      parameters: ['category', 'version', 'status']
    },
    {
      method: 'POST',
      path: '/api/v1/ai/analyze',
      description: 'Analyze text, images, or data using AI',
      parameters: ['input', 'type', 'analysis_type', 'options']
    },
    {
      method: 'GET',
      path: '/api/v1/ai/usage',
      description: 'Get usage statistics and billing information',
      parameters: ['start_date', 'end_date', 'format']
    }
  ];

  const features = [
    'RESTful API design',
    'JSON request/response format',
    'Rate limiting and throttling',
    'Comprehensive error handling',
    'SDK support for multiple languages',
    'Real-time webhooks',
    'Batch processing capabilities',
    'Advanced authentication'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            API Reference
          </h1>
          <p className="text-lg sm:text-xl text-cyan-400 mb-8 font-medium">
            Developer API Documentation
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Integrate our AI and IT services into your applications with our comprehensive REST API. 
            Access powerful AI capabilities, manage resources, and build amazing applications.
          </p>
        </section>

        {/* Quick Start */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Quick Start
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Key className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">1. Get API Key</h3>
                <p className="text-gray-300 text-sm">Sign up and get your API key from the dashboard</p>
              </div>
              <div className="text-center">
                <Code className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">2. Make Request</h3>
                <p className="text-gray-300 text-sm">Use our REST API to integrate AI capabilities</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">3. Scale Up</h3>
                <p className="text-gray-300 text-sm">Scale your application with our powerful infrastructure</p>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            API Endpoints
          </h2>
          <div className="space-y-6">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded text-sm font-semibold ${
                      endpoint.method === 'GET' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-cyan-400 font-mono">{endpoint.path}</code>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{endpoint.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Parameters:</h4>
                  <div className="flex flex-wrap gap-2">
                    {endpoint.parameters.map((param, paramIndex) => (
                      <span key={paramIndex} className="px-2 py-1 bg-white/10 rounded text-sm text-gray-300">
                        {param}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              API Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Code Examples
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">JavaScript/Node.js</h3>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
{`const response = await fetch('https://api.ziontechgroup.com/v1/ai/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'Generate a business plan for a tech startup',
    model: 'gpt-4',
    max_tokens: 1000
  })
});

const data = await response.json();
console.log(data);`}
                  </pre>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Python</h3>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
{`import requests

url = "https://api.ziontechgroup.com/v1/ai/generate"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "prompt": "Generate a business plan for a tech startup",
    "model": "gpt-4",
    "max_tokens": 1000
}

response = requests.post(url, headers=headers, json=data)
result = response.json()
print(result)`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SDK Downloads */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              SDK Downloads
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Download className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">JavaScript</h3>
                <p className="text-gray-300 text-sm mb-4">npm install ziontechgroup-js</p>
                <button className="cyber-button">Download</button>
              </div>
              <div className="text-center">
                <Download className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Python</h3>
                <p className="text-gray-300 text-sm mb-4">pip install ziontechgroup</p>
                <button className="cyber-button">Download</button>
              </div>
              <div className="text-center">
                <Download className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Java</h3>
                <p className="text-gray-300 text-sm mb-4">Maven/Gradle support</p>
                <button className="cyber-button">Download</button>
              </div>
              <div className="text-center">
                <Download className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">C#</h3>
                <p className="text-gray-300 text-sm mb-4">NuGet package available</p>
                <button className="cyber-button">Download</button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-8 sm:p-12 cyber-card">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Ready to Start Building?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get your API key and start integrating our AI services into your applications today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get API Key
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default APIPage;
