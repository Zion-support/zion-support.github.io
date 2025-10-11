import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DollarSign, PieChart, Receipt, Shield, CheckCircle, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIExpenseTrackerProPage: React.FC = () => {
  const features = [
    {
      icon: <Receipt className="w-6 h-6 text-green-500" />,
      title: 'Smart Receipt Scanning',
      description: 'AI-powered receipt scanning that automatically categorizes and records expenses with 99% accuracy.',
      benefits: ['OCR technology', 'Auto-categorization', 'Multi-currency support', 'Receipt storage']
    },
    {
      icon: <PieChart className="w-6 h-6 text-blue-500" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive spending insights with predictive analytics and budget recommendations.',
      benefits: ['Spending trends', 'Budget forecasting', 'Category analysis', 'Custom reports']
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance standards, and audit trails.',
      benefits: ['256-bit encryption', 'SOC 2 compliance', 'Role-based access', 'Audit logs']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$4.99',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Unlimited receipts',
        'Basic categorization',
        'Monthly reports',
        'Mobile app',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$14.99',
      period: '/month',
      description: 'Ideal for small to medium businesses',
      features: [
        'Team management',
        'Advanced analytics',
        'Custom categories',
        'API integration',
        'Priority support',
        'Multi-user access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$39.99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Custom workflows',
        'Advanced security',
        'White-label options',
        '24/7 support',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'QuickBooks', logo: 'QB' },
    { name: 'Xero', logo: 'X' },
    { name: 'Sage', logo: 'S' },
    { name: 'FreshBooks', logo: 'FB' },
    { name: 'Wave', logo: 'W' },
    { name: 'Zoho Books', logo: 'ZB' }
  ];

  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '$2M+', label: 'Expenses Tracked' },
    { number: '99.2%', label: 'Accuracy Rate' },
    { number: '4.9/5', label: 'User Rating' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Expense Tracker Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered expense tracking with smart receipt scanning, analytics, and enterprise security. Start your free trial today!" />
        <meta name="keywords" content="expense tracker, receipt scanning, financial management, AI analytics, business expenses" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Expense Tracker Pro
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize expense management with AI-powered receipt scanning, advanced analytics, 
              and enterprise-grade security. Save time and gain insights into your spending patterns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Demo
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Integrations Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Seamless Integrations</h2>
              <p className="text-xl text-gray-300">Connect with your favorite accounting and business tools</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">{integration.logo}</span>
                  </div>
                  <p className="text-white font-medium">{integration.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300">Choose the plan that fits your needs. All plans include a 30-day free trial.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${plan.popular ? 'border-green-500 ring-2 ring-green-500' : 'border-white/20'} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700' 
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Expense Management?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses that have streamlined their expense tracking with AI-powered automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIExpenseTrackerProPage;