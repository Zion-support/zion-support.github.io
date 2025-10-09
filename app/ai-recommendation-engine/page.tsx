'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Target, Brain, BarChart, Zap, Shield, Users, CheckCircle, Star, ArrowRight, Phone, Mail, TrendingUp, ShoppingCart, Heart } from 'lucide-react';

const AIRecommendationEnginePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Personalized Recommendations',
      description: 'AI-powered recommendations tailored to individual user preferences and behavior patterns.',
      benefits: ['User Profiling', 'Behavior Analysis', 'Preference Learning', 'Dynamic Adaptation']
    },
    {
      icon: Target,
      title: 'Content Discovery',
      description: 'Help users discover relevant content, products, and services they might not find otherwise.',
      benefits: ['Content Matching', 'Serendipity Engine', 'Diversity Optimization', 'Relevance Scoring']
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Track recommendation performance and optimize algorithms based on user engagement data.',
      benefits: ['Performance Metrics', 'A/B Testing', 'Algorithm Optimization', 'ROI Tracking']
    },
    {
      icon: Zap,
      title: 'Multi-channel Delivery',
      description: 'Deliver recommendations across web, mobile, email, and other channels seamlessly.',
      benefits: ['Cross-platform Sync', 'Unified Experience', 'Channel Optimization', 'Consistent Messaging']
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Recommendations',
      description: 'Increase sales with personalized product recommendations',
      icon: ShoppingCart,
      results: ['35% increase in sales', '25% higher conversion rates', '40% more time on site', 'Improved customer satisfaction']
    },
    {
      title: 'Content Streaming',
      description: 'Keep users engaged with personalized content suggestions',
      icon: Heart,
      results: ['60% increase in engagement', '45% longer session times', '30% reduction in churn', 'Higher user retention']
    },
    {
      title: 'News & Media',
      description: 'Deliver relevant news and articles to keep users informed',
      icon: TrendingUp,
      results: ['50% more article views', '25% increase in subscriptions', 'Better content discovery', 'Improved user experience']
    },
    {
      title: 'Social Media',
      description: 'Show relevant posts, connections, and content to users',
      icon: Users,
      results: ['40% more interactions', '30% increase in connections', 'Better content relevance', 'Enhanced social experience']
    }
  ];

  const industries = [
    {
      name: 'E-commerce',
      description: 'Product recommendations, cross-selling, and upselling',
      icon: '🛒'
    },
    {
      name: 'Entertainment',
      description: 'Movie, music, and content recommendations',
      icon: '🎬'
    },
    {
      name: 'News & Media',
      description: 'Article and content personalization',
      icon: '📰'
    },
    {
      name: 'Social Media',
      description: 'Friend suggestions and content feeds',
      icon: '👥'
    },
    {
      name: 'Travel',
      description: 'Destination and accommodation recommendations',
      icon: '✈️'
    },
    {
      name: 'Finance',
      description: 'Investment and financial product suggestions',
      icon: '💰'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$399',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 users',
        'Basic recommendation models',
        'Email support',
        'Standard API access',
        'Basic analytics'
      ]
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 users',
        'Advanced ML models',
        'Priority support',
        'Custom model training',
        'Real-time recommendations',
        'Advanced analytics',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Custom AI development',
        '24/7 dedicated support',
        'On-premise deployment',
        'SLA guarantees',
        'Custom training programs',
        'Dedicated account manager'
      ]
    }
  ];

  const stats = [
    { number: '35%', label: 'Increase in Sales' },
    { number: '60%', label: 'Higher Engagement' },
    { number: '99%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Real-time Processing' }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Recommendation Engine - Zion Tech Group"
        description="Boost sales by 35% with AI-powered recommendation engine. Personalized suggestions, content discovery, and real-time analytics for every industry."
        keywords={['AI recommendation engine', 'personalized recommendations', 'recommendation system', 'content discovery', 'machine learning recommendations']}
        canonicalUrl="https://ziontechgroup.com/ai-recommendation-engine"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Recommendation Engine
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Boost sales by 35% with intelligent, personalized recommendations
              </p>
              <div className="flex items-center justify-center space-x-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-cyan-400" />
                  <span>35% Sales Increase</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-cyan-400" />
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>Real-time</span>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Recommendation Features
              </h2>
              <p className="text-xl text-gray-400">
                Intelligent recommendation technology for every business need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-sm text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-400">
                See how recommendation engines transform different industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industries Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-400">
                Recommendation engines for every industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-400">{industry.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-400">
                Flexible pricing for businesses of all sizes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                    plan.name === 'Professional'
                      ? 'border-cyan-500 shadow-2xl shadow-cyan-500/25'
                      : 'border-gray-700 hover:border-cyan-400'
                  }`}
                >
                  {plan.name === 'Professional' && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.name === 'Professional'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Boost Your Sales?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start using AI recommendations to increase engagement and drive revenue
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AIRecommendationEnginePage;