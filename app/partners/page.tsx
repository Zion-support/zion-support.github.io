'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Meet our technology partners and learn about our strategic alliances in AI and IT solutions." />
        <meta name="keywords" content="partners, technology partners, strategic alliances, AI partnerships, IT partnerships" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Our Partners</h1>
          <p className="text-xl text-gray-300 text-center mb-12">Strategic alliances with leading technology companies</p>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;
