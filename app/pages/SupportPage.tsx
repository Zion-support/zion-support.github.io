import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

const SupportPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const supportCategories = [
    {
      id: 'general',
      title: 'General Support',
      description: 'General questions and assistance',
      icon: QuestionMarkCircleIcon,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'technical',
      title: 'Technical Support',
      description: 'Technical issues and troubleshooting',
      icon: ExclamationTriangleIcon,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'billing',
      title: 'Billing Support',
      description: 'Billing and payment questions',
      icon: InformationCircleIcon,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'feature',
      title: 'Feature Request',
      description: 'Request new features or improvements',
      icon: CheckCircleIcon,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Contact our sales team through the contact form or call us directly. We\'ll schedule a consultation to understand your needs and create a customized solution.'
    },
    {
      question: 'What are your support hours?',
      answer: 'We provide 24/7 support for critical issues. General support is available Monday through Friday, 9 AM to 6 PM EST. Emergency support is available around the clock.'
    },
    {
      question: 'How quickly do you respond to support requests?',
      answer: 'We respond to critical issues within 1 hour, high priority issues within 4 hours, and general inquiries within 24 hours during business days.'
    },
    {
      question: 'Do you offer training for your solutions?',
      answer: 'Yes! We provide comprehensive training for all our solutions, including documentation, video tutorials, and live training sessions for your team.'
    },
    {
      question: 'What if I need custom development?',
      answer: 'We offer custom development services for unique requirements. Contact our technical team to discuss your specific needs and get a customized solution.'
    },
    {
      question: 'How do I report a security issue?',
      answer: 'For security-related issues, please contact us immediately at security@ziontechgroup.com or call our emergency line. We take security very seriously and respond to all security reports within 1 hour.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. 24/7 technical support, documentation, and customer service." />
        <meta name="keywords" content="support, help, technical support, customer service, documentation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Support</span> Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to help! Get the support you need with our comprehensive 
              help center, documentation, and expert assistance.
            </p>
          </div>

          {/* Support Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                  selectedCategory === category.id
                    ? 'border-purple-500 bg-gradient-to-br from-slate-800 to-slate-700'
                    : 'border-slate-600 bg-slate-800/50 hover:border-purple-400'
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
              <h2 className="text-2xl font-bold mb-6">Get Support</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircleIcon className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Support Request Sent!</h3>
                  <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Support Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      {supportCategories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Brief description of your issue"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Please provide detailed information about your issue..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Submit Support Request
                  </button>
                </form>
              )}
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-center mb-8">Other Ways to Reach Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-gray-300 mb-2">+1-302-464-0950</p>
                <p className="text-gray-400 text-sm">24/7 Emergency Support</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <EnvelopeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
                <p className="text-gray-300 mb-2">support@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">Response within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300 mb-2">Available 9 AM - 6 PM EST</p>
                <p className="text-gray-400 text-sm">Monday - Friday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;