import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Search, MessageCircle, Phone, Mail, FileText, Video, Book, ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Help: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Simply contact us through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and provide a customized solution proposal.'
    },
    {
      id: 2,
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on the scope and complexity. Simple websites typically take 2-4 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during the planning phase.'
    },
    {
      id: 3,
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! We offer comprehensive support packages including maintenance, updates, monitoring, and technical support. Our support plans are tailored to your specific needs and budget.'
    },
    {
      id: 4,
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern technologies including React, Node.js, Python, AWS, Azure, AI/ML frameworks, and more. Our team stays current with the latest industry trends and best practices.'
    },
    {
      id: 5,
      question: 'How do you ensure data security and privacy?',
      answer: 'We implement industry-standard security measures including encryption, secure coding practices, regular security audits, and compliance with relevant regulations like GDPR and HIPAA.'
    },
    {
      id: 6,
      question: 'Can you help with cloud migration?',
      answer: 'Absolutely! We have extensive experience with cloud migration projects across AWS, Azure, and Google Cloud. We provide assessment, planning, migration, and optimization services.'
    }
  ];

  const helpCategories = [
    {
      title: 'Getting Started',
      icon: Book,
      topics: [
        { name: 'Account Setup', href: '/help/account-setup' },
        { name: 'First Steps', href: '/help/first-steps' },
        { name: 'Service Overview', href: '/help/service-overview' },
        { name: 'Pricing Information', href: '/help/pricing' }
      ]
    },
    {
      title: 'Technical Support',
      icon: MessageCircle,
      topics: [
        { name: 'API Documentation', href: '/help/api-docs' },
        { name: 'Integration Guides', href: '/help/integration' },
        { name: 'Troubleshooting', href: '/help/troubleshooting' },
        { name: 'System Requirements', href: '/help/requirements' }
      ]
    },
    {
      title: 'Billing & Account',
      icon: FileText,
      topics: [
        { name: 'Billing Questions', href: '/help/billing' },
        { name: 'Payment Methods', href: '/help/payment' },
        { name: 'Account Management', href: '/help/account' },
        { name: 'Cancellation Policy', href: '/help/cancellation' }
      ]
    },
    {
      title: 'Training & Resources',
      icon: Video,
      topics: [
        { name: 'Video Tutorials', href: '/help/tutorials' },
        { name: 'Best Practices', href: '/help/best-practices' },
        { name: 'Case Studies', href: '/help/case-studies' },
        { name: 'Webinars', href: '/help/webinars' }
      ]
    }
  ];

  const contactMethods = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      action: 'Start Chat',
      href: '/contact',
      available: 'Available 24/7'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      action: 'Call Now',
      href: 'tel:+13024640950',
      available: 'Mon-Fri 9AM-6PM EST'
    },
    {
      title: 'Email Support',
      description: 'Send us your questions and we\'ll respond quickly',
      icon: Mail,
      action: 'Send Email',
      href: 'mailto:kleber@ziontechgroup.com',
      available: 'Response within 24 hours'
    }
  ];

  return (
    <MainLayout
      title="Help Center - Zion Tech Group"
      description="Get help and support for Zion Tech Group services. Find answers to common questions, access documentation, and contact our support team."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Help <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Center</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Find answers to your questions, access documentation, and get the support you need to succeed.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Help Topics</h2>
            <p className="text-gray-600">Find the information you need organized by category</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {helpCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {category.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>
                        <Link
                          href={topic.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <ChevronRight className="w-4 h-4 mr-2" />
                          {topic.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600">Choose the support method that works best for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:bg-gray-100 transition-colors">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="text-sm text-gray-500 mb-6">{method.available}</p>
                  <Link
                    href={method.href}
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {method.action}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {expandedFaq === faq.id ? (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFaq === faq.id && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our support team is here to help you succeed. Contact us for personalized assistance.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Help;