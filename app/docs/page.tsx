import React from 'react';
import { Book, Code, FileText, Users, Zap, Shield } from 'lucide-react';

const DocumentationPage: React.FC = () => {
  const docCategories = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Quick start guides and tutorials to get you up and running',
      articles: [
        'Introduction to Zion Tech Group',
        'Setting up your account',
        'First steps with AI services',
        'Understanding our platform'
      ]
    },
    {
      icon: Code,
      title: 'API Documentation',
      description: 'Complete API reference and integration guides',
      articles: [
        'API Authentication',
        'REST API Reference',
        'Webhook Integration',
        'SDK Documentation'
      ]
    },
    {
      icon: FileText,
      title: 'User Guides',
      description: 'Step-by-step guides for using our services',
      articles: [
        'AI Services User Guide',
        'Micro SAAS Applications',
        'Account Management',
        'Billing and Subscriptions'
      ]
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Working with teams and managing permissions',
      articles: [
        'Team Management',
        'User Roles and Permissions',
        'Sharing and Collaboration',
        'Workspace Settings'
      ]
    },
    {
      icon: Zap,
      title: 'Advanced Features',
      description: 'Advanced configuration and customization options',
      articles: [
        'Custom AI Models',
        'Advanced Analytics',
        'Integration Options',
        'Performance Optimization'
      ]
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Security best practices and compliance information',
      articles: [
        'Security Overview',
        'Data Protection',
        'Compliance Standards',
        'Privacy Controls'
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Reference', url: '/api-docs', description: 'Complete API documentation' },
    { title: 'SDK Downloads', url: '/sdk', description: 'Download our SDKs' },
    { title: 'Status Page', url: '/status', description: 'Service status and uptime' },
    { title: 'Support Center', url: '/support', description: 'Get help and support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Everything you need to know about our AI and IT solutions. Find guides, tutorials, 
            API references, and best practices to help you succeed.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-6 py-4 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Documentation Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <ul className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex} className="flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                      {article}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 block"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-gray-600 text-sm">{link.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Popular Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Getting Started with AI Services</h3>
              <p className="text-gray-300 mb-4">
                Learn how to set up and use our AI services to transform your business operations.
              </p>
              <div className="text-sm text-cyan-400">5 min read • Updated 2 days ago</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">API Integration Guide</h3>
              <p className="text-gray-300 mb-4">
                Complete guide to integrating our APIs into your existing applications and workflows.
              </p>
              <div className="text-sm text-cyan-400">10 min read • Updated 1 week ago</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Security Best Practices</h3>
              <p className="text-gray-300 mb-4">
                Essential security practices to protect your data and ensure compliance.
              </p>
              <div className="text-sm text-cyan-400">8 min read • Updated 3 days ago</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Troubleshooting Common Issues</h3>
              <p className="text-gray-300 mb-4">
                Solutions to common problems and frequently asked questions.
              </p>
              <div className="text-sm text-cyan-400">6 min read • Updated 1 week ago</div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Help?
          </h2>
          <p className="text-purple-100 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="/consultation"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;