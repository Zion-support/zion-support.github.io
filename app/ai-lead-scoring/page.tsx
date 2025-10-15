import React from 'react';
import { Helmet } from 'react-helmet-async';

const AILeadScoringPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Lead Scoring Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced lead scoring system using machine learning to identify high-quality prospects and optimize sales efforts." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Zion AI Lead Scoring Pro</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Score leads with AI precision using machine learning to identify high-quality prospects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Machine Learning Scoring</li>
                <li>• Behavioral Analysis</li>
                <li>• Demographic Scoring</li>
                <li>• Engagement Tracking</li>
                <li>• Predictive Analytics</li>
                <li>• Custom Scoring Models</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">$79 - $599/month</div>
              <p className="text-gray-600">Flexible pricing based on leads processed and features</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AILeadScoringPage;