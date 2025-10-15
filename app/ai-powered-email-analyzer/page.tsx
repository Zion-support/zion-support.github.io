import React from 'react';
import SEOHead from '../components/SEOHead';

const AiPoweredEmailAnalyzerPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="AI-Powered Email Analyzer - Zion Tech Group"
        description="Revolutionize your email communication with our AI-powered email analyzer. Get sentiment analysis, smart suggestions, and performance insights."
        keywords="AI email analyzer, email sentiment analysis, email optimization, AI communication, email insights"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">AI-Powered Email Analyzer</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Analyze and optimize your email communication with advanced AI technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Sentiment Analysis</h3>
              <p className="text-gray-300">Understand the emotional tone and sentiment of your emails.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Smart Suggestions</h3>
              <p className="text-gray-300">Get AI-powered recommendations to improve your email content.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Performance Insights</h3>
              <p className="text-gray-300">Track email performance and engagement metrics.</p>
            </div>
          </div>

          <div className="text-center">
            <button className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Try It Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiPoweredEmailAnalyzerPage;