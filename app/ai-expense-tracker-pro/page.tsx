import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Receipt, ArrowRight, Camera } from 'lucide-react';
'use client';





const AIExpenseTrackerProPage: React.FC = () => {
  const features = [
    {
      icon: <Camera className="w-6 h-6 text-blue-500" />,
      title: 'AI Receipt Scanning',
      description: 'Instantly scan and extract data from receipts using advanced OCR and AI technology'
    },
    {
      icon: <PieChart className="w-6 h-6 text-green-500" />,
      title: 'Smart Categorization',
      description: 'Automatically categorize expenses using machine learning and smart rules'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      title: 'Real-time Analytics',
      description: 'Get instant insights into your spending patterns with interactive dashboards'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: 'Bank-level Security',
      description: 'Your financial data is protected with 256-bit encryption and secure cloud storage'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-cyan-500" />,
      title: 'Mobile-First Design',
      description: 'Track expenses on-the-go with our intuitive mobile app for iOS and Android'
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: 'Automated Workflows',
      description: 'Set up smart rules for expense approval, reimbursement, and reporting'
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
        'Basic AI categorization',
        'Mobile app access',
        'Monthly reports',
        'Email support',
        'Cloud backup'
      ],
      popular: false;
    },
    {
      name: 'Business',
      price: '$29',
      period: '/month',
      description: 'Ideal for small to medium businesses',
      features: [
        'Everything in Personal',
        'Advanced AI features',
        'Team collaboration',
        'Custom categories',
        'Real-time analytics',
        'API integration',
        'Priority support',
        'Advanced reporting'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Business',
        'Unlimited users',
        'Custom workflows',
        'Advanced security',
        'Dedicated support',
        'SLA guarantee',
        'On-premise option',
        'White-label solution'
      ],
      popular: false;
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'Freelance Consultant',
      content: 'AI Expense Tracker Pro has saved me hours every week. The receipt scanning is incredibly accurate and the categorization is spot-on.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Martinez',
      company: 'Marketing Agency',
      content: 'Our team loves how easy it is to track expenses. The real-time analytics help us make better financial decisions.',
      rating: 5,
      avatar: 'LM'
    },
    {
      name: 'James Wilson',
      company: 'Startup Founder',
      content: 'The automated workflows have streamlined our expense management process. We can now focus on growing our business.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Expense Tracker Pro - Smart Expense Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionize expense tracking with AI Expense Tracker Pro. Smart receipt scanning, automated categorization, real-time analytics. Start your free trial today!" />
        <meta name="keywords" content="AI expense tracker, receipt scanning, expense management, financial analytics, business expenses, AI business tools, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-expense-tracker-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Receipt className="w-4 h-4 mr-2" />
                AI-Powered Expense Management;
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Expense Tracker Pro;
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your expense management with intelligent automation. Scan receipts, 
                categorize expenses, and gain insights that help you save money and time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial;
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Watch Demo;
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                ✓ 30-day free trial • ✓ No credit card required • ✓ Cancel anytime;
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100K+</div>
                <div className="text-gray-400">Receipts Scanned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-gray-400">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5min</div>
                <div className="text-gray-400">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$50K+</div>
                <div className="text-gray-400">Expenses Tracked</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features for Smart Expense Management;
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to take control of your expenses and boost your financial health;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How It Works;
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Get started in minutes with our simple 3-step process;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Scan Receipts</h3>
                <p className="text-gray-300">Take a photo of any receipt with your phone or upload from your computer</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">2. AI Processing</h3>
                <p className="text-gray-300">Our AI automatically extracts data and categorizes your expenses</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Get Insights</h3>
                <p className="text-gray-300">View detailed analytics and reports to understand your spending patterns</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan;
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Start free and upgrade as you grow. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${
                  plan.popular ? 'border-green-500/50 ring-2 ring-green-500/20' : 'border-white/20'
                } hover:bg-white/15 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular;
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
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
                    plan.popular;
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700' 
                      : 'border-2 border-white text-white hover:bg-white/10'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Thousands of Users;
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See what our customers say about AI Expense Tracker Pro;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Take Control of Your Expenses?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of users who have transformed their expense management with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial;
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Schedule Demo;
                </button>
              </div>
              <p className="text-white/80 text-sm mt-6">
                ✓ 30-day free trial • ✓ No setup fees • ✓ 24/7 support;
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}