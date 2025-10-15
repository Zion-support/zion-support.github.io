import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Our comprehensive range of AI and IT services" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Our Services</h1>
          <p className="text-xl text-gray-300">Comprehensive AI and IT services coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;