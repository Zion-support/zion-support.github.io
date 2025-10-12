'use client';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { ArrowRight, Database } from 'lucide-react';

export default function FiveGImplementationPage() {
  const fiveGServices = [
    {
      name: '5G Network Infrastructure',
      description: 'Complete 5G network design and implementation',
      price: 'Starting at $50,000',
      features: ['Network planning', 'Equipment installation', 'Performance optimization', 'Maintenance support'],
      icon: Wifi,
      path: '/5g-network-infrastructure',
      popular: true
    },
    {
      name: '5G Edge Computing',
      description: 'Edge computing solutions for ultra-low latency applications',
      price: 'Starting at $25,000',
      features: ['Edge server deployment', 'Latency optimization', 'Data processing', 'Monitoring tools'],
      icon: Cpu,
      path: '/5g-edge-computing'
    },
    {
      name: '5G IoT Solutions',
      description: 'Internet of Things implementation with 5G connectivity',
      price: 'Starting at $15,000',
      features: ['Device integration', 'Data collection', 'Real-time monitoring', 'Analytics dashboard'],
      icon: Smartphone,
      path: '/5g-iot-solutions'
    },
    {
      name: '5G Private Networks',
      description: 'Dedicated 5G networks for enterprise use',
      price: 'Starting at $30,000',
      features: ['Private network setup', 'Custom configuration', 'Security protocols', 'Dedicated support'],
      icon: Shield,
      path: '/5g-private-networks'
    },
    {
      name: '5G Mobile Applications',
      description: '5G-optimized mobile app development',
      price: 'Starting at $20,000',
      features: ['5G-optimized apps', 'Ultra-low latency', 'High bandwidth utilization', 'Cross-platform'],
      icon: Smartphone,
      path: '/5g-mobile-applications'
    },
    {
      name: '5G Data Analytics',
      description: 'Real-time data processing and analytics for 5G networks',
      price: 'Starting at $12,000',
      features: ['Real-time analytics', 'Network optimization', 'Performance monitoring', 'Predictive insights'],
      icon: BarChart3,
      path: '/5g-data-analytics'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Ultra-Fast Speeds',
      description: 'Up to 10x faster than 4G with speeds up to 10 Gbps',
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      title: 'Low Latency',
      description: 'Ultra-low latency of 1ms for real-time applications',
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: 'Massive Connectivity',
      description: 'Support for millions of connected devices per square kilometer',
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Enhanced Security',
      description: 'Advanced encryption and security protocols for 5G networks',
    }
  ];

  const stats = [
    { number: '10x', label: 'Faster than 4G', icon: Zap },
    { number: '1ms', label: 'Ultra-Low Latency', icon: Cpu },
    { number: '1M+', label: 'Devices per km²', icon: Globe },
    { number: '99.9%', label: 'Network Reliability', icon: Shield }
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Real-time monitoring and control of industrial processes',
      icon: <Server className="w-6 h-6 text-blue-400" />,
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Ultra-low latency communication for self-driving cars',
      icon: <Smartphone className="w-6 h-6 text-green-400" />,
    },
    {
      title: 'Remote Surgery',
      description: 'High-precision medical procedures performed remotely',
      icon: <Users className="w-6 h-6 text-red-400" />,
    },
    {
      title: 'Smart Cities',
      description: 'Connected infrastructure for efficient urban management',
      icon: <Globe className="w-6 h-6 text-purple-400" />,
    },
    {
      title: 'AR/VR Applications',
      description: 'Immersive experiences with ultra-low latency',
      icon: <Database className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: 'IoT Networks',
      description: 'Massive scale connectivity for smart devices',
      icon: <Cloud className="w-6 h-6 text-orange-400" />,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>5G Implementation - Zion Tech Group | Next-Generation 5G Solutions</title>
        <meta name="description" content="Transform your business with 5G technology. Professional 5G implementation services including network infrastructure, edge computing, IoT solutions, and mobile applications." />
        <meta name="keywords" content="5G implementation, 5G network, edge computing, IoT solutions, 5G mobile apps, private networks, Zion Tech Group" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Next-Generation{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              5G Solutions
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Unlock the power of 5G technology with our comprehensive implementation services.
            From network infrastructure to edge computing, we deliver the future of connectivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5G Benefits */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose 5G?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Experience the transformative power of 5G technology with these key advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 text-center border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5G Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">5G Implementation Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive 5G solutions tailored to your business needs and industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fiveGServices.map((service, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 hover:bg-slate-700/50 group relative ${
                service.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover:border-cyan-500/30'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <p className="text-2xl font-bold text-cyan-400">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.path}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">5G Use Cases</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Discover how 5G technology can transform various industries and applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 group hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                      {useCase.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our 5G Implementation Process</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                A systematic approach to ensure successful 5G deployment and optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Assessment</h3>
                <p className="text-gray-300">Comprehensive analysis of your current infrastructure and 5G requirements.</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Planning</h3>
                <p className="text-gray-300">Detailed network design and implementation strategy tailored to your needs.</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-600 rounded-full mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Deployment</h3>
                <p className="text-gray-300">Professional installation and configuration of 5G infrastructure and equipment.</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-yellow-600 rounded-full mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Optimization</h3>
                <p className="text-gray-300">Continuous monitoring, testing, and optimization for peak performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Embrace 5G Technology?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how 5G implementation can transform your business operations and unlock new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your 5G Journey
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}