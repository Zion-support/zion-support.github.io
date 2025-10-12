import React from 'react';
import { CheckCircle, CreditCard, Brain, BarChart, Receipt, Shield, Smartphone, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIExpenseTracker: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'AI-Powered Receipt Scanning',
      description: 'Automatically extract expense data from receipts using advanced OCR and AI. No more manual data entry.',
      benefits: ['Smart OCR Technology', 'Automatic Data Extraction', 'Receipt Storage', 'Multi-language Support']
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-400" />,
      title: 'Smart Categorization',
      description: 'AI automatically categorizes expenses based on merchant, amount, and context. Learn from your patterns.',
      benefits: ['Auto-categorization', 'Learning Algorithm', 'Custom Categories', 'Rule-based Sorting']
    },
    {
      icon: <BarChart className="w-8 h-8 text-green-400" />,
      title: 'Real-time Analytics',
      description: 'Get instant insights into your spending patterns with beautiful charts and detailed reports.',
      benefits: ['Live Dashboards', 'Spending Trends', 'Budget Tracking', 'Export Reports']
    },
    {
      icon: <Receipt className="w-8 h-8 text-orange-400" />,
      title: 'Receipt Management',
      description: 'Store, organize, and search through all your receipts with powerful search and filtering capabilities.',
      benefits: ['Cloud Storage', 'Advanced Search', 'Receipt Backup', 'Tax Preparation']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Bank-Level Security',
      description: 'Your financial data is protected with enterprise-grade security and encryption.',
      benefits: ['End-to-End Encryption', 'SOC 2 Certified', 'GDPR Compliant', 'Regular Audits']
    },
    {
      icon: <Smartphone className="w-8 h-8 text-yellow-400" />,
      title: 'Mobile-First Design',
      description: 'Track expenses on the go with our intuitive mobile app available on iOS and Android.',
      benefits: ['iOS & Android Apps', 'Offline Mode', 'Quick Add', 'Push Notifications']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$9.99',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Unlimited receipts',
        'Basic AI categorization',
        'Mobile app access',
        'Email support',
        'Basic reports',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$29.99',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Everything in Personal',
        'Advanced AI features',
        'Team collaboration (5 users)',
        'Priority support',
        'Advanced analytics',
        'Custom categories',
        'API access',
        'Integration with accounting software'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99.99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Business',
        'Unlimited users',
        'Custom AI training',
        '24/7 phone support',
        'Custom integrations',
        'White-label options',
        'Dedicated account manager',
        'On-premise deployment option'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Personal Finance',
      description: 'Track personal expenses and build better spending habits',
      example: 'Save 20% more by understanding your spending patterns'
    },
    {
      title: 'Small Business',
      description: 'Manage business expenses and simplify tax preparation',
      example: 'Reduce expense processing time by 80%'
    },
    {
      title: 'Freelancers',
      description: 'Track business expenses for tax deductions',
      example: 'Maximize tax deductions with proper expense categorization'
    },
    {
      title: 'Teams',
      description: 'Collaborate on expense management and approvals',
      example: 'Streamline expense approval workflows'
    }
  ];

  const integrations = [
    'QuickBooks', 'Xero', 'Sage', 'FreshBooks', 'Wave', 'Zoho Books',
    'Stripe', 'PayPal', 'Square', 'Bank APIs', 'Google Drive', 'Dropbox'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Track expenses with AI. Automatically scan receipts, categorize expenses, and get insights. Starting at $9.99/month." />
        <meta name="keywords" content="AI expense tracker, receipt scanning, expense management, financial tracking, OCR receipt" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Expense Tracker
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Track expenses effortlessly with AI. Automatically scan receipts, categorize expenses, and get insights into your spending patterns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Demo
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Powerful Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-3">{useCase.description}</p>
                  <p className="text-sm text-purple-300 italic">{useCase.example}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Integrations Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Integrations</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-gray-300 text-center mb-8">
                Connect with your favorite accounting and payment tools
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                    <span className="text-white font-medium">{integration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Simple Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${plan.popular ? 'border-purple-400 ring-2 ring-purple-400' : 'border-white/20'} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
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
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700' 
                      : 'border-2 border-white text-white hover:bg-white/10'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Simplify Your Expense Tracking?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of users who have simplified their expense management with our AI-powered solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIExpenseTracker;