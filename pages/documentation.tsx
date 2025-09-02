import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { BookOpen, Code, Database, Cloud, Shield, Smartphone, Search, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const Documentation: NextPage = () => {
  const documentationCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      description: 'Quick start guides and setup instructions',
      guides: [
        { title: 'Quick Start Guide', description: 'Get up and running in minutes', difficulty: 'Beginner' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', difficulty: 'Beginner' },
        { title: 'Configuration', description: 'Configure your environment', difficulty: 'Intermediate' },
        { title: 'First Project', description: 'Create your first project', difficulty: 'Beginner' }
      ]
    },
    {
      title: 'API Reference',
      icon: Code,
      description: 'Complete API documentation and examples',
      guides: [
        { title: 'Authentication', description: 'API authentication methods', difficulty: 'Intermediate' },
        { title: 'Endpoints', description: 'Complete API endpoint reference', difficulty: 'Advanced' },
        { title: 'SDKs', description: 'Software development kits', difficulty: 'Intermediate' },
        { title: 'Rate Limits', description: 'API rate limiting and quotas', difficulty: 'Intermediate' }
      ]
    },
    {
      title: 'Cloud Services',
      icon: Cloud,
      description: 'Cloud infrastructure and deployment guides',
      guides: [
        { title: 'Deployment Guide', description: 'Deploy to cloud platforms', difficulty: 'Advanced' },
        { title: 'Scaling', description: 'Scale your applications', difficulty: 'Advanced' },
        { title: 'Monitoring', description: 'Monitor your cloud resources', difficulty: 'Intermediate' },
        { title: 'Security', description: 'Cloud security best practices', difficulty: 'Advanced' }
      ]
    },
    {
      title: 'Database',
      icon: Database,
      description: 'Database setup and management',
      guides: [
        { title: 'Database Setup', description: 'Configure your database', difficulty: 'Intermediate' },
        { title: 'Migrations', description: 'Database migration strategies', difficulty: 'Advanced' },
        { title: 'Performance', description: 'Optimize database performance', difficulty: 'Advanced' },
        { title: 'Backup & Recovery', description: 'Data backup and recovery', difficulty: 'Intermediate' }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      description: 'Security implementation and best practices',
      guides: [
        { title: 'Authentication', description: 'Implement secure authentication', difficulty: 'Advanced' },
        { title: 'Authorization', description: 'Role-based access control', difficulty: 'Advanced' },
        { title: 'Data Protection', description: 'Protect sensitive data', difficulty: 'Advanced' },
        { title: 'Compliance', description: 'Meet compliance requirements', difficulty: 'Advanced' }
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      description: 'Mobile app development guides',
      guides: [
        { title: 'Mobile SDK', description: 'Mobile development SDK', difficulty: 'Intermediate' },
        { title: 'Cross-Platform', description: 'Cross-platform development', difficulty: 'Advanced' },
        { title: 'Push Notifications', description: 'Implement push notifications', difficulty: 'Intermediate' },
        { title: 'App Store', description: 'Publish to app stores', difficulty: 'Intermediate' }
      ]
    }
  ];

  const popularGuides = [
    { title: 'Quick Start Guide', category: 'Getting Started', views: '12.5k', rating: 4.8 },
    { title: 'API Authentication', category: 'API Reference', views: '8.2k', rating: 4.7 },
    { title: 'Cloud Deployment', category: 'Cloud Services', views: '6.8k', rating: 4.9 },
    { title: 'Database Setup', category: 'Database', views: '5.4k', rating: 4.6 },
    { title: 'Security Best Practices', category: 'Security', views: '4.9k', rating: 4.8 }
  ];

  return (
    <MainLayout
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation and guides for Zion Tech Group services and APIs."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Documentation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Comprehensive guides, tutorials, and API references to help you build amazing solutions.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Guides</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most viewed and highly rated documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {popularGuides.map((guide, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {guide.category}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <span className="text-sm font-semibold mr-1">{guide.rating}</span>
                    <span className="text-sm text-gray-500">({guide.views} views)</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{guide.title}</h3>
                <div className="flex items-center justify-between">
                  <Link href={`/docs/${guide.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:text-blue-700 font-semibold">
                    Read Guide
                  </Link>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Documentation Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our comprehensive documentation by category.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentationCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={categoryIndex} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="text-blue-600 mb-4">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {category.guides.map((guide, guideIndex) => (
                      <div key={guideIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gray-900">{guide.title}</h4>
                          <p className="text-sm text-gray-600">{guide.description}</p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' :
                          guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-red-100 text-red-600'
                        }`}>
                          {guide.difficulty}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/docs/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    View All Guides
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Download Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Download Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download SDKs, tools, and offline documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">JavaScript SDK</h3>
              <p className="text-gray-600 mb-4">Latest version: 2.1.0</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Download
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Download className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Python SDK</h3>
              <p className="text-gray-600 mb-4">Latest version: 1.8.2</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Download
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Download className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Postman Collection</h3>
              <p className="text-gray-600 mb-4">API testing collection</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Download
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Download className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">PDF Documentation</h3>
              <p className="text-gray-600 mb-4">Complete offline guide</p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Download
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need More Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/help" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Help Center
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Documentation;