import React from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  CodeBracketIcon,
  CloudIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

export default function ApiPage() {
  const apiServices = [
    {
      title: "AI Analytics API",
      description: "Analyze data with advanced AI algorithms",
      icon: CpuChipIcon,
      endpoint: "/api/v1/ai/analyze",
      methods: ["POST", "GET"],
      features: ["Real-time analysis", "Batch processing", "Custom models"]
    },
    {
      title: "Content Generation API",
      description: "Generate high-quality content using AI",
      icon: CodeBracketIcon,
      endpoint: "/api/v1/content/generate",
      methods: ["POST"],
      features: ["Text generation", "Image creation", "Multi-language support"]
    },
    {
      title: "Cloud Management API",
      description: "Manage your cloud infrastructure programmatically",
      icon: CloudIcon,
      endpoint: "/api/v1/cloud/manage",
      methods: ["GET", "POST", "PUT", "DELETE"],
      features: ["Resource management", "Auto-scaling", "Cost optimization"]
    },
    {
      title: "Security Monitoring API",
      description: "Monitor and manage security threats",
      icon: ShieldCheckIcon,
      endpoint: "/api/v1/security/monitor",
      methods: ["GET", "POST"],
      features: ["Threat detection", "Incident response", "Compliance reporting"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>API Reference - Zion Tech Group</title>
        <meta name="description" content="Complete API reference for Zion Tech Group services. Documentation, examples, and integration guides for all our APIs." />
        <meta name="keywords" content="API reference, API documentation, REST API, AI API, cloud API, integration" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              API Reference
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Powerful APIs for AI and technology solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Integrate our AI and technology services into your applications with our 
              comprehensive REST APIs. Fast, reliable, and easy to use.
            </p>
          </div>
        </div>
      </section>

      {/* API Services */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Available APIs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of APIs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {apiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Endpoint</h4>
                    <code className="bg-slate-900 text-green-400 px-3 py-1 rounded text-sm">
                      {service.endpoint}
                    </code>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Methods</h4>
                    <div className="flex gap-2">
                      {service.methods.map((method, methodIndex) => (
                        <span key={methodIndex} className={`px-3 py-1 rounded text-sm font-semibold ${
                          method === 'GET' ? 'bg-green-500/20 text-green-400' :
                          method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                          method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Features</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 flex items-center">
                          <ArrowRightIcon className="w-4 h-4 text-purple-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group">
                    View Documentation
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Authentication
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Secure your API calls with our authentication system
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">API Key Authentication</h3>
              <p className="text-gray-300 mb-6">
                All API requests require authentication using your API key. Include it in the Authorization header.
              </p>
              
              <div className="bg-slate-900 p-4 rounded-lg mb-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`curl -X GET "https://api.ziontechgroup.com/v1/ai/analyze" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                </pre>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Rate Limits</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-900 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">1,000</div>
                  <div className="text-gray-300">Requests per hour</div>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">10,000</div>
                  <div className="text-gray-300">Requests per day</div>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">100</div>
                  <div className="text-gray-300">Concurrent requests</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              SDKs & Libraries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Use our official SDKs for faster integration
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "JavaScript", version: "v2.1.0", description: "Node.js and browser support" },
              { name: "Python", version: "v1.8.0", description: "Full Python 3 support" },
              { name: "PHP", version: "v1.5.0", description: "Laravel and Symfony compatible" }
            ].map((sdk, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{sdk.name}</h3>
                <div className="text-purple-400 font-semibold mb-4">{sdk.version}</div>
                <p className="text-gray-300 mb-6">{sdk.description}</p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Download SDK
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Get your API key and start building amazing applications
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get API Key
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a 
                href="/docs" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Documentation
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>api@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}