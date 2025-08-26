import React from 'react';
import Head from 'next/head';
import { 
  Code, 
  Key, 
  Shield, 
  Brain, 
  BarChart, 
  Zap,
  Download,
  BookOpen,
  Play,
  Terminal,
  Server,
  Database,
  Cloud,
  Lock,
  Eye,
  Bug,
  Activity,
  PieChart,
  LineChart,
  Map,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Info,
  ExternalLink
} from 'lucide-react';

export default function APIDocsPage() {
  return (
    <>
      <Head>
        <title>API Documentation | Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's services. Get started with integration, authentication, and code examples." />
        <meta name="keywords" content="API documentation, REST API, authentication, integration, code examples, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="API Documentation | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive API documentation for Zion Tech Group's services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/api-docs" />
        <link rel="canonical" href="https://ziontechgroup.com/api-docs" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              API <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Documentation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Integrate with Zion Tech Group's services using our comprehensive REST APIs. 
              Get started with authentication, endpoints, and code examples.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Get Started</span>
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center justify-center space-x-2">
                <Key className="h-5 w-5" />
                <span>Get API Key</span>
              </button>
            </div>
          </div>
        </section>

        {/* API Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">API Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Services API */}
              <div className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                <div className="p-6">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">AI Services API</h3>
                  <p className="text-gray-300 text-sm mb-4 text-center">
                    Machine learning, NLP, and computer vision endpoints
                  </p>
                  <button className="w-full px-4 py-3 bg-blue-600/20 text-blue-400 font-semibold rounded-lg hover:bg-blue-600/30 transition-all duration-200">
                    View Documentation
                  </button>
                </div>
              </div>

              {/* Security API */}
              <div className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-300">
                <div className="p-6">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">Security API</h3>
                  <p className="text-gray-300 text-sm mb-4 text-center">
                    Threat detection and security monitoring
                  </p>
                  <button className="w-full px-4 py-3 bg-red-600/20 text-red-400 font-semibold rounded-lg hover:bg-red-600/30 transition-all duration-200">
                    View Documentation
                  </button>
                </div>
              </div>

              {/* Analytics API */}
              <div className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-green-500/50 transition-all duration-300">
                <div className="p-6">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <BarChart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">Analytics API</h3>
                  <p className="text-gray-300 text-sm mb-4 text-center">
                    Data insights and performance metrics
                  </p>
                  <button className="w-full px-4 py-3 bg-green-600/20 text-green-400 font-semibold rounded-lg hover:bg-green-600/30 transition-all duration-200">
                    View Documentation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Getting Started</h2>
            <div className="space-y-8">
              {/* Authentication */}
              <div className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400 flex items-center space-x-2">
                  <Key className="h-5 w-5" />
                  <span>Authentication</span>
                </h3>
                <p className="text-gray-300 mb-4">
                  All API requests require authentication using an API key. Include your API key in the Authorization header.
                </p>
                <div className="bg-black/40 rounded-lg p-4 mb-4 overflow-x-auto">
                  <code className="text-green-400 text-sm">
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </div>
                <p className="text-gray-400 text-sm">
                  Get your API key from the <a href="/contact" className="text-cyan-400 hover:text-cyan-300">contact page</a>.
                </p>
              </div>

              {/* Base URL */}
              <div className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-400 flex items-center space-x-2">
                  <Server className="h-5 w-5" />
                  <span>Base URL</span>
                </h3>
                <p className="text-gray-300 mb-4">
                  All API endpoints are relative to our base URL:
                </p>
                <div className="bg-black/40 rounded-lg p-4 mb-4 overflow-x-auto">
                  <code className="text-green-400 text-sm">
                    https://api.ziontechgroup.com/v1
                  </code>
                </div>
              </div>

              {/* Rate Limits */}
              <div className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-yellow-400 flex items-center space-x-2">
                  <Activity className="h-5 w-5" />
                  <span>Rate Limits</span>
                </h3>
                <p className="text-gray-300 mb-4">
                  API requests are limited to 1000 requests per hour per API key. Contact us for higher limits.
                </p>
                <div className="bg-black/40 rounded-lg p-4 overflow-x-auto">
                  <code className="text-green-400 text-sm">
                    X-RateLimit-Limit: 1000
                    X-RateLimit-Remaining: 999
                    X-RateLimit-Reset: 1640995200
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services API */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">AI Services API</h2>
            <div className="space-y-8">
              {/* Text Analysis */}
              <div className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Text Analysis</h3>
                <p className="text-gray-300 mb-4">
                  Analyze text for sentiment, entities, and key phrases.
                </p>
                <div className="bg-black/40 rounded-lg p-4 mb-4 overflow-x-auto">
                  <code className="text-green-400 text-sm">
                    POST /ai/text/analyze
                    Content-Type: application/json
                    
                    {`{
                      "text": "Your text here",
                      "analysis_type": "sentiment"
                    }`}
                  </code>
                </div>
              </div>

              {/* Image Recognition */}
              <div className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Image Recognition</h3>
                <p className="text-gray-300 mb-4">
                  Identify objects, faces, and text in images.
                </p>
                <div className="bg-black/40 rounded-lg p-4 mb-4 overflow-x-auto">
                  <code className="text-green-400 text-sm">
                    POST /ai/image/analyze
                    Content-Type: multipart/form-data
                    
                    Form data: image file
                  </code>
                </div>
              </div>

              {/* Predictive Analytics */}
              <div className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400">Predictive Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Build and deploy machine learning models.
                </p>
                <div className="bg-black/40 rounded-lg p-4 mb-4 overflow-x-auto">
                  <code className="text-green-400 text-sm">
                    POST /ai/models/train
                    Content-Type: application/json
                    
                    {`{
                      "model_type": "regression",
                      "training_data": "data_url",
                      "parameters": {}
                    }`}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Code Examples</h2>
            <div className="space-y-8">
              {/* Python */}
              <div className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Python</h3>
                <div className="bg-black/40 rounded-lg p-4 overflow-x-auto">
                  <code className="text-green-400 text-sm">
                    {`import requests

api_key = "YOUR_API_KEY"
base_url = "https://api.ziontechgroup.com/v1"

headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

# Text analysis
response = requests.post(
    f"{base_url}/ai/text/analyze",
    headers=headers,
    json={"text": "Hello world!", "analysis_type": "sentiment"}
)

print(response.json())`}
                  </code>
                </div>
              </div>

              {/* JavaScript */}
              <div className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">JavaScript</h3>
                <div className="bg-black/40 rounded-lg p-4 overflow-x-auto">
                  <code className="text-green-400 text-sm">
                    {`const apiKey = 'YOUR_API_KEY';
const baseUrl = 'https://api.ziontechgroup.com/v1';

const headers = {
  'Authorization': \`Bearer \${apiKey}\`,
  'Content-Type': 'application/json'
};

// Text analysis
fetch(\`\${baseUrl}/ai/text/analyze\`, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    text: 'Hello world!',
    analysis_type: 'sentiment'
  })
})
.then(response => response.json())
.then(data => console.log(data));`}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SDKs and Libraries */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">SDKs & Libraries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Python SDK</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Official Python client library for easy integration
                </p>
                <button className="px-4 py-2 bg-blue-600/20 text-blue-400 font-medium rounded-lg hover:bg-blue-600/30 transition-all duration-200">
                  Install via pip
                </button>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">JavaScript SDK</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Official JavaScript/Node.js client library
                </p>
                <button className="px-4 py-2 bg-yellow-600/20 text-yellow-400 font-medium rounded-lg hover:bg-yellow-600/30 transition-all duration-200">
                  Install via npm
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start integrating with our APIs today and unlock the power of AI, security, and analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
                Get API Key
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
                View Full Documentation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}