'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, Wifi, Zap, Shield, Brain, Globe, Database, Target, Users, BarChart, Settings, Lock, Cloud, Code, FileText, MessageSquare, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, TrendingUp, Calendar, CheckSquare, Award, Rocket, Layers, BarChart3, Headphones, Smartphone, HardDrive, Printer, Router } from 'lucide-react';

const IotDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'IoT Device Integration',
      description: 'Seamless connectivity and data collection from various IoT devices'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud platforms for IoT data processing and storage'
    },
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Intelligent data analysis and predictive insights from IoT sensors'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'End-to-end security for IoT devices and data transmission'
    }
  ];

  const services = [
    {
      icon: Wifi,
      title: 'Smart Home Solutions',
      description: 'Complete smart home automation with AI-powered control and monitoring',
      price: '$8,000/project',
      marketPrice: '$15,000-30,000/project',
      features: [
        'Smart lighting and climate control',
        'Security and surveillance systems',
        'Energy monitoring and optimization',
        'Voice control integration',
        'Mobile app development',
        'Predictive maintenance alerts'
      ],
      benefits: [
        'Enhanced comfort and convenience',
        'Reduced energy consumption',
        'Improved security and safety',
        'Remote monitoring and control'
      ],
      category: 'Smart Home',
      popular: true
    },
    {
      icon: Factory,
      title: 'Industrial IoT (IIoT)',
      description: 'Smart manufacturing and industrial automation solutions',
      price: '$25,000/project',
      marketPrice: '$50,000-100,000/project',
      features: [
        'Equipment monitoring and maintenance',
        'Production line optimization',
        'Quality control automation',
        'Predictive maintenance systems',
        'Real-time data analytics',
        'Integration with ERP systems'
      ],
      benefits: [
        'Increased operational efficiency',
        'Reduced downtime and maintenance costs',
        'Improved product quality',
        'Data-driven decision making'
      ],
      category: 'Industrial',
      popular: true
    },
    {
      icon: Heart,
      title: 'Healthcare IoT',
      description: 'Medical device integration and patient monitoring systems',
      price: '$20,000/project',
      marketPrice: '$40,000-80,000/project',
      features: [
        'Patient monitoring devices',
        'Medical equipment integration',
        'Health data analytics',
        'Emergency alert systems',
        'HIPAA-compliant data handling',
        'Telemedicine platform integration'
      ],
      benefits: [
        'Improved patient outcomes',
        'Remote patient monitoring',
        'Reduced healthcare costs',
        'Enhanced care coordination'
      ],
      category: 'Healthcare',
      popular: false
    },
    {
      icon: Car,
      title: 'Connected Vehicles',
      description: 'Vehicle telematics and fleet management solutions',
      price: '$15,000/project',
      marketPrice: '$30,000-60,000/project',
      features: [
        'Vehicle tracking and monitoring',
        'Driver behavior analysis',
        'Fuel efficiency optimization',
        'Maintenance scheduling',
        'Route optimization',
        'Fleet management dashboard'
      ],
      benefits: [
        'Reduced fuel costs',
        'Improved driver safety',
        'Optimized fleet operations',
        'Real-time vehicle diagnostics'
      ],
      category: 'Transportation',
      popular: true
    },
    {
      icon: Building,
      title: 'Smart Building Management',
      description: 'Intelligent building automation and energy management',
      price: '$18,000/project',
      marketPrice: '$35,000-70,000/project',
      features: [
        'HVAC and lighting control',
        'Occupancy monitoring',
        'Energy consumption tracking',
        'Access control systems',
        'Environmental monitoring',
        'Maintenance automation'
      ],
      benefits: [
        'Significant energy savings',
        'Improved occupant comfort',
        'Reduced operational costs',
        'Sustainable building operations'
      ],
      category: 'Smart Buildings',
      popular: false
    },
    {
      icon: Globe,
      title: 'Smart City Solutions',
      description: 'Urban IoT infrastructure for smart city initiatives',
      price: '$50,000/project',
      marketPrice: '$100,000-200,000/project',
      features: [
        'Traffic management systems',
        'Environmental monitoring',
        'Public safety solutions',
        'Waste management optimization',
        'Smart street lighting',
        'Citizen engagement platforms'
      ],
      benefits: [
        'Improved urban efficiency',
        'Enhanced citizen services',
        'Reduced environmental impact',
        'Data-driven city planning'
      ],
      category: 'Smart Cities',
      popular: false
    }
  ];

  const benefits = [
    'Real-time data collection and analysis from connected devices',
    'Automated processes and intelligent decision making',
    'Reduced operational costs through predictive maintenance',
    'Enhanced safety and security monitoring',
    'Scalable cloud infrastructure for growing IoT networks',
    'Integration with existing business systems and workflows',
    'Comprehensive security and data privacy protection',
    '24/7 monitoring and technical support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IoT Development Services | Zion Tech Group</title>
        <meta name="description" content="Professional IoT development services for smart homes, industrial automation, healthcare, and smart cities. Connect and optimize your devices." />
        <meta name="keywords" content="IoT development, smart home, industrial IoT, healthcare IoT, connected vehicles, smart buildings, IoT solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                IoT Development
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect and optimize your world with our comprehensive IoT development services. 
              From smart homes to industrial automation, we build intelligent connected solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Get IoT Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IoT Development Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IoT solutions connect devices, collect data, and provide intelligent insights for better decision making.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IoT Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IoT solutions across multiple industries and use cases.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 font-semibold">Our Price:</span>
                    <span className="text-white font-bold">{service.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Market Price:</span>
                    <span className="text-gray-300 text-sm line-through">{service.marketPrice}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <a 
                    href="/contact"
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                  <a 
                    href="/contact"
                    className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IoT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with IoT experts who understand connectivity, data, and intelligent automation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Connect Your World?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our IoT development experts to discuss your connected device requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IotDevelopmentPage;