import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Code, Smartphone, Brain, Cpu, DollarSign, Star, Users, Clock, Wifi, Radio, Signal, Router, Antenna } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const FiveGImplementationPage: React.FC = () => {
  const fiveGServices = [
    {
      icon: <Wifi className="w-8 h-8 text-blue-500" />,
      title: '5G Network Infrastructure',
      description: 'Complete 5G network design, deployment, and optimization for ultra-fast connectivity.',
      features: [
        '5G NR (New Radio) deployment',
        'Small cell and macro cell installation',
        'Network slicing implementation',
        'Edge computing integration',
        'Massive MIMO antenna systems',
        'Beamforming optimization',
        'Network function virtualization (NFV)',
        'Software-defined networking (SDN)'
      ],
      pricing: {
        assessment: '$5,000',
        design: '$15,000',
        implementation: 'Starting at $50,000',
        maintenance: '$3,000/month'
      },
      benefits: ['Ultra-fast speeds up to 10 Gbps', 'Ultra-low latency under 1ms', 'Support for 1M+ devices per km²', 'Enhanced mobile broadband'],
      useCases: ['Smart cities', 'Industrial IoT', 'Autonomous vehicles', 'Remote healthcare'],
      link: '/5g-network-infrastructure'
    },
    {
      icon: <Radio className="w-8 h-8 text-green-500" />,
      title: '5G Private Networks',
      description: 'Dedicated 5G private networks for enterprises requiring secure, high-performance connectivity.',
      features: [
        'Private 5G core network setup',
        'Dedicated spectrum allocation',
        'Enterprise-grade security',
        'Custom network policies',
        'Local edge computing',
        'Integration with existing IT systems',
        'Network monitoring and management',
        '24/7 technical support'
      ],
      pricing: {
        consultation: '$3,000',
        design: '$10,000',
        implementation: 'Starting at $25,000',
        management: '$2,500/month'
      },
      benefits: ['Enhanced security and privacy', 'Predictable performance', 'Custom network policies', 'Reduced latency'],
      useCases: ['Manufacturing', 'Healthcare facilities', 'Educational campuses', 'Government facilities'],
      link: '/5g-private-networks'
    },
    {
      icon: <Antenna className="w-8 h-8 text-purple-500" />,
      title: '5G Antenna Solutions',
      description: 'Advanced antenna systems and optimization for maximum 5G coverage and performance.',
      features: [
        'Massive MIMO antenna deployment',
        'Beamforming optimization',
        'Antenna pattern analysis',
        'Coverage optimization',
        'Interference mitigation',
        'RF planning and design',
        'Antenna testing and validation',
        'Performance monitoring'
      ],
      pricing: {
        assessment: '$2,000',
        design: '$5,000',
        installation: 'Starting at $15,000',
        optimization: '$1,500/month'
      },
      benefits: ['Optimized coverage', 'Improved signal quality', 'Reduced interference', 'Enhanced capacity'],
      useCases: ['Urban coverage', 'Rural connectivity', 'Indoor coverage', 'High-density areas'],
      link: '/5g-antenna-solutions'
    },
    {
      icon: <Cloud className="w-8 h-8 text-orange-500" />,
      title: '5G Edge Computing',
      description: 'Edge computing solutions leveraging 5G for ultra-low latency applications and services.',
      features: [
        'Edge data center deployment',
        'Multi-access edge computing (MEC)',
        'Edge application development',
        'Real-time data processing',
        'Edge AI and machine learning',
        'Content delivery optimization',
        'Edge security implementation',
        'Edge orchestration and management'
      ],
      pricing: {
        assessment: '$3,500',
        design: '$8,000',
        implementation: 'Starting at $20,000',
        management: '$2,000/month'
      },
      benefits: ['Ultra-low latency processing', 'Reduced bandwidth costs', 'Enhanced data privacy', 'Improved application performance'],
      useCases: ['Autonomous vehicles', 'AR/VR applications', 'Real-time gaming', 'Industrial automation'],
      link: '/5g-edge-computing'
    },
    {
      icon: <Database className="w-8 h-8 text-cyan-500" />,
      title: '5G IoT Solutions',
      description: 'Comprehensive IoT solutions powered by 5G for massive device connectivity and management.',
      features: [
        'IoT device integration',
        'Massive machine-type communications (mMTC)',
        'IoT data analytics',
        'Device management platform',
        'Real-time monitoring',
        'Predictive maintenance',
        'IoT security implementation',
        'Scalable device onboarding'
      ],
      pricing: {
        consultation: '$2,500',
        platform: '$5,000',
        implementation: 'Starting at $12,000',
        management: '$1,800/month'
      },
      benefits: ['Connect millions of devices', 'Real-time data insights', 'Automated device management', 'Scalable IoT infrastructure'],
      useCases: ['Smart cities', 'Industrial IoT', 'Environmental monitoring', 'Asset tracking'],
      link: '/5g-iot-solutions'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: '5G Security Solutions',
      description: 'Comprehensive security solutions for 5G networks and applications.',
      features: [
        '5G network security assessment',
        'Zero-trust security architecture',
        'Threat detection and prevention',
        'Network slicing security',
        'Edge security implementation',
        'Security monitoring and analytics',
        'Compliance management',
        'Incident response planning'
      ],
      pricing: {
        assessment: '$4,000',
        implementation: 'Starting at $15,000',
        monitoring: '$2,200/month',
        management: '$1,500/month'
      },
      benefits: ['Protect against 5G threats', 'Ensure network integrity', 'Comply with regulations', 'Maintain data privacy'],
      useCases: ['Network security', 'Data protection', 'Compliance management', 'Threat prevention'],
      link: '/5g-security-solutions'
    }
  ];

  const stats = [
    { number: '10+ Gbps', label: 'Peak Speeds' },
    { number: '< 1ms', label: 'Ultra-Low Latency' },
    { number: '1M+', label: 'Devices per km²' },
    { number: '99.99%', label: 'Reliability' }
  ];

  const industries = [
    'Smart Manufacturing',
    'Autonomous Vehicles',
    'Healthcare & Telemedicine',
    'Smart Cities',
    'Agriculture',
    'Retail & E-commerce',
    'Entertainment & Media',
    'Education'
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Ultra-Fast Speeds',
      description: 'Experience speeds up to 10 Gbps, 100x faster than 4G'
    },
    {
      icon: <Clock className="w-6 h-6 text-green-500" />,
      title: 'Ultra-Low Latency',
      description: 'Achieve latency under 1ms for real-time applications'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: 'Massive Connectivity',
      description: 'Support for 1 million devices per square kilometer'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Enhanced Security',
      description: 'Advanced security features and network slicing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G implementation services including network infrastructure, private networks, edge computing, and IoT solutions. Transform your business with next-generation connectivity." />
        <meta name="keywords" content="5g implementation, 5g networks, edge computing, iot solutions, private networks, ultra-fast connectivity" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              5G Implementation Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Transform your business with next-generation 5G connectivity. Ultra-fast speeds, ultra-low latency, 
              and massive device connectivity for the future of digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get 5G Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/5g-demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Schedule 5G Demo
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose 5G?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Experience the transformative power of 5G technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5G Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our 5G Service Portfolio</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive 5G solutions to power your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {fiveGServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Pricing:</h4>
                  <div className="space-y-2">
                    {Object.entries(service.pricing).map(([key, value], priceIndex) => (
                      <div key={priceIndex} className="flex justify-between text-sm">
                        <span className="text-gray-300 capitalize">{key.replace('_', ' ')}:</span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, useCaseIndex) => (
                      <span key={useCaseIndex} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Link to={service.link} className="flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Industries We Serve</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              5G technology is transforming industries across the globe
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Embrace 5G Technology?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how 5G implementation can transform your business and unlock new possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get 5G Consultation
                </Link>
                <Link 
                  to="/5g-demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule 5G Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGImplementationPage;