import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Copy, 
  Check, 
  ExternalLink, 
  Search,
  Filter,
  BookOpen,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  Terminal,
  Database,
  Server,
  Cpu,
  Lock,
  Clock,
  Users,
  BarChart3,
  Settings,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';
import Layout from '../components/Layout';

const apiEndpoints = [
  {
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
      { code: 400, description: 'Bad Request', example: '{ "error": "Invalid parameters" }' }
    ]
  },
  {
    method: 'POST',
    path: '/api/v1/contact',
    description: 'Submit a contact form or inquiry',
    parameters: [
      { name: 'name', type: 'string', required: true, description: 'Contact person name' },
      { name: 'email', type: 'string', required: true, description: 'Contact email address' },
      { name: 'message', type: 'string', required: true, description: 'Message content' },
      { name: 'company', type: 'string', required: false, description: 'Company name' },
      { name: 'phone', type: 'string', required: false, description: 'Phone number' }
    ],
    responses: [
      { code: 201, description: 'Created', example: '{ "id": "123", "status": "received" }' },
      { code: 400, description: 'Bad Request', example: '{ "error": "Missing required fields" }' }
    ]
  },
  {
    method: 'GET',
    path: '/api/v1/status',
    description: 'Get system status and health information',
    parameters: [],
    responses: [
      { code: 200, description: 'Success', example: '{ "status": "operational", "uptime": "99.9%" }' }
    ]
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
      { code: 400, description: 'Bad Request', example: '{ "error": "Invalid project type" }' }
    ]
  }
];

const apiFeatures = [
  {
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
    icon: BookOpen,
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
  }
];

const sdkLanguages = [
  { name: 'JavaScript', icon: 'JS', color: 'bg-yellow-500' },
  { name: 'Python', icon: 'PY', color: 'bg-blue-500' },
  { name: 'Java', icon: 'J', color: 'bg-red-500' },
  { name: 'C#', icon: 'C#', color: 'bg-purple-500' },
  { name: 'PHP', icon: 'PHP', color: 'bg-indigo-500' },
  { name: 'Go', icon: 'GO', color: 'bg-cyan-500' }
];

export default function APIPage() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(0);
  const [copiedCode, setCopiedCode] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const generateCodeExample = (endpoint: any) => {
    const baseUrl = 'https://api.ziontechgroup.com';
    const exampleParams = endpoint.parameters
      .filter((p: any) => p.required)
      .map((p: any) => `${p.name}: "example_${p.name}"`)
      .join(', ');

    if (endpoint.method === 'GET') {
      return `fetch('${baseUrl}${endpoint.path}?${endpoint.parameters.map((p: any) => `${p.name}=example_${p.name}`).join('&')}')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`;
    } else {
      return `fetch('${baseUrl}${endpoint.path}', {
  method: '${endpoint.method}',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    ${exampleParams}
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive API documentation for integrating with Zion Tech Group services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get API Key
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View Examples
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* API Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                API Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful API capabilities designed for developers and businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-blue-600 mb-4">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Endpoints Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                API Endpoints
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints with interactive documentation
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Endpoint List */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Endpoints</h3>
                    <div className="space-y-2">
                      {apiEndpoints.map((endpoint, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedEndpoint(index)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                            selectedEndpoint === index
                              ? 'bg-blue-100 text-blue-700 font-medium'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-sm">{endpoint.method}</span>
                            <span className="text-xs text-gray-500">{endpoint.path}</span>
                          </div>
                          <p className="text-sm mt-1">{endpoint.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Endpoint Details */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded text-sm font-medium ${
                            apiEndpoints[selectedEndpoint].method === 'GET' ? 'bg-green-100 text-green-800' :
                            apiEndpoints[selectedEndpoint].method === 'POST' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {apiEndpoints[selectedEndpoint].method}
                          </span>
                          <code className="text-lg font-mono text-gray-900">
                            {apiEndpoints[selectedEndpoint].path}
                          </code>
                        </div>
                        <p className="text-gray-600">
                          {apiEndpoints[selectedEndpoint].description}
                        </p>
                      </div>
                    </div>

                    {/* Parameters */}
                    {apiEndpoints[selectedEndpoint].parameters.length > 0 && (
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Parameters</h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Required</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {apiEndpoints[selectedEndpoint].parameters.map((param, idx) => (
                                <tr key={idx}>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                                    {param.name}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {param.type}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {param.required ? (
                                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Required</span>
                                    ) : (
                                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">Optional</span>
                                    )}
                                  </td>
                                  <td className="px-6 py-4 text-sm text-gray-500">
                                    {param.description}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Responses */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Responses</h4>
                      <div className="space-y-4">
                        {apiEndpoints[selectedEndpoint].responses.map((response, idx) => (
                          <div key={idx} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`px-2 py-1 rounded text-sm font-medium ${
                                response.code >= 200 && response.code < 300 ? 'bg-green-100 text-green-800' :
                                response.code >= 400 ? 'bg-red-100 text-red-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {response.code}
                              </span>
                              <span className="text-sm font-medium text-gray-900">{response.description}</span>
                            </div>
                            <pre className="text-xs text-gray-600 bg-gray-50 p-3 rounded overflow-x-auto">
                              {response.example}
                            </pre>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Code Example */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-gray-900">Code Example</h4>
                        <button
                          onClick={() => copyToClipboard(generateCodeExample(apiEndpoints[selectedEndpoint]), selectedEndpoint)}
                          className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                        >
                          {copiedCode === selectedEndpoint ? (
                            <>
                              <Check className="w-4 h-4" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{generateCodeExample(apiEndpoints[selectedEndpoint])}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SDK Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                SDKs & Libraries
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Official SDKs and libraries for popular programming languages
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {sdkLanguages.map((sdk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 ${sdk.color} rounded-lg flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}>
                    {sdk.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {sdk.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get your API key and start building amazing applications with our powerful APIs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get API Key
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  View Documentation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}