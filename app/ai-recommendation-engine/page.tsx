'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, TrendingUp, BarChart, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Shield, Clock, Users, Award, Globe, Database, Cpu, Eye, BarChart3, PieChart, LineChart, Activity, Brain, ShoppingCart, Heart, ThumbsUp } from 'lucide-react';

const AIRecommendationEnginePage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Personalized Recommendations',
      description: 'AI-powered personalization that increases engagement by 300%',
      details: ['Real-time Personalization', 'Behavioral Analysis', 'Content Matching', 'User Profiling']
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Deep insights into user preferences and recommendation performance',
      details: ['Performance Metrics', 'A/B Testing', 'Conversion Tracking', 'ROI Analysis']
    },
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'State-of-the-art ML algorithms for accurate recommendations',
      details: ['Collaborative Filtering', 'Content-Based Filtering', 'Deep Learning', 'Hybrid Approaches']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant recommendations with sub-second response times',
      details: ['Real-time Updates', 'Scalable Architecture', 'Low Latency', 'High Throughput']
    }
  ];

  const industries = [
    {
      name: 'E-commerce',
      icon: ShoppingCart,
      useCases: ['Product Recommendations', 'Cross-selling', 'Upselling', 'Inventory Optimization'],
      metrics: { conversion: '+45%', revenue: '+38%', engagement: '+52%' }
    },
    {
      name: 'Media & Entertainment',
      icon: Heart,
      useCases: ['Content Discovery', 'Playlist Generation', 'Movie Recommendations', 'News Personalization'],
      metrics: { conversion: '+62%', revenue: '+41%', engagement: '+67%' }
    },
    {
      name: 'SaaS Platforms',
      icon: Cpu,
      useCases: ['Feature Recommendations', 'User Onboarding', 'Content Suggestions', 'Workflow Optimization'],
      metrics: { conversion: '+38%', revenue: '+29%', engagement: '+44%' }
    },
    {
      name: 'Financial Services',
      icon: BarChart,
      useCases: ['Investment Recommendations', 'Product Matching', 'Risk Assessment', 'Portfolio Optimization'],
      metrics: { conversion: '+33%', revenue: '+42%', engagement: '+39%' }
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$249',
      period: '/month',
      description: 'Perfect for small businesses starting with AI recommendations',
      features: [
        'Up to 10,000 users',
        'Basic recommendation models',
        'Standard analytics',
        'Email support',
        'API access',
        'A/B testing tools'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$699',
      period: '/month',
      description: 'Advanced recommendations for growing businesses',
      features: [
        'Up to 100,000 users',
        'Advanced ML models',
        'Real-time personalization',
        'Priority support',
        'Advanced analytics',
        'Custom algorithms',
        'Multi-channel support',
        'Performance optimization'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Complete recommendation solution for large organizations',
      features: [
        'Unlimited users',
        'Custom ML models',
        'Real-time & batch processing',
        '24/7 dedicated support',
        'Full analytics suite',
        'White-label solutions',
        'On-premise deployment',
        'Custom integrations',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Revenue',
      description: 'Average 35% increase in revenue through better recommendations',
      stat: '+35%'
    },
    {
      icon: Users,
      title: 'Higher Engagement',
      description: 'Users spend 50% more time on platforms with our recommendations',
      stat: '+50%'
    },
    {
      icon: Target,
      title: 'Better Conversion',
      description: 'Conversion rates improve by 40% with personalized experiences',
      stat: '+40%'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Reduce development time by 80% with our ready-to-use platform',
      stat: '-80%'
    }
  ];

  const testimonials = [
    {
      name: 'David Chen',
      role: 'VP of Product',
      company: 'ShopTech E-commerce',
      content: 'Our conversion rate increased by 45% after implementing Zion Tech Group\'s recommendation engine. The ROI was immediate and substantial.',
      rating: 5,
      avatar: 'DC'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Head of Data Science',
      company: 'StreamMedia Inc.',
      content: 'The personalization capabilities are outstanding. Our user engagement increased by 60% and we\'ve seen significant improvements in retention.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'James Wilson',
      role: 'CTO',
      company: 'FinTech Solutions',
      content: 'The recommendation engine helped us personalize our financial products perfectly. Customer satisfaction and product adoption have both improved dramatically.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Recommendation Engine - Zion Tech Group</title>
        <meta name="description" content="Advanced AI recommendation engine with 95%+ accuracy. Personalized recommendations, real-time processing, and ML models. Increase revenue by 35%. Starting at $249/month." />
        <meta name="keywords" content="recommendation engine, personalization, AI recommendations, machine learning, e-commerce, content discovery, product recommendations" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            <span>AI-Powered Recommendation Engine</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Boost Revenue with
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Smart Recommendations
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI recommendation engine that delivers personalized experiences, 
            increases conversion rates by 40%, and drives revenue growth through intelligent suggestions.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">+35%</div>
              <div className="text-gray-300">Revenue Increase</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">+40%</div>
              <div className="text-gray-300">Conversion Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">95%+</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">&lt;100ms</div>
              <div className="text-gray-300">Response Time</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Recommendation Engine Inquiry"
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Get Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful Recommendation Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <industry.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Use Cases:</h4>
                  <ul className="space-y-1">
                    {industry.useCases.map((useCase, useCaseIndex) => (
                      <li key={useCaseIndex} className="text-sm text-gray-300 flex items-center">
                        <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-lg font-bold text-green-400">{industry.metrics.conversion}</div>
                    <div className="text-xs text-gray-300">Conversion</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-cyan-400">{industry.metrics.revenue}</div>
                    <div className="text-xs text-gray-300">Revenue</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-400">{industry.metrics.engagement}</div>
                    <div className="text-xs text-gray-300">Engagement</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Proven Business Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center cyber-card">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 cyber-card ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-300 ml-2">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.cta === 'Contact Sales' ? 'mailto:kleber@ziontechgroup.com' : 'tel:+13024640950'}
                  className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-slate-900 font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-300 text-sm">{testimonial.role}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Boost Your Revenue?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join leading companies using our AI recommendation engine to increase conversions and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Recommendation Engine Demo Request"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Request Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIRecommendationEnginePage;