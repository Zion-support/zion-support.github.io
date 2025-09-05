import React, { useState } from 'react';
import Layout from "../components/Layout";
import { motion } from 'framer-motion';
import { Code, Book, Zap, Shield, CheckCircle, ArrowRight, Copy, Check, ExternalLink, Search, Filter, BookOpen, Globe, Terminal, Database, Server, Cpu, Lock, Clock, Users, BarChart3, Settings, Play, Pause, RotateCcw } from 'lucide-react';

export default function APIPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

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
        { code: 200, description: 'Success', example: '{ "services": [...], "total": 150, "limit": 10, "offset": 0 }' },
        { code: 400, description: 'Bad Request', example: '{ "error": "Invalid parameters" }' }
      ]
    },
    {
      method: 'POST',
      path: '/api/v1/contact',
      description: 'Submit contact form',
      parameters: [
        { name: 'name', type: 'string', required: true, description: 'Contact name' },
        { name: 'email', type: 'string', required: true, description: 'Contact email' },
        { name: 'message', type: 'string', required: true, description: 'Contact message' }
      ],
      responses: [
        { code: 201, description: 'Contact submitted', example: '{ "message": "Thank you for your message", "id": "123" }' },
        { code: 400, description: 'Bad Request', example: '{ "error": "Missing required fields" }' }
      ]
    },
    {
      method: 'POST',
      path: '/api/v1/quote',
      description: 'Request service quote',
      parameters: [
        { name: 'service_type', type: 'string', required: true, description: 'Type of service requested' },
        { name: 'project_scope', type: 'string', required: true, description: 'Project description' },
        { name: 'budget_range', type: 'string', required: false, description: 'Budget range' }
      ],
      responses: [
        { code: 201, description: 'Quote created', example: '{ "quote_id": "456", "estimated_cost": "$10,000 - $15,000" }' },
        { code: 400, description: 'Bad Request', example: '{ "error": "Invalid project type" }' }
      ]
    }
  ];

  const codeExamples = [
    {
      language: 'JavaScript',
      title: 'Get Services',
      code: `const response = await fetch('https://ziontechgroup.com/api/v1/services?limit=10');
const data = await response.json();
console.log(data.services);`
    },
    {
      language: 'Python',
      title: 'Submit Contact Form',
      code: `import requests

url = 'https://ziontechgroup.com/api/v1/contact'
headers = {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json'
}
data = {
  'name': 'John Doe',
  'email': 'john@example.com',
  'message': 'Interested in AI services'
}

response = requests.post(url, json=data, headers=headers)
print(response.json())`
    },
    {
      language: 'cURL',
      title: 'Request Quote',
      code: `curl -X POST https://ziontechgroup.com/api/v1/quote \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "service_type": "AI Development",
    "project_scope": "Custom AI solution for data analysis",
    "budget_range": "$10,000 - $50,000"
  }'`
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Developer API
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Powerful APIs to integrate Zion Tech Group services into your applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#documentation"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  View Documentation
                </a>
                <a
                  href="#examples"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Code Examples
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20" id="features">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                API Features
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
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
              ))}
            </div>
          </div>
        </section>

        {/* API Endpoints Section */}
        <section className="py-20 bg-white" id="documentation">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                API Endpoints
              </h2>
            </motion.div>
            <div className="space-y-8">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <span className={`px-3 py-1 rounded text-sm font-semibold mr-4 ${
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-lg font-mono text-gray-800">
                      {endpoint.path}
                    </code>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {endpoint.description}
                  </p>
                  
                  {endpoint.parameters && endpoint.parameters.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Parameters:</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2">Name</th>
                              <th className="text-left py-2">Type</th>
                              <th className="text-left py-2">Required</th>
                              <th className="text-left py-2">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {endpoint.parameters.map((param, paramIndex) => (
                              <tr key={paramIndex} className="border-b">
                                <td className="py-2 font-mono">{param.name}</td>
                                <td className="py-2">{param.type}</td>
                                <td className="py-2">{param.required ? 'Yes' : 'No'}</td>
                                <td className="py-2">{param.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {endpoint.responses && endpoint.responses.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Responses:</h4>
                      <div className="space-y-2">
                        {endpoint.responses.map((response, responseIndex) => (
                          <div key={responseIndex} className="bg-white p-3 rounded border">
                            <div className="flex items-center mb-2">
                              <span className={`px-2 py-1 rounded text-xs font-semibold mr-2 ${
                                response.code >= 200 && response.code < 300 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {response.code}
                              </span>
                              <span className="text-sm text-gray-600">{response.description}</span>
                            </div>
                            <pre className="text-xs text-gray-700 bg-gray-50 p-2 rounded overflow-x-auto">
                              {response.example}
                            </pre>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section className="py-20 bg-gray-50" id="examples">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Code Examples
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {codeExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
                    <span className="text-sm font-semibold">{example.language}</span>
                    <button
                      onClick={() => copyToClipboard(example.code, `${example.language}-${index}`)}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {copiedCode === `${example.language}-${index}` ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{example.title}</h3>
                    <pre className="text-sm text-gray-700 bg-gray-50 p-3 rounded overflow-x-auto">
                      {example.code}
                    </pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get your API key and start integrating our services into your applications today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get API Key
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}