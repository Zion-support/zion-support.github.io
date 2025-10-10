'use client';
import React from 'react';
import { Scale, FileText, Search, Clock, Shield, Brain } from 'lucide-react';

const AILegalAnalysisPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Legal Analysis
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered legal analysis tools that streamline document review, contract analysis, and legal research.
          </p>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="cyber-card p-6">
            <FileText className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Document Analysis</h3>
            <p className="text-gray-300">
              AI-powered analysis of legal documents with instant identification of key clauses and potential issues.
            </p>
          </div>

          <div className="cyber-card p-6">
            <Search className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Legal Research</h3>
            <p className="text-gray-300">
              Comprehensive legal research capabilities that find relevant cases, statutes, and precedents.
            </p>
          </div>

          <div className="cyber-card p-6">
            <Scale className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Contract Review</h3>
            <p className="text-gray-300">
              Automated contract review that identifies risks, inconsistencies, and compliance issues.
            </p>
          </div>

          <div className="cyber-card p-6">
            <Clock className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Time Tracking</h3>
            <p className="text-gray-300">
              Intelligent time tracking and billing that accurately captures billable hours and activities.
            </p>
          </div>

          <div className="cyber-card p-6">
            <Shield className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Compliance Monitoring</h3>
            <p className="text-gray-300">
              Continuous monitoring of regulatory changes and compliance requirements across jurisdictions.
            </p>
          </div>

          <div className="cyber-card p-6">
            <Brain className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Predictive Analytics</h3>
            <p className="text-gray-300">
              AI-driven predictions for case outcomes, settlement values, and legal strategy recommendations.
            </p>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Law Firms</h3>
              <p className="text-gray-300 mb-4">
                Streamline case preparation, document review, and client communication with AI-powered tools.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Case law research</li>
                <li>• Document discovery</li>
                <li>• Client intake automation</li>
              </ul>
            </div>

            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Corporate Legal</h3>
              <p className="text-gray-300 mb-4">
                Manage contracts, ensure compliance, and reduce legal risks across your organization.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Contract management</li>
                <li>• Regulatory compliance</li>
                <li>• Risk assessment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">75%</div>
              <p className="text-gray-300">Reduction in document review time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">90%</div>
              <p className="text-gray-300">Accuracy in contract analysis</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50%</div>
              <p className="text-gray-300">Cost savings on legal research</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Transform Your Legal Practice
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how AI can revolutionize your legal analysis and research capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button px-8 py-3 text-center"
            >
              Get Started
            </a>
            <a
              href="/demo"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Request Demo
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AILegalAnalysisPage;