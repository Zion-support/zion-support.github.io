import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  ArrowRight,
  Server,
  Lock,
  Brain,
  Cloud
} from 'lucide-react';

const apiEndpoints = [
  {
    title: 'Authentication API',
    description: 'Secure authentication and authorization endpoints',
    icon: Lock,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    endpoint: '/api/auth'
  },
  {
    title: 'AI Services API',
    description: 'Access to all AI-powered services and models',
    icon: Brain,
    methods: ['POST', 'GET'],
    endpoint: '/api/ai'
  },
  {
    title: 'Micro SaaS API',
    description: 'Manage micro SaaS applications and subscriptions',
    icon: Cloud,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    endpoint: '/api/micro-saas'
  },
  {
    title: 'IT Services API',
    description: 'Infrastructure and IT service management',
    icon: Server,
    methods: ['POST', 'GET', 'PUT'],
    endpoint: '/api/it-services'
  }
];

export default function APIDocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>API Documentation - Zion Tech Group | Developer Resources</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services. Access our RESTful APIs for AI, IT, and micro SaaS solutions." />
        <meta name="keywords" content="API documentation, developer resources, REST API, integration, SDK" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              API Documentation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Comprehensive API documentation for integrating with Zion Tech Group services. 
              Build powerful applications with our RESTful APIs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">API Endpoints</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive API endpoints for seamless integration with our services.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {apiEndpoints.map((endpoint, index) => {
              const IconComponent = endpoint.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{endpoint.title}</h3>
                      <code className="text-sm text-blue-600">{endpoint.endpoint}</code>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{endpoint.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Supported Methods:</h4>
                    <div className="flex flex-wrap gap-2">
                      {endpoint.methods.map((method, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/api-docs/${endpoint.endpoint.replace('/api/', '')}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  >
                    View Documentation
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help with Integration?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our developer support team is here to help you integrate our APIs successfully.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
              Contact Developer Support
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}