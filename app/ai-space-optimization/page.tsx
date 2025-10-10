'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Rocket, 
  Zap, 
  Cpu, 
  BarChart3, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Target,
  TrendingUp,
  Database,
  Settings,
  Globe,
  Satellite,
  Orbit
} from 'lucide-react';

const AISpaceOptimizationPage: React.FC = () => {
  const features = [
    'Satellite constellation optimization',
    'Orbital debris management',
    'Space mission planning and execution',
    'Resource allocation for space stations',
    'Interplanetary trajectory optimization',
    'Space weather prediction and mitigation',
    'Satellite communication optimization',
    'Space-based solar power management',
    'Asteroid mining optimization',
    'Mars colonization planning'
  ];

  const applications = [
    {
      title: 'Satellite Operations',
      description: 'Optimize satellite constellations for maximum coverage and efficiency using AI algorithms.',
      icon: '🛰️',
      benefits: ['40% better coverage', '60% cost reduction', '99.9% uptime']
    },
    {
      title: 'Space Mission Planning',
      description: 'Plan and execute complex space missions with AI-powered trajectory optimization.',
      icon: '🚀',
      benefits: ['50% fuel savings', 'Precise landing', 'Mission success rate 95%']
    },
    {
      title: 'Space Debris Management',
      description: 'Track and manage space debris to prevent collisions and maintain safe orbital environments.',
      icon: '🌌',
      benefits: ['Real-time tracking', 'Collision prevention', 'Orbital cleanup']
    },
    {
      title: 'Mars Colonization',
      description: 'Plan and optimize Mars colonization efforts with AI-driven resource management.',
      icon: '🔴',
      benefits: ['Resource optimization', 'Habitat planning', 'Life support systems']
    }
  ];

  const pricingTiers = [
    {
      name: 'Commercial',
      price: '$25,999/month',
      description: 'For commercial space companies',
      features: [
        'Basic satellite optimization',
        'Mission planning tools',
        'Standard support',
        'API access',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Government',
      price: '$99,999/month',
      description: 'For government space agencies',
      features: [
        'Advanced space optimization',
        'Multi-mission planning',
        'Priority support',
        'Custom integrations',
        'Security clearance',
        'SLA guarantee'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom Pricing',
      description: 'For large space organizations',
      features: [
        'Full space ecosystem optimization',
        'Custom AI algorithms',
        '24/7 dedicated support',
        'On-site deployment',
        'Custom development',
        'White-label solutions'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Space Optimization - Zion Tech Group | Space Technology Solutions</title>
        <meta name="description" content="Revolutionary AI-powered space optimization solutions for satellite operations, mission planning, and space resource management. Transform space exploration with cutting-edge technology." />
        <meta name="keywords" content="space optimization, satellite operations, space technology, AI space solutions, mission planning, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-space-optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Rocket className="w-16 h-16 text-cyan-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                AI Space Optimization
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI-powered space optimization solutions for satellite operations, mission planning, 
              and space resource management. Transform space exploration with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call: (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Space Optimization Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 font-medium">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Space Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-6xl mb-6 text-center">{application.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{application.title}</h3>
                  <p className="text-gray-300 mb-6">{application.description}</p>
                  <ul className="space-y-2">
                    {application.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-green-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Overview */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Advanced Space Technology
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <Satellite className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Satellite AI</h3>
                <p className="text-gray-300">Advanced AI algorithms for satellite constellation management and optimization.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <Orbit className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Orbital Mechanics</h3>
                <p className="text-gray-300">Precise calculations for orbital trajectories and space mission planning.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <Globe className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Earth Observation</h3>
                <p className="text-gray-300">AI-powered analysis of Earth observation data for various applications.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 relative ${
                  tier.popular ? 'ring-2 ring-cyan-500' : ''
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{tier.price}</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Optimize Space Operations?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Discover how AI space optimization can revolutionize your space operations. 
                Get a free consultation and explore the future of space technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call: (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  Email Us
                </a>
              </div>
              <div className="text-white/80 text-sm">
                <p className="mb-2">📍 364 E Main St STE 1008, Middletown, DE 19709</p>
                <p>⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISpaceOptimizationPage;