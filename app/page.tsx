'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, Users, Globe, Code, BarChart, Target, Sparkles, Cpu, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, Rocket, Clock, Award, Lightbulb, Gauge, Phone } from 'lucide-react';

// Loading skeleton component
const ServiceCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
);

// Content promotion banner component
const ContentPromotionBanner = () => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 text-center">
    <p className="text-sm font-medium">
      🚀 New: AI-Powered Business Solutions - Transform Your Operations Today!
    </p>
  </div>
);

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence that learns, adapts, and delivers measurable results for your business.',
      color: 'from-purple-500 to-pink-600',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Computer Vision']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and cost-effective cloud solutions that grow with your business needs.',
      color: 'from-blue-500 to-cyan-600',
      benefits: ['AWS/Azure/GCP', 'Auto-scaling', '99.9% Uptime', 'Cost Optimization']
    },
    {
      icon: Shield,
      title: 'Advanced Cybersecurity',
      description: 'Comprehensive security solutions with AI-powered threat detection and 24/7 monitoring.',
      color: 'from-red-500 to-orange-600',
      benefits: ['Threat Detection', 'Compliance', 'Incident Response', 'Security Audits']
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Intelligent automation that reduces manual work by 80% and increases efficiency dramatically.',
      color: 'from-yellow-500 to-green-600',
      benefits: ['Workflow Automation', 'RPA', 'API Integration', 'Smart Scheduling']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics platform.',
      color: 'from-indigo-500 to-purple-600',
      benefits: ['Real-time Dashboards', 'Predictive Modeling', 'Custom Reports', 'Data Visualization']
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated team of certified professionals providing 24/7 support and consultation.',
      color: 'from-emerald-500 to-teal-600',
      benefits: ['24/7 Support', 'Certified Experts', 'Proactive Monitoring', 'Training & Documentation']
    }
  ];

  const services = [
    {
      title: 'AI Development',
      description: 'Custom AI solutions tailored to your business needs',
      icon: Brain,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Serverless Architecture', 'DevOps Automation']
    },
    {
      title: 'Security Solutions',
      description: 'Advanced cybersecurity to protect your business',
      icon: Shield,
      features: ['Threat Detection', 'Compliance Management', 'Security Audits', 'Incident Response']
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies',
      icon: Zap,
      features: ['Process Automation', 'Data Analytics', 'API Development', 'Integration Services']
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, digital transformation, enterprise software, cloud computing, cybersecurity" />
      </Helmet>

      <Navigation />
      
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {/* Hero Section */}
        <section className="text-center mb-16 relative">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
                🚀 Trusted by 500+ Companies Worldwide
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Transform Your Business with 
              <span className="block text-6xl md:text-8xl mt-2">AI & IT Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Leading provider of cutting-edge AI and IT solutions that drive innovation, 
              efficiency, and growth for businesses worldwide. Get results in 30 days or less.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-300">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>30-Day Results Guarantee</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>No Long-term Contracts</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/services" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-cyan-400 mr-1" />
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 text-green-400 mr-1" />
                <span>99% Success Rate</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-purple-400 mr-1" />
                <span>10+ Years Experience</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover how our AI and IT solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;