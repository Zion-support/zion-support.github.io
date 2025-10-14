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
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      icon: EnvelopeIcon,
      contact: 'support@ziontechgroup.com',
      availability: '24/7'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      icon: PhoneIcon,
      contact: '+1-302-464-0950',
      availability: 'Mon-Fri 9AM-6PM EST'
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      icon: ChatBubbleLeftRightIcon,
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  const faqs = [
    {
      question: 'How can I get technical support?',
      answer: 'You can reach our technical support team via email, phone, or live chat. We typically respond within 24 hours for email inquiries and immediately for phone calls during business hours.'
    },
    {
      question: 'What are your support hours?',
      answer: 'Our support team is available Monday through Friday from 9 AM to 6 PM EST. Email support is available 24/7 and we respond within 24 hours.'
    },
    {
      question: 'Do you offer emergency support?',
      answer: 'Yes, we offer emergency support for critical issues. Please call our emergency line or mark your email as urgent for immediate assistance.'
    },
    {
      question: 'How do I submit a support ticket?',
      answer: 'You can submit a support ticket by emailing support@ziontechgroup.com with a detailed description of your issue. Include any relevant screenshots or error messages.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get technical support and assistance for Zion Tech Group services. Contact our support team via email, phone, or live chat." />
        <meta name="keywords" content="technical support, customer service, help desk, IT support, technology assistance" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Center
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're here to help you succeed. Get the support you need for all your technology solutions.
            </p>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How Can We Help You?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the support option that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{option.title}</h3>
                  <p className="text-gray-300 mb-4">{option.description}</p>
                  <div className="space-y-2">
                    <p className="text-cyan-400 font-medium">{option.contact}</p>
                    <div className="flex items-center text-gray-400">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      <span className="text-sm">{option.availability}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Find answers to common questions about our services
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Contact us directly and we'll help you out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Contact Us
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:support@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                <EnvelopeIcon className="mr-2 w-5 h-5" />
                Email Support
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;