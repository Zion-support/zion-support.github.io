import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Wifi, 
  Zap, 
  Globe, 
  Smartphone, 
  CheckCircle, 
  AlertTriangle,
  Database,
  Cloud,
  Activity,
  Settings,
  BarChart,
  Shield,
  Network,
  Server
} from 'lucide-react';
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Wifi, Clock, Users, Shield, BarChart, ArrowRight, Phone, Mail } from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Wifi, 
  Cpu, 
  Globe, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Smartphone,
  Activity,
  Settings,
  Monitor,
  Database,
  Network,
  Zap,
  Cloud,
  Radio
} from 'lucide-react';

const IoTPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Device Connectivity',
      description: 'Connect and manage millions of IoT devices with our scalable connectivity platform.',
      benefits: ['Multi-protocol support', 'Device management', 'Remote provisioning', 'OTA updates']
    },
    {
      icon: Database,
      title: 'Data Processing',
      description: 'Real-time data ingestion, processing, and analytics for IoT applications.',
      benefits: ['Stream processing', 'Data normalization', 'Real-time analytics', 'Historical analysis']
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamless integration with cloud platforms and enterprise systems.',
      benefits: ['Cloud-native architecture', 'Auto-scaling', 'Global deployment', 'API integration']
      icon: Globe,
      title: 'Device Management',
      description: 'Comprehensive IoT device management platform that handles millions of connected devices with ease.',
      benefits: ['Device provisioning', 'Remote monitoring', 'Firmware updates', 'Device analytics']
    },
    {
      icon: Cpu,
      title: 'Edge Processing',
      description: 'Process data at the edge for real-time insights and reduced latency in IoT applications.',
      benefits: ['Local data processing', 'Real-time analytics', 'Reduced latency', 'Offline capability']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'End-to-end security for IoT devices, data, and communications.',
      benefits: ['Device authentication', 'Data encryption', 'Access control', 'Compliance ready']
    }
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Industrial IoT solutions for predictive maintenance and process optimization.',
      icon: Settings
    },
    {
      title: 'Smart Cities',
      description: 'Urban IoT infrastructure for traffic management and environmental monitoring.',
      icon: Globe
    },
    {
      title: 'Agriculture',
      description: 'Precision farming with IoT sensors for crop monitoring and irrigation control.',
      icon: Activity
    },
    {
      title: 'Healthcare',
      description: 'Medical IoT devices for patient monitoring and remote healthcare delivery.',
      icon: Smartphone
    },
    {
      title: 'Energy Management',
      description: 'Smart grid and energy monitoring solutions for utilities and consumers.',
      icon: BarChart
    },
    {
      title: 'Fleet Management',
      description: 'Vehicle tracking and management solutions for transportation companies.',
      icon: Network
    }
      description: 'End-to-end security for IoT devices and data with industry-standard encryption and protocols.',
      benefits: ['Device authentication', 'Data encryption', 'Secure communication', 'Compliance support']
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Advanced analytics and machine learning capabilities to extract insights from IoT data streams.',
      benefits: ['Real-time analytics', 'Predictive maintenance', 'Pattern recognition', 'Business intelligence']
    }
  ];

  const solutions = [
    'Smart Manufacturing',
    'Connected Vehicles',
    'Smart Buildings',
    'Agricultural Monitoring',
    'Healthcare Devices',
    'Energy Management',
    'Supply Chain Tracking',
    'Environmental Monitoring',
    'Retail Analytics',
    'Smart Cities',
    'Asset Tracking',
    'Predictive Maintenance'
  ];

  const capabilities = [
    'Device connectivity and management',
    'Real-time data processing',
    'Edge computing integration',
    'Cloud platform integration',
    'API and SDK development',
    'Custom dashboard creation',
    'Alert and notification systems',
    'Data visualization tools'
  ];

  return (
    <>
      <Helmet>
        <title>IoT Platform Development - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IoT platform development services including device connectivity, data processing, and cloud integration for smart applications." />
        <meta name="keywords" content="IoT platform, IoT development, smart devices, IoT connectivity, industrial IoT, smart cities" />
        <link rel="canonical" href="https://ziontechgroup.com/iot-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Wifi className="w-4 h-4" />
                <span>Connected World Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text">
                IoT Platform
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  Development
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Build comprehensive IoT platforms that connect, manage, and analyze data from millions of devices. 
                From smart cities to industrial automation, we create the foundation for connected solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                  Get Started
                  <Zap className="w-4 h-4 ml-2" />
                </button>
                <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all">
                  View Demo
        <meta name="description" content="Comprehensive IoT platform development services for connected devices, edge computing, and smart solutions. Scale your IoT infrastructure." />
        <meta name="keywords" content="IoT platform, connected devices, edge computing, smart solutions, device management, IoT analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(20,184,166,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2 mb-6">
                <Wifi className="w-5 h-5 text-teal-400" />
                <span className="text-teal-300 text-sm font-medium">IoT Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Comprehensive
                <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  IoT Platform
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Build, deploy, and scale IoT solutions with our comprehensive platform that handles 
                device management, data processing, and analytics at enterprise scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 inline-flex items-center">
                  Start IoT Platform Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-teal-400 text-teal-300 hover:bg-teal-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View IoT Solutions
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10M+</div>
                <div className="text-gray-300">Devices Supported</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">50+</div>
                <div className="text-gray-300">Protocols Supported</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">Global</div>
                <div className="text-gray-300">Cloud Coverage</div>
              </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-400 mb-2">1M+</div>
                <div className="text-gray-300">Devices Supported</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Platform Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Protocols Supported</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Comprehensive IoT Platform
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IoT platform provides everything you need to build, deploy, and scale connected applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                IoT Platform Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive IoT platform provides everything you need to build, deploy, 
                and manage connected device solutions at scale.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        {/* Solutions Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                IoT Use Cases & Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From smart manufacturing to connected cities, our IoT platform powers the future of connectivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                IoT Solutions & Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IoT platform powers a wide range of connected device solutions across 
                industries and use cases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-lg p-6 hover:border-teal-500/50 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center">
                      <Radio className="w-4 h-4 text-teal-400" />
                    </div>
                    <span className="text-white font-medium">{solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Architecture */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  IoT Platform Architecture
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our scalable, cloud-native architecture ensures reliable IoT operations at any scale.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Device Layer</h3>
                  <p className="text-gray-300">IoT devices, sensors, and edge gateways</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Network className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Connectivity</h3>
                  <p className="text-gray-300">Multi-protocol connectivity and device management</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Data Processing</h3>
                  <p className="text-gray-300">Real-time data ingestion, processing, and analytics</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Applications</h3>
                  <p className="text-gray-300">Business applications and user interfaces</p>
                </div>
              </div>
        {/* Capabilities Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Platform Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IoT platform provides comprehensive capabilities for building and managing 
                connected device solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{capability}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your IoT Platform?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already using our IoT platform to create 
              innovative connected solutions and drive digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                Start Building
                <Zap className="w-4 h-4 ml-2" />
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all">
                Contact Experts
              Transform your business with comprehensive IoT solutions and connected device management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 inline-flex items-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-teal-400 text-teal-300 hover:bg-teal-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IoTPlatformPage;
import { Wifi, Cpu, Database, Shield, CheckCircle, ArrowRight, Phone, Mail, MapPin, Calendar, MessageSquare, Network, Zap, Target, Award, Star, Brain, TrendingUp, Smartphone, Globe } from 'lucide-react';

export default function IoTPlatformPage() {
  const services = [
    {
      icon: Wifi,
      title: 'IoT Device Management',
      description: 'Comprehensive platform for managing and monitoring IoT devices at scale.',
      features: ['Device Provisioning', 'Remote Management', 'Firmware Updates', 'Health Monitoring']
    },
    {
      icon: Cpu,
      title: 'Data Processing',
      description: 'Real-time data processing and analytics for IoT sensor data.',
      features: ['Stream Processing', 'Data Analytics', 'Machine Learning', 'Predictive Maintenance']
    },
    {
      icon: Database,
      title: 'Data Storage',
      description: 'Scalable data storage solutions for massive IoT data volumes.',
      features: ['Time Series DB', 'Data Lake', 'Data Warehousing', 'Data Archiving']
      title: 'Device Management',
      description: 'Comprehensive IoT device management with remote monitoring, updates, and configuration.',
      benefits: ['Remote monitoring', 'OTA updates', 'Device configuration']
    },
    {
      icon: Zap,
      title: 'Real-time Data Processing',
      description: 'Process IoT data in real-time with edge computing and cloud analytics capabilities.',
      benefits: ['Real-time processing', 'Edge computing', 'Cloud analytics']
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of IoT devices and networks with instant alerts and notifications.',
      benefits: ['Always-on monitoring', 'Instant alerts', 'Network health']
    },
    {
      icon: Users,
      title: 'Scalable Infrastructure',
      description: 'Easily scale your IoT platform as your device fleet grows with millions of connected devices.',
      benefits: ['Auto-scaling', 'Device onboarding', 'Fleet management']
    },
    {
      icon: Shield,
      title: 'IoT Security',
      description: 'End-to-end security solutions for IoT devices and data.',
      features: ['Device Authentication', 'Data Encryption', 'Network Security', 'Threat Detection']
    }
  ];

  const industries = [
    {
      title: 'Smart Manufacturing',
      description: 'Industrial IoT solutions for smart factories and production lines.',
      icon: '🏭'
    },
    {
      title: 'Smart Cities',
      description: 'Urban IoT infrastructure for traffic, utilities, and public services.',
      icon: '🏙️'
    },
    {
      title: 'Agriculture',
      description: 'Precision agriculture with IoT sensors and automated systems.',
      icon: '🌾'
    },
    {
      title: 'Healthcare',
      description: 'Medical IoT devices for patient monitoring and care.',
      icon: '🏥'
    },
    {
      title: 'Energy',
      description: 'Smart grid and energy management IoT solutions.',
      icon: '⚡'
    },
    {
      title: 'Transportation',
      description: 'Fleet management and smart transportation systems.',
      icon: '🚛'
    }
  ];

  const benefits = [
    {
      metric: '10M+',
      label: 'Devices',
      description: 'Support for massive device connectivity'
    },
    {
      metric: '99.9%',
      label: 'Uptime',
      description: 'High availability IoT platform'
    },
    {
      metric: '50%',
      label: 'Cost Reduction',
      description: 'Reduced operational costs through automation'
    },
    {
      metric: 'Real-time',
      label: 'Processing',
      description: 'Real-time data processing and analytics'
    }
  ];

  const technologies = [
    { name: 'MQTT', description: 'Lightweight messaging protocol for IoT', icon: '📡' },
    { name: 'CoAP', description: 'Constrained Application Protocol', icon: '🔗' },
    { name: 'LoRaWAN', description: 'Long Range Wide Area Network', icon: '📶' },
    { name: 'Edge Computing', description: 'Distributed processing at the edge', icon: '⚡' },
    { name: 'Time Series DB', description: 'Optimized database for IoT data', icon: '📊' },
    { name: 'Machine Learning', description: 'AI-powered IoT analytics', icon: '🧠' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              IoT Platform Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IoT platform for connecting, managing, and analyzing 
              millions of devices with real-time data processing and intelligent insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Wifi className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Massive Scale</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Real-time</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Secure</span>
              </div>
            </div>
      description: 'Comprehensive security measures designed specifically for IoT environments and devices.',
      benefits: ['Device security', 'Data encryption', 'Access controls']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Advanced analytics and insights from your IoT data to optimize operations and performance.',
      benefits: ['Data analytics', 'Predictive insights', 'Performance optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(249,115,22,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            IoT Platform
            <span className="block bg-gradient-to-r from-orange-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IoT platform for connecting, managing, and analyzing millions of devices. 
            Built for smart cities, industrial IoT, and connected device ecosystems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              IoT Platform Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              End-to-end IoT platform solutions for device management and data processing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center group hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              IoT solutions across various industries and use cases
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-6 hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              IoT Technologies
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Advanced technologies powering our IoT platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:bg-slate-700/50 transition-all duration-300">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              IoT Platform Benefits
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Key advantages of our IoT platform solutions
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-xl font-bold text-white mb-2">
                  {benefit.label}
                </div>
                <div className="text-gray-300 text-sm">
                  {benefit.description}
                </div>
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">IoT Platform Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IoT platform designed for modern connected device ecosystems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-orange-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build Your IoT Platform?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let our IoT experts help you build a scalable, secure platform for your connected devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your IoT Platform?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading organizations using our IoT platform to connect and manage millions of devices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IoTPlatformPage;
export default IoTPlatformPage;
