'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageComponent = () => {
  return (
    <>
      <Helmet>
        <title>Page Title - Zion Tech Group</title>
        <meta name="description" content="Page description" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center">Page Title</h1>
        </div>
      </div>
    </>
  );
};

export default AIAgriculturalIntelligenceProPage;
