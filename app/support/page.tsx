'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MessageCircle, Clock, CheckCircle, Search } from 'lucide-react';

const SupportPage: React.FC = () => {
  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'Contact our sales team through the contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solution.'
    },
    {
      question: 'What support do you provide?',
      answer: 'We offer 24/7 support for all our clients, including technical assistance, maintenance, and troubleshooting.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can change your plan at any time. Changes take effect at the beginning of your next billing cycle.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Absolutely! We specialize in custom AI and IT solutions tailored to your specific business requirements.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We respond to all support requests within 2 hours during business hours and within 24 hours for urgent issues.'
    },
    {
      question: 'Do you provide training for your solutions?',
      answer: 'Yes, we provide comprehensive training for all our solutions to ensure your team can effectively use and maintain them.'
    }
  ];

  const supportChannels = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 2 hours',
      contact: 'support@ziontechgroup.com',
      availability: '24/7'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 (555) 123-4567',
      availability: 'Mon-Fri 9AM-6PM PST'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on our website',
      availability: 'Mon-Fri 9AM-6PM PST'
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Support - Zion Tech Group | Help & Support Center</title>
        <meta name="description" content="Get help and support for your AI and IT solutions. 24/7 support, documentation, and expert assistance." />
        <meta name="keywords" content="support, help, customer service, technical support, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get help and support for your AI and IT solutions. We're here to help you succeed.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support channel that works best for you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <p className="text-purple-400 font-semibold mb-2">{channel.contact}</p>
                  <p className="text-gray-400 text-sm">{channel.availability}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Find answers to common questions about our services and support.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Status Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              System Status
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Check the current status of our services and systems.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-green-400 rounded-full mr-3"></div>
                <span className="text-2xl font-bold text-white">All Systems Operational</span>
              </div>
              <p className="text-gray-300 mb-6">
                All our services are running normally. No incidents reported.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-2">0</div>
                  <div className="text-gray-300">Active Incidents</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-300">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default SupportPage;
