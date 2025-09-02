import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { HelpCircle, Search, MessageCircle, Phone, Mail, BookOpen, Video, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const Help: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const helpCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      articles: [
        { title: 'How to get started with Zion Tech Group', url: '/help/getting-started' },
        { title: 'Setting up your account', url: '/help/account-setup' },
        { title: 'Understanding our services', url: '/help/understanding-services' },
        { title: 'First steps after signing up', url: '/help/first-steps' }
      ]
    },
    {
      title: 'Account & Billing',
      icon: FileText,
      articles: [
        { title: 'Managing your account settings', url: '/help/account-settings' },
        { title: 'Understanding billing and payments', url: '/help/billing-payments' },
        { title: 'Upgrading or downgrading your plan', url: '/help/plan-changes' },
        { title: 'Canceling your subscription', url: '/help/cancel-subscription' }
      ]
    },
    {
      title: 'Technical Support',
      icon: HelpCircle,
      articles: [
        { title: 'Troubleshooting common issues', url: '/help/troubleshooting' },
        { title: 'API documentation and guides', url: '/help/api-docs' },
        { title: 'Integration help and examples', url: '/help/integrations' },
        { title: 'Performance optimization tips', url: '/help/performance' }
      ]
    },
    {
      title: 'Video Tutorials',
      icon: Video,
      articles: [
        { title: 'Platform overview and navigation', url: '/help/video-overview' },
        { title: 'Setting up your first project', url: '/help/video-setup' },
        { title: 'Advanced features walkthrough', url: '/help/video-advanced' },
        { title: 'Best practices and tips', url: '/help/video-best-practices' }
      ]
    }
  ];

  const popularArticles = [
    { title: 'How to contact our support team', url: '/help/contact-support' },
    { title: 'Understanding our service levels', url: '/help/service-levels' },
    { title: 'Security and data protection', url: '/help/security' },
    { title: 'Frequently asked questions', url: '/faq' },
    { title: 'System status and maintenance', url: '/status' }
  ];

  return (
    <MainLayout
      title="Help Center - Zion Tech Group"
      description="Get help and support for Zion Tech Group's services. Find answers, tutorials, and contact our support team."
      keywords="help, support, documentation, tutorials, FAQ, Zion Tech Group, customer service"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <HelpCircle className="w-16 h-16 mx-auto text-blue-400 mb-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Help Center
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Find answers, get support, and learn how to make the most of our services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                How can we help you today?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link 
                  href="/contact" 
                  className="bg-blue-50 hover:bg-blue-100 p-6 rounded-lg text-center transition-colors group"
                >
                  <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-gray-600">Chat with our support team in real-time</p>
                </Link>
                
                <Link 
                  href="tel:+13024640950" 
                  className="bg-green-50 hover:bg-green-100 p-6 rounded-lg text-center transition-colors group"
                >
                  <Phone className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600">Speak directly with our experts</p>
                </Link>
                
                <Link 
                  href="mailto:support@ziontechgroup.com" 
                  className="bg-purple-50 hover:bg-purple-100 p-6 rounded-lg text-center transition-colors group"
                >
                  <Mail className="w-12 h-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600">Send us your questions via email</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Popular Articles
              </h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <ul className="space-y-4">
                  {popularArticles.map((article, index) => (
                    <li key={index}>
                      <Link 
                        href={article.url}
                        className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <span className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                          {article.title}
                        </span>
                        <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Browse Help Topics
              </h2>
              <div className="space-y-6">
                {helpCategories.map((category, categoryIndex) => {
                  const IconComponent = category.icon;
                  const isOpen = openSections.includes(categoryIndex);
                  
                  return (
                    <div key={categoryIndex} className="bg-gray-50 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection(categoryIndex)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <div className="flex items-center">
                          <IconComponent className="w-8 h-8 text-blue-600 mr-4" />
                          <h3 className="text-2xl font-semibold text-gray-900">{category.title}</h3>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-6 h-6 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-500" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {category.articles.map((article, articleIndex) => (
                              <Link
                                key={articleIndex}
                                href={article.url}
                                className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow group"
                              >
                                <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {article.title}
                                </h4>
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

        {/* Contact Support */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our support team is here to help you succeed. Get in touch with us today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Support
              </Link>
              <Link 
                href="/status" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg"
              >
                Check System Status
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Help;