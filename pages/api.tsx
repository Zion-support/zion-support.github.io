import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Code, Book, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const apiFeatures = [
  {
    title: 'RESTful API Design',
    description: 'Clean, intuitive RESTful APIs that follow industry best practices',
    icon: Code,
    features: ['RESTful Design', 'JSON Responses', 'HTTP Status Codes', 'Error Handling']
  },
  {
<<<<<<< HEAD
    title: 'GraphQL API',
    description: 'Flexible query language for APIs',
    icon: Code,
    features: ['Single Endpoint', 'Type Safety', 'Real-time Subscriptions', 'Introspection']
=======
    title: 'Comprehensive Documentation',
    description: 'Detailed API documentation with interactive examples and code samples',
    icon: Book,
    features: ['Interactive Docs', 'Code Examples', 'SDK Libraries', 'Testing Tools']
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
  },
  {
    title: 'High Performance',
    description: 'Optimized for speed and scalability with sub-100ms response times',
    icon: Zap,
<<<<<<< HEAD
    features: ['Real-time Updates', 'Low Latency', 'Persistent Connection', 'Event-driven']
  },
  {
    title: 'Authentication API',
    description: 'Secure user authentication and authorization',
    icon: Lock,
    features: ['OAuth 2.0', 'JWT Tokens', 'Multi-factor Auth', 'Session Management']
  },
  {
    title: 'Data API',
    description: 'Access and manage your data',
    icon: Database,
    features: ['CRUD Operations', 'Data Validation', 'Query Optimization', 'Caching']
  },
  {
    title: 'Analytics API',
    description: 'Track and analyze usage patterns',
    icon: Server,
    features: ['Usage Metrics', 'Performance Data', 'Custom Events', 'Real-time Dashboards']
  }
];

export default function APIPage() {
  const apiFeatures = [
    {
      title: "RESTful APIs",
      description: "Clean, intuitive REST API endpoints for easy integration",
      icon: Code,
      benefits: [
        "Standard HTTP methods",
        "JSON request/response format",
        "Comprehensive error handling",
        "Rate limiting and throttling"
      ]
    },
    {
      title: "Real-time Communication",
      description: "WebSocket and Server-Sent Events for live updates",
      icon: Zap,
      benefits: [
        "Instant data synchronization",
        "Low-latency communication",
        "Scalable connection management",
        "Automatic reconnection"
      ]
    },
    {
      title: "Security & Authentication",
      description: "Enterprise-grade security with multiple auth methods",
      icon: Shield,
      benefits: [
        "OAuth 2.0 and OpenID Connect",
        "JWT token management",
        "API key authentication",
        "Role-based access control"
      ]
    },
    {
      title: "Developer Experience",
      description: "Comprehensive documentation and developer tools",
      icon: Book,
      benefits: [
        "Interactive API documentation",
        "SDKs for multiple languages",
        "Code examples and tutorials",
        "Sandbox environment"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
=======
    features: ['Fast Response Times', 'Auto-scaling', 'Caching', 'Load Balancing']
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-grade security with authentication, authorization, and encryption',
    icon: Shield,
    features: ['OAuth 2.0', 'API Keys', 'Rate Limiting', 'Data Encryption']
  }
];

export default function API() {
  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's services. Build powerful integrations with our RESTful APIs." />
        <meta name="keywords" content="API documentation, RESTful API, developer tools, integration" />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <div className="container mx-auto px-6 text-center">
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Powerful APIs
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Build amazing applications with our comprehensive suite of APIs. 
                From REST to GraphQL, we provide the tools you need to succeed.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Documentation
                </button>
=======
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Developer API
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Build powerful integrations with our comprehensive RESTful APIs
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get API Key
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View Documentation
                </motion.button>
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* API Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
=======
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Available APIs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive suite of APIs designed for modern applications.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
=======
              <h2 className="text-4xl md:text-5xl font-bold mb-6">API Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful, secure, and easy-to-use APIs designed for developers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-8 text-center"
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
      </div>
    </Layout>
=======
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Get your API key and start integrating our services into your applications today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View Examples
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
  );
}
