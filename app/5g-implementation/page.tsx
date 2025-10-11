import React from 'react';
import { CheckCircle, ArrowRight, Wifi, Zap, Globe, Cpu, Smartphone, Database, Shield, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FiveGImplementationPage: React.FC = () => {
  const fiveGServices = [
    {
      icon: <Wifi className="w-12 h-12 text-blue-500" />,
      title: '5G Network Infrastructure',
      description: 'Complete 5G network design, deployment, and optimization for ultra-fast connectivity and low latency.',
      features: [
        '5G RAN deployment',
        'Core network architecture',
        'Edge computing integration',
        'Network slicing',
        'Performance optimization',
        'Coverage analysis'
      ],
      pricing: 'Starting at $50,000',
      popular: true,
      link: '/5g-network-infrastructure'
    },
    {
      icon: <Zap className="w-12 h-12 text-green-500" />,
      title: '5G IoT Solutions',
      description: 'Comprehensive IoT solutions leveraging 5G connectivity for smart cities, industrial automation, and connected devices.',
      features: [
        'IoT device integration',
        'Real-time data processing',
        'Edge computing deployment',
        'Sensor network management',
        'Data analytics platform',
        'Remote monitoring'
      ],
      pricing: '$25,000/month',
      popular: true,
      link: '/5g-iot-solutions'
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-500" />,
      title: '5G Edge Computing',
      description: 'Edge computing solutions that bring processing power closer to data sources for ultra-low latency applications.',
      features: [
        'Edge server deployment',
        'Distributed computing',
        'Real-time processing',
        'Content delivery optimization',
        'Edge AI integration',
        'Latency optimization'
      ],
      pricing: '$15,000/month',
      popular: false,
      link: '/5g-edge-computing'
    },
    {
      icon: <Cpu className="w-12 h-12 text-orange-500" />,
      title: '5G Private Networks',
      description: 'Dedicated 5G private networks for enterprises, campuses, and industrial facilities with enhanced security and control.',
      features: [
        'Private 5G core',
        'Dedicated spectrum',
        'Enhanced security',
        'Custom network policies',
        'Enterprise integration',
        '24/7 monitoring'
      ],
      pricing: '$35,000/month',
      popular: false,
      link: '/5g-private-networks'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: '5G Mobile Applications',
      description: 'Next-generation mobile applications optimized for 5G networks with AR/VR, real-time streaming, and immersive experiences.',
      features: [
        'AR/VR applications',
        'Real-time streaming',
        'Cloud gaming',
        'Immersive experiences',
        'Mobile optimization',
        'Cross-platform support'
      ],
      pricing: 'Starting at $30,000',
      popular: false,
      link: '/5g-mobile-applications'
    },
    {
      icon: <Database className="w-12 h-12 text-yellow-500" />,
      title: '5G Data Analytics',
      description: 'Advanced analytics platform for 5G networks with real-time monitoring, performance optimization, and predictive insights.',
      features: [
        'Real-time monitoring',
        'Performance analytics',
        'Predictive maintenance',
        'Network optimization',
        'Traffic analysis',
        'Quality of service metrics'
      ],
      pricing: '$20,000/month',
      popular: false,
      link: '/5g-data-analytics'
    }
  ];

  const fiveGBenefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Ultra-Fast Speeds',
      description: 'Up to 10+ Gbps download speeds for lightning-fast data transfer and seamless user experiences.',
      metric: '10+ Gbps'
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: 'Ultra-Low Latency',
      description: 'Sub-millisecond latency for real-time applications like autonomous vehicles and remote surgery.',
      metric: '< 1ms'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Massive IoT Connectivity',
      description: 'Support for millions of connected devices per square kilometer for smart cities and industrial IoT.',
      metric: '1M+ devices/km²'
    },
    {
      icon: <Cpu className="w-8 h-8 text-orange-500" />,
      title: 'Edge Computing',
      description: 'Distributed computing at the network edge for ultra-low latency and real-time processing.',
      metric: '99.9% Uptime'
    }
  ];

  const useCases = [
    {
      title: 'Smart Cities',
      description: 'Traffic management, environmental monitoring, and public safety systems powered by 5G.',
      icon: '🏙️'
    },
    {
      title: 'Industrial IoT',
      description: 'Manufacturing automation, predictive maintenance, and quality control with 5G connectivity.',
      icon: '🏭'
    },
    {
      title: 'Healthcare',
      description: 'Remote surgery, telemedicine, and real-time patient monitoring using 5G networks.',
      icon: '🏥'
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Vehicle-to-everything (V2X) communication and real-time navigation with 5G infrastructure.',
      icon: '🚗'
    },
    {
      title: 'AR/VR Applications',
      description: 'Immersive experiences, virtual meetings, and remote collaboration powered by 5G.',
      icon: '🥽'
    },
    {
      title: 'Cloud Gaming',
      description: 'High-performance cloud gaming with ultra-low latency and high bandwidth 5G networks.',
      icon: '🎮'
    }
  ];

  const stats = [
    { number: '100+', label: '5G Deployments' },
    { number: '99.9%', label: 'Network Uptime' },
    { number: '50+', label: 'Expert Engineers' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Next-generation 5G implementation services including network infrastructure, IoT solutions, edge computing, and mobile applications. Transform your business with ultra-fast connectivity." />
        <meta name="keywords" content="5G implementation, 5G networks, edge computing, IoT solutions, 5G mobile apps, ultra-fast connectivity" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Implementation Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds, 
              ultra-low latency, and massive IoT connectivity. Experience the future of wireless technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Explore AI Services
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* 5G Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">5G Technology Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {fiveGBenefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5G Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our 5G Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fiveGServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <Link 
                      to={service.link}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">5G Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Our 5G Services */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose Our 5G Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Proven Expertise</h3>
                <p className="text-gray-300">Experienced team with successful 5G deployments across various industries and use cases.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Future-Ready Solutions</h3>
                <p className="text-gray-300">Cutting-edge 5G technology and infrastructure designed for scalability and future innovation.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">End-to-End Support</h3>
                <p className="text-gray-300">Complete 5G implementation from planning and deployment to ongoing maintenance and optimization.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Embrace 5G Technology?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Transform your business with ultra-fast 5G connectivity and next-generation wireless solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FiveGImplementationPage;