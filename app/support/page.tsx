'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, FileText, Book, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best solutions for your business.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer comprehensive support including 24/7 technical assistance, regular check-ins, training sessions, and dedicated account management.'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes! We provide comprehensive training programs including hands-on workshops, online courses, and ongoing education to ensure your team can effectively use our solutions.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We guarantee response times based on your support tier: Standard (24 hours), Premium (8 hours), and Enterprise (2 hours) for critical issues.'
    },
    {
      question: 'Can you help with data migration?',
      answer: 'Absolutely! Our team specializes in seamless data migration from legacy systems to our modern platforms with minimal downtime and data integrity.'
    },
    {
      question: 'Do you provide custom development services?',
      answer: 'Yes, we offer custom development services to tailor our solutions to your specific business requirements and integrate with your existing systems.'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call our support team for immediate assistance',
      contact: '+1 (555) 123-4567',
      availability: '24/7'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond promptly',
      contact: 'support@ziontechgroup.com',
      availability: '24/7'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on our website',
      availability: 'Business Hours'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Get dedicated support for enterprise customers',
      contact: 'Contact your account manager',
      availability: '24/7'
    }
  ];

  const resources = [
    {
      icon: Book,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Search our extensive knowledge base for answers',
      link: '/knowledge-base'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and get help from the community',
      link: '/community'
    },
    {
      icon: MessageCircle,
      title: 'Video Tutorials',
      description: 'Watch step-by-step video tutorials',
      link: '/tutorials'
    }
  ];

  const supportTiers = [
    {
      name: 'Standard',
      price: 'Included',
      features: [
        'Email support',
        'Business hours response',
        'Basic documentation',
        'Community forum access'
      ]
    },
    {
      name: 'Premium',
      price: '$500/month',
      features: [
        'Priority email support',
        '8-hour response time',
        'Phone support',
        'Advanced documentation',
        'Training sessions'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Dedicated support team',
        '2-hour response time',
        '24/7 phone support',
        'Custom training',
        'Account manager',
        'SLA guarantees'
      ]
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for your Zion Tech Group solutions. 24/7 support, documentation, and training resources available." />
        <meta name="keywords" content="support, help, documentation, training, customer service, technical support" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              We're here to help you succeed
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Get the support you need with our comprehensive help resources, 24/7 technical assistance, 
              and dedicated customer success team.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, and documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Get Support</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support channel that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8 text-center hover:bg-gray-700 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2">
                  <div className="text-blue-400 font-medium">{channel.contact}</div>
                  <div className="text-sm text-gray-400">{channel.availability}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Help Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our comprehensive library of resources to help you get the most out of our solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-gray-900 rounded-lg p-8 text-center hover:bg-gray-700 transition-colors group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{resource.title}</h3>
                <p className="text-gray-300">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our products and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-400">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Support Tiers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support level that best fits your needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportTiers.map((tier, index) => (
              <div key={index} className={`bg-gray-900 rounded-lg p-8 ${index === 1 ? 'ring-2 ring-blue-500' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-4">{tier.price}</div>
                </div>
                <ul className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full mt-8 py-3 px-6 rounded-lg font-semibold transition-colors ${
                  index === 1
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  {index === 1 ? 'Most Popular' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is ready to help you with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/consultation"
                className="inline-flex items-center px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Schedule Call
                <Phone className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportPage;