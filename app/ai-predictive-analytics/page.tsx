'use client';
import React from 'react';
import { TrendingUp, BarChart, CheckCircle, Star, ArrowRight, Users, Clock, DollarSign, Shield, Sparkles, Target, Zap, Database, Globe } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const AIPredictiveAnalytics: React.FC = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Advanced Forecasting',
      description: 'Predict future trends and outcomes with machine learning algorithms',
      benefits: ['Revenue forecasting', 'Demand prediction', 'Risk assessment']
    },
    {
      icon: BarChart,
      title: 'Real-Time Insights',
      description: 'Get instant insights and recommendations from your data',
      benefits: ['Live dashboards', 'Automated alerts', 'Smart recommendations']
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect all your data sources for comprehensive analysis',
      benefits: ['Multi-source integration', 'Data cleansing', 'Unified reporting']
    },
    {
      icon: Target,
      title: 'Custom Models',
      description: 'Build and deploy custom machine learning models for your business',
      benefits: ['Model training', 'Custom algorithms', 'A/B testing']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 99,
      period: 'month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 data sources',
        'Basic forecasting',
        'Standard reports',
        'Email support',
        'Monthly model updates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 299,
      period: 'month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 data sources',
        'Advanced forecasting',
        'Priority support',
        'Real-time insights',
        'Custom models',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 799,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
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
        title="AI Predictive Analytics - Advanced Forecasting & Insights | Zion Tech Group"
        description="Predict future trends with AI-powered analytics. Advanced forecasting, real-time insights, and custom machine learning models. Starting at $99/month."
        keywords={['predictive analytics', 'AI forecasting', 'machine learning', 'data insights', 'business intelligence', 'AI predictions']}
        canonicalUrl="https://ziontechgroup.com/ai-predictive-analytics"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Predictive Analytics</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
                AI Predictive Analytics
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Predict future trends and make data-driven decisions with our advanced AI-powered analytics platform. 
                Transform your data into actionable insights and forecasts.
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
                <div className="text-4xl font-bold text-cyan-400 mb-2">85%</div>
                <div className="text-gray-300">Forecast Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
                <div className="text-gray-300">Better Decisions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-300">ML Models Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Predictive Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to predict future trends and make smarter decisions
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
              <h2 className="text-4xl font-bold text-white mb-6">Predictive Analytics Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your analytics needs
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Predict the Future?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience AI-powered predictive analytics
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

export default AIPredictiveAnalytics;