import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { BookOpen, Search, ChevronRight, Code, Database, Globe, Shield, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const Documentation: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openSections, setOpenSections] = useState<number[]>([0]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const documentationSections = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      description: 'Learn the basics and get up and running quickly',
      articles: [
        { title: 'Quick Start Guide', url: '/docs/quick-start', description: 'Get started in 5 minutes' },
        { title: 'Installation Guide', url: '/docs/installation', description: 'Install and configure the platform' },
        { title: 'First Project', url: '/docs/first-project', description: 'Create your first project' },
        { title: 'Basic Concepts', url: '/docs/basic-concepts', description: 'Understand core concepts' }
      ]
    },
    {
      title: 'API Reference',
      icon: Code,
      description: 'Complete API documentation and examples',
      articles: [
        { title: 'Authentication', url: '/docs/api/auth', description: 'API authentication methods' },
        { title: 'Endpoints', url: '/docs/api/endpoints', description: 'All available API endpoints' },
        { title: 'Rate Limiting', url: '/docs/api/rate-limiting', description: 'Understanding rate limits' },
        { title: 'Error Handling', url: '/docs/api/errors', description: 'Error codes and responses' }
      ]
    },
    {
      title: 'SDKs & Libraries',
      icon: Database,
      description: 'Official SDKs and client libraries',
      articles: [
        { title: 'JavaScript SDK', url: '/docs/sdk/javascript', description: 'Node.js and browser SDK' },
        { title: 'Python SDK', url: '/docs/sdk/python', description: 'Python client library' },
        { title: 'PHP SDK', url: '/docs/sdk/php', description: 'PHP client library' },
        { title: 'Go SDK', url: '/docs/sdk/go', description: 'Go client library' }
      ]
    },
    {
      title: 'Integrations',
      icon: Globe,
      description: 'Third-party integrations and webhooks',
      articles: [
        { title: 'Webhooks', url: '/docs/integrations/webhooks', description: 'Set up webhook notifications' },
        { title: 'Zapier Integration', url: '/docs/integrations/zapier', description: 'Connect with Zapier' },
        { title: 'Slack Integration', url: '/docs/integrations/slack', description: 'Slack notifications' },
        { title: 'Custom Integrations', url: '/docs/integrations/custom', description: 'Build custom integrations' }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      description: 'Security best practices and guidelines',
      articles: [
        { title: 'Security Overview', url: '/docs/security/overview', description: 'Security architecture' },
        { title: 'Authentication', url: '/docs/security/auth', description: 'Secure authentication' },
        { title: 'Data Protection', url: '/docs/security/data', description: 'Data encryption and protection' },
        { title: 'Compliance', url: '/docs/security/compliance', description: 'Compliance standards' }
      ]
    },
    {
      title: 'Performance',
      icon: Zap,
      description: 'Optimization and performance tuning',
      articles: [
        { title: 'Performance Tips', url: '/docs/performance/tips', description: 'Optimization best practices' },
        { title: 'Caching', url: '/docs/performance/caching', description: 'Caching strategies' },
        { title: 'Monitoring', url: '/docs/performance/monitoring', description: 'Performance monitoring' },
        { title: 'Scaling', url: '/docs/performance/scaling', description: 'Scaling your application' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Playground', url: '/api-playground', description: 'Test API endpoints interactively' },
    { title: 'Status Page', url: '/status', description: 'Check system status and uptime' },
    { title: 'Support', url: '/help', description: 'Get help and support' },
    { title: 'Changelog', url: '/docs/changelog', description: 'Latest updates and changes' }
  ];

  return (
    <MainLayout
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation for Zion Tech Group's APIs, SDKs, and services. Get started quickly with our guides and examples."
      keywords="documentation, API docs, SDK, guides, tutorials, Zion Tech Group, developer resources"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <BookOpen className="w-16 h-16 mx-auto text-blue-400 mb-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Everything you need to integrate with our platform and build amazing applications.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Quick Links
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors group"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{link.description}</p>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors mt-2" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Documentation Sections
              </h2>
              <div className="space-y-6">
                {documentationSections.map((section, sectionIndex) => {
                  const IconComponent = section.icon;
                  const isOpen = openSections.includes(sectionIndex);
                  
                  return (
                    <div key={sectionIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection(sectionIndex)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <div className="flex items-center">
                          <IconComponent className="w-8 h-8 text-blue-600 mr-4" />
                          <div>
                            <h3 className="text-2xl font-semibold text-gray-900">{section.title}</h3>
                            <p className="text-gray-600 mt-1">{section.description}</p>
                          </div>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-6 h-6 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-500" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 border-t border-gray-200">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                            {section.articles.map((article, articleIndex) => (
                              <Link
                                key={articleIndex}
                                href={article.url}
                                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                              >
                                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                  {article.title}
                                </h4>
                                <p className="text-sm text-gray-600">{article.description}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Follow our quick start guide to integrate with our platform in minutes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/docs/quick-start" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Quick Start Guide
                </Link>
                <Link 
                  href="/api-playground" 
                  className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg"
                >
                  Try API Playground
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our developer support team is here to help you succeed with our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/help" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Support
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Documentation;