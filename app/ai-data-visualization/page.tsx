'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { BarChart, PieChart, TrendingUp, Eye, Brain, Zap, Shield, Users, CheckCircle, Phone, Mail, ArrowRight, Database, Globe, Settings } from 'lucide-react';

const AIDataVisualizationPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards that bring your data to life.',
      benefits: ['Real-time updates', 'Customizable widgets', 'Drag-and-drop interface']
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Let AI analyze your data and discover hidden patterns and trends.',
      benefits: ['Automated analysis', 'Predictive modeling', 'Anomaly detection']
    },
    {
      icon: Database,
      title: 'Multi-Source Integration',
      description: 'Connect to 100+ data sources and create unified visualizations.',
      benefits: ['API integrations', 'Database connections', 'Cloud data sources']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with role-based access and data encryption.',
      benefits: ['Role-based access', 'Data encryption', 'Audit trails']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 dashboards',
        'Basic chart types',
        'Email support',
        'Standard data sources',
        'Basic analytics'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 dashboards',
        'Advanced AI insights',
        'Priority support',
        '100+ data sources',
        'Advanced analytics',
        'Custom branding',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited dashboards',
        'Custom AI models',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced security features',
        'White-label options',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const stats = [
    { number: '95%', label: 'Faster Insights' },
    { number: '100+', label: 'Data Sources' },
    { number: '50+', label: 'Chart Types' },
    { number: '24/7', label: 'Real-time Updates' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Data Visualization - Zion Tech Group"
        description="Transform your data into actionable insights with AI-powered visualization, interactive dashboards, and real-time analytics."
        keywords={['AI data visualization', 'business intelligence', 'data analytics', 'interactive dashboards']}
        canonicalUrl="https://ziontechgroup.com/ai-data-visualization"
      />
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Data Visualization
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8">
            Transform your data into actionable insights with intelligent visualization
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Our AI data visualization platform helps you discover patterns, trends, and insights 
            from your data with stunning interactive dashboards and automated analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#demo"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Watch Demo
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Visualization Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI data visualization platform combines machine learning, interactive design, 
              and real-time analytics to help you make data-driven decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="bg-slate-800/30 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Proven Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-white font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your data visualization needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-400/60 ring-2 ring-cyan-400/20 scale-105' 
                    : 'border-cyan-500/20 hover:border-cyan-400/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Visualize Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI data visualization platform 
              to make better decisions with their data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIDataVisualizationPage;