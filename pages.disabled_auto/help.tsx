import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Search, HelpCircle, MessageCircle, Phone, Mail, FileText, Video, BookOpen, ChevronDown, ChevronRight } from 'lucide-react';

const HelpPage: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: <HelpCircle className="w-5 h-5" />,
      questions: [
        {
          question: 'How do I get started with Zion Tech Group services?',
          answer: 'Getting started is easy! Simply contact us through our contact form or call us at +1 302 464 0950. We\'ll schedule a consultation to understand your needs and recommend the best solutions for your business.'
        },
        {
          question: 'What services do you offer?',
          answer: 'We offer comprehensive technology solutions including Micro SaaS development, IT services, AI solutions, cloud migration, cybersecurity, and custom software development. Each service is tailored to meet your specific business requirements.'
        },
        {
          question: 'How long does it take to implement a solution?',
          answer: 'Implementation timelines vary depending on the complexity of the project. Simple micro SaaS applications can be deployed in 2-4 weeks, while enterprise solutions may take 3-6 months. We provide detailed timelines during the consultation phase.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: <MessageCircle className="w-5 h-5" />,
      questions: [
        {
          question: 'What kind of technical support do you provide?',
          answer: 'We provide 24/7 technical support for all our services. Our support includes phone, email, and chat support, as well as remote assistance when needed. We also offer priority support for enterprise clients.'
        },
        {
          question: 'How do I report a technical issue?',
          answer: 'You can report technical issues through our support portal, by emailing support@ziontechgroup.com, or by calling our support hotline. We aim to respond to all support requests within 2 hours during business hours.'
        },
        {
          question: 'Do you provide training for your solutions?',
          answer: 'Yes! We provide comprehensive training for all our solutions, including user guides, video tutorials, and live training sessions. We also offer ongoing training as we release new features and updates.'
        }
      ]
    },
    {
      title: 'Billing & Payments',
      icon: <FileText className="w-5 h-5" />,
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, bank transfers, and corporate purchase orders. For enterprise clients, we also offer flexible payment terms and custom billing arrangements.'
        },
        {
          question: 'Can I change my subscription plan?',
          answer: 'Yes, you can upgrade or downgrade your subscription plan at any time. Changes take effect at the next billing cycle, and we\'ll prorate any differences in pricing.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'We offer refunds within 30 days of purchase for most services, subject to our terms of service. Custom development projects may have different refund policies outlined in the project agreement.'
        }
      ]
    },
    {
      title: 'Security & Privacy',
      icon: <BookOpen className="w-5 h-5" />,
      questions: [
        {
          question: 'How do you protect my data?',
          answer: 'We implement industry-standard security measures including encryption, secure data centers, regular security audits, and compliance with data protection regulations. Your data is protected with the same level of security we use for our own systems.'
        },
        {
          question: 'Do you comply with data protection regulations?',
          answer: 'Yes, we comply with GDPR, CCPA, and other applicable data protection regulations. We have comprehensive privacy policies and data processing agreements in place to ensure compliance.'
        },
        {
          question: 'Where is my data stored?',
          answer: 'Your data is stored in secure, geographically distributed data centers with redundant backups. We can accommodate specific geographic requirements for data residency when needed.'
        }
      ]
    }
  ];

  const supportChannels = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 302 464 0950',
      availability: '24/7 for critical issues',
      action: 'Call Now'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2 hours',
      action: 'Send Email'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      availability: 'Business hours',
      action: 'Start Chat'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video Support',
      description: 'Screen sharing and remote assistance',
      contact: 'By appointment',
      availability: 'Scheduled sessions',
      action: 'Schedule Call'
    }
  ];

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Help Center
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Find answers to your questions and get the support you need to make the most of our technology solutions.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the support channel that works best for you. Our team is here to help 24/7.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{channel.title}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <p className="text-sm text-gray-500 mb-2">{channel.contact}</p>
                <p className="text-sm text-blue-600 mb-4">{channel.availability}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                  {channel.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to the most common questions about our services and solutions.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <button
                  onClick={() => toggleSection(category.title)}
                  className="w-full flex items-center justify-between p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center">
                    <div className="text-blue-600 mr-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  {expandedSection === category.title ? (
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-500" />
                  )}
                </button>
                
                {expandedSection === category.title && (
                  <div className="mt-4 space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Links */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Documentation & Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access comprehensive documentation, guides, and resources to help you get the most out of our solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">User Guides</h3>
              <p className="text-gray-600 mb-4">Step-by-step guides for using our products and services.</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                View Guides →
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-green-600 mb-4">
                <Video className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">Watch video tutorials to learn how to use our solutions effectively.</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                Watch Videos →
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-purple-600 mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">API Documentation</h3>
              <p className="text-gray-600 mb-4">Complete API reference and integration guides for developers.</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                View API Docs →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our support team is ready to help you with any questions or issues you may have.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              Contact Support
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HelpPage;