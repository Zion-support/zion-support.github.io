import React from 'react'
import SEOHead from './components/SEOHead'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Cloud, Smartphone, Cpu, Database, Star, Sparkles, Rocket, Wifi, Globe, Code } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function HomePage() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our comprehensive AI services including content generation, chatbots, and automation.',
      benefits: ['AI Content Generation - $500/month', 'Chatbot Development - $1,200', 'Process Automation - $2,000/month', 'AI Analytics - $800/month'],
      link: '/ai-services',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: 'IT Services & Solutions',
      description: 'Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development.',
      benefits: ['Cloud Migration - Starting at $2,500', 'Cybersecurity - $1,500/month', 'Mobile Development - Starting at $5,000', 'Data Analytics - $2,000/month'],
      link: '/it-services',
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      title: 'Cloud Services',
      description: 'Professional cloud services including migration, infrastructure setup, security, and optimization.',
      benefits: ['Cloud Migration - $1,200/month', 'Infrastructure Setup - $3,000', 'Security Solutions - $800/month', 'Cost Optimization - $500/month'],
      link: '/cloud-services',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Wifi className="w-8 h-8 text-orange-400" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds and low latency.',
      benefits: ['Ultra-Fast Speeds - 10+ Gbps', 'Low Latency - 1ms', 'IoT Integration - 1M+ devices/km²', 'Edge Computing Solutions'],
      link: '/5g-implementation',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Code className="w-8 h-8 text-yellow-400" />,
      title: 'Digital Transformation',
      description: 'Transform your business for the digital age with comprehensive digital transformation services.',
      benefits: ['Process Automation - $2,000/month', 'Digital Workforce - $1,500/month', 'Customer Experience - $1,800/month', 'Data Strategy - $2,500/month'],
      link: '/digital-transformation',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-400" />,
      title: 'Micro SAAS Services',
      description: 'Powerful micro software solutions designed to solve specific business problems with AI intelligence.',
      benefits: ['AI Task Manager - $19/month', 'AI Expense Tracker - $15/month', 'AI Password Manager - $12/month', 'AI Invoice Generator - $25/month'],
      link: '/micro-saas-services',
      gradient: 'from-pink-500 to-rose-500'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The results exceeded our expectations.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      content: 'Their AI solutions have revolutionized our business processes. Highly recommended!',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner.',
      rating: 5,
      avatar: 'ER'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Rocket className="w-6 h-6" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Cpu className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Globe className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. Transform your business with cutting-edge technology."
        keywords="AI solutions, IT services, digital transformation, cloud computing, 5G implementation, micro SAAS, artificial intelligence, business automation"
      />
      
      {/* Hero Section with Futuristic Design */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-300 text-sm font-medium">Next-Generation Technology Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">AI & IT Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence, 5G implementation, and enterprise-grade IT solutions. 
              Experience the future of technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Started Today
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
        </div>
      </section>

      {/* Stats Section with Neon Effects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center px-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 group-hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex justify-center mb-3">
                      <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 bg-gradient-to-r ${feature.gradient} rounded-xl mr-4`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={feature.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Trusted by leading companies worldwide for our innovative solutions and exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies that have already transformed their operations with our cutting-edge AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}