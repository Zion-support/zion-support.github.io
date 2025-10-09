import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MessageCircle, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      title: 'Email Support',
      description: 'Get help via email with detailed responses within 24 hours.',
      icon: Mail,
      contact: 'kleber@ziontechgroup.com',
      availability: '24/7'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts for immediate assistance.',
      icon: Phone,
      contact: '+1 302 464 0950',
      availability: 'Mon-Fri 9AM-6PM EST'
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team in real-time for quick answers.',
      icon: MessageCircle,
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Support Center
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              We're here to help you succeed with our comprehensive support services
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-600">
              Choose the support option that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">
                  <option.icon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-500">
                    <strong>Contact:</strong> {option.contact}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Availability:</strong> {option.availability}
                  </p>
                </div>
                <Link 
                  href="/contact"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  Get Support
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;

