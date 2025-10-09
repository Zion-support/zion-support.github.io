'use client';
import React from 'react';
import { Target, Brain, Users, TrendingUp, CheckCircle, ArrowRight, Star, Zap, BarChart, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIPersonalizationEnginePage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Machine Learning Models',
      description: 'Advanced ML algorithms that learn from user behavior to deliver highly personalized experiences.',
      benefits: ['Real-time learning', 'Behavioral analysis', 'Predictive modeling']
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Dynamic Content',
      description: 'Automatically adapt content, products, and experiences based on individual user preferences.',
      benefits: ['Content adaptation', 'Product recommendations', 'Experience customization']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'User Segmentation',
      description: 'Intelligent user segmentation and persona creation for targeted marketing and experiences.',
      benefits: ['Smart segmentation', 'Persona creation', 'Behavioral clustering']
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics and A/B testing to measure and optimize personalization effectiveness.',
      benefits: ['Conversion tracking', 'A/B testing', 'ROI measurement']
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Personalization',
      description: 'Personalize product recommendations, pricing, and shopping experiences to increase conversions.',
      icon: <Target className="w-8 h-8 text-blue-500" />,
      metrics: '35% increase in conversions, 25% higher AOV'
    },
    {
      title: 'Content Marketing',
      description: 'Deliver personalized content, articles, and recommendations based on user interests and behavior.',
      icon: <Brain className="w-8 h-8 text-green-500" />,
      metrics: '60% increase in engagement, 40% longer session times'
    },
    {
      title: 'Email Marketing',
      description: 'Send highly personalized emails with dynamic content that adapts to each recipient.',
      icon: <Users className="w-8 h-8 text-purple-500" />,
      metrics: '45% higher open rates, 30% increase in clicks'
    },
    {
      title: 'Mobile Apps',
      description: 'Personalize app experiences, notifications, and features based on user preferences and usage patterns.',
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      metrics: '50% higher retention, 3x more app usage'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 10,000 users',
        'Basic personalization models',
        'Standard analytics',
        'Email support',
        '5 A/B tests per month',
        'Basic segmentation'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 users',
        'Advanced ML models',
        'Real-time personalization',
        'Priority support',
        'Unlimited A/B tests',
        'Advanced segmentation',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,499',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited users',
        'Custom ML model development',
        '24/7 support',
        'Dedicated account manager',
        'White-label solutions',
        'Advanced analytics suite',
        'Custom integrations',
        'SLA guarantees',
        'Training & consulting'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Increase Conversions',
      description: 'Personalized experiences can increase conversion rates by 25-35% on average.',
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      value: '30%'
    },
    {
      title: 'Boost Engagement',
      description: 'Personalized content and experiences lead to 40-60% higher user engagement.',
      icon: <Users className="w-6 h-6 text-blue-400" />,
      value: '50%'
    },
    {
      title: 'Improve Retention',
      description: 'Personalized experiences can improve customer retention by 20-30%.',
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      value: '25%'
    },
    {
      title: 'Higher Revenue',
      description: 'Personalization typically results in 10-20% increase in revenue per customer.',
      icon: <BarChart className="w-6 h-6 text-cyan-400" />,
      value: '15%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Personalization Engine
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Deliver Hyper-Personalized Experiences at Scale
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Transform your customer experience with AI-powered personalization that adapts in real-time. 
              Our advanced machine learning models analyze user behavior to deliver highly personalized 
              content, products, and experiences that drive engagement and conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Target className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Proven Business Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-6xl font-bold text-cyan-400 mb-4">{benefit.value}</div>
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Advanced AI Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Real-World Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {useCase.icon}
                  <h3 className="text-2xl font-bold text-white ml-4">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium">
                  {useCase.metrics}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="cyber-card p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Personalize Your Customer Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading companies using AI personalization to increase engagement, 
              boost conversions, and build stronger customer relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Target className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIPersonalizationEnginePage;