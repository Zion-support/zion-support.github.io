import React from 'react';
import { Helmet } from 'react-helmet-async';

const AILegalAssistantPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Legal Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered legal assistant for document analysis, contract review, and legal research. Streamline your legal processes with cutting-edge AI technology." />
        <meta name="keywords" content="AI legal assistant, legal AI, contract analysis, legal research, document review, legal automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-legal-assistant" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              AI Legal Assistant
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your legal practice with our advanced AI-powered legal assistant. 
              Streamline document analysis, contract review, and legal research with cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold text-white mb-4">Contract Analysis</h3>
              <p className="text-gray-300">
                Automatically analyze contracts for key terms, risks, and compliance issues with AI-powered insights.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-white mb-4">Document Review</h3>
              <p className="text-gray-300">
                Quickly review and extract key information from legal documents with intelligent AI processing.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-4">Legal Research</h3>
              <p className="text-gray-300">
                Access comprehensive legal databases and get AI-powered research assistance for case law and precedents.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">Risk Assessment</h3>
              <p className="text-gray-300">
                Identify potential legal risks and compliance issues before they become problems.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-white mb-4">Document Generation</h3>
              <p className="text-gray-300">
                Generate legal documents, contracts, and briefs with AI assistance and legal templates.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold text-white mb-4">Deadline Tracking</h3>
              <p className="text-gray-300">
                Never miss important legal deadlines with intelligent calendar and reminder systems.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Legal Practice?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 neon-glow"
              >
                Get Started Today
              </a>
              <a 
                href="/pricing" 
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AILegalAssistantPage;