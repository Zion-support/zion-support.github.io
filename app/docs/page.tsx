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
      description: 'Quick start guides and basic setup instructions',
      docs: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', link: '/docs/quick-start' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', link: '/docs/installation' },
        { title: 'Configuration', description: 'Configure your environment', link: '/docs/configuration' }
      ]
    },
    {
      title: 'API Reference',
      icon: '📚',
      description: 'Complete API documentation and reference',
      docs: [
        { title: 'Authentication', description: 'API authentication methods', link: '/docs/api/auth' },
        { title: 'Endpoints', description: 'All available API endpoints', link: '/docs/api/endpoints' },
        { title: 'SDKs', description: 'Software development kits', link: '/docs/api/sdks' }
      ]
    },
    {
      title: 'AI Services',
      icon: '🤖',
      description: 'AI and machine learning service documentation',
      docs: [
        { title: 'AI Content Generation', description: 'Generate content with AI', link: '/docs/ai/content' },
        { title: 'AI Analytics', description: 'AI-powered analytics tools', link: '/docs/ai/analytics' },
        { title: 'AI Automation', description: 'Automate workflows with AI', link: '/docs/ai/automation' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: '💻',
      description: 'Micro SAAS solutions and tools',
      docs: [
        { title: 'Available Tools', description: 'List of all micro SAAS tools', link: '/docs/micro-saas/tools' },
        { title: 'Integration Guide', description: 'Integrate with your existing systems', link: '/docs/micro-saas/integration' },
        { title: 'Pricing & Plans', description: 'Pricing information and plans', link: '/docs/micro-saas/pricing' }
      ]
    },
    {
      title: 'Security',
      icon: '🔒',
      description: 'Security best practices and compliance',
      docs: [
        { title: 'Security Overview', description: 'Our security measures', link: '/docs/security/overview' },
        { title: 'Compliance', description: 'Compliance and certifications', link: '/docs/security/compliance' },
        { title: 'Data Protection', description: 'How we protect your data', link: '/docs/security/data-protection' }
      ]
    },
    {
      title: 'Support',
      icon: '🆘',
      description: 'Help and support resources',
      docs: [
        { title: 'FAQ', description: 'Frequently asked questions', link: '/docs/support/faq' },
        { title: 'Troubleshooting', description: 'Common issues and solutions', link: '/docs/support/troubleshooting' },
        { title: 'Contact Support', description: 'Get help from our team', link: '/docs/support/contact' }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg particle-system">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text-enhanced floating">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Everything You Need to Get Started
            </p>
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Comprehensive documentation for all our services, APIs, and tools. 
              Find guides, tutorials, and reference materials to help you succeed.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Documentation Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDocs.map((category, index) => (
                <div key={index} className="cyber-card-enhanced p-6 data-stream">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  <div className="space-y-3">
                    {category.docs.map((doc, docIndex) => (
                      <Link
                        key={docIndex}
                        href={doc.link}
                        className="block p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                              {doc.title}
                            </h4>
                            <p className="text-sm text-gray-400">{doc.description}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {filteredDocs.length === 0 && searchQuery && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No results found</h3>
                <p className="text-gray-300 mb-8">Try adjusting your search terms</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="cyber-button px-6 py-3"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Quick Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/api-docs"
                className="cyber-card hologram-card p-6 text-center group hover:scale-105 transition-transform"
              >
                <Code className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  API Reference
                </h3>
                <p className="text-sm text-gray-400">Complete API documentation</p>
              </Link>
              
              <Link
                href="/micro-saas"
                className="cyber-card hologram-card p-6 text-center group hover:scale-105 transition-transform"
              >
                <BookOpen className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  Micro SAAS
                </h3>
                <p className="text-sm text-gray-400">Micro SAAS solutions guide</p>
              </Link>
              
              <Link
                href="/compliance"
                className="cyber-card hologram-card p-6 text-center group hover:scale-105 transition-transform"
              >
                <FileText className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  Compliance
                </h3>
                <p className="text-sm text-gray-400">Security and compliance info</p>
              </Link>
              
              <Link
                href="/contact"
                className="cyber-card hologram-card p-6 text-center group hover:scale-105 transition-transform"
              >
                <Download className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  Get Help
                </h3>
                <p className="text-sm text-gray-400">Contact our support team</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our support team is here to help you with any questions or issues you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4"
              >
                Contact Support
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocsPage;