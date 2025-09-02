import React from
  'react';
import type { NextPage } from
  'next';
import MainLayout from
  '../components/layout/MainLayout';
import { Search, Book, Video, MessageCircle, Phone, Mail, FileText, Download } from
  'lucide-react';
import Link from
  'next/link';const Help: NextPage = () => {
  const helpCategories = [
    {
icon: Book, title:,
  Getting Started', '
      description: 'Learn the basics and get up and running quickly,'
      articles: [
  'Welcome to Zion Tech Group', 'Setting up your account',
  'Understanding our services', 'First steps guide']
    }, {
      icon: FileText,
title:, User Guides','
      description: 'Detailed guides for using our services, '
      articles: [
  'Service management',
  'Account settings', 'Billing and payments',
  'Security best practices']
    }, {
      icon: Video,
title:, Video Tutorials','
      description: 'Watch step-by-step video tutorials, '
      articles: [
  'Platform overview',
  'Service configuration', 'Troubleshooting common issues',
  'Advanced features']
    }, {
      icon: MessageCircle,
title:, FAQ','
      description: 'Frequently asked questions and answers, '
      articles: [,
  General questions', '
  'Technical support',
  'Billing questions', 'Service-specific FAQs']
    }
  ]

  const popularArticles = [
    {
title: 'How to get started with our services, '
      category:,
  Getting Started', '
      views: '1.2k views'
    },
    {
      title:, Understanding your billing and payments','
      category: 'Billing, '
      views:,
  890 views''
    }, {
      title: 'Setting up two-factor authentication,'
      category:, Security','
      views: '756 views'
    }, {
      title:,
  Troubleshooting common login issues', '
      category: 'Technical,'
      views:, 634 views''
    },
    {
      title: 'Managing your account settings, '
      category:,
  Account', '
      views: '521 views'}
  ]

  const supportOptions = [
    {
icon: MessageCircle, title:,
  Live Chat', '
      description: 'Get instant help from our support team,'
      availability:, Available 24/7','
      action: 'Start Chat'
    }, {
      icon: Phone,
      title:, Phone Support','
      description: 'Speak directly with our technical experts, '
      availability:,
  Mon-Fri 9AM-6PM EST', '
      action: 'Call +1 302 464 0950'
    },
    {
      icon: Mail, title:,
  Email Support', '
      description: 'Send us your questions and get detailed responses,'
      availability:, Response within 24 hours','
      action: 'Send Email'}
  ];

  return (
    <MainLayout
      title="Help Center - Zion Tech Group"
      description="Get help and support for Zion Tech Group services. Find guides, tutorials, FAQs, and contact our support team for assistance."
      keywords="help center, support, documentation, tutorials, FAQ, customer service"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md: text-5xl font-bold mb-6">Help Center</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Find answers, get support, and learn how to make the most of our services. 
              We&aposre here to help you succeed.''
            </p>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or FAQs..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Help Topics</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find the information you need organized by topic and category.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {helpCategories.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover: shadow-lg transition-shadow">
                  <category.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.articles.map((article, idx) => (
                      <li key={idx}>
                        <Link href="#" className="text-blue-600 hover: text-blue-700 text-sm">
                          {article}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Articles</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Most viewed help articles and guides from our community.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {popularArticles.map((article, index) => (
                  <div key={index} className="border-b border-gray-200 last: border-b-0">
                    <div className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            <Link href="#" className="hover:text-blue-600">
                              {article.title}
                            </Link>
                          </h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-3">
                              {article.category}
                            </span>
                            <span>{article.views}</span>
                          </div>
                        </div>
                        <Download className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Need More Help?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our support team is ready to assist you with any questions or issues.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-4xl mx-auto">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover: shadow-lg transition-shadow">
                  <option.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-3">{option.description}</p>
                  <p className="text-sm text-gray-500 mb-4">{option.availability}</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    {option.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Access important resources and information quickly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <Link href="/faq" className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">FAQ</h3>
                <p className="text-gray-600 text-sm">Frequently asked questions</p>
              </Link>
              
              <Link href="/documentation" className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
                <p className="text-gray-600 text-sm">Technical documentation</p>
              </Link>
              
              <Link href="/status" className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">System Status</h3>
                <p className="text-gray-600 text-sm">Check service status</p>
              </Link>
              
              <Link href="/contact" className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600 text-sm">Get in touch</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Help;