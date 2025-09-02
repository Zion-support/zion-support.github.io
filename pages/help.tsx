import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Search, Book, MessageCircle, Phone, Mail, FileText, Video, Download } from 'lucide-react';
import Link from 'next/link';

const Help: NextPage = () => {
  const helpCategories = [
    {
      title: 'Getting Started',
      icon: Book,
      description: 'Learn the basics and get up and running quickly',
      resources: [
        { title: 'Quick Start Guide', type: 'Guide', icon: FileText },
        { title: 'Video Tutorials', type: 'Video', icon: Video },
        { title: 'Setup Checklist', type: 'Checklist', icon: FileText },
        { title: 'Best Practices', type: 'Guide', icon: Book }
      ]
    },
    {
      title: 'Technical Support',
      icon: MessageCircle,
      description: 'Get help with technical issues and troubleshooting',
      resources: [
        { title: 'Troubleshooting Guide', type: 'Guide', icon: FileText },
        { title: 'API Documentation', type: 'Documentation', icon: Book },
        { title: 'Error Codes Reference', type: 'Reference', icon: FileText },
        { title: 'System Requirements', type: 'Guide', icon: FileText }
      ]
    },
    {
      title: 'Account & Billing',
      icon: Phone,
      description: 'Manage your account, billing, and subscription',
      resources: [
        { title: 'Account Settings', type: 'Guide', icon: FileText },
        { title: 'Billing FAQ', type: 'FAQ', icon: FileText },
        { title: 'Payment Methods', type: 'Guide', icon: FileText },
        { title: 'Invoice Management', type: 'Guide', icon: FileText }
      ]
    },
    {
      title: 'Downloads & Resources',
      icon: Download,
      description: 'Access software, templates, and other resources',
      resources: [
        { title: 'Software Downloads', type: 'Download', icon: Download },
        { title: 'Templates & Samples', type: 'Download', icon: Download },
        { title: 'SDK & Libraries', type: 'Download', icon: Download },
        { title: 'White Papers', type: 'Download', icon: FileText }
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'How to Set Up Your First Project',
      category: 'Getting Started',
      readTime: '5 min read',
      views: '2.3k'
    },
    {
      title: 'Troubleshooting Common Login Issues',
      category: 'Technical Support',
      readTime: '3 min read',
      views: '1.8k'
    },
    {
      title: 'Understanding Your Billing Statement',
      category: 'Account & Billing',
      readTime: '4 min read',
      views: '1.5k'
    },
    {
      title: 'API Integration Best Practices',
      category: 'Technical Support',
      readTime: '8 min read',
      views: '3.1k'
    }
  ];

  return (
    <MainLayout
      title="Help Center - Zion Tech Group"
      description="Get help and support for Zion Tech Group services. Find guides, documentation, and contact our support team."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Search className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Help <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Center</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Find answers, get support, and learn how to make the most of our services.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or topics..."
                className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Popular Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {popularArticles.map((article, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.views} views</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.readTime}</p>
                  <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Read Article →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Browse by Category</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {helpCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="text-blue-600 mr-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                        <p className="text-gray-600">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {category.resources.map((resource, resourceIndex) => {
                        const ResourceIcon = resource.icon;
                        return (
                          <div key={resourceIndex} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center mb-2">
                              <ResourceIcon className="w-4 h-4 text-gray-500 mr-2" />
                              <span className="text-xs text-gray-500">{resource.type}</span>
                            </div>
                            <h4 className="font-medium text-gray-900 text-sm">{resource.title}</h4>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Need Help?</h2>
            <p className="text-lg text-gray-600 mb-12">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-blue-600 mb-4">
                  <MessageCircle className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Live Chat</h3>
                <p className="text-gray-600 mb-6">Get instant help from our support team</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full">
                  Start Chat
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-blue-600 mb-4">
                  <Mail className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email Support</h3>
                <p className="text-gray-600 mb-6">Send us a detailed message</p>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full inline-block"
                >
                  Send Email
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-blue-600 mb-4">
                  <Phone className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phone Support</h3>
                <p className="text-gray-600 mb-6">Speak with our experts directly</p>
                <a
                  href="tel:+13024640950"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full inline-block"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Support Hours</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM EST</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Emergency Support</h4>
                  <p className="text-gray-600">24/7 for critical issues</p>
                  <p className="text-gray-600">Response time: &lt; 1 hour</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Help;