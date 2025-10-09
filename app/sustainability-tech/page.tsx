'use client';
import React from 'react';
import { Leaf, Zap, Shield, ArrowRight, CheckCircle, Star, Users, TrendingUp, Target, Brain, Cpu, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SustainabilityTechPage: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Environmental Monitoring',
      description: 'Advanced environmental monitoring and sustainability tracking systems',
      benefits: ['Air quality monitoring', 'Water quality tracking', 'Waste management', 'Carbon footprint analysis']
    },
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Intelligent analytics for sustainability insights and optimization',
      benefits: ['Predictive analytics', 'Energy optimization', 'Resource efficiency', 'Sustainability reporting']
    },
    {
      icon: Globe,
      title: 'Climate Solutions',
      description: 'Technology solutions for climate change mitigation and adaptation',
      benefits: ['Renewable energy', 'Carbon capture', 'Climate modeling', 'Adaptation strategies']
    },
    {
      icon: Cpu,
      title: 'Smart Grid Technology',
      description: 'Intelligent energy management and distribution systems',
      benefits: ['Energy efficiency', 'Grid optimization', 'Renewable integration', 'Demand response']
    },
    {
      icon: Shield,
      title: 'Circular Economy',
      description: 'Technology solutions for circular economy and waste reduction',
      benefits: ['Waste reduction', 'Resource recovery', 'Product lifecycle', 'Sustainable materials']
    },
    {
      icon: Zap,
      title: 'Green Technology',
      description: 'Innovative green technologies for sustainable development',
      benefits: ['Clean energy', 'Green buildings', 'Sustainable transport', 'Eco-friendly solutions']
    }
  ];

  const applications = [
    {
      title: 'Renewable Energy',
      description: 'Solar, wind, and other renewable energy solutions',
      icon: Zap
    },
    {
      title: 'Smart Buildings',
      description: 'Energy-efficient and sustainable building technologies',
      icon: Target
    },
    {
      title: 'Waste Management',
      description: 'Intelligent waste management and recycling systems',
      icon: Shield
    },
    {
      title: 'Water Conservation',
      description: 'Smart water management and conservation technologies',
      icon: Globe
    }
  ];

  const industries = [
    'Energy & Utilities',
    'Manufacturing & Industrial',
    'Construction & Real Estate',
    'Transportation & Logistics',
    'Agriculture & Farming',
    'Healthcare & Medical',
    'Government & Public Sector',
    'Retail & Consumer Goods'
  ];

  const pricingTiers = [
    {
      name: 'Green Starter',
      price: '$1,299',
      period: '/month',
      description: 'Perfect for small sustainability projects and initial assessment',
      features: [
        'Basic environmental monitoring',
        'Standard analytics',
        'Email support',
        'Basic reporting',
        'Mobile app'
      ],
      popular: false
    },
    {
      name: 'Green Professional',
      price: '$3,499',
      period: '/month',
      description: 'Ideal for growing businesses with advanced sustainability needs',
      features: [
        'Advanced environmental monitoring',
        'AI-powered analytics',
        'Priority support',
        'Real-time reporting',
        'Custom development',
        'Sustainability consulting'
      ],
      popular: true
    },
    {
      name: 'Green Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large-scale sustainability programs',
      features: [
        'Comprehensive sustainability platform',
        'Custom integrations',
        '24/7 dedicated support',
        'White-label options',
        'SLA guarantees',
        'Multi-site management'
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
                  <Leaf className="w-8 h-8 text-cyan-400" />
                  <span className="text-cyan-400 font-semibold">Sustainability Tech</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Sustainable Technology
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    {' '}Solutions
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Build a sustainable future with our green technology solutions. 
                  From environmental monitoring to renewable energy, we help you achieve your sustainability goals.
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
                  <span>Free sustainability assessment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Carbon footprint analysis</span>
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
              Comprehensive Sustainability Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete sustainability solutions powered by cutting-edge green technology
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
              Discover how sustainability technology is transforming industries
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

      {/* Industries Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our sustainability solutions are trusted by leading companies across various industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="cyber-card text-center group">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {industry}
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
              Choose the perfect plan for your sustainability needs
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
                  {tier.name === 'Green Enterprise' ? 'Contact Sales' : 'Get Started'}
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
            Ready to Build a Sustainable Future?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join the sustainability revolution and create a more sustainable, efficient, and environmentally friendly future.
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

export default SustainabilityTechPage;