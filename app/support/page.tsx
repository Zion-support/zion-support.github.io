import React from 'react';
import SEOHead from '../components/SEOHead';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      title: 'Technical Support',
      description: 'Get help with technical issues and integration problems',
      icon: '🔧',
      responseTime: '2-4 hours',
      availability: '24/7'
    },
    {
      title: 'Account Support',
      description: 'Assistance with billing, account management, and subscriptions',
      icon: '👤',
      responseTime: '1-2 hours',
      availability: 'Business Hours'
    },
    {
      title: 'Sales Support',
      description: 'Help choosing the right plan and custom solutions',
      icon: '💼',
      responseTime: '1 hour',
      availability: 'Business Hours'
    },
    {
      title: 'Emergency Support',
      description: 'Critical issues affecting your production environment',
      icon: '🚨',
      responseTime: '15 minutes',
      availability: '24/7'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Simply sign up for an account, choose your plan, and follow our quick start guide. Our team is available to help with integration.'
    },
    {
      question: 'What is your uptime guarantee?',
      answer: 'We guarantee 99.9% uptime for all our services. If we fall below this, you\'re eligible for service credits.'
    },
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Absolutely! We work with enterprise clients to create custom AI and IT solutions tailored to their specific needs.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Support Center - Zion Tech Group"
        description="Get help and support for all our AI and IT solutions. 24/7 customer support available."
        keywords="support, help, customer service, technical support, contact support"
        canonicalUrl="https://ziontechgroup.com/support"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to help you succeed with our AI and IT solutions. Get the support you need, when you need it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{option.title}</h3>
                <p className="text-gray-400 mb-4">{option.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium text-purple-400">{option.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Availability:</span>
                    <span className="font-medium text-cyan-400">{option.availability}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Contact Support</h2>
              <div className="space-y-6">
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-lg font-semibold mb-3 text-white">📞 Phone Support</h3>
                  <p className="text-gray-400 mb-2">Call us for immediate assistance</p>
                  <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300 font-medium">
                    +1 (302) 464-0950
                  </a>
                </div>
                
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-lg font-semibold mb-3 text-white">✉️ Email Support</h3>
                  <p className="text-gray-400 mb-2">Send us a detailed message</p>
                  <a href="mailto:support@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 font-medium">
                    support@ziontechgroup.com
                  </a>
                </div>
                
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-lg font-semibold mb-3 text-white">💬 Live Chat</h3>
                  <p className="text-gray-400 mb-2">Chat with our support team in real-time</p>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Start Chat
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                    <h3 className="text-lg font-semibold mb-2 text-white">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our emergency support team is available 24/7 for critical issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Emergency Line
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Submit Ticket
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;