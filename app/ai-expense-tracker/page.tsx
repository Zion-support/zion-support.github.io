'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, DollarSign, BarChart3, Receipt, CreditCard, Smartphone, Shield, Zap, CheckCircle, Star, Clock, Globe, Target, TrendingUp, Bot, Brain, Cpu, Rocket, PieChart, FileText, Calendar, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const AIExpenseTrackerPage: React.FC = () => {
  const features = [
    {
      icon: <Receipt className="w-8 h-8 text-green-500" />,
      title: 'Smart Receipt Scanning',
      description: 'Automatically extract expense data from receipts using AI-powered OCR technology. Just snap a photo and let AI do the rest.',
      price: '$15/month'
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Expense Categorization',
      description: 'Intelligently categorize expenses using machine learning. Learn from your patterns and automatically sort transactions.',
      price: '$12/month'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Predictive Budgeting',
      description: 'Get AI-powered insights and predictions about your spending patterns to help you stay within budget and save money.',
      price: '$18/month'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-orange-500" />,
      title: 'Multi-Card Integration',
      description: 'Connect all your credit cards, bank accounts, and payment methods for comprehensive expense tracking in one place.',
      price: '$10/month'
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: 'Smart Alerts',
      description: 'Receive intelligent notifications about unusual spending, budget overruns, and opportunities to save money.',
      price: '$8/month'
    },
    {
      icon: <PieChart className="w-8 h-8 text-cyan-500" />,
      title: 'Advanced Analytics',
      description: 'Get detailed insights into your spending habits with beautiful charts, trends, and personalized recommendations.',
      price: '$14/month'
    }
  ]

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals managing personal finances',
      features: [
        'Up to 5 bank accounts',
        'Basic receipt scanning',
        'Expense categorization',
        'Monthly reports',
        'Mobile app access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$19',
      period: '/month',
      description: 'Ideal for freelancers and small business owners',
      features: [
        'Up to 15 bank accounts',
        'Advanced AI features',
        'Tax preparation tools',
        'Team collaboration',
        'Priority support',
        'API access',
        'Custom categories'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '$49',
      period: '/month',
      description: 'For growing businesses with complex expense needs',
      features: [
        'Unlimited accounts',
        'All AI features',
        'Multi-user access',
        'Advanced reporting',
        'Integration with accounting software',
        'Dedicated support',
        'Custom workflows'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'David Kim',
      company: 'Freelance Designer',
      role: 'Self-Employed',
      content: 'AI Expense Tracker saved me 10 hours per month on bookkeeping. The receipt scanning is incredibly accurate and the AI categorization is spot-on.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'Small Business Owner',
      role: 'Restaurant Owner',
      content: 'The predictive budgeting feature helped me identify unnecessary expenses and save $2,000 in the first month. Game changer!',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Consultant',
      role: 'Independent Contractor',
      content: 'Finally, an expense tracker that understands my business needs. The tax preparation tools made filing so much easier.',
      rating: 5
    }
  ]

  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      title: 'Save Time',
      description: 'Reduce expense tracking time by 80% with AI automation'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: 'Save Money',
      description: 'Identify spending patterns and save up to 20% on expenses'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Stay Secure',
      description: 'Bank-level security with end-to-end encryption'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-orange-400" />,
      title: 'Access Anywhere',
      description: 'Manage expenses on any device, anywhere, anytime'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="AI Expense Tracker - Zion Tech Group"
        description="Smart expense tracking powered by AI. Automatically categorize expenses, scan receipts, and get insights to save money."
        keywords="AI expense tracker, receipt scanning, budget management, expense categorization, financial analytics"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI-Powered
            <br />
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Expense Tracker
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your financial management with intelligent expense tracking, automated categorization, 
            and AI-powered insights that help you save money and stay organized.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="#pricing" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage artificial intelligence to automate your expense management and gain valuable financial insights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-semibold">{feature.price}</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your financial tracking needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-green-500 bg-gradient-to-br from-green-500/20 to-blue-500/20' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of users who have transformed their financial management with AI Expense Tracker.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Take Control of Your Finances?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start your free 30-day trial today and experience the power of AI-driven expense management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIExpenseTrackerPage
