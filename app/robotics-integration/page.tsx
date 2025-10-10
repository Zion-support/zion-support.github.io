'use client';

import React from 'react';
import { ArrowRight, Eye, Zap, Globe, Shield, Users, BarChart, CheckCircle, Star, Brain, Code, Palette, Camera, Smartphone, Laptop, Monitor, Wifi, Car, Lightbulb, Droplets, Trash2, TreePine, Cpu, Database, Activity, Settings, Wrench, Cog } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const RoboticsIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: Settings,
      title: 'Automated Integration',
      description: 'Seamless integration of robotic systems with existing infrastructure and workflows'
    },
    {
      icon: Brain,
      title: 'AI-Powered Control',
      description: 'Intelligent robotic control systems with machine learning and adaptive capabilities'
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Live monitoring and control of robotic systems with instant feedback and adjustments'
    },
    {
      icon: Globe,
      title: 'Multi-Platform Support',
      description: 'Support for various robotic platforms, operating systems, and communication protocols'
    },
    {
      icon: Shield,
      title: 'Safety Systems',
      description: 'Advanced safety protocols and fail-safe mechanisms for secure robotic operations'
    },
    {
      icon: Users,
      title: 'Human-Robot Collaboration',
      description: 'Intelligent systems that enable safe and efficient human-robot collaboration'
    }
  ];

  const solutions = [
    {
      title: 'Manufacturing Automation',
      description: 'Robotic systems for assembly lines, quality control, and material handling',
      icon: '🏭',
      benefits: ['Increased productivity', 'Quality consistency', 'Reduced costs', '24/7 operation']
    },
    {
      title: 'Warehouse Robotics',
      description: 'Automated picking, sorting, and inventory management systems',
      icon: '📦',
      benefits: ['Faster fulfillment', 'Accurate inventory', 'Space optimization', 'Labor savings']
    },
    {
      title: 'Service Robotics',
      description: 'Customer service robots, cleaning systems, and maintenance automation',
      icon: '🤖',
      benefits: ['24/7 service', 'Consistent quality', 'Cost efficiency', 'Customer satisfaction']
    },
    {
      title: 'Healthcare Robotics',
      description: 'Surgical robots, rehabilitation systems, and patient care automation',
      icon: '🏥',
      benefits: ['Precision surgery', 'Faster recovery', 'Reduced errors', 'Better outcomes']
    }
  ];

  const pricingTiers = [
    {
      name: 'Basic Integration',
      price: '$2,500',
      period: '/month',
      description: 'Essential robotic integration for small operations',
      features: [
        'Up to 5 robots',
        'Basic control systems',
        'Standard monitoring',
        'Email support',
        'Basic safety protocols',
        '1-year warranty'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,500',
      period: '/month',
      description: 'Advanced integration for growing businesses',
      features: [
        'Up to 25 robots',
        'AI-powered control',
        'Advanced monitoring',
        'Priority support',
        'Custom safety systems',
        '3-year warranty',
        'Training included'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$25,000',
      period: '/month',
      description: 'Complete robotic integration for large operations',
      features: [
        'Unlimited robots',
        'Full AI integration',
        'Real-time monitoring',
        '24/7 dedicated support',
        'Custom development',
        '5-year warranty',
        'Full training program',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Robotics Integration Services - AI-Powered Automation | Zion Tech Group"
        description="Advanced robotics integration services with AI-powered control, automated systems, and human-robot collaboration solutions."
        keywords="robotics integration, automation, AI robotics, robotic systems, manufacturing automation, service robotics"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Robotics Integration
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your operations with intelligent robotic systems. Our advanced integration services 
            bring AI-powered automation to manufacturing, warehousing, healthcare, and service industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Integration
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Case Studies
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">75%</div>
              <div className="text-gray-400">Productivity Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400">Operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">Integration Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive robotics integration services designed to optimize operations and maximize efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized robotic integration solutions for various industries and applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{solution.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Integration Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive robotics integration solutions for businesses of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                tier.popular 
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20' 
                  : 'border-gray-700/50'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-400 ml-2">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white transform hover:scale-105'
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Automate Your Future
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your operations with intelligent robotic systems. Our integration services 
            bring the future of automation to your business today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoboticsIntegrationPage;