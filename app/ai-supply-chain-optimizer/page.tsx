'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, Target, BarChart, Truck, Package, Globe, Factory, Warehouse, MapPin, ArrowRight, Phone, Mail, MapPin as Location, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon } from 'lucide-react';

const AISupplyChainOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'AI-powered demand forecasting and supply chain optimization',
      benefits: ['Demand prediction', 'Inventory optimization', 'Supplier risk assessment', 'Cost reduction analysis']
    },
    {
      icon: Globe,
      title: 'Global Visibility',
      description: 'End-to-end supply chain visibility with real-time tracking',
      benefits: ['Real-time tracking', 'Multi-tier visibility', 'Risk monitoring', 'Performance analytics']
    },
    {
      icon: Truck,
      title: 'Logistics Optimization',
      description: 'Intelligent route optimization and transportation management',
      benefits: ['Route optimization', 'Load planning', 'Carrier selection', 'Cost optimization']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Advanced risk assessment and mitigation strategies',
      benefits: ['Risk identification', 'Mitigation planning', 'Contingency management', 'Compliance monitoring']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,999',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 100 suppliers',
        'Basic AI analytics',
        'Standard reporting',
        'Email support',
        'Mobile app access',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,999',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 1,000 suppliers',
        'Advanced AI analytics',
        'Custom dashboards',
        'Priority support',
        'API access',
        'Advanced integrations',
        'Custom reporting',
        'Multi-warehouse support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$12,999',
      period: '/month',
      description: 'For large global organizations',
      features: [
        'Unlimited suppliers',
        'Full AI suite',
        'Custom AI models',
        '24/7 dedicated support',
        'White-label options',
        'Advanced security',
        'Custom integrations',
        'Dedicated account manager',
        'Global deployment'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Manufacturing',
      description: 'Optimize production schedules and raw material procurement',
      icon: Factory,
      metrics: '30% cost reduction, 25% faster delivery'
    },
    {
      title: 'Retail',
      description: 'Streamline inventory management and demand forecasting',
      icon: ShoppingCart,
      metrics: '40% inventory reduction, 35% fewer stockouts'
    },
    {
      title: 'Healthcare',
      description: 'Ensure critical medical supplies and pharmaceutical distribution',
      icon: Heart,
      metrics: '50% faster delivery, 99.9% availability'
    },
    {
      title: 'Food & Beverage',
      description: 'Optimize perishable goods supply chain and cold chain management',
      icon: Package,
      metrics: '45% waste reduction, 30% cost savings'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'Supply Chain Director',
      company: 'Global Manufacturing Corp',
      content: 'The AI optimization has reduced our supply chain costs by 35% while improving delivery times. The predictive analytics are incredibly accurate.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'James Wilson',
      role: 'Operations Manager',
      company: 'Retail Chain Inc',
      content: 'We\'ve eliminated stockouts and reduced excess inventory by 40%. The real-time visibility across our entire supply chain is game-changing.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Sarah Kim',
      role: 'VP of Operations',
      company: 'Healthcare Solutions',
      content: 'The risk management features helped us navigate supply disruptions during the pandemic. Our critical supplies never ran out.',
      rating: 5,
      avatar: 'SK'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Supply Chain Optimizer - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered supply chain optimization platform with predictive analytics, logistics optimization, and risk management. Starting at $1,999/month." />
        <meta name="keywords" content="ai supply chain, supply chain optimization, logistics management, demand forecasting, inventory optimization, supply chain analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-supply-chain-optimizer" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 rounded-full text-blue-300 text-sm font-medium mb-6">
            <Truck className="w-4 h-4 mr-2" />
            AI-Powered Supply Chain Optimization
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Intelligent Supply Chain Management
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your supply chain with AI-powered optimization, predictive analytics, and real-time visibility. 
            Reduce costs by 35% and improve delivery times by 25%.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-blue-400 mb-2">35%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">25%</div>
              <div className="text-gray-300">Faster Delivery</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">$1,999</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Supply Chain Optimizer Inquiry"
              className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-medium hover:bg-blue-400 hover:text-white transition-all inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Advanced Supply Chain AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Perfect for Every Industry
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card text-center">
                <useCase.icon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="text-blue-400 font-semibold text-sm">{useCase.metrics}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Scalable Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card relative ${plan.popular ? 'ring-2 ring-blue-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                  className={`w-full text-center py-3 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
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
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
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
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join industry leaders using AI to transform their supply chain operations and achieve unprecedented efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
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

export default AISupplyChainOptimizerPage;