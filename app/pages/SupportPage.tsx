import React from 'react';
import SEOHead from '../components/SEOHead';
import { Phone, Mail, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: '24/7',
      contact: '+1 302 464 0950',
      action: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7',
      contact: 'support@ziontechgroup.com',
      action: 'mailto:support@ziontechgroup.com'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help through our live chat system',
      availability: 'Mon-Fri 9AM-6PM EST',
      contact: 'Start Chat',
      action: '/contact'
    }
  ];

  const faqs = [
    {
      question: 'What support options are available?',
      answer: 'We offer 24/7 phone and email support, live chat during business hours, and comprehensive documentation and tutorials.'
    },
    {
      question: 'How quickly do you respond to support requests?',
      answer: 'We respond to critical issues within 1 hour, standard requests within 4 hours, and general inquiries within 24 hours.'
    },
    {
      question: 'Do you provide training for your solutions?',
      answer: 'Yes, we offer comprehensive training programs, documentation, and ongoing support to help you get the most out of our solutions.'
    },
    {
      question: 'What if I need custom modifications?',
      answer: 'Our team can help with custom modifications and integrations. Contact us to discuss your specific requirements.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Support - Zion Tech Group"
        description="Get help with our AI solutions, IT services, and cloud infrastructure. 24/7 support, documentation, and expert assistance."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get the help you need with our comprehensive support options and expert assistance.
            </p>
          </div>

          {/* Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                <p className="text-gray-300 mb-4">{option.description}</p>
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-sm text-gray-400">{option.availability}</span>
                </div>
                <a 
                  href={option.action} 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  {option.contact}
                </a>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-slate-800 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our expert team is here to help you succeed. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Contact Support
              </a>
              <a 
                href="/tutorials" 
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Tutorials
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;