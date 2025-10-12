'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Globe, Mail, Video, FileText, Settings, MessageSquare, Mic, Target, TrendingUp, Sparkles, Rocket, Cpu, Database, BarChart3, Smartphone, Lock, Code2, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Workflow, Eye, Wifi, CheckSquare, ShoppingCart } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built with modern technologies',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const services = [
    {
      title: 'AI Social Media Manager',
      description: 'Transform your social media presence with AI-powered content creation and smart scheduling.',
      icon: <Globe className="w-8 h-8 text-pink-400" />,
      link: '/ai-social-media-manager',
      features: ['AI content creation', 'Smart scheduling', 'Multi-platform support'],
      price: 'Starting at $99/month'
    },
    {
      title: 'AI Email Marketing Automation',
      description: 'Boost engagement with AI-powered email campaigns, smart segmentation, and automation.',
      icon: <Mail className="w-8 h-8 text-blue-400" />,
      link: '/ai-email-marketing-automation',
      features: ['AI content generation', 'Smart segmentation', 'Automated workflows'],
      price: 'Starting at $149/month'
    },
    {
      title: 'AI Project Management Pro',
      description: 'Streamline project delivery with AI-powered task optimization and team management.',
      icon: <Settings className="w-8 h-8 text-indigo-400" />,
      link: '/ai-project-management-pro',
      features: ['AI task optimization', 'Smart team management', 'Predictive analytics'],
      price: 'Starting at $199/month'
    },
    {
      title: 'AI Customer Support Chatbot',
      description: 'Provide 24/7 intelligent support with AI-powered chatbots and natural language processing.',
      icon: <MessageSquare className="w-8 h-8 text-green-400" />,
      link: '/ai-customer-support-chatbot',
      features: ['24/7 availability', 'Natural language processing', 'Intelligent routing'],
      price: 'Starting at $79/month'
    },
    {
      title: 'AI Video Editor',
      description: 'Create professional videos with AI-powered editing, smart cuts, and auto-generated content.',
      icon: <Video className="w-8 h-8 text-violet-400" />,
      link: '/ai-video-editor',
      features: ['AI-powered editing', 'Smart cut detection', 'Auto-generated content'],
      price: 'Starting at $129/month'
    },
    {
      title: 'AI Invoice Generator',
      description: 'Streamline invoicing with AI-powered generation, automated billing, and payment integration.',
      icon: <FileText className="w-8 h-8 text-emerald-400" />,
      link: '/ai-invoice-generator',
      features: ['AI-powered generation', 'Automated billing', 'Payment integration'],
      price: 'Starting at $49/month'
    }
  ];

  const additionalServices = [
    { name: 'AI Expense Tracker', link: '/ai-expense-tracker', price: '$29/month' },
    { name: 'AI Smart Scheduler', link: '/ai-smart-scheduler', price: '$39/month' },
    { name: 'AI E-commerce Optimizer Pro', link: '/ai-ecommerce-optimizer-pro', price: '$179/month' },
    { name: 'Advanced Security Suite', link: '/advanced-security-suite', price: '$299/month' },
    { name: 'AI Analytics Dashboard Pro', link: '/ai-analytics-dashboard-pro', price: '$159/month' },
    { name: 'Cloud Migration Pro', link: '/cloud-migration-pro', price: 'Custom pricing' },
    { name: 'Web Development', link: '/web-development', price: 'From $5,000' },
    { name: 'Mobile Development', link: '/mobile-development', price: 'From $8,000' },
    { name: 'DevOps', link: '/devops', price: 'From $3,000/month' },
    { name: 'IT Consulting', link: '/it-consulting', price: '$200/hour' },
    { name: '5G Implementation', link: '/5g-implementation', price: 'Custom pricing' },
    { name: 'Data Analytics', link: '/data-analytics', price: 'From $2,500/month' }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions for the Future</title>
        <meta name="description" content="Leading provider of AI, cloud services, cybersecurity, and 5G solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, cloud services, cybersecurity, 5G, IT consulting, data analytics" />
        <meta property="og:title" content="Zion Tech Group - AI & IT Solutions for the Future" />
        <meta property="og:description" content="Leading provider of AI, cloud services, cybersecurity, and 5G solutions. Transform your business with cutting-edge technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - AI & IT Solutions for the Future" />
        <meta name="twitter:description" content="Leading provider of AI, cloud services, cybersecurity, and 5G solutions. Transform your business with cutting-edge technology." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "description": "Leading provider of AI and IT solutions",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "customer service",
              "email": "kleber@ziontechgroup.com"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "addressCountry": "US"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of AI and IT solutions with cutting-edge technology and expert consulting
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/services"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
                >
                  Explore Our Solutions
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Consultation
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <Link 
                    to="/services"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-block"
                  >
                    Learn More →
                  </Link>
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-4 sm:p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center mb-3 sm:mb-4">
                    {service.icon}
                    <h3 className="text-lg sm:text-xl font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">{service.description}</p>
                  <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-400 font-semibold text-sm">{service.price}</span>
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base"
                    >
                      Learn More
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                    </Link>
                  </div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {additionalServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-3 sm:p-4 text-center transition-colors border border-slate-700 hover:border-cyan-500/30 group"
                >
                  <div className="text-white text-xs sm:text-sm font-medium group-hover:text-cyan-400 transition-colors">{service.name}</div>
                  <div className="text-cyan-400 text-xs mt-1">{service.price}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional results through innovation, expertise, and unwavering commitment to your success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
                <p className="text-gray-300 leading-relaxed">
                  Rapid deployment and implementation with cutting-edge technologies and optimized processes.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300 leading-relaxed">
                  Bank-level security with comprehensive compliance and data protection measures.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300 leading-relaxed">
                  Certified professionals with years of experience in AI, cloud, and enterprise solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our AI and IT solutions can drive innovation and growth for your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Start Your Project
                  </Link>
                  <Link 
                    to="/about"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
