import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Code, Book, Zap, Shield, Globe, Database, Server, Lock, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const apiServices = [
  {
    title: 'RESTful API',
    description: 'Clean, intuitive REST API design with comprehensive documentation.',
    icon: Globe,
    features: ['RESTful Design', 'JSON Responses', 'HTTP Status Codes', 'Error Handling'],
    pricing: 'Included with all plans'
  },
  {
    title: 'GraphQL API',
    description: 'Flexible query language for APIs with real-time subscriptions.',
    icon: Database,
    features: ['Single Endpoint', 'Real-time Subscriptions', 'Type Safety', 'Introspection'],
    pricing: 'Starting at $99/month'
  },
  {
    title: 'WebSocket API',
    description: 'Real-time bidirectional communication for live updates.',
    icon: Zap,
    features: ['Real-time Updates', 'Low Latency', 'Persistent Connections', 'Event-driven'],
    pricing: 'Starting at $149/month'
  },
  {
    title: 'API Security',
    description: 'Enterprise-grade security with authentication and authorization.',
    icon: Shield,
    features: ['JWT Authentication', 'OAuth 2.0', 'Rate Limiting', 'API Keys'],
    pricing: 'Included with all plans'
  },
  {
    title: 'API Monitoring',
    description: 'Comprehensive monitoring and analytics for API performance.',
    icon: Server,
    features: ['Performance Metrics', 'Usage Analytics', 'Error Tracking', 'Uptime Monitoring'],
    pricing: 'Starting at $79/month'
  },
  {
    title: 'API Documentation',
    description: 'Interactive documentation with code examples and testing tools.',
    icon: Book,
    features: ['Interactive Docs', 'Code Examples', 'Testing Tools', 'SDK Generation'],
    pricing: 'Included with all plans'
  }
];

const integrationExamples = [
  {
    language: 'JavaScript',
    code: `// Install the SDK
npm install @ziontechgroup/api-sdk

// Initialize the client
import { ZionAPI } from '@ziontechgroup/api-sdk';

const api = new ZionAPI({
  apiKey: 'your-api-key',
  baseURL: 'https://api.ziontechgroup.com'
});

// Make API calls
const response = await api.ai.generateContent({
  prompt: 'Write a blog post about AI trends',
  type: 'blog'
});`
  },
  {
    language: 'Python',
    code: `# Install the SDK
pip install ziontechgroup-api

# Initialize the client
from ziontechgroup import ZionAPI

api = ZionAPI(
    api_key='your-api-key',
    base_url='https://api.ziontechgroup.com'
)

# Make API calls
response = api.ai.generate_content(
    prompt='Write a blog post about AI trends',
    type='blog'
)`
  },
  {
    language: 'cURL',
    code: `# Make API calls with cURL
curl -X POST "https://api.ziontechgroup.com/api/ai/content-generator" \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Write a blog post about AI trends",
    "type": "blog"
  }'`
  }
];

const pricingTiers = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small projects and startups',
    features: [
      '1,000 API calls/month',
      'RESTful API access',
      'Basic documentation',
      'Email support',
      '99.9% uptime SLA'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      '10,000 API calls/month',
      'All API types included',
      'Advanced monitoring',
      'Priority support',
      '99.95% uptime SLA',
      'Custom integrations'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    features: [
      'Unlimited API calls',
      'Dedicated infrastructure',
      '24/7 phone support',
      '99.99% uptime SLA',
      'Custom development',
      'SLA guarantees'
    ],
    popular: false
  }
];

export default function API() {
  return (
    <Layout
      title="API Services - Zion Tech Group"
      description="Powerful API services for AI, IT, and Micro SaaS solutions. Integrate our services into your applications with our comprehensive APIs."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              API Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Integrate Zion Tech Group's powerful services into your applications 
              with our comprehensive API suite. RESTful, GraphQL, and WebSocket APIs available.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/api-docs"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-lg font-semibold"
              >
                View Documentation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              API Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive suite of API services designed for modern applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <service.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-bold text-blue-600">{service.pricing}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Examples */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integration Examples
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started quickly with our SDKs and code examples
            </p>
          </div>
          
          <div className="space-y-8">
            {integrationExamples.map((example, index) => (
              <motion.div
                key={example.language}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-900 rounded-lg overflow-hidden"
              >
                <div className="bg-gray-800 px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Code className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">{example.language}</span>
                  </div>
                  <button className="text-gray-400 hover:text-white">
                    <Lock className="w-4 h-4" />
                  </button>
                </div>
                <pre className="p-6 text-green-400 text-sm overflow-x-auto">
                  <code>{example.code}</code>
                </pre>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              API Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your API needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  tier.popular ? 'ring-2 ring-blue-500 relative' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                    tier.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our APIs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for developers, by developers with enterprise-grade reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast & Reliable</h3>
              <p className="text-gray-600">99.9% uptime with sub-second response times</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure</h3>
              <p className="text-gray-600">Enterprise-grade security with encryption</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Well Documented</h3>
              <p className="text-gray-600">Comprehensive docs with code examples</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable</h3>
              <p className="text-gray-600">Handles millions of requests effortlessly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get your API key and start integrating our services into your applications today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
            >
              Get API Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/api-docs"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-lg font-semibold"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Need Help?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}