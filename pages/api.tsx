import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Code, Book, Zap, Shield, Globe, Database, Server, Lock, CheckCircle, ArrowRight } from 'lucide-react';

export default function API() {
  const apiEndpoints = [

      auth: 'Required'
    }, {
      method: 'POST',
      endpoint: '/api/v1/ai/predict', description: 'Make predictions using AI models',
      category: 'AI Services', auth: 'Required'
    }, {
      method: 'GET', endpoint: '/api/v1/cloud/status',
      description: 'Get cloud service status', category: 'Cloud Services',
      auth: 'Required'
    }, {
      method: 'POST',
      endpoint: '/api/v1/cloud/deploy', description: 'Deploy application to cloud',
      category: 'Cloud Services', auth: 'Required'
    }, {
      method: 'GET', endpoint: '/api/v1/security/scan',
      description: 'Perform security scan', category: 'Security',
      auth: 'Required'
    }, {
      method: 'POST',
      endpoint: '/api/v1/security/audit', description: 'Run security audit',
      category: 'Security', auth: 'Required'

    }
  ];

  const sdkLanguages = [

    }
  ];

  const codeExamples = [

      code: `import ziontech

# Initialize client
client = ziontech.Client(api_key="your-api-key")

# Make prediction
result = client.ai.predict(
    model_id="sentiment-analysis", data={"text": "I love this product!"}
)

print(result.prediction)  # "positive"`, description: 'Use our AI services to analyze text sentiment'
    }, {
      title: 'Cloud Deployment', language: 'javascript',
      code: `const ziontech = require('ziontech');

const client = new ziontech.Client({
  apiKey: 'your-api-key'
});

// Deploy to cloud
const deployment = await client.cloud.deploy({
  appName: 'my-app', source: './dist',
  environment: 'production'
});

console.log(deployment.url);`, description: 'Deploy your application to the cloud'
    }, {
      title: 'Security Scan', language: 'curl',
      code: `curl -X POST "https://api.ziontechgroup.com/v1/security/scan" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\

  }'`,
      description: 'Perform security scans using our API'
    }
  ];

  const rateLimits = [

    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API <span className="text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Integrate our AI and technology services into your applications with our powerful, 
                easy-to-use APIs. Built for developers, by developers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="#getting-started">
                  <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </Link>
                <Link href="/docs">
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    View Documentation
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section id="getting-started" className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Quick Start
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Get up and running with our API in minutes
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">1. Get Your API Key</h3>
                <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span>API Key</span>
                    <button className="text-blue-400 hover:text-blue-300">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <div>zt_live_1234567890abcdef...</div>
                </div>
                <p className="text-gray-600 mt-4">Sign up for a free account and get your API key from the dashboard.</p>
              </div>
              

                </div>
                <p className="text-gray-600 mt-4">Test the API with a simple request to list available AI models.</p>
              </div>
            </div>
          </div>
        </section>


            </div>
          </div>
        </section>

        {/* SDKs */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Official SDKs
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Use our official SDKs for your preferred programming language
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sdkLanguages.map((sdk, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover: shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{sdk.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{sdk.name}</h3>
                    <p className="text-blue-600 font-semibold">v{sdk.version}</p>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{sdk.description}</p>
                  <ul className="space-y-2 mb-6">
                    {sdk.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Install SDK
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Code Examples
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Get started with these practical examples
              </p>
            </div>
            
            <div className="space-y-8">
              {codeExamples.map((example, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{example.title}</h3>
                    <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {example.language}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{example.description}</p>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 font-mono text-sm">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Rate Limits
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                API usage limits by plan
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {rateLimits.map((limit, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg p-6 ${
                  limit.plan === 'Professional' ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}>
                  {limit.plan === 'Professional' && (
                    <div className="text-center mb-4">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{limit.plan}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-1">{limit.requests}</div>
                    <div className="text-gray-600">requests per month</div>
                    <div className="text-lg font-semibold text-gray-700 mt-2">{limit.burst}</div>
                    <div className="text-gray-600">burst limit</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {limit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    limit.plan === 'Professional' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover: from-blue-700 hover:to-purple-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    {limit.plan === 'Free' ? 'Get Started' : 'Upgrade Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start building with our API today. Get your free API key and begin integrating our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get API Key
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </Link>
              <Link href="/docs">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  View Documentation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Get API Key
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our APIs?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our APIs are designed with developers in mind, offering powerful features and excellent documentation.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
</>
  )}