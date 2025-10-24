'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const DataAnalyticsBIPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Data Analytics & BI - Zion Tech Group</title>
        <meta name="description" content="Advanced data analytics and business intelligence solutions including data visualization, reporting, and insights for data-driven decision making." />
        <meta name="keywords" content="data analytics, business intelligence, data visualization, reporting, insights, data-driven decisions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5 xl font-bold text-white mb-6">Data Analytics & BI</h1>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Advanced data analytics and business intelligence solutions including data visualization, reporting, and insights for data-driven decision making.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataAnalyticsBIPage;