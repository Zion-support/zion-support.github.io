'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  GlobeAltIcon,
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
  CogIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

export default function AISocialMediaCommandCenterPage() {
  return (
    <>
      <Helmet>
        <title>AI Social Media Command Center - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered social media management platform that automates content creation, scheduling, engagement, and analytics across all major social platforms." />
        <meta name="keywords" content="social media management, AI content creation, social media automation, social media analytics, social media scheduling" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Social Media Command Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Master social media with AI-powered automation and insights
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our comprehensive AI-powered social media management platform automates content creation, 
              scheduling, engagement, and analytics across all major platforms, increasing your social 
              media ROI by up to 300% while saving 80% of your time.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete Social Media Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to dominate social media with AI-powered automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LightBulbIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Content Creation</h3>
              <p className="text-gray-300 mb-6">
                Generate engaging posts, captions, and visual content using AI that understands your brand voice and audience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Brand voice training</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Visual content generation</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Hashtag optimization</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ClockIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Scheduling</h3>
              <p className="text-gray-300 mb-6">
                AI-powered scheduling that posts at optimal times for maximum engagement across all platforms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Optimal timing analysis</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Cross-platform posting</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Content calendar</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Engagement</h3>
              <p className="text-gray-300 mb-6">
                Automatically respond to comments, messages, and mentions with AI that maintains your brand voice.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Auto-responses</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Sentiment analysis</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Crisis management</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Analytics</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive analytics and insights to track performance and optimize your social media strategy.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Performance metrics</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Audience insights</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Competitor analysis</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Influencer Management</h3>
              <p className="text-gray-300 mb-6">
                Find, manage, and collaborate with influencers using AI-powered matching and performance tracking.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Influencer discovery</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Campaign management</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">ROI tracking</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <RocketLaunchIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Campaign Automation</h3>
              <p className="text-gray-300 mb-6">
                Automate entire social media campaigns from creation to optimization with AI-driven insights.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Campaign templates</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">A/B testing</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Auto-optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Support Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-pink-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              All Major Platforms Supported
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage all your social media accounts from one unified dashboard
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <GlobeAltIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Facebook & Instagram</h3>
              <p className="text-gray-300">
                Complete management of Facebook and Instagram accounts with advanced targeting and analytics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChatBubbleLeftRightIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Twitter & LinkedIn</h3>
              <p className="text-gray-300">
                Professional networking and micro-blogging with AI-powered content optimization.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">TikTok & YouTube</h3>
              <p className="text-gray-300">
                Video content management and optimization for short-form and long-form video platforms.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Pinterest & Snapchat</h3>
              <p className="text-gray-300">
                Visual content management and story-based marketing with AI optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Affordable Social Media Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that matches your social media presence and growth goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">$149<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Up to 5 social accounts</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Basic AI content creation</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Email support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Basic analytics</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-pink-700 hover:to-rose-700 transition-all">
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-br from-pink-800 to-rose-800 p-8 rounded-xl border border-pink-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">$399<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Up to 20 social accounts</span>
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
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Influencer management</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-white text-pink-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-all">
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">Custom<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Unlimited accounts</span>
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
                  <span>API access</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-pink-700 hover:to-rose-700 transition-all">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-pink-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Dominate Social Media?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Start your AI-powered social media transformation today and see results in days
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Social Media Audit
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-pink-400 text-pink-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-pink-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-pink-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}