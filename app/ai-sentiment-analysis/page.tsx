'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Brain, BarChart, Zap, Shield, Users, Clock, CheckCircle, ArrowRight, TrendingUp, MessageSquare, Smile } from 'lucide-react';

const AiSentimentAnalysisPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Sentiment Analysis - Emotion Detection & Analysis | Zion Tech Group</title>
        <meta name="description" content="Analyze emotions and sentiment in text, voice, and video with our AI sentiment analysis platform. Real-time emotion detection for better customer insights." />
        <meta name="keywords" content="AI sentiment analysis, emotion detection, text analysis, voice sentiment, customer insights, emotion AI" />
        <meta property="og:title" content="AI Sentiment Analysis - Emotion Detection & Analysis" />
        <meta property="og:description" content="Analyze emotions and sentiment in text, voice, and video with our AI sentiment analysis platform. Real-time emotion detection for better customer insights." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Sentiment Analysis - Emotion Detection & Analysis" />
        <meta name="twitter:description" content="Analyze emotions and sentiment in text, voice, and video with our AI sentiment analysis platform. Real-time emotion detection for better customer insights." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Sentiment Analysis
                <span className="block text-cyan-400">Emotion Detection & Analysis</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Analyze emotions and sentiment in text, voice, and video with our advanced AI platform. 
                Gain deeper customer insights and improve experiences with real-time emotion detection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Try Free Analysis
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Advanced Sentiment Analysis Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Multi-Modal Analysis</h3>
                <p className="text-gray-300 mb-4">
                  Analyze sentiment across text, voice, and video with 95%+ accuracy using advanced AI models.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />Text sentiment</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />Voice emotion</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />Facial expressions</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Real-time Processing</h3>
                <p className="text-gray-300 mb-4">
                  Process sentiment analysis in real-time with sub-second response times for live applications.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-2" />Live analysis</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-2" />Stream processing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-2" />Instant results</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Advanced Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive sentiment analytics with trends, patterns, and actionable insights.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Trend analysis</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Pattern recognition</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Custom dashboards</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Social Media Monitoring</h3>
                <p className="text-gray-300 mb-4">
                  Monitor brand sentiment across social media platforms and online conversations.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Multi-platform support</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Brand monitoring</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Crisis detection</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Privacy & Security</h3>
                <p className="text-gray-300 mb-4">
                  Enterprise-grade security with data privacy protection and compliance standards.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" />GDPR compliant</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" />Data encryption</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" />Secure processing</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Customer Insights</h3>
                <p className="text-gray-300 mb-4">
                  Deep customer sentiment insights to improve satisfaction and business outcomes.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-pink-400 mr-2" />Customer satisfaction</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-pink-400 mr-2" />Churn prediction</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-pink-400 mr-2" />Experience optimization</li>
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
                <h3 className="text-2xl font-bold text-white mb-6">Customer Service</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Call Center Analytics</h4>
                      <p className="text-gray-300">Analyze customer emotions during calls to improve service quality</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Chatbot Optimization</h4>
                      <p className="text-gray-300">Improve chatbot responses based on customer sentiment analysis</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Escalation Detection</h4>
                      <p className="text-gray-300">Automatically detect frustrated customers and escalate to human agents</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Marketing & Brand Management</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Brand Monitoring</h4>
                      <p className="text-gray-300">Track brand sentiment across social media and online platforms</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Campaign Analysis</h4>
                      <p className="text-gray-300">Measure emotional response to marketing campaigns and content</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Crisis Management</h4>
                      <p className="text-gray-300">Detect negative sentiment spikes and respond proactively</p>
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
                <div className="text-4xl font-bold text-cyan-400 mb-6">$79<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Up to 10,000 analyses/month</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Text sentiment only</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Email support</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Basic analytics</li>
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
                <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Up to 100,000 analyses/month</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Multi-modal analysis</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Priority support</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Advanced analytics</li>
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
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Unlimited analyses</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />All features included</li>
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
              Ready to Understand Your Customers Better?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using our AI sentiment analysis platform to gain deeper customer insights and improve experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Free Analysis
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiSentimentAnalysisPage;