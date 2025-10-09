'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { BarChart, TrendingUp, Target, Users, Zap, Shield, CheckCircle, ArrowRight, Phone, Mail, Brain, Database, PieChart, Activity } from 'lucide-react';

const AIBusinessIntelligencePage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Transform raw data into actionable insights with our AI-powered analytics platform',
      benefits: ['Real-time data processing', 'Predictive modeling', 'Custom dashboards', 'Automated reporting']
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Monitor KPIs and business metrics with intelligent tracking and alerting',
      benefits: ['KPI monitoring', 'Trend analysis', 'Performance alerts', 'Goal tracking']
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'AI-driven strategic planning and decision support for better business outcomes',
      benefits: ['Scenario planning', 'Risk assessment', 'Market analysis', 'Strategic recommendations']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborative BI tools that enable teams to work together on data insights',
      benefits: ['Shared dashboards', 'Team workspaces', 'Comment system', 'Version control']
    },
    {
      icon: Zap,
      title: 'Automated Insights',
      description: 'Get automatic insights and recommendations without manual analysis',
      benefits: ['Auto-generated reports', 'Anomaly detection', 'Pattern recognition', 'Smart alerts']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security for your business intelligence data',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance support']
    }
  ];

  const useCases = [
    {
      title: 'Sales Performance Analysis',
      description: 'Track sales metrics, identify trends, and optimize sales strategies',
      metrics: ['40% increase in sales', '25% better conversion rates', '60% faster reporting']
    },
    {
      title: 'Customer Behavior Insights',
      description: 'Understand customer patterns and preferences for better targeting',
      metrics: ['35% improvement in customer retention', '50% better segmentation', '45% higher engagement']
    },
    {
      title: 'Financial Forecasting',
      description: 'Accurate financial predictions and budget planning',
      metrics: ['90% forecast accuracy', '30% cost reduction', '50% faster planning']
    },
    {
      title: 'Operational Efficiency',
      description: 'Optimize operations and identify bottlenecks in real-time',
      metrics: ['25% efficiency gains', '40% faster decision making', '35% cost savings']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with BI',
      features: [
        'Up to 5 users',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '5 data sources',
        '1TB data storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$3,500',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced analytics',
        'Custom dashboards',
        'Priority support',
        'Unlimited data sources',
        '10TB data storage',
        'API access',
        'Advanced security'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Full-featured solution for large organizations',
      features: [
        'Unlimited users',
        'Custom analytics',
        'White-label solution',
        '24/7 dedicated support',
        'Unlimited data sources',
        'Unlimited storage',
        'Custom integrations',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Business Intelligence - Zion Tech Group"
        description="Transform your business data into actionable insights with our AI-powered business intelligence solutions. Advanced analytics, reporting, and strategic planning."
        keywords={['AI business intelligence', 'data analytics', 'business insights', 'BI solutions', 'data visualization', 'predictive analytics']}
        canonicalUrl="https://ziontechgroup.com/ai-business-intelligence"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Business <span className="text-purple-400">Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business data into actionable insights with our AI-powered business intelligence platform. 
              Make data-driven decisions faster and more accurately than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button inline-flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a href="/demo" className="cyber-button-secondary inline-flex items-center justify-center">
                <BarChart className="w-5 h-5 mr-2" />
                Request Demo
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful <span className="text-purple-400">Features</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Everything you need to turn data into business value
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
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
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real-World <span className="text-cyan-400">Applications</span>
              </h2>
              <p className="text-gray-300 text-lg">
                See how businesses are using our AI BI solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm text-cyan-400">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible <span className="text-green-400">Pricing</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Choose the plan that fits your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`cyber-card p-8 relative ${tier.popular ? 'ring-2 ring-purple-400' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-purple-400 mb-2">
                      {tier.price}
                      <span className="text-lg text-gray-400">{tier.period}</span>
                    </div>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      tier.popular
                        ? 'bg-purple-400 text-slate-900 hover:bg-purple-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="cyber-card max-w-4xl mx-auto p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business Intelligence?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join hundreds of businesses already using our AI-powered BI solutions to make better decisions faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button inline-flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Start Your Project
                </a>
                <a href="/demo" className="cyber-button-secondary inline-flex items-center justify-center">
                  <BarChart className="w-5 h-5 mr-2" />
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AIBusinessIntelligencePage;