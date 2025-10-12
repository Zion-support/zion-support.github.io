'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Cloud, 
  Shield, 
  Database, 
  Smartphone, 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Clock,
  Target,
  Award,
  Settings,
  Globe,
  Zap,
  Cpu,
  Wifi,
  MessageSquare,
  FileText,
  Camera,
  Mail,
  Phone,
  MapPin,
  DollarSign
} from 'lucide-react';

export default function ITServicesPage() {
  const itServices = [
    {
      name: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices',
      price: 'Starting at $5,000',
      features: ['Responsive design', 'Performance optimization', 'SEO friendly', 'Cross-browser compatibility'],
      icon: Code,
      path: '/web-development',
      category: 'Development',
      rating: 4.9,
      reviews: 156,
      duration: '2-4 weeks'
    },
    {
      name: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for your business needs',
      price: 'Starting at $3,500',
      features: ['Automated deployment', 'Infrastructure as code', 'Monitoring setup', 'Team training'],
      icon: Cloud,
      path: '/cloud-infrastructure',
      category: 'Infrastructure',
      rating: 4.8,
      reviews: 134,
      duration: '1-2 weeks'
    },
    {
      name: 'DevOps Solutions',
      description: 'Streamline your development and deployment processes',
      price: 'Starting at $3,500',
      features: ['Automated deployment', 'Infrastructure as code', 'Monitoring setup', 'Team training'],
      icon: Code,
      path: '/devops-solutions',
      category: 'DevOps',
      rating: 4.7,
      reviews: 98,
      duration: '2-3 weeks'
    },
    {
      name: 'Cybersecurity Services',
      description: 'Comprehensive security assessment, implementation, and ongoing monitoring for your business',
      price: 'Starting at $2,500',
      features: ['Security audit', 'Penetration testing', 'Compliance certification', 'Ongoing monitoring', 'Incident response', 'Staff training'],
      icon: Shield,
      path: '/cybersecurity',
      category: 'Security',
      rating: 4.9,
      reviews: 189,
      duration: '2-3 weeks'
    },
    {
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      price: 'Starting at $8,000',
      features: ['iOS & Android development', 'Cross-platform solutions', 'App store optimization', 'Maintenance support', 'UI/UX design', 'Backend integration'],
      icon: Smartphone,
      path: '/mobile-development',
      category: 'Mobile',
      rating: 4.8,
      reviews: 142,
      duration: '4-8 weeks'
    },
    {
      name: 'API Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation',
      price: 'Starting at $4,000',
      features: ['REST & GraphQL', 'API documentation', 'Rate limiting', 'Analytics dashboard'],
      icon: Database,
      path: '/api-development',
      category: 'Backend',
      rating: 4.7,
      reviews: 87,
      duration: '2-3 weeks'
    },
    {
      name: 'Database Management',
      description: 'Database design, optimization, and maintenance services',
      price: 'Starting at $1,500',
      features: ['Performance tuning', 'Backup strategies', 'Security hardening', 'Migration support'],
      icon: Database,
      path: '/database-management',
      category: 'Database',
      rating: 4.6,
      reviews: 76,
      duration: '1-2 weeks'
    },
    {
      name: 'Data Analytics',
      description: 'Transform your data into actionable business insights',
      price: 'Starting at $6,000',
      features: ['Data visualization', 'Predictive analytics', 'Custom dashboards', 'Real-time reporting'],
      icon: BarChart3,
      path: '/data-analytics',
      category: 'Analytics',
      rating: 4.8,
      reviews: 112,
      duration: '3-4 weeks'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Target className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <MessageSquare className="w-6 h-6" /> },
    { number: '50+', label: 'Expert Team Members', icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Professional IT Solutions & Development</title>
        <meta name="description" content="Comprehensive IT services including web development, cloud infrastructure, cybersecurity, mobile apps, and data analytics. Professional solutions for your business needs." />
        <meta name="keywords" content="IT services, web development, cloud infrastructure, cybersecurity, mobile development, data analytics, zion tech group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT services including web development, cloud infrastructure, and cybersecurity." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-it-services.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Services - Zion Tech Group" />
        <meta name="twitter:description" content="Comprehensive IT services including web development, cloud infrastructure, and cybersecurity." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-it-services.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase animate-pulse">
                  💻 Professional IT Solutions
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 relative">
                <span className="bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent">
                  IT Services & Solutions
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-lg opacity-50 animate-pulse"></div>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
                Comprehensive IT services designed to accelerate your digital transformation and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
                  🚀 Our IT Services
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4 relative">
                <span className="bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent">
                  Professional IT Solutions
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-lg opacity-30"></div>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 relative overflow-hidden">
                    {/* Animated border effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                            <service.icon className="w-8 h-8 text-cyan-400" />
                          </div>
                          <div>
                            <span className="text-sm text-cyan-400 font-semibold">{service.category}</span>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <span className="text-sm text-gray-300">{service.rating}</span>
                              <span className="text-sm text-gray-400">({service.reviews})</span>
                            </div>
                          </div>
                        </div>
                        <span className="text-lg font-bold text-white">{service.price}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 group-hover:text-green-300 transition-colors" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <Award className="w-4 h-4" />
                          <span>Professional</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link 
                          to={service.path}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center flex items-center justify-center"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                        <Link 
                          to="/contact"
                          className="flex-1 border-2 border-white text-white px-4 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="relative group">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
                  {/* Animated background effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-block mb-6">
                      <span className="bg-white/20 text-white text-sm font-semibold tracking-wider uppercase px-4 py-2 rounded-full backdrop-blur-sm">
                        💻 Ready to Get Started?
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4 relative">
                      <span className="bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent">
                        Ready to Transform Your IT Infrastructure?
                      </span>
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </h2>
                    <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                      Let's discuss how our IT services can accelerate your digital transformation and drive business growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link 
                        to="/contact" 
                        className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/20 group"
                      >
                        <span className="flex items-center justify-center">
                          Get Free Consultation
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                      <Link 
                        to="/about" 
                        className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/20 group"
                      >
                        <span className="flex items-center justify-center">
                          Learn About Us
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    </div>
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