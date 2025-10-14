import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      icon: PhoneIcon,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1-302-464-0950',
      availability: '24/7 Emergency Support',
      responseTime: 'Immediate'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Support',
      description: 'Get detailed assistance via email',
      contact: 'kleber@ziontechgroup.com',
      availability: 'Monday - Friday, 9 AM - 6 PM EST',
      responseTime: 'Within 4 hours'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      availability: 'Monday - Friday, 9 AM - 6 PM EST',
      responseTime: 'Immediate'
    }
  ];

  const faqs = [
    {
      question: 'What are your support hours?',
      answer: 'We provide 24/7 emergency support for critical issues. Regular support is available Monday through Friday, 9 AM to 6 PM EST.'
    },
    {
      question: 'How quickly can I expect a response?',
      answer: 'Emergency issues receive immediate attention. For non-critical issues, we respond within 4 hours during business hours.'
    },
    {
      question: 'Do you provide remote support?',
      answer: 'Yes, we offer secure remote support to quickly diagnose and resolve issues without requiring on-site visits.'
    },
    {
      question: 'What types of issues do you support?',
      answer: 'We support all aspects of our IT and AI solutions including technical issues, configuration problems, and performance optimization.'
    },
    {
      question: 'Is there a cost for support?',
      answer: 'Support is included with all our service contracts. Emergency support outside of contract terms may incur additional charges.'
    },
    {
      question: 'How do I escalate a support issue?',
      answer: 'If you need to escalate an issue, contact our support manager directly or use the escalation process outlined in your service agreement.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get 24/7 technical support for all your IT and AI solutions. Contact our expert support team for immediate assistance." />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Technical <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Support</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get expert technical support for all your IT and AI solutions. Our dedicated support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105"
                >
                  Contact Support
                </Link>
                <a 
                  href="tel:+1-302-464-0950" 
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Support Options Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How Can We Help?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support option that works best for you. We're here to help whenever you need us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{option.title}</h3>
                  <p className="text-gray-300 mb-6">{option.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-300">
                      <span className="font-semibold mr-2">Contact:</span>
                      <span>{option.contact}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <ClockIcon className="w-5 h-5 mr-2 text-purple-400" />
                      <span>{option.availability}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 mr-2 text-green-400" />
                      <span>Response: {option.responseTime}</span>
                    </div>
                  </div>

                  <Link 
                    to="/contact" 
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Get Support
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about our support services and technical assistance.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our support team is standing by to help you resolve any issues quickly and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1-302-464-0950" 
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Call +1-302-464-0950
              </a>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;