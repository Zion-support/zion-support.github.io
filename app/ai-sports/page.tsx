'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Trophy, Users, BarChart, Clock, CheckCircle, ArrowRight, Brain, Cloud, Database, Smartphone, Settings, Target, Lightbulb, Zap, Activity, TrendingUp, Award, Target as TargetIcon, Play } from 'lucide-react';

const AISportsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Sports Solutions | Zion Tech Group</title>
        <meta name="description" content="AI-powered sports analytics, performance tracking, and training optimization solutions for athletes, teams, and sports organizations." />
        <meta name="keywords" content="AI sports, sports analytics, performance tracking, athlete training, sports AI, team optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-sports" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-2xl flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Sports
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize sports performance with AI-powered analytics, training optimization, and intelligent coaching systems for athletes and teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center">
                  <Brain className="w-5 h-5 mr-2" />
                  Start Performance Analysis
                </button>
                <button className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300 flex items-center justify-center">
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
                AI Sports Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered sports platform provides comprehensive solutions for performance optimization and team management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Performance Analytics</h3>
                <p className="text-gray-300 mb-6">
                  Advanced performance tracking with real-time metrics, movement analysis, and performance prediction models.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Real-time performance metrics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Movement pattern analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Performance prediction
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                  <TargetIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Training Optimization</h3>
                <p className="text-gray-300 mb-6">
                  AI-powered training programs with personalized workout plans, recovery optimization, and injury prevention.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Personalized training plans
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Recovery optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Injury risk assessment
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Team Management</h3>
                <p className="text-gray-300 mb-6">
                  Intelligent team management with player selection, formation optimization, and strategic planning tools.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Player selection optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Formation analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Strategic planning tools
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Game Analysis</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive game analysis with play-by-play breakdowns, opponent scouting, and tactical insights.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Play-by-play analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Opponent scouting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Tactical insights
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Talent Identification</h3>
                <p className="text-gray-300 mb-6">
                  AI-powered talent scouting and player development tracking for identifying and nurturing future stars.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Talent scouting algorithms
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Player development tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Potential assessment
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Sports Analytics</h3>
                <p className="text-gray-300 mb-6">
                  Advanced sports analytics with statistical modeling, trend analysis, and performance benchmarking.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Statistical modeling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Trend analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                    Performance benchmarking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Sports Performance Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI sports solutions deliver measurable improvements in performance, training efficiency, and team success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">25%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Performance Improvement</h3>
                <p className="text-gray-300">Average athlete performance increase</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">40%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Injury Reduction</h3>
                <p className="text-gray-300">Reduction in sports-related injuries</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">90%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Accuracy</h3>
                <p className="text-gray-300">Performance prediction accuracy</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">60%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Training Efficiency</h3>
                <p className="text-gray-300">Improvement in training effectiveness</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Elevate Your Sports Performance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join professional teams and athletes already using AI to achieve peak performance and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center">
                <Brain className="w-5 h-5 mr-2" />
                Start Performance Analysis
              </button>
              <button className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISportsPage;