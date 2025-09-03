import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
<<<<<<< HEAD
import { Code, Key, Book, Download, Play, Copy, Check } from 'lucide-react';
=======
import { Code, Key, Database, Cloud, Shield, Zap, Copy, ExternalLink, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
>>>>>>> main

const API: NextPage = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const apiEndpoints = [
    {
      method: 'GET',
<<<<<<< HEAD
      endpoint: '/api/v1/users',
      description: 'Retrieve user information',
      parameters: [
        { name: 'id', type: 'string', required: true, description: 'User ID' },
        { name: 'include', type: 'string', required: false, description: 'Additional data to include' }
      ]
    },
    {
      method: 'POST',
      endpoint: '/api/v1/users',
      description: 'Create a new user',
      parameters: [
        { name: 'name', type: 'string', required: true, description: 'User name' },
        { name: 'email', type: 'string', required: true, description: 'User email' },
        { name: 'role', type: 'string', required: false, description: 'User role' }
      ]
    },
    {
      method: 'PUT',
      endpoint: '/api/v1/users/{id}',
      description: 'Update user information',
      parameters: [
        { name: 'id', type: 'string', required: true, description: 'User ID' },
        { name: 'name', type: 'string', required: false, description: 'Updated name' },
        { name: 'email', type: 'string', required: false, description: 'Updated email' }
      ]
    },
    {
      method: 'DELETE',
      endpoint: '/api/v1/users/{id}',
      description: 'Delete a user',
      parameters: [
        { name: 'id', type: 'string', required: true, description: 'User ID' }
      ]
=======
      endpoint: '/api/v1/services',
      description: 'Retrieve all available services',
      category: 'Services',
      color: 'from-green-500 to-green-600'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/projects',
      description: 'Create a new project',
      category: 'Projects',
      color: 'from-blue-500 to-blue-600'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/projects/{id}',
      description: 'Get project details by ID',
      category: 'Projects',
      color: 'from-green-500 to-green-600'
    },
    {
      method: 'PUT',
      endpoint: '/api/v1/projects/{id}',
      description: 'Update project information',
      category: 'Projects',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      method: 'DELETE',
      endpoint: '/api/v1/projects/{id}',
      description: 'Delete a project',
      category: 'Projects',
      color: 'from-red-500 to-red-600'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/auth/login',
      description: 'Authenticate user and get access token',
      category: 'Authentication',
      color: 'from-purple-500 to-purple-600'
>>>>>>> main
    }
  ];

  const codeExamples = [
    {
<<<<<<< HEAD
      language: 'JavaScript',
      code: `const response = await fetch('https://api.ziontechgroup.com/v1/users', {
=======
      title: 'Get All Services',
      language: 'JavaScript',
      code: `// Get all available services
const response = await fetch('https://api.ziontechgroup.com/v1/services', {
>>>>>>> main
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

<<<<<<< HEAD
const data = await response.json();
console.log(data);`
    },
    {
      language: 'Python',
      code: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.ziontechgroup.com/v1/users', headers=headers)
data = response.json()
print(data)`
    },
    {
      language: 'cURL',
      code: `curl -X GET "https://api.ziontechgroup.com/v1/users" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
=======
const services = await response.json();
console.log(services);`,
      description: 'Example of retrieving all available services using JavaScript fetch API.'
    },
    {
      title: 'Create New Project',
      language: 'Python',
      code: `import requests

# Create a new project
url = "https://api.ziontechgroup.com/v1/projects"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "name": "My New Project",
    "description": "Project description",
    "type": "ai-development"
}

response = requests.post(url, json=data, headers=headers)
project = response.json()
print(project)`,
      description: 'Example of creating a new project using Python requests library.'
    },
    {
      title: 'Authentication',
      language: 'cURL',
      code: `# Authenticate and get access token
curl -X POST https://api.ziontechgroup.com/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "your-email@example.com",
    "password": "your-password"
  }'`,
      description: 'Example of authenticating using cURL to get an access token.'
    }
  ];

  const apiFeatures = [
    {
      icon: Key,
      title: 'API Authentication',
      description: 'Secure API access using JWT tokens and API keys',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Rate Limiting',
      description: 'Built-in rate limiting to ensure fair usage and system stability',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Database,
      title: 'Real-time Data',
      description: 'Access real-time data and live updates through our APIs',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Cloud,
      title: 'Scalable Infrastructure',
      description: 'Built on scalable cloud infrastructure for high availability',
      color: 'from-orange-500 to-orange-600'
>>>>>>> main
    }
  ];

  const copyToClipboard = async (code: string, language: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(language);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET':
        return 'bg-green-100 text-green-800';
      case 'POST':
        return 'bg-blue-100 text-blue-800';
      case 'PUT':
        return 'bg-yellow-100 text-yellow-800';
      case 'DELETE':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <MainLayout
      title="API Reference - Zion Tech Group"
<<<<<<< HEAD
      description="Complete API reference for Zion Tech Group's services. Documentation, examples, and integration guides."
      keywords="API reference, REST API, developer documentation, integration, endpoints, authentication"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Code className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">API Reference</h1>
              <p className="text-xl text-gray-200 mb-8">
                Complete documentation for our REST API with examples and integration guides.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Quick Start</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Key className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Get API Key</h3>
                  <p className="text-gray-600">Sign up and generate your API key from the dashboard</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Book className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Read Documentation</h3>
                  <p className="text-gray-600">Explore our comprehensive API documentation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Start Building</h3>
                  <p className="text-gray-600">Use our examples to integrate with your application</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">API Endpoints</h2>
              <div className="space-y-6">
                {apiEndpoints.map((endpoint, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMethodColor(endpoint.method)}`}>
                          {endpoint.method}
                        </span>
                        <code className="text-lg font-mono text-gray-900">{endpoint.endpoint}</code>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{endpoint.description}</p>
                    {endpoint.parameters.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Parameters</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-gray-200">
                                <th className="text-left py-2 font-semibold text-gray-900">Name</th>
                                <th className="text-left py-2 font-semibold text-gray-900">Type</th>
                                <th className="text-left py-2 font-semibold text-gray-900">Required</th>
                                <th className="text-left py-2 font-semibold text-gray-900">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              {endpoint.parameters.map((param, paramIndex) => (
                                <tr key={paramIndex} className="border-b border-gray-100">
                                  <td className="py-2 font-mono text-blue-600">{param.name}</td>
                                  <td className="py-2 text-gray-600">{param.type}</td>
                                  <td className="py-2">
                                    <span className={`px-2 py-1 rounded-full text-xs ${
                                      param.required ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                                    }`}>
                                      {param.required ? 'Required' : 'Optional'}
                                    </span>
                                  </td>
                                  <td className="py-2 text-gray-600">{param.description}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
=======
      description="Complete API reference for Zion Tech Group services. Find endpoints, authentication, code examples, and integration guides."
      keywords="API reference, REST API, API documentation, developer API, integration, endpoints"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            API Reference
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Integrate with Zion Tech Group services using our comprehensive REST API. 
            Build powerful applications with our developer-friendly endpoints.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white bg-opacity-10 rounded-lg px-6 py-3">
              <div className="text-sm text-gray-300">Base URL</div>
              <div className="font-mono text-lg">https://api.ziontechgroup.com</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg px-6 py-3">
              <div className="text-sm text-gray-300">API Version</div>
              <div className="font-mono text-lg">v1</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">API Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make integration simple and secure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">API Endpoints</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive set of API endpoints for all services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={endpoint.endpoint}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${endpoint.color}`}>
                        {endpoint.method}
                      </span>
                      <code className="text-lg font-mono text-gray-800">{endpoint.endpoint}</code>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {endpoint.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-3">{endpoint.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Code Examples</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started quickly with these code examples in popular programming languages.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={example.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Code className="w-5 h-5" />
                    <span className="font-semibold">{example.title}</span>
                    <span className="text-sm text-gray-300">({example.language})</span>
                  </div>
                  <button className="text-gray-300 hover:text-white transition-colors">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-6">
                  <pre className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
                    <code className="text-sm text-gray-800">{example.code}</code>
                  </pre>
                  <p className="text-gray-600 text-sm mt-4">{example.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Authentication</h2>
              <p className="text-xl text-gray-600">
                Secure your API calls with our authentication system.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">API Key Authentication</h3>
              <p className="text-gray-600 mb-6">
                Include your API key in the Authorization header of your requests:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <code className="text-sm text-gray-800">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Get API Key
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  View Documentation
                </button>
              </div>
            </motion.div>
>>>>>>> main
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Code Examples</h2>
              <div className="space-y-8">
                {codeExamples.map((example, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-3 bg-gray-800">
                      <span className="text-white font-medium">{example.language}</span>
                      <button
                        onClick={() => copyToClipboard(example.code, example.language)}
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                      >
                        {copiedCode === example.language ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-6 text-gray-100 overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">SDK Downloads</h3>
                  <p className="text-gray-600 mb-4">Client libraries for popular programming languages</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    Download SDKs
                  </button>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <Book className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Full Documentation</h3>
                  <p className="text-gray-600 mb-4">Comprehensive API documentation and guides</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    View Docs
                  </button>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <Play className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">API Playground</h3>
                  <p className="text-gray-600 mb-4">Test API endpoints directly in your browser</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    Try API
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Our developer support team is here to help you integrate our API successfully.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/help"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="/documentation"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Documentation
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default API;