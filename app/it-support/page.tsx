'use client';
import React from 'react';
import { Users, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const ITSupportPage: React.FC = () => {
  const supportServices = [
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and assistance',
      features: ['Remote Support', 'Phone Support', 'Email Support', 'Live Chat']
    },
    {
      title: 'System Maintenance',
      description: 'Regular maintenance and updates for optimal performance',
      features: ['Software Updates', 'Security Patches', 'Performance Tuning', 'Preventive Maintenance']
    },
    {
      title: 'Hardware Management',
      description: 'Complete hardware lifecycle management',
      features: ['Hardware Procurement', 'Installation', 'Maintenance', 'Replacement']
    },
    {
      title: 'Help Desk Services',
      description: 'Comprehensive help desk and user support',
      features: ['Ticket Management', 'User Training', 'Documentation', 'Knowledge Base']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="IT Support & Maintenance - Zion Tech Group"
        description="Comprehensive IT support services including 24/7 support, system maintenance, hardware management, and help desk services. Keep your IT running smoothly."
        keywords={['IT support', 'technical support', 'system maintenance', 'help desk', 'IT services', 'computer support']}
        canonicalUrl="https://ziontechgroup.com/it-support"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              IT Support & Maintenance
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Keep your IT infrastructure running smoothly with our comprehensive support services.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportServices.map((service, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="cyber-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready for Reliable IT Support?</h2>
            <p className="text-gray-300 mb-6">Let's discuss your IT support needs.</p>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Contact Us
            </a>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ITSupportPage;