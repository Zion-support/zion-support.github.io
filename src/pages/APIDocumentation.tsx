import React, { useState } from 'react';
import SEO from '../components/SEO';

const APIDocumentation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const apiEndpoints = [
    {
      method: 'GET',
      path: '/api/v1/services',
      description: 'Retrieve all available services',
      parameters: [
        { name: 'category', type: 'string', required: false, description: 'Filter by service category' },
        { name: 'limit', type: 'number', required: false, description: 'Number of results to return' }
      ],
      example: {
        request: 'GET /api/v1/services?category=ai&limit=10',
        response: {
          data: [
            {
              id: 1,
              name: "AI Content Generation",
              category: "ai",
              description: "Generate high-quality content using AI"
            }
          ],
          total: 1,
          page: 1
        }
      }
    },
    {
      method: 'POST',
      path: '/api/v1/quote',
      description: 'Request a quote for services',
      parameters: [
        { name: 'service_id', type: 'number', required: true, description: 'ID of the service' },
        { name: 'requirements', type: 'string', required: true, description: 'Project requirements' },
        { name: 'budget', type: 'number', required: false, description: 'Project budget' }
      ],
      example: {
        request: 'POST /api/v1/quote',
        body: {
          service_id: 1,
          requirements: "AI-powered content generation for marketing",
          budget: 10000
        },
        response: {
          quote_id: "QT-12345",
          estimated_cost: 8500,
          timeline: "2-3 weeks",
          status: "pending"
        }
      }
    },
    {
      method: 'GET',
      path: '/api/v1/quote/{id}',
      description: 'Get quote details by ID',
      parameters: [
        { name: 'id', type: 'string', required: true, description: 'Quote ID' }
      ],
      example: {
        request: 'GET /api/v1/quote/QT-12345',
        response: {
          quote_id: "QT-12345",
          service: "AI Content Generation",
          estimated_cost: 8500,
          timeline: "2-3 weeks",
          status: "approved",
          created_at: "2025-01-15T10:30:00Z"
        }
      }
    }
  ];

  return (
    <>
      <SEO 
        title="API Documentation - Zion Tech Group"
        description="Complete API documentation for Zion Tech Group services. Learn how to integrate with our platform."
        keywords="api documentation, rest api, integration, developer resources, zion tech group"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6">
                API Documentation
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Integrate with Zion Tech Group's powerful API to access our AI and technology services programmatically.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 sticky top-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
                  <nav className="space-y-2">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'overview' 
                          ? 'bg-purple-600 text-white' 
                          : 'text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => setActiveTab('authentication')}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'authentication' 
                          ? 'bg-purple-600 text-white' 
                          : 'text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      Authentication
                    </button>
                    <button
                      onClick={() => setActiveTab('endpoints')}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'endpoints' 
                          ? 'bg-purple-600 text-white' 
                          : 'text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      Endpoints
                    </button>
                    <button
                      onClick={() => setActiveTab('examples')}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'examples' 
                          ? 'bg-purple-600 text-white' 
                          : 'text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      Examples
                    </button>
                    <button
                      onClick={() => setActiveTab('sdk')}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'sdk' 
                          ? 'bg-purple-600 text-white' 
                          : 'text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      SDKs
                    </button>
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  {activeTab === 'overview' && (
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-6">API Overview</h2>
                      <div className="prose prose-invert max-w-none">
                        <p className="text-lg text-gray-300 mb-6">
                          Our REST API provides programmatic access to all Zion Tech Group services. 
                          You can use it to integrate our AI and technology solutions into your applications.
                        </p>
                        
                        <h3 className="text-xl font-semibold text-purple-400 mt-8 mb-4">Base URL</h3>
                        <div className="bg-black/20 rounded-lg p-4 mb-6">
                          <code className="text-green-400">https://api.ziontechgroup.com/v1</code>
                        </div>

                        <h3 className="text-xl font-semibold text-purple-400 mt-8 mb-4">Rate Limits</h3>
                        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                          <li>Free tier: 100 requests per hour</li>
                          <li>Pro tier: 1,000 requests per hour</li>
                          <li>Enterprise tier: 10,000 requests per hour</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-purple-400 mt-8 mb-4">Response Format</h3>
                        <p className="text-gray-300 mb-4">
                          All API responses are returned in JSON format with the following structure:
                        </p>
                        <div className="bg-black/20 rounded-lg p-4 mb-6">
                          <pre className="text-green-400 text-sm">
{`{
  "data": { ... },
  "message": "Success",
  "status": 200,
  "timestamp": "2025-01-15T10:30:00Z"
}`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'authentication' && (
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-6">Authentication</h2>
                      <div className="prose prose-invert max-w-none">
                        <p className="text-lg text-gray-300 mb-6">
                          All API requests require authentication using an API key. Include your API key in the Authorization header.
                        </p>

                        <h3 className="text-xl font-semibold text-purple-400 mt-8 mb-4">Getting Your API Key</h3>
                        <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2">
                          <li>Sign up for a Zion Tech Group account</li>
                          <li>Navigate to your dashboard</li>
                          <li>Go to API Settings</li>
                          <li>Generate a new API key</li>
                        </ol>

                        <h3 className="text-xl font-semibold text-purple-400 mt-8 mb-4">Using Your API Key</h3>
                        <div className="bg-black/20 rounded-lg p-4 mb-6">
                          <pre className="text-green-400 text-sm">
{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     https://api.ziontechgroup.com/v1/services`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'endpoints' && (
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-6">API Endpoints</h2>
                      <div className="space-y-8">
                        {apiEndpoints.map((endpoint, index) => (
                          <div key={index} className="border border-white/20 rounded-lg p-6">
                            <div className="flex items-center gap-4 mb-4">
                              <span className={`px-3 py-1 rounded text-sm font-semibold ${
                                endpoint.method === 'GET' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                              }`}>
                                {endpoint.method}
                              </span>
                              <code className="text-purple-400">{endpoint.path}</code>
                            </div>
                            
                            <p className="text-gray-300 mb-4">{endpoint.description}</p>

                            {endpoint.parameters.length > 0 && (
                              <div className="mb-4">
                                <h4 className="text-lg font-semibold text-white mb-2">Parameters</h4>
                                <div className="overflow-x-auto">
                                  <table className="w-full text-sm">
                                    <thead>
                                      <tr className="border-b border-white/20">
                                        <th className="text-left text-gray-300 py-2">Name</th>
                                        <th className="text-left text-gray-300 py-2">Type</th>
                                        <th className="text-left text-gray-300 py-2">Required</th>
                                        <th className="text-left text-gray-300 py-2">Description</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {endpoint.parameters.map((param, paramIndex) => (
                                        <tr key={paramIndex} className="border-b border-white/10">
                                          <td className="text-purple-400 py-2">{param.name}</td>
                                          <td className="text-gray-300 py-2">{param.type}</td>
                                          <td className="text-gray-300 py-2">{param.required ? 'Yes' : 'No'}</td>
                                          <td className="text-gray-300 py-2">{param.description}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            )}

                            <div>
                              <h4 className="text-lg font-semibold text-white mb-2">Example</h4>
                              <div className="bg-black/20 rounded-lg p-4">
                                <pre className="text-green-400 text-sm">
                                  <div>Request:</div>
                                  <div>{endpoint.example.request}</div>
                                  {endpoint.example.body && (
                                    <>
                                      <div className="mt-2">Body:</div>
                                      <div>{JSON.stringify(endpoint.example.body, null, 2)}</div>
                                    </>
                                  )}
                                  <div className="mt-2">Response:</div>
                                  <div>{JSON.stringify(endpoint.example.response, null, 2)}</div>
                                </pre>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'examples' && (
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-6">Code Examples</h2>
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-xl font-semibold text-purple-400 mb-4">JavaScript/Node.js</h3>
                          <div className="bg-black/20 rounded-lg p-4">
                            <pre className="text-green-400 text-sm">
{`const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.ziontechgroup.com/v1',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

// Get all services
async function getServices() {
  try {
    const response = await api.get('/services');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}

// Request a quote
async function requestQuote(serviceId, requirements) {
  try {
    const response = await api.post('/quote', {
      service_id: serviceId,
      requirements: requirements
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-purple-400 mb-4">Python</h3>
                          <div className="bg-black/20 rounded-lg p-4">
                            <pre className="text-green-400 text-sm">
{`import requests

API_BASE_URL = 'https://api.ziontechgroup.com/v1'
API_KEY = 'YOUR_API_KEY'

headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

# Get all services
def get_services():
    response = requests.get(f'{API_BASE_URL}/services', headers=headers)
    return response.json()

# Request a quote
def request_quote(service_id, requirements):
    data = {
        'service_id': service_id,
        'requirements': requirements
    }
    response = requests.post(f'{API_BASE_URL}/quote', headers=headers, json=data)
    return response.json()`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'sdk' && (
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-6">SDKs and Libraries</h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white/5 rounded-lg p-6">
                          <h3 className="text-xl font-semibold text-white mb-4">JavaScript/Node.js</h3>
                          <p className="text-gray-300 mb-4">Official SDK for JavaScript and Node.js applications.</p>
                          <div className="space-y-2">
                            <div className="bg-black/20 rounded-lg p-3">
                              <code className="text-green-400">npm install @ziontechgroup/api-client</code>
                            </div>
                            <a href="#" className="text-purple-400 hover:text-purple-300">View Documentation →</a>
                          </div>
                        </div>

                        <div className="bg-white/5 rounded-lg p-6">
                          <h3 className="text-xl font-semibold text-white mb-4">Python</h3>
                          <p className="text-gray-300 mb-4">Official SDK for Python applications.</p>
                          <div className="space-y-2">
                            <div className="bg-black/20 rounded-lg p-3">
                              <code className="text-green-400">pip install ziontechgroup-api</code>
                            </div>
                            <a href="#" className="text-purple-400 hover:text-purple-300">View Documentation →</a>
                          </div>
                        </div>

                        <div className="bg-white/5 rounded-lg p-6">
                          <h3 className="text-xl font-semibold text-white mb-4">PHP</h3>
                          <p className="text-gray-300 mb-4">Official SDK for PHP applications.</p>
                          <div className="space-y-2">
                            <div className="bg-black/20 rounded-lg p-3">
                              <code className="text-green-400">composer require ziontechgroup/api-client</code>
                            </div>
                            <a href="#" className="text-purple-400 hover:text-purple-300">View Documentation →</a>
                          </div>
                        </div>

                        <div className="bg-white/5 rounded-lg p-6">
                          <h3 className="text-xl font-semibold text-white mb-4">Go</h3>
                          <p className="text-gray-300 mb-4">Official SDK for Go applications.</p>
                          <div className="space-y-2">
                            <div className="bg-black/20 rounded-lg p-3">
                              <code className="text-green-400">go get github.com/ziontechgroup/api-client</code>
                            </div>
                            <a href="#" className="text-purple-400 hover:text-purple-300">View Documentation →</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default APIDocumentation;