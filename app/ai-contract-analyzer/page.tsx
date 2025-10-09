'use client';
import React from 'react';
import { ArrowLeft, CheckCircle, Shield, FileText, Clock, TrendingUp, AlertTriangle, Users } from 'lucide-react';
import Link from 'next/link';

const AIContractAnalyzerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">📋</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Contract Analyzer Pro
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Automated contract analysis with risk assessment, compliance checking, and intelligent clause suggestions. 
            Review contracts 80% faster with 95% accuracy.
          </p>
          <div className="text-3xl font-bold text-cyan-400 mb-4">$149/month</div>
          <div className="text-gray-300 mb-8">Starting price - No setup fees</div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="cyber-card p-6 text-center">
            <FileText className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Contract Analysis</h3>
            <p className="text-gray-300">AI-powered analysis of contract terms, clauses, and legal language</p>
          </div>
          <div className="cyber-card p-6 text-center">
            <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Risk Assessment</h3>
            <p className="text-gray-300">Automated identification of potential risks and red flags</p>
          </div>
          <div className="cyber-card p-6 text-center">
            <CheckCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Compliance Checking</h3>
            <p className="text-gray-300">Ensure contracts meet regulatory and company compliance standards</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="cyber-card p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose AI Contract Analyzer Pro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">80% Faster Reviews</h3>
                  <p className="text-gray-300">Reduce contract review time from hours to minutes with AI automation</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">95% Risk Detection</h3>
                  <p className="text-gray-300">AI identifies potential risks and issues that human reviewers might miss</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Legal Cost Savings</h3>
                  <p className="text-gray-300">Reduce legal review costs by up to 70% with automated analysis</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Compliance Assurance</h3>
                  <p className="text-gray-300">Ensure all contracts meet regulatory and company compliance requirements</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Clause Suggestions</h3>
                  <p className="text-gray-300">Get intelligent suggestions for contract improvements and optimizations</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Version Comparison</h3>
                  <p className="text-gray-300">Easily compare contract versions and track changes over time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="cyber-card p-6 text-center">
            <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Deadline Tracking</h3>
            <p className="text-sm text-gray-300">Automatically track important contract deadlines and renewal dates</p>
          </div>
          <div className="cyber-card p-6 text-center">
            <AlertTriangle className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Risk Alerts</h3>
            <p className="text-sm text-gray-300">Get instant alerts for high-risk contract terms and clauses</p>
          </div>
          <div className="cyber-card p-6 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Team Collaboration</h3>
            <p className="text-sm text-gray-300">Share analysis results and collaborate on contract reviews</p>
          </div>
          <div className="cyber-card p-6 text-center">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Analytics Dashboard</h3>
            <p className="text-sm text-gray-300">Track contract performance and review metrics over time</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Streamline Your Contract Reviews?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 200+ legal teams already using AI Contract Analyzer Pro to review contracts faster and more accurately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIContractAnalyzerPage;