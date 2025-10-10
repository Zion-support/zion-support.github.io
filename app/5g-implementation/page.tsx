<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Wifi, Clock, Users, Shield, BarChart, ArrowRight, Phone, Mail } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: Zap,
      title: 'Ultra-Fast Speeds',
      description: 'Deploy 5G networks with speeds up to 10 Gbps for next-generation applications.',
      benefits: ['10 Gbps peak speeds', '1 Gbps average speeds', 'Low latency', 'High capacity']
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Comprehensive 5G network deployment across multiple countries and regions.',
      benefits: ['Multi-country deployment', 'Urban & rural coverage', 'Seamless roaming', 'Global standards']
    },
    {
      icon: Database,
      title: 'Network Slicing',
      description: 'Create virtual networks tailored for specific applications and use cases.',
      benefits: ['Custom network slices', 'QoS guarantees', 'Resource isolation', 'Flexible deployment']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced security features designed for 5G networks and IoT applications.',
      benefits: ['End-to-end encryption', 'Identity management', 'Threat detection', 'Privacy protection']
    }
  ];

  const useCases = [
    {
      title: 'Smart Cities',
      description: '5G-powered smart city infrastructure for traffic management and public services.',
      icon: Globe
    },
    {
      title: 'Industrial IoT',
      description: 'High-speed connectivity for manufacturing automation and industrial applications.',
      icon: Settings
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Ultra-low latency connectivity for autonomous vehicle communication and control.',
      icon: Smartphone
    },
    {
      title: 'AR/VR Applications',
      description: 'High-bandwidth 5G for immersive augmented and virtual reality experiences.',
      icon: Activity
    },
    {
      title: 'Telemedicine',
      description: 'Real-time medical consultations and remote surgery with 5G connectivity.',
      icon: BarChart
    },
    {
      title: 'Edge Computing',
      description: '5G edge computing for real-time data processing and decision making.',
      icon: Server
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Network Implementation - Zion Tech Group</title>
        <meta name="description" content="Complete 5G network implementation services including infrastructure deployment, network slicing, and IoT connectivity solutions." />
        <meta name="keywords" content="5G implementation, 5G networks, network deployment, IoT connectivity, smart cities, edge computing" />
        <link rel="canonical" href="https://ziontechgroup.com/5g-implementation" />
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
                <span>Next-Generation Networks</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text">
                5G Network
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  Implementation
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Deploy next-generation 5G networks with ultra-fast speeds, low latency, and massive connectivity. 
                Transform your infrastructure with cutting-edge 5G technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                  Get Started
                  <Zap className="w-4 h-4 ml-2" />
                </button>
                <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all">
                  View Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10 Gbps</div>
                <div className="text-gray-300">Peak Speeds</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">&lt; 1ms</div>
                <div className="text-gray-300">Ultra-Low Latency</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">1M+</div>
                <div className="text-gray-300">Devices per km²</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Reliability</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Advanced 5G Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 5G implementation provides the speed, capacity, and reliability for next-generation applications.
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
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                5G Use Cases & Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From smart cities to autonomous vehicles, 5G enables the next generation of connected applications.
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  5G Implementation Process
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our proven methodology ensures successful 5G network deployment and optimization.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Planning & Design</h3>
                  <p className="text-gray-300">Network architecture design and coverage planning</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Server className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Infrastructure</h3>
                  <p className="text-gray-300">Core network and RAN infrastructure deployment</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Testing & Optimization</h3>
                  <p className="text-gray-300">Performance testing and network optimization</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Launch & Support</h3>
                  <p className="text-gray-300">Network launch and ongoing support services</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Deploy 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the 5G revolution with our comprehensive implementation services. 
              Get ahead of the competition with next-generation connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                Start Planning
                <Zap className="w-4 h-4 ml-2" />
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all">
                Contact Experts
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGImplementationPage;
=======
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
import { Wifi, Zap, Globe, Shield, CheckCircle, ArrowRight, Phone, Mail, MapPin, Calendar, MessageSquare, Network, Cpu, Target, Award, Star, Brain, TrendingUp, Smartphone } from 'lucide-react';

export default function FiveGImplementationPage() {
  const services = [
    {
      icon: Wifi,
      title: '5G Network Design',
      description: 'Comprehensive 5G network architecture design and planning for optimal coverage and performance.',
      features: ['Network Planning', 'Coverage Analysis', 'Capacity Planning', 'Interference Management']
    },
    {
      icon: Zap,
      title: '5G Infrastructure',
      description: 'Deploy and manage 5G infrastructure including small cells, antennas, and core network components.',
      features: ['Small Cell Deployment', 'Antenna Installation', 'Core Network Setup', 'Backhaul Solutions']
    },
    {
      icon: Globe,
      title: '5G Optimization',
      description: 'Continuous optimization of 5G networks for maximum performance and efficiency.',
      features: ['Performance Tuning', 'Load Balancing', 'QoS Management', 'Network Monitoring']
=======
      icon: Wifi,
      title: '5G Network Design',
      description: 'Complete 5G network design and implementation with optimal coverage and performance.',
      benefits: ['Network planning', 'Coverage optimization', 'Performance tuning']
    },
    {
      icon: Zap,
      title: 'Ultra-Low Latency',
      description: 'Ultra-low latency 5G networks for real-time applications and mission-critical operations.',
      benefits: ['< 1ms latency', 'Real-time apps', 'Mission critical']
    },
    {
      icon: Clock,
      title: '24/7 Network Monitoring',
      description: 'Continuous monitoring of 5G network performance with real-time analytics and alerts.',
      benefits: ['Network monitoring', 'Performance analytics', 'Proactive maintenance']
    },
    {
      icon: Users,
      title: 'Scalable Infrastructure',
      description: 'Scalable 5G infrastructure that grows with your business needs and user demands.',
      benefits: ['Auto-scaling', 'Capacity planning', 'Future-proof design']
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
    },
    {
      icon: Shield,
      title: '5G Security',
<<<<<<< HEAD
      description: 'Comprehensive security solutions for 5G networks and connected devices.',
      features: ['Network Security', 'Device Security', 'Data Protection', 'Threat Detection']
    }
  ];

  const applications = [
    {
      title: 'Enhanced Mobile Broadband',
      description: 'Ultra-fast mobile internet with speeds up to 10 Gbps.',
      icon: '📱'
    },
    {
      title: 'Massive IoT',
      description: 'Connect millions of IoT devices with low power consumption.',
      icon: '🌐'
    },
    {
      title: 'Ultra-Reliable Low Latency',
      description: 'Mission-critical applications requiring < 1ms latency.',
      icon: '⚡'
    },
    {
      title: 'Smart Cities',
      description: '5G-powered smart city infrastructure and services.',
      icon: '🏙️'
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Vehicle-to-everything (V2X) communication for autonomous driving.',
      icon: '🚗'
    },
    {
      title: 'Industrial IoT',
      description: 'Smart manufacturing and industrial automation.',
      icon: '🏭'
    }
  ];

  const benefits = [
    {
      metric: '10 Gbps',
      label: 'Peak Speed',
      description: 'Ultra-fast data transfer speeds'
    },
    {
      metric: '< 1ms',
      label: 'Latency',
      description: 'Ultra-low latency for real-time applications'
    },
    {
      metric: '1M+',
      label: 'Devices/km²',
      description: 'Massive device connectivity density'
    },
    {
      metric: '99.999%',
      label: 'Reliability',
      description: 'Ultra-reliable network performance'
    }
  ];

  const technologies = [
    { name: 'mmWave', description: 'Millimeter wave spectrum for high-speed data', icon: '📡' },
    { name: 'Massive MIMO', description: 'Multiple input, multiple output antenna technology', icon: '📶' },
    { name: 'Network Slicing', description: 'Virtual network segments for different use cases', icon: '🔀' },
    { name: 'Edge Computing', description: 'Distributed computing at the network edge', icon: '⚡' },
    { name: 'NFV', description: 'Network Functions Virtualization', icon: '☁️' },
    { name: 'SDN', description: 'Software-Defined Networking', icon: '💻' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              5G Network Implementation
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Deploy next-generation 5G networks with ultra-fast speeds, ultra-low latency, 
              and massive connectivity for the future of mobile communications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Ultra-Fast</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Globe className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Global Coverage</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Secure</span>
              </div>
            </div>
=======
      description: 'Comprehensive security measures designed specifically for 5G networks and applications.',
      benefits: ['Network security', 'Data protection', 'Threat detection']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Advanced analytics and reporting for 5G network performance and optimization.',
      benefits: ['Performance insights', 'Usage analytics', 'Optimization recommendations']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            5G Network
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Implementation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Complete 5G network implementation services with ultra-low latency, high-speed connectivity, 
            and advanced features for modern applications and IoT ecosystems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              5G Implementation Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              End-to-end 5G network implementation and optimization services
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

      {/* Applications */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              5G Applications
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Revolutionary applications enabled by 5G technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-6 hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-4xl mb-4">{application.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{application.title}</h3>
                <p className="text-gray-300">{application.description}</p>
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
              5G Technologies
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies powering 5G networks
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
              5G Performance Benefits
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Key performance advantages of 5G networks
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
=======
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">5G Implementation Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive 5G network implementation designed for modern connectivity needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Deploy 5G?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let our 5G experts help you implement next-generation mobile networks.
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
<<<<<<< HEAD
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
}
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for 5G Implementation?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading organizations using our 5G implementation services for next-generation connectivity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FiveGImplementationPage;
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
