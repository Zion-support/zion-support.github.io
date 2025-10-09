import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { HelpCircle, MessageCircle, Phone, Mail, CheckCircle } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      icon: HelpCircle,
      title: 'Help Center',
      description: 'Browse our knowledge base for answers',
      href: '/help',
      action: 'Visit Help Center'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      href: '/chat',
      action: 'Start Chat'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      href: 'tel:+13024640950',
      action: 'Call (302) 464-0950'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      href: 'mailto:kleber@ziontechgroup.com',
      action: 'Send Email'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Support
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              We're here to help you succeed
            </p>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="text-cyan-400 mr-3">
                      <option.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {option.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {option.description}
                  </p>
                  
                  <a
                    href={option.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    {option.action}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SupportPage;