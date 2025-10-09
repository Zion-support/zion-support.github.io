'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, Target, BarChart, DollarSign, CreditCard, PieChart, TrendingDown, Calculator, Calendar, FileText, MessageSquare, ArrowRight, Phone, Mail, MapPin, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Clock3, Compass, Globe2, Map, Navigation, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AIFinancialAdvisorPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Investment Analysis',
      description: 'Advanced AI algorithms analyze market trends and provide personalized investment recommendations',
      benefits: ['Real-time market analysis', 'Risk assessment', 'Portfolio optimization', 'Predictive modeling']
    },
    {
      icon: BarChart,
      title: 'Smart Financial Planning',
      description: 'Comprehensive financial planning with AI-driven insights and goal tracking',
      benefits: ['Retirement planning', 'Tax optimization', 'Debt management', 'Savings strategies']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Advanced risk assessment and portfolio protection strategies',
      benefits: ['Diversification analysis', 'Risk scoring', 'Market volatility prediction', 'Insurance recommendations']
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Real-time portfolio performance monitoring with AI insights',
      benefits: ['Performance analytics', 'Benchmark comparison', 'ROI optimization', 'Alert system']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$199',
      period: '/month',
      description: 'Perfect for individual investors and personal finance management',
      features: [
        'Up to 5 investment accounts',
        'Basic AI recommendations',
        'Monthly financial reports',
        'Email support',
        'Mobile app access',
        'Tax optimization tips'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for financial advisors and wealth managers',
      features: [
        'Unlimited investment accounts',
        'Advanced AI analytics',
        'Real-time market alerts',
        'Priority support',
        'API access',
        'Custom reporting',
        'Client management tools',
        'Advanced tax strategies'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For financial institutions and large advisory firms',
      features: [
        'White-label solution',
        'Custom AI models',
        '24/7 dedicated support',
        'Advanced security',
        'Custom integrations',
        'Dedicated account manager',
        'Compliance reporting',
        'Multi-user management'
      ],
      popular: false
    }
  ];

  const services = [
    {
      title: 'Portfolio Management',
      description: 'AI-powered portfolio optimization and rebalancing',
      icon: PieChart,
      price: 'Starting at $299/month',
      features: ['Asset allocation', 'Rebalancing alerts', 'Performance tracking', 'Risk analysis']
    },
    {
      title: 'Tax Optimization',
      description: 'Intelligent tax planning and optimization strategies',
      icon: Calculator,
      price: 'Starting at $199/month',
      features: ['Tax loss harvesting', 'Gain/loss tracking', 'Deduction optimization', 'Filing assistance']
    },
    {
      title: 'Retirement Planning',
      description: 'Comprehensive retirement planning with AI projections',
      icon: Calendar,
      price: 'Starting at $399/month',
      features: ['Retirement projections', 'Contribution optimization', 'Social Security analysis', 'Withdrawal strategies']
    },
    {
      title: 'Estate Planning',
      description: 'Advanced estate planning and wealth transfer strategies',
      icon: FileText,
      price: 'Starting at $599/month',
      features: ['Estate analysis', 'Tax minimization', 'Trust strategies', 'Beneficiary planning']
    }
  ];

  const testimonials = [
    {
      name: 'Robert Martinez',
      role: 'Financial Advisor',
      company: 'Wealth Management Group',
      content: 'The AI insights have helped our clients achieve 25% better returns while reducing risk. It\'s like having a team of analysts working 24/7.',
      rating: 5,
      avatar: 'RM'
    },
    {
      name: 'Jennifer Lee',
      role: 'Portfolio Manager',
      company: 'Investment Partners LLC',
      content: 'The predictive analytics are incredibly accurate. We\'ve been able to avoid major market downturns and capitalize on opportunities.',
      rating: 5,
      avatar: 'JL'
    },
    {
      name: 'David Thompson',
      role: 'CFO',
      company: 'TechStart Inc',
      content: 'The tax optimization features alone have saved us thousands. The AI recommendations are always spot-on and easy to implement.',
      rating: 5,
      avatar: 'DT'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Financial Advisor - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered financial advisory platform with investment analysis, portfolio management, and tax optimization. Starting at $199/month." />
        <meta name="keywords" content="ai financial advisor, investment analysis, portfolio management, financial planning, tax optimization, wealth management, ai finance" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-financial-advisor" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-600/20 rounded-full text-green-300 text-sm font-medium mb-6">
            <DollarSign className="w-4 h-4 mr-2" />
            AI-Powered Financial Advisory
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Intelligent Financial Advisory
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your financial future with AI-powered investment analysis, portfolio optimization, 
            and personalized financial planning. Achieve 25% better returns with intelligent risk management.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">25%</div>
              <div className="text-gray-300">Better Returns</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Risk Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">$199</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Market Monitoring</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:from-green-600 hover:to-blue-700 transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Financial Advisor Inquiry"
              className="bg-transparent border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-medium hover:bg-green-400 hover:text-white transition-all inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Advanced AI Financial Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-green-400 mb-4" />
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
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Comprehensive Financial Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <service.icon className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-green-400 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
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

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card relative ${plan.popular ? 'ring-2 ring-green-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                  className={`w-full text-center py-3 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                      : 'bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Trusted by Financial Professionals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Financial Future?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of investors and financial professionals using AI to make smarter financial decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIFinancialAdvisorPage;