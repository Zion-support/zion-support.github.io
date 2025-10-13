import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, CheckCircle, Star, Cloud, Users, Clock, DollarSign, Shield, Code, Database, Mail, Settings, Rocket, Satellite, Zap, Activity, Target, BarChart3, Smartphone, Brain } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AISpaceMissionOptimizer = () => {
  const features = [
    'Mission Trajectory Optimization',
    'Fuel Consumption Analysis',
    'Launch Window Calculations',
    'Orbital Mechanics Modeling',
    'Payload Optimization',
    'Risk Assessment & Mitigation',
    'Real-time Mission Monitoring',
    'Multi-body Dynamics',
    'Solar System Navigation',
    'Mission Timeline Planning',
    'Resource Allocation',
    'API Integration'
  ];

  const pricingTiers = [
    {
      name: 'Explorer',
      price: '$499',
      period: '/month',
      description: 'Perfect for space enthusiasts',
      features: [
        'Basic trajectory planning',
        '5 mission simulations',
        'Standard calculations',
        'Email support',
        '1 user account',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,999',
      period: '/month',
      description: 'Ideal for space agencies',
      features: [
        'Advanced optimization',
        'Unlimited simulations',
        'Real-time monitoring',
        'Priority support',
        'Up to 10 user accounts',
        'Advanced analytics',
        'Custom algorithms',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$9,999',
      period: '/month',
      description: 'For major space organizations',
      features: [
        'Quantum-level optimization',
        'Enterprise features',
        'Dedicated support',
        'Unlimited users',
        'Custom integrations',
        'White-label options',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const spaceFeatures = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Mission Planning',
      description: 'Optimize space missions with AI-powered trajectory and resource planning.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Satellite className="w-8 h-8" />,
      title: 'Orbital Mechanics',
      description: 'Advanced orbital mechanics modeling for precise spacecraft navigation.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Multi-body Dynamics',
      description: 'Complex gravitational interactions and multi-body system analysis.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Real-time Monitoring',
      description: 'Live mission monitoring with instant optimization recommendations.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fuel Optimization',
      description: 'Minimize fuel consumption with AI-powered efficiency algorithms.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Risk Assessment',
      description: 'Comprehensive risk analysis and mitigation strategies for space missions.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const missionTypes = [
    'Satellite Deployment',
    'Planetary Exploration',
    'Asteroid Mining',
    'Space Station Resupply',
    'Deep Space Missions',
    'Lunar Operations',
    'Mars Missions',
    'Interplanetary Travel'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="AI Space Mission Optimizer - Advanced Space Mission Planning | Zion Tech Group"
        description="Revolutionary AI-powered space mission optimization. Trajectory planning, fuel optimization, and mission monitoring for space agencies and organizations. Starting at $499/month."
        keywords="space mission optimization, trajectory planning, orbital mechanics, space exploration, mission planning, fuel optimization, space technology"
        canonical="https://ziontechgroup.com/ai-space-mission-optimizer"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <Rocket className="w-4 h-4 text-indigo-400 mr-2" />
            <span className="text-indigo-400 text-sm font-medium">Space Mission AI</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              AI Space Mission Optimizer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI-powered space mission optimization and planning. 
            Advanced trajectory optimization, fuel efficiency, and mission monitoring for the next generation of space exploration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Demo
              <Rocket className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Trajectory Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50%</div>
              <div className="text-gray-300 text-sm">Fuel Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">8</div>
              <div className="text-gray-300 text-sm">Mission Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Mission Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Space Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge AI technology for optimizing space missions and exploration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaceFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 text-center"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-indigo-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Mission Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for advanced space mission planning and optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white font-medium group-hover:text-indigo-300 transition-colors">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mission Types Supported
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive support for all types of space missions and exploration.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {missionTypes.map((mission, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 text-center"
              >
                <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors font-semibold">
                  {mission}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-indigo-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mission Planning Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your space mission needs. All plans include 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  tier.popular 
                    ? 'border-indigo-500/50 shadow-indigo-500/20' 
                    : 'border-white/20 hover:border-indigo-500/30'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-indigo-400">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    tier.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-indigo-500/25'
                      : 'border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Launch Your Space Mission
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join space agencies and organizations using AI Space Mission Optimizer to 
            plan and execute successful space missions. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View All Plans
              <Rocket className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISpaceMissionOptimizer;