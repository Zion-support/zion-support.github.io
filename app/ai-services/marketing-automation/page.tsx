import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiMarketingAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Marketing Automation - Intelligent Marketing Solutions | Zion Tech Group</title>
        <meta name="description" content="Automate your marketing with AI-powered solutions. Campaign optimization, customer segmentation, and intelligent automation." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">AI Marketing Automation</h1>
          <p className="text-gray-300">Coming Soon - Intelligent marketing automation powered by AI</p>
        </div>
      </div>
    </>
  );
};

export default AiMarketingAutomationPage;