'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';

const AIQualityAssurancePage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="AI Quality Assurance - Zion Tech Group"
        description="Advanced AI-powered quality assurance for automated testing, bug detection, and quality control. Ensure product quality with AI technology."
        keywords="AI quality assurance, automated testing, bug detection, quality control, testing automation, QA technology"
      />
      
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 holographic-text">AI Quality Assurance</h1>
          <p className="text-xl text-gray-300 mb-8">Coming Soon - Advanced AI-powered quality assurance</p>
          <div className="cyber-loader mx-auto"></div>
        </div>
      </div>
    </>
  );
};

export default AIQualityAssurancePage;