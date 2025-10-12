import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, CreditCard, Receipt, BarChart3, Zap, Shield, Smartphone, Globe, ArrowRight, Star, DollarSign, Calendar, Target, Brain, TrendingUp, PieChart, FileText, Smartphone as Mobile, Camera, AlertCircle } from 'lucide-react';
import Layout from '../layout';

export default function AIExpenseTrackerPage() {
  const features = [
    {
      icon: <Camera className="w-8 h-8 text-blue-500" />,
      title: 'Smart Receipt Scanning',
      description: 'Automatically extract expense data from receipts using advanced OCR and AI technology. Just snap a photo and we handle the rest.'
    },
    {
      icon: <Brain className="w-8 h-8 text-green-500" />,
      title: 'AI-Powered Categorization',
      description: 'Intelligently categorize expenses automatically based on merchant, amount, and spending patterns. No manual categorization needed.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Real-Time Analytics',
      description: 'Get instant insights into your spending habits with beautiful charts, trends, and personalized recommendations.'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-orange-500" />,
      title: 'Multi-Currency Support',
      description: 'Track expenses in multiple currencies with automatic conversion rates and support for international business travel.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Automated Reimbursements',
      description: 'Streamline expense reporting with automated workflows, approval processes, and direct integration with accounting systems.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Bank-Level Security',
      description: 'Your financial data is protected with enterprise-grade encryption, secure cloud storage, and compliance with financial regulations.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Unlimited receipt scanning',
        'AI categorization',
        'Basic analytics dashboard',
        'Mobile app access',
        'Export to CSV/PDF',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$29',
      period: '/month',
      description: 'Ideal for small to medium businesses',
      features: [
        'Up to 10 team members',
        'Advanced AI insights',
        'Custom expense categories',
        'Integration with accounting software',
        'Automated approval workflows',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Custom AI model training',
        'Advanced compliance features',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'Freelance Consultant',
      content: 'AI Expense Tracker saved me 5 hours per week on expense management. The receipt scanning is incredibly accurate.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Martinez',
      company: 'Marketing Agency',
      content: 'Our team productivity increased by 60% since using this tool. The automated categorization is a game-changer.',
      rating: 5,
      avatar: 'LM'
    },
    {
      name: 'James Wilson',
      company: 'Tech Startup',
      content: 'The analytics helped us identify spending patterns and save 20% on operational costs in just 3 months.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: 'Save 5+ Hours Per Week',
      description: 'Automated expense tracking eliminates manual data entry and categorization'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blue-500" />,
      title: 'Reduce Errors by 95%',
      description: 'AI-powered data extraction ensures accurate expense recording'
    },
    {
      icon: <Target className="w-6 h-6 text-purple-500" />,
      title: 'Improve Budget Control',
      description: 'Real-time insights help you stay within budget and identify savings opportunities'
    },
    {
      icon: <Calendar className="w-6 h-6 text-orange-500" />,
      title: 'Faster Reimbursements',
      description: 'Streamlined approval process gets your team reimbursed faster'
    }
  ];

  return (
    <Layout
      title="AI Expense Tracker - Smart Financial Management | Zion Tech Group"
      description="Revolutionary AI-powered expense tracking that automates receipt scanning, categorization, and reporting. Save 5+ hours per week and reduce errors by 95%. Start your free trial today."
      keywords="AI expense tracker, receipt scanning, expense management, financial software, budget tracking, expense reporting"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CreditCard className="w-4 h-4 mr-2" />
              AI-Powered Finance
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Expense Tracker
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent block">
                That Saves You Time & Money
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your expense management with our revolutionary AI-powered platform. 
              Automatically scan receipts, categorize expenses, and get insights that help you save money and time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-300 text-sm">Hours Saved/Week</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-gray-300 text-sm">Error Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50K+</div>
                <div className="text-gray-300 text-sm">Receipts Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">4.8★</div>
                <div className="text-gray-300 text-sm">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Choose AI Expense Tracker?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of expense management with AI-powered automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Powerful Features for Modern Finance
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage expenses efficiently and intelligently
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-green-500 bg-green-500/10' 
                    : 'border-white/20 hover:border-white/40'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
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
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Trusted by Finance Teams Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers are saying about AI Expense Tracker
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
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Expense Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users already saving time and money with AI Expense Tracker.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}