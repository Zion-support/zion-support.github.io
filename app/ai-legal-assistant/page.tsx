'use client';
import React from 'react';
import { Scale, FileText, Search, Shield, Target, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AILegalAssistantPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Legal Assistant - Zion Tech Group"
        description="AI-powered legal services including contract analysis, legal research, document generation, and compliance checking. Streamline legal processes with intelligent automation."
        keywords={['AI legal assistant', 'contract analysis', 'legal research', 'document generation', 'compliance checking', 'legal automation']}
        canonicalUrl="https://ziontechgroup.com/ai-legal-assistant"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Legal Assistant
            </h1>
            <p className="text-xl text-indigo-400 mb-8 font-medium">
              Intelligent Legal Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Streamline your legal processes with AI-powered automation. From contract analysis to compliance checking, 
              our intelligent legal assistant helps you navigate complex legal requirements efficiently.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Legal Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <FileText className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Contract Analysis</h3>
                <p className="text-gray-300">Automated contract review and analysis</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Search className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Legal Research</h3>
                <p className="text-gray-300">Intelligent legal research and case analysis</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Compliance Checking</h3>
                <p className="text-gray-300">Automated compliance monitoring and alerts</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Automate Your Legal Processes?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our legal AI experts today to discuss how automation can improve your legal operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Get Started Today
                </a>
                <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300">
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AILegalAssistantPage;