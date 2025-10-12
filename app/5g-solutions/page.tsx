import React from 'react'
import { Helmet } from 'react-helmet-async'
<<<<<<< HEAD
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
=======
import { Network, Zap, Shield, Globe, BarChart3, CheckCircle, Star, ArrowRight, Cpu, Satellite, Wifi, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'

const FiveGSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: <Network className="w-8 h-8 text-cyan-400" />,
      title: '5G Network Infrastructure',
      description: 'Complete 5G network design, deployment, and optimization for ultra-fast connectivity.',
      features: ['Network planning', 'Tower deployment', 'Signal optimization', 'Coverage mapping'],
      link: '/5g-network-infrastructure'
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-400" />,
      title: '5G IoT Solutions',
      description: 'Connect millions of devices with 5G-powered IoT infrastructure and management.',
      features: ['Device connectivity', 'Data management', 'Real-time monitoring', 'Edge computing'],
      link: '/5g-iot-solutions'
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: '5G Edge Computing',
      description: 'Deploy edge computing solutions that leverage 5G for ultra-low latency applications.',
      features: ['Edge servers', 'Latency optimization', 'Local processing', 'Real-time analytics'],
      link: '/5g-edge-computing'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: '5G Private Networks',
      description: 'Secure, dedicated 5G networks for enterprise and industrial applications.',
      features: ['Private infrastructure', 'Enhanced security', 'Custom configuration', 'Dedicated resources'],
>>>>>>> main
      link: '/5g-private-networks'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-400" />,
      title: '5G Mobile Applications',
<<<<<<< HEAD
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
=======
      description: 'Develop next-generation mobile apps that harness the power of 5G connectivity.',
      features: ['AR/VR apps', 'Real-time streaming', 'Cloud gaming', 'Instant sync'],
      link: '/5g-mobile-applications'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-pink-400" />,
      title: '5G Data Analytics',
      description: 'Advanced analytics platform for 5G network performance and user behavior insights.',
      features: ['Network analytics', 'User insights', 'Performance metrics', 'Predictive analysis'],
>>>>>>> main
      link: '/5g-data-analytics'
    }
  ]

<<<<<<< HEAD
  const fiveGBenefits = [
    {
      icon: <Zap className="w-6 h-6 text-green-400" />,
=======
  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
>>>>>>> main
      title: 'Ultra-Fast Speeds',
      description: 'Up to 100x faster than 4G with speeds reaching 10 Gbps'
    },
    {
<<<<<<< HEAD
      icon: <Timer className="w-6 h-6 text-blue-400" />,
      title: 'Ultra-Low Latency',
      description: 'Sub-1ms latency for real-time applications and IoT'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Massive Connectivity',
      description: 'Support for millions of devices per square kilometer'
=======
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      title: 'Massive Connectivity',
      description: 'Support for up to 1 million devices per square kilometer'
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: 'Ultra-Low Latency',
      description: 'Latency as low as 1ms for real-time applications'
>>>>>>> main
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: 'Enhanced Security',
<<<<<<< HEAD
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
=======
      description: 'Advanced encryption and security protocols built-in'
>>>>>>> main
    }
  ]

  const stats = [
<<<<<<< HEAD
    { number: '100x', label: 'Faster than 4G', icon: <Zap className="w-6 h-6 text-green-400" /> },
    { number: '<1ms', label: 'Ultra-Low Latency', icon: <Timer className="w-6 h-6 text-blue-400" /> },
    { number: '1M+', label: 'Devices per km²', icon: <Network className="w-6 h-6 text-purple-400" /> },
    { number: '99.9%', label: 'Reliability', icon: <Shield className="w-6 h-6 text-red-400" /> }
=======
    { number: '10 Gbps', label: 'Peak Speed', icon: <Zap className="w-6 h-6 text-cyan-400" /> },
    { number: '1ms', label: 'Latency', icon: <Cpu className="w-6 h-6 text-emerald-400" /> },
    { number: '1M+', label: 'Devices per km²', icon: <Network className="w-6 h-6 text-purple-400" /> },
    { number: '99.9%', label: 'Reliability', icon: <Shield className="w-6 h-6 text-orange-400" /> }
>>>>>>> main
  ]

  return (
    <>
      <Helmet>
<<<<<<< HEAD
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
=======
        <title>5G Solutions - Next-Generation Network Technology | Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge 5G solutions. Network infrastructure, IoT, edge computing, and mobile applications powered by 5G technology." />
        <meta name="keywords" content="5G solutions, 5G network, 5G infrastructure, 5G IoT, edge computing, mobile applications, network technology" />
        <link rel="canonical" href="https://ziontechgroup.com/5g-solutions" />
      </Helmet>

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Network className="w-4 h-4" />
              <span>5G Technology Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Next-Generation <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">5G Solutions</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge 5G technology. From network infrastructure 
              to IoT solutions, we deliver the future of connectivity today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">5G Technology?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of next-generation connectivity with our comprehensive 5G solutions.
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

        {/* Solutions Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">5G Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                From network infrastructure to mobile applications, we provide end-to-end 5G solutions 
                that transform your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
>>>>>>> main
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
<<<<<<< HEAD
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
=======
                    to={solution.link}
                    className="group/link flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Benefits</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Discover how 5G technology can revolutionize your business operations and customer experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Embrace the <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">5G Future?</span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your business with our comprehensive 5G solutions. From infrastructure 
                to applications, we deliver the future of connectivity today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/contact" 
                  className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Get Started</span>
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
        </section>
      </div>
    </>
  )
}

export default FiveGSolutionsPage
>>>>>>> main
