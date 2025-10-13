import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiSentimentAnalyzer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <Helmet>
        <title>AI Sentiment Analyzer - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered sentiment analysis for customer feedback and social media monitoring." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Sentiment Analyzer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI-powered sentiment analysis for customer feedback and social media monitoring.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Analysis</h3>
              <p className="text-gray-600">
                Analyze sentiment in real-time across multiple data sources.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-language Support</h3>
              <p className="text-gray-600">
                Support for sentiment analysis in multiple languages and dialects.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Models</h3>
              <p className="text-gray-600">
                Train custom sentiment analysis models for your specific domain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}