'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Eye, BarChart, Zap, Shield, Users, Clock, CheckCircle, ArrowRight, Brain, Video, TrendingUp } from 'lucide-react';

const AiVideoAnalysisPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Video Analysis - Advanced Video Content Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your video content with our AI video analysis platform. Real-time video processing, object detection, sentiment analysis, and automated insights for businesses." />
        <meta name="keywords" content="AI video analysis, video processing, object detection, sentiment analysis, video intelligence, computer vision, automated video insights" />
        <meta property="og:title" content="AI Video Analysis - Advanced Video Content Intelligence" />
        <meta property="og:description" content="Transform your video content with our AI video analysis platform. Real-time video processing, object detection, sentiment analysis, and automated insights." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Video Analysis - Advanced Video Content Intelligence" />
        <meta name="twitter:description" content="Transform your video content with our AI video analysis platform. Real-time video processing, object detection, sentiment analysis, and automated insights." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Video Analysis
                <span className="block text-cyan-400">Intelligent Video Processing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your video content with advanced AI-powered analysis. Real-time processing, 
                object detection, sentiment analysis, and automated insights for maximum business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Advanced Video Intelligence Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Real-time Object Detection</h3>
                <p className="text-gray-300 mb-4">
                  Identify and track objects, people, and activities in real-time with 99.5% accuracy.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />Person detection & tracking</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />Vehicle recognition</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />Facial recognition</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Sentiment Analysis</h3>
                <p className="text-gray-300 mb-4">
                  Analyze emotions, expressions, and sentiment in video content for deeper insights.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-2" />Emotion detection</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-2" />Mood analysis</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-2" />Engagement scoring</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Analytics Dashboard</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive analytics and reporting with customizable dashboards and insights.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Real-time metrics</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Custom reports</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Data export</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Automated Processing</h3>
                <p className="text-gray-300 mb-4">
                  Process thousands of videos automatically with intelligent queuing and optimization.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Batch processing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Smart queuing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Auto-scaling</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Security & Privacy</h3>
                <p className="text-gray-300 mb-4">
                  Enterprise-grade security with end-to-end encryption and privacy protection.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" />End-to-end encryption</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" />GDPR compliant</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" />Secure storage</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Multi-user Support</h3>
                <p className="text-gray-300 mb-4">
                  Collaborative workspace with role-based access and team management features.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-pink-400 mr-2" />Team collaboration</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-pink-400 mr-2" />Role management</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-pink-400 mr-2" />Shared workspaces</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Industry Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Security & Surveillance</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Intrusion Detection</h4>
                      <p className="text-gray-300">Automatically detect unauthorized access and suspicious activities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Crowd Monitoring</h4>
                      <p className="text-gray-300">Monitor crowd density and behavior in real-time</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">License Plate Recognition</h4>
                      <p className="text-gray-300">Automatically identify and track vehicles</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Marketing & Analytics</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Customer Behavior Analysis</h4>
                      <p className="text-gray-300">Understand customer interactions and preferences</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Content Performance</h4>
                      <p className="text-gray-300">Analyze video content engagement and effectiveness</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Brand Monitoring</h4>
                      <p className="text-gray-300">Track brand mentions and sentiment across video content</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Flexible Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Up to 100 hours/month</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Basic object detection</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Email support</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Standard analytics</li>
                </ul>
                <button className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-cyan-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Up to 500 hours/month</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Advanced AI features</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Priority support</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Custom analytics</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />API access</li>
                </ul>
                <button className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Unlimited processing</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />All AI features</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />24/7 dedicated support</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Custom integrations</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />On-premise deployment</li>
                </ul>
                <button className="w-full border-2 border-cyan-400 text-cyan-400 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Video Analysis?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI video analysis platform to gain deeper insights and make better decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
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

export default AiVideoAnalysisPage;