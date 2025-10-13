import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ZionAiCrmPro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion AI CRM Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered CRM solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion AI CRM Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Intelligent customer relationship management powered by AI.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lead Scoring</h3>
              <p className="text-gray-600">
                AI-powered lead scoring to identify your best prospects.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Follow-ups</h3>
              <p className="text-gray-600">
                Smart automation for customer follow-ups and engagement.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sales Forecasting</h3>
              <p className="text-gray-600">
                Accurate sales forecasting with AI-powered predictions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}