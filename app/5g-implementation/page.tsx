import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Wifi, Smartphone, Globe, Zap, ArrowRight, CheckCircle } from 'lucide-react';

export default function FiveGImplementationPage() {
  const services = [
    {
      title: '5G Network Infrastructure',
      description: 'Complete 5G network design, deployment, and optimization',
      icon: <Wifi className="w-8 h-8" />,
      features: ['Network Planning', 'Site Survey', 'Equipment Installation', 'Performance Optimization'],
      path: '/5g-network-infrastructure'
    },
    {
      title: '5G Mobile Applications',
      description: 'High-performance mobile apps leveraging 5G capabilities',
      icon: <Smartphone className="w-8 h-8" />,
      features: ['Ultra-Low Latency', 'High Bandwidth', 'Real-time Processing', 'Edge Computing'],
      path: '/5g-mobile-applications'
    },
    {
      title: '5G IoT Solutions',
      description: 'Internet of Things solutions powered by 5G connectivity',
      icon: <Globe className="w-8 h-8" />,
      features: ['Massive IoT', 'Smart Sensors', 'Real-time Monitoring', 'Data Analytics'],
      path: '/5g-iot-solutions'
    },
    {
      title: '5G Edge Computing',
      description: 'Edge computing infrastructure for ultra-low latency applications',
      icon: <Zap className="w-8 h-8" />,
      features: ['Edge Servers', 'Local Processing', 'Real-time Analytics', 'Reduced Latency'],
      path: '/5g-edge-computing'
    }
  ];

  const benefits = [
    'Ultra-low latency (1ms) for real-time applications',
    'High bandwidth (up to 10 Gbps) for data-intensive tasks',
    'Massive IoT connectivity (1M devices per km²)',
    'Enhanced mobile broadband for seamless experiences',
    'Network slicing for customized service delivery',
    'Edge computing for faster processing'
  ];

  return (
    <>
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G implementation services including network infrastructure, mobile apps, IoT solutions, and edge computing." />
        <meta name="keywords" content="5G implementation, 5G network, mobile applications, IoT solutions, edge computing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                5G Implementation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with next-generation 5G technology. 
                Ultra-low latency, high bandwidth, and massive connectivity for the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Get Started
                </Link>
                <Link 
                  to="/demo" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                5G Technology Benefits
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Unlock the full potential of 5G with our comprehensive implementation services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our 5G Services
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                End-to-end 5G solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-purple-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.path}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                5G Use Cases
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Discover how 5G can transform your industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Smart Manufacturing</h3>
                <p className="text-gray-300">
                  Real-time monitoring and control of industrial processes with ultra-low latency.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Autonomous Vehicles</h3>
                <p className="text-gray-300">
                  Vehicle-to-everything (V2X) communication for safer autonomous driving.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Remote Healthcare</h3>
                <p className="text-gray-300">
                  Telemedicine and remote surgery with real-time data transmission.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Smart Cities</h3>
                <p className="text-gray-300">
                  Connected infrastructure for traffic management and public services.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">AR/VR Applications</h3>
                <p className="text-gray-300">
                  Immersive experiences with high bandwidth and low latency requirements.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Edge Computing</h3>
                <p className="text-gray-300">
                  Process data locally for faster response times and reduced latency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Implement 5G?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let our 5G experts help you design and deploy the perfect solution for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Start Your 5G Journey
              </Link>
              <Link 
                to="/about" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}