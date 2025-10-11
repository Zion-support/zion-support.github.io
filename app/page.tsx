'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Mail, Code, Cloud, Smartphone, Eye, Cpu, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Wifi, MessageSquare, ShoppingCart, Rocket } from 'lucide-react';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions for business automation and optimization.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Cost Optimization']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Threat Detection', 'Security Audits', 'Compliance', 'Incident Response']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: ['Business Intelligence', 'Data Visualization', 'Real-time Analytics', 'Reporting']
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help you make informed decisions.',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Change Management']
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' }
  ];

  const aiServices = [
    { name: 'Machine Learning', description: 'Custom ML models for your business needs', icon: Brain },
    { name: 'Natural Language Processing', description: 'AI-powered text analysis and generation', icon: Code },
    { name: 'Computer Vision', description: 'Image recognition and analysis solutions', icon: Eye },
    { name: 'Predictive Analytics', description: 'Data-driven insights and forecasting', icon: BarChart },
    { name: 'AI Automation', description: 'Intelligent process automation', icon: Zap },
    { name: 'AI Consulting', description: 'Strategic AI implementation guidance', icon: Target }
  ];

  const itServices = [
    { name: 'Cloud Migration', description: 'Seamless cloud infrastructure migration', icon: Cloud },
    { name: 'DevOps', description: 'Continuous integration and deployment', icon: Settings },
    { name: 'Cybersecurity', description: 'Comprehensive security solutions', icon: Shield },
    { name: 'Database Management', description: 'Optimized database solutions', icon: Database },
    { name: 'API Development', description: 'RESTful and GraphQL APIs', icon: Code },
    { name: 'System Integration', description: 'Connect and optimize your systems', icon: Globe }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge AI solutions, cloud services, cybersecurity, and custom development. Transform your business with our innovative technology services." />
        <meta name="keywords" content="AI solutions, cloud services, cybersecurity, custom development, IT consulting, data analytics, technology company" />
        <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of cutting-edge AI and IT solutions" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section
            className={`text-center mb-16 transition-all duration-1000 ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium" role="doc-subtitle">
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leading provider of enterprise AI solutions, cloud services, cybersecurity, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth. We serve Fortune 500 companies,
                startups, and enterprises worldwide with proven results and 24/7 expert support.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12 px-4">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 border border-white/10">
                  <div className="text-2xl sm:text-3xl mb-3">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">AI-Powered Solutions</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 border border-white/10">
                  <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Proven Results</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 border border-white/10">
                  <div className="text-2xl sm:text-3xl mb-3">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 border border-white/10 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                  <div className="text-2xl sm:text-3xl mb-3">🌐</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Global Reach</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Serving clients worldwide with 24/7 support and multi-language capabilities</p>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
                  aria-label="Call us at (302) 464-0950"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Email Us
                </a>
                <Link 
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Get Free Consultation
                </Link>
              </div>
              
              {/* Contact Info */}
              <div className="mt-8 text-center">
                <p className="text-gray-300 text-sm mb-2">
                  📍 364 E Main St STE 1008, Middletown, DE 19709
                </p>
                <p className="text-gray-300 text-sm">
                  ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Our Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* AI Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              AI Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* IT Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              IT Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Complete IT solutions to modernize your infrastructure and drive business growth
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16" aria-labelledby="cta-heading">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10">
              <h2 id="cta-heading" className="text-2xl font-bold text-white mb-6">Get Free Consultation</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Ready to transform your business? Contact our experts for a free consultation and discover how our AI and IT solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                  aria-label="Call us at (302) 464-0950"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Email Us
                </a>
                <Link 
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
