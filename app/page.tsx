'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Smartphone,
  Database,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Clock,
  Phone,
  Mail,
  MapPin,
  Play,
  Code,
  Settings,
  Target,
  Heart,
  DollarSign,
  Cpu,
  Workflow,
  Eye,
  MessageSquare,
  FileText,
  Lock,
  Wifi,
  Server,
  Package,
  Mic,
  Calendar,
  CheckSquare,
  MessageCircle,
  ShoppingCart,
  Headphones,
  Box,
  Monitor,
  Link as LinkIcon
} from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  const [currentService, setCurrentService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions for modern businesses',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with advanced security solutions',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Unlock insights from your data with powerful analytics tools',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const microSaasServices = [
    {
      icon: MessageSquare,
      title: 'Zion Chat AI Pro',
      description: 'Advanced AI customer support platform',
      price: '$99/month',
      rating: 4.8,
      users: '1,800+'
    },
    {
      icon: FileText,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform',
      price: '$49/month',
      rating: 4.9,
      users: '2,500+'
    },
    {
      icon: BarChart3,
      title: 'Zion Analytics Intelligence',
      description: 'AI-powered business intelligence platform',
      price: '$79/month',
      rating: 4.7,
      users: '3,200+'
    },
    {
      icon: Target,
      title: 'Zion Lead Magnet Pro',
      description: 'Advanced lead generation platform',
      price: '$89/month',
      rating: 4.8,
      users: '2,300+'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '99.9%', label: 'Uptime SLA', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Headphones }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions | Leading Technology Provider</title>
        <meta name="description" content="Leading provider of AI solutions, cloud infrastructure, cybersecurity, and micro SaaS tools. Transform your business with cutting-edge technology and expert services." />
        <meta name="keywords" content="AI solutions, IT services, cloud migration, cybersecurity, micro saas, business automation, data analytics" />
        <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta property="og:description" content="Transform your business with our cutting-edge AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="text-center">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                    <Zap className="w-4 h-4 mr-2" />
                    Leading AI & IT Solutions Provider
                  </div>
                  <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-enhanced">
                    Zion Tech Group
                  </h1>
                  <p className="text-2xl md:text-3xl text-cyan-400 mb-8 font-medium">
                    Transform Your Business with AI & IT Excellence
                  </p>
                  <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                    We deliver cutting-edge AI solutions, robust cloud infrastructure, and innovative micro SaaS tools 
                    that drive digital transformation and accelerate business growth. Trusted by 500+ companies worldwide.
                  </p>
                </div>
                
                <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
                  >
                    <Play className="w-5 h-5 inline mr-2" />
                    Get Started Today
                  </Link>
                  <Link
                    to="/services"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <Eye className="w-5 h-5 inline mr-2" />
                    Explore Services
                  </Link>
                </div>

                {/* Contact Info */}
                <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <a href="tel:+13024640950" className="flex items-center hover:text-cyan-400 transition-colors">
                    <Phone className="w-5 h-5 mr-2" />
                    (302) 464-0950
                  </a>
                  <a href="mailto:kleber@ziontechgroup.com" className="flex items-center hover:text-cyan-400 transition-colors">
                    <Mail className="w-5 h-5 mr-2" />
                    kleber@ziontechgroup.com
                  </a>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    364 E Main St STE 1008, Middletown DE 19709
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Service Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`cyber-card hover-lift transition-all duration-500 ${
                      currentService === index ? 'scale-105 shadow-2xl shadow-cyan-500/20' : ''
                    }`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 bg-white/5 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Trusted by <span className="text-cyan-400">500+</span> Companies
                </h2>
                <p className="text-xl text-gray-300">Delivering excellence across industries worldwide</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Micro SaaS Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Our <span className="text-cyan-400">Micro SaaS</span> Solutions
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Powerful, affordable tools designed to streamline your business operations and boost productivity
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {microSaasServices.map((service, index) => (
                  <div key={index} className="cyber-card hover-lift">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-cyan-400 font-semibold">{service.price}</div>
                      <div className="text-sm text-gray-400">{service.users}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <Link
                  to="/micro-saas"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  View All Micro SaaS Solutions
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies that trust Zion Tech Group for their digital transformation journey. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                >
                  <Calendar className="w-5 h-5 inline mr-2" />
                  Schedule Free Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  <Phone className="w-5 h-5 inline mr-2" />
                  Call: (302) 464-0950
                </a>
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