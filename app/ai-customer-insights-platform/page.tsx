'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  EyeIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export default function AICustomerInsightsPlatformPage() {
  return (
    <>
      <Helmet>
        <title>AI Customer Insights Platform - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered customer insights platform that analyzes customer behavior, predicts churn, and provides actionable recommendations to increase retention and revenue." />
        <meta name="keywords" content="customer insights, AI analytics, customer behavior, churn prediction, customer retention, customer intelligence" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Customer Insights Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform customer data into actionable insights with AI
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our AI-powered platform analyzes customer behavior patterns, predicts churn risk, 
              and provides personalized recommendations to increase customer lifetime value by up to 40%.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Customer Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to understand, predict, and optimize customer relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Behavioral Analytics</h3>
              <p className="text-gray-300 mb-6">
                Deep analysis of customer interactions, preferences, and engagement patterns across all touchpoints.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Multi-channel tracking</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Journey mapping</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Engagement scoring</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HeartIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Churn Prediction</h3>
              <p className="text-gray-300 mb-6">
                AI-powered churn prediction with 95% accuracy, identifying at-risk customers before they leave.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Early warning system</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Risk scoring</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Retention strategies</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LightBulbIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Personalized Recommendations</h3>
              <p className="text-gray-300 mb-6">
                AI-generated personalized recommendations for products, services, and engagement strategies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Product recommendations</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Content personalization</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Timing optimization</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sentiment Analysis</h3>
              <p className="text-gray-300 mb-6">
                Real-time sentiment analysis across all customer communications and feedback channels.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Real-time monitoring</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Multi-language support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Trend analysis</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Customer Segmentation</h3>
              <p className="text-gray-300 mb-6">
                AI-powered customer segmentation based on behavior, value, and engagement patterns.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Dynamic segmentation</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">RFM analysis</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Cohort analysis</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <RocketLaunchIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lifetime Value Prediction</h3>
              <p className="text-gray-300 mb-6">
                Predict customer lifetime value and identify high-value opportunities for growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">CLV forecasting</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Upsell opportunities</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Investment prioritization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that matches your customer data volume and analysis needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Up to 10,000 customers</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Email support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Monthly reports</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-cyan-700 transition-all">
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-800 to-indigo-800 p-8 rounded-xl border border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">$799<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Up to 100,000 customers</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Advanced AI features</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Real-time dashboards</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>API access</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-all">
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">Custom<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Unlimited customers</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Custom AI models</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>White-label solution</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>On-premise deployment</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-cyan-700 transition-all">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from our customer insights platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">40% Increase in CLV</h3>
              <p className="text-gray-300">
                Average customer lifetime value increase across all our clients.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">35% Churn Reduction</h3>
              <p className="text-gray-300">
                Significant reduction in customer churn with early intervention strategies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <LightBulbIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">95% Prediction Accuracy</h3>
              <p className="text-gray-300">
                Highly accurate predictions for churn, lifetime value, and behavior patterns.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <RocketLaunchIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">60% Faster Insights</h3>
              <p className="text-gray-300">
                Get actionable insights 60% faster than traditional analytics methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Unlock Customer Insights?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Start understanding your customers better and drive growth with AI-powered insights
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Customer Analysis
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-blue-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}