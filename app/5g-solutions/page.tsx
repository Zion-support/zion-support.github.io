import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Network, Wifi, Smartphone, Database, Cpu, Satellite, 
  CheckCircle, ArrowRight, Sparkles, Layers, Award, 
  Lightbulb, Monitor, Server, CircuitBoard, Atom, 
  Zap, Target, Users, DollarSign, Phone, Mail, 
  MapPin, Calendar, Timer, Globe, TrendingUp, Star,
  BarChart3, PieChart, LineChart, Activity, Search, 
  Filter, Download, Upload, Share, MessageCircle, Shield
} from 'lucide-react'

export default function FiveGSolutionsPage() {
  const fiveGServices = [
    {
      icon: <Network className="w-8 h-8 text-green-400" />,
      title: '5G Network Infrastructure',
      description: 'Complete 5G network design, deployment, and optimization for ultra-fast connectivity.',
      price: 'Starting at $50,000',
      features: ['Network design', 'Tower deployment', 'Signal optimization', 'Coverage mapping'],
      link: '/5g-network-infrastructure'
    },
    {
      icon: <Wifi className="w-8 h-8 text-emerald-400" />,
      title: '5G IoT Solutions',
      description: 'Connect and manage millions of IoT devices with 5G-powered edge computing.',
      price: 'Starting at $15,000',
      features: ['Device management', 'Real-time monitoring', 'Edge computing', 'Data analytics'],
      link: '/5g-iot-solutions'
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      title: '5G Edge Computing',
      description: 'Deploy edge computing solutions that leverage 5G for ultra-low latency applications.',
      price: 'Starting at $25,000',
      features: ['Edge deployment', 'Low latency', 'Real-time processing', 'Cloud integration'],
      link: '/5g-edge-computing'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: '5G Private Networks',
      description: 'Secure private 5G networks for enterprise and industrial applications.',
      price: 'Starting at $30,000',
      features: ['Private infrastructure', 'Enhanced security', 'Custom configuration', 'Dedicated support'],
      link: '/5g-private-networks'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-400" />,
      title: '5G Mobile Applications',
      description: 'Next-generation mobile apps that harness the power of 5G connectivity.',
      price: 'Starting at $20,000',
      features: ['5G-optimized apps', 'Real-time streaming', 'AR/VR support', 'Cloud integration'],
      link: '/5g-mobile-applications'
    },
    {
      icon: <Database className="w-8 h-8 text-pink-400" />,
      title: '5G Data Analytics',
      description: 'Advanced analytics platform for 5G network performance and user behavior.',
      price: 'Starting at $10,000',
      features: ['Network analytics', 'User insights', 'Performance monitoring', 'Predictive maintenance'],
      link: '/5g-data-analytics'
    }
  ]

  const fiveGBenefits = [
    {
      icon: <Zap className="w-6 h-6 text-green-400" />,
      title: 'Ultra-Fast Speeds',
      description: 'Up to 100x faster than 4G with speeds reaching 10 Gbps'
    },
    {
      icon: <Timer className="w-6 h-6 text-blue-400" />,
      title: 'Ultra-Low Latency',
      description: 'Sub-1ms latency for real-time applications and IoT'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Massive Connectivity',
      description: 'Support for millions of devices per square kilometer'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: 'Enhanced Security',
      description: 'Advanced encryption and network slicing for secure communications'
    },
    {
      icon: <Cpu className="w-6 h-6 text-orange-400" />,
      title: 'Edge Computing',
      description: 'Distributed computing at the network edge for faster processing'
    },
    {
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      title: 'Global Coverage',
      description: 'Worldwide 5G network deployment and roaming support'
    }
  ]

  const stats = [
    { number: '100x', label: 'Faster than 4G', icon: <Zap className="w-6 h-6 text-green-400" /> },
    { number: '<1ms', label: 'Ultra-Low Latency', icon: <Timer className="w-6 h-6 text-blue-400" /> },
    { number: '1M+', label: 'Devices per km²', icon: <Network className="w-6 h-6 text-purple-400" /> },
    { number: '99.9%', label: 'Reliability', icon: <Shield className="w-6 h-6 text-red-400" /> }
  ]

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group | Next-Generation Network Infrastructure</title>
        <meta name="description" content="Complete 5G network solutions including infrastructure, IoT, edge computing, and mobile applications. Transform your business with ultra-fast connectivity." />
        <meta name="keywords" content="5G solutions, 5G network, 5G infrastructure, IoT, edge computing, mobile applications, network deployment, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/5g-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-green-400/30">
            <Network className="w-4 h-4" />
            <span>Next-Generation 5G</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              5G Solutions
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your business with ultra-fast 5G connectivity, edge computing, and IoT solutions. 
            Experience the future of wireless technology today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-green-500 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/demo" 
              className="group border-2 border-green-400 text-green-400 px-10 py-4 rounded-xl font-semibold hover:bg-green-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>View Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" />
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

      {/* 5G Services Grid */}
      <section className="py-20 px-4 relative">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">5G Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Complete 5G infrastructure and application solutions for the next generation of connectivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fiveGServices.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-4">
                  <div className="text-green-400 font-semibold text-lg">
                    {service.price}
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={service.link}
                    className="block w-full mt-6 bg-gradient-to-r from-green-500 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/25"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5G Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-green-900/50 relative">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">5G?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Experience the transformative power of 5G technology with our comprehensive solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fiveGBenefits.map((benefit, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">Connect</span> the Future?
                </h2>
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Let's discuss how 5G technology can transform your business operations and unlock new possibilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Start Your 5G Journey</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  >
                    <span>View Pricing</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}