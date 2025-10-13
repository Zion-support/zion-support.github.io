import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ZionAiSurveyBuilder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion AI Survey Builder - Zion Tech Group</title>
        <meta name="description" content="AI-powered survey builder by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Zion AI Survey Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create intelligent surveys with AI-powered analytics and insights.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Questions</h3>
              <p className="text-gray-600">
                Generate intelligent survey questions using AI.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Analytics</h3>
              <p className="text-gray-600">
                Get insights from survey responses with AI analysis.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Templates</h3>
              <p className="text-gray-600">
                Use pre-built templates or create custom surveys.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
