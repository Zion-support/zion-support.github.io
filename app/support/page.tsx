import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      title: 'Email Support',
      description: 'Get help via email with detailed responses',
      icon: '📧',
      responseTime: 'Within 24 hours',
      availability: '24/7'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: '📞',
      responseTime: 'Immediate',
      availability: 'Business hours'
    },
    {
      title: 'Live Chat',
      description: 'Real-time chat support for quick questions',
      icon: '💬',
      responseTime: 'Within 5 minutes',
      availability: 'Business hours'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Support Center</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're here to help you succeed. Get the support you need for all our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <div key={index} className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">{option.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
              <p className="text-gray-300 mb-4">{option.description}</p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Response: {option.responseTime}</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Available: {option.availability}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Contact Our Support Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Phone Support</h3>
              <a
                href="tel:+13024640950"
                className="text-2xl font-bold text-cyan-400 hover:text-cyan-300"
              >
                (302) 464-0950
              </a>
              <p className="text-gray-300 mt-2">Monday - Friday, 9 AM - 6 PM EST</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Email Support</h3>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="text-2xl font-bold text-cyan-400 hover:text-cyan-300"
              >
                kleber@ziontechgroup.com
              </a>
              <p className="text-gray-300 mt-2">24/7 email support available</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SupportPage;
