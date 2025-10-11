import React from 'react';
import { CheckCircle, ArrowRight, DollarSign, Camera, BarChart3, Zap, Star, Clock, Shield, Smartphone, CreditCard, Receipt } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIExpenseTrackerPage: React.FC = () => {
  const features = [
    {
      icon: <Camera className="w-6 h-6 text-blue-500" />,
      title: 'Receipt Scanning',
      description: 'AI-powered receipt scanning with automatic data extraction and categorization'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-500" />,
      title: 'Smart Analytics',
      description: 'Detailed spending insights and trends with AI-powered financial recommendations'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: 'Auto Categorization',
      description: 'Intelligent expense categorization using machine learning algorithms'
    },
    {
      icon: <CreditCard className="w-6 h-6 text-orange-500" />,
      title: 'Multi-Currency Support',
      description: 'Track expenses in multiple currencies with real-time exchange rates'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: 'Bank-Level Security',
      description: 'End-to-end encryption and secure cloud storage for your financial data'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-cyan-500" />,
      title: 'Mobile App',
      description: 'Native iOS and Android apps for expense tracking on the go'
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Up to 100 receipts/month',
        'Basic categorization',
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
      description: 'Ideal for freelancers',
      features: [
        'Unlimited receipts',
        'Advanced AI categorization',
        'Real-time analytics',
        'Tax preparation tools',
        'Priority support',
        'Cloud sync'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '$39',
      period: '/month',
      description: 'For small businesses',
      features: [
        'Team collaboration',
        'Custom categories',
        'Advanced reporting',
        'API integration',
        'Dedicated support',
        'White-label options'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Save 5+ Hours/Week',
      description: 'Automate expense tracking and eliminate manual data entry completely',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: '99% Accuracy',
      description: 'AI-powered data extraction ensures accurate expense recording every time',
      icon: <Star className="w-6 h-6 text-yellow-500" />
    },
    {
      title: 'Tax Ready',
      description: 'Generate tax-ready reports and export data to popular accounting software',
      icon: <Receipt className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Real-time Insights',
      description: 'Get instant spending insights and budget alerts to control your finances',
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Freelance Designer',
      content: 'This app has revolutionized how I track expenses. The receipt scanning is incredibly accurate and saves me hours every week.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Small Business Owner',
      content: 'The AI categorization is spot-on. I can finally focus on my business instead of spending hours on expense management.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Consultant',
      content: 'The tax preparation features are a game-changer. I was able to complete my tax filing in half the time this year.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>AI Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Smart AI-powered expense tracking with receipt scanning, automatic categorization, and financial insights. Simplify your expense management with cutting-edge technology." />
        <meta name="keywords" content="AI expense tracker, receipt scanning, expense management, financial tracking, budget analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Expense</span>
            <br />
            Tracker
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your expense management with intelligent AI that scans receipts, categorizes expenses, 
            and provides actionable financial insights. Save time and gain control over your finances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="#pricing"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart Expense Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI-driven features that make expense tracking effortless and accurate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your expense tracking needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${
                  plan.popular ? 'border-green-500 ring-2 ring-green-500' : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 group relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
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
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold text-center block transition-all duration-300 group-hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Expense Tracker?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of intelligent expense management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of users already simplifying their expense management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Simplify Your Expenses?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Start your free trial today and experience the future of expense management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="#pricing"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIExpenseTrackerPage;