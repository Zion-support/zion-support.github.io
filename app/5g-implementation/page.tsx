import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Network, Wifi2, Signal, Cpu, Zap, Globe, Shield, CheckCircle, Star, Clock, DollarSign, Users, TrendingUp, Brain, Rocket, Target, Award, Lightbulb, Monitor, Server, CircuitBoard, Atom, Satellite, Wrench, BarChart, PieChart, LineChart, Activity, Eye, Search, Filter, Download, Upload, Share, MessageCircle, Calendar, Timer, Battery, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10, FileText, Package, Mail, Phone, MapPin } from 'lucide-react'

const FiveGImplementationPage: React.FC = () => {
  const services = [
    {
      icon: <Network className="w-8 h-8 text-cyan-400" />,
      title: '5G Network Infrastructure',
      description: 'Design and deploy cutting-edge 5G networks with ultra-low latency and massive connectivity for enterprise applications.',
      price: 'Starting at $15,000/month',
      features: ['Ultra-low latency (1ms)', 'Massive IoT connectivity', 'Network slicing', 'Edge computing integration', '99.99% uptime', 'Real-time monitoring'],
      link: '/5g-network-infrastructure'
    },
    {
      icon: <Wifi2 className="w-8 h-8 text-emerald-400" />,
      title: '5G Private Networks',
      description: 'Deploy dedicated 5G private networks for industrial applications with enhanced security and performance.',
      price: 'Starting at $25,000/month',
      features: ['Dedicated spectrum', 'Enhanced security', 'Custom configurations', 'Industrial IoT support', 'Low latency guarantee', '24/7 support'],
      link: '/5g-private-networks'
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: '5G Edge Computing',
      description: 'Implement edge computing solutions that bring processing power closer to data sources for real-time applications.',
      price: 'Starting at $8,500/month',
      features: ['Edge data processing', 'Real-time analytics', 'Reduced latency', 'Bandwidth optimization', 'Local data storage', 'AI inference'],
      link: '/5g-edge-computing'
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-400" />,
      title: '5G IoT Solutions',
      description: 'Connect millions of IoT devices with 5G technology for smart cities, industrial automation, and connected vehicles.',
      price: 'Starting at $12,000/month',
      features: ['Massive device connectivity', 'Smart city solutions', 'Industrial automation', 'Connected vehicles', 'Sensor networks', 'Data analytics'],
      link: '/5g-iot-solutions'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-400" />,
      title: '5G Mobile Applications',
      description: 'Develop next-generation mobile applications that leverage 5G capabilities for enhanced user experiences.',
      price: 'Starting at $15,000/project',
      features: ['AR/VR applications', 'Real-time streaming', 'Cloud gaming', 'Enhanced mobile apps', 'IoT integration', 'Performance optimization'],
      link: '/5g-mobile-applications'
    },
    {
      icon: <BarChart className="w-8 h-8 text-yellow-400" />,
      title: '5G Data Analytics',
      description: 'Harness 5G data streams for real-time analytics, predictive insights, and intelligent decision-making.',
      price: 'Starting at $6,500/month',
      features: ['Real-time analytics', 'Predictive modeling', 'Data visualization', 'Machine learning', 'Performance monitoring', 'Business intelligence'],
      link: '/5g-data-analytics'
    }
  ]

  const fiveGFeatures = [
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: 'Ultra-Low Latency',
      description: 'Achieve sub-millisecond latency for mission-critical applications.',
      benefits: ['1ms latency', 'Real-time control', 'Instant response', 'Critical applications'],
      link: '/5g-latency-optimization'
    },
    {
      icon: <Signal className="w-6 h-6 text-emerald-400" />,
      title: 'Enhanced Mobile Broadband',
      description: 'Deliver gigabit speeds and massive capacity for high-bandwidth applications.',
      benefits: ['10 Gbps speeds', '4K/8K streaming', 'Cloud computing', 'High-density areas'],
      link: '/5g-broadband'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Network Slicing',
      description: 'Create virtual networks tailored for specific applications and requirements.',
      benefits: ['Custom networks', 'QoS guarantees', 'Resource isolation', 'Flexible deployment'],
      link: '/5g-network-slicing'
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-400" />,
      title: 'Massive IoT Connectivity',
      description: 'Connect millions of devices with efficient, low-power communication.',
      benefits: ['1M devices/km²', 'Low power consumption', 'Long battery life', 'Cost-effective'],
      link: '/5g-iot-connectivity'
    }
  ]

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Revolutionize manufacturing with 5G-powered automation, real-time monitoring, and predictive maintenance.',
      metrics: ['40% efficiency increase', '60% downtime reduction', '30% cost savings'],
      icon: <Cpu className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Enable connected and autonomous vehicles with ultra-reliable, low-latency 5G communication.',
      metrics: ['99.999% reliability', '1ms latency', 'V2X communication'],
      icon: <Car className="w-6 h-6 text-emerald-400" />
    },
    {
      title: 'Smart Cities',
      description: 'Build intelligent cities with 5G infrastructure supporting traffic management, public safety, and utilities.',
      metrics: ['50% traffic reduction', '30% energy savings', 'Real-time monitoring'],
      icon: <Building className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Healthcare Innovation',
      description: 'Transform healthcare with remote surgery, telemedicine, and real-time patient monitoring.',
      metrics: ['Remote surgery capability', 'Real-time diagnostics', 'Enhanced patient care'],
      icon: <Heart className="w-6 h-6 text-pink-400" />
    }
  ]

  const pricing = [
    {
      name: '5G Starter',
      price: '$5,000',
      period: '/month',
      description: 'Essential 5G services for small to medium businesses',
      features: [
        'Basic 5G connectivity',
        'Standard support',
        'Basic monitoring',
        'Email support',
        'Monthly reports',
        'Standard SLA'
      ],
      popular: false
    },
    {
      name: '5G Professional',
      price: '$15,000',
      period: '/month',
      description: 'Advanced 5G solutions for growing enterprises',
      features: [
        'Everything in Starter',
        'Private 5G networks',
        'Edge computing',
        'Priority support',
        'Custom configurations',
        'Advanced monitoring',
        'IoT integration',
        'Enhanced SLA'
      ],
      popular: true
    },
    {
      name: '5G Enterprise',
      price: '$35,000',
      period: '/month',
      description: 'Complete 5G transformation for large organizations',
      features: [
        'Everything in Professional',
        'Dedicated infrastructure',
        'Custom applications',
        '24/7 dedicated support',
        'White-label solutions',
        'Advanced analytics',
        'Multi-site deployment',
        'Premium SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Williams',
      company: 'TechManufacturing Corp',
      role: 'CTO',
      content: '5G implementation transformed our manufacturing operations. We achieved 40% efficiency gains and reduced downtime by 60%.',
      rating: 5,
      avatar: 'SW'
    },
    {
      name: 'James Chen',
      company: 'SmartCity Solutions',
      role: 'Infrastructure Director',
      content: 'The 5G network infrastructure exceeded our expectations. Our smart city initiatives are now running at peak performance.',
      rating: 5,
      avatar: 'JC'
    },
    {
      name: 'Maria Rodriguez',
      company: 'HealthTech Innovations',
      role: 'CEO',
      content: '5G enabled us to perform remote surgeries with zero latency. The technology is truly revolutionary for healthcare.',
      rating: 5,
      avatar: 'MR'
    }
  ]

  return (
    <>
      <Helmet>
        <title>5G Implementation - Next-Generation Network Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge 5G implementation services. Ultra-low latency, massive IoT connectivity, and edge computing solutions for the future." />
        <meta name="keywords" content="5G implementation, 5G networks, edge computing, IoT connectivity, network infrastructure, private 5G, mobile applications, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/5g-implementation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
            <Network className="w-4 h-4" />
            <span>Next-Generation 5G Solutions</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            5G Implementation
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Excellence
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge 5G technology including ultra-low latency networks, 
            massive IoT connectivity, and edge computing solutions.
            <br />
            <span className="text-cyan-400 font-semibold">Experience the future of connectivity with 1ms latency and 10 Gbps speeds.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <span>Start 5G Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/demo" 
              className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>View Demo</span>
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">5G Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              From network infrastructure to mobile applications, we provide end-to-end 5G implementation 
              services that unlock the full potential of next-generation connectivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold text-lg">
                    {service.price}
                  </span>
                  <Link 
                    to={service.link}
                    className="group/link flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5G Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-cyan-400/30">
              <Zap className="w-4 h-4" />
              <span>5G Technology Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">5G Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Experience the power of 5G technology with ultra-low latency, massive connectivity, 
              and unprecedented speeds that transform how businesses operate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fiveGFeatures.map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-3">
                  <div className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-xs">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={feature.link}
                    className="block w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Explore Feature
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              See how leading industries leverage 5G technology to drive innovation, 
              improve efficiency, and create new business opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2 text-cyan-400 font-semibold">
                      <TrendingUp className="w-4 h-4" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1)_0%,transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">5G Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Choose the perfect 5G solution for your business needs. All plans include our core 5G services 
              with no hidden fees or setup costs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover:bg-white/20'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Join industry leaders who trust Zion Tech Group for their 5G implementation and digital transformation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
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
                  Ready to Embrace <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">5G Technology?</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Let's discuss how our 5G implementation services can transform your business operations 
                  and unlock new opportunities for growth and innovation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Start 5G Journey</span>
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
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-300" />
                    <span className="text-sm">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-300" />
                    <span className="text-sm">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-pink-300" />
                    <span className="text-sm">Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FiveGImplementationPage;