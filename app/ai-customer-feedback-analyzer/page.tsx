import React from 'react';
import { Helmet } from 'react-helmet-async';

const AICustomerFeedbackAnalyzerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Customer Feedback Analyzer - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered customer feedback analysis system that extracts insights, sentiment, and actionable recommendations from customer feedback." />
        <meta name="keywords" content="customer feedback analysis, sentiment analysis, customer insights, feedback management, AI analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-customer-feedback-analyzer" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6">
                AI Customer Feedback <span className="text-sky-400">Analyzer</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced AI-powered customer feedback analysis system that extracts insights, sentiment, and actionable recommendations from customer feedback.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Sentiment Analysis</h3>
                <p className="text-gray-300 mb-4">
                  Analyze customer sentiment across all feedback channels to understand customer satisfaction and emotions.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Real-time sentiment analysis</li>
                  <li>• Emotion detection</li>
                  <li>• Trend analysis</li>
                  <li>• Multi-language support</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Insight Extraction</h3>
                <p className="text-gray-300 mb-4">
                  Extract actionable insights and recommendations from customer feedback to improve products and services.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Topic modeling</li>
                  <li>• Key theme identification</li>
                  <li>• Priority scoring</li>
                  <li>• Action recommendations</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Analytics Dashboard</h4>
                  <p className="text-gray-300">Comprehensive feedback analytics</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Smart Insights</h4>
                  <p className="text-gray-300">AI-generated actionable insights</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Real-time Processing</h4>
                  <p className="text-gray-300">Instant feedback analysis</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started with AI Customer Feedback Analyzer
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AICustomerFeedbackAnalyzerPage;