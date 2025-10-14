import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  DocumentTextIcon,
  CodeBracketIcon,
  CogIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const DocumentationPage: React.FC = () => {
  const categories = [
    {
      title: 'Getting Started',
      icon: DocumentTextIcon,
      description: 'Quick start guides and setup instructions',
      articles: [
        { title: 'Quick Start Guide', href: '/docs/quick-start' },
        { title: 'Installation Guide', href: '/docs/installation' },
        { title: 'Configuration', href: '/docs/configuration' },
        { title: 'First Steps', href: '/docs/first-steps' }
      ]
    },
    {
      title: 'API Reference',
      icon: CodeBracketIcon,
      description: 'Complete API documentation and examples',
      articles: [
        { title: 'Authentication', href: '/docs/api/auth' },
        { title: 'Endpoints', href: '/docs/api/endpoints' },
        { title: 'SDKs', href: '/docs/api/sdks' },
        { title: 'Rate Limits', href: '/docs/api/rate-limits' }
      ]
    },
    {
      title: 'AI Solutions',
      icon: CpuChipIcon,
      description: 'AI and machine learning documentation',
      articles: [
        { title: 'AI Models', href: '/docs/ai/models' },
        { title: 'Training Data', href: '/docs/ai/training' },
        { title: 'Inference', href: '/docs/ai/inference' },
        { title: 'Best Practices', href: '/docs/ai/best-practices' }
      ]
    },
    {
      title: 'Cloud Infrastructure',
      icon: CloudIcon,
      description: 'Cloud setup and management guides',
      articles: [
        { title: 'AWS Setup', href: '/docs/cloud/aws' },
        { title: 'Azure Configuration', href: '/docs/cloud/azure' },
        { title: 'GCP Deployment', href: '/docs/cloud/gcp' },
        { title: 'Monitoring', href: '/docs/cloud/monitoring' }
      ]
    },
    {
      title: 'Security',
      icon: ShieldCheckIcon,
      description: 'Security guidelines and best practices',
      articles: [
        { title: 'Security Overview', href: '/docs/security/overview' },
        { title: 'Authentication', href: '/docs/security/auth' },
        { title: 'Data Protection', href: '/docs/security/data' },
        { title: 'Compliance', href: '/docs/security/compliance' }
      ]
    },
    {
      title: 'Integration',
      icon: CogIcon,
      description: 'Integration guides and tutorials',
      articles: [
        { title: 'Webhooks', href: '/docs/integration/webhooks' },
        { title: 'Third-party APIs', href: '/docs/integration/apis' },
        { title: 'SDKs', href: '/docs/integration/sdks' },
        { title: 'Troubleshooting', href: '/docs/integration/troubleshooting' }
      ]
    }
  ];

  const popularArticles = [
    { title: 'Quick Start Guide', href: '/docs/quick-start', category: 'Getting Started' },
    { title: 'API Authentication', href: '/docs/api/auth', category: 'API Reference' },
    { title: 'AI Model Training', href: '/docs/ai/training', category: 'AI Solutions' },
    { title: 'AWS Setup Guide', href: '/docs/cloud/aws', category: 'Cloud Infrastructure' },
    { title: 'Security Best Practices', href: '/docs/security/overview', category: 'Security' }
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI and IT solutions. Find guides, API references, and tutorials." />
        <meta name="keywords" content="documentation, API docs, guides, tutorials, AI documentation, cloud documentation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Documentation
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive guides, API references, and tutorials to help you get the most out of our solutions.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Popular Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with these popular articles to get up and running quickly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map((article, index) => (
                <Link
                  key={index}
                  to={article.href}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-lg border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{article.category}</p>
                  <div className="flex items-center text-purple-400 group-hover:text-purple-300 font-semibold">
                    Read More <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find the information you need organized by topic and use case.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <div className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <Link
                        key={articleIndex}
                        to={article.href}
                        className="block text-gray-400 hover:text-purple-300 transition-colors py-2 border-b border-slate-700 hover:border-purple-500"
                      >
                        {article.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-3">Community Forum</h3>
                <p className="text-gray-300 mb-4">Get help from our community and share your experiences.</p>
                <Link to="/support" className="text-purple-400 hover:text-purple-300 font-semibold">
                  Visit Forum →
                </Link>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-3">Contact Support</h3>
                <p className="text-gray-300 mb-4">Get direct help from our technical support team.</p>
                <Link to="/contact" className="text-purple-400 hover:text-purple-300 font-semibold">
                  Contact Us →
                </Link>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-3">Schedule Demo</h3>
                <p className="text-gray-300 mb-4">See our solutions in action with a personalized demo.</p>
                <Link to="/demo" className="text-purple-400 hover:text-purple-300 font-semibold">
                  Book Demo →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DocumentationPage;