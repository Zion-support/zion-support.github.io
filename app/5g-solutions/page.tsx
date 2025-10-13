import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle, Wifi, Smartphone, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const FiveGSolutionsPage = () => {
  const services = [
    {
      id: '5g-network-infrastructure',
      title: '5G Network Infrastructure',
      description: 'Deploy and optimize 5G network infrastructure for maximum performance and coverage.',
      icon: Wifi,
      features: ['Network Planning', 'Infrastructure Setup', 'Performance Optimization']
    },
    {
      id: '5g-edge-computing',
      title: '5G Edge Computing',
      description: 'Leverage edge computing capabilities for ultra-low latency applications.',
      icon: Globe,
      features: ['Edge Deployment', 'Latency Optimization', 'Real-time Processing']
    },
    {
      id: '5g-iot-solutions',
      title: '5G IoT Solutions',
      description: 'Connect and manage IoT devices with 5G technology for enhanced performance.',
      icon: Smartphone,
      features: ['Device Management', 'Data Analytics', 'Remote Monitoring']
    }
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO 
        title="5G Solutions - Zion Tech Group"
        description="Comprehensive 5G technology solutions including network infrastructure, edge computing, and IoT integration for modern businesses."
        keywords="5G solutions, 5G technology, network infrastructure, edge computing, IoT solutions, 5G implementation"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            5G Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Harness the power of 5G technology with our comprehensive solutions for network infrastructure, edge computing, and IoT integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View Demo
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500 transition-colors p-6">
                <IconComponent className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={`/${service.id}`}
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our 5G Solutions?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ultra-Fast Speed</h3>
              <p className="text-gray-300">Experience lightning-fast data transfer and processing speeds</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Low Latency</h3>
              <p className="text-gray-300">Minimal delay for real-time applications and IoT devices</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Reliable Connectivity</h3>
              <p className="text-gray-300">Stable and consistent network performance for all your needs</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Embrace 5G Technology?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our 5G solutions can transform your business operations and unlock new possibilities.
          </p>
          <Link 
            to="/contact" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            <Zap className="w-5 h-5" />
            Start Your 5G Journey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FiveGSolutionsPage;
