import React from 'react';
import { Helmet } from 'react-helmet-async';

const AILeadScoringPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Lead Scoring - Zion Tech Group</title>
        <meta name="description" content="AI-powered lead scoring system to identify and prioritize high-quality leads for your sales team." />
        <meta name="keywords" content="AI lead scoring, lead qualification, sales automation, lead prioritization, predictive scoring" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Lead Scoring</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered lead scoring system to identify and prioritize high-quality leads for your sales team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive Scoring</h3>
              <p className="text-gray-600">
                Use machine learning algorithms to predict lead quality and conversion probability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Behavioral Analysis</h3>
              <p className="text-gray-600">
                Analyze lead behavior patterns to identify engagement levels and buying signals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Scoring</h3>
              <p className="text-gray-600">
                Score leads in real-time as they interact with your website and marketing materials.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Models</h3>
              <p className="text-gray-600">
                Build custom scoring models tailored to your industry and business requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lead Segmentation</h3>
              <p className="text-gray-600">
                Automatically segment leads based on score, behavior, and demographic data.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sales Integration</h3>
              <p className="text-gray-600">
                Integrate with your CRM and sales tools for seamless lead management.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Scoring Factors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Demographic Data</h3>
                <p className="text-gray-600">Score based on company size, industry, job title, and location.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Engagement Level</h3>
                <p className="text-gray-600">Track website visits, email opens, content downloads, and social interactions.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Buying Signals</h3>
                <p className="text-gray-600">Identify purchase intent through behavior patterns and content consumption.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fit Score</h3>
                <p className="text-gray-600">Assess how well the lead matches your ideal customer profile.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AILeadScoringPage;