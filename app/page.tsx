'use client'
import React from 'react'
import SEOHead from './components/SEOHead'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import FuturisticBackground from './components/FuturisticBackground'
import FuturisticCard from './components/FuturisticCard'
import NeonButton from './components/NeonButton'
import AnimatedText from './components/AnimatedText'
import { ArrowRight, Zap, Shield, Globe, Database, Code, Cloud, Brain, Cpu, Rocket, Network, BarChart3, Bot, Lock, Star, CheckCircle, DollarSign, Users, Clock, Smartphone, TrendingUp, MessageSquare, FileText, Camera, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence to transform your business operations and drive innovation.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions designed for modern business needs.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics platform.'
    }
  ]

  const services = [
    {
      icon: <Code className="w-6 h-6 text-blue-500" />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business requirements.'
    },
    {
      icon: <Network className="w-6 h-6 text-green-500" />,
      title: 'IT Infrastructure',
      description: 'Robust and scalable IT infrastructure solutions for your organization.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      title: 'Business Intelligence',
      description: 'Data-driven insights to help you make informed business decisions.'
    },
    {
      icon: <Bot className="w-6 h-6 text-orange-500" />,
      title: 'AI Automation',
      description: 'Intelligent automation solutions to streamline your business processes.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      <FuturisticBackground />
      <SEOHead 
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered IT solutions, cloud infrastructure, cybersecurity, and digital transformation services."
        keywords="AI solutions, IT services, cloud computing, cybersecurity, digital transformation"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <AnimatedText 
              text="Welcome to" 
              className="block mb-4"
              speed={150}
            />
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Leading the future of technology with cutting-edge AI solutions, 
            robust IT infrastructure, and innovative digital transformation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton 
              to="/contact" 
              variant="primary"
              size="lg"
              className="flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </NeonButton>
            <NeonButton 
              to="/about" 
              variant="secondary"
              size="lg"
            >
              Learn More
            </NeonButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions that drive innovation and growth for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <FuturisticCard key={index} className="group">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <FuturisticCard className="bg-gradient-to-r from-purple-600 to-pink-600 border-purple-500/50">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our technology solutions can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton 
                  to="/contact" 
                  variant="accent"
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100"
                >
                  Contact Us
                </NeonButton>
                <NeonButton 
                  to="/ai-services" 
                  variant="secondary"
                  size="lg"
                >
                  Explore AI Services
                </NeonButton>
              </div>
            </FuturisticCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
