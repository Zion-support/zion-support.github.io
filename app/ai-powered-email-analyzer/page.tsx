import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiPoweredEmailAnalyzerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI-Powered Email Analyzer - Zion Tech Group</title>
        <meta 
          name="description" 
          content="Advanced AI-powered email analysis solutions for security, productivity, and insights."
        />
        <meta 
          name="keywords" 
          content="AI email analyzer, email security, email analytics, AI email tools, email intelligence"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI-Powered Email Analyzer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Intelligent email analysis for enhanced security, productivity, and business insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Email Security Analysis</h3>
              <p className="text-gray-300 mb-4">
                AI-powered threat detection and phishing prevention for email security.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Sentiment Analysis</h3>
              <p className="text-gray-300 mb-4">
                Advanced sentiment analysis to understand email tone and context.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Productivity Insights</h3>
              <p className="text-gray-300 mb-4">
                AI-driven insights to improve email productivity and communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiPoweredEmailAnalyzerPage;
