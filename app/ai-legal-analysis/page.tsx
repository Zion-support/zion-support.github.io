'use client';
import React from 'react';
import { FileText, Scale, Brain, Search, Shield, Users, Clock, BarChart } from 'lucide-react';

const AILegalAnalysisPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Legal Analysis
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Intelligent Legal Document Analysis & Research
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Advanced AI-powered legal analysis tools that process contracts, 
            identify risks, and provide intelligent legal insights with 99% accuracy.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <FileText className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Contract Analysis</h3>
              <p className="text-gray-300">
                AI-powered contract review that identifies risks, clauses, 
                and compliance issues in seconds.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Search className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Legal Research</h3>
              <p className="text-gray-300">
                Intelligent legal research that finds relevant cases, 
                statutes, and precedents instantly.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Scale className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Compliance Check</h3>
              <p className="text-gray-300">
                Automated compliance verification against regulations 
                and industry standards.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Brain className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Risk Assessment</h3>
              <p className="text-gray-300">
                AI-driven risk analysis that evaluates legal exposure 
                and suggests mitigation strategies.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Shield className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Document Security</h3>
              <p className="text-gray-300">
                Enterprise-grade security with encryption and access 
                controls for sensitive legal documents.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Analytics Dashboard</h3>
              <p className="text-gray-300">
                Comprehensive analytics on legal trends, case outcomes, 
                and document patterns.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Solo</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 50 documents/month</li>
                <li>Basic contract analysis</li>
                <li>Standard legal research</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Firm</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$599/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 500 documents/month</li>
                <li>Advanced AI analysis</li>
                <li>Compliance checking</li>
                <li>Priority support</li>
                <li>Team collaboration</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited documents</li>
                <li>Custom AI models</li>
                <li>Full analytics suite</li>
                <li>24/7 dedicated support</li>
                <li>On-premise deployment</li>
              </ul>
              <button className="cyber-button w-full">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and see how AI can revolutionize your legal analysis and research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Consultation
            </a>
            <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AILegalAnalysisPage;