import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      action: 'Call (302) 464-0950',
      href: 'tel:+13024640950'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      action: 'Send Email',
      href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      action: 'Start Chat',
      href: '#'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance',
      action: 'Get Help',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-white mb-8">Support Center</h1>
        <p className="text-gray-300 mb-8">Get help from our expert support team. We're here to assist you 24/7.</p>
        
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportOptions.map((option, index) => (
            <a
              key={index}
              href={option.href}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300 group"
            >
              <option.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:text-cyan-300" />
              <h2 className="text-xl font-semibold text-white mb-2">{option.title}</h2>
              <p className="text-gray-300 mb-4">{option.description}</p>
              <span className="text-cyan-400 font-medium group-hover:text-cyan-300">
                {option.action} →
              </span>
            </a>
          ))}
        </section>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">How do I get started with your services?</h3>
              <p className="text-gray-300">Contact our team through any of the support channels above, and we'll schedule a consultation to discuss your needs.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">What is your response time?</h3>
              <p className="text-gray-300">We typically respond to inquiries within 2 hours during business hours and within 24 hours for after-hours requests.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Do you offer training for your solutions?</h3>
              <p className="text-gray-300">Yes, we provide comprehensive training for all our solutions to ensure your team can effectively use and maintain them.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SupportPage;
