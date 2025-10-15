import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Calculator, FileText, TrendingUp, Shield, Clock, DollarSign, Target, Award, Users, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const AiAccountingAssistantPage: React.FC = () => {
  const features = [
    {
      icon: <Calculator className="w-8 h-8 text-cyan-400" />,
      title: 'Automated Bookkeeping',
      description: 'AI-powered automated bookkeeping that processes transactions, categorizes expenses, and maintains accurate records.'
    },
    {
      icon: <FileText className="w-8 h-8 text-green-400" />,
      title: 'Smart Invoice Processing',
      description: 'Automatically extract data from invoices, match with purchase orders, and process payments with 99.9% accuracy.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: 'Financial Analytics',
      description: 'Advanced financial analytics and reporting with predictive insights and trend analysis.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Compliance & Security',
      description: 'Ensure compliance with accounting standards and regulations with bank-level security protocols.'
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-400" />,
      title: 'Real-time Processing',
      description: 'Process financial data in real-time with instant updates and notifications.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'Multi-user Access',
      description: 'Collaborative accounting with role-based access control and team management features.'
    }
  ];

  const capabilities = [
    {
      title: 'Expense Management',
      description: 'Automatically categorize and track business expenses with receipt scanning and OCR technology.',
      price: '$49/month'
    },
    {
      title: 'Invoice Generation',
      description: 'Create professional invoices with AI-powered templates and automated follow-ups.',
      price: '$29/month'
    },
    {
      title: 'Tax Preparation',
      description: 'Automated tax calculations and preparation with compliance checking and filing assistance.',
      price: '$99/month'
    },
    {
      title: 'Financial Reporting',
      description: 'Generate comprehensive financial reports with customizable dashboards and analytics.',
      price: '$79/month'
    },
    {
      title: 'Payroll Management',
      description: 'Automated payroll processing with tax calculations and direct deposit capabilities.',
      price: '$149/month'
    },
    {
      title: 'Audit Support',
      description: 'Complete audit trail and documentation with automated backup and recovery.',
      price: '$199/month'
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: 'Cost Savings',
      description: 'Save up to 70% on accounting costs with automated processes'
    },
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      title: 'Accuracy',
      description: '99.9% accuracy in data processing and calculations'
    },
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      title: 'Compliance',
      description: 'Automated compliance with accounting standards and regulations'
    },
    {
      icon: <Clock className="w-6 h-6 text-cyan-400" />,
      title: 'Time Savings',
      description: 'Reduce accounting tasks by 80% with AI automation'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for freelancers and small businesses',
      features: [
        'Basic bookkeeping automation',
        'Up to 100 transactions/month',
        'Invoice generation',
        'Email support',
        'Basic reporting',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI bookkeeping',
        'Up to 1,000 transactions/month',
        'Smart invoice processing',
        'Financial analytics',
        'Priority support',
        'Up to 5 user accounts',
        'Tax preparation assistance'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited transactions',
        'Custom AI models',
        'Advanced compliance tools',
        '24/7 dedicated support',
        'Unlimited users',
        'Custom integrations',
        'White-label solution',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Accounting Assistant - Automated Bookkeeping & Financial Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionize your accounting with our AI-powered assistant. Automated bookkeeping, invoice processing, and financial analytics. Starting at $99/month." />
        <meta name="keywords" content="AI accounting, automated bookkeeping, invoice processing, financial management, accounting software, AI assistant" />
        <meta property="og:title" content="AI Accounting Assistant - Zion Tech Group" />
        <meta property="og:description" content="AI-powered accounting assistant for automated bookkeeping and financial management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-accounting-assistant" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Accounting
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Assistant
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your accounting with AI-powered automation. Automated bookkeeping, smart invoice processing, 
                and intelligent financial analytics for modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a 
                  href="tel:+13024640950" 
                  className="inline-flex items-center border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call +1 302 464 0950
                </a>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
                  <div className="text-gray-300">Time Savings</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Accounting Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to automate your accounting processes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-colors">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Accounting Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Modular solutions for every accounting need
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {capability.description}
                  </p>
                  <div className="text-cyan-400 font-semibold text-lg">
                    {capability.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Accounting Assistant?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven results and industry-leading technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/25 scale-105' 
                    : 'border-slate-700 hover:border-cyan-500'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-sm font-bold py-1 px-3 rounded-full text-center mb-4">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full inline-flex items-center justify-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 p-12 rounded-lg border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Automate Your Accounting?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience the power of AI-driven accounting
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="inline-flex items-center border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiAccountingAssistantPage;
