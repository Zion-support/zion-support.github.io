import React from 'react';
import { CheckCircle, ArrowRight, DollarSign, TrendingUp, Shield, Star, Sparkles, Brain, Cpu, Server, PieChart, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIPersonalFinanceOptimizerPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-emerald-400" />,
      title: 'AI Financial Analysis',
      description: 'Advanced machine learning algorithms analyze your spending patterns, income trends, and financial goals to provide personalized recommendations.',
      benefits: ['Spending pattern analysis', 'Income optimization', 'Goal-based planning', 'Risk assessment']
    },
    {
      icon: <PieChart className="w-8 h-8 text-blue-400" />,
      title: 'Smart Budget Management',
      description: 'Automatically categorize expenses, set dynamic budgets, and receive real-time alerts to help you stay on track with your financial goals.',
      benefits: ['Auto-categorization', 'Dynamic budgeting', 'Real-time alerts', 'Spending insights']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: 'Investment Optimization',
      description: 'AI-powered investment recommendations based on your risk tolerance, financial goals, and market conditions for optimal portfolio growth.',
      benefits: ['Portfolio optimization', 'Risk management', 'Market analysis', 'Automated rebalancing']
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Security & Privacy',
      description: 'Bank-level security with end-to-end encryption ensures your financial data is protected while providing seamless integration with your accounts.',
      benefits: ['Bank-level encryption', 'Secure data storage', 'Privacy protection', 'Fraud detection']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$12.99',
      period: '/month',
      description: 'Perfect for individuals starting their financial journey',
      features: [
        'Basic budget tracking',
        'Expense categorization',
        'Monthly reports',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$24.99',
      period: '/month',
      description: 'Advanced features for serious financial management',
      features: [
        'AI financial analysis',
        'Investment recommendations',
        'Advanced analytics',
        'Priority support',
        'Goal tracking',
        'Tax optimization',
        'Credit score monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$49.99',
      period: '/month',
      description: 'Comprehensive solution for high-net-worth individuals',
      features: [
        'Advanced AI algorithms',
        'Real-time dashboards',
        'Dedicated support',
        'Custom integrations',
        'Multi-account management',
        'API access',
        'White-label options',
        'Financial advisor tools'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'Financial Advisor',
      content: 'This AI finance optimizer helped my clients increase their savings by 40% on average. The personalized recommendations are incredibly accurate and actionable.',
      rating: 5
    },
    {
      name: 'Marcus Thompson',
      company: 'Software Engineer',
      content: 'I finally understand where my money goes! The AI analysis revealed spending patterns I never noticed, helping me save $500 more per month.',
      rating: 5
    },
    {
      name: 'Sarah Kim',
      company: 'Small Business Owner',
      content: 'The investment optimization feature is amazing. My portfolio has grown 25% since using this tool, and I feel much more confident about my financial future.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 mb-6">
              <DollarSign className="w-4 h-4 text-emerald-400 mr-2" />
              <span className="text-emerald-300 text-sm font-medium">AI-Powered Financial Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              AI Personal Finance
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
                {' '}Optimizer
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
              Take control of your finances with AI-powered insights and optimization. Smart budgeting, 
              investment recommendations, and personalized financial planning to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="#features" 
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              Powerful <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive financial management tools powered by artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              Simple <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Choose the plan that fits your financial goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-emerald-500/50 shadow-emerald-500/20' 
                  : 'border-white/10 hover:border-white/20'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-emerald-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-700 hover:to-green-700 shadow-lg hover:shadow-emerald-500/25'
                      : 'border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10'
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
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              What Our <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Users Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Join thousands of users taking control of their financial future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-3xl p-8 sm:p-12 lg:p-16 border border-emerald-500/30 backdrop-blur-sm">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                Ready to Optimize Your Finances?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
                Take control of your financial future with AI-powered insights and optimization. 
                Start your journey to financial freedom today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-white/25 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="#features" 
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}