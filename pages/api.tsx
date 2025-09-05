<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Copy,
  ExternalLink,
  Key,
  Globe,
  Shield,
  Zap,
  BookOpen,
  Terminal,
  Download,
  Play,
  Code,
  Database,
  Server,
  Cpu
} from 'lucide-react';
import Layout from '../components/Layout';

const apiFeatures = [
  {
    title: 'RESTful API',
    description: 'Clean, intuitive REST API design',
    icon: Globe
=======
<<<<<<< HEAD
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Code, Book, Zap, Shield } from 'lucide-react';

=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Code, Book, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';
>>>>>>> main

export default function APIPage() {
  const apiFeatures = [
    {
      title: "RESTful APIs",
      description: "Clean, intuitive REST API endpoints for easy integration",
      icon: Code,
      features: ["JSON Responses", "HTTP Status Codes", "Rate Limiting"]
    },
    {
      title: "Comprehensive Documentation",
      description: "Detailed API documentation with examples and guides",
      icon: Book,
      features: ["Interactive Docs", "Code Examples", "SDK Libraries"]
    },
    {
      title: "High Performance",
      description: "Fast, reliable APIs built for scale and speed",
      icon: Zap,
      features: ["Low Latency", "High Throughput", "Global CDN"]
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with authentication and encryption",
      icon: Shield,
      features: ["OAuth 2.0", "API Keys", "SSL/TLS Encryption"]
    }
  ];
=======
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
>>>>>>> main

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

  const apiEndpoints = [{
    method: 'GET',
    path: '/api/v1/services',
    description: 'Retrieve all available services',
    parameters: [
      { name: 'limit', type: 'integer', required: false, description: 'Number of services to return (max 100)' },
      { name: 'offset', type: 'integer', required: false, description: 'Number of services to skip' },
      { name: 'category', type: 'string', required: false, description: 'Filter by service category' }
    ],
    responses: [
      { code: 200, description: 'Success', example: '{ "services": [...], "total": 45 }' },
      { code: 400, description: 'Bad Request', example: '{ "error": "Invalid parameters" }' }]
>>>>>>> main
  },
  {
    title: 'Authentication',
    description: 'Secure API key authentication',
    icon: Key
  },
  {
<<<<<<< HEAD
    title: 'Rate Limiting',
    description: 'Built-in rate limiting protection',
    icon: Shield
  },
  {
    title: 'Real-time Updates',
    description: 'WebSocket support for real-time data',
    icon: Zap
  }
];

const apiEndpoints = [
  {
    method: 'GET',
    endpoint: '/api/v1/ai-services',
    description: 'Retrieve all AI services',
    parameters: ['limit', 'offset', 'category'],
    response: 'Array of AI service objects'
=======
    method: 'GET',
    path: '/api/v1/status',
    description: 'Get system status and health information',
    parameters: [],
    responses: [
      { code: 200, description: 'Success', example: '{ "status": "operational", "uptime": "99.9%" }' }]
  },
  {
    method: 'POST',
    path: '/api/v1/quote',
    description: 'Request a project quote',
    parameters: [
      { name: 'project_type', type: 'string', required: true, description: 'Type of project (ai, cloud, web, mobile)' },
      { name: 'description', type: 'string', required: true, description: 'Project description' },
      { name: 'budget_range', type: 'string', required: false, description: 'Budget range for the project' },
      { name: 'timeline', type: 'string', required: false, description: 'Desired project timeline' }
    ],
    responses: [
      { code: 201, description: 'Quote created', example: '{ "quote_id": "456", "estimated_cost": "$10,000 - $15,000" }' },
      { code: 400, description: 'Bad Request', example: '{ "error": "Invalid project type" }' }]
  }]
  const apiFeaturesDetailed = [{
    title: 'RESTful API Design',
    description: 'Clean, intuitive REST API endpoints following industry best practices',
    icon: Code,
    features: ['RESTful principles', 'Consistent naming', 'HTTP status codes', 'Resource-based URLs']
  },
  {
    title: 'Authentication & Security',
    description: 'Secure API access with multiple authentication methods',
    icon: Shield,
    features: ['API Key authentication', 'JWT tokens', 'OAuth 2.0', 'Rate limiting']
  },
  {
    title: 'Real-time Updates',
    description: 'WebSocket support for real-time data streaming',
    icon: Zap,
    features: ['WebSocket connections', 'Real-time notifications', 'Live data updates', 'Event streaming']
  },
  {
    title: 'Comprehensive Documentation',
    description: 'Interactive API documentation with examples and testing',
    icon: Book,
    features: ['Interactive docs', 'Code examples', 'Testing interface', 'SDK generation']
  },
  {
    title: 'Monitoring & Analytics',
    description: 'Advanced monitoring and analytics for API usage',
    icon: BarChart3,
    features: ['Usage analytics', 'Performance metrics', 'Error tracking', 'Custom dashboards']
  },
  {
    title: 'Scalability & Performance',
    description: 'Built for high performance and scalability',
    icon: Server,
    features: ['Load balancing', 'Caching', 'CDN integration', 'Auto-scaling']
  }]
  const sdkLanguages = [
    { name: 'JavaScript', icon: 'JS', color: 'bg-yellow-500' },
    { name: 'Python', icon: 'PY', color: 'bg-blue-500' },
    { name: 'Java', icon: 'J', color: 'bg-red-500' },
    { name: 'C#', icon: 'C#', color: 'bg-purple-500' },
    { name: 'PHP', icon: 'PHP', color: 'bg-indigo-500' },
    { name: 'Go', icon: 'GO', color: 'bg-cyan-500' }]
  const [selectedEndpoint, setSelectedEndpoint] = useState(0)
  const [copiedCode, setCopiedCode] = useState<number | null>(null)
  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(index)
    setTimeout(() => setCopiedCode(null), 2000)
  }
  const generateCodeExample = (endpoint: any) => {
    const baseUrl = 'https://api.ziontechgroup.com'
    const exampleParams = endpoint.parameters
      .filter((p: any) => p.required)
      .map((p: any) => `${p.name}: "example_${p.name}"`)
      .join(', ')
    if (endpoint.method === 'GET') {
      return `fetch('${baseUrl}${endpoint.path}?${endpoint.parameters.map((p: any) => `${p.name}=example_${p.name}`).join('&')}')`
        + `\n  .then(response => response.json())`
        + `\n  .then(data => console.log(data))`
        + `\n  .catch(error => console.error('Error:', error));`;
    } else {
      return `fetch('${baseUrl}${endpoint.path}', {
  method: '${endpoint.method}',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
>>>>>>> main
  },
  {
    method: 'POST',
    endpoint: '/api/v1/ai-services',
    description: 'Create a new AI service request',
    parameters: ['service_type', 'requirements', 'budget'],
    response: 'Service request object'
  },
  {
    method: 'GET',
    endpoint: '/api/v1/it-services',
    description: 'Retrieve all IT services',
    parameters: ['limit', 'offset', 'category'],
    response: 'Array of IT service objects'
  },
  {
    method: 'GET',
    endpoint: '/api/v1/micro-saas',
    description: 'Retrieve all Micro SaaS products',
    parameters: ['limit', 'offset', 'category'],
    response: 'Array of Micro SaaS product objects'
  }
];

export default function API() {
  return (
<<<<<<< HEAD
    <Layout
      title="API - Zion Tech Group"
      description="Complete API documentation and integration guides for all our services"
      keywords="API, REST API, developer resources, integration guides, API documentation"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
=======
<<<<<<< HEAD
    <Layout
      title="API Reference - Zion Tech Group"
      description="Comprehensive API documentation and reference for integrating with Zion Tech Group services."
    >;
      <div className="min-h-screen bg-gray-50">";
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">"
          <div className="container mx-auto px-4">";
=======
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
>>>>>>> main
            <motion.div
<<<<<<< HEAD
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Comprehensive API documentation and integration guides for all our services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center justify-center"
                >
                  Get API Key
                  <ArrowRight className="ml-2 w-4 h-4" />
=======
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center""
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
                API Reference;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
                Integrate with Zion Tech Group services using our comprehensive APIs. 
                Build powerful applications with our developer-friendly platform.;
              </p>;
            </motion.div>;
          </div>;
        </section>;

        {/* Features Section */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {apiFeatures.map((feature, index) => {}
=======
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Powerful API services for seamless integration. Build amazing applications 
                with our comprehensive API platform.
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
>>>>>>> main
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* API Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiFeatures.map((feature, index) => {
=======
        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
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
>>>>>>> main
>>>>>>> main
                const IconComponent = feature.icon;
                return (;
                  <motion.div);
                    key={index}
<<<<<<< HEAD
                    className="bg-white p-6 rounded-lg shadow-lg text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
=======
<<<<<<< HEAD
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300""
=======
>>>>>>> main
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
<<<<<<< HEAD
                  >,
                    <div className="text-indigo-600 mb-4">";
                      <IconComponent className="w-10 h-10" />";
                    </div>;
                    <h3 className="text-xl font-bold text-gray-900 mb-4">";
                      {feature.title}
                    </h3>,
                    <p className="text-gray-600 mb-4">";
                      {feature.description}
                    </p>,
                    <ul className="space-y-2">";
                      {feature.features.map((item, itemIndex) => (,
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">"
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />";
                          {item}
                        </li>,
                      ))}
                    </ul>,
                  </motion.div>;
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
>>>>>>> main
                );
              })}
            </div>,
          </div>;
        </section>;

<<<<<<< HEAD
        {/* API Endpoints */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              API Endpoints
            </h2>
            <div className="space-y-6">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-lg font-mono text-gray-900">{endpoint.endpoint}</code>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Copy className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">{endpoint.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Parameters:</h4>
                      <p className="text-sm text-gray-600">{endpoint.parameters.join(', ')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Response:</h4>
                      <p className="text-sm text-gray-600">{endpoint.response}</p>
                    </div>
=======
<<<<<<< HEAD
        {/* API Endpoints Section */}
        <section className="py-20 bg-white">"
          <div className="container mx-auto px-4">";
            <motion.div
              className="text-center mb-16"";
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
<<<<<<< HEAD
            >,
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">";
                Available Endpoints;
              </h2>;
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">";
                Explore our comprehensive API endpoints for AI services, IT solutions, and micro SaaS platforms.,
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              <div className="bg-gray-50 p-6 rounded-lg">";
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Services API</h3>";
                <div className="space-y-2">";
                  <div className="flex items-center justify-between">";
                    <span className="text-sm text-gray-600">POST /api/ai/analyze</span>";
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">AI</span>";
                  </div>;
                  <div className="flex items-center justify-between">";
                    <span className="text-sm text-gray-600">POST /api/ai/predict</span>";
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">AI</span>";
                  </div>;
                  <div className="flex items-center justify-between">";
                    <span className="text-sm text-gray-600">POST /api/ai/process</span>";
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">AI</span>";
                  </div>;
                </div>;
              </div>;

              <div className="bg-gray-50 p-6 rounded-lg">";
                <h3 className="text-xl font-bold text-gray-900 mb-4">IT Services API</h3>";
                <div className="space-y-2">";
                  <div className="flex items-center justify-between">";
                    <span className="text-sm text-gray-600">GET /api/infrastructure/status</span>";
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IT</span>";
                  </div>;
                  <div className="flex items-center justify-between">";
                    <span className="text-sm text-gray-600">POST /api/security/scan</span>";
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IT</span>";
                  </div>;
                  <div className="flex items-center justify-between">";
                    <span className="text-sm text-gray-600">GET /api/cloud/resources</span>";
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IT</span>";
                  </div>;
                </div>;
              </div>;

              <div className="bg-gray-50 p-6 rounded-lg">";
                <h3 className="text-xl font-bold text-gray-900 mb-4">Micro SaaS API</h3>";
                <div className="space-y-2">";
                  <div className="flex items-center justify-between">";
                    <span className="text-sm text-gray-600">POST /api/saas/subscribe</span>";
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">SaaS</span>";
                  </div>;
                  <div className="flex items-center justify-between">";
                    <span className="text-sm text-gray-600">GET /api/saas/usage</span>";
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">SaaS</span>";
                  </div>;
                  <div className="flex items-center justify-between">";
                    <span className="text-sm text-gray-600">POST /api/saas/configure</span>";
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">SaaS</span>";
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <h2 className="text-3xl md:text-4xl font-bold mb-6">";
              Start Building Today;
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Ready to integrate with our APIs? Get started with our comprehensive documentation and developer tools.;
            </p>;
            <motion.a;
              href="/contact"";
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"";
              whileHover={{ scale: 1.05 }}
            >,
              Get API Access;
              <ArrowRight className="w-5 h-5 ml-2" />";
            </motion.a>;
          </div>;
        </section>;
      </div>;
    </Layout>;
=======
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                API Endpoints
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints and learn how to integrate with our services.
              </p>
            </motion.div>

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
>>>>>>> main
                  </div>
                </motion.div>
              ))}
            </div>
<<<<<<< HEAD
          </div>
        </section>
      </div>
    </Layout>
=======
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
>>>>>>> main
  );
}