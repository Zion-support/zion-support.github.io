import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, DollarSign, Star, Clock, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const FiveGImplementationPage: React.FC = () => {
  const fiveGServices = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: '5G Network Design',
      description: 'Complete 5G network architecture design and planning for optimal coverage and performance.',
      features: ['Network planning', 'Coverage optimization', 'Capacity planning', 'Interference analysis'],
      pricing: 'Starting at $15,000',
      duration: '4-8 weeks',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: '5G Security Implementation',
      description: 'Comprehensive security solutions for 5G networks including encryption and threat protection.',
      features: ['Network encryption', 'Threat detection', 'Access control', 'Compliance monitoring'],
      pricing: 'Starting at $25,000',
      duration: '6-10 weeks',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'IoT Integration',
      description: 'Connect and manage millions of IoT devices with 5G network infrastructure.',
      features: ['Device management', 'Data analytics', 'Real-time monitoring', 'Scalable architecture'],
      pricing: 'Starting at $30,000',
      duration: '8-12 weeks',
      popular: true
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Edge Computing Setup',
      description: 'Deploy edge computing infrastructure to reduce latency and improve performance.',
      features: ['Edge server deployment', 'Latency optimization', 'Data processing', 'Cloud integration'],
      pricing: 'Starting at $20,000',
      duration: '6-8 weeks',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: '5G Testing & Optimization',
      description: 'Comprehensive testing and optimization of 5G network performance and reliability.',
      features: ['Performance testing', 'Load testing', 'Optimization', 'Monitoring setup'],
      pricing: 'Starting at $10,000',
      duration: '2-4 weeks',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: '5G Training & Support',
      description: 'Comprehensive training programs for your team on 5G technology and maintenance.',
      features: ['Technical training', 'Hands-on workshops', 'Documentation', 'Ongoing support'],
      pricing: 'Starting at $5,000',
      duration: '1-2 weeks',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'Ultra-Fast Speeds',
      description: 'Experience speeds up to 10+ Gbps with ultra-low latency of 1ms.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'Massive IoT Support',
      description: 'Connect up to 1 million devices per square kilometer.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'Enhanced Reliability',
      description: '99.999% network reliability with advanced redundancy systems.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'Future-Proof Technology',
      description: 'Built to support emerging technologies and applications.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Gbps Speed' },
    { number: '1ms', label: 'Latency' },
    { number: '1M+', label: 'Devices/km²' },
    { number: '99.999%', label: 'Reliability' }
  ];

  const useCases = [
    {
      title: 'Smart Cities',
      description: 'Enable smart city infrastructure with connected sensors, traffic management, and public services.',
      icon: <Globe className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Support self-driving cars with real-time data processing and vehicle-to-everything communication.',
      icon: <Zap className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Industrial IoT',
      description: 'Transform manufacturing with connected machines, predictive maintenance, and real-time monitoring.',
      icon: <Shield className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Healthcare',
      description: 'Enable telemedicine, remote surgery, and real-time patient monitoring with ultra-reliable connectivity.',
      icon: <Users className="w-8 h-8 text-red-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Next-generation 5G implementation services with ultra-fast speeds, low latency, and massive IoT connectivity. Starting at $5,000." />
        <meta name="keywords" content="5G implementation, 5G network, IoT connectivity, edge computing, smart cities, autonomous vehicles" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Implementation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds, 
              low latency, and massive IoT connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5G Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our 5G Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive 5G implementation services to transform your business with next-generation connectivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {fiveGServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                  <div className="text-sm text-gray-400 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                </div>
                
                <Link 
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">5G Use Cases</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover how 5G technology can transform your industry and enable new possibilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our 5G Solutions?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We deliver 5G implementations that are reliable, scalable, and designed for the future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Deploy 5G?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Transform your business with next-generation 5G connectivity. Contact us for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Download Whitepaper
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