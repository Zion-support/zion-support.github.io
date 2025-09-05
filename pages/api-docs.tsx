import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { 
=======
import {
>>>>>>> main
  Code, 
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  BookOpen,
  Terminal,
  Download,
  Play,
<<<<<<< HEAD
  Download
} from 'lucide-react';
import SimpleLayout from '../components/SimpleLayout';

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/users",
    description: "Retrieve all users",
    parameters: [
      { name: "limit", type: "integer", required: false, description: "Number of users to return" },
      { name: "offset", type: "integer", required: false, description: "Number of users to skip" }
    ],
    example: `curl -X GET "https://api.ziontechgroup.com/v1/users?limit=10" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
  },
  {
    method: "POST",
    path: "/api/v1/users",
    description: "Create a new user",
    parameters: [
      { name: "name", type: "string", required: true, description: "User's full name" },
      { name: "email", type: "string", required: true, description: "User's email address" },
      { name: "role", type: "string", required: false, description: "User's role" }
    ],
    example: `curl -X POST "https://api.ziontechgroup.com/v1/users" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "John Doe", "email": "john@example.com"}'`
  },
  {
    method: "PUT",
    path: "/api/v1/users/{id}",
    description: "Update a user",
    parameters: [
      { name: "id", type: "string", required: true, description: "User ID" },
      { name: "name", type: "string", required: false, description: "User's full name" },
      { name: "email", type: "string", required: false, description: "User's email address" }
    ],
    example: `curl -X PUT "https://api.ziontechgroup.com/v1/users/123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "John Smith"}'`
  },
  {
    method: "DELETE",
    path: "/api/v1/users/{id}",
    description: "Delete a user",
    parameters: [
      { name: "id", type: "string", required: true, description: "User ID" }
    ],
    example: `curl -X DELETE "https://api.ziontechgroup.com/v1/users/123" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
  }
];

const sdks = [
  { name: "JavaScript", version: "2.1.0", description: "Node.js and browser support" },
  { name: "Python", version: "1.8.2", description: "Python 3.6+ support" },
  { name: "PHP", version: "1.5.1", description: "PHP 7.4+ support" },
  { name: "Java", version: "2.0.0", description: "Java 8+ support" },
  { name: "Go", version: "1.2.0", description: "Go 1.16+ support" },
  { name: "Ruby", version: "1.3.0", description: "Ruby 2.7+ support" }
];

export default function ApiDocsPage() {
  return (
    <SimpleLayout
      title="API Documentation - Zion Tech Group"
      description="Complete API reference with endpoints, authentication, examples, and SDKs for developers."
      keywords="API documentation, REST API, GraphQL, SDKs, developer resources, API reference"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-teal-900 to-cyan-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
=======
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
<<<<<<< HEAD
    example: `curl -X POST "https://api.ziontechgroup.com/v1/users" \\"
  -H "Authorization: Bearer YOUR_API_KEY" \\";
  -H "Content-Type: application/json" \\";
  -d '{"name": "John Doe", "email": "john@example.com"}'`
=======
    response: {
      status: 200,
      data: {
        services: 'array',
        total: 'number',
        page: 'number'
      }
    }
>>>>>>> main
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
<<<<<<< HEAD
    example: `curl -X PUT "https://api.ziontechgroup.com/v1/users/123" \\"
  -H "Authorization: Bearer YOUR_API_KEY" \\";
  -H "Content-Type: application/json" \\";
  -d '{"name": "John Smith"}'`
=======
    response: {
      status: 201,
      data: {
        id: 'string',
        name: 'string',
        status: 'string',
        createdAt: 'datetime'
      }
    }
>>>>>>> main
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
<<<<<<< HEAD
    example: `curl -X DELETE "https://api.ziontechgroup.com/v1/users/123" \\"
  -H "Authorization: Bearer YOUR_API_KEY"`";
  }
;];

const sdks = [;
  { name: "JavaScript", version: "2.1.0", description: "Node.js and browser support" },"
  { name: "Python", version: "1.8.2", description: "Python 3.6+ support" },"
  { name: "PHP", version: "1.5.1", description: "PHP 7.4+ support" },"
  { name: "Java", version: "2.0.0", description: "Java 8+ support" },"
  { name: "Go", version: "1.2.0", description: "Go 1.16+ support" },"
  { name: "Ruby", version: "1.3.0", description: "Ruby 2.7+ support" }"
;];

export default function ApiDocsPage() {
  return (;
    <Layout);
      title="API Documentation - Zion Tech Group"";
      description="Complete API reference with endpoints, authentication, examples, and SDKs for developers.""
      keywords="API documentation, REST API, GraphQL, SDKs, developer resources, API reference""
    >;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-teal-900 to-cyan-900 text-white py-20 overflow-hidden">"
          <div className="absolute inset-0">";
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>";
          </div>;
>>>>>>> main

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API{' '}
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
=======
              className="text-center""
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
                API{' '}',
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">";
                  Documentation;
                </span>;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
>>>>>>> main
                Complete API reference with endpoints, authentication, examples, and SDKs. 
                Everything you need to integrate with our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#endpoints" className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Explore Endpoints
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Get API Key
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}
<<<<<<< HEAD
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
=======
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";
            <motion.div;
              className="text-center mb-16"";
=======
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
>>>>>>> main
>>>>>>> main
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Quick Start
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get up and running with our API in minutes
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="mb-4">
                  <span className="text-gray-400"># Install our SDK</span>
                </div>
                <div className="mb-4">
                  <span className="text-blue-400">npm</span> install ziontechgroup-api
                </div>
                <div className="mb-4">
                  <span className="text-gray-400"># Initialize the client</span>
                </div>
                <div className="mb-4">
                  <span className="text-purple-400">const</span> client = <span className="text-yellow-400">new</span> ZionTechGroupAPI({'{'}
                </div>
                <div className="ml-4 mb-4">
                  apiKey: <span className="text-green-400">'your-api-key'</span>
                </div>
                <div className="mb-4">{'}'});</div>
                <div className="mb-4">
                  <span className="text-gray-400"># Make your first request</span>
                </div>
                <div>
                  <span className="text-purple-400">const</span> users = <span className="text-purple-400">await</span> client.users.list();
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section id="endpoints" className="py-20 bg-white">
=======
<<<<<<< HEAD
            >,
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">";
                Quick Start;
              </h2>;
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">";
                Get up and running with our API in minutes;
              </p>;
            </motion.div>;

            <div className="max-w-4xl mx-auto">";
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">";
                <div className="mb-4">";
                  <span className="text-gray-400"># Install our SDK</span>";
                </div>;
                <div className="mb-4">";
                  <span className="text-blue-400">npm</span> install ziontechgroup-api";
                </div>;
                <div className="mb-4">";
                  <span className="text-gray-400"># Initialize the client</span>";
                </div>;
                <div className="mb-4">";
                  <span className="text-purple-400">const</span> client = <span className="text-yellow-400">new</span> ZionTechGroupAPI({'{'}',
                </div>;
                <div className="ml-4 mb-4">");
                  apiKey: <span className="text-green-400">'your-api-key'</span>';
                </div>;
                <div className="mb-4">{'}'});</div>;
                <div className="mb-4">";
                  <span className="text-gray-400"># Make your first request</span>";
                </div>;
                <div>;
                  <span className="text-purple-400">const</span> users = <span className="text-purple-400">await</span> client.users.list();";
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;

        {/* API Endpoints */}
        <section id="endpoints" className="py-20 bg-white">"
          <div className="container mx-auto px-4">";
            <motion.div;
              className="text-center mb-16"";
=======
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
>>>>>>> main
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                API Endpoints
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Complete reference for all available endpoints
              </p>
            </motion.div>
=======
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
>>>>>>> main
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
            >,
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">";
                API Endpoints;
              </h2>;
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">";
                Complete reference for all available endpoints;
              </p>;
            </motion.div>;
>>>>>>> main

            <div className="space-y-8">
              {endpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
<<<<<<< HEAD
                  className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
=======
                  className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300""
>>>>>>> main
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center space-x-4 mb-2">
                        <span className={`px-3 py-1 rounded text-sm font-semibold ${
                          endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                          endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                          endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-lg font-mono text-gray-900">{endpoint.path}</code>
                      </div>
                      <p className="text-gray-600">{endpoint.description}</p>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Copy className="w-5 h-5" />
                    </button>
                  </div>

                  {endpoint.parameters.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Parameters:</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2">Name</th>
                              <th className="text-left py-2">Type</th>
                              <th className="text-left py-2">Required</th>
                              <th className="text-left py-2">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {endpoint.parameters.map((param, paramIndex) => (
                              <tr key={paramIndex} className="border-b">
                                <td className="py-2 font-mono">{param.name}</td>
                                <td className="py-2 text-gray-600">{param.type}</td>
                                <td className="py-2">
                                  {param.required ? (
                                    <span className="text-red-600">Yes</span>
                                  ) : (
                                    <span className="text-gray-400">No</span>
                                  )}
                                </td>
                                <td className="py-2 text-gray-600">{param.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Example:</h4>
                    <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                      <pre>{endpoint.example}</pre>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SDKs Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
=======
                >,
                  <div className="flex items-start justify-between mb-6">";
                    <div>;
                      <div className="flex items-center space-x-4 mb-2">";
                        <span className={`px-3 py-1 rounded text-sm font-semibold ${}
                          endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :',
                          endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :';
                          endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :';
                          'bg-red-100 text-red-800'';
                        }`}>,
                          {endpoint.method}
                        </span>,
                        <code className="text-lg font-mono text-gray-900">{endpoint.path}</code>"
                      </div>;
                      <p className="text-gray-600">{endpoint.description}</p>"
                    </div>;
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">";
                      <Copy className="w-5 h-5" />";
                    </button>;
                  </div>;

                  {endpoint.parameters.length > 0 && (;
                    <div className="mb-6">";
                      <h4 className="font-semibold text-gray-900 mb-3">Parameters:</h4>";
                      <div className="overflow-x-auto">";
                        <table className="w-full text-sm">";
                          <thead>;
                            <tr className="border-b">";
                              <th className="text-left py-2">Name</th>";
                              <th className="text-left py-2">Type</th>";
                              <th className="text-left py-2">Required</th>";
                              <th className="text-left py-2">Description</th>";
                            </tr>;
                          </thead>;
                          <tbody>;
                            {endpoint.parameters.map((param, paramIndex) => (,
                              <tr key={paramIndex} className="border-b">"
                                <td className="py-2 font-mono">{param.name}</td>"
                                <td className="py-2 text-gray-600">{param.type}</td>"
                                <td className="py-2">";
                                  {param.required ? (;
                                    <span className="text-red-600">Yes</span>";
                                  ) : (;
                                    <span className="text-gray-400">No</span>";
                                  )}
                                </td>,
                                <td className="py-2 text-gray-600">{param.description}</td>"
                              </tr>;
                            ))}
                          </tbody>,
                        </table>;
                      </div>;
                    </div>;
                  )}
                  <div>;
                    <h4 className="font-semibold text-gray-900 mb-3">Example:</h4>";
                    <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">";
                      <pre>{endpoint.example}</pre>,
                    </div>;
                  </div>;
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;

        {/* SDKs Section */}
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";
            <motion.div;
              className="text-center mb-16"";
>>>>>>> main
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                SDKs & Libraries
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Official SDKs for popular programming languages
              </p>
            </motion.div>
=======
            >,
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">";
                SDKs & Libraries;
              </h2>;
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">";
                Official SDKs for popular programming languages;
              </p>;
            </motion.div>;
>>>>>>> main

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sdks.map((sdk, index) => (
                <motion.div
                  key={index}
<<<<<<< HEAD
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
=======
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer""
>>>>>>> main
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
<<<<<<< HEAD
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{sdk.name}</h3>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                      v{sdk.version}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{sdk.description}</p>
                  <div className="flex space-x-2">
                    <button className="flex-1 px-3 py-2 bg-green-600 text-white text-sm font-semibold rounded hover:bg-green-700 transition-colors">
                      <Download className="w-4 h-4 inline mr-1" />
                      Download
                    </button>
                    <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-semibold rounded hover:bg-gray-50 transition-colors">
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
=======
                >,
                  <div className="flex items-center justify-between mb-4">";
                    <h3 className="text-lg font-bold text-gray-900">{sdk.name}</h3>"
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">";
                      v{sdk.version}
                    </span>,
                  </div>;
                  <p className="text-gray-600 text-sm mb-4">{sdk.description}</p>"
                  <div className="flex space-x-2">";
                    <button className="flex-1 px-3 py-2 bg-green-600 text-white text-sm font-semibold rounded hover:bg-green-700 transition-colors">";
                      <Download className="w-4 h-4 inline mr-1" />";
                      Download;
                    </button>;
                    <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-semibold rounded hover:bg-gray-50 transition-colors">";
                      <Play className="w-4 h-4" />";
                    </button>;
                  </div>;
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;

        {/* CTA Section */}
        <section className="py-20 bg-white">"
          <div className="container mx-auto px-4">";
            <motion.div;
              className="text-center max-w-4xl mx-auto"";
=======
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
>>>>>>> main
>>>>>>> main
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Get your API key and start building amazing applications today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get API Key
                </Link>
                <Link href="/docs" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  View Documentation
=======
<<<<<<< HEAD
            >,
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Ready to Get Started?;
              </h2>;
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">";
                Get your API key and start building amazing applications today;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">";
                  Get API Key;
                </Link>;
                <Link href="/docs" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">";
                  View Documentation;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
=======
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
>>>>>>> main
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </SimpleLayout>
=======
    </MainLayout>
>>>>>>> main
>>>>>>> main
  );
}

