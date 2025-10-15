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
        title="Support - Zion Tech Group"
        description="Get help and support for all our AI and IT services. 24/7 technical support, documentation, and expert assistance."
        keywords="technical support, customer support, help desk, AI support, IT support, troubleshooting"
        canonicalUrl="https://ziontechgroup.com/support"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Support Center</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you succeed with our AI and IT solutions. Get the support you need, when you need it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">{option.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Availability:</span>
                    <span className="font-medium">{option.availability}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Support</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">📞 Phone Support</h3>
                  <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
                  <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800 font-medium">
                    +1 (302) 464-0950
                  </a>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">✉️ Email Support</h3>
                  <p className="text-gray-600 mb-2">Send us a detailed message</p>
                  <a href="mailto:support@ziontechgroup.com" className="text-blue-600 hover:text-blue-800 font-medium">
                    support@ziontechgroup.com
                  </a>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">💬 Live Chat</h3>
                  <p className="text-gray-600 mb-2">Chat with our support team in real-time</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Start Chat
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-blue-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our emergency support team is available 24/7 for critical issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Emergency Line
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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