'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Zap, Users, BarChart, Shield, Cloud, Database, Brain, Clock, DollarSign, Globe, Settings, TrendingUp, PieChart, Activity, Target } from 'lucide-react';

const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Real-time Analytics',
      description: 'Monitor your business performance with live data updates and instant insights',
      benefits: ['Live data streaming', 'Real-time alerts', 'Instant notifications', 'Performance monitoring']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions based on your data patterns',
      benefits: ['Predictive analytics', 'Trend analysis', 'Anomaly detection', 'Smart recommendations']
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards tailored to your specific business needs',
      benefits: ['Drag-and-drop builder', 'Custom widgets', 'Multiple layouts', 'Role-based access']
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Advanced Reporting',
      description: 'Generate comprehensive reports with automated scheduling and distribution',
      benefits: ['Automated reports', 'PDF export', 'Email scheduling', 'Custom templates']
    }
  ];

  const integrations = [
    { name: 'Google Analytics', logo: '📊' },
    { name: 'Salesforce', logo: '☁️' },
    { name: 'HubSpot', logo: '🎯' },
    { name: 'Stripe', logo: '💳' },
    { name: 'Shopify', logo: '🛒' },
    { name: 'Facebook Ads', logo: '📱' },
    { name: 'Google Ads', logo: '🔍' },
    { name: 'Mailchimp', logo: '📧' },
    { name: 'Zapier', logo: '⚡' },
    { name: 'Webhooks', logo: '🔗' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199/month',
      description: 'Perfect for small businesses',
      features: ['Up to 5 data sources', '10 custom dashboards', 'Basic AI insights', 'Email support', '1,000 data points/month'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399/month',
      description: 'Ideal for growing companies',
      features: ['Up to 20 data sources', 'Unlimited dashboards', 'Advanced AI insights', 'Priority support', '10,000 data points/month', 'API access'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799/month',
      description: 'For large organizations',
      features: ['Unlimited data sources', 'Custom integrations', 'White-label options', 'Dedicated support', 'Unlimited data points', 'Custom AI models'],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Analytics',
      description: 'Track sales, customer behavior, and inventory with AI-powered insights',
      metrics: ['Revenue tracking', 'Customer segmentation', 'Product performance', 'Conversion optimization']
    },
    {
      title: 'Marketing Performance',
      description: 'Monitor campaign effectiveness across all channels with unified reporting',
      metrics: ['ROI analysis', 'Channel attribution', 'Lead generation', 'Customer acquisition cost']
    },
    {
      title: 'Financial Reporting',
      description: 'Get comprehensive financial insights with automated reporting and forecasting',
      metrics: ['Revenue forecasting', 'Expense tracking', 'Profit analysis', 'Cash flow monitoring']
    },
    {
      title: 'Operations Management',
      description: 'Optimize business operations with real-time monitoring and predictive analytics',
      metrics: ['Process efficiency', 'Resource utilization', 'Performance KPIs', 'Operational insights']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group | Advanced Business Intelligence</title>
        <meta name="description" content="Transform your data into actionable insights with our AI Analytics Dashboard. Real-time analytics, predictive modeling, and custom dashboards for data-driven decisions." />
        <meta name="keywords" content="AI analytics, business intelligence, data dashboard, real-time analytics, predictive analytics, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Analytics Dashboard
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with advanced AI-powered analytics. Make data-driven decisions with real-time monitoring and predictive intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-cyan-600 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600/10 transition-colors duration-200">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Analytics Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to unlock the power of your data
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4">
                      <div className="text-cyan-400">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                  </div>

                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300">
                Connect with your favorite tools and platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                  <div className="text-4xl mb-2">{integration.logo}</div>
                  <div className="text-white font-medium">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300">
                See how different industries use our AI Analytics Dashboard
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300">
                Flexible pricing for businesses of all sizes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular 
                      ? 'bg-cyan-600 text-white hover:bg-cyan-700' 
                      : 'border border-cyan-600 text-cyan-400 hover:bg-cyan-600/10'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and discover the power of AI-driven analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-cyan-600 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600/10 transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAnalyticsDashboardPage;