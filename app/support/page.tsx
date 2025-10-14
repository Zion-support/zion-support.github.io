import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Right, Circle, Chat, Phone, Mail, Book, MessageSquare, Clock, CheckCircle } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      icon: Chat,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      action: 'Call Now',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      action: 'Send Email',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Book,
      title: 'Documentation',
      description: 'Browse our comprehensive guides',
      action: 'View Docs',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.'
    },
    {
      question: 'What is your typical response time for support requests?',
      answer: 'We aim to respond to all support requests within 24 hours. For urgent issues, our live chat and phone support are available during business hours.'
    },
    {
      question: 'Do you provide training for your solutions?',
      answer: 'Yes! We provide comprehensive training for all our solutions, including documentation, video tutorials, and live training sessions.'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security measures including encryption, secure data centers, regular security audits, and compliance with industry standards.'
    },
    {
      question: 'Can I integrate your solutions with my existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with existing systems through APIs and standard integration protocols.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 30-day money-back guarantee for all our services. If you\'re not satisfied, we\'ll work with you to resolve any issues or provide a full refund.'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM PST',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'support@ziontech.com',
      description: '24/7 email support',
      action: 'Send Email'
    },
    {
      icon: Chat,
      title: 'Live Chat',
      details: 'Available now',
      description: 'Instant support',
      action: 'Start Chat'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
      <Helmet>"""
        <title>Support - Zion Tech Group</title>""""
        <meta name="description" content="Get help and support for Zion Tech Group's AI, cloud, and cybersecurity solutions." />""""
        <meta name="keywords" content="support, help, customer service, AI support, cloud support, cybersecurity support" />"
      </Helmet>""
"""
      {/* Hero Section */}""""
      <section className="relative py-20 overflow-hidden">""""
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>""""
        <div className="container mx-auto px-4 relative z-10">""""
          <div className="text-center">""""
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">""
              Support Center"""
            </h1>""""
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We're here to help you succeed. Get the support you need for all our AI, cloud, and cybersecurity solutions.
            </p>
          </div>
        </div>"
      </section>""
"""
      {/* Support Options */}""""
      <section className="py-20">""""
        <div className="container mx-auto px-4">""""
          <div className="text-center mb-16">""""
            <h2 className="text-4xl font-bold text-white mb-4">How Can We Help?</h2>""""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support method that works best for you"
            </p>"
          "
          """"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"""
            {supportOptions.map((option, index) => (""""
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/20 transition-colors group">"""
                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>""""
                  <option.icon className="w-8 h-8 text-white" />"""
                </div>""""
                <h3 className="text-xl font-bold text-white mb-4">{option.title}</h3>""""
                <p className="text-gray-300 mb-6">{option.description}</p>""""
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>"
      </section>""
"""
      {/* Contact Methods */}""""
      <section className="py-20">""""
        <div className="container mx-auto px-4">""""
          <div className="text-center mb-16">""""
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>""""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to reach our support team"
            </p>"
          "
          """"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"""
            {contactMethods.map((method, index) => (""""
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">""""
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">""""
                  <method.icon className="w-8 h-8 text-blue-400" />"""
                </div>""""
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>""""
                <p className="text-blue-400 font-medium mb-2">{method.details}</p>""""
                <p className="text-gray-400 mb-6">{method.description}</p>""""
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>"
      </section>""
"""
      {/* FAQ Section */}""""
      <section className="py-20">""""
        <div className="container mx-auto px-4">""""
          <div className="text-center mb-16">""""
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>""""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services"
            </p>"
          "
          """"
          <div className="max-w-4xl mx-auto space-y-6">"""
            {faqs.map((faq, index) => (""""
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">""""
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>""""
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>"
      </section>""
"""
      {/* Status Page */}""""
      <section className="py-20">""""
        <div className="container mx-auto px-4">""""
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20 text-center">""""
            <h2 className="text-3xl font-bold text-white mb-4">System Status</h2>""""
            <p className="text-xl text-gray-300 mb-8">""
              All systems are operational"""
            </p>""""
            <div className="flex items-center justify-center space-x-2 text-green-400">""""
              <Circle className="w-4 h-4 fill-current" />""""
              <span className="font-semibold">All services running normally</span>"""
            </div>""""
            <div className="mt-6">""""
              <Link to="/status" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                View detailed status page →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>"
  );""
};"""
"""
export default SupportPage;"""
