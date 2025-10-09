'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Target, Users, TrendingUp, CheckCircle, ArrowRight, Brain, BarChart, MessageSquare, Eye, Clock, Star, Phone, MapPin, Mail, Calendar, FileText, Zap, Shield, DollarSign, Briefcase } from 'lucide-react';

const SalesCRMToolsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sales & CRM Tools - Zion Tech Group</title>
        <meta name="description" content="Powerful sales and CRM tools including lead management, pipeline tracking, and customer relationship management. Boost your sales performance and customer engagement." />
        <meta name="keywords" content="sales tools, CRM software, lead management, pipeline tracking, customer relationship management" />
        <meta property="og:title" content="Sales & CRM Tools - Zion Tech Group" />
        <meta property="og:description" content="Powerful sales and CRM tools including lead management, pipeline tracking, and customer relationship management. Boost your sales performance and customer engagement." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/sales-crm-tools" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sales & CRM Tools - Zion Tech Group" />
        <meta name="twitter:description" content="Powerful sales and CRM tools including lead management, pipeline tracking, and customer relationship management. Boost your sales performance and customer engagement." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Sales & CRM Tools
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Powerful sales and CRM tools including lead management, pipeline tracking, and customer relationship management. Boost your sales performance and customer engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Comprehensive Sales & CRM Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Lead Management</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Capture, track, and nurture leads throughout the entire sales process.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Lead capture
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Lead scoring
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Lead nurturing
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <BarChart className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Pipeline Tracking</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Visualize and track your sales pipeline with real-time updates and analytics.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Pipeline visualization
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Stage tracking
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Forecast accuracy
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Customer Management</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Manage customer relationships with comprehensive contact and interaction tracking.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Contact management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Interaction history
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Customer segmentation
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Sales Analytics</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Get insights into your sales performance with detailed analytics and reporting.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Sales metrics
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Performance dashboards
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Custom reports
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Email Marketing</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Create and send targeted email campaigns to nurture leads and engage customers.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Email campaigns
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Automation
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      A/B testing
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Activity Tracking</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Track sales activities and interactions to improve performance and accountability.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Activity logging
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Task management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Follow-up reminders
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Choose Your Plan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-6">$29<span className="text-lg text-gray-300">/user/month</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Basic CRM
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Lead management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Pipeline tracking
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Email support
                    </li>
                  </ul>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Get Started
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border-2 border-purple-400">
                  <div className="text-center mb-4">
                    <span className="bg-purple-400 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-6">$59<span className="text-lg text-gray-300">/user/month</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      All Basic features
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Advanced analytics
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Email marketing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Priority support
                    </li>
                  </ul>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Get Started
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-6">$99<span className="text-lg text-gray-300">/user/month</span></div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      All Professional features
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Advanced automation
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      Custom integrations
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      24/7 dedicated support
                    </li>
                  </ul>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">2,000+</div>
                    <div className="text-gray-300">Companies Using</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">35%</div>
                    <div className="text-gray-300">Sales Increase</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">50%</div>
                    <div className="text-gray-300">Time Saved</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">4.9/5</div>
                    <div className="text-gray-300">User Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Boost Your Sales?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies who are already using our sales tools to improve their performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SalesCRMToolsPage;