'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { DollarSign, TrendingUp, PieChart, Target, Shield, Zap, CheckCircle, Star, ArrowRight, Brain, Calculator, BarChart, CreditCard, PiggyBank, Building, Users, Clock, AlertCircle } from 'lucide-react';

const AIFinancialPlannerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced algorithms analyze your financial data and provide personalized insights',
      price: 'Included'
    },
    {
      icon: Target,
      title: 'Goal Setting & Tracking',
      description: 'Set financial goals and track progress with AI-driven recommendations',
      price: 'Included'
    },
    {
      icon: PieChart,
      title: 'Portfolio Optimization',
      description: 'AI-optimized investment strategies based on risk tolerance and goals',
      price: 'Included'
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Comprehensive risk analysis and mitigation strategies',
      price: 'Included'
    },
    {
      icon: BarChart,
      title: 'Advanced Reporting',
      description: 'Detailed financial reports with predictive analytics',
      price: '+$99/month'
    },
    {
      icon: Users,
      title: 'Family Planning',
      description: 'Multi-user accounts with family financial planning tools',
      price: '+$199/month'
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$49',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Personal financial dashboard',
        'AI budget recommendations',
        'Goal tracking & planning',
        'Basic investment analysis',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Most popular for professionals',
      features: [
        'Advanced AI analysis',
        'Portfolio optimization',
        'Tax planning tools',
        'Retirement planning',
        'Priority support',
        'Advanced reporting',
        'Risk assessment',
        'Investment recommendations'
      ],
      popular: true
    },
    {
      name: 'Family',
      price: '$299',
      period: '/month',
      description: 'For families and couples',
      features: [
        'Multi-user accounts (up to 6)',
        'Family financial planning',
        'Education fund planning',
        'Estate planning tools',
        '24/7 support',
        'Custom integrations',
        'Financial advisor access',
        'White-label options'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Save $2,000+ Annually',
      description: 'Optimize investments and reduce unnecessary expenses',
      icon: DollarSign,
      metric: '$2,000+'
    },
    {
      title: 'Increase Returns by 25%',
      description: 'AI-optimized investment strategies outperform traditional methods',
      icon: TrendingUp,
      metric: '25%'
    },
    {
      title: 'Reduce Financial Stress',
      description: 'Clear financial roadmap and automated planning',
      icon: Shield,
      metric: '90%'
    },
    {
      title: 'Reach Goals 2x Faster',
      description: 'Smart goal setting and progress tracking',
      icon: Target,
      metric: '2x faster'
    }
  ];

  const useCases = [
    {
      title: 'Retirement Planning',
      description: 'AI calculates optimal savings rates and investment strategies for retirement',
      icon: Building,
      savings: 'Retire 5 years earlier'
    },
    {
      title: 'Debt Management',
      description: 'Intelligent debt payoff strategies that save thousands in interest',
      icon: CreditCard,
      savings: 'Save $10K+ in interest'
    },
    {
      title: 'Investment Optimization',
      description: 'AI rebalances portfolios and suggests optimal investment allocations',
      icon: PieChart,
      savings: '25% higher returns'
    },
    {
      title: 'Tax Optimization',
      description: 'Maximize tax savings with AI-powered tax planning strategies',
      icon: Calculator,
      savings: 'Save $3K+ annually'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Planner - Zion Tech Group | Intelligent Financial Planning</title>
        <meta name="description" content="AI-powered financial planning with portfolio optimization, goal tracking, and investment recommendations. Starting at $49/month. Achieve your financial goals faster." />
        <meta name="keywords" content="AI financial planner, financial planning software, investment optimization, portfolio management, retirement planning, financial advisor AI" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-financial-planner" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain-effect">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text-enhanced cyber-text glitch">
              AI Financial Planner
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Intelligent Financial Planning for Your Future
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
              Take control of your finances with AI-powered planning, investment optimization, 
              and goal tracking. Make smarter financial decisions and achieve your goals faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="cyber-button-enhanced inline-flex items-center text-lg px-8 py-4"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <Link
                href="#pricing"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">$2,000+</div>
                <div className="text-gray-300">Average Annual Savings</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">25%</div>
                <div className="text-gray-300">Higher Investment Returns</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">90%</div>
                <div className="text-gray-300">Reduced Financial Stress</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">2x</div>
                <div className="text-gray-300">Faster Goal Achievement</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Proven Financial Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card-advanced p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Comprehensive Financial Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                      <div className="text-cyan-400 font-semibold">{feature.price}</div>
                    </div>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Real-World Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card-advanced p-8">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{useCase.title}</h3>
                      <div className="text-green-400 font-semibold mb-2">{useCase.savings}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              How AI Financial Planning Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">1. AI Analyzes Your Finances</h3>
                <p className="text-gray-300 text-lg">
                  Our AI analyzes your income, expenses, investments, and financial goals to create a personalized plan.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">2. Set & Track Goals</h3>
                <p className="text-gray-300 text-lg">
                  Define your financial goals and let AI create actionable steps to achieve them faster.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Optimize & Grow</h3>
                <p className="text-gray-300 text-lg">
                  AI continuously optimizes your investments and financial strategy for maximum returns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Choose Your Financial Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card-advanced p-8 relative ${plan.popular ? 'border-2 border-cyan-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button-enhanced'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Bank-Level Security</h2>
            <p className="text-xl text-gray-300 mb-8">
              Your financial data is protected with enterprise-grade security and encryption.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-6">
                <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">256-bit Encryption</h3>
                <p className="text-gray-300">Military-grade encryption protects all your data</p>
              </div>
              <div className="cyber-card p-6">
                <AlertCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">SOC 2 Compliant</h3>
                <p className="text-gray-300">Certified security standards and regular audits</p>
              </div>
              <div className="cyber-card p-6">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Privacy First</h3>
                <p className="text-gray-300">We never sell or share your personal data</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Take Control of Your Finances?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 10,000+ users already using our AI financial planner to achieve their financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button-enhanced inline-flex items-center text-lg px-8 py-4"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AIFinancialPlannerPage;