'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, Zap, CheckCircle, ArrowRight, Brain, TrendingUp, Shield, Clock, Users, Globe, Target, Star } from 'lucide-react';

const ZionAnalyticsProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - AI-Powered Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with Zion Analytics Pro. AI-powered business intelligence, real-time dashboards, and predictive analytics." />
        <meta name="keywords" content="business intelligence, analytics dashboard, data visualization, AI analytics, predictive analytics, business insights" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <BarChart className="w-4 h-4 mr-2" />
                Micro SAAS Solution
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Analytics Pro
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                The ultimate AI-powered business intelligence platform. Transform your data into actionable insights 
                with real-time dashboards, predictive analytics, and automated reporting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#features" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Analytics <span className="text-cyan-400">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to turn your data into business intelligence and actionable insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: BarChart,
                  title: 'Real-time Dashboards',
                  description: 'Create stunning, interactive dashboards that update in real-time with your data.',
                  features: ['Live Data Updates', 'Interactive Charts', 'Custom Widgets', 'Mobile Responsive']
                },
                {
                  icon: Brain,
                  title: 'AI-Powered Insights',
                  description: 'Get intelligent recommendations and insights powered by machine learning algorithms.',
                  features: ['Smart Recommendations', 'Anomaly Detection', 'Pattern Recognition', 'Predictive Models']
                },
                {
                  icon: TrendingUp,
                  title: 'Predictive Analytics',
                  description: 'Forecast future trends and outcomes with advanced predictive modeling.',
                  features: ['Sales Forecasting', 'Trend Analysis', 'Risk Assessment', 'Scenario Planning']
                },
                {
                  icon: Zap,
                  title: 'Automated Reporting',
                  description: 'Generate and schedule automated reports with customizable templates.',
                  features: ['Scheduled Reports', 'Email Delivery', 'PDF Export', 'Custom Templates']
                },
                {
                  icon: Globe,
                  title: 'Multi-Data Source',
                  description: 'Connect to 100+ data sources including databases, APIs, and cloud services.',
                  features: ['Database Connections', 'API Integrations', 'Cloud Services', 'File Uploads']
                },
                {
                  icon: Shield,
                  title: 'Enterprise Security',
                  description: 'Bank-level security with role-based access control and data encryption.',
                  features: ['Role-based Access', 'Data Encryption', 'Audit Logs', 'Compliance Ready']
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for Every <span className="text-cyan-400">Business</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From startups to enterprises, Zion Analytics Pro scales with your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Sales Analytics',
                  description: 'Track sales performance, pipeline health, and revenue forecasting.',
                  icon: '💰',
                  benefits: ['Sales Dashboards', 'Pipeline Analysis', 'Revenue Forecasting', 'Performance Tracking']
                },
                {
                  title: 'Marketing Intelligence',
                  description: 'Analyze campaign performance, customer acquisition, and ROI metrics.',
                  icon: '📈',
                  benefits: ['Campaign Analytics', 'ROI Tracking', 'Customer Acquisition', 'Channel Analysis']
                },
                {
                  title: 'Operations Monitoring',
                  description: 'Monitor operational efficiency, resource utilization, and process optimization.',
                  icon: '⚙️',
                  benefits: ['KPI Tracking', 'Resource Monitoring', 'Process Analytics', 'Efficiency Metrics']
                },
                {
                  title: 'Financial Reporting',
                  description: 'Comprehensive financial analysis, budgeting, and expense tracking.',
                  icon: '📊',
                  benefits: ['Financial Dashboards', 'Budget Analysis', 'Expense Tracking', 'Profit Analysis']
                },
                {
                  title: 'Customer Analytics',
                  description: 'Understand customer behavior, satisfaction, and lifetime value.',
                  icon: '👥',
                  benefits: ['Customer Insights', 'Behavior Analysis', 'Satisfaction Tracking', 'LTV Analysis']
                },
                {
                  title: 'HR Analytics',
                  description: 'Track employee performance, engagement, and workforce planning.',
                  icon: '👨‍💼',
                  benefits: ['Performance Metrics', 'Engagement Analysis', 'Workforce Planning', 'Retention Tracking']
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
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
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="text-cyan-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your analytics needs. No hidden fees, cancel anytime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Starter',
                  price: '$49',
                  period: '/month',
                  description: 'Perfect for small businesses and startups',
                  features: [
                    'Up to 5 dashboards',
                    '10 data sources',
                    'Basic analytics',
                    'Email support',
                    '1 user account'
                  ],
                  popular: false
                },
                {
                  name: 'Professional',
                  price: '$149',
                  period: '/month',
                  description: 'Ideal for growing businesses and teams',
                  features: [
                    'Unlimited dashboards',
                    '50 data sources',
                    'Advanced analytics',
                    'Priority support',
                    'Up to 10 users',
                    'API access'
                  ],
                  popular: true
                },
                {
                  name: 'Enterprise',
                  price: '$399',
                  period: '/month',
                  description: 'For large organizations and enterprises',
                  features: [
                    'Unlimited everything',
                    'Custom integrations',
                    'White-label options',
                    'Dedicated support',
                    'Unlimited users',
                    'SLA guarantees'
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/10 hover:border-cyan-400/30'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
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
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600' 
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Analytics Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your data into business intelligence. Start your free trial today 
              and see the power of AI-powered analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAnalyticsProPage;