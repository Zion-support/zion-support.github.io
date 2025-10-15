import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  SignalIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
  PhoneIcon,
  GlobeAltIcon,
  WifiIcon
} from '@heroicons/react/24/outline';

const FiveGSolutionsPage: React.FC = () => {
  const fiveGServices = [
    {
      icon: SignalIcon,
      title: '5G Network Implementation',
      description: 'Complete 5G network design, deployment, and optimization for maximum performance.',
      features: ['Network Planning', 'Infrastructure Setup', 'Performance Optimization', 'Coverage Analysis']
    },
    {
      icon: CpuChipIcon,
      title: '5G IoT Solutions',
      description: 'Connect and manage IoT devices with ultra-low latency 5G connectivity.',
      features: ['Device Management', 'Real-time Monitoring', 'Data Analytics', 'Edge Computing']
    },
    {
      icon: CloudIcon,
      title: '5G Edge Computing',
      description: 'Deploy edge computing solutions to reduce latency and improve performance.',
      features: ['Edge Servers', 'Content Delivery', 'Real-time Processing', 'Distributed Computing']
    },
    {
      icon: ShieldCheckIcon,
      title: '5G Security Solutions',
      description: 'Comprehensive security solutions for 5G networks and connected devices.',
      features: ['Network Security', 'Device Authentication', 'Data Encryption', 'Threat Detection']
    },
    {
      icon: ChartBarIcon,
      title: '5G Analytics Platform',
      description: 'Advanced analytics and monitoring for 5G network performance and usage.',
      features: ['Performance Metrics', 'Usage Analytics', 'Predictive Maintenance', 'Real-time Dashboards']
    },
    {
      icon: CogIcon,
      title: '5G Private Networks',
      description: 'Dedicated private 5G networks for enterprise and industrial applications.',
      features: ['Private Infrastructure', 'Custom Configuration', 'Dedicated Resources', 'Enhanced Security']
    }
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Enable real-time monitoring and control of manufacturing processes',
      icon: '🏭',
      benefits: ['Real-time Control', 'Predictive Maintenance', 'Quality Assurance', 'Efficiency Optimization']
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Support connected and autonomous vehicle communication systems',
      icon: '🚗',
      benefits: ['Vehicle-to-Vehicle Communication', 'Real-time Navigation', 'Safety Systems', 'Traffic Management']
    },
    {
      title: 'Smart Cities',
      description: 'Power smart city infrastructure and citizen services',
      icon: '🏙️',
      benefits: ['Traffic Management', 'Public Safety', 'Environmental Monitoring', 'Citizen Services']
    },
    {
      title: 'Healthcare',
      description: 'Enable telemedicine and remote patient monitoring',
      icon: '🏥',
      benefits: ['Remote Surgery', 'Patient Monitoring', 'Medical Data Transfer', 'Emergency Response']
    },
    {
      title: 'Agriculture',
      description: 'Smart farming with IoT sensors and autonomous equipment',
      icon: '🚜',
      benefits: ['Crop Monitoring', 'Precision Agriculture', 'Livestock Tracking', 'Resource Optimization']
    },
    {
      title: 'Entertainment',
      description: 'Enhanced AR/VR experiences and live streaming',
      icon: '🎮',
      benefits: ['Immersive Experiences', 'Live Streaming', 'Gaming', 'Virtual Events']
    }
  ];

  const benefits = [
    'Ultra-low Latency (1ms)',
    'High Bandwidth (10 Gbps)',
    'Massive Device Connectivity',
    'Enhanced Mobile Broadband',
    'Reliable Communication',
    'Energy Efficient'
  ];

  const stats = [
    { number: '10x', label: 'Faster than 4G' },
    { number: '1ms', label: 'Ultra-low Latency' },
    { number: '1M+', label: 'Devices per km²' },
    { number: '10 Gbps', label: 'Peak Data Rate' }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions including network implementation, IoT connectivity, edge computing, and smart city applications. Transform your business with 5G technology." />
        <meta name="keywords" content="5G solutions, 5G network, IoT connectivity, edge computing, smart cities, autonomous vehicles, 5G implementation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                5G Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Unlock the full potential of 5G technology with our comprehensive solutions. 
                From network implementation to IoT connectivity, we help you harness the power of 5G.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get 5G Assessment
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5G Stats */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5G Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">5G Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive 5G solutions designed to transform your business and enable new possibilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fiveGServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-green-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                5G <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Use Cases</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how 5G technology can transform various industries and applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-slate-700 hover:border-green-500 transition-all duration-300 group">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-green-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                  <div className="space-y-1">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="text-sm text-gray-400">
                        • {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">5G Solutions</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 5G solutions deliver unmatched performance, reliability, and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors group">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-900/30 to-blue-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Embrace 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our 5G experts help you design and implement solutions that transform your business 
              and unlock new possibilities with next-generation connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your 5G Journey
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                See 5G in Action
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;