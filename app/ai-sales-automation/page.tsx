'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiSalesAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Professional IT services and solutions." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1>Services</h1>
          <p>Professional IT services and solutions.</p>
        </div>
      </div>
    </>
  );
};

export default AiSalesAutomationPage;
