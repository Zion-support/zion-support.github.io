import React from 'react';
import { Helmet } from 'react-helmet-async';

const AILegalAssistantPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Legal Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced AI Legal Assistant for document analysis, contract review, and legal research. Streamline your legal processes with cutting-edge AI technology." />
        <meta name="keywords" content="AI legal assistant, legal AI, contract analysis, legal research, document review, legal automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-legal-assistant" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
                AI Legal Assistant
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced AI-powered legal assistance for document analysis, contract review, and legal research
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Document Analysis</h2>
                <p className="text-gray-300 mb-4">
                  Automatically analyze legal documents, contracts, and agreements with AI-powered insights and recommendations.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Contract clause analysis</li>
                  <li>• Risk assessment</li>
                  <li>• Compliance checking</li>
                  <li>• Document summarization</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Legal Research</h2>
                <p className="text-gray-300 mb-4">
                  Access comprehensive legal databases and get AI-powered research assistance for your cases.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Case law research</li>
                  <li>• Precedent analysis</li>
                  <li>• Legal citation checking</li>
                  <li>• Regulatory updates</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Contract Review</h3>
                  <p className="text-gray-300 text-sm">Automated contract analysis and risk identification</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Legal Research</h3>
                  <p className="text-gray-300 text-sm">AI-powered legal research and case analysis</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Document Generation</h3>
                  <p className="text-gray-300 text-sm">Automated legal document creation and templates</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                Get Started with AI Legal Assistant
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AILegalAssistantPage;