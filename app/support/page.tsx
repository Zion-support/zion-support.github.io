<<<<<<< HEAD
import React from 'react';
import SEOHead from '../components/SEOHead';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      title: '24/7 Technical Support',
      description: 'Round-the-clock technical assistance for all our services',
      icon: '🛠️',
      contact: 'support@ziontechgroup.com'
    },
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      icon: '📚',
      contact: '/docs'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and get help from the community',
      icon: '👥',
      contact: '/community'
    },
    {
      title: 'Live Chat',
      description: 'Get instant help with our live chat support',
      icon: '💬',
      contact: '/contact'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: '📞',
      contact: '+1 (302) 464-0950'
    },
    {
      title: 'Emergency Support',
      description: 'Critical issue resolution for enterprise customers',
      icon: '🚨',
      contact: 'emergency@ziontechgroup.com'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Visit our tutorials section for step-by-step guides, or contact our support team for personalized assistance.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We typically respond to support requests within 2 hours during business hours and 24 hours for non-critical issues.'
    },
    {
      question: 'Do you offer training for your solutions?',
      answer: 'Yes, we provide comprehensive training programs for all our solutions, including online tutorials and on-site training.'
    },
    {
      question: 'How can I report a bug or issue?',
      answer: 'You can report bugs through our support portal, email, or by calling our technical support line.'
    }
  ];

  return (
    <>
      <SEOHead
title="Support - Zion Tech Group"
        description="Get help and support for all our AI and IT solutions. 24/7 technical support, documentation, and community resources."
        keywords="support, help, technical support, customer service, documentation, troubleshooting"
        canonicalUrl="https://ziontechgroup.com/support"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
Get help and support for all our AI and IT solutions. 24/7 technical support, documentation, and community resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {option.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {option.description}
                </p>
                <a
                  href={option.contact.startsWith('/') ? option.contact : `mailto:${option.contact}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {option.contact}
                </a>
              </div>
            ))}
          </div>
          
<div className="bg-slate-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-slate-700 pb-6">
                  <h3 className="text-lg font-semibold mb-3 text-orange-400">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/contact?service=support"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Professional support solutions for modern businesses." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Support
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional support solutions for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Solutions</h3>
            <p className="text-gray-300">Cutting-edge technology solutions tailored to your business needs.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
            <p className="text-gray-300">Dedicated support team to help you succeed with our solutions.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Scalable Growth</h3>
            <p className="text-gray-300">Solutions that grow with your business and adapt to your needs.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8">
            Ready to get started with support?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
