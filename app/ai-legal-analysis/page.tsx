'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Scale, FileText, Search, Shield, BarChart, Users, Clock, CheckCircle, ArrowRight, Brain, Cloud, Database, Smartphone, Settings, Target, Lightbulb, Zap, BookOpen, Gavel, Lock } from 'lucide-react';

const AILegalAnalysisPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Legal Analysis Solutions | Zion Tech Group</title>
        <meta name="description" content="AI-powered legal analysis and document processing solutions for law firms, legal departments, and compliance teams. Automate contract review, case research, and legal document analysis." />
        <meta name="keywords" content="AI legal analysis, legal AI, contract review, legal document processing, law firm automation, legal compliance" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-legal-analysis" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Scale className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Legal Analysis
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize legal practice with AI-powered document analysis, contract review, case research, and compliance monitoring solutions for modern law firms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Brain className="w-5 h-5 mr-2" />
                  Start Legal AI Demo
                </button>
                <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <BarChart className="w-5 h-5 mr-2" />
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Legal Analysis Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered legal platform provides comprehensive solutions for document analysis, case research, and legal compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Contract Analysis</h3>
                <p className="text-gray-300 mb-6">
                  AI-powered contract review and analysis with risk assessment, clause identification, and compliance checking.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Automated contract review
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Risk assessment scoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Clause comparison and analysis
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Legal Research</h3>
                <p className="text-gray-300 mb-6">
                  Advanced legal research capabilities with case law analysis, precedent identification, and citation verification.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Case law database search
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Precedent identification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Citation accuracy verification
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Gavel className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Case Management</h3>
                <p className="text-gray-300 mb-6">
                  Intelligent case management with timeline tracking, document organization, and deadline monitoring.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Automated timeline tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Document categorization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Deadline alerts and reminders
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Compliance Monitoring</h3>
                <p className="text-gray-300 mb-6">
                  Automated compliance checking and regulatory monitoring with real-time updates and alerts.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Regulatory change tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Compliance gap analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Automated reporting
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Document Processing</h3>
                <p className="text-gray-300 mb-6">
                  Intelligent document processing with OCR, text extraction, and legal entity recognition.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    OCR and text extraction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Legal entity recognition
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Document classification
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Legal Analytics</h3>
                <p className="text-gray-300 mb-6">
                  Advanced analytics and insights for case outcomes, billing optimization, and practice management.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Case outcome prediction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Billing time optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                    Practice performance metrics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Legal Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your legal practice with AI technology that delivers measurable results and improves efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">90%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Time Savings</h3>
                <p className="text-gray-300">Reduction in document review time</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">95%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Accuracy</h3>
                <p className="text-gray-300">Legal document analysis accuracy</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">70%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Cost Reduction</h3>
                <p className="text-gray-300">Reduction in legal research costs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">99%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Compliance</h3>
                <p className="text-gray-300">Regulatory compliance accuracy</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading law firms already using AI to improve efficiency, accuracy, and client satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                <Brain className="w-5 h-5 mr-2" />
                Start Legal AI Demo
              </button>
              <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AILegalAnalysisPage;