'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Car, Navigation, Eye, Cpu, Shield, BarChart, Target, CheckCircle, 
  ArrowRight, Star, Users, Award, Clock, TrendingUp, Settings, 
  MapPin, Zap, Brain, Globe, Lock, Sparkles, Wifi, Camera
} from 'lucide-react';

const AiAutonomousVehiclesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const autonomousServices = [
    {
      icon: <Car className="w-8 h-8 text-blue-400" />,
      title: 'Autonomous Vehicle AI',
      description: 'Complete self-driving vehicle systems with advanced AI for navigation, safety, and decision-making.',
      price: 'Starting at $50,000/month',
      features: [
        'Computer vision for object detection',
        'LIDAR and radar sensor fusion',
        'Path planning and navigation',
        'Real-time decision making',
        'Predictive maintenance',
        'Fleet management integration'
      ],
      benefits: [
        '99.9% safety improvement',
        '90% reduction in accidents',
        '24/7 autonomous operation',
        'Optimized fuel efficiency'
      ],
      link: '/contact',
      category: 'vehicles'
    },
    {
      icon: <Navigation className="w-8 h-8 text-green-400" />,
      title: 'Smart Traffic Management',
      description: 'AI-powered traffic optimization and intelligent transportation systems.',
      price: 'Starting at $25,000/month',
      features: [
        'Real-time traffic analysis',
        'Dynamic route optimization',
        'Signal timing optimization',
        'Incident detection and response',
        'Congestion prediction',
        'Multi-modal transportation'
      ],
      benefits: [
        '40% reduction in traffic congestion',
        '25% faster commute times',
        'Reduced emissions',
        'Improved safety'
      ],
      link: '/contact',
      category: 'traffic'
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-400" />,
      title: 'Advanced Computer Vision',
      description: 'State-of-the-art computer vision for autonomous systems and surveillance.',
      price: 'Starting at $15,000/month',
      features: [
        'Object detection and tracking',
        'Pedestrian recognition',
        'Lane detection',
        'Traffic sign recognition',
        'Weather condition analysis',
        'Night vision capabilities'
      ],
      benefits: [
        '99.5% accuracy in object detection',
        'Real-time processing',
        'All-weather operation',
        'Enhanced safety features'
      ],
      link: '/contact',
      category: 'vision'
    },
    {
      icon: <Cpu className="w-8 h-8 text-red-400" />,
      title: 'Edge Computing for AV',
      description: 'High-performance edge computing solutions for autonomous vehicle processing.',
      price: 'Starting at $20,000/month',
      features: [
        'Real-time data processing',
        'Low-latency decision making',
        'Edge AI inference',
        'Sensor data fusion',
        'Cloud connectivity',
        'Redundancy systems'
      ],
      benefits: [
        'Sub-millisecond response times',
        'Reliable offline operation',
        'Scalable processing power',
        'Cost-effective deployment'
      ],
      link: '/contact',
      category: 'computing'
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      title: 'Cybersecurity for AV',
      description: 'Comprehensive security solutions for autonomous vehicle systems.',
      price: 'Starting at $18,000/month',
      features: [
        'Vehicle network security',
        'Sensor data protection',
        'Communication encryption',
        'Intrusion detection',
        'Secure over-the-air updates',
        'Compliance management'
      ],
      benefits: [
        'Military-grade security',
        'Zero-trust architecture',
        'Continuous monitoring',
        'Regulatory compliance'
      ],
      link: '/contact',
      category: 'security'
    },
    {
      icon: <BarChart className="w-8 h-8 text-cyan-400" />,
      title: 'Fleet Analytics & Optimization',
      description: 'AI-powered analytics for autonomous vehicle fleet management and optimization.',
      price: 'Starting at $12,000/month',
      features: [
        'Fleet performance monitoring',
        'Predictive maintenance',
        'Route optimization',
        'Energy consumption analysis',
        'Driver behavior analysis',
        'Cost optimization'
      ],
      benefits: [
        '30% reduction in operating costs',
        'Predictive maintenance savings',
        'Optimized fleet utilization',
        'Data-driven decisions'
      ],
      link: '/contact',
      category: 'analytics'
    }
  ];

  const categories = [
    { id: 'overview', name: 'Overview', icon: <BarChart className="w-5 h-5" /> },
    { id: 'vehicles', name: 'Vehicles', icon: <Car className="w-5 h-5" /> },
    { id: 'traffic', name: 'Traffic', icon: <Navigation className="w-5 h-5" /> },
    { id: 'vision', name: 'Vision', icon: <Eye className="w-5 h-5" /> },
    { id: 'computing', name: 'Computing', icon: <Cpu className="w-5 h-5" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'analytics', name: 'Analytics', icon: <BarChart className="w-5 h-5" /> }
  ];

  const stats = [
    { number: '500+', label: 'Autonomous Vehicles', icon: <Car className="w-6 h-6 text-blue-400" /> },
    { number: '99.9%', label: 'Safety Rate', icon: <Shield className="w-6 h-6 text-green-400" /> },
    { number: '50+', label: 'Cities Served', icon: <MapPin className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Monitoring', icon: <Clock className="w-6 h-6 text-cyan-400" /> }
  ];

  const [activeTab, setActiveTab] = useState('overview');
  const filteredServices = activeTab === 'overview' 
    ? autonomousServices 
    : autonomousServices.filter(service => service.category === activeTab);

  return (
    <>
      <Helmet>
        <title>Autonomous Vehicles AI - Zion Tech Group | Self-Driving Technology Solutions</title>
        <meta name="description" content="Advanced AI solutions for autonomous vehicles including self-driving systems, computer vision, traffic management, and fleet optimization. Leading the future of transportation." />
        <meta name="keywords" content="autonomous vehicles, self-driving cars, AI transportation, computer vision, traffic management, fleet optimization, autonomous systems" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-vehicles" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 text-blue-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-400/30">
              <Car className="w-4 h-4" />
              <span>Autonomous Vehicles AI</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              The Future of{' '}
              <span className="bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                Transportation
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Revolutionize transportation with our advanced AI solutions for autonomous vehicles. 
              From self-driving cars to intelligent traffic management, we're building the future of mobility.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-blue-500 to-green-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:scale-105"
              >
                <span>Start Your AV Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-blue-400 text-blue-400 px-10 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View AV Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Autonomous Services Tabs */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">AV Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive autonomous vehicle technology for the next generation of transportation
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-green-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="text-blue-400 font-semibold text-lg">
                      {service.price}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Benefits:</h4>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={service.link}
                      className="block w-full mt-6 bg-gradient-to-r from-blue-500 to-green-600 text-white text-center py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-green-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                    >
                      Explore AV Solution
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-blue-900/50 to-green-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Build the Future of Transportation?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join the autonomous vehicle revolution and create safer, more efficient transportation systems. 
                  Let's discuss how our AV solutions can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                  >
                    Start Your AV Project
                  </Link>
                  <Link 
                    to="/pricing"
                    className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    View AV Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiAutonomousVehiclesPage;