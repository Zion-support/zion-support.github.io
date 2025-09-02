import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { HelpCircle, Search, MessageCircle, Phone, Mail, FileText, Video, BookOpen } from 'lucide-react';
import Link from 'next/link';

const Help: NextPage = () => {
  const faqCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      questions: [
        {
          question: 'How do I get started with Zion Tech Group services?',
          answer: 'Getting started is easy! Simply contact us through our contact form or call us at +1 302 464 0950. We\'ll schedule a consultation to understand your needs and provide a customized solution.'
        },
        {
          question: 'What services do you offer?',
          answer: 'We offer comprehensive technology solutions including AI development, cloud services, micro SaaS solutions, IT services, and custom software development. Visit our services page for detailed information.'
        },
        {
          question: 'Do you work with small businesses?',
          answer: 'Yes! We work with businesses of all sizes, from startups to large enterprises. We have solutions tailored for different business needs and budgets.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: HelpCircle,
      questions: [
        {
          question: 'How can I get technical support?',
          answer: 'You can reach our technical support team through multiple channels: email support@ziontechgroup.com, phone +1 302 464 0950, or through our customer portal.'
        },
        {
          question: 'What are your support hours?',
          answer: 'Our technical support is available 24/7 for critical issues. Standard support is available Monday through Friday, 9 AM to 6 PM EST.'
        },
        {
          question: 'Do you provide training for your solutions?',
          answer: 'Yes, we provide comprehensive training for all our solutions. This includes documentation, video tutorials, and live training sessions.'
        }
      ]
    },
    {
      title: 'Billing & Pricing',
      icon: FileText,
      questions: [
        {
          question: 'What are your pricing models?',
          answer: 'We offer flexible pricing models including project-based pricing, monthly subscriptions, and custom enterprise agreements. Contact us for a personalized quote.'
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes, we offer free initial consultations to understand your needs and provide recommendations. This helps us create the best solution for your business.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, bank transfers, and can accommodate enterprise billing arrangements for larger projects.'
        }
      ]
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: 'Immediate'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate'
    },
    {
      title: 'Email Support',
      description: 'Send us your questions and get detailed responses',
      icon: Mail,
      availability: '24/7',
      responseTime: 'Within 4 hours'
    },
    {
      title: 'Video Support',
      description: 'Schedule a video call for complex issues',
      icon: Video,
      availability: 'By appointment',
      responseTime: 'Same day'
    }
  ];

  return (
    <MainLayout
      title="Help Center - Zion Tech Group"
      description="Get help and support for Zion Tech Group services. Find answers to common questions and contact our support team."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Help Center</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Find answers to your questions and get the support you need.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and FAQs..."
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the support channel that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => {
              const IconComponent = channel.icon;
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{channel.title}</h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    <div>Available: {channel.availability}</div>
                    <div>Response: {channel.responseTime}</div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    Get Help
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to the most common questions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={categoryIndex} className="mb-12">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <IconComponent className="w-6 h-6 text-blue-600 mr-3" />
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access important resources and documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link href="/documentation" className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors">
              <div className="text-blue-600 mb-4">
                <FileText className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600">Comprehensive guides and technical documentation</p>
            </Link>

            <Link href="/api" className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors">
              <div className="text-green-600 mb-4">
                <BookOpen className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">API Reference</h3>
              <p className="text-gray-600">Developer resources and API documentation</p>
            </Link>

            <Link href="/status" className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors">
              <div className="text-purple-600 mb-4">
                <HelpCircle className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">System Status</h3>
              <p className="text-gray-600">Check the current status of our services</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our support team is here to help you succeed. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Contact Support
            </Link>
            <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Help;