import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Code, BookOpen, Shield, Zap, ChevronRight, ExternalLink, Copy, Check } from 'lucide-react';

const endpoints = [
  {
    name: 'AI Email Responder',
    method: 'POST',
    path: '/api/ai/email-responder',
    description: 'Generate intelligent email responses using AI',
    parameters: [
      { name: 'message', type: 'string', required: true, description: 'The email message to respond to' },
      { name: 'context', type: 'object', required: false, description: 'Additional context for the response' }
    ],
    response: {
      status: 200,
      data: {
        response: 'string',
        confidence: 'number',
        suggestions: 'array'
      }
    }
  },
  {
    name: 'Predictive Analytics',
    method: 'POST',
    path: '/api/ai/predictive-analytics',
    description: 'Generate business predictions and forecasts',
    parameters: [
      { name: 'data', type: 'array', required: true, description: 'Historical data for analysis' },
      { name: 'period', type: 'string', required: true, description: 'Time period for prediction' }
    ],
    response: {
      status: 200,
      data: {
        predictions: 'array',
        accuracy: 'number',
        trends: 'array'
      }
    }
  },
  {
    name: 'Content Generation',
    method: 'POST',
    path: '/api/ai/content-generation',
    description: 'Generate AI-powered content for various purposes',
    parameters: [
      { name: 'prompt', type: 'string', required: true, description: 'Content generation prompt' },
      { name: 'type', type: 'string', required: true, description: 'Type of content to generate' }
    ],
    response: {
      status: 200,
      data: {
        content: 'string',
        metadata: 'object'
      }
    }
  }
];

const codeExamples = [
  {
    language: 'JavaScript',
    code: `// AI Email Responder
const response = await fetch('/api/ai/email-responder', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    message: 'I need help with my account',
    context: { userId: '12345' }
  })
}

export default function APIDocumentationPage() {
  const [copiedCode, setCopiedCode] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const apiEndpoints = [
    {
      id: 'auth',
      title: 'Authentication',
      description: 'Endpoints for user authentication and authorization',
      methods: ['POST', 'GET', 'PUT', 'DELETE'],
      baseUrl: '/api/v1/auth',
      endpoints: [
        {
          method: 'POST',
          path: '/login',
          description: 'Authenticate user with email and password',
          parameters: [
            { name: 'email', type: 'string', required: true, description: 'User email address' },
            { name: 'password', type: 'string', required: true, description: 'User password' }
          ],
          response: {
            status: 200,
            data: {
              token: 'string',
              user: 'object',
              expires_in: 'number'
            }
          }
        },
        {
          method: 'POST',
          path: '/register',
          description: 'Register a new user account',
          parameters: [
            { name: 'email', type: 'string', required: true, description: 'User email address' },
            { name: 'password', type: 'string', required: true, description: 'User password' },
            { name: 'name', type: 'string', required: true, description: 'User full name' }
          ],
          response: {
            status: 201,
            data: {
              user: 'object',
              message: 'string'
            }
          }
        },
        {
          method: 'POST',
          path: '/logout',
          description: 'Logout user and invalidate token',
          parameters: [],
          response: {
            status: 200,
            data: {
              message: 'string'
            }
          }
        }
      ]
    },
    {
      id: 'users',
      title: 'Users',
      description: 'User management and profile operations',
      methods: ['GET', 'PUT', 'DELETE'],
      baseUrl: '/api/v1/users',
      endpoints: [
        {
          method: 'GET',
          path: '/profile',
          description: 'Get current user profile',
          parameters: [],
          response: {
            status: 200,
            data: {
              id: 'string',
              name: 'string',
              email: 'string',
              created_at: 'string',
              updated_at: 'string'
            }
          }
        },
        {
          method: 'PUT',
          path: '/profile',
          description: 'Update user profile',
          parameters: [
            { name: 'name', type: 'string', required: false, description: 'User full name' },
            { name: 'email', type: 'string', required: false, description: 'User email address' }
          ],
          response: {
            status: 200,
            data: {
              user: 'object',
              message: 'string'
            }
          }
        }
      ]
    },
    {
      id: 'projects',
      title: 'Projects',
      description: 'Project management and operations',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      baseUrl: '/api/v1/projects',
      endpoints: [
        {
          method: 'GET',
          path: '/',
          description: 'Get list of user projects',
          parameters: [
            { name: 'page', type: 'number', required: false, description: 'Page number for pagination' },
            { name: 'limit', type: 'number', required: false, description: 'Number of items per page' }
          ],
          response: {
            status: 200,
            data: {
              projects: 'array',
              pagination: 'object'
            }
          }
        },
        {
          method: 'POST',
          path: '/',
          description: 'Create a new project',
          parameters: [
            { name: 'name', type: 'string', required: true, description: 'Project name' },
            { name: 'description', type: 'string', required: false, description: 'Project description' },
            { name: 'type', type: 'string', required: true, description: 'Project type' }
          ],
          response: {
            status: 201,
            data: {
              project: 'object',
              message: 'string'
            }
          }
        },
        {
          method: 'GET',
          path: '/:id',
          description: 'Get project details',
          parameters: [
            { name: 'id', type: 'string', required: true, description: 'Project ID' }
          ],
          response: {
            status: 200,
            data: {
              project: 'object'
            }
          }
        }
      ]
    }
  ];

  const codeExamples = {
    javascript: `// JavaScript/Node.js Example
const response = await fetch('https://api.ziontechgroup.com/api/v1/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'your-password'
  })
});

const data = await response.json();
console.log(data);`,
    python: `# Python Example
import requests

url = "https://api.ziontechgroup.com/api/v1/auth/login"
payload = {
    "email": "user@example.com",
    "password": "your-password"
}

response = requests.post(url, json=payload)
data = response.json()
print(data)`,
    curl: `# cURL Example
curl -X POST https://api.ziontechgroup.com/api/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your-password"
  }'`
  };

  const copyToClipboard = (code, language) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(language);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Globe },
    { id: 'authentication', label: 'Authentication', icon: Shield },
    { id: 'endpoints', label: 'Endpoints', icon: Code },
    { id: 'examples', label: 'Examples', icon: Terminal },
    { id: 'errors', label: 'Errors', icon: XCircle }
  ];

  return (
    <MainLayout
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group services. Learn how to integrate with our APIs and build powerful applications."
      keywords="API documentation, REST API, integration, developers, endpoints, authentication"
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
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive API documentation for integrating with Zion Tech Group services. 
                Build powerful applications with our RESTful APIs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">API Endpoints</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive API endpoints for AI services.
              </p>
            </motion.div>
            <div className="space-y-8">
              {endpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{endpoint.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      endpoint.method === 'POST' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {endpoint.method}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{endpoint.description}</p>
                  <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <code className="text-sm font-mono">{endpoint.path}</code>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Parameters</h4>
                      <div className="space-y-2">
                        {endpoint.parameters.map((param, paramIndex) => (
                          <div key={paramIndex} className="flex items-center justify-between text-sm">
                            <span className="font-mono">{param.name}</span>
                            <span className={`px-2 py-1 rounded text-xs ${
                              param.required ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {param.type}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Response</h4>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <pre className="text-sm font-mono">
                          {JSON.stringify(endpoint.response, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
        {/* Navigation Tabs */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${
                      activeTab === tab.id
                        ? 'bg-indigo-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <tab.icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    API Overview
                  </h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Globe className="w-6 h-6 mr-3 text-indigo-600" />
                        Base URL
                      </h3>
                      <p className="text-gray-600 mb-4">
                        All API requests should be made to our base URL:
                      </p>
                      <code className="bg-gray-800 text-green-400 p-3 rounded-lg block font-mono">
                        https://api.ziontechgroup.com
                      </code>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Shield className="w-6 h-6 mr-3 text-indigo-600" />
                        Authentication
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Most endpoints require authentication using Bearer tokens:
                      </p>
                      <code className="bg-gray-800 text-green-400 p-3 rounded-lg block font-mono text-sm">
                        Authorization: Bearer your-token-here
                      </code>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast & Reliable</h3>
                      <p className="text-gray-600">High-performance APIs with 99.9% uptime guarantee</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Database className="w-8 h-8 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">RESTful Design</h3>
                      <p className="text-gray-600">Standard REST APIs following industry best practices</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Cloud className="w-8 h-8 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable</h3>
                      <p className="text-gray-600">Built to handle high traffic and scale with your needs</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Authentication Tab */}
              {activeTab === 'authentication' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    Authentication
                  </h2>
                  
                  <div className="bg-gray-50 rounded-lg p-8 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Getting Started</h3>
                    <p className="text-gray-600 mb-6">
                      To use our API, you need to authenticate your requests. We use JWT (JSON Web Tokens) 
                      for authentication. Here's how to get started:
                    </p>
                    
                    <ol className="list-decimal list-inside space-y-4 text-gray-700">
                      <li>Register for an API account or use your existing Zion Tech Group account</li>
                      <li>Generate an API key from your account dashboard</li>
                      <li>Include the API key in the Authorization header of your requests</li>
                      <li>For user-specific operations, use the login endpoint to get a JWT token</li>
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">API Key Authentication</h3>
                      <p className="text-gray-600 mb-4">
                        For server-to-server communication, use your API key:
                      </p>
                      <code className="bg-gray-800 text-green-400 p-3 rounded-lg block font-mono text-sm">
                        Authorization: Bearer sk_live_your_api_key_here
                      </code>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">JWT Token Authentication</h3>
                      <p className="text-gray-600 mb-4">
                        For user-specific operations, use JWT tokens:
                      </p>
                      <code className="bg-gray-800 text-green-400 p-3 rounded-lg block font-mono text-sm">
                        Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
                      </code>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Endpoints Tab */}
              {activeTab === 'endpoints' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    API Endpoints
                  </h2>
                  
                  <div className="space-y-8">
                    {apiEndpoints.map((endpoint, index) => (
                      <motion.div
                        key={endpoint.id}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      >
                        <div className="bg-gray-50 p-6 border-b">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{endpoint.title}</h3>
                          <p className="text-gray-600 mb-4">{endpoint.description}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full mr-2">
                              {endpoint.baseUrl}
                            </span>
                            <span>Methods: {endpoint.methods.join(', ')}</span>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="space-y-6">
                            {endpoint.endpoints.map((ep, epIndex) => (
                              <div key={epIndex} className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center">
                                    <span className={`px-2 py-1 rounded text-sm font-semibold mr-3 ${
                                      ep.method === 'GET' ? 'bg-green-100 text-green-700' :
                                      ep.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                                      ep.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' :
                                      'bg-red-100 text-red-700'
                                    }`}>
                                      {ep.method}
                                    </span>
                                    <code className="text-gray-800 font-mono">{endpoint.baseUrl}{ep.path}</code>
                                  </div>
                                </div>
                                
                                <p className="text-gray-600 mb-4">{ep.description}</p>
                                
                                {ep.parameters.length > 0 && (
                                  <div className="mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Parameters</h4>
                                    <div className="overflow-x-auto">
                                      <table className="w-full text-sm">
                                        <thead>
                                          <tr className="bg-gray-50">
                                            <th className="px-3 py-2 text-left">Name</th>
                                            <th className="px-3 py-2 text-left">Type</th>
                                            <th className="px-3 py-2 text-left">Required</th>
                                            <th className="px-3 py-2 text-left">Description</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {ep.parameters.map((param, paramIndex) => (
                                            <tr key={paramIndex} className="border-t">
                                              <td className="px-3 py-2 font-mono">{param.name}</td>
                                              <td className="px-3 py-2">{param.type}</td>
                                              <td className="px-3 py-2">
                                                {param.required ? (
                                                  <span className="text-red-600">Yes</span>
                                                ) : (
                                                  <span className="text-gray-500">No</span>
                                                )}
                                              </td>
                                              <td className="px-3 py-2">{param.description}</td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                )}
                                
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">Response</h4>
                                  <div className="bg-gray-800 text-green-400 p-3 rounded-lg font-mono text-sm">
                                    <div>Status: {ep.response.status}</div>
                                    <div>Data: {JSON.stringify(ep.response.data, null, 2)}</div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Examples Tab */}
              {activeTab === 'examples' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    Code Examples
                  </h2>
                  
                  <div className="space-y-8">
                    {Object.entries(codeExamples).map(([language, code]) => (
                      <div key={language} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900 capitalize">
                            {language} Example
                          </h3>
                          <button
                            onClick={() => copyToClipboard(code, language)}
                            className="flex items-center px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors duration-300"
                          >
                            {copiedCode === language ? (
                              <>
                                <Check className="w-4 h-4 mr-2" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4 mr-2" />
                                Copy
                              </>
                            )}
                          </button>
                        </div>
                        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
                          <code>{code}</code>
                        </pre>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Errors Tab */}
              {activeTab === 'errors' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    Error Handling
                  </h2>
                  
                  <div className="bg-gray-50 rounded-lg p-8 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">HTTP Status Codes</h3>
                    <p className="text-gray-600 mb-6">
                      Our API uses standard HTTP status codes to indicate success or failure of requests.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Success Codes</h4>
                        <ul className="space-y-2 text-sm">
                          <li><code className="bg-green-100 text-green-700 px-2 py-1 rounded">200</code> OK - Request successful</li>
                          <li><code className="bg-green-100 text-green-700 px-2 py-1 rounded">201</code> Created - Resource created successfully</li>
                          <li><code className="bg-green-100 text-green-700 px-2 py-1 rounded">204</code> No Content - Request successful, no content returned</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Error Codes</h4>
                        <ul className="space-y-2 text-sm">
                          <li><code className="bg-red-100 text-red-700 px-2 py-1 rounded">400</code> Bad Request - Invalid request</li>
                          <li><code className="bg-red-100 text-red-700 px-2 py-1 rounded">401</code> Unauthorized - Authentication required</li>
                          <li><code className="bg-red-100 text-red-700 px-2 py-1 rounded">403</code> Forbidden - Access denied</li>
                          <li><code className="bg-red-100 text-red-700 px-2 py-1 rounded">404</code> Not Found - Resource not found</li>
                          <li><code className="bg-red-100 text-red-700 px-2 py-1 rounded">500</code> Internal Server Error - Server error</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Error Response Format</h3>
                    <p className="text-gray-600 mb-4">
                      All error responses follow a consistent format:
                    </p>
                    <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
                      <code>{`{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request data is invalid",
    "details": {
      "field": "email",
      "reason": "Invalid email format"
    }
  }
}`}</code>
                    </pre>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get your API key and start integrating our AI services into your applications.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get API Key
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View AI Services
                </Link>
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Start building with our APIs today. Get your API key and begin integrating 
                with our powerful services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get API Key
                </a>
                <a
                  href="/docs"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold"
                >
                  View Full Documentation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
      </div>
    </MainLayout>
  );
}
