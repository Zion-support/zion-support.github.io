'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Target, ArrowRight, CheckCircle, Star, TrendingUp, Users, BarChart } from 'lucide-react';

export default function AiRecommendationEnginePage() {
  const features = [
    {
      title: "Personalized Recommendations",
      description: "AI-powered recommendations tailored to each user's preferences and behavior",
      icon: <Target className="w-8 h-8" />,
      benefits: ["User behavior analysis", "Preference learning", "Real-time adaptation", "Cross-platform sync"]
    },
    {
      title: "Machine Learning Models",
      description: "Advanced ML algorithms that continuously improve recommendation accuracy",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Deep learning", "Collaborative filtering", "Content-based filtering", "Hybrid approaches"]
    },
    {
      title: "Real-time Processing",
      description: "Instant recommendations based on current user actions and context",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["Low latency", "Real-time updates", "Context awareness", "Scalable processing"]
    }
  ];

  const recommendationTypes = [
    {
      title: "Product Recommendations",
      description: "Suggest products based on user preferences and purchase history",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Content Recommendations",
      description: "Recommend articles, videos, and other content to users",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "User Recommendations",
      description: "Connect users with similar interests and preferences",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Analytics & Insights",
      description: "Track recommendation performance and user engagement",
      icon: <BarChart className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "35%", label: "Higher Engagement" },
    { number: "25%", label: "More Conversions" },
    { number: "40%", label: "Better CTR" },
    { number: "60%", label: "User Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Recommendation Engine - Zion Tech Group</title>
        <meta name="description" content="Boost engagement with AI-powered recommendation engines. Personalized suggestions, machine learning, and real-time processing." />
        <meta name="keywords" content="AI recommendation engine, personalized recommendations, machine learning, content recommendations" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Recommendation Engine
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Boost engagement and conversions with AI-powered recommendation engines. 
              Deliver personalized suggestions that drive user satisfaction and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              AI-Powered Recommendation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI recommendation engine provides intelligent suggestions that help you engage users and drive conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendation Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Recommendation Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Implement various types of recommendations to enhance user experience and drive engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recommendationTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {type.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Boost User Engagement?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI recommendation engine experts help you implement personalized suggestions that drive user satisfaction and business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}