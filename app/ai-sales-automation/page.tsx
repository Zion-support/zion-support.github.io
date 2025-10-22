'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiSalesAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Sales Automation - Zion Tech Group</title>
        <meta name="description" content="Boost sales performance with AI-powered automation tools for lead generation, qualification, and conversion." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Sales Automation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Boost sales performance with AI-powered automation tools for lead generation, qualification, and conversion.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Lead Scoring</h3>
              <p className="text-gray-600">AI-powered lead scoring to identify the most promising prospects.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Email Automation</h3>
              <p className="text-gray-600">Automated email campaigns that adapt based on customer behavior.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Sales Forecasting</h3>
              <p className="text-gray-600">Predict sales outcomes and optimize pipeline management.</p>
            </div>
          </div>ursor/fix-errors-and-merge-to-main-b63b
        </div>
      </div>
    </>
  );
};

export default AiSalesAutomationPage;