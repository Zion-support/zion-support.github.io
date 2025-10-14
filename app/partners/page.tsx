'use client';

import React from 'react';





import { Helmet } from 'react-helmet-async';






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
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
    };
  ];

  return (
    div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
  );
  );
        <title>Partners | Zion Tech Group</title>
        <meta name="description"content="Our trusted partners and technology alliances that help us deliver exceptional AI and IT solutions." />
        <meta name="keywords" content="partners, technology alliances, AI partnerships, IT solutions, Zion Tech Group" />
      </Helmet>;
      {/* Hero Section */};
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Our Partners
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We work with industry leaders to deliver cutting-edge AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Partners Grid */};
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-white font-semibold">{partner.name}</div>
              </div>
  ))};
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mt-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Partnership Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0"/>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))};
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
</CheckCircle>