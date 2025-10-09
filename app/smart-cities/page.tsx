'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Building, Globe, Shield, Users, TrendingUp, ArrowRight, Phone, Mail, MapPin, Wifi, Car, Lightbulb, Leaf } from 'lucide-react';

const SmartCitiesPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'IoT Infrastructure',
      description: 'Comprehensive IoT sensor networks for real-time monitoring of city systems and services.'
    },
    {
      icon: Car,
      title: 'Smart Transportation',
      description: 'Intelligent traffic management, smart parking, and autonomous vehicle integration systems.'
    },
    {
      icon: Lightbulb,
      title: 'Smart Energy Grid',
      description: 'AI-powered energy management with renewable integration and demand optimization.'
    },
    {
      icon: Building,
      title: 'Smart Buildings',
      description: 'Connected building management systems for efficiency, security, and sustainability.'
    },
    {
      icon: Globe,
      title: 'Environmental Monitoring',
      description: 'Real-time air quality, noise, and environmental data collection and analysis.'
    },
    {
      icon: Users,
      title: 'Citizen Services',
      description: 'Digital platforms for citizen engagement, service delivery, and government transparency.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Pilot Program',
      price: '$1,999',
      period: '/month',
      description: 'Small city implementation',
      features: [
        'Basic IoT infrastructure',
        'Traffic management system',
        'Environmental monitoring',
        'Citizen portal',
        '6-month implementation',
        'Basic support'
      ],
      popular: false
    },
    {
      name: 'Smart City',
      price: '$4,999',
      period: '/month',
      description: 'Full smart city solution',
      features: [
        'Complete IoT network',
        'All transportation systems',
        'Smart energy grid',
        'Advanced analytics',
        '12-month implementation',
        'Priority support',
        'Custom development'
      ],
      popular: true
    },
    {
      name: 'Mega City',
      price: '$9,999',
      period: '/month',
      description: 'Large metropolitan solution',
      features: [
        'Enterprise IoT platform',
        'Full automation suite',
        'AI-powered analytics',
        '24/7 monitoring',
        '18-month implementation',
        'Dedicated support team',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '30% Efficiency Gain',
      description: 'Average 30% improvement in city operations and resource utilization'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Reduce carbon footprint and promote green initiatives'
    },
    {
      icon: Users,
      title: 'Citizen Satisfaction',
      description: 'Enhanced quality of life and better public services'
    },
    {
      icon: Shield,
      title: 'Security & Safety',
      description: 'Advanced monitoring and emergency response systems'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Smart Cities Solutions - Zion Tech Group</title>
        <meta name="description" content="Urban technology solutions for sustainable and intelligent city management. Starting at $1,999/month." />
        <meta name="keywords" content="smart cities, iot solutions, urban technology, city management, sustainable cities" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Smart Cities Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your city into a sustainable, efficient, and intelligent urban environment with our comprehensive smart city technology solutions.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">30%</div>
              <div className="text-gray-300">Efficiency Gain</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300">Cities Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">$2M</div>
              <div className="text-gray-300">Average Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Comprehensive Smart City Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Transform Your City
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Smart City Implementation Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${tier.name} Smart Cities Plan`}
                  className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
                    tier.popular
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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join the smart city revolution and create a sustainable, efficient urban environment for your citizens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartCitiesPage;