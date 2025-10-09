'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Heart, Brain, BarChart, Zap, Shield, Users, CheckCircle, Star, ArrowRight, Phone, Mail, MessageSquare, TrendingUp, Smile } from 'lucide-react';

const AISentimentAnalysisPage: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Emotion Detection',
      description: 'Identify emotions like joy, anger, sadness, and fear in text and voice data.',
      benefits: ['Multi-emotion Recognition', 'Confidence Scoring', 'Context Awareness', 'Real-time Processing']
    },
    {
      icon: Brain,
      title: 'Sentiment Classification',
      description: 'Classify text as positive, negative, or neutral with high accuracy.',
      benefits: ['Polarity Detection', 'Intensity Measurement', 'Aspect-based Analysis', 'Multi-language Support']
    },
    {
      icon: MessageSquare,
      title: 'Social Media Monitoring',
      description: 'Track brand sentiment across social media platforms and online reviews.',
      benefits: ['Platform Integration', 'Trend Analysis', 'Crisis Detection', 'Competitor Monitoring']
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Visualize sentiment trends and insights with comprehensive analytics.',
      benefits: ['Real-time Dashboards', 'Historical Trends', 'Custom Reports', 'Data Export']
    }
  ];

  const useCases = [
    {
      title: 'Customer Feedback Analysis',
      description: 'Analyze customer reviews and feedback to improve products and services',
      icon: Users,
      results: ['90% accuracy in sentiment detection', '50% faster feedback processing', 'Improved customer satisfaction', 'Better product insights']
    },
    {
      title: 'Social Media Monitoring',
      description: 'Track brand mentions and sentiment across social platforms',
      icon: MessageSquare,
      results: ['Real-time brand monitoring', 'Crisis early warning', 'Competitor analysis', 'Influencer identification']
    },
    {
      title: 'Market Research',
      description: 'Understand public opinion and market trends through sentiment analysis',
      icon: TrendingUp,
      results: ['Market trend insights', 'Public opinion tracking', 'Campaign effectiveness', 'Brand perception analysis']
    },
    {
      title: 'Employee Engagement',
      description: 'Monitor employee sentiment and engagement through internal communications',
      icon: Heart,
      results: ['Employee satisfaction tracking', 'Early warning system', 'Improved workplace culture', 'Better retention rates']
    }
  ];

  const industries = [
    {
      name: 'Retail & E-commerce',
      description: 'Product reviews, customer feedback, and brand sentiment analysis',
      icon: '🛒'
    },
    {
      name: 'Healthcare',
      description: 'Patient feedback, treatment satisfaction, and care quality analysis',
      icon: '🏥'
    },
    {
      name: 'Finance',
      description: 'Customer sentiment, market analysis, and risk assessment',
      icon: '💰'
    },
    {
      name: 'Hospitality',
      description: 'Guest reviews, service quality, and experience analysis',
      icon: '🏨'
    },
    {
      name: 'Technology',
      description: 'User feedback, product reviews, and feature sentiment',
      icon: '💻'
    },
    {
      name: 'Media & Entertainment',
      description: 'Content sentiment, audience reaction, and engagement analysis',
      icon: '🎬'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 texts/month',
        'Basic sentiment analysis',
        'Email support',
        'Standard API access',
        'Basic analytics'
      ]
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 texts/month',
        'Advanced emotion detection',
        'Priority support',
        'Social media integration',
        'Real-time analysis',
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
        'Unlimited texts',
        'Custom AI models',
        '24/7 dedicated support',
        'On-premise deployment',
        'SLA guarantees',
        'Custom training programs',
        'Dedicated account manager'
      ]
    }
  ];

  const stats = [
    { number: '95%', label: 'Sentiment Accuracy' },
    { number: '50ms', label: 'Processing Speed' },
    { number: '100+', label: 'Languages Supported' },
    { number: '24/7', label: 'Real-time Analysis' }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Sentiment Analysis - Zion Tech Group"
        description="Analyze emotions and sentiment with 95% accuracy. Customer feedback analysis, social media monitoring, and market research with AI-powered sentiment analysis."
        keywords={['AI sentiment analysis', 'emotion detection', 'sentiment classification', 'social media monitoring', 'customer feedback analysis']}
        canonicalUrl="https://ziontechgroup.com/ai-sentiment-analysis"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Sentiment Analysis
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Understand emotions and opinions with 95% accuracy using advanced AI
              </p>
              <div className="flex items-center justify-center space-x-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-cyan-400" />
                  <span>95% Accuracy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <span>50ms Speed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>100+ Languages</span>
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
                Advanced Sentiment Analysis Features
              </h2>
              <p className="text-xl text-gray-400">
                Powerful emotion and sentiment detection for every business need
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
                See how sentiment analysis transforms different business functions
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
                Sentiment analysis solutions for every industry
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
                Ready to Understand Your Audience?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start analyzing sentiment and emotions to make better business decisions
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

export default AISentimentAnalysisPage;