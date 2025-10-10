'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Scale, Brain, Target, Users, Globe, Shield } from 'lucide-react';

const AILegalAnalysisPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Legal Analysis Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered legal analysis tools for document review, contract analysis, and legal research. Streamline legal processes with intelligent automation." />
        <meta name="keywords" content="AI legal analysis, legal AI, contract analysis, document review, legal automation, legal tech" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-legal-analysis" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Legal Analysis
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform legal practice with AI-powered document analysis, contract review, 
                and intelligent legal research tools for enhanced efficiency and accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              AI Legal Analysis Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <FileText className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Document Analysis</h3>
                <p className="text-gray-300">
                  AI-powered document review and analysis that identifies key clauses, 
                  risks, and opportunities in legal documents.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <Scale className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Contract Intelligence</h3>
                <p className="text-gray-300">
                  Automated contract analysis that extracts terms, identifies risks, 
                  and suggests improvements for better outcomes.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <Brain className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Legal Research</h3>
                <p className="text-gray-300">
                  Intelligent legal research tools that find relevant case law, 
                  statutes, and precedents with high accuracy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Revolutionize Your Legal Practice
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our legal AI experts to learn how our solutions can 
              streamline your legal processes and improve outcomes.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Contact Us Today
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AILegalAnalysisPage;