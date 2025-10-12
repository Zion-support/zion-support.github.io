import React from 'react';
import { CheckCircle, ArrowRight, BarChart3, Zap, Shield, Globe, DollarSign, Star, Users, Clock, Brain, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and predictions from your data using advanced machine learning algorithms.',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Trend forecasting', 'Smart recommendations']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'Real-Time Dashboards',
      description: 'Monitor your business metrics in real-time with interactive, customizable dashboards.',
      benefits: ['Live data updates', 'Interactive charts', 'Custom widgets', 'Mobile responsive']
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Automated Reports',
      description: 'Generate and schedule automated reports with AI-driven insights and recommendations.',
      benefits: ['Scheduled reports', 'Email delivery', 'PDF generation', 'Custom templates']
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: 'Data Security',
      description: 'Enterprise-grade security with encryption, access controls, and compliance features.',
      benefits: ['End-to-end encryption', 'Role-based access', 'Audit logs', 'GDPR compliance']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      features: [
        '5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      features: [
        '25 data sources',
        'Advanced dashboards',
        'AI insights',
        'Priority support',
        '5 user accounts',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      features: [
        'Unlimited data sources',
        'Custom dashboards',
        'Advanced AI analytics',
        'Dedicated support',
        'Unlimited users',
        'White-label options',
        'Custom development'
      ],
      popular: false
    }
  ];

  const dataSources = [
    {
      name: 'Google Analytics',
      icon: '📊',
      description: 'Website traffic and user behavior data'
    },
    {
      name: 'Salesforce',
      icon: '☁️',
      description: 'CRM data and sales pipeline metrics'
    },
    {
      name: 'Facebook Ads',
      icon: '📱',
      description: 'Social media advertising performance'
    },
    {
      name: 'Stripe',
      icon: '💳',
      description: 'Payment processing and revenue data'
    },
    {
      name: 'HubSpot',
      icon: '🎯',
      description: 'Marketing automation and lead data'
    },
    {
      name: 'Zendesk',
      icon: '🎫',
      description: 'Customer support and satisfaction metrics'
    }
  ];

  const dashboardTypes = [
    {
      title: 'Executive Dashboard',
      description: 'High-level KPIs and business metrics for leadership teams.',
      metrics: ['Revenue trends', 'Customer growth', 'Market share', 'ROI analysis']
    },
    {
      title: 'Marketing Dashboard',
      description: 'Comprehensive marketing performance and campaign analytics.',
      metrics: ['Campaign ROI', 'Lead generation', 'Conversion rates', 'Channel performance']
    },
    {
      title: 'Sales Dashboard',
      description: 'Sales pipeline, performance, and forecasting analytics.',
      metrics: ['Pipeline value', 'Win rates', 'Sales velocity', 'Forecasting']
    },
    {
      title: 'Customer Dashboard',
      description: 'Customer behavior, satisfaction, and retention analytics.',
      metrics: ['Customer satisfaction', 'Retention rates', 'Churn analysis', 'Lifetime value']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics dashboard. Real-time dashboards, predictive analytics, and automated reporting." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Analytics <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Dashboard</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Transform your data into actionable insights with our AI-powered analytics platform. 
              Get real-time dashboards, predictive analytics, and automated reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Analytics Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get insights that matter with our advanced AI analytics platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Connect Your Data Sources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrate with 100+ popular business tools and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {dataSources.map((source, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{source.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{source.name}</h3>
                <p className="text-sm text-gray-600">{source.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Types Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pre-Built Dashboard Templates</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started quickly with our ready-to-use dashboard templates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dashboardTypes.map((dashboard, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{dashboard.title}</h3>
                <p className="text-gray-600 mb-6">{dashboard.description}</p>
                <div className="space-y-2">
                  {dashboard.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-gray-600">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your analytics needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                plan.popular ? 'border-2 border-purple-500' : 'border border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Data into Insights?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Join thousands of businesses using our AI analytics dashboard to make data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/ai-services"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View All AI Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAnalyticsDashboardPage;