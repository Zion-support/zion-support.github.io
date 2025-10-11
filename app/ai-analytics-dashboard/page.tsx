'use client'
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, TrendingUp, PieChart, Target, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart, TrendingUp, PieChart, Target, CheckCircle, ArrowRight, Brain, Shield, Zap, FileText } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Monitor your data in real-time with interactive dashboards and visualizations.',
      benefits: ['Live data updates', 'Interactive charts', 'Custom metrics', 'Alert systems']
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis',
      description: 'Identify patterns and trends in your data with advanced AI algorithms.',
      benefits: ['Pattern recognition', 'Predictive analytics', 'Trend forecasting', 'Anomaly detection']
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Create stunning visualizations that make complex data easy to understand.',
      benefits: ['Interactive charts', 'Custom dashboards', 'Export capabilities', 'Mobile responsive']
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Set and track KPIs with automated reporting and progress monitoring.',
      benefits: ['KPI tracking', 'Goal setting', 'Progress reports', 'Performance metrics']
    },
    {
      icon: Brain,
      title: 'AI Insights',
      description: 'Get intelligent insights and recommendations powered by machine learning.',
      benefits: ['Smart recommendations', 'Automated insights', 'Predictive modeling', 'Data mining']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security with encryption and compliance features.',
      benefits: ['Data encryption', 'Access controls', 'Audit logs', 'Compliance ready']
    }
  ]

  const services = [
    {
      title: 'Dashboard Development',
      description: 'Custom analytics dashboards tailored to your business needs.',
      icon: BarChart,
      benefits: ['Custom design', 'Real-time data', 'Interactive features', 'Mobile optimization']
    },
    {
      title: 'Data Integration',
      description: 'Seamlessly integrate data from multiple sources and platforms.',
      icon: Zap,
      benefits: ['API integration', 'Data connectors', 'ETL processes', 'Data validation']
    },
    {
      title: 'Report Automation',
      description: 'Automated report generation and distribution for stakeholders.',
      icon: FileText,
      benefits: ['Scheduled reports', 'Email delivery', 'PDF generation', 'Custom formats']
    },
    {
      title: 'Training & Support',
      description: 'Comprehensive training and ongoing support for your team.',
      icon: Target,
      benefits: ['User training', 'Documentation', 'Technical support', 'Best practices']
    }
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic dashboards',
        '5 data sources',
        'Email support',
        'Standard reports'
      ]
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced analytics',
        'Unlimited data sources',
        'Priority support',
        'Custom dashboards',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Full customization',
        'White-label options',
        'Dedicated support',
        'On-premise deployment',
        'Custom integrations'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics dashboard for comprehensive business intelligence and data visualization." />
        <meta name="description" content="Powerful AI-powered analytics dashboard for real-time data visualization, trend analysis, and business intelligence." />
        <meta name="keywords" content="AI analytics, data visualization, business intelligence, dashboard, data analysis" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Analytics Dashboard</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your data into actionable insights with our AI-powered analytics dashboard. Monitor, analyze, and optimize your business performance in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to make data-driven decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
  return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                    <div className="text-purple-400 mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive analytics solutions for your business
              </p>
            </div>
      
      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
      
      <Footer />
    </>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your analytics needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 ${
                  tier.name === 'Professional' 
                    ? 'border-purple-400/50 scale-105' 
                    : 'border-white/20 hover:border-purple-400/50'
                }`}>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-300 ml-1">{tier.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.name === 'Professional'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'border border-white text-white hover:bg-white hover:text-purple-600'
                  }`}>
                    {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Start analyzing your data with our AI-powered analytics dashboard today.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
Start Free Trial>
                <ArrowRight className="ml-2 h-5 w-5">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start making data-driven decisions with our AI-powered analytics dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default AnalyticsDashboardPage