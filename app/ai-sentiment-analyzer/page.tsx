'use client';
import React, { useState, useCallback, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, TrendingUp, BarChart, MessageSquare, CheckCircle, Target, Users, Shield } from 'lucide-react';

const AISentimentAnalyzer: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Real-time Sentiment Analysis',
      description: 'Analyze customer sentiment across all channels in real-time with 95% accuracy',
      color: 'text-purple-400'
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics Dashboard',
      description: 'Comprehensive insights with trend analysis, emotion mapping, and predictive modeling',
      color: 'text-blue-400'
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel Support',
      description: 'Monitor sentiment across social media, reviews, emails, and customer support tickets',
      color: 'text-green-400'
    },
    {
      icon: Target,
      title: 'Custom AI Models',
      description: 'Train custom models for your industry with our advanced machine learning algorithms',
      color: 'text-orange-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 analyses/month',
        'Basic sentiment detection',
        'Email support',
        'Standard dashboard',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 100,000 analyses/month',
        'Advanced emotion detection',
        'Priority support',
        'Custom dashboards',
        'Real-time alerts',
        'Multi-language support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited analyses',
        'Custom AI models',
        '24/7 dedicated support',
        'White-label solution',
        'Advanced integrations',
        'Custom reporting'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Customer Experience Optimization',
      description: 'Identify pain points and improve customer satisfaction by 40%',
      icon: Users,
      result: '+40% satisfaction'
    },
    {
      title: 'Brand Reputation Management',
      description: 'Monitor and protect your brand reputation across all platforms',
      icon: Shield,
      result: '99.9% uptime'
    },
    {
      title: 'Product Development Insights',
      description: 'Use customer feedback to guide product improvements and new features',
      icon: TrendingUp,
      result: '+60% engagement'
    },
    {
      title: 'Competitive Intelligence',
      description: 'Track competitor sentiment and market positioning',
      icon: Target,
      result: 'Real-time insights'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Sentiment Analyzer - Advanced Customer Insights | Zion Tech Group</title>
        <meta name="description" content="Transform customer feedback into actionable insights with our AI-powered sentiment analysis platform. Real-time monitoring, advanced analytics, and 95% accuracy." />
        <meta name="keywords" content="sentiment analysis, AI analytics, customer insights, brand monitoring, social media analytics" />
        <meta property="og:title" content="AI Sentiment Analyzer - Advanced Customer Insights" />
        <meta property="og:description" content="Transform customer feedback into actionable insights with our AI-powered sentiment analysis platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-sentiment-analyzer" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            <span>AI-Powered Analytics</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Sentiment Analyzer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform customer feedback into actionable insights with our advanced AI-powered sentiment analysis platform.
            Monitor brand perception, optimize customer experience, and drive business growth with 95% accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Free Demo
            </a>
          </div>
        </section>
        {/* Key Benefits */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-white font-semibold mb-2">Accuracy Rate</div>
              <div className="text-gray-400 text-sm">Industry-leading sentiment analysis precision</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">Real-time</div>
              <div className="text-white font-semibold mb-2">Processing</div>
              <div className="text-gray-400 text-sm">Instant sentiment analysis and alerts</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-green-500/20">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-white font-semibold mb-2">Languages</div>
              <div className="text-gray-400 text-sm">Multi-language sentiment analysis support</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-orange-500/20">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-white font-semibold mb-2">Monitoring</div>
              <div className="text-gray-400 text-sm">Continuous brand and sentiment tracking</div>
            </div>
          </div>
        </section>
        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Real-World Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <useCase.icon className="w-8 h-8 text-purple-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-12 rounded-lg border border-purple-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Customer Insights?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 500+ companies already using our AI Sentiment Analyzer to drive better business decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );

AISentimentAnalyzer.displayName = 'AISentimentAnalyzer';

export default AISentimentAnalyzer;