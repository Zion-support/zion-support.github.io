import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ZionAiCrmPro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion AI CRM Pro - Zion Tech Group</title>
        <meta name="description" content="Customer relationship management enhanced with AI." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion AI CRM Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Customer relationship management enhanced with AI.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">

              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Lead Scoring</h3>
              <p className="text-gray-600">
                Automatically score and prioritize leads using AI algorithms.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Automation</h3>
              <p className="text-gray-600">
                Automate repetitive tasks and workflows with intelligent automation.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Insights</h3>
              <p className="text-gray-600">
                Get deep insights into customer behavior and preferences.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}