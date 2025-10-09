'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      category: 'Documentation',
      items: [
        { title: 'API Documentation', description: 'Complete API reference and guides', link: '/api-docs' },
        { title: 'Developer Guide', description: 'Getting started with our platform', link: '/docs' },
        { title: 'Integration Examples', description: 'Code samples and tutorials', link: '/examples' },
      ]
    },
    {
      category: 'Learning',
      items: [
        { title: 'Blog', description: 'Latest insights and industry trends', link: '/blog' },
        { title: 'Case Studies', description: 'Real-world success stories', link: '/case-studies' },
        { title: 'Webinars', description: 'Live training sessions', link: '/webinars' },
      ]
    },
    {
      category: 'Support',
      items: [
        { title: 'Help Center', description: 'Frequently asked questions', link: '/help' },
        { title: 'Status Page', description: 'System status and uptime', link: '/status' },
        { title: 'Contact Support', description: 'Get help from our experts', link: '/support' },
      ]
    },
    {
      category: 'Tools',
      items: [
        { title: 'Developer Tools', description: 'SDKs and development utilities', link: '/developer-tools' },
        { title: 'Analytics Dashboard', description: 'Monitor your usage and performance', link: '/analytics' },
        { title: 'API Explorer', description: 'Test API endpoints interactively', link: '/api-explorer' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Resources
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to succeed with Zion Tech Group. Documentation, guides, tools, and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {resources.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    href={item.link}
                    className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our support team is here to help you find the resources you need.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
          >
            Contact Support
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesPage;