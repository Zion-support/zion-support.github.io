import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Mail, MessageCircle, Book, Search, ArrowRight } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const SupportPage = () => {
  const supportOptions = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation for all our services.',
      icon: Book,
      link: '/docs'
    },
    {
      title: 'Contact Support',
      description: 'Get help from our technical support team via email or chat.',
      icon: MessageCircle,
      link: '/contact'
    },
    {
      title: 'FAQ',
      description: 'Find answers to frequently asked questions about our services.',
      icon: HelpCircle,
      link: '/faq'
    }
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO 
        title="Support - Zion Tech Group"
        description="Get help and support for Zion Tech Group services. Access documentation, contact support, and find answers to your questions."
        keywords="support, help, documentation, FAQ, technical support, customer service"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Support Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get the help you need with our comprehensive support resources and dedicated technical team.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500 transition-colors p-6">
                <IconComponent className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                <p className="text-gray-300 mb-4">{option.description}</p>
                <Link 
                  to={option.link}
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Quick Help Section */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Quick Help</h2>
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and FAQs..."
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Support
              </Link>
              <Link 
                to="/contact" 
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Live Chat
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need More Help?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our support team is available 24/7 to help you with any questions or issues.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <p className="text-gray-300">support@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Response within 2 hours</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-gray-400 text-sm">24/7 availability</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-gray-300">Available on website</p>
              <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>
            </div>
          </div>
          <Link 
            to="/contact" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            <HelpCircle className="w-5 h-5" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
