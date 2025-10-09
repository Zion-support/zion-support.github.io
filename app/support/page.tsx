'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, HelpCircle, FileText, Video, BookOpen } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const supportOptions = [
    {
      icon: HelpCircle,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive knowledge base for answers to common questions',
      action: 'Browse Articles',
      href: '/docs'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team via live chat',
      action: 'Start Chat',
      href: '/contact'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us directly for immediate assistance',
      action: 'Call Now',
      href: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message and we\'ll respond within 24 hours',
      action: 'Send Email',
      href: 'mailto:support@ziontechgroup.com'
    }
  ];

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      questions: [
        {
          question: 'How do I get started with your services?',
          answer: 'Getting started is easy! Contact our team for a free consultation and we\'ll help you choose the right solution for your needs.'
        },
        {
          question: 'What information do I need to provide?',
          answer: 'We\'ll need basic information about your business, current systems, and specific requirements to provide the best solution.'
        },
        {
          question: 'How long does implementation take?',
          answer: 'Implementation time varies depending on the complexity of your project, but most solutions are deployed within 2-4 weeks.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: FileText,
      questions: [
        {
          question: 'Do you provide 24/7 technical support?',
          answer: 'Yes! We offer 24/7 technical support for all our enterprise clients and critical systems.'
        },
        {
          question: 'What is your response time for support requests?',
          answer: 'We respond to critical issues within 1 hour, high priority within 4 hours, and general inquiries within 24 hours.'
        },
        {
          question: 'Do you offer remote support?',
          answer: 'Yes, we provide remote support and can securely access your systems when needed with your permission.'
        }
      ]
    },
    {
      title: 'Billing & Account',
      icon: CheckCircle,
      questions: [
        {
          question: 'How does billing work?',
          answer: 'We offer flexible billing options including monthly, quarterly, and annual plans. All pricing is transparent with no hidden fees.'
        },
        {
          question: 'Can I change my plan at any time?',
          answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, bank transfers, and can accommodate enterprise billing arrangements.'
        }
      ]
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: FileText,
      href: '/docs'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and tutorials',
      icon: Video,
      href: '/tutorials'
    },
    {
      title: 'System Status',
      description: 'Real-time status of all our services',
      icon: CheckCircle,
      href: '/status'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and get help',
      icon: MessageCircle,
      href: '/community'
    }
  ];

  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're here to help! Get the support you need with our comprehensive help resources and expert assistance.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* Support Options */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Get Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportOptions.map((option, index) => (
                <Link
                  key={index}
                  href={option.href}
                  className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-colors group"
                >
                  <div className="flex items-center mb-4">
                    <option.icon className="w-8 h-8 text-cyan-400 mr-4" />
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {option.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">{option.description}</p>
                  <div className="flex items-center text-cyan-400 font-medium">
                    {option.action}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {filteredFaqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center mb-6">
                    <category.icon className="w-6 h-6 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-l-2 border-cyan-400 pl-4">
                        <h4 className="text-lg font-medium text-white mb-2">{faq.question}</h4>
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Resources */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Helpful Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.href}
                  className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-colors group"
                >
                  <div className="flex items-center mb-4">
                    <resource.icon className="w-8 h-8 text-cyan-400 mr-4" />
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {resource.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">{resource.description}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                <p className="text-sm text-gray-400">24/7 Support Available</p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">support@ziontechgroup.com</p>
                <p className="text-sm text-gray-400">Response within 24 hours</p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
                <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
                <p className="text-gray-300 mb-4">24/7 Support</p>
                <p className="text-sm text-gray-400">Always available for critical issues</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Still Need Help?</h2>
              <p className="text-cyan-100 mb-6">
                Can't find what you're looking for? Our expert support team is ready to help you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Support
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SupportPage;