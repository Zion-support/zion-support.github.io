'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Target, TrendingUp, Users, Zap, CheckCircle, ArrowRight, Star, Award, BarChart, Heart } from 'lucide-react';

const AIRecommendationEnginePage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Personalized Recommendations',
      description: 'Deliver highly relevant recommendations based on user behavior, preferences, and context.'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Learning',
      description: 'Continuously learn and adapt recommendations based on user interactions and feedback.'
    },
    {
      icon: Users,
      title: 'Collaborative Filtering',
      description: 'Leverage user similarity and item relationships to improve recommendation accuracy.'
    },
    {
      icon: Zap,
      title: 'Multi-algorithm Approach',
      description: 'Combine multiple ML algorithms for optimal recommendation performance and coverage.'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce',
      description: 'Product recommendations that increase sales by up to 35%.',
      impact: '+35%',
      icon: '🛒'
    },
    {
      title: 'Content Streaming',
      description: 'Movie, music, and content recommendations that boost engagement.',
      impact: '+40%',
      icon: '🎬'
    },
    {
      title: 'Social Media',
      description: 'Content and friend suggestions that increase user activity.',
      impact: '+25%',
      icon: '📱'
    },
    {
      title: 'News & Media',
      description: 'Article and content recommendations that increase read time.',
      impact: '+30%',
      icon: '📰'
    },
    {
      title: 'Job Matching',
      description: 'Job recommendations that improve candidate-role fit.',
      impact: '+45%',
      icon: '💼'
    },
    {
      title: 'Financial Services',
      description: 'Investment and financial product recommendations.',
      impact: '+20%',
      icon: '💰'
    }
  ];

  const benefits = [
    'Increase conversion rates by up to 35%',
    'Improve user engagement and retention',
    'Boost average order value and revenue',
    'Reduce customer acquisition costs',
    'Enhance user experience and satisfaction',
    'Scale personalization across all touchpoints'
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Recommendation Engine
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Boost sales, engagement, and user satisfaction with our intelligent recommendation engine. 
                Deliver personalized experiences that convert and retain customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Start Recommending
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  View Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">35%</div>
                <div className="text-gray-300">Sales Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Engagement Boost</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Real-time Updates</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Recommendation Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI recommendation engine uses cutting-edge machine learning algorithms 
                to deliver highly personalized and relevant recommendations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Recommendation Engine Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From e-commerce to content platforms, our recommendation engine 
                drives results across all industries and use cases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 hover:bg-slate-900/70 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{useCase.icon}</div>
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {useCase.impact} impact
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Recommendation Engine?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our AI recommendation engine delivers measurable results and 
                  transforms how you engage with your customers.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Click-through Rate:</span>
                    <span className="text-green-400 font-semibold">+35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Conversion Rate:</span>
                    <span className="text-green-400 font-semibold">+28%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">User Engagement:</span>
                    <span className="text-green-400 font-semibold">+40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Revenue Impact:</span>
                    <span className="text-green-400 font-semibold">+32%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Start Recommending Today</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join industry leaders who trust our recommendation engine to drive growth and engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIRecommendationEnginePage;