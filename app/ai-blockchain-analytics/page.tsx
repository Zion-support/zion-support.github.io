'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, TrendingUp, BarChart, Shield, Globe, Zap, Target, Users, Lock, Settings, FileText, Brain, Activity } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIBlockchainAnalyticsPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEOHead 
        title="AI Blockchain Analytics - Advanced Crypto Intelligence | Zion Tech Group"
        description="Comprehensive AI-powered blockchain analytics platform for DeFi, NFT, and crypto market intelligence. Starting at $299/month."
        keywords="blockchain analytics, crypto analytics, DeFi analytics, NFT analytics, blockchain intelligence, crypto data, blockchain AI"
        canonical="https://ziontechgroup.com/ai-blockchain-analytics"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Blockchain AI Technology
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered Blockchain Analytics
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Unlock the full potential of blockchain data with our advanced AI analytics platform. 
                Get real-time insights, track DeFi protocols, analyze NFT markets, and make informed crypto decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Advanced Blockchain Analytics</h2>
              <p className="text-xl text-gray-300">Comprehensive tools for crypto market intelligence</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">DeFi Analytics</h3>
                <p className="text-gray-300 mb-4">Track liquidity, yield farming, and protocol performance across all major DeFi platforms.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Real-time TVL tracking
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Yield optimization
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Risk assessment
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">NFT Market Intelligence</h3>
                <p className="text-gray-300 mb-4">Analyze NFT collections, floor prices, and market trends with AI-powered insights.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Collection analysis
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Price predictions
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Rarity scoring
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Security Monitoring</h3>
                <p className="text-gray-300 mb-4">Monitor smart contracts, detect vulnerabilities, and track suspicious activities.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Smart contract audits
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Threat detection
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    Compliance tracking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Master Blockchain Analytics?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Join thousands of traders and analysts using our AI-powered platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </ErrorBoundary>
  );
};

export default AIBlockchainAnalyticsPage;