'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiWorkflowAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Workflow Automation - Zion Tech Group</title>
        <meta name="description" content="Streamline your business workflows with intelligent automation solutions that adapt and optimize over time." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">AI Workflow Automation</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Streamline your business workflows with intelligent automation solutions that learn and optimize over time.
          </p>
        </div>
      </div>
    </>
  );
};

export default AiWorkflowAutomationPage;