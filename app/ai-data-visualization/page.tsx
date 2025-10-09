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
      description: 'Create stunning, interactive dashboards that automatically update with real-time data from any source.',
      benefits: ['Real-time updates', 'Drag-and-drop builder', 'Mobile responsive']
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Our AI automatically identifies patterns, trends, and anomalies in your data to provide actionable insights.',
      benefits: ['Pattern recognition', 'Anomaly detection', 'Predictive analytics']
    },
    {
      icon: Zap,
      title: 'One-Click Integration',
      description: 'Connect to 100+ data sources including databases, APIs, cloud services, and business applications.',
      benefits: ['100+ connectors', 'Auto-sync', 'No coding required']
    },
    {
      icon: Eye,
      title: 'Advanced Visualizations',
      description: '50+ chart types including heatmaps, scatter plots, treemaps, and custom visualizations for any data type.',
      benefits: ['50+ chart types', 'Custom visuals', '3D visualizations']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with role-based access, data encryption, and compliance with SOC 2 and GDPR.',
      benefits: ['Role-based access', 'Data encryption', 'Audit logs']
    },
    {
      icon: Users,
      title: 'Collaborative Features',
      description: 'Share dashboards, add comments, schedule reports, and collaborate with your team in real-time.',
      benefits: ['Real-time sharing', 'Comments & annotations', 'Scheduled reports']
    }
  ];
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 dashboards',
        'Basic chart types',
        'Standard data sources',
        'Email support',
        'Basic templates',
        '1GB data storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 dashboards',
        'All chart types',
        '100+ data sources',
        'Priority support',
        'Custom templates',
        '10GB data storage',
        'AI insights',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited dashboards',
        'Custom visualizations',
        'All integrations',
        'Dedicated support',
        'Custom development',
        'Unlimited storage',
        'Advanced AI features',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '95%', label: 'Faster Insights' },
    { number: '100+', label: 'Data Sources' },
    { number: '50+', label: 'Chart Types' },
    { number: '24/7', label: 'Real-time Updates' }
  ];

  const useCases = [
    {
      title: 'Sales Analytics',
      description: 'Track sales performance, pipeline health, and revenue trends with interactive dashboards and AI-powered predictions.',
      icon: TrendingUp
    },
    {
      title: 'Marketing ROI',
      description: 'Visualize marketing campaign performance, customer acquisition costs, and ROI across all channels.',
      icon: Globe
    },
    {
      title: 'Operations Monitoring',
      description: 'Monitor key operational metrics, identify bottlenecks, and optimize processes with real-time dashboards.',
      icon: Settings
    },
    {
      title: 'Financial Reporting',
      description: 'Create comprehensive financial reports with automated data collection and intelligent insights.',
      icon: Database
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Data Visualization Platform - Zion Tech Group"
        description="Transform data into actionable insights with AI-powered visualization. 95% faster insights, 100+ data sources, and interactive dashboards."
        keywords={['data visualization', 'business intelligence', 'dashboards', 'data analytics', 'AI insights']}
        canonicalUrl="https://ziontechgroup.com/ai-data-visualization"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Data Visualization Platform
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Transform data into actionable insights with AI
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered data visualization platform helps businesses make data-driven decisions 
                with interactive dashboards, intelligent insights, and 100+ data source integrations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Demo</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Powerful Visualization Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Perfect for Every Department
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <useCase.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
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
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+13024640950"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Visualize Your Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 1,500+ companies already using our data visualization platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};
