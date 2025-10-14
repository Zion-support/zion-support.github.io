import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIDataAnalyticsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered data analytics solutions for your business." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">AI Data Analytics</h1>
          <p className="text-xl text-gray-300 mb-8">
            Unlock insights from your data with our AI-powered analytics platform.
          </p>
        </div>
      </div>
    </>
  );
};

export default AIDataAnalyticsPage;