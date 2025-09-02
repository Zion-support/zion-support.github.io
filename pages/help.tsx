import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { HelpCircle, Search, MessageCircle, Phone, Mail, BookOpen, Video, FileText } from 'lucide-react';
import Link from 'next/link';

const Help: NextPage = () => {
  const helpCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      description: 'Learn the basics and get up and running quickly',
      topics: [
        { title: 'Account Setup', description: 'How to create and configure your account', href: '/help/account-setup' },
        { title: 'First Steps', description: 'Getting started with our platform', href: '/help/first-steps' },
        { title: 'User Interface Guide', description: 'Understanding the interface and navigation', href: '/help/interface-guide' },
        { title: 'Basic Configuration', description: 'Essential settings and preferences', href: '/help/basic-configuration' }
      ]
    },
    {
      title: 'Services & Features',
      icon: FileText,
      description: 'Detailed guides for all our services and features',
      topics: [
        { title: 'AI Services', description: 'Using our AI-powered solutions', href: '/help/ai-services' },
        { title: 'Cloud Migration', description: 'Migrating to the cloud with our tools', href: '/help/cloud-migration' },
        { title: 'Micro SaaS Solutions', description: 'Working with micro SaaS applications', href: '/help/micro-saas' },
        { title: 'API Integration', description: 'Integrating with our APIs', href: '/help/api-integration' }
      ]
    },
    {
      title: 'Troubleshooting',
      icon: HelpCircle,
      description: 'Common issues and how to resolve them',
      topics: [
        { title: 'Login Issues', description: 'Problems signing in to your account', href: '/help/login-issues' },
        { title: 'Performance Problems', description: 'Slow loading or performance issues', href: '/help/performance' },
        { title: 'Data Sync Issues', description: 'Problems with data synchronization', href: '/help/data-sync' },
        { title: 'Error Messages', description: 'Understanding and resolving error messages', href: '/help/error-messages' }
      ]
    },
    {
      title: 'Video Tutorials',
      icon: Video,
      description: 'Step-by-step video guides for common tasks',
      topics: [
        { title: 'Platform Overview', description: 'Complete platform walkthrough', href: '/help/videos/platform-overview' },
        { title: 'Setting Up Projects', description: 'Creating and managing projects', href: '/help/videos/project-setup' },
        { title: 'User Management', description: 'Managing users and permissions', href: '/help/videos/user-management' },
        { title: 'Advanced Features', description: 'Using advanced platform features', href: '/help/videos/advanced-features' }
      ]
    }
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Available 24/7',
      action: 'Start Chat',
      href: '/contact'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      action: 'Call Now',
      href: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message and we\'ll respond quickly',
      availability: 'Response within 24 hours',
      action: 'Send Email',
      href: 'mailto:support@ziontechgroup.com'
    }
  ];

  const popularArticles = [
    {
      title: 'How to Set Up Your First Project',
      category: 'Getting Started',
      readTime: '5 min read',
      href: '/help/setup-first-project'
    },
    {
      title: 'Understanding AI Service Pricing',
      category: 'Billing',
      readTime: '3 min read',
      href: '/help/ai-pricing'
    },
    {
      title: 'Cloud Migration Best Practices',
      category: 'Cloud Services',
      readTime: '8 min read',
      href: '/help/cloud-migration-best-practices'
    },
    {
      title: 'API Authentication Guide',
      category: 'API',
      readTime: '6 min read',
      href: '/help/api-authentication'
    },
    {
      title: 'Troubleshooting Common Issues',
      category: 'Troubleshooting',
      readTime: '4 min read',
      href: '/help/common-issues'
    }
  ];

  return (
    <MainLayout
      title="Help Center - Zion Tech Group"
      description="Get help and support for Zion Tech Group services. Find answers, tutorials, and contact our support team."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <HelpCircle className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Help <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Center</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Find answers, tutorials, and get support for all Zion Tech Group services and features.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or topics..."
                className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Immediate Help?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our support team is here to help you succeed. Choose the best way to get in touch with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <option.icon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <p className="text-sm text-gray-500 mb-6">{option.availability}</p>
                <a
                  href={option.href}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  {option.action}
                </a>
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
              Most frequently accessed help articles and guides.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                href={article.href}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-sm text-gray-500">{article.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find help organized by topic and service area.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {helpCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {category.topics.map((topic, topicIndex) => (
                    <Link
                      key={topicIndex}
                      href={topic.href}
                      className="block p-4 bg-white rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <h4 className="font-semibold text-gray-900 mb-1">{topic.title}</h4>
                      <p className="text-sm text-gray-600">{topic.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quick answers to the most common questions we receive.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I get started with Zion Tech Group services?</h3>
                <p className="text-gray-600">Getting started is easy! Contact us through our website or call us at +1 302 464 0950 to schedule a free consultation. We'll discuss your needs and create a customized plan for your project.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What kind of support do you provide?</h3>
                <p className="text-gray-600">We provide comprehensive technical support including 24/7 monitoring, troubleshooting, performance optimization, security updates, and user training. Our support team is available through multiple channels.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I track my project progress?</h3>
                <p className="text-gray-600">We provide regular project updates through our client portal, email communications, and scheduled check-in calls. You'll always know the status of your project and any upcoming milestones.</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link
                href="/faq"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View All FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Help;