import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Code, Book, Zap, Shield, Globe, Database, Server, Lock, CheckCircle, ArrowRight } from 'lucide-react';

const apiServices = [
  {
    title: 'RESTful API',
    description: 'Clean, intuitive REST API design',
    icon: Globe,
    features: ['RESTful Design', 'JSON Responses', 'HTTP Status Codes', 'Error Handling']
  },
  {
    title: 'GraphQL API',
    description: 'Flexible query language for APIs',
    icon: Database,
    features: ['Single Endpoint', 'Real-time Subscriptions', 'Type Safety', 'Introspection']
  },
  {
    title: 'WebSocket API',
    description: 'Real-time bidirectional communication',
    icon: Zap,
    features: ['Real-time Updates', 'Low Latency', 'Persistent Connections', 'Event-driven']
  }
];

export default function APIPage() {
  const apiFeatures = [
    {
      title: "RESTful APIs",
      description: "Clean, intuitive REST API endpoints for easy integration",
      icon: Code,
      features: ["JSON Responses", "HTTP Status Codes", "Rate Limiting"]
    },
    {
      title: "Comprehensive Documentation",
      description: "Detailed API documentation with examples and guides",
      icon: Book,
      features: ["Interactive Docs", "Code Examples", "SDK Libraries"]
    },
    {
      title: "High Performance",
      description: "Fast, reliable APIs built for scale and speed",
      icon: Zap,
      features: ["Low Latency", "High Throughput", "Global CDN"]
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with authentication and encryption",
      icon: Shield,
      features: ["OAuth 2.0", "API Keys", "SSL/TLS Encryption"]
    }
  ];

  return (
    <Layout
      title="API - Zion Tech Group"
      description="Powerful APIs for AI, cloud services, and enterprise solutions"
      keywords="API, REST API, GraphQL, WebSocket, AI API, cloud API"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Powerful APIs for Modern Development
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Integrate with our comprehensive suite of APIs for AI, cloud services, and enterprise solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="/docs"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* API Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our APIs?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built for developers, by developers. Our APIs are designed for simplicity, performance, and reliability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Additional API Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">GraphQL API</h3>
                <p className="text-gray-600 mb-4">Flexible GraphQL API for complex queries</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Flexible Queries
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Real-time Subscriptions
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Schema Introspection
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Type Safety
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">WebSocket API</h3>
                <p className="text-gray-600 mb-4">Real-time communication and updates</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Real-time Updates
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Bidirectional Communication
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Low Latency
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Event-driven
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">SDK Libraries</h3>
                <p className="text-gray-600 mb-4">Official SDKs for popular programming languages</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    JavaScript/TypeScript
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Python
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Java
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    C#/.NET
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* API Documentation Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                API Documentation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive API documentation with examples and interactive testing
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Authentication</h3>
                <p className="text-gray-600 mb-6">Secure authentication and authorization endpoints</p>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded">POST</span>
                      <code className="text-sm font-mono">/api/v1/auth/login</code>
                    </div>
                    <p className="text-gray-600 mb-4">Authenticate user with email and password</p>
                    <div className="bg-gray-900 rounded p-4 overflow-x-auto">
                      <pre className="text-green-400 text-sm">
{`curl -X POST https://api.ziontechgroup.com/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password"
  }'`}
                      </pre>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded">POST</span>
                      <code className="text-sm font-mono">/api/v1/auth/register</code>
                    </div>
                    <p className="text-gray-600 mb-4">Register a new user account</p>
                    <div className="bg-gray-900 rounded p-4 overflow-x-auto">
                      <pre className="text-green-400 text-sm">
{`curl -X POST https://api.ziontechgroup.com/v1/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password",
    "name": "John Doe"
  }'`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">AI Services</h3>
                <p className="text-gray-600 mb-6">Access to our AI-powered services and models</p>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded">POST</span>
                      <code className="text-sm font-mono">/api/v1/ai/email-responder</code>
                    </div>
                    <p className="text-gray-600 mb-4">Generate intelligent email responses using AI</p>
                    <div className="bg-gray-900 rounded p-4 overflow-x-auto">
                      <pre className="text-green-400 text-sm">
{`curl -X POST https://api.ziontechgroup.com/v1/ai/email-responder \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "message": "Hello, I need help with my account",
    "context": {
      "user_id": "12345",
      "previous_messages": []
    }
  }'`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Start building with our powerful APIs today. Get your API key and begin integrating our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get API Key
                </Link>
                <Link
                  href="/docs"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}