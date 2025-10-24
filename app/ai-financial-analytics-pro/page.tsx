'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Calculator, BarChart, CheckCircle, Brain, Shield } from 'lucide-react';

const AiFinancialAnalyticsProPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Financial Analytics
              <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered financial analytics platform for comprehensive financial analysis, 
              reporting, and intelligent insights to drive better business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Advanced Financial Analytics Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive financial analysis tools powered by AI to help you make informed business decisions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Advanced Financial Analytics</h3>
                <p className="text-gray-300 mb-4">Comprehensive financial analysis with real-time data processing and predictive modeling.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Real-time reporting
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Predictive analytics
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Automated Calculations</h3>
                <p className="text-gray-300 mb-4">Automatically calculate complex financial metrics and ratios with AI-powered accuracy.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Financial ratios
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    ROI calculations
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Security & Compliance</h3>
                <p className="text-gray-300 mb-4">Enterprise-grade security with full compliance to financial regulations and standards.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Data encryption
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Audit trails
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI-Powered Insights</h3>
                <p className="text-gray-300 mb-4">Get intelligent recommendations and insights based on your financial data patterns.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Smart recommendations
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Anomaly detection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Financial Analysis?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading businesses using our AI-powered financial analytics to make better decisions and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-emerald-400 text-emerald-400 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
  );
};

export default AiFinancialAnalyticsProPage;