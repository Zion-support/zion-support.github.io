import { motion } from 'framer-motion';
import { 
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

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/users",
    description: "Retrieve all users",
    parameters: [
      { name: "limit", type: "integer", required: false, description: "Number of users to return" },
      { name: "offset", type: "integer", required: false, description: "Number of users to skip" }
    ],
    example: `curl -X GET "https://api.ziontechgroup.com/v1/users?limit=10" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
  },
  {
    method: "POST",
    path: "/api/v1/users",
    description: "Create a new user",
    parameters: [
      { name: "name", type: "string", required: true, description: "User's full name" },
      { name: "email", type: "string", required: true, description: "User's email address" },
      { name: "role", type: "string", required: false, description: "User's role" }
    ],
    example: `curl -X POST "https://api.ziontechgroup.com/v1/users" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "John Doe", "email": "john@example.com"}'`
  },
  {
    method: "PUT",
    path: "/api/v1/users/{id}",
    description: "Update a user",
    parameters: [
      { name: "id", type: "string", required: true, description: "User ID" },
      { name: "name", type: "string", required: false, description: "User's full name" },
      { name: "email", type: "string", required: false, description: "User's email address" }
    ],
    example: `curl -X PUT "https://api.ziontechgroup.com/v1/users/123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "John Smith"}'`
  },
  {
    method: "DELETE",
    path: "/api/v1/users/{id}",
    description: "Delete a user",
    parameters: [
      { name: "id", type: "string", required: true, description: "User ID" }
    ],
    example: `curl -X DELETE "https://api.ziontechgroup.com/v1/users/123" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
  }
];

const sdks = [
  { name: "JavaScript", version: "2.1.0", description: "Node.js and browser support" },
  { name: "Python", version: "1.8.2", description: "Python 3.6+ support" },
  { name: "PHP", version: "1.5.1", description: "PHP 7.4+ support" },
  { name: "Java", version: "2.0.0", description: "Java 8+ support" },
  { name: "Go", version: "1.2.0", description: "Go 1.16+ support" },
  { name: "Ruby", version: "1.3.0", description: "Ruby 2.7+ support" }
];

export default function ApiDocsPage() {
  return (
    <SimpleLayout
      title="API Documentation - Zion Tech Group"
      description="Complete API reference with endpoints, authentication, examples, and SDKs for developers."
      keywords="API documentation, REST API, GraphQL, SDKs, developer resources, API reference"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-teal-900 to-cyan-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
  Copy
} from 'lucide-react';
import Layout from '../components/Layout';

const endpoints = [
  {
    name: 'Authentication',
    method: 'POST',
    endpoint: '/api/auth/login',
    description: 'Authenticate users and get access tokens',
    parameters: [
      { name: 'email', type: 'string', required: true, description: 'User email address' },
      { name: 'password', type: 'string', required: true, description: 'User password' }
    ],
    response: {
      status: 200,
      data: {
        token: 'string',
        user: 'object',
        expires: 'datetime'
      }
    }
  },
  {
    name: 'Get Services',
    method: 'GET',
    endpoint: '/api/services',
    description: 'Retrieve all available services',
    parameters: [
      { name: 'category', type: 'string', required: false, description: 'Filter by service category' },
      { name: 'limit', type: 'number', required: false, description: 'Number of results to return' }
    ],
  },
  {
    name: 'Create Project',
    method: 'POST',
    endpoint: '/api/projects',
    description: 'Create a new project',
    parameters: [
      { name: 'name', type: 'string', required: true, description: 'Project name' },
      { name: 'description', type: 'string', required: false, description: 'Project description' },
      { name: 'type', type: 'string', required: true, description: 'Project type' }
    ],
  },
  {
    name: 'Get Analytics',
    method: 'GET',
    endpoint: '/api/analytics',
    description: 'Retrieve analytics data',
    parameters: [
      { name: 'startDate', type: 'string', required: false, description: 'Start date (ISO format)' },
      { name: 'endDate', type: 'string', required: false, description: 'End date (ISO format)' },
      { name: 'metric', type: 'string', required: false, description: 'Specific metric to retrieve' }
    ],

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
                Complete API reference with endpoints, authentication, examples, and SDKs. 
                Everything you need to integrate with our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#endpoints" className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Explore Endpoints
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Get API Key
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}

            <div className="space-y-8">
              {endpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sdks.map((sdk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

