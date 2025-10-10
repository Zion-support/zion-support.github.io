'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, BookOpen, Code, FileText, Download, ArrowRight, ChevronRight } from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const docCategories = [
    {
      title: 'Getting Started',
      description: 'Essential guides to get you up and running',
      docs: [
        { title: 'Quick Start Guide', description: 'Get started in 5 minutes', link: '/docs/getting-started/quick-start' },
        { title: 'Installation', description: 'Install and configure the platform', link: '/docs/getting-started/installation' },
        { title: 'First Project', description: 'Create your first project', link: '/docs/getting-started/first-project' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      docs: [
        { title: 'Authentication', description: 'API authentication methods', link: '/docs/api/authentication' },
        { title: 'Endpoints', description: 'All available API endpoints', link: '/docs/api/endpoints' },
        { title: 'SDKs', description: 'Client libraries and SDKs', link: '/docs/api/sdks' }
      ]
    },
    {
      title: 'Guides',
      description: 'Step-by-step tutorials and best practices',
      docs: [
        { title: 'AI Integration', description: 'Integrate AI capabilities into your app', link: '/docs/guides/ai-integration' },
        { title: 'Data Management', description: 'Manage and process your data', link: '/docs/guides/data-management' },
        { title: 'Deployment', description: 'Deploy your applications', link: '/docs/guides/deployment' }
      ]
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and solutions',
      docs: [
        { title: 'Common Issues', description: 'Frequently asked questions', link: '/docs/troubleshooting/common-issues' },
        { title: 'Error Codes', description: 'Understanding error messages', link: '/docs/troubleshooting/error-codes' },
        { title: 'Performance', description: 'Optimizing performance', link: '/docs/troubleshooting/performance' }
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

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text-enhanced floating">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find guides, tutorials, and reference materials to help you succeed.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredDocs.map((category, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 h-full border border-slate-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">{category.description}</p>
                    <div className="space-y-3">
                      {category.docs.map((doc, docIndex) => (
                        <Link
                          key={docIndex}
                          to={doc.link}
                          className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors group"
                        >
                          <div>
                            <h4 className="text-white font-medium group-hover:text-purple-400 transition-colors">
                              {doc.title}
                            </h4>
                            <p className="text-gray-400 text-sm">{doc.description}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Quick Links</h2>
              <p className="text-gray-300">Popular documentation sections</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'API Reference',
                  description: 'Complete API documentation',
                  icon: Code,
                  link: '/docs/api/endpoints'
                },
                {
                  title: 'SDKs & Libraries',
                  description: 'Client libraries for popular languages',
                  icon: FileText,
                  link: '/docs/api/sdks'
                },
                {
                  title: 'Download Resources',
                  description: 'Download guides and templates',
                  icon: Download,
                  link: '/docs/downloads'
                }
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Support
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Join Community
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DocsPage;