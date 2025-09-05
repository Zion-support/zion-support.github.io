import { motion } from 'framer-motion';
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

const apiEndpoints = [
  {
    title: 'Authentication API',
    description: 'Secure user authentication and authorization',
    icon: Lock,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    endpoint: '/api/auth'
  },
  {
    title: 'AI Services API',
    description: 'Machine learning and AI model endpoints',
    icon: Code,
    methods: ['POST', 'GET'],
    endpoint: '/api/ai'
  },
  {
    title: 'Micro SaaS API',
    description: 'Manage micro SaaS applications and subscriptions',
    icon: Server,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    endpoint: '/api/micro-saas'
  },
  {
    title: 'IT Services API',
    description: 'Infrastructure and IT service management',
    icon: Database,
    methods: ['POST', 'GET', 'PUT'],
    endpoint: '/api/it-services'
  }
];

export default function APIPage() {
  return (
    <Layout 
      title="API Services - Zion Tech Group"
      description="Comprehensive API services for AI, IT, and micro SaaS solutions. Build powerful applications with our developer-friendly APIs."
    >
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
                Powerful, developer-friendly APIs for AI, IT, and micro SaaS solutions. 
                Build amazing applications with our comprehensive API ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#api-features" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Explore APIs
                </a>
                <a 
                  href="/contact" 
                  className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* API Features Section */}
        <section id="api-features" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our APIs?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our APIs are designed with developers in mind, offering powerful features 
                and comprehensive documentation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
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

        {/* API Services Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                API Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of API services designed for different use cases.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {apiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Endpoints Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Available Endpoints
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints for different services and integrations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <endpoint.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{endpoint.title}</h3>
                      <p className="text-sm text-gray-600">{endpoint.description}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Methods</h4>
                      <div className="flex flex-wrap gap-2">
                        {endpoint.methods.map((method, methodIndex) => (
                          <span 
                            key={methodIndex}
                            className={`px-2 py-1 rounded text-xs font-mono ${
                              method === 'POST' ? 'bg-green-100 text-green-800' :
                              method === 'GET' ? 'bg-blue-100 text-blue-800' :
                              method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Endpoint</h4>
                      <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                        {endpoint.endpoint}
                      </code>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get API access and start building amazing applications with our services.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
                </a>
                <a 
                  href="/api-docs" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Documentation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}