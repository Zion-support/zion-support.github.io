'use client';
import React from 'react';
import { BarChart, Brain, TrendingUp, Target, Users, Database, Zap, Shield, CheckCircle, ArrowRight, Star, Clock, DollarSign, Globe, PieChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIBusinessIntelligencePage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'AI-powered data analysis with predictive modeling and trend identification',
      benefits: ['Real-time insights', 'Predictive analytics', 'Custom dashboards']
    },
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'Custom ML models for business intelligence and decision support',
      benefits: ['Automated insights', 'Pattern recognition', 'Anomaly detection']
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Comprehensive KPI monitoring and performance optimization',
      benefits: ['KPI dashboards', 'Performance alerts', 'ROI tracking']
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'AI-assisted strategic planning and goal setting',
      benefits: ['Goal optimization', 'Scenario planning', 'Risk assessment']
    },
    {
      icon: Users,
      title: 'Team Analytics',
      description: 'Team performance analysis and productivity insights',
      benefits: ['Team metrics', 'Productivity analysis', 'Collaboration insights']
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamless integration with multiple data sources',
      benefits: ['Multi-source data', 'Real-time sync', 'Data cleansing']
    }
  ];

  const useCases = [
    {
      title: 'Sales Performance Analysis',
      description: 'Track sales metrics, identify trends, and optimize sales strategies',
      icon: TrendingUp,
      results: ['25% increase in sales', '40% better forecasting', '60% faster insights']
    },
    {
      title: 'Customer Behavior Insights',
      description: 'Understand customer patterns and preferences for better targeting',
      icon: Users,
      results: ['35% higher engagement', '50% better targeting', '30% increased retention']
    },
    {
      title: 'Financial Forecasting',
      description: 'Predict financial trends and optimize budget allocation',
      icon: DollarSign,
      results: ['90% accuracy in forecasts', '20% cost reduction', 'Better budget planning']
    },
    {
      title: 'Operational Efficiency',
      description: 'Monitor operations and identify optimization opportunities',
      icon: Zap,
      results: ['45% efficiency gain', '30% cost savings', 'Faster decision making']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 users',
        'Basic analytics',
        'Standard dashboards',
        'Email support',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$699',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 25 users',
        'Advanced analytics',
        'Custom dashboards',
        'Priority support',
        'Real-time data',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Full AI capabilities',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'On-premise option'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '45%', label: 'Efficiency Increase' },
    { number: '90%', label: 'Forecast Accuracy' },
    { number: '60%', label: 'Faster Insights' },
    { number: '25%', label: 'Revenue Growth' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            AI Business Intelligence
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Transform your data into actionable insights with AI-powered business intelligence
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Leverage the power of artificial intelligence to analyze your business data, predict trends, 
            and make data-driven decisions that drive growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </a>
            <a
              href="#features"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Powerful Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Real-World Applications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white neon-text">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-3">Typical Results:</h4>
                  <ul className="space-y-2">
                    {useCase.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Connect Data Sources</h3>
              <p className="text-gray-300">Integrate with your existing databases, CRM, ERP, and other data sources</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI Analysis</h3>
              <p className="text-gray-300">Our AI algorithms analyze your data to identify patterns, trends, and insights</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Get Insights</h3>
              <p className="text-gray-300">Receive actionable insights and recommendations through intuitive dashboards</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Flexible Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyan-500 text-white hover:bg-cyan-600'
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
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business Intelligence?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join forward-thinking companies that are already using AI-powered business intelligence 
              to make smarter decisions and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Start Your Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIBusinessIntelligencePage;