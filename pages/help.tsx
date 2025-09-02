import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Search, MessageCircle, Phone, Mail, FileText, Video, BookOpen, HelpCircle } from 'lucide-react';

const Help: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: <BookOpen className="w-6 h-6" />,
      questions: [
        {
          question: 'How do I get started with your services?',
          answer: 'Getting started is easy! Contact our sales team through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and provide a customized solution.'
        },
        {
          question: 'What information do I need to provide?',
          answer: 'We\'ll need basic information about your business, current systems, goals, and timeline. Our team will guide you through the process and help identify any additional requirements.'
        },
        {
          question: 'How long does implementation take?',
          answer: 'Implementation timelines vary based on project complexity. Simple projects can be completed in 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during consultation.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: <HelpCircle className="w-6 h-6" />,
      questions: [
        {
          question: 'What support options are available?',
          answer: 'We offer 24/7 technical support through multiple channels: phone, email, live chat, and our support portal. Response times vary by priority level and support plan.'
        },
        {
          question: 'How do I report a technical issue?',
          answer: 'You can report issues through our support portal, email support@ziontechgroup.com, or call our technical support line. Please provide detailed information about the issue for faster resolution.'
        },
        {
          question: 'What is your uptime guarantee?',
          answer: 'We guarantee 99.9% uptime for all our services. If we fail to meet this standard, you may be eligible for service credits as outlined in our SLA.'
        }
      ]
    },
    {
      title: 'Billing & Account',
      icon: <FileText className="w-6 h-6" />,
      questions: [
        {
          question: 'How does billing work?',
          answer: 'Billing varies by service type. Subscription services are billed monthly or annually in advance. Project-based services are billed according to agreed milestones or time and materials.'
        },
        {
          question: 'Can I change my plan?',
          answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle, and we\'ll prorate any differences.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, ACH transfers, and wire transfers. Enterprise clients may also be eligible for net payment terms.'
        }
      ]
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: <MessageCircle className="w-8 h-8" />,
      availability: '24/7',
      responseTime: '< 2 minutes'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: <Phone className="w-8 h-8" />,
      availability: '24/7',
      responseTime: 'Immediate'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      icon: <Mail className="w-8 h-8" />,
      availability: '24/7',
      responseTime: '< 4 hours'
    },
    {
      title: 'Video Call',
      description: 'Schedule a screen sharing session for complex issues',
      icon: <Video className="w-8 h-8" />,
      availability: 'Business Hours',
      responseTime: 'Scheduled'
    }
  ];

  const popularArticles = [
    'Setting up your first project',
    'Understanding our API documentation',
    'Troubleshooting common login issues',
    'Configuring email notifications',
    'Managing user permissions',
    'Backing up your data',
    'Integrating third-party tools',
    'Monitoring system performance'
  ];

  return (
    <MainLayout
      title="Help Center - Zion Tech Group"
      description="Get help and support for all Zion Tech Group services. Find answers, documentation, and contact our support team."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Help <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Center</span>
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
                placeholder="Search for help articles, guides, and FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg border-0 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the support channel that works best for you. We're here to help 24/7.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <div className="space-y-1 text-sm text-gray-500">
                  <div><strong>Available:</strong> {channel.availability}</div>
                  <div><strong>Response:</strong> {channel.responseTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to the most common questions about our services.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="text-blue-600 mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our most helpful articles and guides.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularArticles.map((article, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer">
                <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  {article}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our support team is ready to assist you with any questions or issues you may have.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+13024640950" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Call Support
            </a>
            <a href="mailto:support@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Email Support
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Help;