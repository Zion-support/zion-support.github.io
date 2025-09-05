import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code, 
  Key, 
  Globe, 
  Shield,
  ArrowRight,
  Copy,
  CheckCircle,
  ExternalLink,
  Download,
  Search,
  Filter,
  Zap,
  Database,
  Lock
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const apiSections = [
  {
    title: 'Authentication',
    description: 'Learn how to authenticate with our API',
    icon: Key,
    color: 'from-red-600 to-red-800',
    endpoints: [
      { method: 'POST', path: '/auth/login', description: 'Authenticate user credentials' },
      { method: 'POST', path: '/auth/refresh', description: 'Refresh access token' },
      { method: 'POST', path: '/auth/logout', description: 'Invalidate access token' }
    ]
  },
  {
    title: 'Users',
    description: 'Manage user accounts and profiles',
    icon: Globe,
    color: 'from-blue-600 to-blue-800',
    endpoints: [
      { method: 'GET', path: '/users', description: 'List all users' },
      { method: 'GET', path: '/users/{id}', description: 'Get user by ID' },
      { method: 'POST', path: '/users', description: 'Create new user' },
      { method: 'PUT', path: '/users/{id}', description: 'Update user' },
      { method: 'DELETE', path: '/users/{id}', description: 'Delete user' }
    ]
  },
  {
    title: 'Projects',
    description: 'Manage projects and workspaces',
    icon: Database,
    color: 'from-green-600 to-green-800',
    endpoints: [
      { method: 'GET', path: '/projects', description: 'List user projects' },
      { method: 'GET', path: '/projects/{id}', description: 'Get project details' },
      { method: 'POST', path: '/projects', description: 'Create new project' },
      { method: 'PUT', path: '/projects/{id}', description: 'Update project' },
      { method: 'DELETE', path: '/projects/{id}', description: 'Delete project' }
    ]
  },
  {
    title: 'AI Services',
    description: 'Access AI-powered features and models',
    icon: Zap,
    color: 'from-purple-600 to-purple-800',
    endpoints: [
      { method: 'POST', path: '/ai/analyze', description: 'Analyze text or data' },
      { method: 'POST', path: '/ai/generate', description: 'Generate content' },
      { method: 'POST', path: '/ai/predict', description: 'Make predictions' },
      { method: 'GET', path: '/ai/models', description: 'List available models' }
    ]
  }
];

const codeExamples = [
  {
    language: 'JavaScript',
    title: 'Basic API Call',
    code: `const response = await fetch('https://api.ziontechgroup.com/v1/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const users = await response.json();
`
  },
  {
    language: 'Python',
    title: 'Python SDK Example',
    code: `import ziontech

client = ziontech.Client(api_key='YOUR_API_KEY')

# Get all users
users = client.users.list()
print(users)

# Create a new user
new_user = client.users.create({
    'name': 'John Doe',
    'email': 'john@example.com'
})
print(new_user)`
  },
  {
    language: 'cURL',
    title: 'cURL Example',
    code: `curl -X GET "https://api.ziontechgroup.com/v1/users" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
  }
];

const sdks = [
  { name: 'JavaScript/Node.js', version: '2.1.0', status: 'Latest' },
  { name: 'Python', version: '1.8.2', status: 'Latest' },
  { name: 'PHP', version: '1.5.1', status: 'Latest' },
  { name: 'Java', version: '2.0.0', status: 'Latest' },
  { name: 'C#', version: '1.7.3', status: 'Latest' },
  { name: 'Go', version: '1.2.0', status: 'Latest' }
];

const rateLimits = [
  { tier: 'Free', requests: '1,000/month', burst: '10/minute' },
  { tier: 'Pro', requests: '50,000/month', burst: '100/minute' },
  { tier: 'Enterprise', requests: 'Unlimited', burst: '1,000/minute' }
];

export default function ApiDocsPage() {
  return (
    <MainLayout
      title="API Documentation - Zion Tech Group"
      description="Complete API reference with endpoints, authentication, code examples, and SDKs for developers."
      keywords="API documentation, REST API, API reference, SDKs, authentication, endpoints"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
                Complete API reference with endpoints, authentication, code examples, 
                and SDKs to help you integrate with our platform.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <Link href="#getting-started">
                  <span className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Get Started
                  </span>
                </Link>
                <Link href="/docs">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    View Full Docs
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-indigo-600 mb-2">50+</div>
                <div className="text-gray-600">API Endpoints</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-2">6</div>
                <div className="text-gray-600">SDK Languages</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* API Sections */}
        <section id="getting-started" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                API Reference
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints organized by functionality.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {apiSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center mr-4`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {section.title}
                      </h3>
                      <p className="text-gray-600">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {section.endpoints.map((endpoint, endpointIndex) => (
                      <div
                        key={endpointIndex}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center">
                          <span className={`px-2 py-1 rounded text-xs font-medium mr-3 ${
                            endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                            endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                            endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-sm font-mono text-gray-700">
                            {endpoint.path}
                          </code>
                        </div>
                        <span className="text-xs text-gray-500">
                          {endpoint.description}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href="/docs"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold mt-6"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Code Examples
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started quickly with these code examples in your preferred language.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {codeExamples.map((example, index) => (
                <motion.div
                  key={example.language}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900 rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="bg-gray-800 text-white px-6 py-3 flex items-center justify-between">
                    <span className="font-semibold">{example.language}</span>
                    <button className="flex items-center text-gray-400 hover:text-white transition-colors">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-white mb-4">
                      {example.title}
                    </h3>
                    <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm text-gray-300">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SDKs */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Official SDKs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Use our official SDKs to integrate quickly and easily with your preferred language.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sdks.map((sdk, index) => (
                <motion.div
                  key={sdk.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      {sdk.name}
                    </h3>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                      {sdk.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    Version {sdk.version}
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                      Install
                    </button>
                    <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      Docs
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Rate Limits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understand our rate limiting to ensure optimal API performance.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {rateLimits.map((limit, index) => (
                <motion.div
                  key={limit.tier}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-xl p-8 shadow-lg ${
                    limit.tier === 'Pro' ? 'ring-2 ring-indigo-500 relative' : ''
                  }`}
                >
                  {limit.tier === 'Pro' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Recommended
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {limit.tier}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Monthly Requests</div>
                      <div className="text-2xl font-bold text-gray-900">
                        {limit.requests}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Burst Limit</div>
                      <div className="text-lg font-semibold text-gray-900">
                        {limit.burst}
                      </div>
                    </div>
                  </div>
                  
                  <button className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors ${
                    limit.tier === 'Pro'
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    {limit.tier === 'Free' ? 'Current Plan' : 'Upgrade'}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
                Get your API key and start building amazing applications with our platform.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact">
                  <span className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Get API Key
                  </span>
                </Link>
                <Link href="/support">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Get Support
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}