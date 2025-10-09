'use client';
import React from 'react';
import { Building, Zap, Shield, ArrowRight, CheckCircle, Star, Users, TrendingUp, Target, Brain, Cpu, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SmartCitiesPage: React.FC = () => {
  const features = [
    {
      icon: Building,
      title: 'Smart Infrastructure',
      description: 'Intelligent infrastructure management for modern cities',
      benefits: ['Traffic optimization', 'Energy management', 'Waste management', 'Water systems']
    },
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced analytics and insights for urban planning and management',
      benefits: ['Predictive analytics', 'Real-time monitoring', 'Data visualization', 'Decision support']
    },
    {
      icon: Globe,
      title: 'IoT Integration',
      description: 'Comprehensive IoT network for city-wide connectivity',
      benefits: ['Sensor networks', 'Device management', 'Data collection', 'Real-time updates']
    },
    {
      icon: Shield,
      title: 'Security & Safety',
      description: 'Advanced security and safety systems for urban environments',
      benefits: ['Surveillance systems', 'Emergency response', 'Crime prevention', 'Public safety']
    },
    {
      icon: Users,
      title: 'Citizen Services',
      description: 'Digital services and engagement platforms for citizens',
      benefits: ['Mobile apps', 'Online services', 'Citizen feedback', 'Community engagement']
    },
    {
      icon: Zap,
      title: 'Sustainability',
      description: 'Environmental monitoring and sustainability initiatives',
      benefits: ['Air quality monitoring', 'Energy efficiency', 'Carbon tracking', 'Green initiatives']
    }
  ];

  const applications = [
    {
      title: 'Traffic Management',
      description: 'Intelligent traffic control and optimization systems',
      icon: Target
    },
    {
      title: 'Energy Management',
      description: 'Smart grid and energy distribution optimization',
      icon: Zap
    },
    {
      title: 'Public Safety',
      description: 'Advanced surveillance and emergency response systems',
      icon: Shield
    },
    {
      title: 'Environmental Monitoring',
      description: 'Air quality, noise, and environmental data collection',
      icon: Globe
    }
  ];

  const benefits = [
    'Reduced Traffic Congestion',
    'Lower Energy Consumption',
    'Improved Public Safety',
    'Enhanced Citizen Services',
    'Better Environmental Quality',
    'Increased Economic Growth',
    'Efficient Resource Management',
    'Data-Driven Decision Making'
  ];

  const pricingTiers = [
    {
      name: 'City Starter',
      price: '$25,000',
      period: '/month',
      description: 'Perfect for small cities and pilot projects',
      features: [
        'Basic smart infrastructure',
        'Standard analytics',
        'Email support',
        'Basic monitoring',
        'Mobile app'
      ],
      popular: false
    },
    {
      name: 'City Professional',
      price: '$75,000',
      period: '/month',
      description: 'Ideal for growing cities with advanced needs',
      features: [
        'Advanced smart infrastructure',
        'AI-powered analytics',
        'Priority support',
        'Real-time monitoring',
        'Custom development',
        'Advanced citizen services'
      ],
      popular: true
    },
    {
      name: 'City Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large metropolitan areas',
      features: [
        'Comprehensive smart city platform',
        'Custom integrations',
        '24/7 dedicated support',
        'White-label options',
        'SLA guarantees',
        'Multi-city management'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Building className="w-8 h-8 text-cyan-400" />
                  <span className="text-cyan-400 font-semibold">Smart Cities</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Smart City
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    {' '}Solutions
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Transform your city into a smart, sustainable, and efficient urban environment. 
                  Our comprehensive smart city solutions improve quality of life and drive economic growth.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cyber-button inline-flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="cyber-button-outline inline-flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  View Demo
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Pilot program available</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                    <div className="h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-600 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Smart City Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete smart city solutions powered by cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Key Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how smart city technology is transforming urban environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="cyber-card group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <application.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{application.title}</h3>
                <p className="text-gray-300">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              City Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your city with measurable benefits and improved quality of life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card text-center group">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your city's smart city needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`cyber-card relative ${tier.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'cyber-button-outline'
                }`}>
                  {tier.name === 'City Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Build a Smart City?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join the smart city revolution and create a more sustainable, efficient, and livable urban environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SmartCitiesPage;