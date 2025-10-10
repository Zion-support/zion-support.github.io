'use client';
import React from 'react';
import { BarChart, TrendingUp, Database, Users, CheckCircle, Star, Zap, Shield, Globe, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BusinessIntelligencePage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis and visualization tools for informed decision making',
      benefits: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization']
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamlessly connect and integrate data from multiple sources',
      benefits: ['Multi-source integration', 'Data cleansing', 'ETL processes', 'Real-time sync']
    },
    {
      icon: TrendingUp,
      title: 'Performance Metrics',
      description: 'Track and measure key performance indicators across your organization',
      benefits: ['KPI tracking', 'Trend analysis', 'Performance monitoring', 'Goal setting']
    },
    {
      icon: Users,
      title: 'User-Friendly Interface',
      description: 'Intuitive dashboards and reports that anyone can use',
      benefits: ['Drag-and-drop interface', 'Customizable views', 'Mobile access', 'Role-based access']
    }
  ];

  const benefits = [
    {
      name: 'Starter',
      price: '$1,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with BI',
      features: [
        'Up to 5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        'Data visualization',
        'Monthly insights'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,999',
      period: '/month',
      description: 'Ideal for growing businesses with complex data needs',
      features: [
        'Up to 20 data sources',
        'Advanced dashboards',
        'Custom reports',
        'Priority support',
        'Predictive analytics',
        'API access',
        'Training included'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '/month',
      description: 'For large organizations with extensive data requirements',
      features: [
        'Unlimited data sources',
        'Custom dashboards',
        'Advanced analytics',
        'Dedicated support',
        'White-label solution',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Sales Analytics',
      description: 'Track sales performance and identify growth opportunities',
      icon: '📈',
      examples: ['Sales forecasting', 'Pipeline analysis', 'Customer segmentation', 'Revenue tracking']
    },
    {
      title: 'Marketing Intelligence',
      description: 'Measure marketing effectiveness and optimize campaigns',
      icon: '📊',
      examples: ['Campaign performance', 'ROI analysis', 'Customer journey', 'Attribution modeling']
    },
    {
      title: 'Financial Reporting',
      description: 'Comprehensive financial analysis and reporting',
      icon: '💰',
      examples: ['P&L analysis', 'Cash flow tracking', 'Budget monitoring', 'Financial forecasting']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
              <BarChart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white neon-text">
              Business Intelligence
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into strategic insights that drive business growth. 
            Make informed decisions with our comprehensive BI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button px-8 py-4 text-lg">
              Get Free Consultation
            </a>
            <a href="tel:+13024640950" className="cyber-button-outline px-8 py-4 text-lg">
              Call (302) 464-0950
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx}>• {example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-indigo-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses who have unlocked the power of their data with our BI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg">
                Start Your BI Journey
              </a>
              <a href="tel:+13024640950" className="cyber-button-outline px-8 py-4 text-lg">
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessIntelligencePage;