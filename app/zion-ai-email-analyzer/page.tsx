import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAIEmailAnalyzerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Email Analyzer - Advanced Email Intelligence Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your email communication with Zion AI Email Analyzer. Advanced AI-powered email analysis, sentiment tracking, and intelligent insights for better business communication." />
        <meta name="keywords" content="AI email analyzer, email intelligence, email analytics, sentiment analysis, email insights, business communication, AI email tools" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Zion AI Email Analyzer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI-powered email analysis platform that transforms your email communication with intelligent insights, sentiment tracking, and automated optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Sentiment Analysis</h3>
              <p className="text-gray-300">
                Analyze email tone, sentiment, and emotional context to improve communication effectiveness.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Content Optimization</h3>
              <p className="text-gray-300">
                AI-powered suggestions to improve email clarity, engagement, and response rates.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Performance Tracking</h3>
              <p className="text-gray-300">
                Monitor email performance metrics and track communication effectiveness over time.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Get Started with Zion AI Email Analyzer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAIEmailAnalyzerPage;