import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Book, Search, FileText, Code, Video, Users, ArrowRight, CheckCircle } from 'lucide-react';

const DocsPage = () => {
  const docCategories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions',
      icon: <ArrowRight className="w-6 h-6" />,
      articles: ['Installation Guide', 'First Steps', 'Account Setup', 'Basic Configuration']
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: <Code className="w-6 h-6" />,
      articles: ['Authentication', 'Endpoints', 'SDKs', 'Rate Limits']
    },
    {
      title: 'User Guides',
      description: 'Step-by-step tutorials for all features',
      icon: <FileText className="w-6 h-6" />,
      articles: ['Dashboard Overview', 'Creating Reports', 'Managing Users', 'Settings']
    },
    {
      title: 'Video Tutorials',
      description: 'Visual guides and walkthroughs',
      icon: <Video className="w-6 h-6" />,
      articles: ['Product Tour', 'Feature Demos', 'Best Practices', 'Troubleshooting']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Documentation - Zion Tech Group | AI Solutions Documentation</title>
        <meta name="description" content="Comprehensive documentation for our AI solutions and micro SAAS products. Get started quickly with our guides and tutorials." />
        <meta name="keywords" content="documentation, API docs, user guides, tutorials, AI documentation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Documentation
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Comprehensive guides, tutorials, and API documentation to help you get the most out of our AI solutions.
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {docCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-300 text-sm text-center mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex} className="flex items-center text-sm text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                      <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                      {article}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need More Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/support"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              <Users className="w-5 h-5 mr-2" />
              Contact Support
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              <Video className="w-5 h-5 mr-2" />
              Watch Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;