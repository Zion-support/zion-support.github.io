'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';

const AIFinancialAdvisorPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="AI Financial Advisor - Zion Tech Group"
        description="Advanced AI-powered financial advisor for investment analysis, portfolio management, and financial planning. Make informed financial decisions with AI."
        keywords="AI financial advisor, investment analysis, portfolio management, financial planning, wealth management, financial technology"
      />
      
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 holographic-text">AI Financial Advisor</h1>
          <p className="text-xl text-gray-300 mb-8">Coming Soon - Advanced AI-powered financial advisory</p>
          <div className="cyber-loader mx-auto"></div>
        </div>
      </div>
    </>
  );
};

export default AIFinancialAdvisorPage;