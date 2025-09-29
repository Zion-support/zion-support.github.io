import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import EnhancedAnalytics from '../components/EnhancedAnalytics';

const Analytics: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Analytics Dashboard - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive analytics dashboard for Zion Tech Group website performance and user engagement metrics."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />
        
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Analytics Dashboard
            </h1>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive insights into website performance, user engagement, and business metrics.
            </p>
          </div>
          
          <EnhancedAnalytics />
        </div>
      </div>
    </>
  );
};

export default Analytics;