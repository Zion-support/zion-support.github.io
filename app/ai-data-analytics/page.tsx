'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiDataAnalyticsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Unlock insights from your data with AI-powered analytics, predictive modeling, and business intelligence solutions." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">AI Data Analytics</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Unlock powerful insights from your data with AI-powered analytics and predictive modeling solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default AiDataAnalyticsPage;