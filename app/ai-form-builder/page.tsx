import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIFormBuilderPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Form Builder Pro - Zion Tech Group</title>
        <meta name="description" content="Intelligent form creation platform with smart field suggestions, conditional logic, and automated responses." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Zion AI Form Builder Pro</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create smart forms with AI assistance, smart field suggestions, and automated responses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Smart Field Suggestions</li>
                <li>• Conditional Logic</li>
                <li>• Automated Responses</li>
                <li>• Multi-step Forms</li>
                <li>• Payment Integration</li>
                <li>• Analytics & Insights</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">$19 - $149/month</div>
              <p className="text-gray-600">Flexible pricing based on form submissions and features</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIFormBuilderPage;