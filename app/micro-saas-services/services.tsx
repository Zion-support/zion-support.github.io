import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Professional Services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="services, AI solutions, IT services, Zion Tech Group, services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Services</h1>
          <p className="text-lg text-gray-300 mb-8">Professional services coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;