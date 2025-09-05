import React from "react";
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Code, Book, Zap, Shield, CheckCircle, ArrowRight, Globe, Users, Star, Award } from 'lucide-react';

export default function APIPage() {
  const apiFeatures = [
    {
      title: "RESTful APIs",
      description: "Clean, intuitive REST API endpoints for easy integration",
      icon: Code,
      features: ["JSON Responses", "HTTP Status Codes", "Rate Limiting", "Authentication", "Error Handling"]
    },
    {
      title: "Comprehensive Documentation",
      description: "Detailed API documentation with examples and guides",
      icon: Book,
      features: ["Interactive Docs", "Code Examples", "SDK Libraries", "Testing Tools", "Version History"]
    },
    {
      title: "Real-time APIs",
      description: "WebSocket and Server-Sent Events for real-time data",
      icon: Zap,
      features: ["Live Updates", "Bidirectional Communication", "Event Streaming", "Connection Management"]
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance features",
      icon: Shield,
      features: ["OAuth 2.0", "JWT Tokens", "Rate Limiting", "Data Encryption", "Audit Logs"]
    }
  ];

  const apiCategories = [
    {
      name: "AI Services",
      description: "Machine learning and artificial intelligence APIs",
      icon: Globe,
      endpoints: 25,
      documentation: "Complete"
    },
    {
      name: "Micro SaaS",
      description: "Software as a service integration APIs",
      icon: Users,
      endpoints: 15,
      documentation: "Complete"
    },
    {
      name: "IT Services",
      description: "Infrastructure and system management APIs",
      icon: Code,
      endpoints: 20,
      documentation: "Complete"
    },
    {
      name: "Analytics",
      description: "Data analytics and reporting APIs",
      icon: BarChart3,
      endpoints: 12,
      documentation: "Complete"
    }
  ];

  const pricingTiers = [
    {
      name: "Free Tier",
      price: "$0",
      description: "Perfect for development and testing",
      features: [
        "1,000 requests/month",
        "Basic documentation",
        "Community support",
        "Standard rate limits"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      description: "Ideal for growing applications",
      features: [
        "50,000 requests/month",
        "Priority support",
        "Advanced analytics",
        "Custom rate limits"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale applications",
      features: [
        "Unlimited requests",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Powerful, well-documented APIs to integrate Zion Tech Group services into your applications
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                API Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive API solutions designed for developers and businesses
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-12 w-12 text-blue-600 mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                API Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API offerings across different service categories
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <category.icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{category.endpoints} endpoints</span>
                    <span className="text-green-600">{category.documentation}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                API Pricing
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your needs and scale as you grow
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  className={`bg-white p-8 rounded-lg shadow-lg ${tier.popular ? 'ring-2 ring-blue-500' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {tier.popular && (
                    <div className="bg-blue-500 text-white text-center py-2 px-4 rounded-full text-sm font-semibold mb-4">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{tier.price}</div>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start Building with Our APIs
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get started with our comprehensive API documentation and start building amazing applications today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  View Documentation
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Get API Key
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}