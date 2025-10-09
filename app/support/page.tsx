import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { HelpCircle, MessageCircle, Phone, Mail, CheckCircle } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      action: 'Call (302) 464-0950'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      action: 'Send Email'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      action: 'Start Chat'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Support Center</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're here to help you succeed. Get the support you need when you need it.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all text-center">
                <div className="flex justify-center mb-4">
                  <option.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{option.title}</h3>
                <p className="text-gray-300 mb-4">{option.description}</p>
                <a
                  href={option.title === 'Phone Support' ? 'tel:+13024640950' : 'mailto:kleber@ziontechgroup.com'}
                  className="bg-cyan-400 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-300 transition-colors inline-block"
                >
                  {option.action}
                </a>
              </div>
            ))}
          </div>

          <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-white mb-2">How do I get started with your AI services?</h3>
                <p className="text-gray-300">Contact us at (302) 464-0950 or email kleber@ziontechgroup.com to schedule a consultation and discuss your specific needs.</p>
              </div>
              <div className="border-b border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-white mb-2">What is your typical response time?</h3>
                <p className="text-gray-300">We typically respond to inquiries within 24 hours during business days, and urgent issues are addressed immediately.</p>
              </div>
              <div className="border-b border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-white mb-2">Do you offer 24/7 support?</h3>
                <p className="text-gray-300">Yes, we provide 24/7 support for our enterprise clients and emergency support for all customers.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">What if I need custom development?</h3>
                <p className="text-gray-300">We offer custom AI and IT solutions tailored to your specific requirements. Contact us to discuss your project.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SupportPage;