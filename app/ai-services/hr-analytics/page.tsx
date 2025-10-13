import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiHrAnalyticsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI HR Analytics - Human Resources Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform HR with AI-powered analytics. Employee insights, performance tracking, and predictive HR management." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">AI HR Analytics</h1>
          <p className="text-gray-300">Coming Soon - Human resources intelligence powered by AI</p>
        </div>
      </div>
    </>
  );
};

export default AiHrAnalyticsPage;