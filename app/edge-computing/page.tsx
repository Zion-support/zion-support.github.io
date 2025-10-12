'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Target, Lightbulb, Shield, Globe, Zap, Brain, Cpu, Rocket, CheckCircle, Star, Clock, TrendingUp, MessageCircle, Mail, Phone, MapPin, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, FileText, Package, DollarSign, Building, BarChart, PieChart, LineChart, Activity, Database, Server, Network } from 'lucide-react';

export default function EdgeComputingPage() {
  const edgeFeatures = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'Ultra-Low Latency',
      description: 'Process data at the edge for sub-millisecond response times and real-time decision making.',
      benefits: ['Sub-1ms Latency', 'Real-time Processing', 'Instant Response', 'Local Data Processing']
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: 'Enhanced Security',
      description: 'Keep sensitive data local with edge security and reduce attack surface.',
      benefits: ['Local Data Storage', 'Reduced Attack Surface', 'Edge Security', 'Data Privacy']
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: 'Global Distribution',
      description: 'Deploy edge nodes worldwide for optimal performance and reliability.',
      benefits: ['Global Coverage', 'Local Processing', 'Redundancy', 'High Availability']
    },
    {
      icon: <Cpu className="w-8 h-8 text-orange-400" />,
      title: 'AI at the Edge',
      description: 'Run AI models directly on edge devices for intelligent local processing.',
      benefits: ['Local AI Processing', 'Offline Capability', 'Reduced Bandwidth', 'Smart Devices']
    }
  ];

  const edgeSolutions = [
    {
      category: 'IoT Edge Computing',
      icon: <Wifi2 className="w-6 h-6 text-cyan-400" />,
      description: 'Process IoT data locally for real-time insights and reduced cloud dependency.',
      applications: ['Smart Cities', 'Industrial IoT', 'Connected Vehicles', 'Smart Agriculture']
    },
    {
      category: 'Content Delivery',
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      description: 'Deliver content from edge locations for faster loading and better user experience.',
      applications: ['Video Streaming', 'Web Content', 'Software Updates', 'Media Distribution']
    },
    {
      category: 'Real-time Analytics',
      icon: <Activity className="w-6 h-6 text-purple-400" />,
      description: 'Analyze data streams in real-time at the edge for immediate insights.',
      applications: ['Financial Trading', 'Gaming', 'Live Events', 'Manufacturing']
    },
    {
      category: 'Edge AI/ML',
      icon: <Brain className="w-6 h-6 text-orange-400" />,
      description: 'Deploy machine learning models at the edge for intelligent local processing.',
      applications: ['Computer Vision', 'Natural Language', 'Predictive Maintenance', 'Autonomous Systems']
    }
  ];

  const industries = [
    {
      name: 'Manufacturing',
      description: 'Real-time monitoring, predictive maintenance, and quality control at the edge.',
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      benefits: ['Predictive Maintenance', 'Quality Control', 'Real-time Monitoring', 'Process Optimization']
    },
    {
      name: 'Healthcare',
      description: 'Medical device processing, patient monitoring, and diagnostic AI at the edge.',
      icon: <Heart className="w-6 h-6 text-red-400" />,
      benefits: ['Patient Monitoring', 'Diagnostic AI', 'Medical Imaging', 'Emergency Response']
    },
    {
      name: 'Transportation',
      description: 'Connected vehicles, traffic management, and autonomous driving systems.',
      icon: <Car className="w-6 h-6 text-green-400" />,
      benefits: ['Autonomous Vehicles', 'Traffic Management', 'Fleet Optimization', 'Safety Systems']
    },
    {
      name: 'Retail',
      description: 'Smart stores, inventory management, and personalized customer experiences.',
      icon: <Package className="w-6 h-6 text-purple-400" />,
      benefits: ['Smart Stores', 'Inventory Management', 'Customer Analytics', 'Checkout Automation']
    }
  ];

  const stats = [
    { number: '50+', label: 'Edge Locations', icon: <Globe className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Clock className="w-6 h-6 text-emerald-400" /> },
    { number: '<1ms', label: 'Average Latency', icon: <Zap className="w-6 h-6 text-blue-400" /> },
    { number: '1000+', label: 'Edge Devices', icon: <Cpu className="w-6 h-6 text-purple-400" /> }
  ];

  const edgeArchitecture = [
    {
      layer: 'Edge Devices',
      description: 'IoT sensors, cameras, and smart devices that collect and process data locally.',
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      technologies: ['Raspberry Pi', 'NVIDIA Jetson', 'Intel NUC', 'Custom Hardware']
    },
    {
      layer: 'Edge Gateways',
      description: 'Local processing units that aggregate and preprocess data from multiple devices.',
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      technologies: ['Kubernetes', 'Docker', 'EdgeX Foundry', 'Azure IoT Edge']
    },
    {
      layer: 'Edge Data Centers',
      description: 'Regional data centers that provide compute and storage closer to users.',
      icon: <Database className="w-6 h-6 text-purple-400" />,
      technologies: ['AWS Wavelength', 'Azure Edge Zones', 'Google Cloud Edge', 'Private Edge']
    },
    {
      layer: 'Cloud Integration',
      description: 'Seamless integration with cloud services for hybrid edge-cloud architectures.',
      icon: <Cloud className="w-6 h-6 text-orange-400" />,
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Multi-Cloud']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Edge Computing - Zion Tech Group | Ultra-Low Latency Processing & AI at the Edge</title>
        <meta name="description" content="Deploy AI and processing power at the edge for ultra-low latency, enhanced security, and real-time decision making. Global edge computing solutions for modern applications." />
        <meta name="keywords" content="edge computing, edge AI, low latency, IoT processing, real-time analytics, edge infrastructure, distributed computing" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Zion Tech Group" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Edge Computing - Zion Tech Group | Ultra-Low Latency Processing & AI at the Edge" />
        <meta property="og:description" content="Deploy AI and processing power at the edge for ultra-low latency, enhanced security, and real-time decision making. Global edge computing solutions for modern applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/edge-computing" />
        <meta property="og:image" content="https://ziontechgroup.com/edge-computing-og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Edge Computing - Zion Tech Group | Ultra-Low Latency Processing & AI at the Edge" />
        <meta name="twitter:description" content="Deploy AI and processing power at the edge for ultra-low latency, enhanced security, and real-time decision making. Global edge computing solutions for modern applications." />
        <meta name="twitter:image" content="https://ziontechgroup.com/edge-computing-twitter-image.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Cpu className="w-4 h-4" />
              <span>Edge Computing</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Process Data at the
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Edge of Possibility
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Ultra-low latency edge computing solutions that bring AI and processing power 
              closer to your data sources for real-time decision making and enhanced performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Deploy Edge Solution
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                View Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Global <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Edge Network</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our distributed edge infrastructure delivers unmatched performance worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Edge Computing <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Advantages</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Why edge computing is the future of distributed processing and real-time applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {edgeFeatures.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Edge <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Architecture</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Multi-layered edge architecture designed for scalability, reliability, and performance.
              </p>
            </div>
            
            <div className="space-y-8">
              {edgeArchitecture.map((layer, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                      {layer.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-white mb-3">{layer.layer}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {layer.description}
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                      {layer.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Edge <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive edge computing solutions for various applications and use cases.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {edgeSolutions.map((solution, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {solution.category}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Applications:</h4>
                    <ul className="space-y-1">
                      {solution.applications.map((app, appIndex) => (
                        <li key={appIndex} className="text-xs text-gray-400 flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Applications</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Edge computing solutions tailored for specific industry requirements and challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-xs text-gray-400 flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Ready to Deploy <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Edge Computing?</span>
                  </h2>
                  
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                    Bring processing power closer to your data sources with our comprehensive 
                    edge computing solutions. Experience ultra-low latency and enhanced performance.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link 
                      to="/contact" 
                      className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span>Deploy Edge Solution</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      to="/demo" 
                      className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <span>View Demo</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}