import React from 'react';
<<<<<<< HEAD
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { 
  Code, 
  ArrowRight, 
  CheckCircle, 
  ExternalLink,
  Shield,
  Zap,
  Globe,
  Database,
  Settings,
  BookOpen,
  Terminal,
  Lock,
  Clock,
  Users,
  BarChart3
} from 'lucide-react';

const apiEndpoints = [
  {
    method: 'GET',
    path: '/api/v1/services',
    description: 'Retrieve all available services',
    parameters: [
      { name: 'category', type: 'string', required: false, description: 'Filter by service category' },
      { name: 'limit', type: 'number', required: false, description: 'Number of results to return' }
    ],
    example: {
      request: 'GET /api/v1/services?category=ai&limit=10',
      response: {
        status: 200,
        data: [
          {
            id: 1,
            name: "AI-Powered Email Responder",
            category: "ai",
            description: "Automated email response system",
            price: "$299/month"
          }
        ]
      }
    }
  },
  {
    method: 'POST',
    path: '/api/v1/contact',
    description: 'Submit a contact form or inquiry',
    parameters: [
      { name: 'name', type: 'string', required: true, description: 'Contact name' },
      { name: 'email', type: 'string', required: true, description: 'Contact email' },
      { name: 'message', type: 'string', required: true, description: 'Message content' },
      { name: 'service', type: 'string', required: false, description: 'Service of interest' }
    ],
    example: {
      request: 'POST /api/v1/contact',
      body: {
        name: "John Doe",
        email: "john@example.com",
        message: "Interested in AI services",
        service: "ai-solutions"
      },
      response: {
        status: 201,
        message: "Contact form submitted successfully",
        id: "contact_123"
      }
    }
  },
  {
    method: 'GET',
    path: '/api/v1/quote',
    description: 'Request a custom quote for services',
    parameters: [
      { name: 'service_type', type: 'string', required: true, description: 'Type of service needed' },
      { name: 'project_scope', type: 'string', required: true, description: 'Project scope description' },
      { name: 'timeline', type: 'string', required: false, description: 'Project timeline' }
    ],
    example: {
      request: 'GET /api/v1/quote?service_type=ai&project_scope=custom-development&timeline=3-months',
      response: {
        status: 200,
        data: {
          estimated_cost: "$15,000 - $25,000",
          timeline: "8-12 weeks",
          next_steps: "Schedule consultation call"
        }
      }
    }
  }
];

const authenticationMethods = [
  {
    name: "API Key Authentication",
    description: "Simple API key-based authentication for basic access",
    icon: Key,
    features: [
      "Easy to implement",
      "Suitable for server-to-server communication",
      "Rate limiting included",
      "Secure key management"
    ]
  },
  {
    name: "OAuth 2.0",
    description: "Industry-standard OAuth 2.0 for secure user authentication",
    icon: Shield,
    features: [
      "Secure token-based authentication",
      "User consent management",
      "Token refresh capabilities",
      "Industry standard security"
    ]
  },
  {
    name: "JWT Tokens",
    description: "JSON Web Tokens for stateless authentication",
    icon: Lock,
    features: [
      "Stateless authentication",
      "Self-contained tokens",
      "Cross-domain compatibility",
      "Secure token validation"
    ]
  }
];

const rateLimits = [
  {
    tier: "Free",
    requests: "100/hour",
    description: "Perfect for testing and small projects",
    features: ["Basic API access", "Standard support", "Community resources"]
  },
  {
    tier: "Professional",
    requests: "1,000/hour",
    description: "Ideal for growing businesses",
    features: ["Priority support", "Advanced features", "SLA guarantee"]
  },
  {
    tier: "Enterprise",
    requests: "Unlimited",
    description: "Custom solutions for large organizations",
    features: ["Dedicated support", "Custom integrations", "SLA guarantee"]
  }
];

export default function APIPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
=======
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code, 
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  BookOpen,
  Terminal,
  Download,
  Play,
  Globe,
  Users,
  Settings
} from 'lucide-react';

const apiFeatures = [
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee',
    features: ['JWT Authentication', 'Rate Limiting', 'SSL Encryption', 'Data Validation']
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Lightning-fast responses with global CDN and caching',
    features: ['Global CDN', 'Response Caching', 'Compression', 'Load Balancing']
  },
  {
    icon: BookOpen,
    title: 'Developer Friendly',
    description: 'Comprehensive documentation and SDKs for easy integration',
    features: ['REST API', 'GraphQL', 'Webhooks', 'SDKs']
  },
  {
    icon: Terminal,
    title: 'Easy Integration',
    description: 'Simple endpoints with clear error messages and examples',
    features: ['RESTful Design', 'JSON Responses', 'Error Handling', 'Testing Tools']
  }
];

const endpoints = [
  {
    name: 'Authentication',
    method: 'POST',
    url: '/api/auth/login',
    description: 'Authenticate users and get access tokens'
  },
  {
    name: 'Get Services',
    method: 'GET',
    url: '/api/services',
    description: 'Retrieve all available services'
  },
  {
    name: 'Create Contact',
    method: 'POST',
    url: '/api/contact',
    description: 'Submit contact forms and inquiries'
  },
  {
    name: 'Get Analytics',
    method: 'GET',
    url: '/api/analytics',
    description: 'Retrieve usage analytics and metrics'
  }
];

export default function APIPage() {
  return (
    <>
      <Head>
        <title>API Services | Zion Tech Group</title>
        <meta name="description" content="Powerful API services for seamless integration. Build amazing applications with our comprehensive API platform." />
        <meta name="keywords" content="API services, REST API, GraphQL, webhooks, integration, developer tools" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
>>>>>>> main
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                API Documentation
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Integrate with Zion Tech Group's services using our comprehensive REST API. 
                Build powerful applications with our robust and scalable API endpoints.
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Powerful API services for seamless integration. Build amazing applications 
                with our comprehensive API platform.
>>>>>>> main
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#features"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Explore Features
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* API Endpoints */}
        <section className="py-16">
=======
        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
>>>>>>> main
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                API Endpoints
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints designed to integrate seamlessly 
                with your applications and workflows.
              </p>
            </motion.div>

            <div className="space-y-8">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={endpoint.path}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold mr-4 ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-lg font-mono text-gray-900">{endpoint.path}</code>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{endpoint.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Parameters */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Parameters</h4>
                      <div className="space-y-2">
                        {endpoint.parameters.map((param, paramIndex) => (
                          <div key={paramIndex} className="flex items-center justify-between text-sm">
                            <div>
                              <code className="text-blue-600">{param.name}</code>
                              <span className="text-gray-500 ml-2">({param.type})</span>
                              {param.required && <span className="text-red-500 ml-1">*</span>}
                            </div>
                            <span className="text-gray-500 text-xs">{param.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Example */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Example</h4>
                      <div className="bg-gray-100 rounded-lg p-4">
                        <div className="text-sm">
                          <div className="text-gray-600 mb-2">Request:</div>
                          <code className="text-blue-600">{endpoint.example.request}</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Authentication Methods
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the authentication method that best fits your security requirements 
                and integration needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {authenticationMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.div
                    key={method.name}
=======
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                API Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our API platform is designed for developers, by developers. 
                Built with modern standards and best practices.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {apiFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
>>>>>>> main
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
<<<<<<< HEAD
                    className="bg-gray-50 rounded-lg p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{method.name}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {method.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
=======
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {feature.description}
                        </p>
                        <ul className="space-y-2">
                          {feature.features.map((item, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
>>>>>>> main
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Rate Limits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Rate Limits & Pricing
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that best fits your usage requirements and scale as you grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {rateLimits.map((limit, index) => (
                <motion.div
                  key={limit.tier}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-lg shadow-lg p-6 ${
                    limit.tier === 'Professional' ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{limit.tier}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{limit.requests}</div>
                    <p className="text-gray-600">{limit.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {limit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    limit.tier === 'Professional' 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    {limit.tier === 'Free' ? 'Get Started' : 'Contact Sales'}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
=======
        {/* Endpoints Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
>>>>>>> main
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
<<<<<<< HEAD
              <h2 className="text-3xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Start integrating with our API today. Get your API key and begin building 
                powerful applications with our services.
=======
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                API Endpoints
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints and learn how to integrate with our services.
>>>>>>> main
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get API Key
                </a>
                <a
                  href="/docs"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Documentation
                </a>
              </div>
            </motion.div>
<<<<<<< HEAD
          </div>
        </section>
      </div>
    </MainLayout>
=======

            <div className="grid md:grid-cols-2 gap-6">
              {endpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {endpoint.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {endpoint.description}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                      endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {endpoint.method}
                    </span>
                  </div>
                  <div className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-sm">
                    {endpoint.url}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get your API key and start building amazing applications with our powerful API platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get API Key
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
>>>>>>> main
  );
}