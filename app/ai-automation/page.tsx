'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Automation Solutions - Zion Tech Group</title>
        <meta name="description" content="Streamline your business processes with intelligent automation solutions powered by AI." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">AI Automation Solutions</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Automate complex business processes with AI-driven solutions that learn and adapt to your needs.
          </p>
        </div>
      </div>
    </>
  );
};

export default AiAutomationPage;