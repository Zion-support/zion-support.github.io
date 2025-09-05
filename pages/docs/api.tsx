import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { 
  Code, 
  ArrowRight, 
  CheckCircle, 
  ExternalLink,
  Shield,
  Zap,
  Globe,
  Database,
  Settings,
  BookOpen,
  Terminal,
  Lock,
  Clock,
  Users,
  BarChart3,
  Copy,
  Play
} from 'lucide-react';

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
        status: 200,
        data: [
          {
            id: 1,
            name: "AI-Powered Email Responder",
            category: "ai",
            description: "Automated email response system",
            price: "$299/month"
          }
        ]
      }
    }
  },
  {
    method: 'POST',
    path: '/api/v1/contact',
    description: 'Submit a contact form or inquiry',
    parameters: [
      { name: 'name', type: 'string', required: true, description: 'Contact name' },
      { name: 'email', type: 'string', required: true, description: 'Contact email' },
      { name: 'message', type: 'string', required: true, description: 'Message content' },
      { name: 'service', type: 'string', required: false, description: 'Service of interest' }
    ],
    example: {
      request: 'POST /api/v1/contact',
      body: {
        name: "John Doe",
        email: "john@example.com",
        message: "Interested in AI services",
        service: "ai-solutions"
      },
      response: {
        status: 201,
        message: "Contact form submitted successfully",
        id: "contact_123"
      }
    }
  },
  {
    method: 'GET',
    path: '/api/v1/quote',
    description: 'Request a custom quote for services',
    parameters: [
      { name: 'service_type', type: 'string', required: true, description: 'Type of service needed' },
      { name: 'project_scope', type: 'string', required: true, description: 'Project scope description' },
      { name: 'timeline', type: 'string', required: false, description: 'Project timeline' }
    ],
    example: {
      request: 'GET /api/v1/quote?service_type=ai&project_scope=custom-development&timeline=3-months',
      response: {
        status: 200,
        data: {
          estimated_cost: "$15,000 - $25,000",
          timeline: "8-12 weeks",
          next_steps: "Schedule consultation call"
        }
      }
    }
  }
];

const codeExamples = [
  {
    language: 'JavaScript',
    title: 'Fetch Services',
    code: `const response = await fetch('https://ziontechgroup.com/api/v1/services', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`
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
    'message': 'Interested in AI services',
    'service': 'ai-solutions'
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`
  },
  {
    language: 'cURL',
    title: 'Get Quote',
    code: `curl -X GET "https://ziontechgroup.com/api/v1/quote?service_type=ai&project_scope=custom-development" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
  }
];

const authenticationMethods = [
  {
    name: "API Key Authentication",
    description: "Simple API key-based authentication for basic access",
    icon: Lock,
    features: [
      "Easy to implement",
      "Suitable for server-to-server communication",
      "Rate limiting included",
      "Secure key management"
    ]
  },
  {
    name: "OAuth 2.0",
    description: "Industry-standard OAuth 2.0 for secure user authentication",
    icon: Shield,
    features: [
      "Secure token-based authentication",
      "User consent management",
      "Token refresh capabilities",
      "Industry standard security"
    ]
  },
  {
    name: "JWT Tokens",
    description: "JSON Web Tokens for stateless authentication",
    icon: Lock,
    features: [
      "Stateless authentication",
      "Self-contained tokens",
      "Cross-domain compatibility",
      "Secure token validation"
    ]
  }
];

const rateLimits = [
  {
    tier: "Free",
    requests: "100/hour",
    description: "Perfect for testing and small projects",
    features: ["Basic API access", "Standard support", "Community resources"]
  },
  {
    tier: "Professional",
    requests: "1,000/hour",
    description: "Ideal for growing businesses",
    features: ["Priority support", "Advanced features", "SLA guarantee"]
  },
  {
    tier: "Enterprise",
    requests: "Unlimited",
    description: "Custom solutions for large organizations",
    features: ["Dedicated support", "Custom integrations", "SLA guarantee"]
  }
];

export default function APIDocsPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                API Documentation
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Integrate with Zion Tech Group's services using our comprehensive REST API. 
                Build powerful applications with our robust and scalable API endpoints.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quick Start
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get started with our API in minutes. Here's everything you need to know.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Get API Key</h3>
                <p className="text-gray-600 mb-4">
                  Sign up for an account and generate your API key from the dashboard.
                </p>
                <a href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Get Started →
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Make Requests</h3>
                <p className="text-gray-600 mb-4">
                  Use your API key to authenticate requests to our endpoints.
                </p>
                <a href="#endpoints" className="text-green-600 hover:text-green-700 font-semibold">
                  View Endpoints →
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Build & Scale</h3>
                <p className="text-gray-600 mb-4">
                  Integrate our services into your applications and scale as you grow.
                </p>
                <a href="#examples" className="text-purple-600 hover:text-purple-700 font-semibold">
                  See Examples →
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section id="endpoints" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                API Endpoints
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints designed to integrate seamlessly 
                with your applications and workflows.
              </p>
            </motion.div>

            <div className="space-y-8">
              {apiEndpoints.map((endpoint, index) => (
                <motion.div
                  key={endpoint.path}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg shadow-lg p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold mr-4 ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-lg font-mono text-gray-900">{endpoint.path}</code>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{endpoint.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Parameters */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Parameters</h4>
                      <div className="space-y-2">
                        {endpoint.parameters.map((param, paramIndex) => (
                          <div key={paramIndex} className="flex items-center justify-between text-sm">
                            <div>
                              <code className="text-blue-600">{param.name}</code>
                              <span className="text-gray-500 ml-2">({param.type})</span>
                              {param.required && <span className="text-red-500 ml-1">*</span>}
                            </div>
                            <span className="text-gray-500 text-xs">{param.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Example */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Example Response</h4>
                      <div className="bg-gray-900 rounded-lg p-4 text-green-400 text-sm font-mono">
                        <pre>{JSON.stringify(endpoint.example.response, null, 2)}</pre>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section id="examples" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Code Examples
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get started quickly with these code examples in popular programming languages.
              </p>
            </motion.div>

            <div className="space-y-8">
              {codeExamples.map((example, index) => (
                <motion.div
                  key={example.language}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <Code className="w-5 h-5 text-white mr-2" />
                      <span className="text-white font-semibold">{example.language}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-white transition-colors">
                        <Copy className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-white transition-colors">
                        <Play className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{example.title}</h3>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Authentication Methods
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the authentication method that best fits your security requirements 
                and integration needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {authenticationMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.div
                    key={method.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-lg p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{method.name}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {method.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Rate Limits & Pricing
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that best fits your usage requirements and scale as you grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {rateLimits.map((limit, index) => (
                <motion.div
                  key={limit.tier}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-lg shadow-lg p-6 ${
                    limit.tier === 'Professional' ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{limit.tier}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{limit.requests}</div>
                    <p className="text-gray-600">{limit.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {limit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    limit.tier === 'Professional' 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    {limit.tier === 'Free' ? 'Get Started' : 'Contact Sales'}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Start integrating with our API today. Get your API key and begin building 
                powerful applications with our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get API Key
                </a>
                <a
                  href="/api"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Full API
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}