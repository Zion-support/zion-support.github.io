import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiQualityAssurancePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Quality Assurance - Intelligent QA Solutions | Zion Tech Group</title>
        <meta name="description" content="Enhance quality assurance with AI-powered solutions. Automated testing, defect detection, and quality optimization." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">AI Quality Assurance</h1>
          <p className="text-gray-300">Coming Soon - Intelligent QA solutions powered by AI</p>
        </div>
      </div>
    </>
  );
};

export default AiQualityAssurancePage;