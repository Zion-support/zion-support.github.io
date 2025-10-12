'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Automation - Zion Tech Group</title>
        <meta name="description" content="AI-powered automation solutions to streamline your business processes and workflows." />
        <meta name="keywords" content="AI automation, workflow automation, business process automation, AI solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered automation solutions to streamline your business processes and workflows.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAutomationPage;