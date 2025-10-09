'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { BarChart, TrendingUp, Brain, Zap, CheckCircle, ArrowRight, Phone, Mail, Star, Clock, Users, Award, Database, PieChart, LineChart, Activity, Target, Shield, Rocket, Wrench, Eye, MousePointer, Filter, Download, Share, Settings } from 'lucide-react';

const AIDataAnalyticsPlatformPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and predictions from your data automatically',
      benefits: ['Pattern recognition', 'Predictive analytics', 'Anomaly detection']
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Advanced Visualizations',
      description: 'Create stunning, interactive charts and dashboards with drag-and-drop simplicity',
      benefits: ['50+ chart types', 'Interactive dashboards', 'Real-time updates']
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI-powered analysis',
      benefits: ['Scheduled reports', 'Custom templates', 'Multi-format export']
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Data Integration',
      description: 'Connect to 100+ data sources including databases, APIs, and cloud services',
      benefits: ['One-click connections', 'Real-time sync', 'Data transformation']
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Goal Tracking',
      description: 'Set and track KPIs with intelligent alerts and performance monitoring',
      benefits: ['KPI dashboards', 'Smart alerts', 'Performance tracking']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with role-based access and data encryption',
      benefits: ['Role-based access', 'Data encryption', 'Audit trails']
    }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 99,
      period: 'month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 data sources',
        'Basic AI insights',
        '10 dashboards',
        '1GB data storage',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 299,
      period: 'month',
      description: 'Ideal for growing companies and teams',
      features: [
        'Unlimited data sources',
        'Advanced AI analytics',
        'Unlimited dashboards',
        '100GB data storage',
        'Priority support',
        'Custom templates',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 799,
      period: 'month',
      description: 'For large organizations with complex needs',
      features: [
        'Everything in Pro',
        'Custom AI models',
        'White-label solution',
        'Unlimited data storage',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '1M+', label: 'Data Points Processed', icon: <Database className="w-8 h-8" /> },
    { number: '85%', label: 'Faster Insights', icon: <Zap className="w-8 h-8" /> },
    { number: '4.9/5', label: 'User Rating', icon: <Star className="w-8 h-8" /> },
    { number: '25K+', label: 'Active Users', icon: <Users className="w-8 h-8" /> }
  ];

  const useCases = [
    {
      title: 'Sales Analytics',
      description: 'Track sales performance, identify trends, and predict future revenue',
      icon: '📈',
      benefits: ['Revenue tracking', 'Sales forecasting', 'Team performance']
    },
    {
      title: 'Marketing ROI',
      description: 'Measure campaign effectiveness and optimize marketing spend',
      icon: '📊',
      benefits: ['Campaign analysis', 'ROI calculation', 'Channel optimization']
    },
    {
      title: 'Customer Insights',
      description: 'Understand customer behavior and improve retention rates',
      icon: '👥',
      benefits: ['Behavior analysis', 'Churn prediction', 'Segmentation']
    },
    {
      title: 'Financial Reporting',
      description: 'Automate financial reporting and compliance monitoring',
      icon: '💰',
      benefits: ['P&L analysis', 'Budget tracking', 'Compliance reports']
    },
    {
      title: 'Operations Monitoring',
      description: 'Monitor operational metrics and identify efficiency opportunities',
      icon: '⚙️',
      benefits: ['KPI tracking', 'Process optimization', 'Resource allocation']
    },
    {
      title: 'Risk Management',
      description: 'Identify and mitigate business risks with predictive analytics',
      icon: '🛡️',
      benefits: ['Risk assessment', 'Early warning', 'Mitigation strategies']
    }
  ];

  const testimonials = [
    {
      name: 'Michael Rodriguez',
      role: 'VP of Analytics',
      company: 'TechCorp Solutions',
      content: 'AI Data Analytics Platform transformed how we analyze data. We now get insights 10x faster and make better decisions based on AI predictions.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Lisa Chen',
      role: 'Marketing Director',
      company: 'Growth Marketing Co',
      content: 'The AI insights helped us identify our most profitable customer segments and optimize our marketing spend. ROI increased by 200%.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'James Wilson',
      role: 'CFO',
      company: 'FinanceFirst Inc',
      content: 'Automated reporting saves us 20 hours per week. The AI catches anomalies we would have missed and provides actionable insights.',
      rating: 5,
      avatar: '👨‍💻'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Data Analytics Platform - Zion Tech Group | Transform Data into Insights</title>
        <meta name="description" content="Unlock the power of your data with AI-powered analytics. Get intelligent insights, automated reporting, and predictive analytics in one platform." />
        <meta name="keywords" content="AI data analytics, business intelligence, data visualization, predictive analytics, automated reporting" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-data-analytics-platform" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Data Analytics Platform
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your data into actionable insights with AI-powered analytics. 
              Make smarter decisions faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Demo
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI understands your data and provides intelligent insights automatically
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
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
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how different teams use our AI analytics platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="text-6xl mb-4 text-center">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-1">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Start with a free trial and scale as your data grows
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-slate-800/50 rounded-lg p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400/50 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${plan.price}
                    <span className="text-lg text-gray-400">/{plan.period}</span>
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
                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join thousands of data-driven companies using our AI analytics platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-cyan-400">{testimonial.role}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Start your free trial today and discover the power of AI-driven analytics. 
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIDataAnalyticsPlatformPage;
