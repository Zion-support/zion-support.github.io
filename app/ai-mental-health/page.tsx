'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Brain, Users, Shield, BarChart, Clock, CheckCircle, ArrowRight, Cloud, Database, Smartphone, Settings, Target, Lightbulb, Zap, MessageCircle, Activity, TrendingUp, Headphones } from 'lucide-react';

const AIMentalHealthPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Mental Health Solutions | Zion Tech Group</title>
        <meta name="description" content="AI-powered mental health support and wellness solutions. Advanced chatbots, mood tracking, therapy assistance, and personalized mental health care using artificial intelligence." />
        <meta name="keywords" content="AI mental health, mental health AI, therapy chatbot, mood tracking, wellness AI, mental health support" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-mental-health" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Mental Health
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform mental healthcare with AI-powered support systems, personalized therapy assistance, and intelligent wellness monitoring for better mental health outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Brain className="w-5 h-5 mr-2" />
                  Start Wellness Assessment
                </button>
                <button className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <BarChart className="w-5 h-5 mr-2" />
                  View Success Stories
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Mental Health Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered mental health platform provides comprehensive support and personalized care solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI Therapy Chatbot</h3>
                <p className="text-gray-300 mb-6">
                  Intelligent conversational AI that provides 24/7 mental health support and crisis intervention.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Natural language processing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Crisis detection and response
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Personalized therapy techniques
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Mood Tracking</h3>
                <p className="text-gray-300 mb-6">
                  Advanced mood monitoring with AI analysis of patterns, triggers, and wellness indicators.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Real-time mood monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Pattern recognition
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Trigger identification
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Peer Support Network</h3>
                <p className="text-gray-300 mb-6">
                  AI-moderated peer support communities with intelligent matching and safety monitoring.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Intelligent peer matching
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Safe space monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Community guidelines enforcement
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Crisis Intervention</h3>
                <p className="text-gray-300 mb-6">
                  Immediate crisis detection and response with emergency protocols and professional escalation.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Real-time crisis detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Emergency response protocols
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Professional escalation
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Therapy Assistance</h3>
                <p className="text-gray-300 mb-6">
                  AI-powered therapy tools and techniques to support both patients and mental health professionals.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    CBT technique guidance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Progress tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Treatment recommendations
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Wellness Analytics</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive wellness insights and progress tracking with personalized recommendations.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Wellness trend analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Personalized recommendations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                    Progress visualization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Mental Health Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI mental health solutions are making a positive difference in people's lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">85%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">User Satisfaction</h3>
                <p className="text-gray-300">Reported improvement in mental wellness</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Availability</h3>
                <p className="text-gray-300">Round-the-clock mental health support</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">90%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Crisis Detection</h3>
                <p className="text-gray-300">Accuracy in crisis situation identification</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">60%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Cost Reduction</h3>
                <p className="text-gray-300">Reduction in mental healthcare costs</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Mental Health Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users who have found support and improved their mental wellness with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                <Brain className="w-5 h-5 mr-2" />
                Start Wellness Assessment
              </button>
              <button className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIMentalHealthPage;