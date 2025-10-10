'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, ArrowRight, Globe, Shield, Zap } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '🏢',
      description: 'Cloud infrastructure and AI services',
      category: 'Cloud & AI'
    },
    {
      name: 'Amazon Web Services',
      logo: '☁️',
      description: 'Cloud computing and storage solutions',
      category: 'Cloud'
    },
    {
      name: 'Google Cloud',
      logo: '🔍',
      description: 'AI and machine learning platforms',
      category: 'AI & ML'
    },
    {
      name: 'IBM',
      logo: '💼',
      description: 'Enterprise AI and quantum computing',
      category: 'Enterprise'
    },
    {
      name: 'Oracle',
      logo: '🗄️',
      description: 'Database and enterprise applications',
      category: 'Database'
    },
    {
      name: 'Salesforce',
      logo: '📊',
      description: 'CRM and customer experience platforms',
      category: 'CRM'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Comprehensive training and support',
    'Joint go-to-market opportunities',
    'Technical integration assistance',
    'Co-marketing and co-selling programs',
    'Priority support and escalation'
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Technology Partnerships</title>
        <meta name="description" content="Learn about our technology partnerships with leading companies like Microsoft, AWS, Google Cloud, and more." />
        <meta name="keywords" content="technology partners, cloud partners, AI partners, enterprise partnerships, Microsoft, AWS, Google Cloud" />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Technology partnerships with industry leaders" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Partners</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We work with leading technology partners to deliver the best solutions for our clients.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Technology Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{partner.logo}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-gray-300 mb-4">{partner.description}</p>
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                      {partner.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Partnership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Become a Partner</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and unlock new opportunities for growth and innovation.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Partner With Us
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;