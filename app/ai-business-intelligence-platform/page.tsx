'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, BarChart, Zap, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Globe, Code, Target, Sparkles, Cpu, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Workflow, Wifi, MessageSquare, ShoppingCart, Phone, Mail, MapPin, PieChart, LineChart, Activity, TrendingDown, Eye, Filter, Download, Upload, RefreshCw } from 'lucide-react';

const AiBusinessIntelligencePlatformPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <Helmet>
        <title>AI Business Intelligence Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered business intelligence platform with real-time analytics, predictive insights, and automated reporting. Transform your data into actionable intelligence." />
        <meta name="keywords" content="business intelligence, AI analytics, data visualization, predictive analytics, automated reporting, dashboard, KPI tracking" />
        <meta property="og:title" content="AI Business Intelligence Platform | Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered business intelligence platform with real-time analytics, predictive insights, and automated reporting. Transform your data into actionable intelligence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-business-intelligence-platform" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-business-intelligence-platform" />
      </Helmet>
      
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
                <BarChart className="w-4 h-4 mr-2" />
                AI-Powered Analytics
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Business Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Platform</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business data into actionable intelligence with our AI-powered platform. 
                Get real-time insights, predictive analytics, and automated reporting that drives growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="#demo" className="inline-flex items-center px-8 py-4 border border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300">
                  <BarChart className="w-5 h-5 mr-2" />
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful BI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive business intelligence tools powered by artificial intelligence to help you make data-driven decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Real-Time Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Monitor your business metrics in real-time with live dashboards and instant updates.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Live data streaming</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Instant notifications</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Custom dashboards</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Insights</h3>
                <p className="text-gray-300 mb-4">
                  Get intelligent recommendations and predictions based on your data patterns and trends.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Predictive analytics</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Anomaly detection</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Smart recommendations</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <PieChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Advanced Visualizations</h3>
                <p className="text-gray-300 mb-4">
                  Create stunning charts, graphs, and interactive visualizations to present your data effectively.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Interactive charts</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Custom visualizations</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Drill-down capabilities</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Automated Reporting</h3>
                <p className="text-gray-300 mb-4">
                  Generate and distribute reports automatically with scheduled delivery and custom templates.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Scheduled reports</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Email distribution</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Custom templates</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Data Integration</h3>
                <p className="text-gray-300 mb-4">
                  Connect to multiple data sources and integrate them seamlessly for comprehensive analysis.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Multiple data sources</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Real-time sync</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Data cleansing</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300 mb-4">
                  Bank-level security with role-based access control and data encryption for your sensitive information.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Role-based access</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Data encryption</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Audit trails</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Interactive Dashboard Preview
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of our AI-driven business intelligence platform with these sample dashboards.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-6">Sales Performance Dashboard</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Total Revenue</span>
                    <span className="text-2xl font-bold text-emerald-400">$2.4M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Growth Rate</span>
                    <span className="text-lg font-semibold text-green-400">+12.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Active Customers</span>
                    <span className="text-lg font-semibold text-blue-400">1,247</span>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg flex items-center justify-center">
                    <BarChart className="w-16 h-16 text-emerald-400" />
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-6">Marketing Analytics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Website Traffic</span>
                    <span className="text-2xl font-bold text-blue-400">45.2K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Conversion Rate</span>
                    <span className="text-lg font-semibold text-green-400">3.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Lead Generation</span>
                    <span className="text-lg font-semibold text-purple-400">892</span>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <LineChart className="w-16 h-16 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored business intelligence solutions for different industries and use cases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-xl p-8 border border-emerald-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">E-commerce & Retail</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Sales performance tracking</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Customer behavior analysis</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Inventory optimization</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Marketing ROI analysis</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-xl p-8 border border-blue-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Healthcare</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Patient outcome tracking</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Resource utilization</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Clinical performance metrics</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Financial performance</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-8 border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Financial Services</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Risk assessment</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Portfolio performance</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Fraud detection</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Regulatory compliance</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-xl p-8 border border-orange-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Manufacturing</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Production efficiency</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Quality control metrics</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Supply chain optimization</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Predictive maintenance</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-900/50 to-blue-900/50 rounded-xl p-8 border border-indigo-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">SaaS & Technology</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />User engagement metrics</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Churn prediction</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Feature usage analytics</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Revenue optimization</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-900/50 to-cyan-900/50 rounded-xl p-8 border border-teal-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Real Estate</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Property performance</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Market trend analysis</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Lead conversion tracking</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Investment ROI</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business intelligence needs. Start with our free trial.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                  <p className="text-gray-300 mb-4">Perfect for small teams</p>
                  <div className="text-4xl font-bold text-white mb-2">$99<span className="text-lg text-gray-300">/month</span></div>
                  <p className="text-sm text-gray-400">Up to 5 users</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Basic dashboards</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />5 data sources</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Standard reports</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Email support</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />1GB data storage</li>
                </ul>
                <a href="#contact" className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 text-center block">
                  Start Free Trial
                </a>
              </div>

              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl p-8 border border-emerald-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                  <p className="text-emerald-100 mb-4">Ideal for growing businesses</p>
                  <div className="text-4xl font-bold text-white mb-2">$299<span className="text-lg text-emerald-100">/month</span></div>
                  <p className="text-sm text-emerald-200">Up to 25 users</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />Advanced dashboards</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />Unlimited data sources</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />AI-powered insights</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />Automated reporting</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />Priority support</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />50GB data storage</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />Custom integrations</li>
                </ul>
                <a href="#contact" className="w-full bg-white text-emerald-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 text-center block">
                  Start Free Trial
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <p className="text-gray-300 mb-4">For large organizations</p>
                  <div className="text-4xl font-bold text-white mb-2">$999<span className="text-lg text-gray-300">/month</span></div>
                  <p className="text-sm text-gray-400">Unlimited users</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />All features included</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Custom development</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Dedicated support</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />On-premise deployment</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />SLA guarantee</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Unlimited storage</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Training & certification</li>
                </ul>
                <a href="#contact" className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contact our BI experts to discuss your analytics needs and get started with a free trial.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-emerald-400 mr-4" />
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <p className="text-gray-300">+1 302 464 0950</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-emerald-400 mr-4" />
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-300">kleber@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-emerald-400 mr-4" />
                    <div>
                      <p className="text-white font-semibold">Address</p>
                      <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <form className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Company</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your company" />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Tell us about your BI needs..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AiBusinessIntelligencePlatformPage;