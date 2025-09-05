import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
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

export default function APIPage() {
  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group's services and solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
            </motion.div>
          </div>
        </section>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
            </div>
          </div>
        </section>

        {/* Code Example Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quick Start Example
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started with our APIs in just a few lines of code.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm overflow-x-auto">
                <div className="text-green-400 mb-2"># Install the SDK</div>
                <div className="text-blue-400 mb-4">npm install zion-tech-api</div>
                
                <div className="text-green-400 mb-2"># Initialize the client</div>
                <div className="text-white mb-4">import {'{ ZionTechAPI }'} from 'zion-tech-api';</div>
                <div className="text-white mb-4">const api = new ZionTechAPI('your-api-key');</div>
                
                <div className="text-green-400 mb-2"># Make API calls</div>
                <div className="text-white mb-2">// Get all services</div>
                <div className="text-white mb-4">const services = await api.services.list();</div>
                
                <div className="text-white mb-2">// Create a new service</div>
                <div className="text-white">const newService = await api.services.create({'{'}</div>
                <div className="text-white ml-4">name: 'My Service',</div>
                <div className="text-white ml-4">description: 'A new service'</div>
                <div className="text-white">{'}'});</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              </div>
            </motion.div>
          </div>
        </section>
    </>
  );
}