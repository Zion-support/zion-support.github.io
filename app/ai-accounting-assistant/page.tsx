'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calculator, FileText, BarChart, Clock, CheckCircle, ArrowRight, Zap, Shield, Globe, Brain, Target, DollarSign } from 'lucide-react';

const AIAccountingAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Calculator,
      title: 'Automated Bookkeeping',
      description: 'AI-powered automatic categorization and reconciliation of financial transactions'
    },
    {
      icon: FileText,
      title: 'Smart Invoice Processing',
      description: 'Automated invoice generation, processing, and payment tracking'
    },
    {
      icon: BarChart,
      title: 'Financial Reporting',
      description: 'Real-time financial reports and insights with predictive analytics'
    },
    {
      icon: Clock,
      title: 'Tax Preparation',
      description: 'Automated tax calculations and preparation for compliance'
    },
    {
      icon: Brain,
      title: 'AI Insights',
      description: 'Intelligent financial analysis and recommendations for business growth'
    },
    {
      icon: DollarSign,
      title: 'Cash Flow Management',
      description: 'Advanced cash flow forecasting and optimization tools'
    }
  ];

  const benefits = [
    'Reduce accounting time by 70%',
    'Improve accuracy by 95%',
    'Automated tax compliance',
    'Real-time financial insights',
    'Integration with 100+ banks',
    'Advanced fraud detection',
    'Customizable reporting',
    '24/7 financial monitoring'
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$99',
      period: '/month',
      description: 'For businesses with up to $1M revenue',
      features: [
        'Up to 1,000 transactions/month',
        'Basic AI features',
        'Email support',
        'Standard integrations'
      ]
    },
    {
      name: 'Growing Business',
      price: '$299',
      period: '/month',
      description: 'For businesses with $1M-$10M revenue',
      features: [
        'Up to 10,000 transactions/month',
        'Advanced AI features',
        'Priority support',
        'Custom workflows',
        'Advanced reporting'
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
        'Full AI suite',
        '24/7 dedicated support',
        'Custom integrations',
        'White-label solution',
        'Advanced security'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Accounting Assistant | Zion Tech Group</title>
        <meta name="description" content="Revolutionize your accounting with AI-powered automation, smart bookkeeping, and intelligent financial insights." />
        <meta name="keywords" content="AI accounting, automated bookkeeping, financial management, tax preparation, accounting software" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Accounting Assistant</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your accounting with AI-powered automation, smart bookkeeping, intelligent financial insights, and automated tax preparation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Powerful Accounting Features</h2>
              <p className="text-gray-300">Everything you need to automate and optimize your financial management</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
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

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Proven Business Benefits</h2>
                <p className="text-gray-300">See how our clients have transformed their accounting processes</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
              <p className="text-gray-300">Flexible pricing options for businesses of all sizes</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 ${
                  plan.popular ? 'border-2 border-cyan-500' : 'border border-slate-700'
                }`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Automate Your Accounting?
              </h2>
              <p className="text-gray-300 mb-6">
                Join thousands of businesses using AI to streamline their financial management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAccountingAssistantPage;