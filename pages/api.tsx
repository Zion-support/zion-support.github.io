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
    icon: Code,
    features: ['Single Endpoint', 'Type Safety', 'Real-time Subscriptions', 'Introspection']
  },
  {
    title: 'WebSocket API',
    description: 'Real-time bidirectional communication',
    icon: Zap,
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
              </div>
            </motion.div>
          </div>
        </section>

        {/* API Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
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
            </div>
          </div>
        </section>

        {/* Features Section */}
      </div>
    </Layout>
  );
}
