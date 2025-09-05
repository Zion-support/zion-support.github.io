import React from 'react';
import Layout from "../components/Layout";
import { motion } from 'framer-motion';
import { Code, Book, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';

export default function APIPage() {
  const apiFeatures = [
    {
      title: "RESTful APIs",
      description: "Clean, intuitive REST API endpoints for easy integration",
      icon: Code,
      features: ["JSON Responses", "HTTP Status Codes", "Rate Limiting"]
    },
    {
      title: "Comprehensive Documentation",
      description: "Detailed API documentation with examples and guides",
      icon: Book,
      features: ["Interactive Docs", "Code Examples", "SDK Libraries"]
    },
    {
      title: "High Performance",
      description: "Fast, reliable APIs built for scale and speed",
      icon: Zap,
      features: ["Low Latency", "High Throughput", "Global CDN"]
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with authentication and encryption",
      icon: Shield,
      features: ["OAuth 2.0", "API Keys", "SSL/TLS Encryption"]
    }
  ];

  const apiEndpoints = [{
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
      { code: 400, description: 'Bad Request', example: '{ "error": "Invalid parameters" }' }]
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
      { code: 400, description: 'Bad Request', example: '{ "error": "Missing required fields" }' }]
  },
  {
    method: 'GET',
    path: '/api/v1/status',
    description: 'Get system status and health information',
    parameters: [],
    responses: [
      { code: 200, description: 'Success', example: '{ "status": "operational", "uptime": "99.9%" }' }]
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
      { code: 400, description: 'Bad Request', example: '{ "error": "Invalid project type" }' }]
  }]
  const apiFeatures2 = [{
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
    icon: Book,
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
  }]
  const sdkLanguages = [
    { name: 'JavaScript', icon: 'JS', color: 'bg-yellow-500' },
    { name: 'Python', icon: 'PY', color: 'bg-blue-500' },
    { name: 'Java', icon: 'J', color: 'bg-red-500' },
    { name: 'C#', icon: 'C#', color: 'bg-purple-500' },
    { name: 'PHP', icon: 'PHP', color: 'bg-indigo-500' },
    { name: 'Go', icon: 'GO', color: 'bg-cyan-500' }]
  const [selectedEndpoint, setSelectedEndpoint] = useState(0)
  const [copiedCode, setCopiedCode] = useState<number | null>(null)
  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(index)
    setTimeout(() => setCopiedCode(null), 2000)
  }
  const generateCodeExample = (endpoint: any) => {
    const baseUrl = 'https://api.ziontechgroup.com'
    const exampleParams = endpoint.parameters
      .filter((p: any) => p.required)
      .map((p: any) => `${p.name}: "example_${p.name}"`)
      .join(', ')
    if (endpoint.method === 'GET') {
      return `fetch('${baseUrl}${endpoint.path}?${endpoint.parameters.map((p: any) => `${p.name}=example_${p.name}`).join('&')}')`
        + `\n  .then(response => response.json())`
        + `\n  .then(data => console.log(data))`
        + `\n  .catch(error => console.error('Error:', error));`;
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
})`
        + `\n.then(response => response.json())`
        + `\n.then(data => console.log(data))`
        + `\n.catch(error => console.error('Error:', error));`;
    }
  }
  return (
    <Layout 
      title="API Reference - Zion Tech Group"
      description="Comprehensive API documentation and reference for integrating with Zion Tech Group services."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Reference
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive API documentation and reference for integrating with Zion Tech Group services
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-indigo-600 mb-4">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Available Endpoints
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive API endpoints across all service categories
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Services API</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">POST /api/ai/analyze</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">AI</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">POST /api/ai/predict</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">AI</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">POST /api/ai/process</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">AI</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">IT Services API</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">GET /api/infrastructure/status</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IT</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">POST /api/security/scan</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IT</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">GET /api/cloud/resources</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IT</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Micro SaaS API</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">POST /api/saas/subscribe</span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">SaaS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">GET /api/saas/usage</span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">SaaS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">POST /api/saas/configure</span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">SaaS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us to get API access and start building with our powerful services
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Get API Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </section>
      </div>
    </Layout>
  );
}