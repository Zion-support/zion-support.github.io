'use client';
import React from 'react';
import { Target, TrendingUp, Users, Zap, BarChart, Heart, Star, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIRecommendationEnginePage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Personalized Recommendations',
      description: 'AI-powered recommendations that increase engagement by 300% and boost sales by 25%.'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Learning',
      description: 'Continuously learns from user behavior to improve recommendation accuracy.'
    },
    {
      icon: Users,
      title: 'Collaborative Filtering',
      description: 'Advanced algorithms that understand user preferences and similar user patterns.'
    },
    {
      icon: Zap,
      title: 'Content-Based Filtering',
      description: 'Analyzes content features to recommend similar items and services.'
    }
  ];

  const benefits = [
    '300% increase in engagement',
    '25% boost in sales',
    'Real-time personalization',
    'Multi-platform integration',
    'Advanced analytics dashboard',
    'ROI within 30 days'
  ];

  const useCases = [
    {
      title: 'E-commerce Recommendations',
      description: 'Increase sales with personalized product recommendations for online stores.',
      icon: Target
    },
    {
      title: 'Content Personalization',
      description: 'Deliver personalized content and articles to increase user engagement.',
      icon: TrendingUp
    },
    {
      title: 'Music & Video Streaming',
      description: 'Recommend songs, movies, and shows based on user preferences.',
      icon: Heart
    },
    {
      title: 'Job Matching',
      description: 'Match job seekers with relevant opportunities using AI recommendations.',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Recommendation Engine
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Boost engagement and sales with intelligent recommendations. Our AI recommendation engine 
              increases user engagement by 300% and boosts sales by 25% through personalized suggestions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                Get Recommendations
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Recommendation Features</h2>
            <p className="text-xl text-gray-300">Intelligent algorithms for personalized experiences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Recommendation Engine?</h2>
            <p className="text-xl text-gray-300">Proven results that drive business growth</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Recommendation Engine Applications</h2>
            <p className="text-xl text-gray-300">Transform user experience with intelligent recommendations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-8">
                <useCase.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 text-lg">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Personalize with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start delivering personalized experiences that increase engagement and drive sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              Start Personalizing
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIRecommendationEnginePage;