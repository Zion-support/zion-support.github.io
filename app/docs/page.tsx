'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Search, BookOpen, Code, FileText, Download, ArrowRight, ChevronRight, Globe, Shield, Brain, Cloud, Zap, Users, Settings, Database } from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const docCategories = [
    {
      title: 'Getting Started',
      icon: Globe,
      docs: [
        { title: 'Quick Start Guide', description: 'Get up and running in minutes', link: '/docs/getting-started/quick-start' },
        { title: 'Installation', description: 'Install and configure the platform', link: '/docs/getting-started/installation' },
        { title: 'First Steps', description: 'Your first project setup', link: '/docs/getting-started/first-steps' }
      ]
    },
    {
      title: 'AI Solutions',
      icon: Brain,
      docs: [
        { title: 'AI Platform Overview', description: 'Understanding our AI capabilities', link: '/docs/ai/overview' },
        { title: 'Machine Learning Models', description: 'Working with ML models', link: '/docs/ai/ml-models' },
        { title: 'Natural Language Processing', description: 'NLP features and APIs', link: '/docs/ai/nlp' },
        { title: 'Computer Vision', description: 'Image and video processing', link: '/docs/ai/computer-vision' }
      ]
    },
    {
      title: 'Cloud Services',
      icon: Cloud,
      docs: [
        { title: 'Cloud Infrastructure', description: 'Setting up cloud resources', link: '/docs/cloud/infrastructure' },
        { title: 'Deployment Guide', description: 'Deploying applications to the cloud', link: '/docs/cloud/deployment' },
        { title: 'Scaling & Performance', description: 'Optimizing for scale', link: '/docs/cloud/scaling' },
        { title: 'Monitoring & Logging', description: 'Monitoring your applications', link: '/docs/cloud/monitoring' }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      docs: [
        { title: 'Security Overview', description: 'Security best practices', link: '/docs/security/overview' },
        { title: 'Authentication', description: 'User authentication and authorization', link: '/docs/security/authentication' },
        { title: 'Data Protection', description: 'Protecting sensitive data', link: '/docs/security/data-protection' },
        { title: 'Compliance', description: 'Meeting regulatory requirements', link: '/docs/security/compliance' }
      ]
    },
    {
      title: 'APIs & Integration',
      icon: Code,
      docs: [
        { title: 'API Reference', description: 'Complete API documentation', link: '/docs/api/reference' },
        { title: 'SDKs & Libraries', description: 'Client libraries and SDKs', link: '/docs/api/sdks' },
        { title: 'Webhooks', description: 'Real-time event notifications', link: '/docs/api/webhooks' },
        { title: 'Rate Limits', description: 'API rate limiting and quotas', link: '/docs/api/rate-limits' }
      ]
    },
    {
      title: 'Support',
      icon: Users,
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

  const popularDocs = [
    { title: 'Quick Start Guide', description: 'Get up and running in minutes', link: '/docs/getting-started/quick-start', icon: Zap },
    { title: 'API Reference', description: 'Complete API documentation', link: '/docs/api/reference', icon: Code },
    { title: 'Security Overview', description: 'Security best practices', link: '/docs/security/overview', icon: Shield },
    { title: 'Cloud Deployment', description: 'Deploying applications to the cloud', link: '/docs/cloud/deployment', icon: Cloud }
  ];

  return (
    <>
      <SEOOptimizer 
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation for our AI and IT solutions. Guides, APIs, tutorials, and best practices."
        keywords="documentation, API docs, guides, tutorials, AI documentation, cloud documentation"
      />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Documentation
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive guides, tutorials, and API documentation to help you 
                get the most out of our AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Popular Docs */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Popular Documentation</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularDocs.map((doc, index) => (
                  <a
                    key={index}
                    href={doc.link}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <doc.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {doc.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm">{doc.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Documentation Categories</h2>
              <div className="space-y-8">
                {filteredDocs.map((category, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.docs.map((doc, docIndex) => (
                        <a
                          key={docIndex}
                          href={doc.link}
                          className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                        >
                          <FileText className="w-5 h-5 text-cyan-400" />
                          <div>
                            <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                              {doc.title}
                            </h4>
                            <p className="text-gray-400 text-sm">{doc.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-cyan-400 transition-colors" />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Need Help Getting Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you succeed. Get in touch for 
              personalized assistance and guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Contact Support
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Download PDF Guide
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DocsPage;
