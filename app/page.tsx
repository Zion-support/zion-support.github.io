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
  ]

  return (
    <>
      <Helmet>
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
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
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
              ))}
            </div>
          </div>
        </section>

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
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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