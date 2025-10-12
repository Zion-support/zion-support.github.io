import React from 'react';
import { CheckCircle, ArrowRight, Wifi, Zap, Globe, Cpu, Shield, Clock, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const FiveGNetworkInfrastructurePage: React.FC = () => {
  const infrastructureServices = [
    {
      icon: <Wifi className="w-8 h-8 text-blue-500" />,
      title: '5G RAN Deployment',
      description: 'Complete 5G Radio Access Network deployment with advanced antenna systems and coverage optimization.',
      features: ['Massive MIMO antennas', 'Beamforming technology', 'Coverage optimization', 'Interference management', 'Performance monitoring'],
      pricing: 'Starting at $25,000'
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      title: '5G Core Network',
      description: 'Next-generation 5G core network architecture with cloud-native design and network slicing capabilities.',
      features: ['Cloud-native architecture', 'Network slicing', 'Service-based architecture', 'Automation & orchestration', 'Security hardening'],
      pricing: 'Starting at $40,000'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Edge Computing Integration',
      description: 'Edge computing infrastructure integrated with 5G networks for ultra-low latency applications.',
      features: ['Edge server deployment', 'Distributed computing', 'Content delivery optimization', 'Real-time processing', 'Edge AI integration'],
      pricing: 'Starting at $15,000'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Network Security',
      description: 'Comprehensive security solutions for 5G networks including threat detection and compliance.',
      features: ['Threat detection', 'Network monitoring', 'Compliance management', 'Security policies', 'Incident response'],
      pricing: 'Starting at $10,000/month'
    }
  ];

  const benefits = [
    {
      title: 'Ultra-Fast Speeds',
      description: 'Up to 10+ Gbps download speeds for lightning-fast connectivity',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Ultra-Low Latency',
      description: 'Sub-millisecond latency for real-time applications',
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Massive Connectivity',
      description: 'Support for millions of connected devices per square kilometer',
      icon: <Users className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Reliability',
      description: '99.9% network uptime with redundant systems',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>5G Network Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Complete 5G network infrastructure deployment including RAN, core network, edge computing, and security solutions. Expert 5G implementation services." />
        <meta name="keywords" content="5G network infrastructure, 5G RAN, 5G core network, edge computing, network security, 5G deployment" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Network Infrastructure
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Complete 5G network infrastructure deployment and optimization services. From RAN to core network, 
              we deliver end-to-end 5G solutions for ultra-fast connectivity.
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
                to="/5g-implementation" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Back to 5G Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Infrastructure Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive 5G network infrastructure solutions for modern connectivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
            {infrastructureServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-white mb-4">{service.pricing}</div>
                <Link 
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our 5G Infrastructure?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver 5G infrastructure that meets the highest standards of performance and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
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
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Deploy 5G Infrastructure?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get a free 5G infrastructure assessment and discover how we can optimize your network deployment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <Link 
                  to="/5g-implementation" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All 5G Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGNetworkInfrastructurePage;