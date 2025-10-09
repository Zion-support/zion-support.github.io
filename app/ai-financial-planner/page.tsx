'use client';
import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, Target, Shield, Zap, ArrowRight, Star, Globe, Smartphone, Mail, Phone, MapPin, PieChart, Calculator, AlertCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIFinancialPlanner: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Calculator,
      title: 'AI-Powered Budget Optimization',
      description: 'Intelligent budget allocation based on income, expenses, and financial goals with 95% accuracy',
      benefit: 'Save 25% more money monthly'
    },
    {
      icon: TrendingUp,
      title: 'Investment Recommendations',
      description: 'Personalized investment strategies based on risk tolerance, timeline, and market conditions',
      benefit: 'Increase returns by 18%'
    },
    {
      icon: Target,
      title: 'Goal-Based Planning',
      description: 'Set and track financial goals with AI-driven strategies and milestone monitoring',
      benefit: 'Achieve goals 40% faster'
    },
    {
      icon: PieChart,
      title: 'Expense Analysis',
      description: 'Deep insights into spending patterns with automated categorization and optimization suggestions',
      benefit: 'Reduce unnecessary expenses by 30%'
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Comprehensive risk analysis and insurance recommendations tailored to your financial situation',
      benefit: 'Protect your financial future'
    },
    {
      icon: AlertCircle,
      title: 'Smart Alerts',
      description: 'Real-time notifications for bill payments, investment opportunities, and financial milestones',
      benefit: 'Never miss important deadlines'
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Up to 5 accounts',
        'Basic AI insights',
        'Monthly reports',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for professionals',
      features: [
        'Unlimited accounts',
        'Advanced AI analytics',
        'Real-time monitoring',
        'Priority support',
        'Tax optimization',
        'Investment tracking',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For financial advisors',
      features: [
        'Everything in Professional',
        'Client management',
        'White-label options',
        'Dedicated support',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: 'Average Savings',
      value: '$2,400',
      change: '+25%',
      description: 'Annual savings increase'
    },
    {
      metric: 'Investment Returns',
      value: '18%',
      change: '+18%',
      description: 'Higher average returns'
    },
    {
      metric: 'Goal Achievement',
      value: '40%',
      change: '+40%',
      description: 'Faster goal completion'
    },
    {
      metric: 'Expense Reduction',
      value: '30%',
      change: '-30%',
      description: 'Cut unnecessary spending'
    }
  ];

  const testimonials = [
    {
      name: 'Robert Johnson',
      role: 'Software Engineer',
      company: 'TechCorp',
      content: 'AI Financial Planner helped me save $3,000 more this year and optimize my investment portfolio. Highly recommended!',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Marketing Director',
      company: 'Creative Agency',
      content: 'The goal-based planning feature helped me save for my house down payment 6 months ahead of schedule.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Financial Advisor',
      company: 'Wealth Management Inc',
      content: 'This tool has revolutionized how I manage my clients\' portfolios. The AI insights are incredibly accurate.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <DollarSign className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">AI-Powered Financial Planning</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Financial Planner
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Take control of your finances with AI-powered budgeting, investment optimization, and goal tracking. 
              Save 25% more money and achieve your financial goals 40% faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Free Trial
              </a>
              <a
                href="#demo"
                className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                View Demo
              </a>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-green-500/20">
                <div className="text-3xl font-bold text-green-400 mb-2">{benefit.value}</div>
                <div className="text-sm text-gray-400 mb-1">{benefit.change}</div>
                <div className="text-gray-300 text-sm">{benefit.metric}</div>
                <div className="text-xs text-gray-500 mt-2">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Comprehensive Financial Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage, optimize, and grow your finances with AI intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-green-400 font-medium text-sm">{feature.benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple setup process to get your AI financial planner running
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Connect Accounts</h3>
              <p className="text-gray-300 leading-relaxed">
                Securely link your bank accounts, credit cards, and investment accounts. Bank-level encryption ensures your data is safe.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Set Goals</h3>
              <p className="text-gray-300 leading-relaxed">
                Define your financial goals - whether it's saving for retirement, buying a home, or paying off debt. AI will create a personalized plan.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Optimize & Track</h3>
              <p className="text-gray-300 leading-relaxed">
                AI continuously analyzes your finances and provides recommendations to optimize your budget, investments, and savings strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Bank-Level Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your financial data is protected with enterprise-grade security measures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-green-500/20">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">256-bit Encryption</h3>
              <p className="text-gray-300 text-sm">Military-grade encryption protects all your data</p>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-green-500/20">
              <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">SOC 2 Compliant</h3>
              <p className="text-gray-300 text-sm">Certified security and privacy standards</p>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-green-500/20">
              <Smartphone className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Two-Factor Auth</h3>
              <p className="text-gray-300 text-sm">Additional security layer for your account</p>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-green-500/20">
              <AlertCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Monitoring</h3>
              <p className="text-gray-300 text-sm">24/7 security monitoring and alerts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with a 30-day free trial. Cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 rounded-xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-green-400 shadow-2xl shadow-green-400/20' 
                  : 'border-slate-700 hover:border-green-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                      : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                  }`}
                >
                  Start Free Trial
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI Financial Planner is transforming lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-green-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-green-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-900/50 to-blue-900/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Take Control of Your Financial Future
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of users who are already saving more, investing smarter, and achieving their financial goals with AI Financial Planner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Your Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Phone className="w-5 h-5 text-green-400" />
              <a href="tel:+13024640950" className="hover:text-green-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Mail className="w-5 h-5 text-green-400" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-green-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <MapPin className="w-5 h-5 text-green-400" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIFinancialPlanner;