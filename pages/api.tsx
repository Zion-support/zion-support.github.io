import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  Globe,
  Shield,
  Zap,
  Code,
  Database,
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  Award,
  TrendingUp,
  Target,
  Rocket
} from 'lucide-react';

const apiServices = [
  {
    title: 'RESTful API',
    description: 'Clean, intuitive REST API design',
    icon: Globe,
    features: ['RESTful Design', 'JSON Responses', 'HTTP Status Codes', 'Error Handling'],
    pricing: 'Starting at $1,500/month'
  },
  {
    title: 'GraphQL API',
    description: 'Flexible, efficient data querying',
    icon: Code,
    features: ['Single Endpoint', 'Type Safety', 'Real-time Subscriptions', 'Schema Introspection'],
    pricing: 'Starting at $2,000/month'
  },
  {
    title: 'Microservices API',
    description: 'Scalable, distributed API architecture',
    icon: Cloud,
    features: ['Service Discovery', 'Load Balancing', 'Circuit Breakers', 'Distributed Tracing'],
    pricing: 'Starting at $3,500/month'
  },
  {
    title: 'API Security',
    description: 'Enterprise-grade API protection',
    icon: Shield,
    features: ['OAuth 2.0', 'JWT Tokens', 'Rate Limiting', 'API Gateway'],
    pricing: 'Starting at $2,500/month'
  },
  {
    title: 'API Analytics',
    description: 'Comprehensive API monitoring and insights',
    icon: TrendingUp,
    features: ['Usage Analytics', 'Performance Metrics', 'Error Tracking', 'Custom Dashboards'],
    pricing: 'Starting at $1,200/month'
  },
  {
    title: 'API Documentation',
    description: 'Interactive, always up-to-date documentation',
    icon: Database,
    features: ['Auto-generated Docs', 'Interactive Testing', 'Code Examples', 'Version Control'],
    pricing: 'Starting at $800/month'
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance'
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    description: 'Built-in security best practices'
  },
  {
    icon: Users,
    title: 'Developer Friendly',
    description: 'Intuitive and easy to integrate'
  },
  {
    icon: Award,
    title: 'Enterprise Ready',
    description: 'Scalable for any business size'
  }
];

export default function API() {
  return (
    <Layout
      title="API Services - Zion Tech Group"
      description="Professional API development services including REST, GraphQL, microservices, and comprehensive API management solutions."
      keywords="API development, REST API, GraphQL, microservices, API security, API documentation"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional
                <span className="text-blue-600 block">API Development</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Build robust, scalable, and secure APIs that power your applications 
                and enable seamless integration with third-party services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our API Service Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive API solutions designed to meet your specific requirements 
                and integrate seamlessly with your existing systems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-600">
                      {service.pricing}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our API Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with industry best practices to deliver 
                APIs that are secure, scalable, and developer-friendly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Your API?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our API experts help you design, develop, and deploy APIs that 
                power your business and enable seamless integrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Start Your API Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-blue-300 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Meet Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}