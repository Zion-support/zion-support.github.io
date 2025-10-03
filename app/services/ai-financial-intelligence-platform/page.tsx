import React from 'react';
// Metadata handled by React Helmet
import { 
  DollarSign, 
  TrendingUp, 
  PieChart, 
  Shield, 
  Target, 
  CheckCircle, 
  Zap, 
  Star,
  Smartphone,
  Calendar,
  MessageSquare,
  FileText,
  BarChart3,
  Clock,
  Bell,
  Users,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Financial Intelligence Platform | Zion Tech Group - Smart Financial Analytics',
  description: 'Transform your financial management with AI-powered insights, automated budgeting, investment analysis, and intelligent financial planning. Make smarter financial decisions.',
  keywords: 'AI financial platform, financial analytics, investment analysis, budgeting AI, financial planning, wealth management AI',
};

export default function AIFinancialIntelligencePlatform() {
  const features = [
    {
      icon: DollarSign,
      title: 'Smart Budgeting',
      description: 'AI-powered budget creation and optimization based on your spending patterns and financial goals'
    },
    {
      icon: TrendingUp,
      title: 'Investment Analysis',
      description: 'Advanced portfolio analysis with AI-driven investment recommendations and risk assessment'
    },
    {
      icon: PieChart,
      title: 'Expense Categorization',
      description: 'Automatic expense categorization and spending pattern analysis with actionable insights'
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Set and track financial goals with AI-powered progress monitoring and recommendations'
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Comprehensive financial risk analysis and fraud detection with real-time alerts'
    },
    {
      icon: BarChart3,
      title: 'Financial Forecasting',
      description: 'Predict future financial scenarios with advanced AI modeling and scenario planning'
    }
  ];

  const benefits = [
    '25% increase in savings rates',
    '40% improvement in investment returns',
    '60% reduction in financial stress',
    'Real-time fraud protection'
  ];

  const financialServices = [
    {
      title: 'Personal Finance Management',
      description: 'Complete personal finance tracking and optimization',
      icon: DollarSign,
      features: ['Expense tracking', 'Budget optimization', 'Bill management', 'Savings goals']
    },
    {
      title: 'Investment Portfolio Analysis',
      description: 'Advanced portfolio management and optimization',
      icon: TrendingUp,
      features: ['Portfolio analysis', 'Risk assessment', 'Rebalancing alerts', 'Performance tracking']
    },
    {
      title: 'Tax Optimization',
      description: 'Smart tax planning and optimization strategies',
      icon: PieChart,
      features: ['Tax planning', 'Deduction optimization', 'Filing assistance', 'Year-end strategies']
    },
    {
      title: 'Retirement Planning',
      description: 'Comprehensive retirement planning and projection',
      icon: Target,
      features: ['Retirement projections', 'Contribution optimization', 'Social Security analysis', 'Withdrawal strategies']
    }
  ];

  const pricingTiers = [
    {
      name: 'Essential',
      price: '$19.99',
      period: '/month',
      description: 'Perfect for basic financial management',
      features: [
        'Unlimited account connections',
        'Basic budgeting tools',
        'Expense categorization',
        'Goal tracking',
        'Mobile app access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$39.99',
      period: '/month',
      description: 'Advanced features for serious investors',
      features: [
        'Everything in Essential',
        'Advanced investment analysis',
        'Tax optimization tools',
        'Retirement planning',
        'Risk assessment',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Wealth Management',
      price: '$79.99',
      period: '/month',
      description: 'Complete wealth management solution',
      features: [
        'Everything in Professional',
        'Personal financial advisor access',
        'Custom investment strategies',
        'Estate planning tools',
        'Family wealth management',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  const successMetrics = [
    {
      metric: 'Average User Savings Increase',
      value: '25%',
      description: 'Users save more with AI-powered budgeting'
    },
    {
      metric: 'Investment Return Improvement',
      value: '40%',
      description: 'Better returns with AI portfolio optimization'
    },
    {
      metric: 'Financial Stress Reduction',
      value: '60%',
      description: 'Users report less financial anxiety'
    },
    {
      metric: 'Fraud Detection Rate',
      value: '99.8%',
      description: 'Advanced AI fraud protection'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Financial Intelligence Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-4xl mx-auto">
              Transform your financial future with AI-powered insights, automated budgeting, 
              and intelligent investment analysis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Get Free Financial Assessment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Financial Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to take control of your financial future with intelligent automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Financial Services */}
      <div className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Financial Services
            </h2>
            <p className="text-xl text-gray-600">
              Cover all aspects of your financial life with specialized AI-powered tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {financialServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Financial Results
            </h2>
            <p className="text-xl text-gray-600">
              Real results from thousands of users who have transformed their financial lives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">{metric.value}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.metric}</h3>
                  <p className="text-gray-600">{metric.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Financial Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your financial management needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                tier.popular ? 'border-green-500 scale-105' : 'border-gray-200'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="tel:+13024640950" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Start Free Trial
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security & Compliance */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bank-Level Security & Compliance
            </h2>
            <p className="text-xl text-gray-600">
              Your financial data is protected with enterprise-grade security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">256-bit Encryption</h3>
              <p className="text-gray-600">Military-grade encryption protects all your financial data</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SOC 2 Compliant</h3>
              <p className="text-gray-600">Certified security controls and regular audits</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Read-Only Access</h3>
              <p className="text-gray-600">We never store your banking credentials or passwords</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Take Control of Your Financial Future Today
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of users who have achieved financial freedom with AI-powered insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Email kleber@ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-green-100 mb-4">Visit our website for more information:</p>
            <a 
              href="https://ziontechgroup.com" 
              className="text-white underline hover:text-green-200 transition-colors"
            >
              https://ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-green-100">
              <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}