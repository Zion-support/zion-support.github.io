'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Users, Zap, BarChart3, Calendar, Shield, Clock, Target, TrendingUp, Brain, Settings, Globe, Smartphone, DollarSign, CreditCard, TrendingUp as TrendingUpIcon, PieChart } from 'lucide-react';

const AIFinancialServicesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Fraud Detection & Prevention',
      description: 'Advanced AI algorithms that detect fraudulent transactions in real-time with 99.9% accuracy and minimal false positives.',
      benefits: ['Real-time detection', 'Pattern recognition', 'Risk scoring', 'Automated blocking', 'Machine learning models']
    },
    {
      icon: BarChart3,
      title: 'Algorithmic Trading',
      description: 'AI-powered trading algorithms that analyze market data, identify opportunities, and execute trades automatically.',
      benefits: ['Market analysis', 'Automated trading', 'Risk management', 'Portfolio optimization', 'Backtesting']
    },
    {
      icon: DollarSign,
      title: 'Credit Risk Assessment',
      description: 'Intelligent credit scoring and risk assessment using machine learning to evaluate borrower creditworthiness.',
      benefits: ['Credit scoring', 'Risk modeling', 'Default prediction', 'Portfolio analysis', 'Regulatory compliance']
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Automated compliance monitoring and reporting to ensure adherence to financial regulations and standards.',
      benefits: ['Regulatory reporting', 'Compliance monitoring', 'Audit trails', 'Risk assessment', 'Documentation']
    }
  ];

  const solutions = [
    { 
      name: 'Banking AI', 
      icon: '🏦', 
      description: 'AI solutions for retail and commercial banking',
      features: ['Customer service', 'Loan processing', 'Risk assessment', 'Fraud detection', 'Personalized banking']
    },
    { 
      name: 'Investment Management', 
      icon: '📈', 
      description: 'AI-powered investment and portfolio management',
      features: ['Portfolio optimization', 'Algorithmic trading', 'Market analysis', 'Risk management', 'Performance tracking']
    },
    { 
      name: 'Insurance AI', 
      icon: '🛡️', 
      description: 'Intelligent insurance underwriting and claims processing',
      features: ['Underwriting automation', 'Claims processing', 'Risk assessment', 'Fraud detection', 'Customer service']
    },
    { 
      name: 'Fintech Solutions', 
      icon: '💳', 
      description: 'AI-powered fintech applications and services',
      features: ['Payment processing', 'Digital wallets', 'Lending platforms', 'Personal finance', 'Cryptocurrency']
    },
    { 
      name: 'RegTech', 
      icon: '⚖️', 
      description: 'Regulatory technology and compliance automation',
      features: ['Compliance monitoring', 'Regulatory reporting', 'Risk management', 'Audit automation', 'Documentation']
    },
    { 
      name: 'Wealth Management', 
      icon: '💰', 
      description: 'AI-driven wealth management and financial planning',
      features: ['Financial planning', 'Investment advice', 'Tax optimization', 'Estate planning', 'Retirement planning']
    }
  ];

  const pricingPlans = [
    {
      name: 'Startup',
      price: '$1,999',
      period: '/month',
      description: 'Perfect for fintech startups and small financial institutions',
      features: [
        'Up to 10,000 transactions/month',
        'Basic fraud detection',
        'Standard reporting',
        'Email support',
        'API access',
        'Basic compliance'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$9,999',
      period: '/month',
      description: 'Ideal for growing financial institutions and investment firms',
      features: [
        'Up to 100,000 transactions/month',
        'Advanced fraud detection',
        'Algorithmic trading',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'Regulatory compliance',
        '24/7 monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$49,999',
      period: '/month',
      description: 'For large banks and financial institutions',
      features: [
        'Unlimited transactions',
        'Full AI capabilities',
        'Custom development',
        '24/7 dedicated support',
        'Advanced security',
        'White-label options',
        'Custom compliance',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'James Wilson',
      role: 'Chief Risk Officer',
      company: 'MetroBank International',
      content: 'AI Financial Services reduced our fraud losses by 85% and improved our credit approval process by 60%. Exceptional results.',
      rating: 5
    },
    {
      name: 'Sarah Thompson',
      role: 'Head of Trading',
      company: 'Alpha Investment Group',
      content: 'The algorithmic trading platform has increased our portfolio returns by 25% while reducing risk. Highly recommended!',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'FinTech Solutions Inc.',
      content: 'The AI-powered compliance monitoring has streamlined our regulatory reporting and reduced manual work by 70%.',
      rating: 5
    }
  ];

  const stats = [
    { value: '85%', label: 'Fraud Reduction', description: 'Decreased fraudulent transactions' },
    { value: '25%', label: 'Portfolio Returns', description: 'Improved investment performance' },
    { value: '70%', label: 'Process Automation', description: 'Reduced manual work' },
    { value: '99.9%', label: 'Detection Accuracy', description: 'Reliable fraud detection' }
  ];

  const regulations = [
    { name: 'PCI DSS', icon: '🔒', description: 'Payment card security' },
    { name: 'SOX Compliance', icon: '📊', description: 'Financial reporting' },
    { name: 'Basel III', icon: '🏦', description: 'Banking regulations' },
    { name: 'MiFID II', icon: '🇪🇺', description: 'European markets' },
    { name: 'GDPR', icon: '🛡️', description: 'Data protection' },
    { name: 'CCPA', icon: '🔐', description: 'Privacy rights' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Services - Zion Tech Group | Banking AI & Fintech Solutions</title>
        <meta name="description" content="Revolutionary AI-powered financial services with fraud detection, algorithmic trading, and credit risk assessment. Reduce fraud by 85% and improve returns by 25%." />
        <meta name="keywords" content="AI financial services, banking AI, fintech solutions, fraud detection, algorithmic trading, credit risk assessment, financial technology" />
        <meta property="og:title" content="AI Financial Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered financial services with fraud detection and algorithmic trading" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-financial-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Financial Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform financial services with AI-powered fraud detection, algorithmic trading, 
              and credit risk assessment. Reduce fraud by 85% and improve returns by 25%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Download Whitepaper
              </button>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-xs">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regulations Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Regulatory Compliance
              </h2>
              <p className="text-gray-300">
                Our financial AI solutions meet all major regulatory requirements
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {regulations.map((regulation, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{regulation.icon}</span>
                  </div>
                  <h3 className="text-white font-medium mb-1">{regulation.name}</h3>
                  <p className="text-gray-400 text-sm">{regulation.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Comprehensive Financial AI Solutions
              </h2>
              <p className="text-gray-300">
                From banking to investment management, our AI solutions cover the entire financial spectrum
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-green-500/50 transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">{solution.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{solution.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{solution.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered financial platform combines cutting-edge technology with 
                regulatory compliance to deliver superior financial services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-green-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Financial Services Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your financial institution's needs. All plans include regulatory compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-green-500/50 ring-2 ring-green-500/20 scale-105' 
                    : 'border-white/20 hover:border-green-500/50'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    {plan.popular ? 'Schedule Demo' : 'Contact Sales'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Financial Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join leading financial institutions who have transformed their operations with AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-12 border border-green-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Financial Services?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a demo to see how our AI financial solutions can improve your operations 
                and reduce risk while increasing profitability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Schedule Demo
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Download Whitepaper
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIFinancialServicesPage;