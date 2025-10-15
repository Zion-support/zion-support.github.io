import React from 'react';
import SEOHead from '../components/SEOHead';
import { Phone, Mail, MessageCircle, Clock, BookOpen, FileText } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      details: '+1 302 464 0950',
      availability: '24/7',
      action: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      details: 'support@ziontechgroup.com',
      availability: '24/7',
      action: 'mailto:support@ziontechgroup.com'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help through our live chat system',
      details: 'Available on all pages',
      availability: 'Mon-Fri: 9AM-6PM EST',
      action: '#'
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      details: 'Self-service resources',
      availability: '24/7',
      action: '/docs'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Search our extensive knowledge base for answers',
      details: 'FAQs and troubleshooting guides',
      availability: '24/7',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Emergency Support',
      description: 'Critical issue support for enterprise customers',
      details: 'Priority response within 1 hour',
      availability: '24/7',
      action: 'tel:+13024640950'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you respond to support requests?',
      answer: 'We respond to all support requests within 2 hours during business hours and within 24 hours for non-critical issues. Emergency support customers get priority response within 1 hour.'
    },
    {
      question: 'Do you provide 24/7 support?',
      answer: 'Yes, we offer 24/7 phone and email support for all our customers. Live chat is available during business hours (Mon-Fri: 9AM-6PM EST).'
    },
    {
      question: 'What types of issues can you help with?',
      answer: 'We provide support for all our services including AI solutions, cloud infrastructure, cybersecurity, mobile applications, and general technical questions.'
    },
    {
      question: 'Is there a cost for support?',
      answer: 'Basic support is included with all our services. Premium support with faster response times and dedicated account managers is available for enterprise customers.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Support - Zion Tech Group"
        description="Get 24/7 technical support for all Zion Tech Group services. Phone, email, live chat, and comprehensive documentation available."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to help you succeed. Get 24/7 support through multiple channels and access our comprehensive knowledge base.
            </p>
          </div>

          {/* Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="bg-blue-600 p-3 rounded-lg w-fit mb-4">
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-300 mb-4">{option.description}</p>
                <p className="text-sm text-gray-400 mb-2">{option.details}</p>
                <p className="text-sm text-blue-400 mb-4">{option.availability}</p>
                <a 
                  href={option.action} 
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  {option.title === 'Phone Support' ? 'Call Now' : 
                   option.title === 'Email Support' ? 'Send Email' : 
                   option.title === 'Live Chat' ? 'Start Chat' : 'Access'}
                </a>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-slate-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Contact Support
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;