'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, Star, Globe, Shield, Zap } from 'lucide-react';

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
      description: 'Advanced cloud computing and AI platform solutions',
      category: 'Cloud Computing'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise AI and hybrid cloud solutions',
      category: 'Enterprise AI'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market strategies',
    'Technical support and training',
    'Co-marketing opportunities',
    'Priority support and resources',
    'Innovation collaboration'
  ];

  return (
    <>
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Our strategic partnerships with leading technology companies to deliver world-class solutions." />
        <meta name="keywords" content="partners, partnerships, technology partners, strategic alliances" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic partnerships with industry leaders to deliver exceptional solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="aspect-video bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400">{partner.name}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300 mb-2">{partner.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
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
        </div>
      </div>
    </>
  );
};

export default PartnersPage;