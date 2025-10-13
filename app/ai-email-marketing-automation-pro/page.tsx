import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  EnvelopeIcon, 
  ChartBarIcon, 
  CpuChipIcon,
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  PhoneIcon,
  MapPinIcon,
  UserGroupIcon,
  ClockIcon,
  EyeIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function AIEmailMarketingAutomationProPage() {
  return (
    <>
      <Helmet>
        <title>AI Email Marketing Automation Pro - Zion Tech Group</title>
        <meta name="description" content="AI-powered email marketing automation with smart segmentation, personalized content, and advanced analytics. Increase open rates by 200% and revenue by 150%." />
        <meta name="keywords" content="email marketing automation, AI email campaigns, email segmentation, personalized marketing, email analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              AI Email Marketing Automation Pro
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              AI-Powered Email Marketing That Converts Like Never Before
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Transform your email marketing with AI that learns from your audience behavior, creates personalized content, and optimizes send times for maximum engagement. Increase open rates by 200% and revenue by 150%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Watch Demo
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI algorithms that understand your audience and create highly personalized email campaigns that convert
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CpuChipIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Content Generation</h3>
              <p className="text-gray-300 mb-6">
                Generate compelling email content, subject lines, and CTAs using AI that understands your brand voice and audience preferences.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Segmentation</h3>
              <p className="text-gray-300 mb-6">
                Automatically segment your audience based on behavior, preferences, and engagement patterns for highly targeted campaigns.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ClockIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Optimal Send Times</h3>
              <p className="text-gray-300 mb-6">
                AI determines the best time to send emails to each subscriber based on their individual engagement patterns and time zones.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <SparklesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Personalization Engine</h3>
              <p className="text-gray-300 mb-6">
                Create highly personalized emails with dynamic content that adapts to each subscriber's interests, behavior, and purchase history.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Analytics</h3>
              <p className="text-gray-300 mb-6">
                Track performance with detailed analytics, A/B testing, and AI-powered insights to continuously optimize your campaigns.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <EyeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Predictive Analytics</h3>
              <p className="text-gray-300 mb-6">
                Predict subscriber behavior, identify at-risk customers, and optimize campaigns before they're sent using machine learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your email marketing needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$49<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Up to 5,000 subscribers
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited emails
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-purple-600 to-cyan-600 p-8 rounded-xl border-2 border-purple-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-white mb-6">$149<span className="text-lg text-purple-200">/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Up to 25,000 subscribers
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Advanced AI features
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  A/B testing
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Automation workflows
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  API access
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold text-center block hover:bg-gray-100 transition-all duration-300"
              >
                Start Pro Trial
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">Custom</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited subscribers
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Custom AI models
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  White-label solution
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  On-premise deployment
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
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
              Join thousands of businesses that have transformed their email marketing with our AI-powered platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">200%</div>
              <div className="text-gray-300">Average Open Rate Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">150%</div>
              <div className="text-gray-300">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
              <div className="text-gray-300">Time Saved on Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50,000+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Start your free trial today and experience the power of AI-driven email marketing
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <MapPinIcon className="w-6 h-6 text-purple-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}