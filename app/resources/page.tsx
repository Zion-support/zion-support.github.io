import React from 'react'
import { Helmet } from 'react-helmet-async';
import Layout from '../layout'
import { BookOpen, Code, HelpCircle, Users, Activity, Newspaper, ArrowRight, ExternalLink, FileText, Video, Download, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and technical documentation for all our services.',
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      path: '/docs',
      items: [
        'Getting Started Guide',
        'API Documentation',
        'Integration Tutorials',
        'Best Practices'
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation with examples and code snippets.',
      icon: <Code className="w-8 h-8 text-green-500" />,
      path: '/api-docs',
      items: [
        'REST API Endpoints',
        'Authentication Guide',
        'Rate Limiting',
        'SDK Downloads'
      ]
    },
    {
      title: 'Help Center',
      description: 'Find answers to common questions and get support.',
      icon: <HelpCircle className="w-8 h-8 text-purple-500" />,
      path: '/help',
      items: [
        'Frequently Asked Questions',
        'Troubleshooting Guides',
        'Video Tutorials',
        'Contact Support'
      ]
    },
    {
      title: 'Community',
      description: 'Connect with other users and share knowledge.',
      icon: <Users className="w-8 h-8 text-orange-500" />,
      path: '/community',
      items: [
        'Developer Forum',
        'User Groups',
        'Events & Webinars',
        'Success Stories'
      ]
    },
    {
      title: 'Status Page',
      description: 'Real-time status updates for all our services.',
      icon: <Activity className="w-8 h-8 text-red-500" />,
      path: '/status',
      items: [
        'Service Status',
        'Incident Reports',
        'Maintenance Windows',
        'Performance Metrics'
      ]
    },
    {
      title: 'Press Kit',
      description: 'Media resources and company information.',
      icon: <Newspaper className="w-8 h-8 text-indigo-500" />,
      path: '/press',
      items: [
        'Press Releases',
        'Company Logos',
        'Executive Photos',
        'Media Contact'
      ]
    }
  ]

  const quickLinks = [
    { title: 'Quick Start Guide', path: '/docs/quick-start', icon: <FileText className="w-5 h-5" /> },
    { title: 'API Examples', path: '/api-docs/examples', icon: <Code className="w-5 h-5" /> },
    { title: 'Video Tutorials', path: '/help/tutorials', icon: <Video className="w-5 h-5" /> },
    { title: 'Download SDKs', path: '/api-docs/sdks', icon: <Download className="w-5 h-5" /> }
  ]

  return (
    <Layout
      title="Resources - Zion Tech Group"
      description="Access comprehensive resources including documentation, API references, help center, and community support for Zion Tech Group services."
      keywords="resources, documentation, API reference, help center, community, support, tutorials, guides"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Resources &
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Support
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Everything you need to get started with our services. From comprehensive documentation
              to community support, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/docs"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/help"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Need Help?
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quick Links
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Jump to the most popular resources and get started quickly.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    {link.icon}
                    <h3 className="text-lg font-semibold text-white ml-3 group-hover:text-purple-300 transition-colors">
                      {link.title}
                    </h3>
                  </div>
                  <div className="flex items-center text-gray-400 group-hover:text-white transition-colors">
                    <span className="text-sm">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Resource Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of resources organized by category.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white ml-4 group-hover:text-purple-300 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={category.path}
                    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center group-hover:scale-105 transform"
                  >
                    Explore {category.title}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Search through our comprehensive knowledge base or contact our support team.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation, guides, and FAQs..."
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Still Need Help?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Our support team is here to help you succeed. Contact us for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Contact Support
                  </Link>
                  <Link
                    to="/help"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Browse Help Center
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  </div></div>)
}

export default ResourcesPage