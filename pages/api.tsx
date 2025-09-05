import { motion } from 'framer-motion'
import Link from 'next/link'
import Layout from '../components/Layout'
import { Code, Book, Zap, Shield, Globe, Database, Server, Lock, CheckCircle, ArrowRight } from 'lucide-react'

const apiServices = [
  {
    title: 'RESTful API', description: 'Clean, intuitive REST API design', ;
    icon: Globe, features: ['RESTful Design', 'JSON Responses', 'HTTP Status Codes', 'Error Handling'] },;
  {
    title: 'GraphQL API', description: 'Flexible query language for APIs', icon: Code, features: ['Single Endpoint', 'Type Safety', 'Real-time Subscriptions', 'Introspection'] },;
  {
    title: 'WebSocket API', description: 'Real-time bidirectional communication', icon: Zap, features: ['Real-time Updates', 'Low Latency', 'Persistent Connection', 'Event-driven'] },;
  {
    title: 'Database API', description: 'Secure database access and management', icon: Database, features: ['CRUD Operations', 'Query Optimization', 'Data Validation', 'Backup & Recovery'] },;
  {
    title: 'Server Management', description: 'Infrastructure and server management APIs', icon: Server, features: ['Server Monitoring', 'Resource Management', 'Auto-scaling', 'Health Checks'] },;
  {
    title: 'Security API', description: 'Authentication and authorization services', icon: Lock, features: ['OAuth 2.0', 'JWT Tokens', 'Role-based Access', 'API Keys'] }]

const features = [{
    title: 'RESTful Design', description: 'Clean, intuitive RESTful APIs that follow industry best practices', ;
    icon: Code }, ;
  {
    title: 'Comprehensive Documentation', description: 'Detailed API documentation with interactive examples and code samples', icon: Book }, ;
  {
    title: 'High Performance', description: 'Optimized for speed and scalability with sub-100ms response times', icon: Zap }, ;
  {
    title: 'Enterprise Security', description: 'Bank-grade security with authentication, authorization, and encryption', ;
    icon: Shield }]

export default function API() {
  return(<Layout
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group's services. Build powerful integrations with our RESTful APIs."
      keywords="API documentation, RESTful API, developer tools, integration"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */ }
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <motion.div
              initial={{opacity: 0, y: 20 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md: text-6xl font-bold mb-6">
                API <span className="text-blue-300">Documentation</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Build powerful integrations with our comprehensive API suite.
                Access our services through clean, well-documented RESTful APIs.;
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <Link
                  href="#getting-started"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  Get Started
                </Link>
                <Link
                  href="#api-reference"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  API Reference
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        { /* Features Section */ }
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <motion.div
              initial={{opacity: 0, y: 20 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our APIs?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our APIs are designed with developers in mind, offering powerful;
                functionality with simple, intuitive interfaces.;
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
              { features.map((feature, index) => (;
                <motion.div;
                  key={index }
                  initial={{opacity: 0, y: 20 }}
                  animate={{opacity: 1, y: 0 }}
                  transition={{duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-lg hover: shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600"  />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    { feature.title }
                  </h3>
                  <p className="text-gray-600">
                    { feature.description }
                  </p>
                </motion.div>))}
            </div>
          </div>
        </section>
        { /* API Services Section */ }
        <section id="api-reference" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <motion.div
              initial={{opacity: 0, y: 20 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
                Available APIs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive suite of APIs designed to power your applications.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              { apiServices.map((service, index) => (;
                <motion.div;
                  key={index }
                  initial={{opacity: 0, y: 20 }}
                  animate={{opacity: 1, y: 0 }}
                  transition={{duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover: shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-blue-600"  />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        { service.title }
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    { service.description }
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Features:  
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      { service.features.map((feature, featureIndex) => (;
                        <li key={featureIndex } className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0"  />
                          { feature }
                        </li>))}
                    </ul>
                  </div>
                  <Link
                    href="/contact"
                    className="flex items-center text-blue-600 hover: text-blue-700 font-medium"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1"  />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        { /* Getting Started Section */ }
        <section id="getting-started" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{opacity: 0, x: -20 }}
                animate={{opacity: 1, x: 0 }}
                transition={{duration: 0.8 }}
              >
                <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-6">
                  Quick Start Guide
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Get up and running with our APIs in minutes. Follow our simple
                  integration guide to start building powerful applications.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Get API Key</h3>
                      <p className="text-gray-600">Sign up and generate your API key from the dashboard</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Read Documentation</h3>
                      <p className="text-gray-600">Explore our comprehensive API documentation and examples</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Start Building</h3>
                      <p className="text-gray-600">Integrate our APIs into your application and start building</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{opacity: 0, x: 20 }}
                animate={{opacity: 1, x: 0 }}
                transition={{duration: 0.8, delay: 0.2 }}
                className="bg-gray-900 rounded-lg p-6"
              >
                <h3 className="text-white font-semibold mb-4">Example API Call</h3>
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{ `curl -X GET \\;
  'https: //api.ziontechgroup.com/v1/users' \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -H 'Content-Type: application/json'
{
  "users": [
    {
      "id": 1, "name": "John Doe", ;
      "email": "john@example.com" }],;
  "total": 1,;
  "page": 1}`}</code>
                </pre>
              </motion.div>
            </div>
          </div>
        </section>
        { /* CTA Section */ }
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <motion.div
              initial={{opacity: 0, y: 20 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
            >
              <h2 className="text-3xl md: text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join thousands of developers who are already building amazing
                applications with our APIs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  Get API Access
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  Contact Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  )
}