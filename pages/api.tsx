import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code, Book, Zap, Shield, Globe, Database, Server, Lock, CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';

const apiServices = [
  {
    title: 'RESTful API',
    description: 'Clean, intuitive REST API design with comprehensive documentation.',
    icon: Globe,
    features: ['RESTful Design', 'JSON Responses', 'HTTP Status Codes', 'Error Handling'],
    pricing: 'Included with all plans',
    benefits: ['Easy Integration', 'Standard Protocols', 'Comprehensive Docs', 'Developer Friendly']
  },
  {
    title: 'GraphQL API',
    description: 'Flexible GraphQL API for efficient data fetching and real-time updates.',
    icon: Code,
    features: ['Schema Definition', 'Query Optimization', 'Real-time Subscriptions', 'Type Safety'],
    pricing: 'Included with all plans',
    benefits: ['Efficient Queries', 'Real-time Updates', 'Type Safety', 'Single Endpoint']
  },
  {
    title: 'Authentication',
    description: 'Secure authentication with JWT tokens and OAuth2 support.',
    icon: Shield,
    features: ['JWT Tokens', 'OAuth2', 'API Keys', 'Rate Limiting'],
    pricing: 'Included with all plans',
    benefits: ['Secure Access', 'Multiple Auth Methods', 'Rate Limiting', 'Easy Integration']
  },
  {
    title: 'Webhooks',
    description: 'Real-time event notifications with reliable webhook delivery.',
    icon: Zap,
    features: ['Event Triggers', 'Retry Logic', 'Signature Verification', 'Delivery Tracking'],
    pricing: 'Included with all plans',
    benefits: ['Real-time Updates', 'Reliable Delivery', 'Event Tracking', 'Easy Setup']
  },
  {
    title: 'Database API',
    description: 'Direct database access through secure API endpoints.',
    icon: Database,
    features: ['CRUD Operations', 'Query Optimization', 'Data Validation', 'Access Control'],
    pricing: 'Included with all plans',
    benefits: ['Direct Access', 'Optimized Queries', 'Data Validation', 'Secure Access']
  },
  {
    title: 'Server Management',
    description: 'API endpoints for server monitoring and management.',
    icon: Server,
    features: ['Health Monitoring', 'Performance Metrics', 'Log Management', 'Alert System'],
    pricing: 'Included with all plans',
    benefits: ['Server Monitoring', 'Performance Tracking', 'Log Analysis', 'Proactive Alerts']
  }
];

const integrationExamples = [
  {
    title: 'JavaScript/Node.js',
    code: `// Install the SDK
npm install @ziontechgroup/api-sdk

// Initialize the client
import { ZionAPI } from '@ziontechgroup/api-sdk';

const client = new ZionAPI({
  apiKey: 'your-api-key',
  baseURL: 'https://api.ziontechgroup.com'
});

// Make API calls
const response = await client.ai.emailResponder.generate({
  message: "Hello, I need help",
  context: { customer_id: "12345" }
});

console.log(response.data);`
  },
  {
    title: 'Python',
    code: `# Install the SDK
pip install ziontechgroup-api

# Initialize the client
from ziontechgroup_api import ZionAPI

client = ZionAPI(
    api_key="your-api-key",
    base_url="https://api.ziontechgroup.com"
)

# Make API calls
response = client.ai.email_responder.generate(
    message="Hello, I need help",
    context={"customer_id": "12345"}
)

print(response.data)`
  },
  {
    title: 'PHP',
    code: `<?php
// Install via Composer
composer require ziontechgroup/api-sdk

// Initialize the client
use ZionTechGroup\\API\\Client;

$client = new Client([
    'api_key' => 'your-api-key',
    'base_url' => 'https://api.ziontechgroup.com'
]);

// Make API calls
$response = $client->ai->emailResponder->generate([
    'message' => 'Hello, I need help',
    'context' => ['customer_id' => '12345']
]);

echo $response->getData();
?>`
  }
];

const stats = [
  { number: '99.9%', label: 'Uptime' },
  { number: '< 100ms', label: 'Response Time' },
  { number: '24/7', label: 'Support' },
  { number: '100+', label: 'Endpoints' }
];

export default function APIPage() {
  return (
    <Layout
      title="API Services - Zion Tech Group | Developer API Solutions"
      description="Comprehensive API services including RESTful APIs, GraphQL, authentication, and developer tools. Build powerful applications with our robust API infrastructure."
      keywords="API services, REST API, GraphQL, developer tools, API integration, webhooks, authentication"
    >
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              API <span className="text-blue-400">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            >
              Powerful APIs designed for developers and businesses
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                Get Started
              </Link>
              <Link href="/api-docs" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                View Documentation
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Services Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">API Services</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Comprehensive API solutions for modern applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        {service.pricing}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.benefits.map((benefit, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/api-docs"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors text-sm font-medium inline-block"
                  >
                    View Documentation
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Examples Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Integration Examples</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Get started quickly with our SDKs and code examples
              </p>
            </div>

            <div className="space-y-8">
              {integrationExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900 rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <Code className="w-6 h-6 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{example.title}</h3>
                  </div>
                  
                  <pre className="bg-gray-800 rounded p-4 overflow-x-auto">
                    <code className="text-gray-300 text-sm">{example.code}</code>
                  </pre>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Start building with our APIs today and create powerful applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                Get API Key
              </Link>
              <Link href="/api-docs" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                View Documentation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}