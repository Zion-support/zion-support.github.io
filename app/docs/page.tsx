import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Code, FileText, Download, ArrowRight, ChevronRight, Users, Settings, Shield, Zap } from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const docCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      description: 'Quick start guides and basic setup instructions',
      docs: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', link: '/docs/quick-start' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', link: '/docs/installation' },
        { title: 'Configuration', description: 'Configure your environment', link: '/docs/configuration' }
      ]
    },
    {
      title: 'API Reference',
      icon: Code,
      description: 'Complete API documentation and reference',
      docs: [
        { title: 'Authentication', description: 'API authentication methods', link: '/docs/api/auth' },
        { title: 'Endpoints', description: 'All available API endpoints', link: '/docs/api/endpoints' },
        { title: 'SDKs', description: 'Software development kits', link: '/docs/api/sdks' }
      ]
    },
    {
      title: 'AI Services',
      icon: Zap,
      description: 'AI and machine learning service documentation',
      docs: [
        { title: 'AI Content Generation', description: 'Generate content with AI', link: '/docs/ai/content' },
        { title: 'AI Analytics', description: 'AI-powered analytics tools', link: '/docs/ai/analytics' },
        { title: 'AI Automation', description: 'Automate workflows with AI', link: '/docs/ai/automation' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Settings,
      description: 'Micro SAAS solutions and tools',
      docs: [
        { title: 'Available Tools', description: 'List of all micro SAAS tools', link: '/docs/micro-saas/tools' },
        { title: 'Integration Guide', description: 'Integrate with your existing systems', link: '/docs/micro-saas/integration' },
        { title: 'Pricing & Plans', description: 'Pricing information and plans', link: '/docs/micro-saas/pricing' }
      ]
    },
    {
      title: 'IT Services',
      icon: Shield,
      description: 'IT infrastructure and security documentation',
      docs: [
        { title: 'Cloud Migration', description: 'Migrate to the cloud', link: '/docs/it/cloud-migration' },
        { title: 'Cybersecurity', description: 'Security best practices', link: '/docs/it/cybersecurity' },
        { title: 'Infrastructure', description: 'IT infrastructure setup', link: '/docs/it/infrastructure' }
      ]
    },
    {
      title: 'Support',
      icon: Users,
      description: 'Help and support resources',
      docs: [
        { title: 'FAQ', description: 'Frequently asked questions', link: '/docs/support/faq' },
        { title: 'Troubleshooting', description: 'Common issues and solutions', link: '/docs/support/troubleshooting' },
        { title: 'Contact Support', description: 'Get help from our team', link: '/docs/support/contact' }
      ]
    }
  ];

  const popularDocs = [
    { title: 'Quick Start Guide', description: 'Get started with Zion Tech Group', link: '/docs/quick-start' },
    { title: 'API Authentication', description: 'Learn how to authenticate with our API', link: '/docs/api/auth' },
    { title: 'AI Content Generation', description: 'Generate content using our AI services', link: '/docs/ai/content' },
    { title: 'Cloud Migration Guide', description: 'Migrate your infrastructure to the cloud', link: '/docs/it/cloud-migration' }
  ];

  const filteredCategories = docCategories.map(category => ({
    ...category,
    docs: category.docs.filter(doc => 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.docs.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Documentation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive guides, API references, and tutorials to help you get the most out of our services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Docs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Popular Documentation</h2>
            <p className="text-gray-300 text-lg">Most frequently accessed guides and tutorials</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDocs.map((doc, index) => (
              <Link
                key={index}
                to={doc.link}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-8 h-8 text-cyan-400" />
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {doc.title}
                </h3>
                <p className="text-gray-300 text-sm">{doc.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Documentation Categories</h2>
            <p className="text-gray-300 text-lg">Browse our comprehensive documentation by category</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <category.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-3">
                  {category.docs.map((doc, docIndex) => (
                    <Link
                      key={docIndex}
                      to={doc.link}
                      className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors group"
                    >
                      <div>
                        <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                          {doc.title}
                        </div>
                        <div className="text-sm text-gray-400">{doc.description}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Help?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Can't find what you're looking for? Our support team is here to help you succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
            <Link
              to="/consultation"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Get Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;