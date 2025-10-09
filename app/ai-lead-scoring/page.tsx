'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AILeadScoringPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Intelligent Lead Qualification',
      description: 'AI-powered lead scoring that analyzes behavior, demographics, and engagement patterns to identify high-value prospects.',
      benefits: ['95% accuracy in lead qualification', 'Real-time scoring updates', 'Behavioral analysis', 'Demographic insights']
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Advanced machine learning models predict conversion probability and optimal engagement timing.',
      benefits: ['Conversion probability scores', 'Optimal timing predictions', 'Revenue forecasting', 'Risk assessment']
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Smart automation that routes leads to the right sales rep and triggers personalized follow-up sequences.',
      benefits: ['Smart lead routing', 'Automated follow-ups', 'Personalized sequences', 'CRM integration']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Continuous learning and optimization to improve scoring accuracy and sales performance over time.',
      benefits: ['Continuous learning', 'Performance analytics', 'A/B testing', 'ROI tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$89',
      period: '/month',
      description: 'Perfect for small sales teams',
      features: [
        'Up to 1,000 leads/month',
        'Basic scoring models',
        'Email integration',
        'Standard support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$179',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 5,000 leads/month',
        'Advanced AI models',
        'Multi-channel integration',
        'Priority support',
        'Advanced analytics',
        'Custom scoring rules'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$349',
      period: '/month',
      description: 'For large sales organizations',
      features: [
        'Unlimited leads',
        'Custom AI models',
        'Full CRM integration',
        '24/7 support',
        'Advanced reporting',
        'API access'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase Conversion Rates',
      description: 'Focus on high-quality leads and improve conversion rates by up to 40%'
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Reduce manual lead qualification time by 80% with automated scoring'
    },
    {
      icon: DollarSign,
      title: 'Boost Revenue',
      description: 'Generate 25% more revenue by prioritizing the right leads at the right time'
    },
    {
      icon: Users,
      title: 'Improve Team Efficiency',
      description: 'Help sales teams focus on leads most likely to convert and close deals'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Lead Scoring - Intelligent Lead Qualification & Conversion | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered lead scoring system that increases conversion rates by 40% and saves 80% of qualification time. Smart lead routing and predictive analytics for sales teams." />
        <meta name="keywords" content="AI lead scoring, lead qualification, sales automation, predictive analytics, lead routing, conversion optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-lead-scoring" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                  AI Lead Scoring
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your sales process with intelligent lead scoring that increases conversion rates by 40% and saves 80% of qualification time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-violet-400 text-violet-400 px-8 py-3 rounded-lg font-semibold hover:bg-violet-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose AI Lead Scoring?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <benefit.icon className="w-12 h-12 text-violet-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Powerful AI Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
                  <feature.icon className="w-12 h-12 text-violet-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-violet-400 mr-3 flex-shrink-0" />
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
        <section id="pricing" className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-violet-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-violet-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-violet-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-violet-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700' 
                      : 'bg-white/20 text-white hover:bg-white/30'
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
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-2xl p-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Sales Process?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of sales teams already using AI Lead Scoring to increase conversions and boost revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5 inline mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-violet-400 text-violet-400 px-8 py-3 rounded-lg font-semibold hover:bg-violet-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AILeadScoringPage;