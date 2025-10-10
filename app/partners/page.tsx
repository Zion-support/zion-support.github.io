'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ExternalLink, CheckCircle, Star } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/microsoft-logo.png',
      description: 'Strategic partnership for cloud solutions and AI services',
      category: 'Technology Partner',
      benefits: [
        'Azure cloud integration',
        'AI/ML platform access',
        'Joint go-to-market initiatives'
      ]
    },
    {
      name: 'Amazon Web Services',
      logo: '/aws-logo.png',
      description: 'Premier AWS partner delivering scalable cloud solutions',
      category: 'Cloud Partner',
      benefits: [
        'AWS certified solutions',
        'Cost optimization services',
        'Migration expertise'
      ]
    },
    {
      name: 'Google Cloud',
      logo: '/google-cloud-logo.png',
      description: 'Google Cloud partner specializing in data analytics and AI',
      category: 'AI Partner',
      benefits: [
        'Google AI/ML tools',
        'Data analytics solutions',
        'Machine learning expertise'
      ]
    },
    {
      name: 'IBM',
      logo: '/ibm-logo.png',
      description: 'IBM partner for enterprise AI and cybersecurity solutions',
      category: 'Enterprise Partner',
      benefits: [
        'Watson AI platform',
        'Enterprise security solutions',
        'Industry-specific expertise'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Partners
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We work with industry leaders to deliver the best solutions for our clients.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-800">{partner.name.charAt(0)}</span>
                  </div>
                  <span className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {partner.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-gray-300 mb-6">{partner.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Partnership Benefits:</h4>
                  <ul className="space-y-2">
                    {partner.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors group">
                  Learn More
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join our partner ecosystem and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Partner with Us
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Partner Benefits
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnersPage;
