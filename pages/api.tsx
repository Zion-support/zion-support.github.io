import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  Code, 
  Key, 
  Globe, 
  Database, 
  Shield, 
  Zap, 
  ArrowRight, 
  Copy, 
  CheckCircle, 
  ExternalLink, 
  Clock, 
  Users,
  Lock,
  Server,
  Cpu,
  Network
} from 'lucide-react';

export default function API() {
  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/v1/users',
      description: 'Retrieve user information',
      category: 'Users'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/users',
      description: 'Create a new user',
      category: 'Users'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/projects',
      description: 'List all projects',
      category: 'Projects'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/projects',
      description: 'Create a new project',
      category: 'Projects'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/analytics',
      description: 'Get analytics data',
      category: 'Analytics'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/ai/process',
      description: 'Process AI request',
      category: 'AI Services'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure Authentication',
      description: 'OAuth 2.0, JWT tokens, and API key management for secure access control.'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Sub-100ms response times with 99.9% uptime guarantee and global CDN.'
    },
    {
      icon: Database,
      title: 'Real-time Data',
      description: 'WebSocket support and real-time data synchronization across all endpoints.'
    },
    {
      icon: Code,
      title: 'Developer Friendly',
      description: 'Comprehensive documentation, SDKs, and interactive API explorer.'
    }
  ];

  const sdks = [
    { name: 'JavaScript', version: 'v2.1.0', icon: 'JS' },
    { name: 'Python', version: 'v1.8.2', icon: 'PY' },
    { name: 'Node.js', version: 'v3.0.1', icon: 'NODE' },
    { name: 'PHP', version: 'v1.5.0', icon: 'PHP' }
  ];

  return (
    <Layout
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group services. Access our powerful APIs for AI, cloud, and enterprise solutions."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Code className="h-8 w-8 text-blue-400 mr-3" />
            <span className="text-lg font-semibold text-blue-400">Developer API</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Powerful APIs for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Modern Applications
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Access our comprehensive suite of APIs for AI services, cloud infrastructure, and enterprise solutions. 
            Build amazing applications with our developer-friendly platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#endpoints"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <Code className="mr-2 h-5 w-5" />
              Explore Endpoints
            </a>
            <a
              href="#documentation"
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our APIs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for developers, by developers. Our APIs are designed for performance, security, and ease of use.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section id="endpoints" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              API Endpoints
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive API endpoints for all services
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Endpoint</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {apiEndpoints.map((endpoint, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                          endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {endpoint.method}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                        {endpoint.endpoint}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {endpoint.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                          {endpoint.category}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Official SDKs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started quickly with our official SDKs for popular programming languages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdks.map((sdk, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{sdk.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{sdk.name}</h3>
                <p className="text-sm text-gray-600 mb-4">Version {sdk.version}</p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join thousands of developers building amazing applications with our APIs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <Key className="mr-2 h-5 w-5" />
              Get API Key
            </Link>
            <Link
              href="/docs"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Documentation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}