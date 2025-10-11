import React from 'react';
import { CheckCircle, ArrowRight, Wifi, Zap, Globe, Smartphone, Cpu, Shield, Database, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function FiveGImplementationPage() {
  const fiveGServices = [
    {
      icon: <Wifi className="w-12 h-12 text-blue-500" />,
      title: '5G Network Design',
      description: 'Design and implement high-performance 5G networks with ultra-low latency and massive connectivity.',
      features: [
        'Network architecture planning',
        'Coverage optimization',
        'Capacity planning',
        'Interference management',
        'Performance testing',
        'Compliance certification'
      ],
      pricing: 'Starting at $50,000',
      popular: true,
      link: '/5g-network-design'
    },
    {
      icon: <Zap className="w-12 h-12 text-green-500" />,
      title: '5G Infrastructure',
      description: 'Deploy robust 5G infrastructure with edge computing and IoT integration capabilities.',
      features: [
        'Base station deployment',
        'Edge computing setup',
        'Fiber backhaul',
        'Power systems',
        'Environmental controls',
        'Maintenance services'
      ],
      pricing: 'Starting at $100,000',
      popular: false,
      link: '/5g-infrastructure'
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-500" />,
      title: 'IoT Integration',
      description: 'Connect millions of devices with 5G-powered IoT solutions for smart cities and industries.',
      features: [
        'Device connectivity',
        'Data management',
        'Real-time analytics',
        'Security protocols',
        'Scalable architecture',
        'Monitoring systems'
      ],
      pricing: 'Starting at $25,000',
      popular: true,
      link: '/5g-iot-integration'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-orange-500" />,
      title: '5G Applications',
      description: 'Develop cutting-edge applications that leverage 5G capabilities for enhanced user experiences.',
      features: [
        'AR/VR applications',
        'Real-time streaming',
        'Mobile gaming',
        'Video conferencing',
        'Cloud computing',
        'Performance optimization'
      ],
      pricing: 'Starting at $15,000',
      popular: false,
      link: '/5g-applications'
    },
    {
      icon: <Cpu className="w-12 h-12 text-red-500" />,
      title: 'Edge Computing',
      description: 'Implement edge computing solutions to reduce latency and improve performance for 5G applications.',
      features: [
        'Edge server deployment',
        'Data processing',
        'AI inference',
        'Content delivery',
        'Load balancing',
        'Security implementation'
      ],
      pricing: 'Starting at $30,000',
      popular: false,
      link: '/5g-edge-computing'
    },
    {
      icon: <Shield className="w-12 h-12 text-yellow-500" />,
      title: '5G Security',
      description: 'Comprehensive security solutions to protect 5G networks and connected devices from threats.',
      features: [
        'Network security',
        'Device authentication',
        'Data encryption',
        'Threat detection',
        'Compliance auditing',
        'Incident response'
      ],
      pricing: 'Starting at $20,000',
      popular: true,
      link: '/5g-security'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Ultra-Fast Speeds',
      description: 'Experience speeds up to 10 Gbps with 5G technology, enabling new possibilities for applications.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'Low Latency',
      description: 'Achieve ultra-low latency of 1ms, perfect for real-time applications and IoT devices.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'Massive Connectivity',
      description: 'Connect up to 1 million devices per square kilometer with 5G network capacity.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: 'Future-Ready',
      description: 'Build infrastructure that will support next-generation technologies and applications.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Gbps Speeds' },
    { number: '1ms', label: 'Latency' },
    { number: '1M+', label: 'Devices/km²' },
    { number: '99.9%', label: 'Reliability' }
  ];

  const useCases = [
    {
      title: 'Smart Cities',
      description: 'Enable smart traffic management, environmental monitoring, and public safety systems.',
      icon: <Globe className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Industrial IoT',
      description: 'Connect manufacturing equipment for predictive maintenance and automation.',
      icon: <Cpu className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Healthcare',
      description: 'Support telemedicine, remote surgery, and real-time patient monitoring.',
      icon: <Smartphone className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Enable vehicle-to-vehicle communication and real-time navigation updates.',
      icon: <Wifi className="w-8 h-8 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with 5G implementation services. Ultra-fast speeds, low latency, and massive connectivity for next-generation applications." />
        <meta name="keywords" content="5G implementation, 5G services, IoT, edge computing, smart cities, ultra-fast internet" />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                5G Implementation
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Transform your business with next-generation 5G technology. Ultra-fast speeds, 
                ultra-low latency, and massive connectivity for the future.
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
                  to="/it-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View IT Services
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

        {/* 5G Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our 5G Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive 5G solutions for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {fiveGServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Zap className="w-4 h-4 mr-1" />
                        Popular
                      </div>
                    </div>
                  )}
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
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
                    <div className="text-lg font-bold text-white">{service.pricing}</div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Zap className="w-4 h-4 text-yellow-400 mr-1" />
                      4.9
                    </div>
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

        {/* Use Cases Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">5G Use Cases</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Discover how 5G can transform your industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose 5G?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Experience the benefits of next-generation connectivity
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready for the 5G Revolution?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let our 5G experts help you implement next-generation connectivity solutions for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get 5G Assessment
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Explore AI Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}