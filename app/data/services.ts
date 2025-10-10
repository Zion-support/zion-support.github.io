'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

const Services.tsPage = () => {
  return (
    <>
      <Helmet>
        <title>Services.tsPage - Zion Tech Group</title>
        <meta name="description" content="Professional Services.tsPage services by Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Services.tsPage
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional Services.tsPage services designed to help your business grow and succeed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services.tsPage;