import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiProcessAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Process Automation - Intelligent Business Automation | Zion Tech Group</title>
        <meta name="description" content="Automate business processes with AI-powered solutions. Workflow automation, intelligent routing, and process optimization." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">AI Process Automation</h1>
          <p className="text-gray-300">Coming Soon - Intelligent business automation powered by AI</p>
        </div>
      </div>
    </>
  );
};

export default AiProcessAutomationPage;