import React from 'react';
import { BookOpen, Search, ArrowRight, Code, FileText, Settings } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';

const DocsPage = () => {
  const docCategories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and basic setup instructions',
      icon: <BookOpen className="w-8 h-8" />,
      articles: [
        'Installation Guide',
        'First Steps',
        'Configuration',
        'Troubleshooting'
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and endpoints',
      icon: <Code className="w-8 h-8" />,
      articles: [
        'Authentication',
        'Endpoints',
        'Response Formats',
        'Error Handling'
      ]
    },
    {
      title: 'User Guides',
      description: 'Step-by-step tutorials and how-to guides',
      icon: <FileText className="w-8 h-8" />,
      articles: [
        'Dashboard Overview',
        'Creating Projects',
        'Managing Users',
        'Analytics Setup'
      ]
    },
    {
      title: 'Administration',
      description: 'System administration and configuration',
      icon: <Settings className="w-8 h-8" />,
      articles: [
        'System Requirements',
        'Security Settings',
        'Backup & Recovery',
        'Performance Tuning'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Documentation - Zion Tech Group | Complete Guide"
        description="Comprehensive documentation for all Zion Tech Group products and services. Find guides, API references, and tutorials to get started quickly."
        keywords="documentation, API docs, user guides, tutorials, getting started, help center"
        canonical="https://ziontechgroup.com/docs"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Documentation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Everything you need to know about our products and services. Find guides, tutorials, and API references.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {docCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-gray-300 text-center mb-6">{category.description}</p>
                
                <div className="space-y-2 mb-6">
                  {category.articles.map((article, articleIndex) => (
                    <div key={articleIndex} className="flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">
                      <ArrowRight className="w-3 h-3 mr-2" />
                      <span>{article}</span>
                    </div>
                  ))}
                </div>
                
                <FuturisticButton
                  variant="outline"
                  size="sm"
                  to="/contact"
                  className="w-full"
                >
                  View All
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quick Start Guide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get up and running with our products in just a few minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sign Up</h3>
              <p className="text-gray-300">Create your account and verify your email address.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Configure</h3>
              <p className="text-gray-300">Set up your project and configure your preferences.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Deploy</h3>
              <p className="text-gray-300">Deploy your solution and start using our services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              variant="primary"
              size="lg"
              to="/support"
            >
              Contact Support
            </FuturisticButton>
            <FuturisticButton
              variant="outline"
              size="lg"
              to="/contact"
            >
              Schedule a Call
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;