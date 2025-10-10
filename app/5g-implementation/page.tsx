'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Zap, Shield, Globe, CheckCircle, ArrowRight, Star, Clock, Phone, Mail, BarChart, Users, Settings } from 'lucide-react';

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Ultra-Fast Connectivity',
      description: 'Deploy 5G networks with speeds up to 10 Gbps and ultra-low latency',
      benefits: ['10x faster than 4G', 'Sub-1ms latency', 'Massive device capacity', 'Enhanced reliability']
    },
    {
      icon: Zap,
      title: 'Edge Computing Integration',
      description: 'Implement edge computing solutions for real-time data processing',
      benefits: ['Real-time processing', 'Reduced latency', 'Bandwidth optimization', 'Local data processing']
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Enterprise-grade security for 5G networks and connected devices',
      benefits: ['End-to-end encryption', 'Zero-trust architecture', 'Threat detection', 'Compliance ready']
    },
    {
      icon: Globe,
      title: 'IoT Enablement',
      description: 'Connect millions of IoT devices with reliable 5G infrastructure',
      benefits: ['Massive IoT support', 'Long battery life', 'Wide coverage', 'Cost-effective connectivity']
    }
  ];

  const industries = [
    {
      title: 'Smart Manufacturing',
      description: 'Enable Industry 4.0 with 5G-powered smart factories and automation',
      icon: Settings,
      benefits: ['Real-time monitoring', 'Predictive maintenance', 'AR/VR training', 'Autonomous robots']
    },
    {
      title: 'Healthcare',
      description: 'Transform healthcare with 5G-enabled telemedicine and remote surgery',
      icon: Users,
      benefits: ['Remote consultations', 'AR-assisted surgery', 'Real-time monitoring', 'Emergency response']
    },
    {
      title: 'Smart Cities',
      description: 'Build connected cities with 5G infrastructure and smart services',
      icon: Globe,
      benefits: ['Traffic optimization', 'Environmental monitoring', 'Public safety', 'Energy management']
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Enable connected and autonomous vehicles with 5G V2X communication',
      icon: Zap,
      benefits: ['Vehicle-to-everything', 'Real-time navigation', 'Safety systems', 'Fleet management']
    }
  ];

  const pricing = [
    {
      name: 'Pilot Program',
      price: '$2,999/month',
      description: 'Perfect for testing 5G capabilities',
      features: [
        'Up to 10 base stations',
        'Basic 5G coverage',
        'Standard support',
        'Performance monitoring',
        '6-month contract'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$9,999/month',
      description: 'Ideal for large organizations',
      features: [
        'Up to 100 base stations',
        'Full 5G coverage',
        'Edge computing integration',
        'Priority support',
        'Custom applications',
        'Security services',
        '24/7 monitoring'
      ],
      popular: true
    },
    {
      name: 'City-Wide',
      price: 'Custom',
      description: 'For smart city implementations',
      features: [
        'Unlimited base stations',
        'Complete city coverage',
        'Custom solutions',
        'Dedicated support',
        'Government compliance',
        'Public-private partnerships',
        'Long-term contracts'
      ],
      popular: false
    }
  ];

  const stats = [
    { value: '10x', label: 'Faster Speed', description: 'Compared to 4G networks' },
    { value: '<1ms', label: 'Ultra-Low Latency', description: 'Real-time communication' },
    { value: '1M+', label: 'Devices per km²', description: 'Massive IoT connectivity' },
    { value: '99.9%', label: 'Reliability', description: 'Network uptime guarantee' }
  ];

  const benefits = [
    'Deploy 5G networks 3x faster than competitors',
    'Reduce operational costs by 40%',
    'Enable new revenue streams with 5G services',
    'Improve customer experience with ultra-fast connectivity',
    'Support massive IoT deployments',
    'Enable real-time applications and services',
    'Future-proof your infrastructure',
    'Gain competitive advantage with cutting-edge technology'
  ];

  return (
    <>
      <Helmet>
        <title>5G Implementation Services - Zion Tech Group | Next-Generation Network Solutions</title>
        <meta name="description" content="Deploy 5G networks with ultra-fast speeds, low latency, and massive IoT connectivity. Complete 5G implementation services for enterprises and smart cities." />
        <meta name="keywords" content="5G implementation, 5G networks, edge computing, IoT connectivity, smart cities, network infrastructure" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              5G Implementation Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Deploy next-generation 5G networks with ultra-fast speeds, ultra-low latency, and massive IoT connectivity. Complete 5G implementation services for enterprises and smart cities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Free Assessment
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Next-Generation 5G Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge 5G infrastructure designed for the future
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform industries with 5G-powered solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{industry.title}</h3>
                      <p className="text-gray-300">{industry.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our 5G Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven expertise in 5G implementation and optimization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your 5G implementation needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    {plan.price !== 'Custom' && <p className="text-gray-400">per month</p>}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Deploy 5G?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a free 5G readiness assessment and discover how to transform your business with next-generation connectivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Free Assessment
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGImplementationPage;