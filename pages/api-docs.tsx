import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Code, ArrowRight, Book, Zap, Shield, CheckCircle, Globe, 
  Users, Star, Clock, Award, TrendingUp 
} from 'lucide-react';

const apiFeatures = [
  {
    title: 'RESTful API',
    description: 'Clean, intuitive REST API design with comprehensive documentation.',
    icon: Globe,
    features: ['RESTful Design', 'JSON Responses', 'HTTP Status Codes', 'Error Handling']
  },
  {
    title: 'GraphQL Support',
    description: 'Flexible GraphQL API for efficient data fetching and real-time updates.',
    icon: Code,
    features: ['Schema Definition', 'Query Optimization', 'Real-time Subscriptions', 'Type Safety']
  },
  {
    title: 'Authentication',
    description: 'Secure authentication with JWT tokens and OAuth2 support.',
    icon: Shield,
    features: ['JWT Tokens', 'OAuth2', 'API Keys', 'Rate Limiting']
  },
  {
    title: 'Webhooks',
    description: 'Real-time event notifications with reliable webhook delivery.',
    icon: Zap,
    features: ['Event Triggers', 'Retry Logic', 'Signature Verification', 'Delivery Tracking']
  }
];

export default function ApiDocsPage() {
  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group | Developer Resources</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's services. RESTful APIs, GraphQL, authentication, and developer resources." />
        <meta name="keywords" content="API documentation, REST API, GraphQL, developer resources, API integration" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              API Documentation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Comprehensive API documentation for integrating with our services. 
              Build powerful applications with our robust and well-documented APIs.
            </motion.p>
          </div>
        </section>

        {/* API Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">API Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our APIs are designed for developers, by developers, with comprehensive documentation and examples.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Help with Integration?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our developer support team is here to help you integrate our APIs successfully.
            </p>
            <Link 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg inline-flex items-center"
            >
              Contact Developer Support <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}