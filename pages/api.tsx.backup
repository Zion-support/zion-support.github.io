import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Code, Book, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';

export default function APIPage() {
  const apiFeatures = [
    {
      title: "RESTful APIs",
      description: "Clean, intuitive REST API endpoints for easy integration",
      icon: Code,
      features: ["RESTful Design", "JSON Responses", "HTTP Status Codes", "Error Handling"]
    },
    {
      title: "GraphQL APIs",
      description: "Flexible GraphQL API for complex queries and real-time subscriptions",
      icon: Book,
      features: ["Flexible Queries", "Real-time Subscriptions", "Schema Introspection", "Type Safety"]
    },
    {
      title: "WebSocket APIs",
      description: "Real-time communication and updates for dynamic applications",
      icon: Zap,
      features: ["Real-time Updates", "Bidirectional Communication", "Low Latency", "Event-driven"]
    },
    {
      title: "SDK Libraries",
      description: "Official SDKs for popular programming languages",
      icon: Book,
      features: ["JavaScript/TypeScript", "Python", "Java", "C#/.NET"]
    },
    {
      title: "API Security",
      description: "Enterprise-grade security with authentication and authorization",
      icon: Shield,
      features: ["OAuth 2.0", "JWT Tokens", "Rate Limiting", "API Keys"]
    },
    {
      title: "Documentation",
      description: "Comprehensive API documentation with interactive examples",
      icon: Book,
      features: ["Interactive Docs", "Code Examples", "SDK Guides", "Postman Collections"]
    }
  ];

  return (
    <Layout title="API Services - Zion Tech Group" description="Comprehensive API solutions for modern applications">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Powerful APIs for{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Modern Applications
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Build faster, scale better, and integrate seamlessly with our comprehensive API solutions. 
                From RESTful APIs to GraphQL and WebSocket connections, we provide everything you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Documentation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">API Services</h2>
              <p className="text-xl text-gray-600">Comprehensive API solutions for modern applications</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apiFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }