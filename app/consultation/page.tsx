'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ConsultationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Schedule a free consultation with our experts to discuss your technology needs and solutions." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Free Consultation</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Schedule a free consultation with our experts to discuss your technology needs and solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default ConsultationPage;