'use client';
import React from 'react';
import { Heart, BarChart, CheckCircle, Star, ArrowRight, Users, Clock, DollarSign, Shield, Sparkles, Target, Zap, TrendingUp, MessageSquare } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const AISentimentAnalysis: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Real-Time Sentiment',
      description: 'Analyze sentiment in real-time across multiple channels and platforms',
      benefits: ['Live monitoring', 'Multi-language support', 'Emotion detection']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Get detailed insights into sentiment trends and patterns',
      benefits: ['Trend analysis', 'Sentiment scoring', 'Custom reports']
    },
    {
      icon: MessageSquare,
      title: 'Social Media Monitoring',
      description: 'Track sentiment across social media platforms and review sites',
      benefits: ['Platform integration', 'Brand monitoring', 'Crisis detection']
    },
    {
      icon: Target,
      title: 'Custom Models',
      description: 'Train custom sentiment models for your specific industry or use case',
      benefits: ['Domain adaptation', 'Custom training', 'Model fine-tuning']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 59,
      period: 'month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 texts/month',
        'Basic sentiment analysis',
        'Standard models',
        'Email support',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 149,
      period: 'month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 texts/month',
        'Advanced sentiment analysis',
        'Priority support',
        'Custom models',
        'Real-time monitoring',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 399,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited texts',
        'Custom AI models',
        'Dedicated support',
        'White-label solution',
        'Advanced security',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Sentiment Analysis - Real-Time Emotion & Opinion Analysis | Zion Tech Group"
        description="Analyze sentiment and emotions with AI-powered text analysis. Real-time monitoring, social media tracking, and custom models. Starting at $59/month."
        keywords={['sentiment analysis', 'emotion analysis', 'opinion mining', 'text analysis', 'AI sentiment', 'social media monitoring']}
        canonicalUrl="https://ziontechgroup.com/ai-sentiment-analysis"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Sentiment Analysis</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
                AI Sentiment Analysis
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Understand emotions and opinions with our advanced AI sentiment analysis platform. 
                Monitor brand sentiment, track customer satisfaction, and make data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Sentiment Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">100ms</div>
                <div className="text-gray-300">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">Real-Time Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Sentiment Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to understand emotions and opinions with AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Sentiment Analysis Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your sentiment analysis needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600' 
                      : 'border border-gray-600 text-white hover:bg-gray-800'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="cyber-card p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Understand Sentiment?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience AI-powered sentiment analysis
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <a 
                  href="tel:+13024640950" 
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISentimentAnalysis;