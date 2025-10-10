'use client';
import React, { useState, useEffect } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  PieChart, 
  Target, 
  Shield, 
  Smartphone, 
  CreditCard, 
  PiggyBank, 
  BarChart, 
  Calendar, 
  Bell, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  Activity,
  Cpu,
  Wifi,
  Monitor,
  HardDrive,
  Brain,
  Users,
  Globe,
  Settings,
  FileText,
  AlertTriangle,
  DollarSign as Dollar,
  TrendingUp as Trending,
  PieChart as PieChartIcon,
  Target as Crosshair,
  Shield as Security,
  Smartphone as SmartphoneIcon,
  CreditCard as CreditCardIcon,
  PiggyBank as PiggyBankIcon,
  BarChart as BarChartIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Star as StarIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Activity as ActivityIcon,
  Cpu as CpuIcon,
  Wifi as WifiIcon,
  Monitor as MonitorIcon,
  HardDrive as HardDriveIcon,
  Brain as BrainIcon,
  Users as People,
  Globe as GlobeIcon,
  Settings as SettingsIcon,
  FileText as FileTextIcon,
  AlertTriangle as Alert
} from 'lucide-react';

const AIPersonalFinanceManagerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: DollarSign,
      title: 'Smart Budgeting',
      description: 'AI-powered budget creation and management with personalized recommendations',
      capabilities: [
        'Automatic budget categorization',
        'Spending pattern analysis',
        'Budget alerts and notifications',
        'Goal-based budgeting'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Investment Tracking',
      description: 'Comprehensive investment portfolio monitoring and optimization',
      capabilities: [
        'Real-time portfolio tracking',
        'Performance analytics',
        'Risk assessment',
        'Investment recommendations'
      ]
    },
    {
      icon: PieChart,
      title: 'Expense Analytics',
      description: 'Detailed spending analysis with visual insights and trends',
      capabilities: [
        'Category-wise spending breakdown',
        'Monthly/yearly comparisons',
        'Trend analysis',
        'Spending predictions'
      ]
    },
    {
      icon: Target,
      title: 'Goal Setting',
      description: 'Set and track financial goals with AI-powered planning',
      capabilities: [
        'Savings goals',
        'Debt payoff plans',
        'Investment targets',
        'Progress tracking'
      ]
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Bank-level security with advanced encryption and privacy protection',
      capabilities: [
        '256-bit encryption',
        'Two-factor authentication',
        'Biometric login',
        'Privacy controls'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Full-featured mobile app for managing finances on the go',
      capabilities: [
        'Real-time notifications',
        'Quick expense entry',
        'Bill reminders',
        'Offline access'
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '25% More Savings',
      description: 'Users save significantly more with AI-powered recommendations',
      stat: '25%'
    },
    {
      icon: Clock,
      title: '5 Minutes Daily',
      description: 'Spend just 5 minutes daily to manage your entire financial life',
      stat: '5 min'
    },
    {
      icon: Shield,
      title: '100% Secure',
      description: 'Bank-level security with zero data breaches',
      stat: '100%'
    },
    {
      icon: Target,
      title: '90% Goal Achievement',
      description: 'Users achieve their financial goals with AI guidance',
      stat: '90%'
    }
  ];

  const integrations = [
    {
      name: 'Banking',
      description: 'Connect all your bank accounts securely',
      icon: CreditCard,
      features: ['Chase', 'Bank of America', 'Wells Fargo', 'Capital One', 'Local Banks']
    },
    {
      name: 'Investment',
      description: 'Track all your investment accounts',
      icon: TrendingUp,
      features: ['Fidelity', 'Vanguard', 'Schwab', 'Robinhood', 'ETrade']
    },
    {
      name: 'Credit Cards',
      description: 'Monitor all credit card transactions',
      icon: CreditCard,
      features: ['Visa', 'Mastercard', 'American Express', 'Discover', 'Store Cards']
    },
    {
      name: 'Cryptocurrency',
      description: 'Track your crypto investments',
      icon: Globe,
      features: ['Bitcoin', 'Ethereum', 'Binance', 'Coinbase', 'Kraken']
    },
    {
      name: 'Bills & Utilities',
      description: 'Automated bill tracking and payments',
      icon: FileText,
      features: ['Electricity', 'Water', 'Internet', 'Phone', 'Insurance']
    },
    {
      name: 'Tax Preparation',
      description: 'Seamless tax preparation integration',
      icon: FileText,
      features: ['TurboTax', 'H&R Block', 'TaxAct', 'FreeTaxUSA', 'TaxSlayer']
    }
  ];

  const useCases = [
    {
      title: 'Young Professionals',
      description: 'Perfect for recent graduates starting their financial journey',
      icon: Users,
      benefits: [
        'Student loan management',
        'Emergency fund building',
        'First investment guidance',
        'Credit score improvement'
      ]
    },
    {
      title: 'Families',
      description: 'Comprehensive family financial management and planning',
      icon: Users,
      benefits: [
        'Family budget management',
        'Education savings planning',
        'Insurance optimization',
        'Estate planning'
      ]
    },
    {
      title: 'Retirees',
      description: 'Optimize retirement income and manage expenses',
      icon: Award,
      benefits: [
        'Retirement income optimization',
        'Healthcare cost management',
        'Social Security optimization',
        'Legacy planning'
      ]
    },
    {
      title: 'Small Business Owners',
      description: 'Separate personal and business finances with ease',
      icon: Settings,
      benefits: [
        'Business expense tracking',
        'Tax preparation',
        'Cash flow management',
        'Investment planning'
      ]
    }
  ];

  const pricing = [
    {
      name: 'Basic',
      price: '$9.99',
      period: '/month',
      description: 'Essential features for personal finance management',
      features: [
        'Basic budgeting',
        'Expense tracking',
        'Goal setting',
        'Mobile app',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: '$19.99',
      period: '/month',
      description: 'Advanced features with AI-powered insights',
      features: [
        'AI-powered budgeting',
        'Investment tracking',
        'Advanced analytics',
        'Bill reminders',
        'Priority support',
        'Credit score monitoring',
        'Tax preparation'
      ],
      popular: true
    },
    {
      name: 'Family',
      price: '$29.99',
      period: '/month',
      description: 'Complete family financial management',
      features: [
        'Everything in Premium',
        'Family accounts',
        'Child education planning',
        'Estate planning tools',
        'Dedicated support',
        'Financial advisor access',
        'Custom reporting'
      ],
      popular: false
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI Personal Finance Manager
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Take control of your finances with AI-powered budgeting, investment tracking, 
              and personalized financial insights that help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <DollarSign className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Smart Budgeting</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Investment Tracking</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">100% Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powerful Financial Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage your finances effectively with AI-powered insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose AI Personal Finance Manager?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results that help you achieve your financial goals faster
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect all your financial accounts in one place
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <integration.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{integration.name}</h3>
                    <p className="text-gray-400 text-sm">{integration.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {integration.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                      {feature}
                    </span>
                  ))}
                </div>
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
              Perfect for Everyone
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Tailored solutions for different life stages and financial goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your financial management needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-6 relative ${plan.popular ? 'ring-2 ring-cyan-400 neon-glow-cyan' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-700 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Start Your Financial Journey Today
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                Join thousands of users who have transformed their financial lives
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-cyan-100">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-cyan-100">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-cyan-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-white text-cyan-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPersonalFinanceManagerPage;