'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaaSSolutionsPage: React.FC = () => {
  const features = [
    'Scalable Architecture',
    '24/7 Support',
    'Easy Integration',
    'Custom Development',
    'Data Security',
    'Performance Monitoring'
  ];

  const stats = [
    { number: '50+', label: 'Micro SaaS Solutions' },
    { number: '200+', label: 'Happy Customers' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI and IT solutions by Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Micro SaaS Solutions</h1>
          <p className="text-gray-300 text-center">Coming soon...</p>
        </div>
      </div>    </>
  );
};

export default MicroSaaSSolutionsPage;