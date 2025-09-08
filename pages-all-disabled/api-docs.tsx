import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../components/Layout';
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
  Star,
  Clock,
  Award,
  TrendingUp
} from 'lucide-react';

const apiFeatures = [
  {
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
    description: 'Secure authentication and authorization with JWT tokens and OAuth2.',
    icon: Shield,
    features: ['JWT Tokens', 'OAuth2 Integration', 'Role-based Access', 'API Keys']
  },
  {
    title: 'Rate Limiting',
    description: 'Built-in rate limiting to ensure fair usage and prevent abuse.',
    icon: Clock,
    features: ['Request Throttling', 'Usage Analytics', 'Custom Limits', 'Monitoring']
  },
  {
    title: 'Webhooks',
    description: 'Real-time event notifications via webhooks for seamless integration.',
    icon: Zap,
    features: ['Event Triggers', 'Retry Logic', 'Signature Verification', 'Custom Endpoints']
  },
  {
    title: 'SDKs & Libraries',
    description: 'Official SDKs and libraries for popular programming languages.',
    icon: BookOpen,
    features: ['JavaScript/Node.js', 'Python', 'PHP', 'Java', 'C#']
  }
];

const endpoints = [
  {
    method: 'GET',
    path: '/api/v1/users',
    description: 'Retrieve all users',
    response: '200 OK'
  },
  {
    method: 'POST',
    path: '/api/v1/users',
    description: 'Create a new user',
    response: '201 Created'
  },
  {
    method: 'GET',
    path: '/api/v1/users/{id}',
    description: 'Retrieve a specific user',
    response: '200 OK'
  },
  {
    method: 'PUT',
    path: '/api/v1/users/{id}',
    description: 'Update a user',
    response: '200 OK'
  },
  {
    method: 'DELETE',
    path: '/api/v1/users/{id}',
    description: 'Delete a user',
    response: '204 No Content'
  }
];

export default function APIDocs() {
  return (
    <Layout title="API Documentation - Zion Tech Group" description="Comprehensive API documentation for Zion Tech Group's services and integrations.">
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                API <span className="text-blue-300">Documentation</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Comprehensive API documentation to help you integrate with our services quickly and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#getting-started" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  href="#endpoints" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  View Endpoints
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* API Features */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">API Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our API is designed with developers in mind, offering powerful features and comprehensive documentation.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section id="getting-started" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Getting Started</h2>
              <div className="bg-gray-900 rounded-xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">1. Get Your API Key</h3>
                <p className="text-gray-300 mb-6">
                  Sign up for an account and generate your API key from the dashboard.
                </p>
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <code className="text-green-400">
                    curl -X POST https://api.ziontechgroup.com/v1/auth/login \<br />
                    &nbsp;&nbsp;-H "Content-Type: application/json" \<br />
                    &nbsp;&nbsp;-d '{`{"username": "your-username", "password": "your-password"}`}'
                  </code>
                </div>

                <h3 className="text-xl font-semibold mb-4">2. Make Your First Request</h3>
                <p className="text-gray-300 mb-6">
                  Use your API key to make authenticated requests to our endpoints.
                </p>
                <div className="bg-gray-800 rounded-lg p-4 mb-6">
                  <code className="text-green-400">
                    curl -X GET https://api.ziontechgroup.com/v1/users \<br />
                    &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY"
                  </code>
                </div>

                <h3 className="text-xl font-semibold mb-4">3. Explore the Documentation</h3>
                <p className="text-gray-300">
                  Browse our interactive API documentation to discover all available endpoints and features.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Endpoints */}
        <section id="endpoints" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">API Endpoints</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive set of API endpoints for all your integration needs.
              </p>
            </motion.div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Method</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Path</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Response</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {endpoints.map((endpoint, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                            endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                            endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {endpoint.method}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-mono">{endpoint.path}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{endpoint.description}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{endpoint.response}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Start Building?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get started with our API today and unlock the full potential of our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Get API Access
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}