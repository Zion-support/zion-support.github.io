import { 
import {
import Head from 'next/head';
import Link from 'next/link';
import { 
  Code, ArrowRight, Book, Zap, Shield, CheckCircle, Globe, 
  Users, Star, Clock, Award, TrendingUp 
  Play,

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
        token: 'string',
        user: 'object',
        expires: 'datetime'
    name: 'Get Services',
    method: 'GET',
    endpoint: '/api/services',
    description: 'Retrieve all available services',
    parameters: [
      { name: 'category', type: 'string', required: false, description: 'Filter by service category' },
      { name: 'limit', type: 'number', required: false, description: 'Number of results to return' }
    ],
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

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
                Complete API reference with endpoints, authentication, examples, and SDKs. 
                Everything you need to integrate with our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#endpoints" className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Explore Endpoints
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Get API Key
        {/* Quick Start */}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
          <div className="container mx-auto px-4">
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}

                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sdks.map((sdk, index) => (
                <motion.div
                  key={index}
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
                  whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
