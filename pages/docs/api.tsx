<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { Code, Shield, Zap, Globe, Database, Lock } from 'lucide-react';

const apiFeatures = [
  {
    title: 'RESTful API',
    description: 'Clean, intuitive REST API endpoints for easy integration',
    icon: Code,
    features: ['Standard HTTP methods', 'JSON responses', 'RESTful conventions']
  },
  {
    title: 'Authentication',
    description: 'Secure API authentication with JWT tokens',
    icon: Lock,
    features: ['JWT tokens', 'API keys', 'OAuth 2.0 support']
  },
  {
    title: 'Rate Limiting',
    description: 'Built-in rate limiting to ensure fair usage',
    icon: Shield,
    features: ['Per-user limits', 'IP-based throttling', 'Custom limits']
  },
  {
    title: 'Real-time Updates',
    description: 'WebSocket support for real-time data streaming',
    icon: Zap,
    features: ['WebSocket connections', 'Event streaming', 'Live updates']
  },
  {
    title: 'Global CDN',
    description: 'Fast API responses from our global CDN network',
    icon: Globe,
    features: ['Edge locations', 'Low latency', 'High availability']
  },
  {
    title: 'Data Storage',
    description: 'Secure and scalable data storage solutions',
    icon: Database,
    features: ['Encrypted storage', 'Backup systems', 'Data replication']
  }
];

export default function APIDocsPage() {
  return (
    <Layout
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for integrating with our services. Learn about endpoints, authentication, and best practices."
      keywords="API documentation, REST API, integration, developer tools, API reference"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                API <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Documentation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive API documentation for integrating with our services. Learn about endpoints, authentication, and best practices.
              </p>
            </motion.div>
          </div>
        </section>

        {/* API Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  API Features
                </h2>
                <p className="text-xl text-gray-600">
                  Powerful, secure, and easy to use
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apiFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Authentication</h3>
                    <p className="text-gray-600 mb-3">Get your API key from the dashboard and include it in your requests:</p>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <code>Authorization: Bearer YOUR_API_KEY</code>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Base URL</h3>
                    <p className="text-gray-600 mb-3">All API requests should be made to:</p>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <code>https://api.ziontechgroup.com/v1</code>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Example Request</h3>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <code>
                        curl -X GET \<br />
                        &nbsp;&nbsp;https://api.ziontechgroup.com/v1/users \<br />
                        &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY"
                      </code>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Integrate?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Start building with our API today. Get your API key and begin integrating in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get API Key
                </a>
                <a
                  href="/docs"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Full Docs
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
=======
import Head from 'next/head';
import Layout from '../../components/Layout';

const codeExamples = [
  {
    language: 'JavaScript',
    title: 'Authentication',
    code: `// Get API token
const response = await fetch('https://api.ziontechgroup.com/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'your-email@example.com',
    password: 'your-password'
  })
});

const data = await response.json();
console.log(data.token);`
  },
  {
    language: 'Python',
    title: 'Predictive Analytics',
    code: `# Predictive Analytics
import requests

response = requests.post(
    'https://api.ziontechgroup.com/ai/predictive-analytics',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'data': historical_data,
        'model': 'time_series',
        'forecast_period': 30
    }
)

result = response.json()
print(result.predictions)`
  },
  {
    language: 'cURL',
    title: 'Cloud Migration',
    code: `# Start cloud migration
curl -X POST https://api.ziontechgroup.com/cloud/migrate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "source": "on-premises",
    "target": "aws",
    "resources": ["database", "storage", "compute"]
  }'`
  }
];

export default function ApiDocs() {
  return (
    <Layout>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Complete API documentation with code examples and integration guides." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Integrate with our services using our comprehensive REST API
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Code Examples
              </h2>
              
              <div className="space-y-8">
                {codeExamples.map((example, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 border-b">
                      <h3 className="text-xl font-semibold text-gray-900">{example.title}</h3>
                      <span className="text-sm text-gray-600">{example.language}</span>
                    </div>
                    <div className="p-6">
                      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
>>>>>>> pr-11913
    </Layout>
  );
}