import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Code, Book, Zap, Shield, CheckCircle, ArrowRight, Globe, Database, Server, Lock } from 'lucide-react';

export default function APIPage() {
  const apiFeatures = [
    {
      title: "RESTful APIs",
      description: "Clean, intuitive REST API endpoints for easy integration",
      icon: Code,
      features: ["RESTful Design", "JSON Responses", "HTTP Status Codes", "Error Handling"]
    },
    {
      title: "GraphQL API",
      description: "Flexible GraphQL API for complex queries",
      icon: Code,
      features: ["Flexible Queries", "Real-time Subscriptions", "Schema Introspection", "Type Safety"]
    },
    {
      title: "WebSocket API",
      description: "Real-time communication and updates",
      icon: Zap,
      features: ["Real-time Updates", "Bidirectional Communication", "Low Latency", "Event-driven"]
    },
    {
      title: "SDK Libraries",
      description: "Official SDKs for popular programming languages",
      icon: Book,
      features: ["JavaScript/TypeScript", "Python", "Java", "C#/.NET"]
    }
  ];

  const apiEndpoints = [
    {
      title: 'Authentication API',
      description: 'Secure authentication and authorization endpoints',
      icon: Lock,
      methods: ['POST', 'GET', 'PUT', 'DELETE'],
      endpoint: '/api/auth'
    },
    {
      title: 'User Management API',
      description: 'User profile and account management',
      icon: Globe,
      methods: ['GET', 'PUT', 'DELETE'],
      endpoint: '/api/users'
    },
    {
      title: 'Data API',
      description: 'Access and manipulate your data',
      icon: Database,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      endpoint: '/api/data'
    },
    {
      title: 'Analytics API',
      description: 'Real-time analytics and reporting',
      icon: Server,
      methods: ['GET', 'POST'],
      endpoint: '/api/analytics'
    }
  ];

  const codeExamples = [
    {
      language: 'JavaScript',
      code: `// Authentication
const response = await fetch('/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'password123'
  })
});

const data = await response.json();
console.log(data.token);`
    },
    {
      language: 'Python',
      code: `# Data API
import requests

response = requests.get(
    'https://api.ziontechgroup.com/data',
    headers={'Authorization': 'Bearer YOUR_TOKEN'}
)

data = response.json()
print(data)`
    },
    {
      language: 'cURL',
      code: `# WebSocket Connection
curl -X GET "https://api.ziontechgroup.com/ws" \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Upgrade: websocket" \\
  -H "Connection: Upgrade"`
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive API documentation for developers. Build amazing applications 
                with our powerful and easy-to-use APIs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Get API Key
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                  View Examples
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* API Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                API Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our APIs are designed with developers in mind, offering powerful features 
                and comprehensive documentation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.features.map((feat, featIndex) => (
                      <li key={featIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                API Endpoints
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints and their capabilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <endpoint.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {endpoint.title}
                        </h3>
                        <p className="text-gray-600">
                          {endpoint.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {endpoint.methods.map((method, methodIndex) => (
                        <span
                          key={methodIndex}
                          className={`px-3 py-1 rounded text-sm font-medium ${
                            method === 'GET' ? 'bg-green-100 text-green-800' :
                            method === 'POST' ? 'bg-blue-100 text-blue-800' :
                            method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm">
                    <span className="text-gray-400">GET</span> {endpoint.endpoint}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Code Examples
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started quickly with these code examples in popular programming languages.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {codeExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      {example.language}
                    </h3>
                    <Code className="w-5 h-5 text-blue-600" />
                  </div>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get your API key and start building amazing applications with our powerful APIs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Get API Key
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                  View Documentation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}