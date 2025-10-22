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
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Automation Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automate complex business processes with intelligent AI systems that learn and adapt to your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Process Automation</h3>
              <p className="text-gray-600">Automate repetitive tasks and workflows with AI intelligence.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Document Processing</h3>
              <p className="text-gray-600">Intelligent document analysis and automated data extraction.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Decision Support</h3>
              <p className="text-gray-600">AI-powered decision making for complex business scenarios.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiAutomationPage
