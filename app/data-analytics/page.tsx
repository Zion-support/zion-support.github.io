import React from 'react';
import { Helmet } from 'react-helmet-async';

const DataAnalyticsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced data analytics solutions to transform your data into actionable insights." />
        <meta name="keywords" content="data analytics, business intelligence, data visualization, big data, insights" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Analytics</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced analytics solutions.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-300">Coming Soon - Data Analytics Solutions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataAnalyticsPage;