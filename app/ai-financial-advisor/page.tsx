'use client';
import React from 'react';
import { DollarSign, TrendingUp, Shield, Target, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIFinancialAdvisorPage: React.FC = () => {
  const features = [
    'Portfolio Analysis',
    'Risk Assessment',
    'Tax Optimization',
    'Retirement Planning',
    'Investment Recommendations',
    'Market Analysis',
    'Goal Setting',
    'Performance Tracking'
  ];

  const benefits = [
    'Better returns',
    'Risk management',
    'Tax savings',
    'Automated planning'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="AI Financial Advisor">
            AI Financial Advisor
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Personalized financial planning with AI-powered investment advice and portfolio optimization.
          </p>
          <div className="text-2xl font-bold text-cyan-400 mb-8">Starting at $299/month</div>
        </section>

        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Proven Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.split(' ')[0]}</div>
                  <p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Optimize Your Finances?</h2>
            <p className="text-lg text-gray-300 mb-8">Contact us today to discuss your financial planning needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">Get Free Consultation</a>
              <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                <Phone className="w-5 h-5" />Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIFinancialAdvisorPage;