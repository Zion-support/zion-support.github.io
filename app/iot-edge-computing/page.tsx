import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Cpu, Wifi, Database, Shield, Globe, Clock, DollarSign, Star, Target, Award, Users, BarChart3, Zap, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const IoTEdgeComputingPage: React.FC = () => {
  const iotServices = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: 'Edge Computing Infrastructure',
      description: 'Deploy and manage edge computing infrastructure for IoT applications.',
      price: '$15,000/project',
      features: ['Edge servers', 'Data processing', 'Real-time analytics', 'Low latency']
    },
    {
      icon: <Wifi className="w-8 h-8 text-green-500" />,
      title: 'IoT Device Management',
      description: 'Comprehensive IoT device management and monitoring solutions.',
      price: '$8,000/project',
      features: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Security management']
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Processing & Analytics',
      description: 'Real-time data processing and analytics for IoT applications.',
      price: '$12,000/project',
      features: ['Stream processing', 'Machine learning', 'Predictive analytics', 'Data visualization']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'IoT Security',
      description: 'Comprehensive security solutions for IoT and edge computing.',
      price: '$10,000/project',
      features: ['Device authentication', 'Data encryption', 'Network security', 'Threat detection']
    }
  ];

  const stats = [
    { number: '1000+', label: 'IoT Devices Managed', icon: <Cpu className="w-6 h-6 text-blue-400" /> },
    { number: '50ms', label: 'Average Latency', icon: <Zap className="w-6 h-6 text-green-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Monitoring', icon: <Clock className="w-6 h-6 text-orange-400" /> }
  ];

  const technologies = [
    { name: 'Edge Platforms', items: ['AWS IoT Greengrass', 'Azure IoT Edge', 'Google Cloud IoT', 'Kubernetes'] },
    { name: 'Protocols', items: ['MQTT', 'CoAP', 'HTTP/2', 'WebSocket'] },
    { name: 'Hardware', items: ['Raspberry Pi', 'Arduino', 'Industrial PCs', 'Gateways'] },
    { name: 'Analytics', items: ['Apache Kafka', 'Apache Spark', 'TensorFlow Lite', 'InfluxDB'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IoT & Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Advanced IoT and edge computing solutions including device management, data processing, and real-time analytics. Transform your business with connected technology." />
        <meta name="keywords" content="IoT solutions, edge computing, device management, data processing, real-time analytics, connected technology" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                IoT & Edge Computing
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Advanced IoT and edge computing solutions for connected devices and real-time processing. 
              Transform your business with intelligent edge infrastructure and data analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">IoT & Edge Computing Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive solutions for IoT and edge computing applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {iotServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="mr-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                      <p className="text-gray-300 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="w-full block text-center py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Technologies We Use</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Cutting-edge technologies for IoT and edge computing solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">{tech.name}</h3>
                <div className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-gray-300 text-sm flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Connect Your Devices?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how IoT and edge computing can transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IoTEdgeComputingPage;