'use client';
import React from 'react';
import { SEOOptimizer } from '../components/SEOOptimizer';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Phone, Mail, MapPin, CheckCircle, Star, Zap, Brain, Target, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const AIFinancialAdvisor: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Financial Advisor - Smart Investment & Wealth Management | Zion Tech Group"
        description="Revolutionary AI-powered financial advisory platform. Smart investment recommendations, portfolio optimization, risk assessment. Increase returns by 250%. Starting at $499/month. Call (302) 464-0950."
        keywords={['AI financial advisor', 'smart investment', 'portfolio optimization', 'wealth management AI', 'financial planning AI']}
        canonicalUrl="https://ziontechgroup.com/ai-financial-advisor"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch">
                AI Financial Advisor
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
                Smart Investment & Wealth Management
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your financial future with our AI-powered financial advisory platform. Get personalized 
                investment recommendations, portfolio optimization, and risk assessment. Achieve 250% better returns 
                with intelligent wealth management.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
                <div className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">250%</div>
                  <div className="text-sm text-gray-300">Better Returns</div>
                </div>
                <div className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                  <div className="text-sm text-gray-300">Accuracy Rate</div>
                </div>
                <div className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Market Monitoring</div>
                </div>
                <div className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">$10M+</div>
                  <div className="text-sm text-gray-300">Assets Managed</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              AI-Powered Financial Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">📈</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Smart Investment</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />AI-powered stock selection</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Market trend analysis</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Risk-return optimization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Real-time recommendations</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Portfolio Optimization</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Asset allocation optimization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Diversification strategies</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Rebalancing automation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Tax-loss harvesting</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">⚠️</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Risk Management</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Advanced risk assessment</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Volatility prediction</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Stress testing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Hedging strategies</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">📊</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Market Analysis</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Real-time market data</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Sentiment analysis</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Economic indicators</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />News impact analysis</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">💰</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Wealth Planning</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Retirement planning</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Tax optimization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Estate planning</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Goal tracking</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🔒</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Bank-Level Security</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />256-bit encryption</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />SOC 2 compliance</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Multi-factor authentication</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Regular security audits</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Premium Pricing Plans
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Individual</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$499<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Up to $100K portfolio</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Basic AI features</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Email support</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Monthly reports</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>

              <div className="cyber-card p-8 text-center border-2 border-cyan-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$999<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Up to $1M portfolio</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Advanced AI features</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Priority support</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Weekly reports</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>

              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Wealth Management</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$2,499<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Unlimited portfolio</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Full AI suite</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Personal advisor</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />24/7 phone support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Contact Sales</a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <div className="cyber-card p-8 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Optimize Your Wealth?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join thousands of investors using our AI Financial Advisor to maximize their returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button w-full sm:w-auto"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  📧 kleber@ziontechgroup.com
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

export default AIFinancialAdvisor;