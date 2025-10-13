import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiDataAnalyticsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Data Analytics - Advanced Data Analysis | Zion Tech Group</title>
        <meta name="description" content="Unlock insights from your data with AI-powered analytics. Advanced data processing, machine learning, and predictive analytics." />
      </Helmet>
      <div className="min-h-screen pt-16">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Analytics</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform raw data into actionable insights with AI-powered analytics
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiDataAnalyticsPage;