'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, TrendingUp, Users, Database, Zap, Shield, CheckCircle, ArrowRight, Star, Globe, Clock, DollarSign } from 'lucide-react';

const ZionAnalyticsProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - Business Intelligence Platform | Zion Tech Group</title>
        <meta name="description" content="Advanced business intelligence platform with real-time analytics, predictive insights, and automated reporting. Transform your data into actionable business intelligence." />
        <meta name="keywords" content="business intelligence, analytics dashboard, data visualization, predictive analytics, automated reporting, real-time insights" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-analytics-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mb-6">
                <BarChart className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                Zion Analytics Pro
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
                Advanced Business Intelligence Platform
              </p>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your data into actionable insights with our comprehensive business intelligence platform. 
                Get real-time analytics, predictive insights, and automated reporting to drive informed business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="cyber-button-enhanced px-8 py-4 text-lg font-semibold">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text-enhanced">
              Powerful Analytics Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Real-time Analytics</h3>
                <p className="text-gray-300 mb-4">Monitor your business metrics in real-time with live dashboards and instant updates.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Live data streaming</li>
                  <li>• Instant notifications</li>
                  <li>• Custom refresh rates</li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Data Integration</h3>
                <p className="text-gray-300 mb-4">Connect to 100+ data sources including databases, APIs, and cloud services.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 100+ connectors</li>
                  <li>• Automated data sync</li>
                  <li>• Data transformation</li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Predictive Analytics</h3>
                <p className="text-gray-300 mb-4">AI-powered forecasting and trend analysis to predict future business outcomes.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Machine learning models</li>
                  <li>• Trend forecasting</li>
                  <li>• Anomaly detection</li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300 mb-4">Bank-level security with role-based access control and data encryption.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• End-to-end encryption</li>
                  <li>• Role-based access</li>
                  <li>• Audit trails</li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Automated Reporting</h3>
                <p className="text-gray-300 mb-4">Generate and distribute reports automatically with customizable schedules.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Scheduled reports</li>
                  <li>• Custom templates</li>
                  <li>• Multi-format export</li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Team Collaboration</h3>
                <p className="text-gray-300 mb-4">Share insights and collaborate with your team through interactive dashboards.</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Shared dashboards</li>
                  <li>• Comment system</li>
                  <li>• Team workspaces</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text-enhanced">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card-enhanced p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 5 data sources
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    10 dashboards
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic reporting
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <button className="w-full cyber-button-enhanced py-3">
                  Get Started
                </button>
              </div>

              <div className="cyber-card-enhanced p-8 border-2 border-cyan-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 25 data sources
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited dashboards
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Predictive insights
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                </ul>
                <button className="w-full cyber-button-enhanced py-3">
                  Get Started
                </button>
              </div>

              <div className="cyber-card-enhanced p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited data sources
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    White-label solution
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    On-premise deployment
                  </li>
                </ul>
                <button className="w-full border-2 border-cyan-400 text-cyan-400 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text-enhanced">
              Ready to Transform Your Data?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses using Zion Analytics Pro to make data-driven decisions and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="cyber-button-enhanced px-8 py-4 text-lg font-semibold">
                Start Your Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAnalyticsProPage;