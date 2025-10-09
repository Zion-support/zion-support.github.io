'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, ArrowRight, BarChart, Brain, TrendingUp, Eye, Target, Zap, Globe, Award, Calendar, FileText, PieChart, Activity, DollarSign, Settings, Database, Cloud, Smartphone, Laptop, Monitor, Users, Shield, MessageSquare } from 'lucide-react';

const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and recommendations powered by machine learning algorithms that analyze your data patterns.',
      benefits: ['Automated insights generation', 'Predictive recommendations', 'Anomaly detection']
    },
    {
      icon: BarChart,
      title: 'Real-Time Analytics',
      description: 'Monitor your business performance in real-time with live dashboards that update automatically.',
      benefits: ['Live data updates', 'Instant notifications', 'Real-time monitoring']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and outcomes using advanced AI models trained on your historical data.',
      benefits: ['Revenue forecasting', 'Trend prediction', 'Risk assessment']
    },
    {
      icon: Target,
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards tailored to your specific business needs and KPIs.',
      benefits: ['Drag-and-drop builder', 'Custom widgets', 'Role-based views']
    },
    {
      icon: Eye,
      title: 'Data Visualization',
      description: 'Transform complex data into beautiful, interactive charts and graphs that tell your story.',
      benefits: ['Interactive charts', 'Multiple chart types', 'Export capabilities']
    },
    {
      icon: Zap,
      title: 'Automated Reports',
      description: 'Generate and send automated reports to stakeholders with AI-powered insights and recommendations.',
      benefits: ['Scheduled reports', 'Email delivery', 'PDF/Excel export']
    }
  ];

  const dashboardTypes = [
    {
      icon: DollarSign,
      title: 'Sales Analytics',
      description: 'Track sales performance, revenue trends, and conversion rates with AI-powered insights.',
      metrics: ['Revenue Growth', 'Conversion Rate', 'Customer LTV', 'Sales Pipeline']
    },
    {
      icon: Users,
      title: 'Customer Analytics',
      description: 'Understand customer behavior, preferences, and lifetime value with advanced segmentation.',
      metrics: ['Customer Acquisition', 'Retention Rate', 'Churn Analysis', 'Segmentation']
    },
    {
      icon: MessageSquare,
      title: 'Marketing Analytics',
      description: 'Measure marketing campaign effectiveness and ROI with detailed attribution analysis.',
      metrics: ['Campaign ROI', 'Lead Generation', 'Conversion Funnel', 'Attribution']
    },
    {
      icon: Activity,
      title: 'Operational Analytics',
      description: 'Monitor operational efficiency, resource utilization, and performance metrics.',
      metrics: ['Efficiency Metrics', 'Resource Usage', 'Performance KPIs', 'Cost Analysis']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses starting with analytics',
      features: [
        'Up to 5 dashboards',
        'Basic AI insights',
        'Real-time data',
        'Email reports',
        'Mobile app',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Advanced analytics for growing businesses',
      features: [
        'Unlimited dashboards',
        'Advanced AI analytics',
        'Predictive analytics',
        'Custom integrations',
        'API access',
        'Priority support',
        'White-label options',
        'Advanced security'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'Complete analytics solution for large organizations',
      features: [
        'Everything in Professional',
        'Custom AI models',
        'Dedicated support',
        'On-premise deployment',
        'Custom development',
        'SLA guarantee',
        'Training & onboarding',
        'Multi-tenant support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'DataCorp Solutions',
      role: 'CEO',
      content: 'The AI insights have revolutionized how we make decisions. We\'ve increased our revenue by 45% using the predictive analytics.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'GrowthTech Inc.',
      role: 'Marketing Director',
      content: 'The real-time dashboards help us optimize our campaigns instantly. Our marketing ROI improved by 200% in 6 months.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'RetailMax',
      role: 'Operations Manager',
      content: 'The automated reports save us hours every week. The AI recommendations have helped us reduce costs by 30%.',
      rating: 5
    }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <>
      <SEOOptimizer
        title="AI Analytics Dashboard - Zion Tech Group | Real-Time Business Intelligence"
        description="Advanced AI-powered analytics dashboard with real-time insights, predictive analytics, and automated reporting. Transform your data into actionable intelligence. Starting at $199/month."
        keywords={['AI analytics', 'business intelligence', 'real-time dashboard', 'predictive analytics', 'data visualization', 'automated reporting']}
        canonicalUrl="https://ziontechgroup.com/ai-analytics-dashboard"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                AI Analytics Dashboard
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable intelligence with our AI-powered analytics dashboard. 
              Get real-time insights, predictive analytics, and automated reporting that drives business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#pricing"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Powerful AI Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card group">
                  <feature.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Types Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Analytics for Every Business Need
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dashboardTypes.map((dashboard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card group">
                  <dashboard.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{dashboard.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{dashboard.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-cyan-400">Key Metrics:</h4>
                    {dashboard.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-xs text-gray-300">
                        <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
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
        <section id="pricing" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Choose Your Analytics Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:${contactInfo.email}?subject=Interest in ${plan.name} AI Analytics Plan`}
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 cyber-card text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Unlock Your Data's Potential?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join thousands of businesses using AI analytics to make smarter decisions and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${contactInfo.email}?subject=AI Analytics Dashboard Free Trial Request`}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all flex items-center justify-center gap-2"
                >
                  <BarChart className="w-5 h-5" />
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
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

export default AIAnalyticsDashboardPage;