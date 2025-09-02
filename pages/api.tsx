import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Code, Key, Database, Cloud, Shield, Zap, Copy, ExternalLink, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const API: NextPage = () => {
  const apiEndpoints = [
    {
      method: 'GET',
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
    }
  ];

  const codeExamples = [
    {
      title: 'Get All Services',
      language: 'JavaScript',
      code: `// Get all available services
const response = await fetch('https://api.ziontechgroup.com/v1/services', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

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
    }
  ];

  return (
    <MainLayout
      title="API Reference - Zion Tech Group"
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
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default API;