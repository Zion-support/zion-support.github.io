'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { TrendingUp, Brain, BarChart, Target, Shield, Users, CheckCircle, Star, ArrowRight, Phone, Mail, Database, Zap, Eye } from 'lucide-react';

const AIPredictiveAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced Predictive Models',
      description: 'Machine learning models that predict future trends, behaviors, and outcomes with high accuracy.',
      benefits: ['Deep Learning', 'Neural Networks', 'Pattern Recognition', 'Continuous Learning']
    },
    {
      icon: TrendingUp,
      title: 'Trend Forecasting',
      description: 'Predict market trends, customer behavior, and business performance with confidence intervals.',
      benefits: ['Market Analysis', 'Demand Forecasting', 'Risk Assessment', 'Opportunity Identification']
    },
    {
      icon: Target,
      title: 'Customer Behavior Prediction',
      description: 'Understand and predict customer actions, preferences, and lifetime value.',
      benefits: ['Churn Prediction', 'Purchase Intent', 'Personalization', 'Retention Strategies']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Identify potential risks and anomalies before they impact your business.',
      benefits: ['Fraud Detection', 'Risk Scoring', 'Anomaly Detection', 'Early Warning Systems']
    }
  ];

  const useCases = [
    {
      title: 'Sales Forecasting',
      description: 'Predict sales performance and revenue with 95% accuracy',
      icon: BarChart,
      results: ['95% forecast accuracy', '30% increase in revenue', 'Reduced inventory costs']
    },
    {
      title: 'Customer Churn Prevention',
      description: 'Identify customers likely to churn and take proactive action',
      icon: Users,
      results: ['40% reduction in churn', '25% increase in retention', 'Improved customer satisfaction']
    },
    {
      title: 'Demand Planning',
      description: 'Optimize inventory and resource allocation based on predicted demand',
      icon: Database,
      results: ['60% reduction in stockouts', '35% decrease in excess inventory', 'Improved cash flow']
    },
    {
      title: 'Financial Risk Assessment',
      description: 'Predict credit risk and market volatility for better decision making',
      icon: Shield,
      results: ['50% reduction in bad debt', 'Improved risk management', 'Better investment decisions']
    }
  ];

  const industries = [
    {
      name: 'Retail & E-commerce',
      description: 'Predict customer behavior, optimize pricing, and manage inventory',
      icon: '🛒'
    },
    {
      name: 'Financial Services',
      description: 'Credit scoring, fraud detection, and market analysis',
      icon: '💰'
    },
    {
      name: 'Healthcare',
      description: 'Patient outcomes, disease prediction, and treatment optimization',
      icon: '🏥'
    },
    {
      name: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization',
      icon: '🏭'
    },
    {
      name: 'Marketing',
      description: 'Campaign performance, customer segmentation, and ROI prediction',
      icon: '📈'
    },
    {
      name: 'Real Estate',
      description: 'Property valuation, market trends, and investment opportunities',
      icon: '🏠'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 predictive models',
        'Basic data visualization',
        'Email support',
        'Standard data sources',
        'Monthly reports'
      ]
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 predictive models',
        'Advanced analytics dashboard',
        'Priority support',
        'Custom data integrations',
        'Real-time predictions',
        'API access',
        'Custom model training'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited models',
        'Custom AI development',
        '24/7 dedicated support',
        'On-premise deployment',
        'SLA guarantees',
        'Custom training programs',
        'Dedicated data scientists'
      ]
    }
  ];

  const stats = [
    { number: '95%', label: 'Prediction Accuracy' },
    { number: '40%', label: 'Reduction in Churn' },
    { number: '60%', label: 'Faster Decision Making' },
    { number: '300%', label: 'ROI Improvement' }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Predictive Analytics - Zion Tech Group"
        description="Transform your business with AI-powered predictive analytics. Achieve 95% prediction accuracy, reduce churn by 40%, and make data-driven decisions with confidence."
        keywords={['AI predictive analytics', 'predictive modeling', 'machine learning', 'forecasting', 'predictive intelligence', 'data science']}
        canonicalUrl="https://ziontechgroup.com/ai-predictive-analytics"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Predictive Analytics
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Predict the future with confidence using advanced AI and machine learning
              </p>
              <div className="flex items-center justify-center space-x-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  <span>95% Accuracy</span>
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
                Advanced Predictive Capabilities
              </h2>
              <p className="text-xl text-gray-400">
                Harness the power of AI to predict future outcomes and trends
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
                See how predictive analytics transforms different business functions
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
                Predictive analytics solutions for every industry
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
                Ready to Predict the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start making data-driven decisions with AI-powered predictive analytics
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

export default AIPredictiveAnalyticsPage;