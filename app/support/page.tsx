import React from 'react';
import { Helmet } from 'react-helmet-async';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: '📚'
    },
    {
      title: 'Technical Support',
      description: 'Get help from our technical experts',
      icon: '🔧'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and developers',
      icon: '👥'
    },
    {
      title: 'Training Resources',
      description: 'Learn how to use our solutions effectively',
      icon: '🎓'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for our AI and cloud solutions. Access documentation, technical support, and community resources." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the help you need to make the most of our solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {supportOptions.map((option, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm">{option.description}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Support</h2>
              <p className="text-gray-600 mb-6">
                Need immediate assistance? Our support team is here to help.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">support@ziontechgroup.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Hours</h3>
                  <p className="text-gray-600">Monday - Friday, 9 AM - 6 PM PST</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Submit a Ticket</h2>
              <p className="text-gray-600 mb-6">
                Create a support ticket for non-urgent issues or detailed technical questions.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Create Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;