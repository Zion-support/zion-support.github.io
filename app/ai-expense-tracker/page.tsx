'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calculator, Receipt, BarChart, Smartphone, CheckCircle, Star, Zap, Shield, Globe, Brain, Cpu, Target, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Award, Lock, Database, Cloud, Code, Settings, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AIExpenseTrackerPage: React.FC = () => {
  const features = [
    {
      icon: Receipt,
      title: 'Smart Receipt Scanning',
      description: 'AI-powered receipt scanning with automatic categorization and data extraction',
      benefits: ['OCR technology', 'Auto-categorization', 'Tax code detection', 'Multi-language support']
    },
    {
      icon: Calculator,
      title: 'Automated Calculations',
      description: 'Intelligent expense calculations with tax deductions and reimbursement tracking',
      benefits: ['Tax calculations', 'Mileage tracking', 'Currency conversion', 'Reimbursement tracking']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive spending analytics with insights and budget recommendations',
      benefits: ['Spending trends', 'Budget alerts', 'Category analysis', 'Financial insights']
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Seamless mobile experience with offline capabilities and instant sync',
      benefits: ['Offline mode', 'Instant sync', 'Mobile receipts', 'Push notifications']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$19',
      period: '/month',
      description: 'Perfect for freelancers and individuals',
      features: [
        'Up to 100 receipts/month',
        'Basic categorization',
        'Mobile app access',
        'Email support',
        'Basic reports'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$49',
      period: '/month',
      description: 'Ideal for small to medium businesses',
      features: [
        'Unlimited receipts',
        'Advanced categorization',
        'Team collaboration',
        'Priority support',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Business',
        'Custom integrations',
        'Advanced security',
        'Dedicated support',
        'Custom reporting',
        'White-label options'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Save 5+ Hours Weekly',
      description: 'Automate expense tracking and eliminate manual data entry completely'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Enterprise-grade security with end-to-end encryption and GDPR compliance'
    },
    {
      icon: Globe,
      title: 'Multi-Currency Support',
      description: 'Track expenses in any currency with real-time exchange rate updates'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get smart recommendations for budget optimization and spending patterns'
    }
  ];

  return (
    <div><Helmet>
        <title>AI Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered expense tracking and management platform. Automate receipt scanning, categorize expenses, and optimize your budget with intelligent insights." />
        <meta name="keywords" content="AI expense tracker, receipt scanning, expense management, budget optimization, financial tracking, AI analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-expense-tracker" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI Expense Tracker
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your expense management with AI-powered automation. Scan receipts, 
              categorize expenses, and optimize your budget with intelligent insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="/contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">5+ Hours</div>
                <div className="text-gray-300">Saved Weekly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">25,000+</div>
                <div className="text-gray-300">Receipts Processed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Powerful AI Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
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
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our AI Expense Tracker?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <benefit.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Expense Management?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI Expense Tracker to streamline their financial management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIExpenseTrackerPage;
