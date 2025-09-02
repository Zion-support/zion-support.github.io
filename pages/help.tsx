import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { HelpCircle, Search, MessageCircle, Phone, Mail, FileText, Video, BookOpen, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Help: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      faqs: [
        {
          question: 'How do I get started with Zion Tech Group services?',
          answer: 'Getting started is easy! Simply contact us through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and provide a customized solution proposal.'
        },
        {
          question: 'What services does Zion Tech Group offer?',
          answer: 'We offer a comprehensive range of technology services including AI development, quantum computing solutions, cybersecurity, digital transformation, micro SaaS development, and cloud architecture services.'
        },
        {
          question: 'Do you provide free consultations?',
          answer: 'Yes, we offer free initial consultations to discuss your project requirements and determine how we can help your business achieve its technology goals.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: HelpCircle,
      faqs: [
        {
          question: 'How can I get technical support for my project?',
          answer: 'Our technical support team is available 24/7. You can reach us through our support portal, email support@ziontechgroup.com, or call our technical support hotline.'
        },
        {
          question: 'What is your response time for technical issues?',
          answer: 'We guarantee a response within 2 hours for critical issues and within 24 hours for non-critical support requests. Our SLA ensures minimal downtime for your operations.'
        },
        {
          question: 'Do you provide remote support?',
          answer: 'Yes, we offer comprehensive remote support services including system monitoring, troubleshooting, and maintenance to ensure optimal performance of your technology solutions.'
        }
      ]
    },
    {
      title: 'Billing & Pricing',
      icon: FileText,
      faqs: [
        {
          question: 'What are your pricing models?',
          answer: 'We offer flexible pricing models including project-based pricing, retainer agreements, and subscription-based services. Pricing depends on the scope and complexity of your project.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans for larger projects. We can work with you to create a payment schedule that fits your budget and project timeline.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, bank transfers, and corporate purchase orders. We also accept cryptocurrency payments for certain services.'
        }
      ]
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (555) 123-4567',
      availability: '24/7 Support Available',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2 hours',
      action: 'Send Email'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST',
      action: 'Start Chat'
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/documentation'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and tutorials',
      link: '/tutorials'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      link: '/knowledge-base'
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <MainLayout
      title="Help Center - Zion Tech Group"
      description="Get help and support for Zion Tech Group services. Find answers to common questions, access documentation, and contact our support team."
      keywords="help center, support, FAQ, technical support, customer service, documentation"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Help Center
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Find answers to your questions, access documentation, and get the support you need 
              to make the most of our technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <method.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="text-lg font-semibold text-gray-800 mb-2">{method.contact}</p>
                <p className="text-sm text-gray-500 mb-6">{method.availability}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  {method.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <div key={faqIndex} className="bg-gray-50 rounded-lg">
                      <button
                        onClick={() => toggleFaq(categoryIndex * 10 + faqIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors rounded-lg"
                      >
                        <span className="font-semibold text-gray-800">{faq.question}</span>
                        {expandedFaq === categoryIndex * 10 + faqIndex ? (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      <AnimatePresence>
                        {expandedFaq === categoryIndex * 10 + faqIndex && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 text-gray-600">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <resource.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <a
                  href={resource.link}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block"
                >
                  Access Resource
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Our expert support team is here to help you succeed with your technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="/documentation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Help;