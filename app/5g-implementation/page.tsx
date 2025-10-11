import React from 'react';
import { CheckCircle, ArrowRight, Wifi, Zap, Globe, Smartphone, Database, Shield, DollarSign, Star, Clock, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const FiveGImplementationPage: React.FC = () => {
  const fiveGServices = [
    {
      icon: <Wifi className="w-8 h-8 text-blue-500" />,
      title: '5G Network Design & Implementation',
      description: 'Complete 5G network design and implementation with ultra-fast speeds and ultra-low latency.',
      features: ['Network planning', 'Site surveys', 'Equipment installation', 'Performance optimization', 'Coverage mapping', 'Signal testing'],
      pricing: 'Starting at $50,000',
      link: '/5g-network-design',
      popular: true,
      category: 'Infrastructure',
      duration: '3-6 months'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: '5G Edge Computing Solutions',
      description: 'Deploy edge computing infrastructure to leverage 5G speeds for real-time applications.',
      features: ['Edge server deployment', 'Latency optimization', 'Real-time processing', 'IoT integration', 'Data analytics', 'Performance monitoring'],
      pricing: 'Starting at $25,000',
      link: '/5g-edge-computing',
      popular: false,
      category: 'Edge Computing',
      duration: '2-4 months'
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: '5G IoT Integration',
      description: 'Connect and manage millions of IoT devices with 5G network capabilities.',
      features: ['Device connectivity', 'Data management', 'Real-time monitoring', 'Predictive analytics', 'Remote control', 'Scalable architecture'],
      pricing: 'Starting at $15,000',
      link: '/5g-iot-integration',
      popular: false,
      category: 'IoT',
      duration: '1-3 months'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      title: '5G Mobile App Development',
      description: 'Develop mobile applications that leverage 5G capabilities for enhanced user experiences.',
      features: ['5G-optimized apps', 'Real-time streaming', 'AR/VR integration', 'Cloud gaming', 'High-speed data', 'Low latency features'],
      pricing: 'Starting at $30,000',
      link: '/5g-mobile-apps',
      popular: true,
      category: 'Development',
      duration: '2-5 months'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: '5G Data Analytics Platform',
      description: 'Advanced analytics platform to process and analyze massive amounts of 5G data.',
      features: ['Real-time analytics', 'Big data processing', 'Machine learning', 'Predictive modeling', 'Visualization dashboards', 'API integration'],
      pricing: 'Starting at $20,000',
      link: '/5g-analytics',
      popular: false,
      category: 'Analytics',
      duration: '2-4 months'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: '5G Security Solutions',
      description: 'Comprehensive security solutions for 5G networks and connected devices.',
      features: ['Network security', 'Device protection', 'Data encryption', 'Threat detection', 'Compliance management', 'Incident response'],
      pricing: 'Starting at $18,000',
      link: '/5g-security',
      popular: false,
      category: 'Security',
      duration: '1-3 months'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Ultra-Fast Speeds',
      description: 'Experience speeds up to 10+ Gbps, 100x faster than 4G networks.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'Ultra-Low Latency',
      description: 'Achieve latency as low as 1ms for real-time applications and IoT devices.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'Massive Connectivity',
      description: 'Support for 1 million+ devices per square kilometer for IoT applications.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: 'Future-Ready',
      description: 'Built for the future with support for AR, VR, autonomous vehicles, and smart cities.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Gbps Speed' },
    { number: '1ms', label: 'Latency' },
    { number: '1M+', label: 'Devices/km²' },
    { number: '99.9%', label: 'Reliability' }
  ];

  const useCases = [
    {
      title: 'Smart Cities',
      description: 'Traffic management, environmental monitoring, and public safety systems',
      icon: '🏙️'
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Real-time communication between vehicles and infrastructure',
      icon: '🚗'
    },
    {
      title: 'Healthcare',
      description: 'Remote surgery, telemedicine, and patient monitoring',
      icon: '🏥'
    },
    {
      title: 'Manufacturing',
      description: 'Industrial IoT, predictive maintenance, and automation',
      icon: '🏭'
    },
    {
      title: 'Entertainment',
      description: 'AR/VR experiences, cloud gaming, and live streaming',
      icon: '🎮'
    },
    {
      title: 'Agriculture',
      description: 'Precision farming, crop monitoring, and automated systems',
      icon: '🌾'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Next-generation 5G implementation services with ultra-fast speeds, low latency, and massive connectivity. Transform your business with 5G technology." />
        <meta name="keywords" content="5G implementation, 5G network, edge computing, IoT, mobile development, 5G security" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              5G Implementation Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Next-generation connectivity solutions with ultra-fast speeds, ultra-low latency, and massive device connectivity. 
              Power your digital transformation with 5G technology.
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">5G Use Cases</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Discover how 5G can transform your industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5G Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our 5G Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive 5G solutions to power your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {fiveGServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                    {service.category}
                  </span>
                </div>
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
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-white">{service.pricing}</div>
                  <div className="text-sm text-gray-400">{service.duration}</div>
                </div>
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our 5G Services?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Experience the power of next-generation connectivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Implement 5G?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Get a free 5G readiness assessment and discover how 5G can transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <Link 
                  to="/digital-transformation" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Digital Transformation
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
