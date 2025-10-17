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
<<<<<<< HEAD
        title="Support Center - Zion Tech Group"
        description="Get help and support for all our AI and IT solutions. 24/7 customer support available."
        keywords="support, help, customer service, technical support, contact support"
=======
        title="Support - Zion Tech Group"
        description="Get help and support for all our AI and IT solutions. 24/7 technical support, documentation, and community resources."
        keywords="support, help, technical support, customer service, documentation, troubleshooting"
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c
        canonicalUrl="https://ziontechgroup.com/support"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
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
=======
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
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c
              </div>
            ))}
          </div>
          
<<<<<<< HEAD
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
=======
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
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;