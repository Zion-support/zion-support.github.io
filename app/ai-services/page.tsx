import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Globe, Cloud, Database, Smartphone, Users, Lock, Bot } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with our advanced AI writing tools.',
      benefits: ['Blog Posts - $500/month', 'Social Media - $300/month', 'Email Campaigns - $200/month', 'Product Descriptions - $150/month'],
      link: '/ai-content-generation',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'AI Chatbot Builder',
      description: 'Build intelligent chatbots that understand and engage with your customers naturally.',
      benefits: ['Customer Support - $300/month', 'Sales Assistant - $500/month', 'HR Assistant - $400/month', 'Educational Bot - $350/month'],
      link: '/ai-chatbot-builder',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Brain className="w-8 h-8 text-indigo-400" />,
      title: 'AI Quantum Computing',
      description: 'Revolutionary quantum computing solutions powered by AI for solving complex optimization problems.',
      benefits: ['Quantum Algorithms - $15,000/project', 'Quantum Security - $25,000/setup', 'Quantum ML - $35,000/development', 'Hardware Integration - $5,000/month'],
      link: '/ai-quantum-computing',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Users className="w-8 h-8 text-violet-400" />,
      title: 'AI Metaverse Solutions',
      description: 'Build immersive virtual worlds with AI-powered interactions, realistic avatars, and VR/AR integration.',
      benefits: ['Virtual Worlds - $50,000/project', 'AI Avatars - $15,000/setup', 'VR/AR Integration - $12,000/setup', 'Virtual Commerce - $35,000/setup'],
      link: '/ai-metaverse-solutions',
      gradient: 'from-violet-500 to-pink-500'
    },
    {
      icon: <Lock className="w-8 h-8 text-teal-400" />,
      title: 'AI Blockchain Solutions',
      description: 'Decentralized applications with AI-powered smart contracts, DeFi protocols, and NFT platforms.',
      benefits: ['Smart Contracts - $5,000/contract', 'DeFi Protocols - $25,000/development', 'NFT Platforms - $50,000/development', 'DAO Development - $25,000/setup'],
      link: '/ai-blockchain-solutions',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: <Globe className="w-8 h-8 text-amber-400" />,
      title: 'AI IoT Solutions',
      description: 'Intelligent IoT solutions for smart devices, industrial automation, and environmental monitoring.',
      benefits: ['Smart Devices - $2,000/month', 'Industrial IoT - $8,000/month', 'Connected Vehicles - $15/vehicle/month', 'Environmental Monitoring - $2,000/setup'],
      link: '/ai-iot-solutions',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      icon: <Bot className="w-8 h-8 text-sky-400" />,
      title: 'AI Robotics Solutions',
      description: 'Advanced robotics with AI-powered autonomous navigation, computer vision, and manufacturing automation.',
      benefits: ['Autonomous Robots - $25,000/unit', 'RPA - $50,000/unit', 'Computer Vision - $12,000/setup', 'Manufacturing Robotics - $100,000/setup'],
      link: '/ai-robotics-solutions',
      gradient: 'from-sky-500 to-blue-500'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: 'AI Automation',
      description: 'Automate repetitive tasks and processes with intelligent AI-powered automation solutions.',
      benefits: ['Process Automation - $800/month', 'Workflow Optimization - $600/month', 'Task Automation - $400/month', 'Smart Scheduling - $300/month'],
      link: '/ai-automation',
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  const stats = [
    { number: '500+', label: 'AI Projects Completed', icon: <Brain className="w-6 h-6" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Accuracy Rate', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Support', icon: <Globe className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including content generation, chatbots, quantum computing, metaverse solutions, and more. Transform your business with AI." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI solutions, AI consulting, AI development" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Brain className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-300 text-sm font-medium">Artificial Intelligence Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">AI Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. From content generation to quantum computing, 
              we provide comprehensive AI services that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Get AI Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center px-2">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 group-hover:from-cyan-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive AI solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transform group-hover:scale-105">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient} bg-opacity-20 inline-block`}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]"></div>
              
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Harness AI?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4">
                  Transform your business with our comprehensive AI solutions. Get started with a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Get Free Consultation
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}