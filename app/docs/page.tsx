'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Book, Code, Download, Search, Filter, ArrowRight, Clock, User, Tag } from 'lucide-react';

const DocsPage: React.FC = () => {
  const documentationCategories = [
    {
      title: 'Getting Started',
      icon: Book,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', time: '5 min read' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', time: '10 min read' },
        { title: 'First Project', description: 'Create your first AI project', time: '15 min read' },
        { title: 'Configuration', description: 'Configure your environment', time: '8 min read' }
      ]
    },
    {
      title: 'AI Services',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      items: [
        { title: 'AI Analytics API', description: 'Complete API reference for analytics', time: '20 min read' },
        { title: 'Chatbot Integration', description: 'Integrate chatbots into your app', time: '12 min read' },
        { title: 'Machine Learning Models', description: 'Use pre-trained ML models', time: '25 min read' },
        { title: 'Custom AI Training', description: 'Train your own AI models', time: '30 min read' }
      ]
    },
    {
      title: 'IT Services',
      icon: FileText,
      color: 'from-green-500 to-emerald-500',
      items: [
        { title: 'Cloud Migration', description: 'Migrate to cloud infrastructure', time: '45 min read' },
        { title: 'API Development', description: 'Build and deploy APIs', time: '20 min read' },
        { title: 'Database Setup', description: 'Configure databases', time: '15 min read' },
        { title: 'Security Best Practices', description: 'Secure your applications', time: '35 min read' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Download,
      color: 'from-orange-500 to-red-500',
      items: [
        { title: 'Dashboard Setup', description: 'Set up analytics dashboards', time: '10 min read' },
        { title: 'Email Marketing', description: 'Configure email campaigns', time: '8 min read' },
        { title: 'Project Management', description: 'Manage projects with AI', time: '12 min read' },
        { title: 'SEO Optimization', description: 'Optimize for search engines', time: '15 min read' }
      ]
    }
  ];

  const popularDocs = [
    { title: 'AI Analytics Dashboard Setup', views: '2.5k', category: 'AI Services' },
    { title: 'Chatbot Integration Guide', views: '1.8k', category: 'AI Services' },
    { title: 'Cloud Migration Checklist', views: '1.6k', category: 'IT Services' },
    { title: 'API Authentication', views: '1.4k', category: 'IT Services' },
    { title: 'Email Marketing Automation', views: '1.2k', category: 'Micro SAAS' }
  ];

  const recentUpdates = [
    { title: 'New AI Model Released', date: '2 days ago', type: 'Feature' },
    { title: 'API v2.1 Documentation', date: '1 week ago', type: 'Update' },
    { title: 'Security Guidelines Updated', date: '2 weeks ago', type: 'Security' },
    { title: 'New Integration Available', date: '3 weeks ago', type: 'Integration' }
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group | Technical Documentation & Guides</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI and IT services. API references, guides, tutorials, and best practices." />
        <meta name="keywords" content="documentation, API reference, technical guides, tutorials, AI services, IT services" />
        <meta property="og:title" content="Documentation - Zion Tech Group" />
        <meta property="og:description" content="Complete technical documentation and guides for our services" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-enhanced">
                Documentation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technical documentation, API references, guides, and tutorials for all our AI and IT services. 
                Everything you need to get started and succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button-enhanced px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  📞 Call: (302) 464-0950
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  📧 Get Help
                </a>
              </div>
            </div>
          </section>

          {/* Search Section */}
          <section className="mb-16">
            <div className="cyber-card-enhanced holographic-card-enhanced p-8 border border-cyan-400/30">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-4 text-center">Search Documentation</h2>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">API Reference</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Tutorials</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Guides</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">Examples</span>
                </div>
              </div>
            </div>
          </section>

          {/* Documentation Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12 neon-text-enhanced">
              Documentation Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {documentationCategories.map((category, index) => (
                <div
                  key={index}
                  className="cyber-card-enhanced holographic-card-enhanced p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{category.title}</h3>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-b border-white/10 pb-3 last:border-b-0">
                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                        <div className="flex items-center text-xs text-cyan-400">
                          <Clock className="w-3 h-3 mr-1" />
                          {item.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Documentation */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12 neon-text-enhanced">
              Popular Documentation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularDocs.map((doc, index) => (
                <div
                  key={index}
                  className="cyber-card-enhanced holographic-card-enhanced p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{doc.title}</h3>
                    <span className="text-xs text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded-full">
                      {doc.views} views
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Tag className="w-4 h-4 mr-2" />
                    {doc.category}
                  </div>
                  <a
                    href="#"
                    className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Updates */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12 neon-text-enhanced">
              Recent Updates
            </h2>
            <div className="cyber-card-enhanced holographic-card-enhanced p-8 border border-white/10">
              <div className="space-y-4">
                {recentUpdates.map((update, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></div>
                      <div>
                        <h3 className="text-white font-semibold">{update.title}</h3>
                        <p className="text-gray-400 text-sm">{update.date}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      update.type === 'Feature' ? 'bg-green-500/20 text-green-400' :
                      update.type === 'Update' ? 'bg-blue-500/20 text-blue-400' :
                      update.type === 'Security' ? 'bg-red-500/20 text-red-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {update.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card-enhanced holographic-card-enhanced p-8 border border-cyan-400/30">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text-enhanced">
                Need More Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our technical team is here to help with personalized support and guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button-enhanced px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  📞 Call: (302) 464-0950
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  📧 Technical Support
                </a>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  📍 364 E Main St STE 1008, Middletown, DE 19709 | 
                  ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default DocsPage;