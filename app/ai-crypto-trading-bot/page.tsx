'use client';
import React from 'react';
import { ArrowLeft, TrendingUp, Shield, DollarSign, BarChart, Clock, CheckCircle, Star, Users, Bot, Zap, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICryptoTradingBot: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Back Button */}
        <a
          href="/"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </a>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6">₿</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            AI Crypto Trading Bot
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Automated cryptocurrency trading with AI-powered market analysis, risk management, and profit optimization
          </p>
          <div className="text-3xl font-bold text-cyan-400 mb-8">$199/month</div>
          <a
            href="/contact"
            className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
          >
            Start Trading Now
          </a>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="cyber-card p-6 text-center">
              <Bot className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Automated Trading</h3>
              <p className="text-gray-300">24/7 automated trading with AI-powered decision making and execution</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <BarChart className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Market Analysis</h3>
              <p className="text-gray-300">Advanced market analysis using machine learning and technical indicators</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Risk Management</h3>
              <p className="text-gray-300">Sophisticated risk management with stop-loss and position sizing</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Portfolio Optimization</h3>
              <p className="text-gray-300">AI-powered portfolio optimization for maximum returns and diversification</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Real-time Alerts</h3>
              <p className="text-gray-300">Instant notifications for market opportunities and important events</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <Target className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Backtesting</h3>
              <p className="text-gray-300">Test strategies on historical data before deploying with real money</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">24/7 Trading</h3>
              <p className="text-gray-300 mb-4">Never miss a trading opportunity with round-the-clock automated trading</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Continuous market monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Instant trade execution
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  No emotional trading decisions
                </li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Emotion-free Decisions</h3>
              <p className="text-gray-300 mb-4">Eliminate emotional trading and stick to proven strategies</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Data-driven trading decisions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Consistent strategy execution
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Reduced psychological stress
                </li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Higher Profits</h3>
              <p className="text-gray-300 mb-4">Maximize your trading profits with AI-powered optimization</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Advanced market analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Optimal entry and exit points
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Portfolio diversification
                </li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Risk Management</h3>
              <p className="text-gray-300 mb-4">Protect your investments with sophisticated risk management</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Automated stop-loss orders
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Position sizing optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Market volatility protection
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trading Strategies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Trading Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="cyber-card p-6 text-center">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Scalping</h3>
              <p className="text-gray-300 text-sm">High-frequency trading for quick profits from small price movements</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <h3 className="text-lg font-bold text-green-400 mb-3">Swing Trading</h3>
              <p className="text-gray-300 text-sm">Medium-term trades capturing price swings over days or weeks</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <h3 className="text-lg font-bold text-purple-400 mb-3">Arbitrage</h3>
              <p className="text-gray-300 text-sm">Exploiting price differences across different exchanges</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <h3 className="text-lg font-bold text-yellow-400 mb-3">DCA Strategy</h3>
              <p className="text-gray-300 text-sm">Dollar-cost averaging for long-term investment growth</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99/month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Up to $10K trading capital
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Basic trading strategies
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Mobile app access
                </li>
              </ul>
              <a href="/contact" className="cyber-button px-6 py-3 w-full">Get Started</a>
            </div>
            <div className="cyber-card p-8 text-center ring-2 ring-cyan-400">
              <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199/month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Up to $100K trading capital
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Advanced trading strategies
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Real-time alerts
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Backtesting tools
                </li>
              </ul>
              <a href="/contact" className="cyber-button px-6 py-3 w-full">Get Started</a>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$499/month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Unlimited trading capital
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Custom strategies
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  API access
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  White-label options
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  24/7 dedicated support
                </li>
              </ul>
              <a href="/contact" className="cyber-button px-6 py-3 w-full">Get Started</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Ready to Start Automated Trading?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of traders who are already using AI to maximize their crypto profits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Clock className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AICryptoTradingBot;