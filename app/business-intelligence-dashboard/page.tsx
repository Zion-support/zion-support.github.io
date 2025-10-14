'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ChartBarIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  SignalIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function BusinessIntelligenceDashboardPage() {
  const features = [
    'Real-time Data Visualization',
    'Custom KPI Dashboards',
    'Automated Report Generation',
    'Multi-source Data Integration',
    'Advanced Analytics & Insights',
    'Mobile-responsive Design',
    'Role-based Access Control',
    'Data Export & Sharing',
    'Alert & Notification System',
    'API Integration Support'
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '5 Data Sources',
        '10 Custom Dashboards',
        'Basic Analytics',
        'Email Reports',
        'Standard Support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        '25 Data Sources',
        'Unlimited Dashboards',
        'Advanced Analytics',
        'Real-time Alerts',
        'API Access',
        'Priority Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited Data Sources',
        'Custom Integrations',
        'White-label Solution',
        'Dedicated Support',
        'On-premise Deployment',
        'Custom Training'
      ],
      popular: false
    }
  ];

  const integrations = [
    {
      name: 'Salesforce',
      description: 'CRM data integration',
      icon: UserGroupIcon
    },
    {
      name: 'Google Analytics',
      description: 'Website performance data',
      icon: ChartBarIcon
    },
    {
      name: 'Stripe',
      description: 'Payment and revenue data',
      icon: CurrencyDollarIcon
    },
    {
      name: 'Slack',
      description: 'Team communication data',
      icon: SignalIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>Business Intelligence Dashboard - Zion Tech Group</title>
        <meta name="description" content="Real-time analytics and reporting dashboard with custom KPIs, automated insights, and data visualization. Transform your data into actionable insights." />
        <meta name="keywords" content="business intelligence, analytics dashboard, KPI tracking, data visualization, reporting, business metrics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold gradient-text neon-text">
                Business Intelligence Dashboard
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our powerful BI dashboard. 
              <span className="text-cyan-400 font-semibold"> Real-time analytics, custom KPIs, automated reporting.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                <span>30-Day Free Trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                <span>No Setup Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to make data-driven decisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors">
                <CheckCircleIcon className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and data sources
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover-lift text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{integration.name}</h3>
                <p className="text-gray-300">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your data needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover-lift relative ${
                plan.popular ? 'border-cyan-500 shadow-lg shadow-cyan-500/25' : 'border-slate-600'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 transform hover:scale-105'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of businesses making smarter decisions with our BI dashboard
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
            <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </section>
    </>
  );
}