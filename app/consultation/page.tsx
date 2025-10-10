'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

const ConsultationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Consultation | Zion Tech Group</title>
        <meta name="description" content="Get a free consultation for your AI and IT needs. Our experts will help you find the perfect solution for your business." />
        <meta name="keywords" content="consultation, free consultation, AI consultation, IT consultation, business consultation" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Free Consultation</h1>
          <p className="text-xl text-gray-300 text-center mb-12">Get expert advice for your AI and IT needs</p>
        </div>
      </div>
    </>
  );
};

export default ConsultationPage;
