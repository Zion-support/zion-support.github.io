import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone, Brain, Cpu, Server, Wifi, Star, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from './components/SEOHead';

export default function HomePage() {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '50+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
    { number: '99%', label: 'Success Rate', icon: <Award className="w-6 h-6" /> },
    { number: '24/7', label: 'Support', icon: <Server className="w-6 h-6" /> }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our comprehensive AI services including content generation, chatbots, and automation.',
      benefits: ['AI Content Generator - $29/month', 'AI Chatbot Builder - $49/month', 'AI Analytics Dashboard - $39/month', 'AI Email Assistant - $19/month'],
      link: '/ai-services',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: 'IT Services & Solutions',
      description: 'Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development.',
      benefits: ['Cloud Migration - Starting at $2,500', 'Cybersecurity - $1,500/month', 'Mobile Development - Starting at $5,000', 'Data Analytics - $2,000/month'],
      link: '/it-services',
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      icon: <Cloud className="w-8 h-8 text-orange-400" />,
      title: 'Cloud Services',
      description: 'Professional cloud services including migration, infrastructure setup, security, and optimization.',
      benefits: ['Cloud Migration - $1,200/month', 'Infrastructure Setup - $3,000', 'Security Solutions - $800/month', 'Cost Optimization - $500/month'],
      link: '/cloud-services',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: <Wifi className="w-8 h-8 text-purple-400" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds and low latency.',
      benefits: ['Ultra-Fast Speeds - 10+ Gbps', 'Low Latency - 1ms', 'IoT Integration - 1M+ devices/km²', 'Edge Computing Solutions'],
      link: '/5g-implementation',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-yellow-400" />,
      title: 'Digital Transformation',
      description: 'Transform your business for the digital age with comprehensive digital transformation services.',
      benefits: ['Process Automation - $2,000/month', 'Digital Workforce - $1,500/month', 'Customer Experience - $1,800/month', 'Data Strategy - $2,500/month'],
      link: '/digital-transformation',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <Cpu className="w-8 h-8 text-indigo-400" />,
      title: 'Micro SAAS Solutions',
      description: 'Powerful micro SaaS tools designed to streamline your business operations and boost productivity.',
      benefits: ['AI Task Manager - $15/month', 'AI Expense Tracker - $12/month', 'AI Password Manager - $8/month', 'AI Invoice Generator - $20/month'],
      link: '/micro-saas-services',
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];

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
      company: 'DataFlow Solutions',
      content: 'Their AI solutions helped us automate 80% of our processes. Incredible efficiency gains.',
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. Transform your business with cutting-edge technology."
        keywords="AI solutions, IT services, digital transformation, cloud computing, 5G implementation, micro SAAS, artificial intelligence, business automation"
      />
      
      {/* Hero Section with Futuristic Background */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
              Advanced <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">AI & IT Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transform your business with cutting-edge artificial intelligence, 5G implementation, and enterprise-grade IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats Section with Neon Effects */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2 group">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                  <div className="flex justify-center mb-2 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Futuristic Cards */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Core Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link} className="group">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-cyan-500/10 group-hover:-translate-y-2">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg`}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
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

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Don't just take our word for it - hear from businesses that have transformed with our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Neon Effects */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our AI and IT solutions can drive your success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
