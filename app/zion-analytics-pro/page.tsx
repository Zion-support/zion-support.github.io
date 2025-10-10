'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart, TrendingUp, Users, DollarSign, Shield, Zap, CheckCircle, ArrowRight, Star, Globe, Database, PieChart, LineChart, Activity, Target, Award, Brain, Cloud, Lock } from 'lucide-react'

const ZionAnalyticsPro: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - Advanced Business Intelligence Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your business data into actionable insights with Zion Analytics Pro. Advanced BI platform with AI-powered analytics, real-time dashboards, and predictive modeling." />
        <meta name="keywords" content="business intelligence, analytics platform, data visualization, predictive analytics, BI dashboard, data insights, Zion Analytics Pro" />
        <meta property="og:title" content="Zion Analytics Pro - Advanced Business Intelligence Platform" />
        <meta property="og:description" content="Transform your business data into actionable insights with Zion Analytics Pro. Advanced BI platform with AI-powered analytics and real-time dashboards." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-analytics-pro" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-analytics-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mb-6 shadow-lg shadow-green-500/25">
                <BarChart className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                Zion Analytics Pro
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced Business Intelligence Platform powered by AI. Transform your data into actionable insights with real-time analytics, predictive modeling, and intelligent dashboards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40">
                  Start Free Trial
                </button>
                <button className="border border-green-500 text-green-400 px-8 py-4 rounded-xl font-semibold hover:bg-green-500/10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Analytics Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to make data-driven decisions and drive business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Real-Time Analytics</h3>
                <p className="text-gray-300 mb-6">
                  Monitor your business metrics in real-time with live dashboards and instant data updates.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Live data streaming
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Instant notifications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Custom alerts
                  </li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI-Powered Insights</h3>
                <p className="text-gray-300 mb-6">
                  Leverage artificial intelligence to discover hidden patterns and generate actionable insights.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Predictive modeling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Anomaly detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Smart recommendations
                  </li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <PieChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Advanced Visualizations</h3>
                <p className="text-gray-300 mb-6">
                  Create stunning, interactive charts and graphs that make complex data easy to understand.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Interactive dashboards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Custom charts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Export capabilities
                  </li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Data Integration</h3>
                <p className="text-gray-300 mb-6">
                  Connect to any data source and unify your information in one powerful platform.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    100+ data connectors
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    API integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Real-time sync
                  </li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300 mb-6">
                  Bank-level security with advanced encryption and compliance features.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    End-to-end encryption
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Role-based access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    SOC 2 compliance
                  </li>
                </ul>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Automated Reports</h3>
                <p className="text-gray-300 mb-6">
                  Generate and schedule automated reports to keep stakeholders informed.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Scheduled reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Custom templates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Multi-format export
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core analytics features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">$29</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 5 data sources
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    10 custom dashboards
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic AI insights
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl border-2 border-green-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">$99</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
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
                    Advanced AI insights
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom integrations
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              <div className="cyber-card-enhanced p-8 rounded-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">$299</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited data sources
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    White-label solution
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom AI models
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    On-premise deployment
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card-enhanced p-12 rounded-3xl">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using Zion Analytics Pro to make better decisions with their data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40">
                  Start Your Free Trial
                </button>
                <button className="border border-green-500 text-green-400 px-8 py-4 rounded-xl font-semibold hover:bg-green-500/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ZionAnalyticsPro