'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ConsultationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Get a free consultation for your AI and IT needs with our experts." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Free Consultation</h1>
          <p className="text-gray-300 text-lg">Schedule your free consultation with our AI and IT experts.</p>
        </div>
      </div>
    </>
  );
};

export default ConsultationPage;