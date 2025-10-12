'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Cloud, Database, Smartphone, Brain, Cpu, Wifi, Code, Star, TrendingUp, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from './components/SEOHead';

export default function HomePage() {
  const stats = [
    { number: '1000+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' },
    { number: '50+', label: 'AI Services' },
    { number: '30+', label: 'Micro SAAS' }
  ];

  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Services & Solutions',
      description: 'Revolutionary AI-powered solutions including content generation, chatbots, analytics, and automation.',
      benefits: ['AI Content Generator - $99/month', 'AI Chatbot Builder - $199/month', 'AI Analytics Dashboard - $299/month', 'AI Automation Suite - $499/month'],
      link: '/ai-services',
      featured: true
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: 'Micro SAAS Services',
      description: 'Specialized micro software solutions for productivity, management, and business optimization.',
      benefits: ['AI Task Manager - $29/month', 'AI Expense Tracker - $19/month', 'AI Password Manager - $39/month', 'AI Invoice Generator - $49/month'],
      link: '/micro-saas-services',
      featured: true
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'IT Services & Solutions',
      description: 'Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development.',
      benefits: ['Cloud Migration - Starting at $2,500', 'Cybersecurity - $1,500/month', 'Mobile Development - Starting at $5,000', 'Data Analytics - $2,000/month'],
      link: '/it-services'
    },
    {
      icon: <Cloud className="w-8 h-8 text-orange-500" />,
      title: 'Cloud Services',
      description: 'Professional cloud services including migration, infrastructure setup, security, and optimization.',
      benefits: ['Cloud Migration - $1,200/month', 'Infrastructure Setup - $3,000', 'Security Solutions - $800/month', 'Cost Optimization - $500/month'],
      link: '/cloud-services'
    },
    {
      icon: <Wifi className="w-8 h-8 text-red-500" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds and low latency.',
      benefits: ['Ultra-Fast Speeds - 10+ Gbps', 'Low Latency - 1ms', 'IoT Integration - 1M+ devices/km²', 'Edge Computing Solutions'],
      link: '/5g-implementation'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-yellow-500" />,
      title: 'Digital Transformation',
      description: 'Transform your business for the digital age with comprehensive digital transformation services.',
      benefits: ['Process Automation - $2,000/month', 'Digital Workforce - $1,500/month', 'Customer Experience - $1,800/month', 'Data Strategy - $2,500/month'],
      link: '/digital-transformation'
    }
  ];

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge AI technology to automate and optimize your business processes with 99.9% accuracy.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security measures with end-to-end encryption to protect your sensitive data and systems.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
      title: 'Scalable Infrastructure',
      description: 'Cloud-native solutions that grow with your business and adapt to your changing needs seamlessly.'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: '24/7 Expert Support',
      description: 'Round-the-clock technical support from certified professionals to ensure your systems run smoothly.'
    },
    {
      icon: <Globe className="w-6 h-6 text-red-500" />,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized solutions and multi-language support.'
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: 'Proven Results',
      description: 'Over 1000+ successful projects with 99.9% client satisfaction rate and measurable ROI.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our productivity by 300% and reduced costs by 40%.',
      rating: 5,
      industry: 'Technology'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'Their AI automation suite helped us process 10x more data with 99.9% accuracy. The ROI was evident within the first month.',
      rating: 5,
      industry: 'Data Analytics'
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'Professional, reliable, and innovative. Their micro SAAS solutions streamlined our operations and saved us $50K annually.',
      rating: 5,
      industry: 'Software Development'
    },
    {
      name: 'David Kim',
      company: 'Global Finance Ltd.',
      content: 'The cybersecurity solutions provided by Zion Tech Group are top-notch. We feel completely secure with our data protection.',
      rating: 5,
      industry: 'Finance'
    },
    {
      name: 'Lisa Thompson',
      company: 'HealthTech Innovations',
      content: 'Their 5G implementation enabled us to deploy IoT solutions across our facilities. The speed and reliability are unmatched.',
      rating: 5,
      industry: 'Healthcare'
    },
    {
      name: 'Robert Martinez',
      company: 'E-commerce Plus',
      content: 'The digital transformation services revolutionized our customer experience. Sales increased by 250% in just 6 months.',
      rating: 5,
      industry: 'E-commerce'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Partner"
        description="Leading provider of AI-powered solutions, micro SAAS services, IT services, and digital transformation for modern businesses. Transform your business with cutting-edge technology. Contact us at +1 302 464 0950."
        keywords="AI solutions, micro SAAS, IT services, cloud computing, digital transformation, 5G implementation, cybersecurity, mobile development, AI automation, business intelligence"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Futuristic Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="relative pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-6">
                <span className="text-blue-300 text-sm font-medium">🚀 Leading Technology Innovation</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Advanced AI & IT Solutions
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
                Transform your business with cutting-edge artificial intelligence, micro SAAS services, 5G implementation, and enterprise-grade IT solutions. 
                <span className="text-blue-300 font-semibold"> Contact us: +1 302 464 0950</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25"
                >
                  Get Free Consultation
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

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2 py-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 mb-6">
              <span className="text-purple-300 text-sm font-medium">✨ Our Premium Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4 bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive technology solutions designed to accelerate your digital transformation with real-world pricing and proven results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={service.link} 
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 group hover:scale-105 ${
                  service.featured 
                    ? 'border-blue-400/50 hover:border-blue-400 shadow-lg shadow-blue-500/20' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      ⭐ Featured
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.benefits?.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 mb-6">
              <span className="text-green-300 text-sm font-medium">🚀 Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4 bg-gradient-to-r from-white via-green-100 to-blue-200 bg-clip-text text-transparent">
              Our Competitive Advantages
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              We deliver exceptional results through cutting-edge technology, expert support, and proven methodologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 mb-6">
              <span className="text-yellow-300 text-sm font-medium">💬 Client Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4 bg-gradient-to-r from-white via-yellow-100 to-orange-200 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Don't just take our word for it - hear from businesses that have transformed with our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  <p className="text-blue-300 text-xs font-medium mt-1">{testimonial.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse"></div>
              <div className="relative">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                  <span className="text-white text-sm font-medium">🚀 Ready to Get Started?</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 px-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
                  Let's discuss how our AI and IT solutions can drive your success. 
                  <span className="block mt-2 text-lg">Contact us: <span className="font-semibold">+1 302 464 0950</span> | <span className="font-semibold">kleber@ziontechgroup.com</span></span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-white/25"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="/micro-saas-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    View Our Services
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
