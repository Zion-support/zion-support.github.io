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
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Automation Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automate complex business processes with intelligent AI systems that learn and adapt to your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Process Automation</h3>
              <p className="text-gray-600">Automate repetitive tasks and workflows to increase efficiency.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Smart Workflows</h3>
              <p className="text-gray-600">Create intelligent workflows that adapt and optimize over time.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Decision Automation</h3>
              <p className="text-gray-600">Let AI make informed decisions based on data and business rules.</p>
            </div>
          </div>
        </div> (Fix merge conflicts in TypeScript files)
      </div>
    </>
  );
};

export default AiAutomationPage;