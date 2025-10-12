<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Cloud, Smartphone, Cpu, Database, BarChart3, Users, Settings, Globe, Lock, Code2, MessageSquare, Target, TrendingUp, Star, Sparkles, Rocket } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function HomePage() {
  const stats = [
    { number: '1,200+', label: 'Projects Completed', icon: <Rocket className="w-6 h-6" /> },
    { number: '99.8%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Globe className="w-6 h-6" /> },
    { number: '150+', label: 'Expert Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-6 h-6" /> },
    { number: '300%', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '48hr', label: 'Response Time', icon: <MessageSquare className="w-6 h-6" /> }
  ]

  const services = [
    {
      title: 'AI Smart Scheduler',
      description: 'Intelligent scheduling that learns from your patterns and optimizes meetings automatically.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      link: '/ai-smart-scheduler',
      features: ['AI-powered optimization', 'Team coordination', 'Auto-optimization']
    },
    {
      title: 'AI E-commerce Optimizer Pro',
      description: 'Boost sales by up to 40% with AI-powered e-commerce optimization and personalization.',
      icon: <MessageSquare className="w-8 h-8 text-orange-400" />,
      link: '/ai-ecommerce-optimizer-pro',
      features: ['Revenue growth', 'Customer insights', 'Cart optimization']
    },
    {
      title: 'Advanced Security Suite',
      description: 'Comprehensive cybersecurity with AI threat detection and 24/7 monitoring.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      link: '/advanced-security-suite',
      features: ['360° protection', 'AI threat detection', 'Compliance ready']
    },
    {
      title: '5G Smart City Solutions',
      description: 'Transform cities with 5G-powered smart infrastructure and AI-driven analytics.',
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      link: '/5g-smart-city-solutions',
      features: ['Ultra-fast connectivity', 'Smart infrastructure', 'Citizen engagement']
    },
    {
      title: 'AI Analytics Dashboard Pro',
      description: 'Transform data into actionable insights with AI-powered analytics and visualization.',
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      link: '/ai-analytics-dashboard-pro',
      features: ['AI-powered insights', 'Real-time analytics', 'Predictive analytics']
    },
    {
      title: 'Cloud Migration Pro',
      description: 'Expert cloud migration services with zero downtime guarantee and security-first approach.',
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      link: '/cloud-migration-pro',
      features: ['Zero-downtime migration', 'Security-first approach', 'Performance optimization']
    }
  ]

  const additionalServices = [
<<<<<<< HEAD
    { name: 'AI Content Moderation Pro', link: '/ai-content-moderation-pro' },
=======
    { name: 'Micro SAAS Services', link: '/micro-saas-services' },
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-0389
    { name: 'Web Development', link: '/web-development' },
    { name: 'Mobile Development', link: '/mobile-development' },
    { name: 'DevOps', link: '/devops' },
    { name: 'IT Consulting', link: '/it-consulting' },
    { name: 'Blockchain Solutions', link: '/blockchain' },
    { name: 'IoT Development', link: '/iot' },
    { name: '5G Implementation', link: '/5g-implementation' },
    { name: 'Data Analytics', link: '/data-analytics' },
    { name: 'Cloud Services', link: '/cloud-services' },
    { name: 'Cybersecurity', link: '/cybersecurity' },
    { name: 'AI Content Generation', link: '/ai-content-generation' }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'InnovateLabs',
      content: 'Their cloud infrastructure is rock-solid. We\'ve had zero downtime since implementation.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'DataFlow Systems',
      content: 'The cybersecurity services gave us peace of mind. Our data has never been more secure.',
      rating: 5
    }
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Brain, Cloud, Shield, Database, Code, Smartphone, Cpu, Server, Wifi, BarChart3, Users, Clock, Star, Sparkles, Rocket, Target, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import FuturisticBackground from './components/FuturisticBackground'
import { NeonText, NeonButton, NeonCard, PulsingDot, AnimatedGradient } from './components/NeonEffects'
import { allServices } from './data/services'

const HomePage: React.FC = () => {
  // Get featured services from our data
  const featuredServices = allServices.filter(service => 
    ['ai-content-generator-pro', 'ai-chatbot-enterprise', 'ai-analytics-dashboard', 'ai-cybersecurity-suite', 'ai-crm-assistant', 'cloud-infrastructure'].includes(service.id)
  )

  const services = [
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      link: '/ai-services',
      count: allServices.filter(s => s.category === 'ai').length
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud infrastructure, cybersecurity, and custom software development.',
      link: '/it-services',
      count: allServices.filter(s => s.category === 'it').length
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-500" />,
      title: 'Micro SAAS',
      description: 'Specialized AI-powered tools and applications designed for specific business needs and rapid deployment.',
      link: '/micro-saas',
      count: allServices.filter(s => s.category === 'micro-saas').length
    }
  ]

  const features = [
    { icon: <Clock className="w-6 h-6 text-cyan-400" />, text: '24/7 Expert Support' },
    { icon: <Sparkles className="w-6 h-6 text-purple-400" />, text: 'Cutting-edge Technology' },
    { icon: <TrendingUp className="w-6 h-6 text-green-400" />, text: 'Scalable Solutions' },
    { icon: <Target className="w-6 h-6 text-orange-400" />, text: 'Proven Track Record' },
    { icon: <Code className="w-6 h-6 text-blue-400" />, text: 'Custom Development' },
    { icon: <Shield className="w-6 h-6 text-red-400" />, text: 'Security First Approach' }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Rocket className="w-8 h-8" /> },
    { number: '50+', label: 'Happy Clients', icon: <Users className="w-8 h-8" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-8 h-8" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-8 h-8" /> }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
        <title>Zion Tech Group - AI & IT Solutions for the Future</title>
        <meta name="description" content="Leading provider of AI, cloud services, cybersecurity, and 5G solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, cloud services, cybersecurity, 5G, IT consulting, data analytics" />
      </Helmet>

      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Welcome to the{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Future
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business with cutting-edge AI, cloud services, cybersecurity, and 5G solutions. 
                We deliver innovation that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
=======
        <title>Zion Tech Group - AI & IT Solutions for Modern Businesses</title>
        <meta name="description" content="Leading provider of AI and IT solutions. We help businesses transform with cutting-edge technology including AI services, cloud computing, cybersecurity, and more." />
        <meta name="keywords" content="AI services, IT solutions, cloud computing, cybersecurity, software development, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen relative overflow-hidden">
        <FuturisticBackground />
        {/* Hero Section */}
        <section className="relative z-10 pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="mb-6">
                <PulsingDot color="#8b5cf6" size={12} className="inline-block mr-2" />
                <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Next-Gen Technology Solutions</span>
                <PulsingDot color="#06b6d4" size={12} className="inline-block ml-2" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Transform Your Business with
                <br />
                <NeonText className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent" intensity="high">
                  AI & IT Solutions
                </NeonText>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                We help businesses leverage cutting-edge technology to drive growth, 
                improve efficiency, and stay ahead of the competition with our comprehensive suite of 
                <span className="text-cyan-400 font-semibold"> AI-powered services</span> and 
                <span className="text-purple-400 font-semibold"> enterprise IT solutions</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton 
                  variant="primary" 
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </NeonButton>
                <NeonButton 
                  variant="secondary" 
                  size="lg"
                  onClick={() => window.location.href = '/about'}
                >
                  Learn More
                </NeonButton>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
<<<<<<< HEAD
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
=======
        <section className="relative z-10 py-12 sm:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <NeonCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    <NeonText intensity="medium">{stat.number}</NeonText>
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </NeonCard>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative z-10 py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                <NeonText intensity="medium">Our Services</NeonText>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive technology solutions for modern businesses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <NeonCard key={index} className="group hover:scale-105 transition-all duration-300">
                  <div className="mb-4 flex items-center justify-between">
                    {service.icon}
                    <span className="text-cyan-400 text-sm font-semibold bg-cyan-400/10 px-2 py-1 rounded-full">
                      {service.count} Services
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center group"
                  >
                    Learn More 
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </NeonCard>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                <NeonText intensity="medium">Featured Solutions</NeonText>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Discover our most popular AI and IT solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <NeonCard key={index} className="group hover:scale-105 transition-all duration-300">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-cyan-400 text-sm font-semibold bg-cyan-400/10 px-2 py-1 rounded-full">
                        {service.category.toUpperCase()}
                      </span>
                      <span className="text-green-400 text-sm font-semibold">
                        {service.price}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <Link 
                      to={service.path}
                      className="text-purple-400 hover:text-purple-300 transition-colors flex items-center text-sm"
                    >
                      Learn More 
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      Call Now
                    </a>
                  </div>
                </NeonCard>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Core Services
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Comprehensive solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                More Services
              </h2>
              <p className="text-gray-300">
                Explore our full range of technology solutions
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {additionalServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-4 text-center transition-colors border border-slate-700 hover:border-cyan-500/30"
                >
                  <span className="text-white text-sm font-medium">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-gray-300">
                Trusted by businesses worldwide
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
=======
        {/* Features Section */}
        <section className="relative z-10 py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                <NeonText intensity="medium">Why Choose Us?</NeonText>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                We deliver exceptional results with our proven approach
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <NeonCard key={index} className="flex items-center group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <span className="text-gray-300 font-medium">{feature.text}</span>
                </NeonCard>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let's discuss how our solutions can accelerate your digital transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
=======
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <AnimatedGradient className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  <NeonText intensity="high">Ready to Transform Your Business?</NeonText>
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our AI and IT solutions can help your business 
                  achieve its goals and stay competitive in today's market.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <NeonButton 
                    variant="accent" 
                    size="lg"
                    onClick={() => window.location.href = '/contact'}
                    className="bg-white text-purple-600 hover:bg-gray-100"
                  >
                    Get Free Consultation
                  </NeonButton>
                  <NeonButton 
                    variant="secondary" 
                    size="lg"
                    onClick={() => window.location.href = '/pricing'}
                    className="border-2 border-white text-white hover:bg-white/10"
                  >
                    View Pricing
                  </NeonButton>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-white/80 text-sm mb-2">Contact us directly:</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      📞 +1 302 464 0950
                    </a>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      ✉️ kleber@ziontechgroup.com
                    </a>
                  </div>
                  <p className="text-white/60 text-xs mt-2">
                    364 E Main St STE 1008, Middletown DE 19709
                  </p>
                </div>
              </AnimatedGradient>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default HomePage
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5683
