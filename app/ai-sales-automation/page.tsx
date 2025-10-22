'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiSalesAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Sales Automation - Zion Tech Group</title>
        <meta name="description" content="Boost sales performance with AI-powered lead scoring, automated follow-ups, and intelligent sales forecasting." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">AI Sales Automation</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Boost sales performance with AI-powered lead scoring and automated sales processes.
          </p>
        </div>
      </div>
    </>
  );
};

export default AiSalesAutomationPage;