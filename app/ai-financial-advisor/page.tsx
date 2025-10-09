'use client';
import React from 'react';
import { DollarSign, TrendingUp, PieChart, Target, Shield, Calculator } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIFinancialAdvisorPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Financial Advisor - Zion Tech Group"
        description="AI-powered financial advisory services with portfolio analysis, risk assessment, tax optimization, and retirement planning. Personalized financial guidance powered by artificial intelligence."
        keywords={['AI financial advisor', 'portfolio analysis', 'risk assessment', 'tax optimization', 'retirement planning', 'financial AI']}
        canonicalUrl="https://ziontechgroup.com/ai-financial-advisor"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Financial Advisor
            </h1>
            <p className="text-xl text-green-400 mb-8 font-medium">
              Intelligent Financial Guidance
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Get personalized financial advice powered by AI. From portfolio analysis to retirement planning, 
              our intelligent financial advisor helps you make informed investment decisions.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Financial Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <PieChart className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Portfolio Analysis</h3>
                <p className="text-gray-300">Comprehensive investment portfolio analysis</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Risk Assessment</h3>
                <p className="text-gray-300">Advanced risk analysis and management</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Calculator className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Tax Optimization</h3>
                <p className="text-gray-300">Strategic tax planning and optimization</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Optimize Your Finances?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our financial AI experts today to discuss your investment strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Get Started Today
                </a>
                <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300">
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

export default AIFinancialAdvisorPage;