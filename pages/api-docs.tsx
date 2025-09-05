import React from 'react';
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
  Copy
} from 'lucide-react';
import Layout from '../components/Layout';

const endpoints = [
  {
    name: 'Authentication',
    method: 'POST',
    endpoint: '/api/auth/login',
    description: 'Authenticate users and get access tokens',
    parameters: [
      { name: 'email', type: 'string', required: true, description: 'User email address' },
      { name: 'password', type: 'string', required: true, description: 'User password' }
    ],
    response: {
      status: 200,
      data: {
        token: 'string',
        user: 'object',
        expires: 'datetime'
      }
    }
  },
  {
    name: 'Get Services',
    method: 'GET',
    endpoint: '/api/services',
    description: 'Retrieve all available services',
    parameters: [
      { name: 'category', type: 'string', required: false, description: 'Filter by service category' },
      { name: 'limit', type: 'number', required: false, description: 'Number of results to return' }
    ],
    response: {
      status: 200,
      data: {
        services: 'array',
        total: 'number',
        page: 'number'
      }
    }
  },
  {
    name: 'Create Project',
    method: 'POST',
    endpoint: '/api/projects',
    description: 'Create a new project',
    parameters: [
      { name: 'name', type: 'string', required: true, description: 'Project name' },
      { name: 'description', type: 'string', required: false, description: 'Project description' },
      { name: 'type', type: 'string', required: true, description: 'Project type' }
    ],
    response: {
      status: 201,
      data: {
        id: 'string',
        name: 'string',
        status: 'string',
        createdAt: 'datetime'
      }
    }
  },
  {
    name: 'Get Analytics',
    method: 'GET',
    endpoint: '/api/analytics',
    description: 'Retrieve analytics data',
    parameters: [
      { name: 'startDate', type: 'string', required: false, description: 'Start date (ISO format)' },
      { name: 'endDate', type: 'string', required: false, description: 'End date (ISO format)' },
      { name: 'metric', type: 'string', required: false, description: 'Specific metric to retrieve' }
    ],
    response: {
      status: 200,
      data: {
        metrics: 'object',
        period: 'string',
        generatedAt: 'datetime'
      }
    }
  }
];

const features = [
  {
    title: 'RESTful API',
    description: 'Clean, intuitive REST endpoints following industry best practices',
    icon: Code
  },
  {
    title: 'Authentication',
    description: 'Secure JWT-based authentication with role-based access control',
    icon: Shield
  },
  {
    title: 'Real-time Updates',
    description: 'WebSocket support for real-time data streaming and notifications',
    icon: Zap
  },
  {
    title: 'Comprehensive Documentation',
    description: 'Detailed API documentation with interactive examples',
    icon: BookOpen
  },
  {
    title: 'SDK Support',
    description: 'Official SDKs for popular programming languages',
    icon: Terminal
  },
  {
    title: 'Rate Limiting',
    description: 'Built-in rate limiting to ensure fair usage and system stability',
    icon: CheckCircle
  }
];

export default function APIDocsPage() {
  const [selectedEndpoint, setSelectedEndpoint] = React.useState(0);
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const generateCodeExample = (endpoint: any) => {
    const baseUrl = 'https://api.ziontechgroup.com';
    const method = endpoint.method;
    const url = `${baseUrl}${endpoint.endpoint}`;
    
    if (method === 'GET') {
      return `curl -X GET "${url}" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`;
    } else {
      const body = endpoint.parameters?.reduce((acc: any, param: any) => {
        if (param.required) {
          acc[param.name] = param.type === 'string' ? `"${param.name}_value"` : 
                           param.type === 'number' ? 123 : 
                           param.type === 'boolean' ? true : null;
        }
        return acc;
      }, {});
      
      return `curl -X ${method} "${url}" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(body, null, 2)}'`;
    }
  };

  return (
    <Layout
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group services. Access our RESTful APIs with detailed examples and SDKs."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Integrate with Zion Tech Group's powerful APIs to build amazing applications and services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#getting-started"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get Started
                </a>
                <a
                  href="#endpoints"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
                >
                  View Endpoints
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our APIs?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our APIs are designed with developers in mind, offering powerful features and comprehensive documentation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section id="getting-started" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Getting Started
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Follow these simple steps to start using our APIs in your applications.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Get API Key</h3>
                  <p className="text-gray-600">
                    Sign up for an account and generate your API key from the dashboard.
                  </p>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Make Request</h3>
                  <p className="text-gray-600">
                    Use your API key to make authenticated requests to our endpoints.
                  </p>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Build & Scale</h3>
                  <p className="text-gray-600">
                    Integrate our APIs into your applications and scale with confidence.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints Section */}
        <section id="endpoints" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                API Endpoints
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints with detailed documentation and examples.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Endpoints List */}
                <div className="space-y-4">
                  {endpoints.map((endpoint, index) => (
                    <motion.div
                      key={index}
                      className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        selectedEndpoint === index
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedEndpoint(index)}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900">
                          {endpoint.name}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                          endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                          endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {endpoint.method}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">
                        {endpoint.endpoint}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {endpoint.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Endpoint Details */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {endpoints[selectedEndpoint].name}
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Method and Endpoint */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Request</h4>
                      <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                        <span className="text-yellow-400">{endpoints[selectedEndpoint].method}</span>{' '}
                        <span className="text-white">{endpoints[selectedEndpoint].endpoint}</span>
                      </div>
                    </div>

                    {/* Parameters */}
                    {endpoints[selectedEndpoint].parameters && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Parameters</h4>
                        <div className="space-y-2">
                          {endpoints[selectedEndpoint].parameters.map((param: any, index: number) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-white rounded">
                              <div>
                                <span className="font-medium text-gray-900">{param.name}</span>
                                <span className="text-gray-500 ml-2">({param.type})</span>
                                {param.required && (
                                  <span className="text-red-500 ml-2 text-xs">required</span>
                                )}
                              </div>
                              <span className="text-gray-500 text-sm">{param.description}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Response */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Response</h4>
                      <div className="bg-gray-900 text-gray-300 p-4 rounded-lg font-mono text-sm">
                        <div className="text-green-400">Status: {endpoints[selectedEndpoint].response.status}</div>
                        <div className="text-blue-400">Data:</div>
                        <pre className="mt-2 text-xs">
                          {JSON.stringify(endpoints[selectedEndpoint].response.data, null, 2)}
                        </pre>
                      </div>
                    </div>

                    {/* Code Example */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-semibold text-gray-700">Example</h4>
                        <button
                          onClick={() => copyToClipboard(generateCodeExample(endpoints[selectedEndpoint]), `example-${selectedEndpoint}`)}
                          className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                        >
                          <Copy className="w-4 h-4" />
                          {copiedCode === `example-${selectedEndpoint}` ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                      <div className="bg-gray-900 text-gray-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                        <pre>{generateCodeExample(endpoints[selectedEndpoint])}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                Start building with our APIs today and unlock the power of Zion Tech Group's platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get API Access
                </Link>
                <Link
                  href="/docs"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Full Documentation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

