'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, BookOpen, Code, FileText, Download, ArrowRight, ChevronRight } from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const docCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      description: 'Quick start guides and setup instructions',
      docs: [
        { title: 'Installation Guide', url: '/docs/installation', description: 'Step-by-step installation instructions' },
        { title: 'Quick Start', url: '/docs/quick-start', description: 'Get up and running in minutes' },
        { title: 'Configuration', url: '/docs/configuration', description: 'Configure your environment' },
        { title: 'First Project', url: '/docs/first-project', description: 'Create your first project' }
      ]
    },
    {
      title: 'API Reference',
      icon: '📚',
      description: 'Complete API documentation and reference',
      docs: [
        { title: 'Authentication', url: '/docs/api/auth', description: 'API authentication methods' },
        { title: 'Endpoints', url: '/docs/api/endpoints', description: 'All available API endpoints' },
        { title: 'Error Codes', url: '/docs/api/errors', description: 'Error handling and codes' },
        { title: 'Rate Limits', url: '/docs/api/rate-limits', description: 'API rate limiting information' }
      ]
    },
    {
      title: 'SDKs & Libraries',
      icon: '💻',
      description: 'Client libraries and SDKs for various languages',
      docs: [
        { title: 'JavaScript SDK', url: '/docs/sdk/javascript', description: 'JavaScript client library' },
        { title: 'Python SDK', url: '/docs/sdk/python', description: 'Python client library' },
        { title: 'React Components', url: '/docs/sdk/react', description: 'React UI components' },
        { title: 'Node.js SDK', url: '/docs/sdk/nodejs', description: 'Node.js server library' }
      ]
    },
    {
      title: 'Tutorials',
      icon: '🎓',
      description: 'Step-by-step tutorials and guides',
      docs: [
        { title: 'Building an AI App', url: '/docs/tutorials/ai-app', description: 'Create an AI-powered application' },
        { title: 'Data Processing', url: '/docs/tutorials/data-processing', description: 'Process and analyze data' },
        { title: 'Deployment Guide', url: '/docs/tutorials/deployment', description: 'Deploy your application' },
        { title: 'Best Practices', url: '/docs/tutorials/best-practices', description: 'Development best practices' }
      ]
    },
    {
      title: 'Examples',
      icon: '💡',
      description: 'Code examples and sample projects',
      docs: [
        { title: 'Sample Projects', url: '/docs/examples/projects', description: 'Complete sample projects' },
        { title: 'Code Snippets', url: '/docs/examples/snippets', description: 'Reusable code snippets' },
        { title: 'Integration Examples', url: '/docs/examples/integrations', description: 'Third-party integrations' },
        { title: 'Use Cases', url: '/docs/examples/use-cases', description: 'Real-world use cases' }
      ]
    },
    {
      title: 'Troubleshooting',
      icon: '🔧',
      description: 'Common issues and solutions',
      docs: [
        { title: 'FAQ', url: '/docs/troubleshooting/faq', description: 'Frequently asked questions' },
        { title: 'Common Issues', url: '/docs/troubleshooting/issues', description: 'Common problems and solutions' },
        { title: 'Debug Guide', url: '/docs/troubleshooting/debug', description: 'Debugging techniques' },
        { title: 'Support', url: '/docs/troubleshooting/support', description: 'Get help and support' }
      ]
    }
  ];

  const filteredDocs = docCategories.map(category => ({
    ...category,
    docs: category.docs.filter(doc => 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.docs.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive documentation, guides, and resources to help you build amazing applications with our platform.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDocs.map((category, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{category.icon}</div>
                  <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                </div>
                <p className="text-gray-300 mb-4 text-sm">{category.description}</p>
                <ul className="space-y-2">
                  {category.docs.map((doc, docIndex) => (
                    <li key={docIndex}>
                      <Link
                        href={doc.url}
                        className="flex items-center justify-between text-gray-300 hover:text-cyan-400 transition-colors group"
                      >
                        <div>
                          <div className="font-medium text-sm">{doc.title}</div>
                          <div className="text-xs text-gray-500">{doc.description}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/api-docs"
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-3">
                <Code className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">API Reference</h3>
              </div>
              <p className="text-gray-300 text-sm">Complete API documentation</p>
              <ArrowRight className="w-4 h-4 text-cyan-400 mt-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/guides"
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-3">
                <BookOpen className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Guides</h3>
              </div>
              <p className="text-gray-300 text-sm">Step-by-step tutorials</p>
              <ArrowRight className="w-4 h-4 text-cyan-400 mt-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/examples"
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-3">
                <FileText className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Examples</h3>
              </div>
              <p className="text-gray-300 text-sm">Code examples and samples</p>
              <ArrowRight className="w-4 h-4 text-cyan-400 mt-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/downloads"
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-3">
                <Download className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-lg font-semibold text-white">Downloads</h3>
              </div>
              <p className="text-gray-300 text-sm">SDKs and tools</p>
              <ArrowRight className="w-4 h-4 text-cyan-400 mt-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gray-800/50 rounded-xl p-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Getting Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is here to help you succeed. Get in touch for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Support
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocsPage;