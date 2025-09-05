import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  Zap, 
  Shield,
  ArrowRight,
  Copy,
  CheckCircle,
  ExternalLink,
  Download,
  Search,
  Filter
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const sections = [
  {
    title: 'Getting Started',
    description: 'Quick start guides and setup instructions',
    icon: Zap,
    color: 'from-green-600 to-green-800',
    articles: [
      { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', readTime: '5 min', difficulty: 'Beginner' },
      { title: 'Installation Guide', description: 'Step-by-step installation instructions', readTime: '10 min', difficulty: 'Beginner' },
      { title: 'First Project', description: 'Build your first project with our platform', readTime: '15 min', difficulty: 'Beginner' },
      { title: 'Configuration', description: 'Configure your environment and settings', readTime: '8 min', difficulty: 'Intermediate' }
    ]
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation and examples',
    icon: Code,
    color: 'from-blue-600 to-blue-800',
    articles: [
      { title: 'Authentication', description: 'How to authenticate with our API', readTime: '12 min', difficulty: 'Intermediate' },
      { title: 'Endpoints', description: 'Complete list of available endpoints', readTime: '20 min', difficulty: 'Intermediate' },
      { title: 'Rate Limiting', description: 'Understanding rate limits and best practices', readTime: '8 min', difficulty: 'Intermediate' },
      { title: 'Error Handling', description: 'Common errors and how to handle them', readTime: '10 min', difficulty: 'Intermediate' }
    ]
  },
  {
    title: 'Integration Guides',
    description: 'Platform-specific integration tutorials',
    icon: BookOpen,
    color: 'from-purple-600 to-purple-800',
    articles: [
      { title: 'React Integration', description: 'Integrate with React applications', readTime: '18 min', difficulty: 'Intermediate' },
      { title: 'Node.js SDK', description: 'Using our Node.js SDK', readTime: '15 min', difficulty: 'Intermediate' },
      { title: 'Python SDK', description: 'Python integration and examples', readTime: '12 min', difficulty: 'Intermediate' },
      { title: 'Webhook Setup', description: 'Configure webhooks for real-time updates', readTime: '10 min', difficulty: 'Advanced' }
    ]
  },
  {
    title: 'Security & Compliance',
    description: 'Security best practices and compliance guidelines',
    icon: Shield,
    color: 'from-red-600 to-red-800',
    articles: [
      { title: 'Security Overview', description: 'Security features and best practices', readTime: '15 min', difficulty: 'Intermediate' },
      { title: 'Data Privacy', description: 'GDPR compliance and data handling', readTime: '12 min', difficulty: 'Intermediate' },
      { title: 'Authentication Security', description: 'Secure authentication implementation', readTime: '10 min', difficulty: 'Advanced' },
      { title: 'Audit Logs', description: 'Monitoring and audit trail features', readTime: '8 min', difficulty: 'Advanced' }
    ]
  }
];

const quickLinks = [
  { title: 'API Status', href: '/api-status', description: 'Check current API status and uptime' },
  { title: 'Changelog', href: '/changelog', description: 'Latest updates and feature releases' },
  { title: 'SDK Downloads', href: '/downloads', description: 'Download SDKs for your platform' },
  { title: 'Community Forum', href: '/community', description: 'Connect with other developers' }
];

const codeExamples = [
  {
    language: 'JavaScript',
    title: 'Basic Authentication',
    code: `const response = await fetch('https://api.ziontechgroup.com/v1/auth', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    username: 'your-username',
    password: 'your-password'
  })
});

const data = await response.json();
`
  },
  {
    language: 'Python',
    title: 'Making API Calls',
    code: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get(
    'https://api.ziontechgroup.com/v1/users',
    headers=headers
)

data = response.json()
print(data)`
  }
];

export default function DocumentationPage() {
  return (
    <MainLayout
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation, API reference, integration guides, and code examples for developers."
      keywords="documentation, API reference, integration guides, code examples, developer resources"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Developer{' '}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
                Everything you need to integrate with our platform. API reference, 
                code examples, and comprehensive guides.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <Link href="#getting-started">
                  <span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Get Started
                  </span>
                </Link>
                <Link href="/api-docs">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    API Reference
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {link.description}
                  </p>
                  <Link
                    href={link.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Access
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Documentation Sections
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse our comprehensive documentation organized by topic and difficulty level.
              </p>
            </motion.div>

            <div className="space-y-12">
              {sections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center mr-4`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {section.title}
                      </h3>
                      <p className="text-gray-600">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.articles.map((article, articleIndex) => (
                      <div
                        key={article.title}
                        className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-semibold text-gray-900">
                            {article.title}
                          </h4>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            article.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                            article.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {article.difficulty}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          {article.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {article.readTime}
                          </span>
                          <Link
                            href="/docs"
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                          >
                            Read
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-20 bg-gray-50">
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

            <div className="grid md:grid-cols-2 gap-8">
              {codeExamples.map((example, index) => (
                <motion.div
                  key={example.language}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between">
                    <span className="font-semibold">{example.language}</span>
                    <button className="flex items-center text-gray-400 hover:text-white transition-colors">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">
                      {example.title}
                    </h3>
                    <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need More Help?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/support">
                  <span className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Contact Support
                  </span>
                </Link>
                <Link href="/community">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Join Community
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