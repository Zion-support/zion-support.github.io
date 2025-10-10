'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Scale, FileText, BarChart, Brain, Target, Users, Globe, ArrowRight, Star, Award, TrendingUp, Search } from 'lucide-react';

const AILegalAnalysisPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Legal Analysis Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered legal analysis tools for document review, contract analysis, case research, and legal research automation. Streamline legal workflows with intelligent AI." />
        <meta name="keywords" content="AI legal analysis, legal AI, contract analysis, document review, legal research, law firm automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-legal-analysis" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Legal Analysis
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform legal practice with AI-powered document analysis, contract review, case research, 
                and legal research automation that enhances accuracy and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Advanced Legal Analysis Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered legal analysis platform provides comprehensive tools for modern legal practice
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Document Analysis</h3>
                <p className="text-gray-300 mb-4">
                  Intelligent analysis of legal documents, contracts, and case files with automated insights and summaries.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Contract review automation</li>
                  <li>• Document summarization</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Legal Research</h3>
                <p className="text-gray-300 mb-4">
                  AI-powered legal research that finds relevant cases, statutes, and precedents in seconds.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Case law research</li>
                  <li>• Statute analysis</li>
                  <li>• Precedent identification</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Contract Intelligence</h3>
                <p className="text-gray-300 mb-4">
                  Smart contract analysis that identifies clauses, risks, and opportunities for optimization.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Clause identification</li>
                  <li>• Risk detection</li>
                  <li>• Compliance checking</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Case Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive case analysis with outcome predictions and strategy recommendations.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Outcome prediction</li>
                  <li>• Strategy analysis</li>
                  <li>• Success metrics</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Due Diligence</h3>
                <p className="text-gray-300 mb-4">
                  Automated due diligence processes that accelerate M&A and investment analysis.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• M&A analysis</li>
                  <li>• Risk assessment</li>
                  <li>• Compliance review</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-green-500 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Legal Workflow</h3>
                <p className="text-gray-300 mb-4">
                  Streamlined legal workflows with automated document generation and case management.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Document automation</li>
                  <li>• Case management</li>
                  <li>• Team collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Transform Your Legal Practice
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance efficiency, accuracy, and client service with AI-powered legal tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">80% Time Savings</h3>
                <p className="text-gray-300">Reduce time spent on document review and research</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Higher Accuracy</h3>
                <p className="text-gray-300">AI-powered analysis reduces human error and oversight</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Better Outcomes</h3>
                <p className="text-gray-300">Data-driven insights improve case strategy and results</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Client Satisfaction</h3>
                <p className="text-gray-300">Faster, more accurate service improves client relationships</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Modernize Your Legal Practice?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover how AI can transform your legal workflows and improve client outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AILegalAnalysisPage;