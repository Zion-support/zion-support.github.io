'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Globe, Shield, Zap, Users, Target } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Advanced AI and machine learning solutions',
      category: 'AI & ML'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise solutions and quantum computing',
      category: 'Enterprise'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Enhanced service capabilities',
    'Global reach and support',
    'Joint innovation projects',
    'Shared expertise and resources',
    'Market expansion opportunities'
  ];

  return (
    <>
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Our strategic partners and technology alliances that help us deliver world-class AI and IT solutions." />
        <meta name="keywords" content="partners, alliances, technology partnerships, cloud providers, AI solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Our Partners
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Strategic Technology Alliances
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              We work with leading technology companies to deliver the best solutions 
              and services to our clients worldwide.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Technology Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-800 rounded-lg flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-sm text-cyan-400 mb-3">{partner.category}</p>
                  <p className="text-gray-300 text-sm">{partner.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Partnership Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Interested in Partnering with Us?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our network of technology partners and help us deliver innovative solutions to clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button">
                Become a Partner
              </a>
              <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Call: (302) 464-0950
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;