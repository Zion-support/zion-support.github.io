'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';


const AiSalesAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Sales Automation - Zion Tech Group</title>
        <meta name="description" content="Boost sales performance with AI-powered automation tools for lead generation, qualification, and conversion optimization." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Sales Automation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Accelerate sales growth with AI-powered automation tools for lead generation, qualification, and conversion.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Lead Scoring</h3>
              <p className="text-gray-600">AI-powered lead scoring and qualification systems.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Sales Forecasting</h3>
              <p className="text-gray-600">Predictive analytics for accurate sales forecasting.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Follow-up Automation</h3>
              <p className="text-gray-600">Automated follow-up sequences and nurturing campaigns.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiSalesAutomationPage;