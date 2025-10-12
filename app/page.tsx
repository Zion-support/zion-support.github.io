'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  BarChart3, 
  Users, 
  Globe, 
  MessageSquare, 
  TrendingUp, 
  Star, 
  Rocket 
} from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

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
  ];

  const services = [
    {
      title: 'AI Content Generation',
      description: 'Transform your content strategy with our advanced AI-powered content generation tools.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      link: '/ai-content-generation',
      features: ['Automated content creation', 'SEO optimization', 'Multi-language support']
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'IT Services & Solutions',
      description: 'Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development.',
      benefits: ['Cloud Migration - Starting at $2,500', 'Cybersecurity - $1,500/month', 'Mobile Development - Starting at $5,000', 'Data Analytics - $2,000/month'],
      link: '/it-services'
    },
    {
      title: 'Cloud Services',
      description: 'Scalable, secure, and reliable cloud infrastructure solutions for your business.',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      link: '/cloud-services',
      features: ['Scalable infrastructure', '99.9% uptime', 'Global CDN']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with our comprehensive cybersecurity services and monitoring.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      link: '/cybersecurity',
      features: ['Threat detection', 'Security audits', 'Compliance management']
    },
    {
      title: '5G Implementation',
      description: 'Leverage the power of 5G technology for ultra-fast connectivity and IoT solutions.',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      link: '/5g-implementation',
      features: ['Ultra-fast speeds', 'IoT connectivity', 'Edge computing']
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics platform.',
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      link: '/data-analytics',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards']
    }
  ];

  const additionalServices = [
    { name: 'Web Development', link: '/web-development' },
    { name: 'Mobile Development', link: '/mobile-development' },
    { name: 'DevOps', link: '/devops' },
    { name: 'IT Consulting', link: '/it-consulting' },
    { name: 'Blockchain Solutions', link: '/blockchain' },
    { name: 'IoT Development', link: '/iot' }
  ];

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
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms. Transform your business with cutting-edge technology from Zion Tech Group." />
        <meta name="keywords" content="AI solutions, IT services, 5G implementation, micro SAAS, cloud migration, cybersecurity, mobile development, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
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
                ))}
              </div>
            </div>
          </section>

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
                      {service.features?.map((feature, featureIndex) => (
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
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
    </>
  );
}