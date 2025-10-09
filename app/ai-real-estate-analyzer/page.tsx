'use client';
import React from 'react';
import { ArrowLeft, BarChart, TrendingUp, DollarSign, MapPin, Clock, CheckCircle, Star, Users, Building, Home, Calculator } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIRealEstateAnalyzer: React.FC = () => {
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
          <div className="text-6xl mb-6">🏠</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            AI Real Estate Analyzer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced property analysis with AI-powered market predictions, investment scoring, and rental yield optimization
          </p>
          <div className="text-3xl font-bold text-cyan-400 mb-8">$149/month</div>
          <a
            href="/contact"
            className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
          >
            Get Started Today
          </a>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="cyber-card p-6 text-center">
              <BarChart className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Market Analysis</h3>
              <p className="text-gray-300">Comprehensive market analysis with AI-powered insights and trend predictions</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Investment Scoring</h3>
              <p className="text-gray-300">AI-powered investment scoring based on multiple factors and market conditions</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Rental Yield Prediction</h3>
              <p className="text-gray-300">Predict rental yields and cash flow potential with advanced algorithms</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <Building className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Property Valuation</h3>
              <p className="text-gray-300">Accurate property valuation using AI and comparative market analysis</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Neighborhood Insights</h3>
              <p className="text-gray-300">Detailed neighborhood analysis including demographics, amenities, and growth potential</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <Calculator className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">ROI Calculations</h3>
              <p className="text-gray-300">Comprehensive ROI calculations and investment return projections</p>
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
              <h3 className="text-xl font-bold text-cyan-400 mb-4">25% Better Investment Decisions</h3>
              <p className="text-gray-300 mb-4">Make smarter investment choices with AI-powered analysis and predictions</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Risk assessment and mitigation strategies
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Market timing optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Portfolio diversification recommendations
                </li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">40% Time Savings</h3>
              <p className="text-gray-300 mb-4">Automate property research and analysis to save hours of manual work</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Automated data collection and analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Instant property reports and insights
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Real-time market updates and alerts
                </li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Higher ROI</h3>
              <p className="text-gray-300 mb-4">Maximize your investment returns with data-driven insights and recommendations</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Optimal pricing strategies
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Market opportunity identification
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Investment timing recommendations
                </li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Risk Reduction</h3>
              <p className="text-gray-300 mb-4">Minimize investment risks with comprehensive analysis and early warning systems</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Market volatility predictions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Property condition assessments
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Legal and regulatory compliance checks
                </li>
              </ul>
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
                  Up to 10 properties/month
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Basic market analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Investment scoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Email support
                </li>
              </ul>
              <a href="/contact" className="cyber-button px-6 py-3 w-full">Get Started</a>
            </div>
            <div className="cyber-card p-8 text-center ring-2 ring-cyan-400">
              <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$149/month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Up to 50 properties/month
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Advanced market analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Rental yield predictions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Neighborhood insights
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Priority support
                </li>
              </ul>
              <a href="/contact" className="cyber-button px-6 py-3 w-full">Get Started</a>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299/month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Unlimited properties
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  AI-powered insights
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Custom reports
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  API access
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  24/7 support
                </li>
              </ul>
              <a href="/contact" className="cyber-button px-6 py-3 w-full">Get Started</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Ready to Transform Your Real Estate Investments?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of investors who are already using AI to make smarter real estate decisions
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

export default AIRealEstateAnalyzer;