import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ZionAiSurveyBuilder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion AI Survey Builder - Zion Tech Group</title>
        <meta name="description" content="Create and analyze surveys with AI-powered insights." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion AI Survey Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create and analyze surveys with AI-powered insights.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
<h3 className="text-xl font-semibold text-gray-900 mb-4">AI Question Generation</h3>
              <p className="text-gray-600">
                Generate intelligent survey questions based on your objectives and target audience.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Analytics</h3>
              <p className="text-gray-600">
                Get AI-powered insights and analysis from your survey responses.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customizable Templates</h3>
              <p className="text-gray-600">
                Choose from a variety of survey templates or create your own custom surveys.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}