import React, { useState } from 'react';';'
import SEOHead from '../components/SEOHead';';'
import { 
  CodeBracketIcon, 
  DocumentTextIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BoltIcon,
  GlobeAltIcon,
  CogIcon,
  ChartBarIcon,
  ClipboardDocumentIcon;
} from '@heroicons/react/24/outline';''

const APIDocsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');''

  const apiEndpoints = [
    {
      method: 'GET',''
      endpoint: '/api/v1/ai/analyze',''
      description: 'Analyze text using AI models',''
      parameters: [
        { name: 'text', type: 'string', required: true, description: 'Text to analyze' },''
        { name: 'model', type: 'string', required: false, description: 'AI model to use' }''
      ]
    },
    {
      method: 'POST',''
      endpoint: '/api/v1/ai/generate',''
      description: 'Generate content using AI',''
      parameters: [
        { name: 'prompt', type: 'string', required: true, description: 'Generation prompt' },''
        { name: 'max_tokens', type: 'integer', required: false, description: 'Maximum tokens to generate' }''
      ]
    },
    {
      method: 'GET',''
      endpoint: '/api/v1/analytics/dashboard',''
      description: 'Get analytics dashboard data',''
      parameters: [
        { name: 'date_range', type: 'string', required: false, description: 'Date range for analytics' },''
        { name: 'metrics', type: 'array', required: false, description: 'Specific metrics to retrieve' }''
      ]
    },
    {
      method: 'POST',''
      endpoint: '/api/v1/security/scan',''
      description: 'Perform security scan',''
      parameters: [
        { name: 'target', type: 'string', required: true, description: 'Target to scan' },''
        { name: 'scan_type', type: 'string', required: true, description: 'Type of security scan' }''
      ]
    }
  ];

  const sdkLanguages = [
    { name: 'JavaScript/Node.js', icon: '🟨', description: 'Official SDK for JavaScript and Node.js applications' },''
    { name: 'Python', icon: '🐍', description: 'Comprehensive Python SDK with full API support' },''
    { name: 'Java', icon: '☕', description: 'Enterprise-grade Java SDK for large-scale applications' },''
    { name: 'PHP', icon: '🐘', description: 'PHP SDK for web applications and content management' },''
    { name: 'Go', icon: '🐹', description: 'High-performance Go SDK for microservices' },''
    { name: 'C#', icon: '🔷', description: 'Microsoft .NET SDK for enterprise applications' }''
  ];

  const codeExamples = {
    javascript: `// Initialize the SDK
const zion = require('@ziontechgroup/sdk');''

const client = new zion.Client({)
  apiKey: 'your-api-key',''
  environment: 'production'''
});

// Analyze text with AI
const analysis = await client.ai.analyze({)
  text: 'Your text here',''
  model: 'gpt-4'''
});

console.log(analysis);`,
    python: `# Install the SDK
pip install ziontechgroup

# Initialize the client
from ziontechgroup import Client

client = Client()
    api_key='your-api-key',''
    environment='production'''
)

# Generate content with AI
response = client.ai.generate()
    prompt='Your prompt here',''
    max_tokens=100
)

print(response)`,
    curl: `curl -X POST "https://api.ziontechgroup.com/v1/ai/generate" \\""
  -H "Authorization: Bearer your-api-key" \\""
  -H "Content-Type: application/json" \\""
  -d '{''
    "prompt": "Your prompt here",""
    "max_tokens": 100""
  }'`'';
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: DocumentTextIcon },''
    { id: 'authentication', name: 'Authentication', icon: ShieldCheckIcon },''
    { id: 'endpoints', name: 'Endpoints', icon: CodeBracketIcon },''
    { id: 'sdks', name: 'SDKs', icon: CogIcon },''
    { id: 'examples', name: 'Examples', icon: ClipboardDocumentIcon }''
  ];

  return ()
    <>
      <SEOHead 
        title="API Documentation - Zion Tech Group"""
        description="Complete API documentation for Zion Tech Group services. Get started with our APIs, SDKs, and integration guides."""
        keywords="API documentation, REST API, SDK, integration, developer tools, API reference, webhooks"""
      />
      
      <div className="min-h-screen bg-slate-900 text-white">""
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">""
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30"></div>""
          <div className="absolute inset-0 opacity-20" style={{""
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`'"'"
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""
            <div className="text-center">""
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">""
                <CodeBracketIcon className="w-5 h-5 text-purple-400 mr-2" />""
                <span className="text-purple-300 text-sm font-medium">API Documentation</span>""
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">""
                Developer
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">""
                  API Reference
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""
                Integrate Zion Tech Group services into your applications with our comprehensive APIs and SDKs. Get started quickly with our developer-friendly documentation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">""
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">""
                  Get API Key
                  <ArrowRightIcon className="w-4 h-4 ml-2 inline" />""
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">""
                  View Examples
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-8 bg-slate-800/30">""
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""
            <div className="flex flex-wrap justify-center gap-2">""
              {tabs.map((tab) => ()
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-purple-600 text-white'''
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'''
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />""
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">""
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""
            {activeTab === 'overview' && ('')
              <div className="space-y-12">""
                <div className="text-center">""
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">""
                    API <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Overview</span>""
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">""
                    Our RESTful API provides programmatic access to all Zion Tech Group services. Built with developers in mind, it's fast, reliable, and easy to integrate.''
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">""
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">""
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">""
                      <BoltIcon className="w-6 h-6 text-white" />""
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Fast & Reliable</h3>""
                    <p className="text-gray-400">High-performance API with 99.9% uptime guarantee and sub-100ms response times.</p>""
                  </div>

                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">""
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">""
                      <ShieldCheckIcon className="w-6 h-6 text-white" />""
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Secure</h3>""
                    <p className="text-gray-400">Enterprise-grade security with OAuth 2.0, API keys, and rate limiting.</p>""
                  </div>

                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">""
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">""
                      <GlobeAltIcon className="w-6 h-6 text-white" />""
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Global</h3>""
                    <p className="text-gray-400">Available worldwide with multiple data centers and CDN support.</p>""
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'authentication' && ('')
              <div className="space-y-8">""
                <div className="text-center">""
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">""
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Authentication</span>""
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">""
                    Secure your API calls with our authentication methods. We support API keys and OAuth 2.0 for different use cases.
                  </p>
                </div>

                <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">""
                  <h3 className="text-2xl font-bold mb-4 text-white">API Key Authentication</h3>""
                  <p className="text-gray-300 mb-6">Include your API key in the Authorization header:</p>""
                  <div className="bg-slate-900 p-4 rounded-lg">""
                    <code className="text-green-400">""
                      Authorization: Bearer your-api-key-here
                    </code>
                  </div>
                </div>

                <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">""
                  <h3 className="text-2xl font-bold mb-4 text-white">OAuth 2.0</h3>""
                  <p className="text-gray-300 mb-6">For more secure applications, use OAuth 2.0:</p>""
                  <div className="bg-slate-900 p-4 rounded-lg">""
                    <code className="text-green-400">""
                      Authorization: Bearer oauth-access-token
                    </code>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'endpoints' && ('')
              <div className="space-y-8">""
                <div className="text-center">""
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">""
                    API <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Endpoints</span>""
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">""
                    Explore our comprehensive API endpoints for AI, analytics, security, and more.
                  </p>
                </div>

                <div className="space-y-6">""
                  {apiEndpoints.map((endpoint, index) => ()
                    <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">""
                      <div className="flex items-center mb-4">""
                        <span className={`px-3 py-1 rounded text-sm font-medium mr-4 ${
                          endpoint.method === 'GET' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'''
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-purple-400 text-lg">{endpoint.endpoint}</code>""
                      </div>
                      <p className="text-gray-300 mb-4">{endpoint.description}</p>""
                      <div className="space-y-2">""
                        <h4 className="text-white font-semibold">Parameters:</h4>""
                        {endpoint.parameters.map((param, paramIndex) => ()
                          <div key={paramIndex} className="flex items-center text-sm">""
                            <span className="text-purple-400 font-mono w-24">{param.name}</span>""
                            <span className="text-gray-400 w-20">{param.type}</span>""
                            <span className={`w-16 ${param.required ? 'text-red-400' : 'text-gray-500'}`}>''
                              {param.required ? 'Required' : 'Optional'}''
                            </span>
                            <span className="text-gray-300">{param.description}</span>""
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'sdks' && ('')
              <div className="space-y-8">""
                <div className="text-center">""
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">""
                    Official <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SDKs</span>""
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">""
                    Use our official SDKs to integrate Zion Tech Group services into your applications quickly and easily.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">""
                  {sdkLanguages.map((sdk, index) => ()
                    <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">""
                      <div className="flex items-center mb-4">""
                        <span className="text-2xl mr-3">{sdk.icon}</span>""
                        <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">""
                          {sdk.name}
                        </h3>
                      </div>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">""
                        {sdk.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'examples' && ('')
              <div className="space-y-8">""
                <div className="text-center">""
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">""
                    Code <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Examples</span>""
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">""
                    Get started quickly with these code examples in your preferred programming language.
                  </p>
                </div>

                <div className="space-y-8">""
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">""
                    <h3 className="text-2xl font-bold mb-4 text-white">JavaScript/Node.js</h3>""
                    <div className="bg-slate-900 p-4 rounded-lg overflow-x-auto">""
                      <pre className="text-green-400 text-sm">{codeExamples.javascript}</pre>""
                    </div>
                  </div>

                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">""
                    <h3 className="text-2xl font-bold mb-4 text-white">Python</h3>""
                    <div className="bg-slate-900 p-4 rounded-lg overflow-x-auto">""
                      <pre className="text-green-400 text-sm">{codeExamples.python}</pre>""
                    </div>
                  </div>

                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">""
                    <h3 className="text-2xl font-bold mb-4 text-white">cURL</h3>""
                    <div className="bg-slate-900 p-4 rounded-lg overflow-x-auto">""
                      <pre className="text-green-400 text-sm">{codeExamples.curl}</pre>""
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/30">""
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">""
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">""
              Ready to Start Building?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">""
              Get your API key and start integrating Zion Tech Group services into your applications today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">""
                Get API Key
                <ArrowRightIcon className="w-4 h-4 ml-2 inline" />""
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">""
                View GitHub
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
;
export default APIDocsPage;